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
// A level is a list of objects from src/objects.js and nothing else. The
// numbers it writes down are the ones the level is *about* — an aisle width, a
// bay pitch, the length of a street. Everything that follows from those (where
// a car's rear axle goes so the car sits centred in its bay, where a kerb sits
// so the road is the width asked for) is worked out there, once, so a level
// cannot contain a wrong subtraction and an editor can round-trip it.

import { bay, bays, car, cone, docks, line, pillar, room, street, wall } from './objects.js';

const P2 = Math.PI / 2;

export const LEVELS = [
  // Asks: where is the bay, what counts as parked, and which way do you go in?
  // Two rows and the aisle between them, which is what a car park is. The
  // aisle is 2.9 m from the bay mouth to the far row's bumpers: past the
  // 1.60 m a reverse-in needs, short of the 3.04 m a nose-first swing needs.
  // So the bay is entered backwards, and the whole series is built on the
  // manoeuvre this level hands you on the first attempt. Nothing is in the way
  // and nothing is tight except the one number.
  {
    id: 'first-bay',
    name: 'First Bay',
    vehicle: 'hatch',
    theme: 'lot',
    bounds: { minX: -16, maxX: 16, minZ: -15.5, maxZ: -3.0 },
    start: { x: 9, z: -9.05, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.5, d: 5, rot: 0 },
    objects: [
      bays(0, -13, ['hatch', null, 'hatch', null, 'hatch', null, 'hatch', 'hatch', null, null, null],
        { w: 2.5, d: 5 }),
      // The far row. It is what makes the aisle an aisle: its bumpers are at
      // z = -7.60, and the bay mouth is at -10.50.
      bays(0, -5.625, ['hatch', null, 'hatch', null, 'hatch', null, 'hatch', null, 'hatch', null, 'hatch'],
        { w: 2.5, d: 5, rot: Math.PI }),
    ],
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
    bounds: { minX: -1.6, maxX: 15.7, minZ: -14.5, maxZ: 1.1 },
    start: { x: 13, z: -6.3, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.4, d: 5, rot: 0 },
    objects: [
      // the aisle is closed at both ends: 1.45 m past the bay, 15.6 m the other way
      room(7.075, -6.775, 17.05, 13.75),
      bays(7.2, -11, [null, 'hatch', 'hatch', 'van', 'hatch', 'hatch', 'hatch'], { w: 2.4, d: 5 }),
      // the row opposite is full but for one bay: 6.9 m of aisle is already
      // enough to turn in, so the gap is not the turntable, it is the slack
      // that keeps the turn from costing two extra shunts (measured: 4 vs 6)
      bays(7.2, -2.6, ['hatch', 'hatch', 'hatch', null, 'hatch', 'hatch', 'hatch'],
        { w: 2.4, d: 5, rot: Math.PI }),
    ],
  },

  // Asks: what changes when the bay is beside the aisle instead of across it?
  // The car has to rotate into a gap rather than turn towards one, and the
  // pivot is the rear axle, not the middle of the car.
  {
    id: 'parallel',
    name: 'Kerbside',
    vehicle: 'hatch',
    theme: 'street',
    bounds: { minX: -9, maxX: 9, minZ: -22, maxZ: 12 },
    start: { x: -0.4, z: -15, yaw: 0 },
    target: { x: 2.85, z: -1.23, w: 2.2, d: 5.4, rot: 0 },
    objects: [
      street(0.25, -5, 7.5, 32),
      // the gap is 5.7 m of kerb: 1.7 m longer than the car
      car(2.9, -7.275, 0, 'hatch'),
      car(2.9, 2.375, 0, 'hatch'),
      car(2.9, -13.425, 0, 'hatch'),
      car(2.9, 6.9, 0, 'van'),
    ],
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
    bounds: { minX: -5.1, maxX: 5.1, minZ: -14.2, maxZ: -2.9 },
    start: { x: 3.2, z: -5.9, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.6, d: 5, rot: 0 },
    objects: [
      // 4.6 m of yard each side of the bay. A nose-first swing wants 4.09 m of
      // run-up on one side and 1.95 m past on the other, and a reverse-in
      // wants 6.54 m past — so neither arc fits end to end, and the room has
      // to be made rather than found. The depth is untouched: 5.2 m, plenty
      // for either entry. It is the length that stopped being enough.
      room(0, -8.475, 9.2, 10.35),
      bays(0, -11, ['hatch', null, 'hatch'], { w: 2.6, d: 5 }),
    ],
  },

  // Asks: which of two tight things do you do first? The 2.3 m slot and the
  // 90 degrees inside a 2.6 m corridor are each survivable; only one order of
  // them is. The only level in the series about sequence.
  {
    id: 'impossible-gap',
    name: 'The Impossible Gap',
    vehicle: 'hatch',
    theme: 'alley',
    bounds: { minX: -16, maxX: 11.5, minZ: -9.5, maxZ: 11 },
    start: { x: -9, z: 0, yaw: P2 },
    target: { x: 8.1, z: -5.5, w: 2.5, d: 4.6, rot: 0 },
    objects: [
      // The wall, with a 2.3 m slot at z = 0
      wall(2, -5.325, 0.5, 8.35, { h: 3.6, color: 0xd6c9bb }),
      wall(2, 6.075, 0.5, 9.85, { h: 3.6, color: 0xd6c9bb }),
      // The bay slot inside the chamber
      wall(6.4, -5.45, 0.4, 8.1, { h: 3, color: 0xe1d7c9 }),
      wall(9.8, -5.45, 0.4, 8.1, { h: 3, color: 0xe1d7c9 }),
      bay(8.1, -5.5, { w: 2.5, d: 4.6 }),
      // Cars pinching the chamber corridor down to 2.6 m
      car(3.9, 1.975, 0, 'hatch'),
      car(9.4, 1.975, 0, 'hatch'),
      // The approach outside
      car(-3.225, -2.8, P2, 'hatch'),
      car(-3.7, 2.8, P2, 'van'),
      cone(-6, -2.4),
      cone(-6, 2.4),
    ],
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
    bounds: { minX: -4.5, maxX: 8, minZ: -13, maxZ: 13 },
    start: { x: 0, z: 6, yaw: Math.PI },
    target: { x: 4.2, z: -3, w: 2.6, d: 5, rot: P2 },
    objects: [
      wall(-2.35, 0, 1.3, 26, { h: 4.2, color: 0xd6c9bb }),
      wall(2.35, -8.75, 1.3, 8.5, { h: 4.2, color: 0xd6c9bb }),
      wall(2.35, 5.75, 1.3, 14.5, { h: 4.2, color: 0xd6c9bb }),
      wall(4.35, -4.65, 5.3, 0.3, { h: 3.4, color: 0xe1d7c9 }),
      wall(4.35, -1.35, 5.3, 0.3, { h: 3.4, color: 0xe1d7c9 }),
      wall(6.95, -3, 0.3, 3.3, { h: 3.4, color: 0xe1d7c9 }),
      bay(4.2, -3, { w: 2.6, d: 5, rot: P2 }),
      cone(-1.2, -10),
      cone(1.2, -11.5),
    ],
  },

  // The neighbour on the right is parked 1.7 m out of its bay, which closes the
  // aisle enough that the van cannot swing in nose-first. It has to drive past
  // the bay and reverse in on one arc. Before that car moved, the whole of this
  // level's single direction change was a half-metre straight back-up to seat
  // the van once it was already inside — final positioning, which constraint 1
  // says a level may not be made of.
  {
    id: 'van-life',
    name: 'Van Life',
    vehicle: 'van',
    theme: 'lot',
    bounds: { minX: -16, maxX: 19, minZ: -16, maxZ: 4 },
    start: { x: 11, z: -6.7, yaw: -P2 },
    target: { x: 0, z: -12.5, w: 3, d: 6, rot: 0 },
    objects: [
      wall(1.5, -3.6, 35, 0.6, { h: 1.6 }),
      bays(0, -12.5, [null, 'van', null, 'van', null, null, null, 'hatch', null], { w: 3, d: 6 }),
      // the one that makes the level: nose-in and 1.7 m proud of its bay,
      // closing the aisle beside the target. Parked by hand because that is
      // what it is — a car that is not where its bay says it should be.
      car(3, -9.0, Math.PI, 'van'),
      pillar(6.2, -8.2, 0.6, 2.8),
    ],
  },

  // Mirrored, this level parks in 1: reverse straight back, which is free
  // because nothing has moved yet, then one 88-degree forward arc through the
  // 8.5 m gap into the dock. So the three-shunt manoeuvre this was built around
  // is not what it costs. It is not a level that has been shown to work.
  {
    id: 'loading-dock',
    name: 'Loading Dock',
    vehicle: 'van',
    theme: 'garage',
    bounds: { minX: -10, maxX: 21, minZ: -13, maxZ: 6 },
    start: { x: -3.5, z: 0, yaw: P2 },
    target: { x: 13.3, z: -9.5, w: 3.2, d: 6, rot: 0 },
    objects: [
      wall(5.5, 3.6, 31, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(-0.25, -3.6, 19.5, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(19.5, -3.6, 3, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(8.9, -7.75, 1.2, 10.5, { h: 3.4, color: 0xd9cfc2 }),
      wall(18.6, -7.75, 1.2, 10.5, { h: 3.4, color: 0xd9cfc2 }),
      bay(13.3, -9.5, { w: 3.2, d: 6 }),
      car(16.2, -11.1, 0, 'van'),
      car(10.55, -11.1, 0, 'van'),
      line(6, 0, 22, 0.14),
      cone(9.9, -4.9),
      cone(20, 1.8),
    ],
  },

  {
    id: 'bus-stop',
    name: 'Bus Stop',
    vehicle: 'bus',
    theme: 'street',
    bounds: { minX: -13, maxX: 11, minZ: -32, maxZ: 22 },
    start: { x: -1.9, z: -25, yaw: 0 },
    target: { x: 2.6, z: -1.75, w: 3.2, d: 12.4, rot: 0 },
    objects: [
      street(-1.625, -6, 11.95, 56, { left: 6, right: 5, h: 6 }),
      bay(2.6, -1.75, { w: 3.2, d: 12.4 }),
      // the gap: 13.5 m of kerb between two parked buses
      car(2.6, -16.6, 0, 'bus'),
      car(2.6, 13.1, Math.PI, 'bus'),
      // the shelter, right behind the kerb
      wall(5.45, -1.75, 1.2, 6, { h: 2.6, color: 0xe1d7c9 }),
      car(-5.2, -22, 0, 'hatch'),
      cone(-5.2, 6),
    ],
  },

  // The coach's rear axle sits 3.9 m forward of its tail, so 1.15 m of bus
  // swings outside its own turning circle — against 0.67 m for the city bus and
  // 0.07 m for a hatchback. That is the whole reason this vehicle exists, and
  // the manoeuvre that exposes it is coming *out* of a bay: the nose goes one
  // way and the tail goes the other, into whatever is parked alongside.
  //
  // Measured honestly: the coach parks it in the same 2 the bus would. What the
  // tail buys is route, not direction changes: the coach needs 41.9 m and 67
  // degrees on the final reverse where the bus needs 36.6 m and 52. The score
  // cannot see that; the bump counter can.
  {
    id: 'tail-swing',
    name: 'Tail Swing',
    vehicle: 'coach',
    theme: 'garage',
    bounds: { minX: -30, maxX: 30, minZ: -21.4, maxZ: 21.4 },
    start: { x: 0, z: 11.6, yaw: 0 },
    target: { x: 8, z: -13.7, w: 3.4, d: 13.4, rot: 0 },
    objects: [
      // Both ranks are a building with one slot cut in it, not a row of bays:
      // there is nothing in the other bays to park, and a wall is one object
      // where fourteen walled-off bays would be fourteen.
      // the rank you start in, solid but for your own bay at x = 0
      wall(-15.925, 13.7, 28.15, 13.4, { h: 4.6, color: 0xd9cfc2 }),
      wall(15.925, 13.7, 28.15, 13.4, { h: 4.6, color: 0xd9cfc2 }),
      // the rank opposite, solid but for the bay two along at x = 8
      wall(-11.925, -13.7, 36.15, 13.4, { h: 4.6, color: 0xd9cfc2 }),
      wall(19.925, -13.7, 20.15, 13.4, { h: 4.6, color: 0xd9cfc2 }),
      bay(0, 13.7, { w: 3.4, d: 13.4 }),
      bay(8, -13.7, { w: 3.4, d: 13.4 }),
    ],
  },

  {
    id: 'trailer-trouble',
    name: 'Trailer Trouble',
    vehicle: 'towcar',
    theme: 'lot',
    bounds: { minX: -17, maxX: 19, minZ: -16.5, maxZ: 7 },
    start: { x: 13, z: -5.5, yaw: -P2 },
    target: { x: 0, z: -13.9, w: 2.9, d: 4.1, rot: 0, part: 'trailer' },
    objects: [
      wall(1.5, -0.4, 37, 0.8, { h: 1.5 }),
      // the neighbours are 1.65 m proud of their bays, which is what makes the
      // trailer's slot a slot rather than an open row
      bays(0, -13.9, [null, 'van', null, 'hatch', null, 'hatch', null, 'hatch', null],
        { w: 3, d: 4.3, out: 1.725 }),
      cone(7.5, -3.4),
      cone(-7.5, -3.4),
    ],
  },

  // Asks: where is the *cab* going to live? The trailer is what has to end up
  // in the bay, and the cab has to end up somewhere legal too. A slab behind
  // the bay means it cannot rest in line; a building alongside means it cannot
  // rest on that side either. So which way the rig folds is settled 20 m away,
  // before the reverse begins, and nothing at that moment points at it. The
  // only level about where the part you are not parking ends up.
  //
  // There is no tolerance in it at all; the cost is entirely the shape of the
  // free space. An earlier version used a small blocker instead of the
  // building and collapsed, because a blocker that is merely narrow is a
  // clearance. The fix was to forbid the placement outright.
  {
    id: 'fold',
    name: 'Fold',
    vehicle: 'towcar',
    theme: 'garage',
    bounds: { minX: -18, maxX: 18, minZ: -14.0, maxZ: 2.0 },
    start: { x: 10, z: -2.0, yaw: -P2 },
    target: { x: 0, z: -11.6, w: 2.9, d: 4.1, rot: 0, part: 'trailer' },
    objects: [
      wall(0, -6.0, 4.0, 1.6),
      wall(4.5, -10.0, 3.0, 6.0, { h: 3.4, color: 0xd9cfc2 }),
      bay(0, -11.6, { w: 2.9, d: 4.1 }),
    ],
  },

  {
    id: 'artic-dock',
    name: 'Artic Dock',
    vehicle: 'semi',
    theme: 'lot',
    bounds: { minX: -26, maxX: 26, minZ: -26, maxZ: 13 },
    start: { x: -11, z: 6, yaw: P2 },
    target: { x: 0, z: -17.1, w: 3.9, d: 15.0, rot: 0, part: 'trailer' },
    objects: [
      docks(0, -18.15, ['trailer', null, 'trailer']),
      wall(0, -25.4, 52, 1.2, { h: 6, color: 0xd9cfc2 }),
      bay(0, -17.1, { w: 3.9, d: 15.0 }),
      car(-21, -6, P2, 'semi'),
      line(0, -4, 44, 0.16),
      cone(-13, -9),
      cone(13, -9),
    ],
  },

  // Was "Blind Side": a semi backing into the dock on the side a real driver's
  // mirrors do not cover. This game shows the mirrors but never looks through
  // them, so that premise described nothing (constraint 9). What the level
  // actually has is the mirrored approach and a yard with two pillars in it, so
  // no single long arc fits. The name now says that.
  {
    id: 'yard-full',
    name: 'Yard Full',
    vehicle: 'semi',
    theme: 'garage',
    bounds: { minX: -26, maxX: 30, minZ: -26, maxZ: 6 },
    // Approached driving -X, so the dock is reached from the opposite side to
    // Artic Dock's; the pillars below are what stop it being that level again.
    start: { x: 16, z: -3, yaw: -P2 },
    target: { x: 8.1, z: -17.1, w: 3.9, d: 15.0, rot: 0, part: 'trailer' },
    objects: [
      docks(8.1, -18.15, ['trailer', null, 'trailer']),
      wall(0, -25.4, 50, 1.2, { h: 6, color: 0xd9cfc2 }),
      bay(8.1, -17.1, { w: 3.9, d: 15.0 }),
      // the yard is not empty: no room for one long lazy arc
      pillar(-1.5, -6.5, 0.9, 5),
      pillar(19.5, -7, 0.9, 5),
      car(-22, 3, P2, 'van'),
      line(0, -4, 44, 0.16),
      cone(-8, -8),
      cone(23, -8),
    ],
  },
];
