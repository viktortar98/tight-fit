// Level validator. Two jobs:
//   1. Sanity: the car starts clear, the target is inside the arena and not
//      occupied, nothing overlaps that shouldn't.
//   2. Proof: a hybrid-A* search over (x, z, yaw) using the car's own motion
//      primitives actually parks the car. If the search fails, the level is
//      either impossible or so tight that no human will find it.
//
// Usage: node tools/validate.js [levelId]

import { LEVELS } from '../src/levels.js';
import { VEHICLES, centerOffset, sweptWidth, turningRadius } from '../src/vehicle.js';
import { overlaps, rectInsideRect, rectDistance, corners } from '../src/geom.js';

export function collidersFor(level) {
  const out = [];
  for (const o of level.obstacles) {
    if (o.kind === 'parked') {
      const s = VEHICLES[o.spec];
      out.push({ x: o.x, z: o.z, w: s.width, d: s.length, rot: o.rot, kind: 'parked' });
    } else {
      out.push({ x: o.x, z: o.z, w: o.w, d: o.d, rot: o.rot ?? 0, kind: o.kind });
    }
  }
  return out;
}

export function boundsRect(level) {
  const b = level.bounds;
  return {
    x: (b.minX + b.maxX) / 2,
    z: (b.minZ + b.maxZ) / 2,
    w: b.maxX - b.minX,
    d: b.maxZ - b.minZ,
    rot: 0,
  };
}

function bodyOf(spec, s) {
  const off = centerOffset(spec);
  return {
    x: s.x + Math.sin(s.yaw) * off,
    z: s.z + Math.cos(s.yaw) * off,
    w: spec.width,
    d: spec.length,
    rot: s.yaw,
  };
}

function blocked(body, colliders, arena) {
  if (!rectInsideRect(body, arena)) return true;
  for (const c of colliders) if (overlaps(body, c)) return true;
  return false;
}

// --- hybrid A* ---------------------------------------------------------

function solve(level, opts = {}) {
  const spec = VEHICLES[level.vehicle];
  const colliders = collidersFor(level);
  const arena = boundsRect(level);
  const target = level.target;

  const STEP = 0.45;            // arc length per primitive
  const XY = 0.3;               // position bucket
  const YAWBINS = 36;           // 10 degrees
  const steers = [-1, -0.45, 0, 0.45, 1].map((f) => f * spec.maxSteer);
  const dirs = [1, -1];
  const maxNodes = opts.maxNodes ?? 900000;

  const b = level.bounds;
  const nx = Math.ceil((b.maxX - b.minX) / XY) + 2;
  const nz = Math.ceil((b.maxZ - b.minZ) / XY) + 2;
  const key = (s) => {
    const ix = Math.floor((s.x - b.minX) / XY);
    const iz = Math.floor((s.z - b.minZ) / XY);
    let iy = Math.floor((((s.yaw % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) / ((Math.PI * 2) / YAWBINS));
    if (iy >= YAWBINS) iy = 0;
    return (iy * nz + iz) * nx + ix;
  };

  const goalYaw = target.rot;
  const heuristic = (s) => {
    const dx = target.x - s.x;
    const dz = target.z - s.z;
    return Math.hypot(dx, dz);
  };

  const start = { x: level.start.x, z: level.start.z, yaw: level.start.yaw, dir: 1 };
  if (blocked(bodyOf(spec, start), colliders, arena)) return { ok: false, reason: 'start blocked' };

  // Binary heap on f = g + h.
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
  push({ ...start, g: 0, f: heuristic(start), depth: 0, prev: null, steer: 0 });
  seen.set(key(start), 0);

  let expanded = 0;
  while (heap.length) {
    const cur = pop();
    if (++expanded > maxNodes) return { ok: false, reason: `gave up after ${expanded} nodes` };

    if (rectInsideRect(bodyOf(spec, cur), target, 0.02)) {
      let shunts = 0;
      let n = cur;
      const path = [];
      while (n) { path.push(n); n = n.prev; }
      path.reverse();
      for (let i = 1; i < path.length; i++) if (path[i].dir !== path[i - 1].dir) shunts++;
      return { ok: true, expanded, moves: path.length, shunts, length: cur.g };
    }

    for (const dir of dirs) {
      for (const steer of steers) {
        // integrate the primitive in three sub-steps, collision-checking each
        let s = { x: cur.x, z: cur.z, yaw: cur.yaw };
        let bad = false;
        const sub = STEP / 3;
        for (let k = 0; k < 3; k++) {
          const yawRate = (dir * sub * Math.tan(steer)) / spec.wheelbase;
          const mid = s.yaw + yawRate / 2;
          s = {
            x: s.x + dir * sub * Math.sin(mid),
            z: s.z + dir * sub * Math.cos(mid),
            yaw: s.yaw + yawRate,
          };
          if (blocked(bodyOf(spec, s), colliders, arena)) { bad = true; break; }
        }
        if (bad) continue;
        const k2 = key(s);
        const cost = cur.g + STEP + (dir !== cur.dir ? 1.2 : 0) + (dir < 0 ? 0.15 : 0);
        const prevCost = seen.get(k2);
        if (prevCost !== undefined && prevCost <= cost) continue;
        seen.set(k2, cost);
        push({ ...s, dir, g: cost, f: cost + heuristic(s), prev: cur, steer });
      }
    }
  }
  return { ok: false, reason: `exhausted (${expanded} nodes)` };
}

// --- report ------------------------------------------------------------

const only = process.argv[2];
let failures = 0;

for (const level of LEVELS) {
  if (only && level.id !== only) continue;
  const spec = VEHICLES[level.vehicle];
  const colliders = collidersFor(level);
  const arena = boundsRect(level);
  const issues = [];

  const startBody = bodyOf(spec, level.start);
  if (!rectInsideRect(startBody, arena)) issues.push('start is outside the arena');
  for (const c of colliders) if (overlaps(startBody, c)) issues.push(`start overlaps a ${c.kind}`);

  if (!rectInsideRect(level.target, arena)) issues.push('target sticks out of the arena');
  for (const c of colliders) {
    if (overlaps(level.target, c)) issues.push(`target is blocked by a ${c.kind} at ${c.x.toFixed(1)},${c.z.toFixed(1)}`);
  }

  // Slack: how much bigger the target is than the car, and how close the
  // nearest obstacle sits to the parked car.
  const slackW = level.target.w - spec.width;
  const slackD = level.target.d - spec.length;
  if (slackW < 0.2) issues.push(`target only ${slackW.toFixed(2)} m wider than the car`);
  if (slackD < 0.3) issues.push(`target only ${slackD.toFixed(2)} m longer than the car`);

  let nearest = Infinity;
  for (const c of colliders) nearest = Math.min(nearest, rectDistance(level.target, c));

  const t0 = Date.now();
  const res = solve(level);
  const ms = Date.now() - t0;
  if (!res.ok) issues.push(`NO SOLUTION FOUND (${res.reason})`);

  const sw = sweptWidth(spec);
  const head = `${level.id.padEnd(16)} ${level.vehicle.padEnd(6)}`;
  const solved = res.ok
    ? `solved in ${String(res.moves).padStart(4)} moves, ${String(res.shunts).padStart(2)} direction changes, ${(res.length).toFixed(1)} m (${ms} ms)`
    : `UNSOLVED (${ms} ms)`;
  console.log(`${head} slack ${slackW.toFixed(2)}x${slackD.toFixed(2)} m | nearest obstacle ${nearest.toFixed(2)} m | swept ${sw.width.toFixed(2)} m | ${solved}`);
  for (const i of issues) {
    failures++;
    console.log(`   !! ${i}`);
  }
}

console.log(failures ? `\n${failures} problem(s).` : '\nAll levels clean and provably solvable.');
process.exit(failures ? 1 : 0);
