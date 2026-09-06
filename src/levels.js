// Level geometry, in metres. Every number here is tuned against vehicle.js.
//
// The constant the swept ring gives you (2.83 m for the hatchback, 3.41 for
// the van) is the width of the band a FULL-LOCK turn sweeps. It says whether a
// corridor can be turned out of; it does not say what a bay entry costs. The
// two numbers that decide that, measured for the hatchback by driving the
// game's own integrate() out of a bay at full lock, are:
//
//   reverse in    1.60 m of aisle depth,  6.54 m of aisle past the bay,
//                                         0.95 m short of it
//   nose first    3.04 m of aisle depth,  4.09 m of run-up before the bay,
//                                         1.95 m past it
//
// Loosening the lock makes both numbers worse, so those are minima. They are
// what the levels below are cut against: a wall closer than 1.95 m past a bay
// forbids driving in, a yard shorter than 6.54 m past it forbids backing in,
// and a level is the choice of which of those two you take away.
//
// Run `pnpm validate` after editing: it checks that nothing blocks a target,
// that the car starts clear, and prints the real clearances.
//
// `record` on each level is the fewest direction changes that search has ever
// managed on that geometry, ordering routes the way the game scores them. It
// is a record and not an optimum — the search collapses exact poses into
// lattice cells (DESIGN.md 4) — so the validator fails a level only when it
// beats the number, never when it does worse. Nothing here reaches the player.

const P2 = Math.PI / 2;

const wall = (x, z, w, d, opt = {}) => ({
  kind: 'wall', x, z, w, d, rot: opt.rot ?? 0, h: opt.h ?? 2.6, color: opt.color,
});
const kerb = (x, z, w, d, rot = 0) => ({ kind: 'kerb', x, z, w, d, rot, h: 0.15 });
const pillar = (x, z, s = 0.7, h = 3.2) => ({ kind: 'pillar', x, z, w: s, d: s, rot: 0, h });
const cone = (x, z) => ({ kind: 'cone', x, z, w: 0.42, d: 0.42, rot: 0, h: 0.7 });
const parked = (x, z, rot = 0, spec = 'hatch', color) => ({ kind: 'parked', x, z, rot, spec, color });
// A dropped semitrailer: box on landing legs, no tractor.
const dropped = (x, z, rot = 0, color) => ({ kind: 'dropped', x, z, rot, w: 2.55, d: 13.0, h: 4.0, color });

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
  // Asks: where is the bay, what counts as parked, and which way do you go in?
  // Two rows and the aisle between them, which is what a car park is. The
  // aisle is 2.9 m: past the 1.60 m a reverse-in needs, short of the 3.04 m a
  // nose-first swing needs. So the bay is entered backwards, and the whole
  // series is built on the manoeuvre this level hands you on the first
  // attempt. Nothing is in the way and nothing is tight except the one number.
  {
    id: 'first-bay',
    name: 'First Bay',
    vehicle: 'hatch',
    theme: 'lot',
    record: 2,
    bounds: { minX: -16, maxX: 16, minZ: -15.5, maxZ: -3.0 },
    start: { x: 9, z: -9.05, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.5, d: 5, rot: 0 },
    obstacles: [
      parked(-2.5, -14.125, 0, 'hatch', pick(0)),
      parked(2.5, -14.125, 0, 'hatch', pick(1)),
      parked(-7.5, -14.125, 0, 'hatch', pick(2)),
      parked(5, -14.125, 0, 'hatch', pick(3)),
      parked(-12.5, -14.125, 0, 'hatch', pick(4)),
      // The far row. It is what makes the aisle an aisle. A parked body sits
      // 1.22 m off the point it is placed at, so the number that matters here
      // is the collider's near face at -7.60, not the -4.40 written below.
      parked(-3.5, -4.4, Math.PI, 'hatch', pick(5)),
      parked(1.5, -4.4, Math.PI, 'hatch', pick(6)),
      parked(6.5, -4.4, Math.PI, 'hatch', pick(7)),
      parked(-8.5, -4.4, Math.PI, 'hatch', pick(2)),
      parked(11.5, -4.4, Math.PI, 'hatch', pick(0)),
      parked(-13.5, -4.4, Math.PI, 'hatch', pick(3)),
    ],
    paint: [...bayRow(0, -13, 11, 2.5, 5), ...bayRow(0, -5.525, 11, 2.5, 5)],
  },

  // Asks: where does the room for the manoeuvre come from, when it is not on
  // the side you arrived from? Reversing in sweeps 6.5 m of aisle past the bay
  // and 0.95 m short of it; this bay has 1.45 m on its far side and 15 m on
  // the near one, so the only reverse-in is the one driven the other way up
  // the aisle. Nothing else in the series asks you to arrive from elsewhere.
  {
    id: 'short-side',
    name: 'The Short Side',
    vehicle: 'hatch',
    theme: 'garage',
    record: 2,
    bounds: { minX: -1.6, maxX: 15.7, minZ: -14.5, maxZ: 1.1 },
    start: { x: 13, z: -6.3, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.4, d: 5, rot: 0 },
    obstacles: [
      // the aisle is closed at both ends: 1.45 m past the bay, 15.6 m the other way
      wall(-2.15, -6.5, 1.4, 17, { h: 3.2, color: 0xd0d2d6 }),
      wall(16.3, -6.5, 1.4, 17, { h: 3.2, color: 0xd0d2d6 }),
      wall(7, -14.15, 20, 1.0, { h: 3.2, color: 0xd0d2d6 }),
      wall(7, 0.6, 20, 1.0, { h: 3.2, color: 0xd0d2d6 }),
      parked(2.4, -12.225, 0, 'hatch', pick(0)),
      parked(4.8, -12.225, 0, 'hatch', pick(1)),
      parked(7.2, -12.225, 0, 'van', pick(2)),
      parked(9.6, -12.225, 0, 'hatch', pick(3)),
      parked(12.0, -12.225, 0, 'hatch', pick(4)),
      parked(14.4, -12.225, 0, 'hatch', pick(5)),
      // the row opposite is full but for one bay: 6.9 m of aisle is already
      // enough to turn in, so the gap is not the turntable, it is the slack
      // that keeps the turn from costing two extra shunts (measured: 4 vs 6)
      parked(0, -1.375, Math.PI, 'hatch', pick(0)),
      parked(2.4, -1.375, Math.PI, 'hatch', pick(1)),
      parked(4.8, -1.375, Math.PI, 'hatch', pick(2)),
      parked(9.6, -1.375, Math.PI, 'hatch', pick(3)),
      parked(12.0, -1.375, Math.PI, 'hatch', pick(4)),
      parked(14.4, -1.375, Math.PI, 'hatch', pick(5)),
    ],
    paint: [...bayRow(7.2, -11, 7, 2.4, 5), ...bayRow(7.2, -2.6, 7, 2.4, 5)],
  },

  // Asks: what changes when the bay is beside the aisle instead of across it?
  // The car has to rotate into a gap rather than turn towards one, and the
  // pivot is the rear axle, not the middle of the car.
  {
    id: 'parallel',
    name: 'Kerbside',
    vehicle: 'hatch',
    theme: 'street',
    record: 1,
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

  // Asks: what do you do when there is no room to pull past on either side?
  // The yard is 11.6 m long, and a reverse-in needs 6.5 m of it on one side of
  // the bay; a nose-first entry needs 4.1 m of run-up and 1.95 m beyond, and
  // 3.04 m of depth. The yard is 5.2 m deep. The answer The Short Side and
  // Kerbside have taught is the one that does not fit here.
  {
    id: 'alcove',
    name: 'The Alcove',
    vehicle: 'hatch',
    theme: 'garage',
    record: 2,
    bounds: { minX: -5.1, maxX: 5.1, minZ: -14.2, maxZ: -2.9 },
    start: { x: 3.2, z: -5.9, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.6, d: 5, rot: 0 },
    obstacles: [
      // 4.6 m of yard each side of the bay. A nose-first swing wants 4.09 m of
      // run-up on one side and 1.95 m past on the other, and a reverse-in
      // wants 6.54 m past — so neither arc fits end to end, and the room has
      // to be made rather than found. The depth is untouched: 5.2 m, plenty
      // for either entry. It is the length that stopped being enough.
      wall(-5.3, -8.6, 1.4, 12, { h: 3.2, color: 0xd0d2d6 }),
      wall(5.3, -8.6, 1.4, 12, { h: 3.2, color: 0xd0d2d6 }),
      wall(0, -14.15, 15, 1.0, { h: 3.2, color: 0xd0d2d6 }),
      wall(0, -2.8, 15, 1.0, { h: 3.2, color: 0xd0d2d6 }),
      parked(-2.6, -12.225, 0, 'hatch', pick(1)),
      parked(2.6, -12.225, 0, 'hatch', pick(4)),
    ],
    paint: bayRow(0, -11, 3, 2.6, 5),
  },

  // Asks: which of two tight things do you do first? The 2.3 m slot and the
  // 90 degrees inside a 2.6 m corridor are each survivable; only one order of
  // them is. The series finale, and the only level about sequence.
  {
    id: 'impossible-gap',
    name: 'The Impossible Gap',
    vehicle: 'hatch',
    theme: 'alley',
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

  // Asks: what do you do when neither entry fits at all? A 3.4 m alley into a
  // 3.0 m doorway leaves no single arc; the answer is the empty alley behind
  // you, which is the first level where space you are not aiming at is the
  // resource.
  {
    id: 'dead-end',
    name: 'Dead End',
    vehicle: 'hatch',
    theme: 'alley',
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

  // Asks: how do you aim the reverse-in First Bay handed you, at a bay barely
  // wider than the car? Same 2.9 m lane; 0.64 m of slack rather than 0.74, and
  // a wall opposite rather than a row of cars, so there is nothing to line up
  // against.
  //
  // Last of the seven on purpose. This level introduces nothing — its
  // manoeuvre is First Bay's and its only new difficulty is precision — and
  // that is why it sits at the end rather than at position 2, where it was.
  // Every idea in the series has been handed over by the time you arrive, so
  // the level is the exam and not a lesson, which is the one job a level with
  // no idea of its own can hold honestly.
  //
  // It was moved rather than loosened. The window in which a perpendicular bay
  // costs a direction change at all is a lane between 2.83 m — below it
  // nothing can turn — and 3.04 m, above which a nose-first swing fits. That
  // is 0.21 m wide, so lane width cannot separate two levels and slack is the
  // only lever left, and it is a steep one: at this lane the search needs 5
  // direction changes for 0.64 m of slack, 4 for 0.69, 3 for 0.79. Loosening
  // to 0.79 would have cost 3 and made this bay roomier than First Bay's,
  // which is the drift the rename was meant to end. At the end of the series
  // the 5 is a finale rather than a spike.
  {
    id: 'tight-lane',
    name: 'Tight Lane',
    vehicle: 'hatch',
    theme: 'lot',
    record: 5,
    bounds: { minX: -14, maxX: 17, minZ: -15.5, maxZ: -6.0 },
    start: { x: 10, z: -9.05, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.4, d: 5, rot: 0 },
    obstacles: [
      wall(1.5, -7.0, 31, 1.2, { h: 1.5 }),
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
    id: 'van-life',
    name: 'Van Life',
    vehicle: 'van',
    theme: 'lot',
    record: 1,
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
    vehicle: 'van',
    theme: 'garage',
    record: 3,
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
    id: 'bus-stop',
    name: 'Bus Stop',
    vehicle: 'bus',
    theme: 'street',
    record: 1,
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
    vehicle: 'towcar',
    theme: 'lot',
    record: 1,
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
    vehicle: 'semi',
    theme: 'lot',
    record: 1,
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

  // Was "Blind Side": a semi backing into the dock on the side a real driver's
  // mirrors do not cover. This game has no mirrors and only outside views, so
  // that premise described nothing (constraint 9). What the level actually has
  // is the mirrored approach and a yard with two pillars in it, so no single
  // long arc fits. The name now says that. Whether the obstruction is a
  // sufficient idea for a level is open, with the other five large-vehicle
  // levels — see DESIGN, Open decisions.
  {
    id: 'yard-full',
    name: 'Yard Full',
    vehicle: 'semi',
    theme: 'garage',
    record: 1,
    bounds: { minX: -26, maxX: 30, minZ: -26, maxZ: 6 },
    // Approached driving -X, so the dock is reached from the opposite side to
    // Artic Dock's; the pillars below are what stop it being that level again.
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

  // ---- CANDIDATES (under test) ----------------------------------------
];

