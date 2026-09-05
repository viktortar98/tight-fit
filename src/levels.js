// Level geometry, in metres. Every number here is tuned against two figures
// from vehicle.js: the hatchback sweeps a 2.83 m ring at full lock and is
// 1.76 m wide; the van sweeps 3.41 m and is 2.02 m wide. A corridor narrower
// than the swept width cannot be turned out of in a single arc — which is
// what turns a level from "drive in" into "shunt your way in".
//
// Run `node tools/validate.js` after editing: it checks that nothing blocks a
// target, that the car starts clear, and prints the real clearances.

const P2 = Math.PI / 2;

const wall = (x, z, w, d, opt = {}) => ({
  kind: 'wall', x, z, w, d, rot: opt.rot ?? 0, h: opt.h ?? 2.6, color: opt.color,
});
const kerb = (x, z, w, d, rot = 0) => ({ kind: 'kerb', x, z, w, d, rot, h: 0.15 });
const pillar = (x, z, s = 0.7, h = 3.2) => ({ kind: 'pillar', x, z, w: s, d: s, rot: 0, h });
const barrier = (x, z, w, d, rot = 0) => ({ kind: 'barrier', x, z, w, d, rot, h: 1.05 });
const cone = (x, z) => ({ kind: 'cone', x, z, w: 0.42, d: 0.42, rot: 0, h: 0.7 });
const parked = (x, z, rot = 0, spec = 'hatch', color) => ({ kind: 'parked', x, z, rot, spec, color });
// A dropped semitrailer: box on landing legs, no tractor.
const dropped = (x, z, rot = 0, color) => ({ kind: 'dropped', x, z, rot, w: 2.55, d: 13.0, h: 4.0, color });

// Two blocks spanning [x0,x1] at depth z, leaving `gapW` centred on `gapX`.
function gate(z, gapX, gapW, x0, x1, depth = 0.5) {
  const leftEnd = gapX - gapW / 2;
  const rightStart = gapX + gapW / 2;
  return [
    barrier((x0 + leftEnd) / 2, z, leftEnd - x0, depth),
    barrier((rightStart + x1) / 2, z, x1 - rightStart, depth),
  ];
}

// Painted bay outline: two flanks and a stop line. Decoration only.
function bayPaint(x, z, w, d, rot = 0) {
  const c = Math.cos(rot), s = Math.sin(rot);
  const at = (lx, lz) => ({ x: x + lx * c + lz * s, z: z - lx * s + lz * c });
  const t = 0.12;
  return [
    { ...at(-w / 2, 0), w: t, d, rot },
    { ...at(w / 2, 0), w: t, d, rot },
    { ...at(0, -d / 2 + t), w, d: t, rot },
  ];
}

function bayRow(xCenter, z, count, w, d, rot = 0) {
  const out = [];
  const start = xCenter - Math.floor(count / 2) * w;
  for (let i = 0; i < count; i++) out.push(...bayPaint(start + i * w, z, w, d, rot));
  return out;
}

// Everything that is not the player's vehicle is a light pastel, so the one
// saturated object on screen is always the thing you are driving.
const PASTEL = [0xcfe0ef, 0xeadfd0, 0xdcead8, 0xf2dee1, 0xe3dded, 0xd7e9e8, 0xefe8d3, 0xe6e2db];
const pick = (i) => PASTEL[i % PASTEL.length];

export const LEVELS = [
  {
    id: 'first-bay',
    name: 'First Bay',
    hint: 'Swing wide, then straighten up. Hold Shift to crawl.',
    vehicle: 'hatch',
    theme: 'lot',
    // proven possible in this many direction changes by tools/validate.js
    record: 0,
    bounds: { minX: -16, maxX: 16, minZ: -15.5, maxZ: 10 },
    start: { x: 9, z: -6.5, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      parked(-2.5, -14.125, 0, 'hatch', pick(0)),
      parked(2.5, -11.675, Math.PI, 'hatch', pick(1)),
      parked(-7.5, -14.125, 0, 'hatch', pick(2)),
      parked(5, -14.125, 0, 'hatch', pick(3)),
      parked(-12.5, -11.675, Math.PI, 'hatch', pick(4)),
      kerb(0, 1.2, 26, 0.4),
      cone(13.5, -6.5),
    ],
    paint: bayRow(0, -13, 11, 2.5, 5),
  },

  {
    id: 'back-in',
    name: 'Back In',
    hint: 'The lane is 4.4 m wide — too tight to swing in nose-first. Drive past, then reverse.',
    vehicle: 'hatch',
    theme: 'lot',
    // proven possible in this many direction changes by tools/validate.js
    record: 1,
    bounds: { minX: -14, maxX: 17, minZ: -15.5, maxZ: 4 },
    start: { x: 10, z: -8.3, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.4, d: 5, rot: 0 },
    obstacles: [
      wall(1.5, -5.5, 31, 1.2, { h: 1.5 }),
      parked(-2.4, -14.125, 0, 'hatch', pick(1)),
      parked(2.4, -11.675, Math.PI, 'hatch', pick(5)),
      parked(-7.2, -14.125, 0, 'hatch', pick(2)),
      parked(7.2, -14.125, 0, 'hatch', pick(3)),
      parked(-12, -11.675, Math.PI, 'hatch', pick(6)),
      parked(12, -14.6, 0, 'van', pick(0)),
    ],
    paint: bayRow(0, -13, 11, 2.4, 5),
  },

  {
    id: 'parallel',
    name: 'Kerbside',
    hint: 'A 5.7 m gap for a 3.95 m car. Line up your rear wheels with their bumper, full lock, reverse.',
    vehicle: 'hatch',
    theme: 'street',
    // proven possible in this many direction changes by tools/validate.js
    record: 4,
    bounds: { minX: -9, maxX: 9, minZ: -22, maxZ: 12 },
    start: { x: -0.4, z: -15, yaw: 0 },
    target: { x: 2.85, z: -1.23, w: 2.2, d: 5.4, rot: 0 },
    obstacles: [
      kerb(4.2, -5, 0.4, 32),
      wall(6.6, -5, 4, 32, { h: 5, color: 0xd9cfc2 }),
      kerb(-3.7, -5, 0.4, 32),
      wall(-6, -5, 4, 32, { h: 5, color: 0xd9cfc2 }),
      parked(2.9, -7.275, 0, 'hatch', pick(0)),
      parked(2.9, 2.375, 0, 'hatch', pick(3)),
      parked(2.9, -13.425, 0, 'hatch', pick(5)),
      parked(2.9, 6.9, 0, 'van', pick(2)),
    ],
    paint: [{ x: 0.2, z: -5, w: 0.14, d: 32, rot: 0 }],
  },

  {
    id: 'squeeze',
    name: 'The Squeeze',
    hint: '4.85 m of kerb for a 3.95 m car, with a wall 4.6 m behind you. Expect three or four shunts.',
    vehicle: 'hatch',
    theme: 'street',
    // proven possible in this many direction changes by tools/validate.js
    record: 8,
    bounds: { minX: -6, maxX: 9, minZ: -20, maxZ: 10 },
    start: { x: -0.2, z: -13.5, yaw: 0 },
    target: { x: 2.85, z: -1.65, w: 2.2, d: 4.6, rot: 0 },
    obstacles: [
      kerb(4.2, -5, 0.4, 28),
      wall(6.6, -5, 4, 28, { h: 5, color: 0xd9cfc2 }),
      wall(-3.4, -5, 1.6, 28, { h: 3.2, color: 0xd9cfc2 }),
      parked(2.9, -7.275, 0, 'hatch', pick(4)),
      parked(2.9, 1.525, 0, 'hatch', pick(1)),
      parked(2.9, -13.2, 0, 'van', pick(2)),
      cone(-1.9, -9),
      cone(-1.9, 7),
    ],
    paint: [],
  },

  {
    id: 'dead-end',
    name: 'Dead End',
    hint: 'A 3.4 m alley into a 3.0 m doorway. No single arc fits — borrow the dead end behind you.',
    vehicle: 'hatch',
    theme: 'alley',
    // proven possible in this many direction changes by tools/validate.js
    record: 4,
    bounds: { minX: -4.5, maxX: 8, minZ: -13, maxZ: 13 },
    start: { x: 0, z: 6, yaw: Math.PI },
    target: { x: 4.2, z: -3, w: 2.6, d: 5, rot: P2 },
    obstacles: [
      wall(-2.35, 0, 1.3, 26, { h: 4.2, color: 0xd6c9bb }),
      wall(2.35, -8.75, 1.3, 8.5, { h: 4.2, color: 0xd6c9bb }),
      wall(2.35, 5.75, 1.3, 14.5, { h: 4.2, color: 0xd6c9bb }),
      wall(4.35, -4.65, 5.3, 0.3, { h: 3.4, color: 0xe1d7c9 }),
      wall(4.35, -1.35, 5.3, 0.3, { h: 3.4, color: 0xe1d7c9 }),
      wall(6.95, -3, 0.3, 3.3, { h: 3.4, color: 0xe1d7c9 }),
      cone(-1.2, -10),
      cone(1.2, -11.5),
    ],
    paint: bayPaint(4.2, -3, 2.6, 5, P2),
  },

  {
    id: 'pillars',
    name: 'Pillar Problem',
    hint: 'Concrete does not move. Past the lane pillar, then reverse around the one on the bay corner.',
    vehicle: 'hatch',
    theme: 'garage',
    // proven possible in this many direction changes by tools/validate.js
    record: 3,
    bounds: { minX: -14, maxX: 17, minZ: -14, maxZ: 4 },
    start: { x: 10.5, z: -6.6, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      wall(1.5, -3, 31, 0.6, { h: 2.4, color: 0xd0d2d6 }),
      pillar(-1.75, -8.95),
      pillar(4.6, -4.6, 0.6),
      pillar(-7.5, -8.95),
      pillar(9.4, -8.95),
      parked(2.5, -9.675, Math.PI, 'hatch', pick(2)),
      parked(5, -12.125, 0, 'hatch', pick(6)),
      parked(-5, -12.6, 0, 'van', pick(1)),
      parked(-10, -9.675, Math.PI, 'hatch', pick(4)),
    ],
    paint: bayRow(0, -11, 10, 2.5, 5),
  },

  {
    id: 'threading',
    name: 'Threading',
    hint: 'Three 2.25 m gates, each offset 3 m from the last. Straighten before every one.',
    vehicle: 'hatch',
    theme: 'lot',
    // proven possible in this many direction changes by tools/validate.js
    record: 7,
    bounds: { minX: -6, maxX: 6, minZ: -30, maxZ: 11 },
    start: { x: -1.8, z: 4, yaw: Math.PI },
    target: { x: 0, z: -26.5, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      ...gate(-4, -1.8, 2.25, -6, 6),
      ...gate(-12, 1.2, 2.25, -6, 6),
      ...gate(-20, -1.8, 2.25, -6, 6),
      wall(-3.35, -26.5, 3.3, 5.2, { h: 1.8, color: 0xd7d9dd }),
      wall(3.35, -26.5, 3.3, 5.2, { h: 1.8, color: 0xd7d9dd }),
      cone(-4.8, -8),
      cone(4.8, -16),
    ],
    paint: bayPaint(0, -26.5, 2.5, 5),
  },

  {
    id: 'van-life',
    name: 'Van Life',
    hint: '5.3 m of van, a 5.6 m lane, a 3 m bay. Everything you learned is now half a metre too big.',
    vehicle: 'van',
    theme: 'lot',
    // proven possible in this many direction changes by tools/validate.js
    record: 3,
    bounds: { minX: -16, maxX: 19, minZ: -16, maxZ: 4 },
    start: { x: 11, z: -6.7, yaw: -P2 },
    target: { x: 0, z: -12.5, w: 3, d: 6, rot: 0 },
    obstacles: [
      wall(1.5, -3.6, 35, 0.6, { h: 1.6 }),
      parked(-3, -14.1, 0, 'van', pick(2)),
      parked(3, -10.7, Math.PI, 'van', pick(1)),
      parked(-9, -14.1, 0, 'van', pick(5)),
      parked(9, -13.625, 0, 'hatch', pick(3)),
      pillar(6.2, -8.2, 0.6, 2.8),
    ],
    paint: bayRow(0, -12.5, 9, 3, 6),
  },

  {
    id: 'loading-dock',
    name: 'Loading Dock',
    hint: 'Reverse blind around the corner between two vans. Press C for the overhead view.',
    vehicle: 'van',
    theme: 'garage',
    // proven possible in this many direction changes by tools/validate.js
    record: 6,
    bounds: { minX: -10, maxX: 21, minZ: -13, maxZ: 6 },
    start: { x: -3.5, z: 0, yaw: P2 },
    target: { x: 13.3, z: -9.5, w: 3.2, d: 6, rot: 0 },
    obstacles: [
      wall(5.5, 3.6, 31, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(-0.25, -3.6, 19.5, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(19.5, -3.6, 3, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(8.9, -7.75, 1.2, 10.5, { h: 3.4, color: 0xd9cfc2 }),
      wall(18.6, -7.75, 1.2, 10.5, { h: 3.4, color: 0xd9cfc2 }),
      parked(16.2, -11.1, 0, 'van', pick(0)),
      parked(10.55, -11.1, 0, 'van', pick(5)),
      cone(9.9, -4.9),
      cone(20, 1.8),
    ],
    paint: [
      ...bayPaint(13.3, -9.5, 3.2, 6),
      { x: 6, z: 0, w: 22, d: 0.14, rot: 0 },
    ],
  },

  {
    id: 'impossible-gap',
    name: 'The Impossible Gap',
    hint: 'A 2.3 m slot, then ninety degrees inside a 2.6 m corridor. It fits. Barely.',
    vehicle: 'hatch',
    theme: 'alley',
    // proven possible in this many direction changes by tools/validate.js
    record: 3,
    bounds: { minX: -16, maxX: 11.5, minZ: -9.5, maxZ: 11 },
    start: { x: -9, z: 0, yaw: P2 },
    target: { x: 8.1, z: -5.5, w: 2.5, d: 4.6, rot: 0 },
    obstacles: [
      // The wall, with a 2.3 m slot at z = 0
      wall(2, -5.325, 0.5, 8.35, { h: 3.6, color: 0xd6c9bb }),
      wall(2, 6.075, 0.5, 9.85, { h: 3.6, color: 0xd6c9bb }),
      // The bay slot inside the chamber
      wall(6.4, -5.45, 0.4, 8.1, { h: 3, color: 0xe1d7c9 }),
      wall(9.8, -5.45, 0.4, 8.1, { h: 3, color: 0xe1d7c9 }),
      // Cars pinching the chamber corridor down to 2.6 m
      parked(3.9, 1.975, 0, 'hatch', pick(1)),
      parked(9.4, 1.975, 0, 'hatch', pick(4)),
      // The approach outside
      parked(-3.225, -2.8, P2, 'hatch', pick(2)),
      parked(-3.7, 2.8, P2, 'van', pick(0)),
      cone(-6, -2.4),
      cone(-6, 2.4),
    ],
    paint: bayPaint(8.1, -5.5, 2.5, 4.6),
  },
  {
    id: 'bus-stop',
    name: 'Bus Stop',
    hint: '11 m of bus into a 13.5 m gap. The lock is good — the overhang is not.',
    vehicle: 'bus',
    theme: 'street',
    // proven possible in this many direction changes by tools/validate.js
    record: 4,
    bounds: { minX: -13, maxX: 11, minZ: -32, maxZ: 22 },
    start: { x: -1.9, z: -25, yaw: 0 },
    target: { x: 2.6, z: -1.75, w: 3.2, d: 12.4, rot: 0 },
    obstacles: [
      kerb(4.55, -6, 0.4, 56),
      wall(7.8, -6, 6, 56, { h: 6, color: 0xd9cfc2 }),
      kerb(-7.8, -6, 0.4, 56),
      wall(-10.8, -6, 5, 56, { h: 6, color: 0xd9cfc2 }),
      // the gap: 13.5 m of kerb between two parked buses
      parked(2.6, -16.6, 0, 'bus', pick(0)),
      parked(2.6, 13.1, Math.PI, 'bus', pick(5)),
      // the shelter, right behind the kerb
      wall(5.4, -1.75, 1.2, 6, { h: 2.6, color: 0xe1d7c9 }),
      parked(-5.2, -22, 0, 'hatch', pick(3)),
      cone(-5.2, 6),
    ],
    paint: [
      { x: -1.6, z: -6, w: 0.14, d: 56, rot: 0 },
      ...bayPaint(2.6, -1.75, 3.2, 12.4),
    ],
  },

  {
    id: 'trailer-trouble',
    name: 'Trailer Trouble',
    hint: 'Reverse the trailer, not the car. Turn the wrong way and it folds — watch the trailer gauge.',
    vehicle: 'towcar',
    theme: 'lot',
    // proven possible in this many direction changes by tools/validate.js
    record: 3,
    bounds: { minX: -17, maxX: 19, minZ: -16.5, maxZ: 7 },
    start: { x: 13, z: -5.5, yaw: -P2 },
    target: { x: 0, z: -13.9, w: 2.9, d: 4.1, rot: 0, part: 'trailer' },
    obstacles: [
      wall(1.5, -0.4, 37, 0.8, { h: 1.5 }),
      parked(-3, -13.4, 0, 'hatch', pick(1)),
      parked(3, -13.4, Math.PI, 'hatch', pick(5)),
      parked(-9, -13.4, 0, 'van', pick(2)),
      parked(9, -13.4, 0, 'hatch', pick(3)),
      cone(7.5, -3.4),
      cone(-7.5, -3.4),
    ],
    paint: bayRow(0, -13.9, 9, 3, 4.3),
  },

  {
    id: 'artic-dock',
    name: 'Artic Dock',
    hint: 'Sixteen and a half metres, hinged in the middle. The trailer parks, not the cab.',
    vehicle: 'semi',
    theme: 'lot',
    // proven possible in this many direction changes by tools/validate.js
    record: 5,
    bounds: { minX: -26, maxX: 26, minZ: -26, maxZ: 13 },
    start: { x: -11, z: 6, yaw: P2 },
    target: { x: 0, z: -17.1, w: 3.9, d: 15.0, rot: 0, part: 'trailer' },
    obstacles: [
      wall(-2.35, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(2.35, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(-7.05, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(7.05, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(0, -25.4, 52, 1.2, { h: 6, color: 0xd9cfc2 }),
      dropped(-4.7, -18, 0, pick(0)),
      dropped(4.7, -18, 0, pick(6)),
      parked(-21, -6, P2, 'semi', pick(2)),
      cone(-13, -9),
      cone(13, -9),
    ],
    paint: [...bayPaint(0, -17.1, 3.9, 15.0), { x: 0, z: -4, w: 44, d: 0.16, rot: 0 }],
  },

  {
    id: 'blind-side',
    name: 'Blind Side',
    hint: 'The dock is on your right, where the mirror shows you nothing, and the yard is shorter than the truck plus its swing.',
    vehicle: 'semi',
    theme: 'garage',
    // proven possible in this many direction changes by tools/validate.js
    record: 1,
    bounds: { minX: -26, maxX: 30, minZ: -26, maxZ: 6 },
    // Driving -X puts the dock on the driver's right, which is the whole level.
    start: { x: 16, z: -3, yaw: -P2 },
    target: { x: 8.1, z: -17.1, w: 3.9, d: 15.0, rot: 0, part: 'trailer' },
    obstacles: [
      wall(5.75, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(10.45, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(1.05, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(15.15, -18.15, 0.5, 13.3, { h: 4.5, color: 0xd7d9dd }),
      wall(0, -25.4, 50, 1.2, { h: 6, color: 0xd9cfc2 }),
      dropped(3.4, -18, 0, pick(4)),
      dropped(12.8, -18, 0, pick(1)),
      // the yard is not empty: no room for one long lazy arc
      pillar(-1.5, -6.5, 0.9, 5),
      pillar(19.5, -7, 0.9, 5),
      parked(-22, 3, P2, 'van', pick(2)),
      cone(-8, -8),
      cone(23, -8),
    ],
    paint: [...bayPaint(8.1, -17.1, 3.9, 15.0), { x: 0, z: -4, w: 44, d: 0.16, rot: 0 }],
  },
];

// Par is the record plus a working allowance. Matching a solver that can try
// every line is not the bar; getting near it is. It lives here, once, so that
// changing the bar changes every level at the same time.
export const PAR_ALLOWANCE = 2;
export const parOf = (level) => level.record + PAR_ALLOWANCE;

export function levelById(id) {
  return LEVELS.find((l) => l.id === id);
}
