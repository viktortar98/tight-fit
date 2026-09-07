// One source of truth for what a level's obstacles are, in flat rectangles.
// The renderer draws from the objects and the physics collides with these, so
// the two cannot disagree about where the walls are.

import { VEHICLES, bodyRect, mirrorRect, trailerRect, drawbarRect } from './vehicle.js';

export function collidersOf(o) {
  if (o.type === 'parked') {
    const spec = VEHICLES[o.spec];
    const state = { x: o.x, z: o.z, yaw: o.rot, trailerYaw: o.rot };
    // o.x/o.z are the tractor's rear axle for parked props, so the whole
    // combination lines up straight behind it. A parked car's mirrors stick
    // out and are drawn, so they collide too — the rule is about everything
    // on screen, not only the vehicle being driven (DESIGN.md 17).
    const out = [
      { ...bodyRect(spec, state), type: 'parked' },
      { ...mirrorRect(spec, state), type: 'parked' },
    ];
    if (spec.trailer) {
      out.push({ ...trailerRect(spec, state), type: 'parked' });
      // A parked combination's drawbar is drawn too, so it collides too.
      if (spec.trailer.drawbar) out.push({ ...drawbarRect(spec, state), type: 'parked' });
    }
    return out;
  }
  // Everything in the palette stands on the ground, so an obstacle's span is
  // its own height. One without a height reaches all the way up, which is what
  // the collider did before it had a span at all.
  return [{
    x: o.x, z: o.z, w: o.w, d: o.d, rot: o.rot ?? 0, type: o.type,
    y0: 0, y1: o.h ?? Infinity,
  }];
}
