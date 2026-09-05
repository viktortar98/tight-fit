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

function blocked(spec, s, colliders, arena) {
  for (const body of bodyRects(spec, s)) {
    if (!rectInsideRect(body, arena)) return true;
    for (const c of colliders) if (overlaps(body, c)) return true;
  }
  return false;
}

function parkRect(spec, target, s) {
  return target.part === 'trailer' ? trailerRect(spec, s) : bodyRect(spec, s);
}

function solve(level, opts = {}) {
  const spec = VEHICLES[level.vehicle];
  const colliders = levelColliders(level);
  const arena = boundsRect(level);
  const target = level.target;
  const artic = !!spec.trailer;
  const combo = combinationLength(spec);

  const STEP = combo > 8 ? 0.6 : 0.45;
  const XY = artic ? 0.45 : 0.3;
  const YAWBINS = artic ? 32 : 36;
  const TBINS = 32;
  const WEIGHT = artic ? 1.7 : 1.35;
  const steers = [-1, -0.45, 0, 0.45, 1].map((f) => f * spec.maxSteer);
  const maxNodes = opts.maxNodes ?? 1200000;

  const b = level.bounds;
  const nx = Math.ceil((b.maxX - b.minX) / XY) + 2;
  const nz = Math.ceil((b.maxZ - b.minZ) / XY) + 2;
  const bin = (a, n) => {
    const i = Math.floor((((a % TAU) + TAU) % TAU) / (TAU / n));
    return i >= n ? 0 : i;
  };
  const key = (s) => {
    const ix = Math.floor((s.x - b.minX) / XY);
    const iz = Math.floor((s.z - b.minZ) / XY);
    let k = (bin(s.yaw, YAWBINS) * nz + iz) * nx + ix;
    if (artic) k = k * TBINS + bin(s.trailerYaw, TBINS);
    return k;
  };

  const heuristic = (s) => {
    const r = parkRect(spec, target, s);
    const d = Math.hypot(target.x - r.x, target.z - r.z);
    const a = Math.abs(normalizeAngle(r.rot - target.rot));
    return d + a * (artic ? 3.0 : 1.5);
  };

  const start = { x: level.start.x, z: level.start.z, yaw: level.start.yaw, trailerYaw: level.start.yaw, speed: 1 };
  if (blocked(spec, start, colliders, arena)) return { ok: false, reason: 'start blocked' };

  const heap = [];
  const push = (n) => {
    heap.push(n);
    let i = heap.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p].f <= heap[i].f) break;
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
        if (l < heap.length && heap[l].f < heap[m].f) m = l;
        if (r < heap.length && heap[r].f < heap[m].f) m = r;
        if (m === i) break;
        [heap[m], heap[i]] = [heap[i], heap[m]];
        i = m;
      }
    }
    return top;
  };

  const seen = new Map();
  push({ ...start, dir: 1, g: 0, f: heuristic(start), prev: null });
  seen.set(key(start), 0);

  const inGoal = (s) => rectInsideRect(parkRect(spec, target, s), target, 0.02);
  const straightRun = (from) => {
    for (const dir of [-1, 1]) {
      let s = { ...from, speed: dir };
      for (let k = 0; k < 44; k++) {
        s = integrate(spec, { ...s, speed: dir }, 0.5, 0);
        if (s.jackknifed || blocked(spec, s, colliders, arena)) break;
        if (inGoal(s)) return { ...s, dir, g: from.g + (k + 1) * 0.5, prev: from };
      }
    }
    return null;
  };

  let expanded = 0;
  while (heap.length) {
    const cur = pop();
    if (++expanded > maxNodes) return { ok: false, reason: `gave up after ${expanded} nodes` };

    let done = inGoal(cur) ? cur : null;
    if (!done && cur.f - cur.g < WEIGHT * 30) done = straightRun(cur);
    if (done) {
      const goal = done;
      let shunts = 0;
      const path = [];
      for (let n = goal; n; n = n.prev) path.push(n);
      path.reverse();
      for (let i = 1; i < path.length; i++) if (path[i].dir !== path[i - 1].dir) shunts++;
      return { ok: true, expanded, moves: path.length, shunts, length: goal.g };
    }

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
        const k2 = key(s);
        const cost = cur.g + STEP + (dir !== cur.dir ? 1.4 : 0) + (dir < 0 ? 0.12 : 0);
        const prev = seen.get(k2);
        if (prev !== undefined && prev <= cost) continue;
        seen.set(k2, cost);
        push({ ...s, dir, g: cost, f: cost + WEIGHT * heuristic(s), prev: cur });
      }
    }
  }
  return { ok: false, reason: `exhausted (${expanded} nodes)` };
}

const only = process.argv[2];
let failures = 0;

for (const level of LEVELS) {
  if (only && level.id !== only) continue;
  const spec = VEHICLES[level.vehicle];
  const colliders = levelColliders(level);
  const arena = boundsRect(level);
  const issues = [];

  const start = { x: level.start.x, z: level.start.z, yaw: level.start.yaw, trailerYaw: level.start.yaw };
  for (const body of bodyRects(spec, start)) {
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
  const res = solve(level);
  const ms = Date.now() - t0;
  if (!res.ok) issues.push(`NO SOLUTION FOUND (${res.reason})`);
  if (res.ok && level.record != null && res.shunts < level.record) {
    issues.push(`record is stale: the search parks it in ${res.shunts}, level claims ${level.record}`);
  }

  const sw = sweptWidth(spec);
  const solved = res.ok
    ? `solved in ${String(res.moves).padStart(4)} moves, ${String(res.shunts).padStart(2)} direction changes, ${res.length.toFixed(1)} m`
    : 'UNSOLVED';
  console.log(
    `${level.id.padEnd(16)} ${level.vehicle.padEnd(7)} ${combinationLength(spec).toFixed(1).padStart(5)} m |`
    + ` slack ${slackW.toFixed(2)}x${slackD.toFixed(2)} | nearest ${nearest.toFixed(2)} m |`
    + ` swept ${sw.width.toFixed(2)} m | record ${String(level.record ?? '-').padStart(2)} | ${solved} (${(ms / 1000).toFixed(1)} s)`,
  );
  for (const i of issues) {
    failures++;
    console.log(`   !! ${i}`);
  }
}

console.log(failures ? `\n${failures} problem(s).` : '\nAll levels clean and provably solvable.');
process.exit(failures ? 1 : 0);
