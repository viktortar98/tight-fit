// 2D oriented-rectangle math. The whole game collides on the XZ plane:
// rects are {x, z, w (local X), d (local Z), rot (radians, Y axis)}.

const TAU = Math.PI * 2;

export function clamp(v, lo, hi) {
  return v < lo ? lo : v > hi ? hi : v;
}

export function corners(r, grow = 0) {
  const c = Math.cos(r.rot);
  const s = Math.sin(r.rot);
  const hw = r.w / 2 + grow;
  const hd = r.d / 2 + grow;
  const out = [];
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    const lx = sx * hw;
    const lz = sz * hd;
    out.push({ x: r.x + lx * c + lz * s, z: r.z - lx * s + lz * c });
  }
  return out;
}

// Local-frame projection of a world point (inverse of the rotation above).
function toLocal(r, p) {
  const c = Math.cos(r.rot);
  const s = Math.sin(r.rot);
  const dx = p.x - r.x;
  const dz = p.z - r.z;
  return { x: dx * c - dz * s, z: dx * s + dz * c };
}

function axesOf(r) {
  const c = Math.cos(r.rot);
  const s = Math.sin(r.rot);
  return [{ x: c, z: -s }, { x: s, z: c }];
}

function project(pts, axis) {
  let min = Infinity;
  let max = -Infinity;
  for (const p of pts) {
    const v = p.x * axis.x + p.z * axis.z;
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return [min, max];
}

// Separating-axis test. Rectangles only, so four candidate axes.
export function overlaps(a, b, growA = 0) {
  const ca = corners(a, growA);
  const cb = corners(b);
  for (const axis of [...axesOf(a), ...axesOf(b)]) {
    const [amin, amax] = project(ca, axis);
    const [bmin, bmax] = project(cb, axis);
    if (amax <= bmin || bmax <= amin) return false;
  }
  return true;
}

function pointInRect(p, r, grow = 0) {
  const l = toLocal(r, p);
  return Math.abs(l.x) <= r.w / 2 + grow && Math.abs(l.z) <= r.d / 2 + grow;
}

// Is `inner` fully inside `outer`? Used for the parking check.
export function rectInsideRect(inner, outer, shrinkInner = 0) {
  for (const p of corners(inner, -shrinkInner)) {
    if (!pointInRect(p, outer)) return false;
  }
  return true;
}

function pointRectDistance(p, r) {
  const l = toLocal(r, p);
  const dx = Math.max(Math.abs(l.x) - r.w / 2, 0);
  const dz = Math.max(Math.abs(l.z) - r.d / 2, 0);
  return Math.hypot(dx, dz);
}

// Cheap but sufficient rect-rect distance: corners of each against the other.
// Exact for the near-parallel cases that matter, never overestimates by much.
export function rectDistance(a, b) {
  if (overlaps(a, b)) return 0;
  let min = Infinity;
  for (const p of corners(a)) min = Math.min(min, pointRectDistance(p, b));
  for (const p of corners(b)) min = Math.min(min, pointRectDistance(p, a));
  return min;
}

export function normalizeAngle(a) {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
}
