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

const CAR_COLORS = [0x2f6fb5, 0x3d4450, 0xb8bcc4, 0x7a8b3f, 0x8c3550, 0xd8b03a, 0x35707a];
const pick = (i) => CAR_COLORS[i % CAR_COLORS.length];

export const LEVELS = [
  {
    id: 'first-bay',
    name: 'First Bay',
    hint: 'Swing wide, then straighten up. Hold Shift to crawl.',
    vehicle: 'hatch',
    theme: 'lot',
    par: 22,
    bounds: { minX: -16, maxX: 16, minZ: -15.5, maxZ: 10 },
    start: { x: 9, z: -6.5, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      parked(-2.5, -12.9, 0, 'hatch', pick(0)),
      parked(2.5, -12.9, Math.PI, 'hatch', pick(1)),
      parked(-7.5, -12.9, 0, 'hatch', pick(2)),
      parked(5, -12.9, 0, 'hatch', pick(3)),
      parked(-12.5, -12.9, Math.PI, 'hatch', pick(4)),
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
    par: 34,
    bounds: { minX: -14, maxX: 17, minZ: -15.5, maxZ: 4 },
    start: { x: 10, z: -8.3, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.4, d: 5, rot: 0 },
    obstacles: [
      wall(1.5, -5.5, 31, 1.2, { h: 1.5 }),
      parked(-2.4, -12.9, 0, 'hatch', pick(1)),
      parked(2.4, -12.9, Math.PI, 'hatch', pick(5)),
      parked(-7.2, -12.9, 0, 'hatch', pick(2)),
      parked(7.2, -12.9, 0, 'hatch', pick(3)),
      parked(-12, -12.9, Math.PI, 'hatch', pick(6)),
      parked(12, -12.9, 0, 'van', pick(0)),
    ],
    paint: bayRow(0, -13, 11, 2.4, 5),
  },

  {
    id: 'parallel',
    name: 'Kerbside',
    hint: 'A 5.7 m gap for a 3.95 m car. Line up your rear wheels with their bumper, full lock, reverse.',
    vehicle: 'hatch',
    theme: 'street',
    par: 40,
    bounds: { minX: -9, maxX: 9, minZ: -22, maxZ: 12 },
    start: { x: 0.8, z: -14, yaw: 0 },
    target: { x: 2.85, z: -1.23, w: 2.2, d: 5.4, rot: 0 },
    obstacles: [
      kerb(4.2, -5, 0.4, 32),
      wall(6.6, -5, 4, 32, { h: 5, color: 0x6b6157 }),
      kerb(-3.7, -5, 0.4, 32),
      wall(-6, -5, 4, 32, { h: 5, color: 0x6b6157 }),
      parked(2.9, -6.05, 0, 'hatch', pick(0)),
      parked(2.9, 3.6, 0, 'hatch', pick(3)),
      parked(2.9, -12.2, 0, 'hatch', pick(5)),
      parked(2.9, 8.6, 0, 'van', pick(2)),
    ],
    paint: [{ x: 0.2, z: -5, w: 0.14, d: 32, rot: 0 }],
  },

  {
    id: 'squeeze',
    name: 'The Squeeze',
    hint: '4.85 m of kerb for a 3.95 m car, with a wall 4.6 m behind you. Expect three or four shunts.',
    vehicle: 'hatch',
    theme: 'street',
    par: 55,
    bounds: { minX: -6, maxX: 9, minZ: -20, maxZ: 10 },
    start: { x: 0.2, z: -13, yaw: 0 },
    target: { x: 2.85, z: -1.65, w: 2.2, d: 4.6, rot: 0 },
    obstacles: [
      kerb(4.2, -5, 0.4, 28),
      wall(6.6, -5, 4, 28, { h: 5, color: 0x6b6157 }),
      wall(-3.4, -5, 1.6, 28, { h: 3.2, color: 0x6b6157 }),
      parked(2.9, -6.05, 0, 'hatch', pick(4)),
      parked(2.9, 2.75, 0, 'hatch', pick(1)),
      parked(2.9, -11.5, 0, 'van', pick(2)),
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
    par: 60,
    bounds: { minX: -4.5, maxX: 8, minZ: -13, maxZ: 13 },
    start: { x: 0, z: 6, yaw: Math.PI },
    target: { x: 4.2, z: -3, w: 2.6, d: 5, rot: P2 },
    obstacles: [
      wall(-2.35, 0, 1.3, 26, { h: 4.2, color: 0x77685c }),
      wall(2.35, -8.75, 1.3, 8.5, { h: 4.2, color: 0x77685c }),
      wall(2.35, 5.75, 1.3, 14.5, { h: 4.2, color: 0x77685c }),
      wall(4.35, -4.65, 5.3, 0.3, { h: 3.4, color: 0x8a7c6d }),
      wall(4.35, -1.35, 5.3, 0.3, { h: 3.4, color: 0x8a7c6d }),
      wall(6.95, -3, 0.3, 3.3, { h: 3.4, color: 0x8a7c6d }),
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
    par: 50,
    bounds: { minX: -14, maxX: 17, minZ: -14, maxZ: 4 },
    start: { x: 10.5, z: -6.6, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      wall(1.5, -3, 31, 0.6, { h: 2.4, color: 0x5c5c60 }),
      pillar(-1.75, -8.95),
      pillar(4.6, -4.6, 0.6),
      pillar(-7.5, -8.95),
      pillar(9.4, -8.95),
      parked(2.5, -10.9, Math.PI, 'hatch', pick(2)),
      parked(5, -10.9, 0, 'hatch', pick(6)),
      parked(-5, -10.9, 0, 'van', pick(1)),
      parked(-10, -10.9, Math.PI, 'hatch', pick(4)),
    ],
    paint: bayRow(0, -11, 10, 2.5, 5),
  },

  {
    id: 'threading',
    name: 'Threading',
    hint: 'Three 2.25 m gates, each offset 3 m from the last. Straighten before every one.',
    vehicle: 'hatch',
    theme: 'lot',
    par: 65,
    bounds: { minX: -6, maxX: 6, minZ: -30, maxZ: 11 },
    start: { x: -1.8, z: 4, yaw: Math.PI },
    target: { x: 0, z: -26.5, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      ...gate(-4, -1.8, 2.25, -6, 6),
      ...gate(-12, 1.2, 2.25, -6, 6),
      ...gate(-20, -1.8, 2.25, -6, 6),
      wall(-3.35, -26.5, 3.3, 5.2, { h: 1.8, color: 0x6f7076 }),
      wall(3.35, -26.5, 3.3, 5.2, { h: 1.8, color: 0x6f7076 }),
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
    par: 60,
    bounds: { minX: -16, maxX: 19, minZ: -16, maxZ: 4 },
    start: { x: 11, z: -6.7, yaw: -P2 },
    target: { x: 0, z: -12.5, w: 3, d: 6, rot: 0 },
    obstacles: [
      wall(1.5, -3.6, 35, 0.6, { h: 1.6 }),
      parked(-3, -12.4, 0, 'van', pick(2)),
      parked(3, -12.4, Math.PI, 'van', pick(1)),
      parked(-9, -12.4, 0, 'van', pick(5)),
      parked(9, -12.4, 0, 'hatch', pick(3)),
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
    par: 80,
    bounds: { minX: -10, maxX: 21, minZ: -13, maxZ: 6 },
    start: { x: -3.5, z: 0, yaw: P2 },
    target: { x: 13.3, z: -9.5, w: 3.2, d: 6, rot: 0 },
    obstacles: [
      wall(5.5, 3.6, 31, 2.2, { h: 3.4, color: 0x6b6157 }),
      wall(-0.25, -3.6, 19.5, 2.2, { h: 3.4, color: 0x6b6157 }),
      wall(19.5, -3.6, 3, 2.2, { h: 3.4, color: 0x6b6157 }),
      wall(8.9, -7.75, 1.2, 10.5, { h: 3.4, color: 0x6b6157 }),
      wall(18.6, -7.75, 1.2, 10.5, { h: 3.4, color: 0x6b6157 }),
      parked(16.2, -9.4, 0, 'van', pick(0)),
      parked(10.55, -9.4, 0, 'van', pick(5)),
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
    par: 110,
    bounds: { minX: -16, maxX: 11.5, minZ: -9.5, maxZ: 11 },
    start: { x: -9, z: 0, yaw: P2 },
    target: { x: 8.1, z: -5.5, w: 2.5, d: 4.6, rot: 0 },
    obstacles: [
      // The wall, with a 2.3 m slot at z = 0
      wall(2, -5.325, 0.5, 8.35, { h: 3.6, color: 0x77685c }),
      wall(2, 6.075, 0.5, 9.85, { h: 3.6, color: 0x77685c }),
      // The bay slot inside the chamber
      wall(6.4, -5.45, 0.4, 8.1, { h: 3, color: 0x8a7c6d }),
      wall(9.8, -5.45, 0.4, 8.1, { h: 3, color: 0x8a7c6d }),
      // Cars pinching the chamber corridor down to 2.6 m
      parked(3.9, 3.2, 0, 'hatch', pick(1)),
      parked(9.4, 3.2, 0, 'hatch', pick(4)),
      // The approach outside
      parked(-2, -2.8, P2, 'hatch', pick(2)),
      parked(-2, 2.8, P2, 'van', pick(0)),
      cone(-6, -2.4),
      cone(-6, 2.4),
    ],
    paint: bayPaint(8.1, -5.5, 2.5, 4.6),
  },
];

export function levelById(id) {
  return LEVELS.find((l) => l.id === id);
}
