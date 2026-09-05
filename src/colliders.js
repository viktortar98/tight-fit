// One source of truth for what a level's obstacles are, in flat rectangles.
// The renderer and the validator both read this, so they cannot disagree
// about where the walls are.

import { VEHICLES, bodyRect, trailerRect } from './vehicle.js';

export function collidersOf(o) {
  if (o.kind === 'parked') {
    const spec = VEHICLES[o.spec];
    const state = { x: o.x, z: o.z, yaw: o.rot, trailerYaw: o.rot };
    // o.x/o.z are the tractor's rear axle for parked props, so the whole
    // combination lines up straight behind it.
    const out = [{ ...bodyRect(spec, state), kind: 'parked' }];
    if (spec.trailer) out.push({ ...trailerRect(spec, state), kind: 'parked' });
    return out;
  }
  return [{ x: o.x, z: o.z, w: o.w, d: o.d, rot: o.rot ?? 0, kind: o.kind }];
}

export function levelColliders(level) {
  return level.obstacles.flatMap(collidersOf);
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
