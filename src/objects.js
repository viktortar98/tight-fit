// The palette a level is built from, and the only thing a level contains.
//
// The reason this file exists is the editor. A level used to be two parallel
// lists — the colliders and the paint — with the relationship between them
// held in the author's head and written out as arithmetic: a bay row painted
// at one z, and the cars parked in it at that z minus a hand-computed offset.
// Nothing in the file said the two were the same object, so nothing could edit
// them as one.
//
// Here a level is a list of objects, each a `type` and its parameters, and
// `expand()` is the one place that turns parameters into rectangles and paint.
// An editor edits the parameters. So does a person: `bays` takes a list of
// what is in each slot and works out where the cars go.
//
// Every composite is built out of the primitives above it, so `expand()` never
// has to go more than one level deep, and a new composite is a function here
// and nothing anywhere else.

import { VEHICLES, centerOffset } from './vehicle.js';

// --- primitives. One collider each (except `line`, which is paint), and what
// src/world.js already knows how to draw. It switches on `type`.

export const wall = (x, z, w, d, opt = {}) => ({
  type: 'wall', x, z, w, d, rot: opt.rot ?? 0, h: opt.h ?? 2.6, color: opt.color,
});

const kerb = (x, z, w, d, rot = 0) => ({ type: 'kerb', x, z, w, d, rot, h: 0.15 });

export const pillar = (x, z, s = 0.7, h = 3.2) => ({ type: 'pillar', x, z, w: s, d: s, rot: 0, h });

export const cone = (x, z) => ({ type: 'cone', x, z, w: 0.42, d: 0.42, rot: 0, h: 0.7 });

// A parked vehicle. The placement point is its rear axle, because that is the
// point every vehicle in this game is referenced at. `bay` takes a bay instead
// and works the axle out itself, which is what levels should use.
export const car = (x, z, rot = 0, spec = 'hatch', color) =>
  ({ type: 'parked', x, z, rot, spec, color });

// A dropped semitrailer: box on landing legs, no tractor.
const trailer = (x, z, rot = 0, color) =>
  ({ type: 'dropped', x, z, rot, w: 2.55, d: 13.0, h: 4.0, color });

// A stripe of paint. Decoration: nothing collides with it.
export const line = (x, z, w, d, rot = 0) => ({ type: 'line', x, z, w, d, rot });

const PRIMITIVE = new Set(['wall', 'kerb', 'pillar', 'cone', 'parked', 'dropped', 'line']);

const PASTEL = [0xcfe0ef, 0xeadfd0, 0xdcead8, 0xf2dee1, 0xe3dded, 0xd7e9e8, 0xefe8d3, 0xe6e2db];

// --- composites. Each returns a list of primitives.

// Local (across, along) to world, for an object at (o.x, o.z) rotated by o.rot.
// Across is +X at rot 0 and along is +Z, matching the vehicle frame, so an
// object's "along" is the direction a vehicle facing `rot` would drive.
function place(o, across, along) {
  const c = Math.cos(o.rot ?? 0);
  const s = Math.sin(o.rot ?? 0);
  return { x: o.x + across * c + along * s, z: o.z - across * s + along * c };
}

// A vehicle centred in a bay. This is the arithmetic the levels used to do by
// hand and get subtly wrong: the placement point is the rear axle, so a car
// centred in its bay sits `centerOffset()` short of the bay's centre. Doing it
// here means a bay row stays correct when a vehicle's dimensions change, which
// is the whole reason a bay row is one object.
function centred(spec, x, z, rot) {
  const off = centerOffset(VEHICLES[spec]);
  return car(x - Math.sin(rot) * off, z - Math.cos(rot) * off, rot, spec);
}

// A marked bay: two flanks and a stop line at the closed end, plus whatever is
// parked in it. `slot` is a vehicle id or null, and `out` is how far that
// vehicle sits proud of the bay towards the open end — badly-parked
// neighbours are what two levels are made of, so it is a parameter here rather
// than a subtraction a level does for itself.
function buildBay(o) {
  const { w = 2.5, d = 5, rot = 0, slot = null, out: proud = 0 } = o;
  const t = 0.12;
  const at = (across, along) => place(o, across, along);
  const stripe = (p, sw, sd) => line(p.x, p.z, sw, sd, rot);
  const parts = [
    stripe(at(-w / 2, 0), t, d),
    stripe(at(w / 2, 0), t, d),
    stripe(at(0, -d / 2 + t), w, t),
  ];
  if (slot) {
    const p = at(0, proud);
    parts.push(centred(slot, p.x, p.z, rot));
  }
  return parts;
}

// A run of bays side by side, centred on (x, z) and facing `rot`. `slots` is
// one entry per bay — a vehicle id or null — so "how many bays" and "what is
// in them" cannot disagree.
function buildBays(o) {
  const { w = 2.5, d = 5, rot = 0, slots } = o;
  const first = -((slots.length - 1) / 2) * w;
  return slots.flatMap((slot, i) => buildBay({
    ...place(o, first + i * w, 0), rot, w, d, slot, out: o.out,
  }));
}

// Four walls around a clear rectangle `w` by `d`. `w` and `d` are the room the
// vehicle actually has: the walls sit outside them. `open` names sides to leave
// out, in the object's own frame — 'front' is +along, 'left' is +across.
function buildRoom(o) {
  const { w, d, t = 1.2, rot = 0, h = 3.2, color = 0xd0d2d6, open = [] } = o;
  const side = (across, along, sw, sd) => {
    const p = place(o, across, along);
    return wall(p.x, p.z, sw, sd, { rot, h, color });
  };
  const out = [];
  if (!open.includes('left')) out.push(side(w / 2 + t / 2, 0, t, d + 2 * t));
  if (!open.includes('right')) out.push(side(-(w / 2 + t / 2), 0, t, d + 2 * t));
  if (!open.includes('front')) out.push(side(0, d / 2 + t / 2, w + 2 * t, t));
  if (!open.includes('back')) out.push(side(0, -(d / 2 + t / 2), w + 2 * t, t));
  return out;
}

// A length of road: two kerbs, the buildings behind them, and a centre line.
// `width` is kerb face to kerb face — the road the vehicle drives on.
function buildStreet(o) {
  const { width, length, rot = 0, left = 4, right = 4, h = 5, color = 0xd9cfc2 } = o;
  const kt = 0.4;
  const at = (across) => place(o, across, 0);
  const k1 = at(width / 2 + kt / 2);
  const k2 = at(-(width / 2 + kt / 2));
  const b1 = at(width / 2 + kt + left / 2);
  const b2 = at(-(width / 2 + kt + right / 2));
  const mid = at(0);
  return [
    kerb(k1.x, k1.z, kt, length, rot),
    kerb(k2.x, k2.z, kt, length, rot),
    wall(b1.x, b1.z, left, length, { rot, h, color }),
    wall(b2.x, b2.z, right, length, { rot, h, color }),
    line(mid.x, mid.z, 0.14, length, rot),
  ];
}

// A bank of loading docks: a divider between each pair of slots and one at each
// end. `slots` is one entry per dock — 'trailer' for one already backed in, or
// null. `w` is the slot pitch, so the clear width is `w` minus a divider.
function buildDocks(o) {
  const { w = 4.7, d = 13.3, t = 0.5, rot = 0, slots, h = 4.5, color = 0xd7d9dd } = o;
  const first = -((slots.length - 1) / 2) * w;
  const out = [];
  for (let i = 0; i <= slots.length; i++) {
    const p = place(o, first + (i - 0.5) * w, 0);
    out.push(wall(p.x, p.z, t, d, { rot, h, color }));
  }
  slots.forEach((slot, i) => {
    if (!slot) return;
    const p = place(o, first + i * w, 0);
    out.push(trailer(p.x, p.z, rot));
  });
  return out;
}

// --- composites, as the data a level holds and an editor edits. The builders
// above are the only thing that reads these fields, and `expand()` is the only
// thing that calls the builders.

export const bay = (x, z, o = {}) => ({ type: 'bay', x, z, ...o });
export const bays = (x, z, slots, o = {}) => ({ type: 'bays', x, z, slots, ...o });
export const room = (x, z, w, d, o = {}) => ({ type: 'room', x, z, w, d, ...o });
export const street = (x, z, width, length, o = {}) =>
  ({ type: 'street', x, z, width, length, ...o });
export const docks = (x, z, slots, o = {}) => ({ type: 'docks', x, z, slots, ...o });

const COMPOSITE = {
  bay: buildBay, bays: buildBays, room: buildRoom, street: buildStreet, docks: buildDocks,
};

// A level's `objects` list, flattened into the two things the world needs:
// rectangles it collides with, and paint it does not. Anything whose type is a
// primitive passes through; everything else is a composite and is expanded by
// name. Called once per level build, in src/world.js.
export function expand(objects) {
  const flat = objects.flatMap((o) => (PRIMITIVE.has(o.type) ? [o] : COMPOSITE[o.type](o)));
  // Everything that is not the player's vehicle is a light pastel, so the one
  // saturated object on screen is always the thing being driven (DESIGN.md 8).
  // No level names a colour: the palette is walked here, in the order the
  // objects were listed, so a level looks the same every time it is built.
  //
  // The colour goes on a copy and not on the object itself. A primitive is
  // passed through by reference, so writing to it writes into the level — which
  // the editor then saves and exports, as a decimal nobody chose.
  let tint = 0;
  const out = flat.map((o) => (
    (o.type === 'parked' || o.type === 'dropped') && o.color == null
      ? { ...o, color: PASTEL[tint++ % PASTEL.length] }
      : o));
  return {
    obstacles: out.filter((o) => o.type !== 'line'),
    paint: out.filter((o) => o.type === 'line'),
  };
}

// --- what an editor may change about each of them.
//
// The palette above says what a level can contain; this says what about it is
// a number a person types. It is here and not in the editor because it is the
// same knowledge as the builders — a field missing from this table is a field
// the builder reads and nobody can set, and both are in view on one screen.
//
// `kind` is how the field is edited, not what it stores: `angle` is radians
// held in the level and shown in degrees, because a level is metres and
// radians and a person is metres and degrees.
//
// `args`, `opts` and `fn` are the builder's own call shape, which is not
// uniform: `wall` takes its size positionally and the rest in an object,
// `pillar` and `car` take everything positionally, `bay` takes nothing but a
// place and an object. Export writes that call, so it has to be written down,
// and it is written down beside the builder it describes. `def` is what a new
// one starts as, and it is exactly the keys the builder reads -- an editor that
// stored anything else would export a call that does not compile.
const N = (id, label, step = 0.1) => ({ id, label, kind: 'number', step });
const A = { id: 'rot', label: 'rotation', kind: 'angle' };
const XZ = [N('x', 'x'), N('z', 'z')];

export const SCHEMA = {
  wall: {
    name: 'Wall', args: ['x', 'z', 'w', 'd'], opts: true,
    def: { w: 4, d: 0.5, rot: 0, h: 2.6 },
    fields: [...XZ, N('w', 'width'), N('d', 'depth'), A, N('h', 'height')],
  },
  pillar: {
    name: 'Pillar', args: ['x', 'z', 'w', 'h'],
    def: { w: 0.7, h: 3.2 },
    fields: [...XZ, N('w', 'side'), N('h', 'height')],
  },
  cone: {
    name: 'Cone', args: ['x', 'z'],
    def: {},
    fields: XZ,
  },
  line: {
    name: 'Paint', fn: 'line', args: ['x', 'z', 'w', 'd', 'rot'],
    def: { w: 0.14, d: 4, rot: 0 },
    fields: [...XZ, N('w', 'width'), N('d', 'depth'), A],
  },
  parked: {
    name: 'Parked vehicle', fn: 'car', args: ['x', 'z', 'rot', 'spec'],
    def: { rot: 0, spec: 'hatch' },
    fields: [...XZ, A, { id: 'spec', label: 'vehicle', kind: 'vehicle' }],
  },
  bay: {
    name: 'Bay', args: ['x', 'z'], opts: true,
    def: { w: 2.5, d: 5, rot: 0, slot: null, out: 0 },
    fields: [...XZ, N('w', 'width'), N('d', 'depth'), A,
      { id: 'slot', label: 'parked in it', kind: 'vehicle', empty: true }, N('out', 'sticks out')],
  },
  bays: {
    name: 'Bay row', args: ['x', 'z', 'slots'], opts: true,
    def: { slots: ['hatch', null, 'hatch'], w: 2.5, d: 5, rot: 0, out: 0 },
    fields: [...XZ, N('w', 'bay width'), N('d', 'bay depth'), A, N('out', 'sticks out'),
      { id: 'slots', label: 'bays', kind: 'slots' }],
  },
  room: {
    name: 'Room', args: ['x', 'z', 'w', 'd'], opts: true,
    def: { w: 10, d: 12, rot: 0, t: 1.2, h: 3.2, open: ['front'] },
    fields: [...XZ, N('w', 'clear width'), N('d', 'clear depth'), A, N('t', 'wall thickness'),
      N('h', 'height'), { id: 'open', label: 'open sides', kind: 'sides' }],
  },
  street: {
    name: 'Street', args: ['x', 'z', 'width', 'length'], opts: true,
    def: { width: 7, length: 30, rot: 0, left: 4, right: 4, h: 5 },
    fields: [...XZ, N('width', 'road width'), N('length', 'length'), A,
      N('left', 'left building'), N('right', 'right building'), N('h', 'height')],
  },
  docks: {
    name: 'Loading docks', args: ['x', 'z', 'slots'], opts: true,
    def: { slots: ['trailer', null], w: 4.7, d: 13.3, rot: 0, t: 0.5, h: 4.5 },
    fields: [...XZ, N('w', 'slot pitch'), N('d', 'depth'), A, N('t', 'divider'), N('h', 'height'),
      { id: 'slots', label: 'docks', kind: 'slots', of: 'trailer' }],
  },
};

// What `expand()` would make of one object on its own. The editor needs this
// to know where an object is on screen without re-expanding the whole level,
// and it is the same call, so a composite cannot be drawn one way and collided
// another.
export const expandOne = (o) => expand([o]);
