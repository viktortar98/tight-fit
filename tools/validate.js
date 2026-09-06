// Level validator. Two jobs:
//   1. Sanity: the vehicle starts clear, the target is inside the arena and
//      not occupied, the bay is bigger than the thing going into it.
//   2. Proof: a hybrid-A* search over (x, z, yaw[, trailerYaw]) that drives
//      the level using the game's own kinematics and collision boxes. If the
//      search cannot park it, the level does not ship.
//
// Usage: node tools/validate.js [levelId]

import { LEVELS } from '../src/levels.js';
import {
  VEHICLES, integrate, bodyRects, bodyRect, trailerRect,
  sweptWidth, combinationLength, trailerLength,
} from '../src/vehicle.js';
import { levelColliders, boundsRect } from '../src/colliders.js';
import { overlaps, rectInsideRect, rectDistance, normalizeAngle } from '../src/geom.js';

const TAU = Math.PI * 2;

// The difference probe, for constraint 1. `SHRINK=δ` trims δ metres off every
// side of every rectangle belonging to the *vehicle* — body, trailer, and the
// rectangle the bay has to contain. Nothing kinematic changes: wheelbase,
// lock, turning radius and swept path are identical, so every route keeps its
// shape and every gap in the level gets δ wider.
//
// So: **if a level's direction-change count falls when it is run this way,
// that count was a clearance.** If it holds, the cost is the shape of the free
// space, which is what constraint 1 says a level is allowed to be made of.
// The enforcement table listed constraint 1 as held by nothing until this.
const SHRINK = Number(process.env.SHRINK ?? 0);
const shrink = (r) => (SHRINK ? { ...r, w: r.w - 2 * SHRINK, d: r.d - 2 * SHRINK } : r);
const rects = (spec, s) => bodyRects(spec, s).map(shrink);

// Three more probes, each moving one property of the vehicle and holding the
// rest still. Between them they decompose "put a different vehicle in this
// level" into the things a swap actually changes, which is what tells a level
// apart from a level that is merely tight.
//
// STEERING. `WB` scales the wheelbase and `LOCK` the steering lock; together
// they set the turning radius. Neither moves a rectangle — `bodyRects()` places
// the body from `length` and `rearOverhang` and never reads the wheelbase, only
// `integrate()` does — so this is the exact dual of SHRINK.
const WB = Number(process.env.WB ?? 1);
const LOCK = Number(process.env.LOCK ?? 1);
// SHAPE, which is where the wheels are. `OVH` scales the rear overhang holding
// `length` and `width` fixed, so the body box keeps its size and slides along
// the vehicle relative to the rear axle; the front overhang takes up whatever
// the rear gives back. Same footprint, same turning circle, wheels elsewhere.
// This is what sets tail swing — how far the rear corner travels outside the
// footprint the body occupies standing still. The bus swings 0.67 m and nothing
// else in the roster exceeds 0.09 m.
const OVH = Number(process.env.OVH ?? 1);
// TRAILER RESPONSE. `TRL` scales `axleFromHitch`, the distance a rig travels
// before an articulation angle answers the wheel. Not a clean probe, and the
// model is why rather than the probe: the trailer body is placed from its own
// axle, so lengthening the response lengthens the combination. For a trailer,
// response distance and length are one parameter.
const TRL = Number(process.env.TRL ?? 1);

const tune = (v) => {
  if (WB === 1 && LOCK === 1 && OVH === 1 && TRL === 1) return v;
  const o = {
    ...v, wheelbase: v.wheelbase * WB, maxSteer: v.maxSteer * LOCK,
    rearOverhang: v.rearOverhang * OVH,
  };
  if (v.trailer && TRL !== 1) o.trailer = { ...v.trailer, axleFromHitch: v.trailer.axleFromHitch * TRL };
  return o;
};

function blocked(spec, s, colliders, arena) {
  for (const body of rects(spec, s)) {
    if (!rectInsideRect(body, arena)) return true;
    for (const c of colliders) if (overlaps(body, c)) return true;
  }
  return false;
}

function parkRect(spec, target, s) {
  return shrink(target.part === 'trailer' ? trailerRect(spec, s) : bodyRect(spec, s));
}

// The search's objective is the game's score. Direction changes come first and
// distance only breaks ties between routes that cost the same number of them,
// so `f` is a pair compared lexicographically rather than a single number with
// a magic exchange rate between shunts and metres.
//
// It used to be one number: `g = metres + 1.4 per direction change`, which
// priced a shunt at 1.4 m of driving and minimised neither. The heuristic was
// weighted 1.35-1.7 on top of that, so the search would shuffle at a bay mouth
// rather than drive 6 m away and come back for one shunt. The number it
// produced was an upper bound biased against exactly the routes a level is
// usually about.
//
// h_shunts is 0 — no admissible lower bound on remaining direction changes is
// cheaper to compute than the search itself — so the ordering is: exhaust
// everything reachable in n direction changes before looking at n+1. That is
// what makes the answer a minimum, and it is also why this is slow.
const better = (aS, aD, bS, bD) => (aS !== bS ? aS < bS : aD < bD);

export function solve(level, opts = {}) {
  const spec = tune(VEHICLES[level.vehicle]);
  const colliders = levelColliders(level);
  const arena = boundsRect(level);
  const target = level.target;
  const artic = !!spec.trailer;
  const combo = combinationLength(spec);

  const STEP = combo > 8 ? 0.6 : 0.45;
  const XY = artic ? 0.45 : 0.3;
  const YAWBINS = artic ? 32 : 36;
  const TBINS = 32;
  const steers = [-1, -0.45, 0, 0.45, 1].map((f) => f * spec.maxSteer);
  const maxNodes = opts.maxNodes ?? 1200000;
  // Two orderings over one search. `exact` tiers by direction changes, which is
  // the game's score and is what makes the answer worth writing down. `greedy`
  // collapses the tiers into one and prices a shunt at 1.4 m again — it cannot
  // be trusted for a number, but it only has to find *a* route, and it is the
  // fallback when the honest search runs out of budget. Constraint 3 asks
  // whether a level is solvable at all; that question must still get an answer
  // on a level too large to tier.
  const exact = opts.greedy !== true;

  const b = level.bounds;
  const nx = Math.ceil((b.maxX - b.minX) / XY) + 2;
  const nz = Math.ceil((b.maxZ - b.minZ) / XY) + 2;
  const bin = (a, n) => {
    const i = Math.floor((((a % TAU) + TAU) % TAU) / (TAU / n));
    return i >= n ? 0 : i;
  };
  // Direction of travel is part of the state. Without it a pose reached going
  // forwards and the same pose reached in reverse collapse into one node, and
  // whichever arrived first decides what every route through it costs.
  const key = (s, dir) => {
    const ix = Math.floor((s.x - b.minX) / XY);
    const iz = Math.floor((s.z - b.minZ) / XY);
    let k = (bin(s.yaw, YAWBINS) * nz + iz) * nx + ix;
    if (artic) k = k * TBINS + bin(s.trailerYaw, TBINS);
    return k * 3 + (dir + 1);
  };

  const heuristic = (s) => {
    const r = parkRect(spec, target, s);
    const d = Math.hypot(target.x - r.x, target.z - r.z);
    const a = Math.abs(normalizeAngle(r.rot - target.rot));
    return d + a * (artic ? 3.0 : 1.5);
  };

  // dir 0 is "has not moved yet". The game starts a run the same way
  // (`lastDir = 0` in Game.stepPhysics), so the first movement is free in
  // either direction and a level whose opening move is a reverse is not
  // charged a direction change the player would never be charged.
  const start = { x: level.start.x, z: level.start.z, yaw: level.start.yaw, trailerYaw: level.start.yaw, speed: 1 };
  if (blocked(spec, start, colliders, arena)) return { ok: false, reason: 'start blocked' };

  const heap = [];
  const push = (n) => {
    heap.push(n);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!better(heap[i].fs, heap[i].fd, heap[p].fs, heap[p].fd)) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < heap.length && better(heap[l].fs, heap[l].fd, heap[m].fs, heap[m].fd)) m = l;
        if (r < heap.length && better(heap[r].fs, heap[r].fd, heap[m].fs, heap[m].fd)) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]];
        i = m;
      }
    }
    return top;
  };

  const node = (s, dir, shunts, dist, prev) => ({
    ...s, dir, shunts, dist, prev,
    fs: exact ? shunts : 0,
    fd: exact ? dist + heuristic(s) : dist + shunts * 1.4 + 1.5 * heuristic(s),
  });

  const seen = new Map();
  push(node(start, 0, 0, 0, null));
  seen.set(key(start, 0), [0, 0]);

  const inGoal = (s) => rectInsideRect(parkRect(spec, target, s), target, 0.02);

  // A fine straight run into the bay, because the 0.45 m lattice can step over
  // an exact containment that a smooth approach would land in. It is a
  // candidate, not an answer: its own direction change is charged, and it goes
  // back on the heap to be ordered against everything else. Returning it
  // directly is how the old search let an unpriced shunt into the result.
  const straightRuns = (from) => {
    const out = [];
    for (const dir of [1, -1]) {
      let s = { ...from, speed: dir };
      for (let k = 0; k < 44; k++) {
        s = integrate(spec, { ...s, speed: dir }, 0.5, 0);
        if (s.jackknifed || blocked(spec, s, colliders, arena)) break;
        if (inGoal(s)) {
          const turn = from.dir !== 0 && dir !== from.dir ? 1 : 0;
          out.push(node(s, dir, from.shunts + turn, from.dist + (k + 1) * 0.5, from));
          break;
        }
      }
    }
    return out;
  };

  let expanded = 0;
  while (heap.length) {
    const cur = pop();
    if (++expanded > maxNodes) return { ok: false, reason: `gave up after ${expanded} nodes` };

    if (inGoal(cur)) {
      let moves = 0;
      for (let n = cur; n; n = n.prev) moves++;
      // The route as direction-legs, for `ROUTE=1`. A count says a level costs
      // two changes; the legs say where they were, which is what tells a
      // designer whether the level is being solved the way it was built.
      const path = [];
      for (let n = cur; n; n = n.prev) path.push(n);
      path.reverse();
      const legs = [];
      for (const n of path) {
        const last = legs[legs.length - 1];
        if (!last || last.dir !== n.dir) legs.push({ dir: n.dir, from: n, to: n });
        else last.to = n;
      }
      return { ok: true, expanded, moves, shunts: cur.shunts, length: cur.dist, legs };
    }
    if (heuristic(cur) < 30) for (const n of straightRuns(cur)) push(n);

    for (const dir of [1, -1]) {
      for (const steer of steers) {
        let s = { ...cur, speed: dir };
        let bad = false;
        for (let k = 0; k < 3; k++) {
          s = integrate(spec, { ...s, speed: dir }, STEP / 3, steer);
          // grinding the jackknife stop is not a manoeuvre, it is a mistake
          if (s.jackknifed || blocked(spec, s, colliders, arena)) { bad = true; break; }
        }
        if (bad) continue;
        const shunts = cur.shunts + (cur.dir !== 0 && dir !== cur.dir ? 1 : 0);
        const dist = cur.dist + STEP;
        // `seen` is keyed on a lattice cell, but parking is tested on the exact
        // pose, so one cell holds both parked and not-parked states. Dropping a
        // parked pose because a cheaper unparked one occupied its cell first is
        // how a minimising search can report a number that is too high — it did
        // here, on Dead End. A pose that is already parked is never dedup'd.
        if (!inGoal(s)) {
          const k2 = key(s, dir);
          const prev = seen.get(k2);
          if (prev && !better(shunts, dist, prev[0], prev[1])) continue;
          seen.set(k2, [shunts, dist]);
        }
        push(node(s, dir, shunts, dist, cur));
      }
    }
  }
  return { ok: false, reason: `exhausted (${expanded} nodes)` };
}

// Importable: a sweep script wants solve() without running the whole set, and
// without the exit() below firing under it.
const RUN = !process.env.NO_RUN;
const only = process.argv[2] ? process.argv[2].split(',') : null;
let failures = 0;

for (const level of RUN ? LEVELS : []) {
  if (only && !only.includes(level.id)) continue;
  const spec = tune(VEHICLES[level.vehicle]);
  const colliders = levelColliders(level);
  const arena = boundsRect(level);
  const issues = [];

  const start = { x: level.start.x, z: level.start.z, yaw: level.start.yaw, trailerYaw: level.start.yaw };
  for (const body of rects(spec, start)) {
    if (!rectInsideRect(body, arena)) issues.push('start is outside the arena');
    for (const c of colliders) if (overlaps(body, c)) issues.push(`start overlaps a ${c.kind}`);
  }

  if (!rectInsideRect(level.target, arena)) issues.push('target sticks out of the arena');
  for (const c of colliders) {
    if (overlaps(level.target, c)) {
      issues.push(`target is blocked by a ${c.kind} at ${c.x.toFixed(1)},${c.z.toFixed(1)}`);
    }
  }

  const parkW = level.target.part === 'trailer' ? spec.trailer.width : spec.width;
  const parkD = level.target.part === 'trailer' ? trailerLength(spec.trailer) : spec.length;
  const slackW = level.target.w - parkW;
  const slackD = level.target.d - parkD;
  if (slackW < 0.2) issues.push(`target only ${slackW.toFixed(2)} m wider than the vehicle`);
  if (slackD < 0.3) issues.push(`target only ${slackD.toFixed(2)} m longer than the vehicle`);

  let nearest = Infinity;
  for (const c of colliders) nearest = Math.min(nearest, rectDistance(level.target, c));

  const t0 = Date.now();
  let res = solve(level);
  // Out of budget is not "unsolvable" — it is "not answered". Fall back to the
  // finder so the solvability gate still gets a verdict, and say plainly that
  // the number this level carries was not re-established on this run.
  let bounded = false;
  if (!res.ok && res.reason.startsWith('gave up')) {
    bounded = true;
    res = solve(level, { greedy: true });
  }
  const ms = Date.now() - t0;
  if (!res.ok) issues.push(`NO SOLUTION FOUND (${res.reason})`);
  // The check runs one way only. Finding fewer direction changes than the level
  // claims means the record is stale and the level is easier than its design
  // believes. Finding *more* means nothing: both this search and the one that
  // set the record collapse exact poses into lattice cells, so which pose
  // represents a cell decides what continuations exist from it — see DESIGN.md 4.
  if (res.ok && !bounded && level.record != null && res.shunts < level.record) {
    issues.push(`record is stale: the search parks it in ${res.shunts}, level claims ${level.record}`);
  }

  const sw = sweptWidth(spec);
  const solved = res.ok
    ? `solved in ${String(res.moves).padStart(4)} moves, ${String(res.shunts).padStart(2)} direction changes, ${res.length.toFixed(1)} m`
      + (bounded ? ' [finder only — out of budget, record not checked]' : '')
    : 'UNSOLVED';
  console.log(
    `${level.id.padEnd(16)} ${level.vehicle.padEnd(7)} ${combinationLength(spec).toFixed(1).padStart(5)} m |`
    + ` slack ${slackW.toFixed(2)}x${slackD.toFixed(2)} | nearest ${nearest.toFixed(2)} m |`
    + ` swept ${sw.width.toFixed(2)} m | record ${String(level.record ?? '-').padStart(2)} | ${solved} (${(ms / 1000).toFixed(1)} s)`,
  );
  if (res.ok && res.legs && process.env.SIG) {
    // A route's shape: per leg, which way the vehicle went, how far it turned
    // while going that way, and roughly where. Two vehicles given the same
    // geometry either solve it the same way or they do not, and the
    // direction-change count is far too coarse to say which.
    const parts = res.legs.filter((l) => l.dir !== 0).map((l) => {
      const dy = (((l.to.yaw - l.from.yaw + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
      const t = Math.round((dy * 180) / Math.PI / 5) * 5;
      const mx = Math.round((l.from.x + l.to.x) / 4) * 2;
      const mz = Math.round((l.from.z + l.to.z) / 4) * 2;
      return `${l.dir > 0 ? 'F' : 'R'}${t >= 0 ? '+' : ''}${t}@${mx},${mz}`;
    });
    console.log(`     sig  ${parts.join('  ')}`);
  }
  if (res.ok && res.legs && process.env.ROUTE) {
    const deg = (a) => ((((a * 180) / Math.PI) % 360 + 360) % 360).toFixed(0);
    for (const l of res.legs) {
      const dir = l.dir > 0 ? 'fwd ' : l.dir < 0 ? 'rev ' : 'stop';
      console.log(`     ${dir} (${l.from.x.toFixed(1)}, ${l.from.z.toFixed(1)}) ${deg(l.from.yaw)}\u00b0`
        + ` -> (${l.to.x.toFixed(1)}, ${l.to.z.toFixed(1)}) ${deg(l.to.yaw)}\u00b0`);
    }
  }
  for (const i of issues) {
    failures++;
    console.log(`   !! ${i}`);
  }
}

if (RUN) {
  console.log(failures ? `\n${failures} problem(s).` : '\nAll levels clean and provably solvable.');
  process.exit(failures ? 1 : 0);
}
