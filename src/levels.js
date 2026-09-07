// Level geometry, in metres. Every number here is tuned against vehicle.js.
//
// The constant the swept ring gives you (2.83 m for the hatchback, 3.41 for
// the van) is the width of the band a FULL-LOCK turn sweeps. It says whether a
// corridor can be turned out of; it does not say what a bay entry costs. The
// two numbers that decide that, measured for the hatchback by driving the
// game's own integrate() out of a bay at full lock, are:
//
//   reverse in    1.60 m of aisle depth,  6.57 m of aisle past the bay,
//                                         1.02 m short of it
//   nose first    3.12 m of aisle depth,  4.12 m of run-up before the bay,
//                                         1.95 m past it
//
// All of it measured from the bay's centreline, and over every rectangle that
// collides. Two of those numbers moved when the drive was repeated: the table
// used to read 3.04 m of depth and 0.95 m short, which is the same drive with
// the mirrors left out. They stick out and they collide (DESIGN.md 17), so
// they count, and the depth a nose-first swing wants is 8 cm more than the
// levels were told. Every level that cites these was re-read against the new
// figures and none of its margins is 8 cm wide, so nothing moved. The other
// two came back 3 cm larger than the recorded 6.54 and 4.09 on a re-measure;
// the cause was not chased, and the larger number is the safe one to cut to.
//
// They are also measured on a bay standing on its own, and a bay in a row is
// tighter than they say. A car seated between two neighbours cannot turn at
// all until it has run about 1.6 m straight out, because what stops the swing
// is the neighbour's mirror and not the aisle; sweeping the aisle depth of The
// Short Side below, a constant-radius reverse-in into a row stops existing
// somewhere between 3.3 and 3.1 m, where this table asks for 1.60. Read the
// depth column as what a bay needs, not as what a row needs.
//
// Loosening the lock makes both numbers worse, so those are minima. They are
// what the levels below are cut against: a wall closer than 1.95 m past a bay
// forbids driving in, a yard shorter than 6.57 m past it forbids backing in,
// and a level is the choice of which of those two you take away.
//
// `start` is a pose the route would pass through anyway, not the far corner of
// the arena. A level that opens with a long straight is asking for nothing
// during it: the route finder's dumps for the old starts all began `F0:9.0` —
// nine metres at zero steer, which is the longest leg it offers and the only
// one with no decision in it. Moving `start` forward along its own heading to
// the point where the first steering input happens leaves every route intact,
// because the old route drove through the new pose. `bounds` follows it, so the
// arena is the space the manoeuvre uses and not the space it crosses.
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
  // 1.60 m a reverse-in needs, short of the 3.12 m a nose-first swing needs.
  // So the bay is entered backwards, and the whole series is built on the
  // manoeuvre this level hands you on the first attempt. Nothing is in the way
  // and nothing is tight except the one number.
  {
    id: 'first-bay',
    name: 'First Bay',
    vehicle: 'hatch',
    theme: 'lot',
    bounds: { minX: -14, maxX: 10, minZ: -15.5, maxZ: -3.0 },
    start: { x: 5.5, z: -9.05, yaw: -P2 },
    target: { x: 0, z: -13, w: 2.5, d: 5, rot: 0 },
    objects: [
      bays(-2.5, -13, ['hatch', null, 'hatch', null, 'hatch', null, 'hatch', 'hatch', null],
        { w: 2.5, d: 5 }),
      // The far row. It is what makes the aisle an aisle: its bumpers are at
      // z = -7.60, and the bay mouth is at -10.50.
      bays(-2.5, -5.625, ['hatch', null, 'hatch', null, 'hatch', null, 'hatch', null, 'hatch'],
        { w: 2.5, d: 5, rot: Math.PI }),
    ],
  },

  // Asks: where does the room for the manoeuvre come from, when it is not on
  // the side you arrived from? You arrive westbound, and backing into this bay
  // sweeps 6.57 m of aisle past it. West of it there is 1.20 m, because the
  // aisle ends flush with the bay's own flank. So the only reverse-in is the
  // one driven eastbound, and the level is the three moves that get you facing
  // that way: back into the one gap in the far row, pull out of it heading
  // east, back into the bay. Nothing else in the series asks you to arrive
  // from elsewhere.
  //
  // The wall used to stand 1.45 m past the bay and that quarter-metre was the
  // whole level. A nose-first swing wants 1.95 m past, so 1.45 did not forbid
  // driving in — it made driving in cost a couple of shunts of fiddling, and a
  // car 15 cm smaller each way wants 1.74 and drove in, which is a level whose
  // cost is its clearances (DESIGN.md 1). Flush is as far as this axis goes: a
  // 2.4 m bay hands the swing 1.20 m of its own width, so the most the
  // geometry can withhold is 0.75 m, and the wrong approach here can be made
  // expensive but not absent.
  //
  // What flush buys is the ordering. Every leg of the three-move answer was
  // driven through the game's own integrate() and its own collision on this
  // geometry, at full size and with the vehicle shrunk 0.15 and 0.30 m a side,
  // and all three legs exist at all three sizes. The westbound reverse-in is
  // short by more than 5 m at every one of them — 6.57 m wanted against 1.20 —
  // which is the one block here that no amount of slack closes.
  {
    id: 'short-side',
    name: 'The Short Side',
    vehicle: 'hatch',
    theme: 'garage',
    bounds: { minX: -1.35, maxX: 15.7, minZ: -14.5, maxZ: 1.1 },
    start: { x: 13, z: -6.3, yaw: -P2 },
    target: { x: 0, z: -11, w: 2.4, d: 5, rot: 0 },
    objects: [
      // the aisle is closed at both ends: flush with the bay on one side,
      // 15.6 m away on the other
      room(7.2, -6.775, 16.8, 13.75),
      bays(7.2, -11, [null, 'hatch', 'hatch', 'van', 'hatch', 'hatch', 'hatch'], { w: 2.4, d: 5 }),
      // The row opposite is full but for one bay, and that bay is the level.
      // Turning round in one arc wants a corridor twice the turning radius
      // plus the width of the car — 8.50 m for the hatchback — against 4.45 m
      // between the two rows of bumpers, so the direction of travel cannot be
      // reversed in the aisle at all and has to be reversed into something.
      // Backing into this gap wants 6.57 m of aisle west of it, and the dead
      // end leaves 8.40: the wall that forbids the entry to the bay is the
      // same wall that makes the answer to it fit.
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
    bounds: { minX: -9, maxX: 9, minZ: -13, maxZ: 13 },
    start: { x: -0.4, z: -8.5, yaw: 0 },
    target: { x: 2.85, z: -1.23, w: 2.2, d: 5.4, rot: 0 },
    objects: [
      street(0.25, 0, 7.5, 24),
      // the gap is 5.7 m of kerb: 1.7 m longer than the car
      car(2.9, -7.275, 0, 'hatch'),
      car(2.9, 2.375, 0, 'hatch'),
      car(2.9, 6.9, 0, 'van'),
    ],
  },

  // Asks: what happens when the bay is not square to the aisle? These are cut at
  // 45 degrees, which makes them one-way. A bay opens along (sin rot, cos rot),
  // so at 45 degrees the mouths face north-east and driving into one nose-first
  // means arriving westbound — and the level starts you eastbound. The answer
  // everywhere else in the series is to come back the other way, and there is
  // nowhere here to do it: the widest clear space in the arena is the 2.95 m
  // aisle, against a 4.78 m circle for the city car at full lock. So the entry
  // is a reverse into an angled slot, and it is the only one in the game.
  //
  // The city car is the control vehicle and nothing here is the size of it:
  // 2.95 m of aisle and a 2.77 m gap between the neighbours would be the same
  // problem in anything that fits down it. Driving the game's own integrate(),
  // it parks in 1 direction change.
  {
    id: 'herringbone',
    name: 'Herringbone',
    vehicle: 'citycar',
    theme: 'lot',
    bounds: { minX: -14, maxX: 9, minZ: -7, maxZ: 5 },
    start: { x: -1.5, z: 0.9, yaw: P2 },
    target: { x: 0, z: -2.6, w: 2.2, d: 4.6, rot: Math.PI / 4 },
    objects: [
      // 2.2 m of bay at 45 degrees is 3.11 m of frontage, so the row pitch is
      // 2.2 / cos(45) and the bays meet edge to edge along the aisle.
      bay(-9.333, -2.6, { w: 2.2, d: 4.6, rot: Math.PI / 4, slot: 'citycar' }),
      bay(-6.222, -2.6, { w: 2.2, d: 4.6, rot: Math.PI / 4 }),
      bay(-3.111, -2.6, { w: 2.2, d: 4.6, rot: Math.PI / 4, slot: 'citycar' }),
      bay(0, -2.6, { w: 2.2, d: 4.6, rot: Math.PI / 4 }),
      bay(3.111, -2.6, { w: 2.2, d: 4.6, rot: Math.PI / 4, slot: 'citycar' }),
      wall(-2.5, 3.55, 23, 1.6, { h: 3.0, color: 0xd6c9bb }),
      wall(-2.5, -6.2, 23, 1.6, { h: 3.0, color: 0xd6c9bb }),
      // the dead end, which is what makes the row one-way rather than merely
      // awkward: there is nowhere to become westbound
      wall(7.5, -1.3, 1.6, 8.2, { h: 3.0, color: 0xd6c9bb }),
    ],
  },

  // Asks: what do you do when there is no room to pull past on either side?
  // The yard is 11.6 m long, and a reverse-in needs 6.5 m of it on one side of
  // the bay; a nose-first entry needs 4.1 m of run-up and 1.95 m beyond, and
  // 3.12 m of depth. The yard is 5.2 m deep. The answer The Short Side and
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

  // Asks: what if the aisle a reverse-in needs is round a corner? The bay opens
  // west off a 3.6 m leg, and that leg turns east 3.9 m south of the bay, so
  // the room the manoeuvre wants is bent in the middle — the nose swings into
  // the other leg while the tail goes into the bay.
  //
  // The saloon is here because 1.96 m of it hangs off the ends of the
  // wheelbase, 0.31 m more than the hatchback behind the rear axle, and the
  // ends are what a bent aisle catches. Driving the game's own integrate(), it
  // parks in 2 direction changes.
  {
    id: 'elbow',
    name: 'The Elbow',
    vehicle: 'saloon',
    theme: 'garage',
    bounds: { minX: -9, maxX: 12, minZ: -8, maxZ: 13 },
    start: { x: -0.2, z: 6.5, yaw: Math.PI },
    target: { x: -4.7, z: 3.0, w: 2.9, d: 5.4, rot: P2 },
    objects: [
      wall(-2.8, 8.75, 1.6, 8.1, { h: 3.2, color: 0xd6c9bb }),
      wall(-2.8, -2.75, 1.6, 8.1, { h: 3.2, color: 0xd6c9bb }),
      // the recess: 3.4 m clear around a 2.9 m bay, 5.4 m deep
      wall(-5.1, 5.5, 6.2, 1.6, { h: 3.2, color: 0xd6c9bb }),
      wall(-5.1, 0.5, 6.2, 1.6, { h: 3.2, color: 0xd6c9bb }),
      wall(-8.2, 3.0, 1.6, 6.6, { h: 3.2, color: 0xd6c9bb }),
      // the block the aisle turns around
      wall(6.7, 5.3, 10.2, 15.4, { h: 3.2, color: 0xd6c9bb }),
      wall(4.5, -6.8, 14.6, 1.6, { h: 3.2, color: 0xd6c9bb }),
      wall(10.8, -4.6, 1.6, 5.2, { h: 3.2, color: 0xd6c9bb }),
      bay(-4.7, 3.0, { w: 2.9, d: 5.4, rot: P2 }),
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

  // Asks: how square do you have to be *before* the gap rather than in it? The
  // gate is 2.9 m and the SUV is 1.95 m across the body and 2.25 m across the
  // mirrors, so it passes — pointing straight at it and no other way. The lane
  // outside is 4.2 m deep, which is not enough to finish the 90 degrees in, so
  // the squaring up happens in the lane and the gate is driven, not steered.
  //
  // The SUV is the width control: the saloon's length to within 3 cm and 12 cm
  // wider. Anything it cannot do here is about the gap. Driving the game's own
  // integrate(), it parks in 3 direction changes.
  {
    id: 'pinch',
    name: 'The Pinch',
    vehicle: 'suv',
    theme: 'lot',
    bounds: { minX: -15, maxX: 10, minZ: -11, maxZ: 9 },
    start: { x: -5, z: 5.1, yaw: P2 },
    target: { x: 0, z: -4.6, w: 3.0, d: 5.6, rot: 0 },
    objects: [
      wall(-3.0, 8.1, 23.8, 1.8, { h: 3.2, color: 0xd6c9bb }),
      // the gate: two runs of wall 2.9 m apart
      wall(-8.175, 2.1, 13.45, 1.8, { h: 3.2, color: 0xd6c9bb }),
      wall(5.175, 2.1, 7.45, 1.8, { h: 3.2, color: 0xd6c9bb }),
      wall(8.9, 5.1, 1.8, 6.0, { h: 3.2, color: 0xd6c9bb }),
      wall(-5.4, -2.5, 1.8, 12.0, { h: 3.2, color: 0xd6c9bb }),
      wall(5.4, -2.5, 1.8, 12.0, { h: 3.2, color: 0xd6c9bb }),
      wall(0, -8.9, 12.6, 1.8, { h: 3.2, color: 0xd6c9bb }),
      bay(0, -4.6, { w: 3.0, d: 5.6 }),
      cone(-3.6, 0.6),
      cone(3.6, 0.6),
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
    bounds: { minX: -4.5, maxX: 8, minZ: -13, maxZ: 8 },
    start: { x: 0, z: 4, yaw: Math.PI },
    target: { x: 4.2, z: -3, w: 2.6, d: 5, rot: P2 },
    objects: [
      wall(-2.35, -2.5, 1.3, 21, { h: 4.2, color: 0xd6c9bb }),
      wall(2.35, -8.75, 1.3, 8.5, { h: 4.2, color: 0xd6c9bb }),
      wall(2.35, 3.25, 1.3, 9.5, { h: 4.2, color: 0xd6c9bb }),
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

  // This level costs nothing. Driven by the game's own integrate(), it parks in
  // ZERO direction changes — one continuous forward curve out of the corridor
  // and into the dock — and it did so before the start was moved as well as
  // after, so the count is the level's and not the trim's. DESIGN records it as
  // parking in 1; 1 was an overestimate.
  //
  // The reason is the throat. It is 8.5 m wide for a 3.2 m bay, and the aisle
  // is 9 m deep where a van needs 5.32 m to swing in nose-first, so the whole
  // right-angle turn is slack and a single arc walks through it. Everything
  // below is drive and none of it is game. It wants re-cutting, not trimming --
  // and the re-cut was put to the user with that cost and declined: the level
  // stays as it is. So do not "fix" this one back to costing something. The
  // trim here stops it wasting the player's time on the way in, which is all
  // it was ever going to do.
  {
    id: 'loading-dock',
    name: 'Loading Dock',
    vehicle: 'van',
    theme: 'garage',
    bounds: { minX: -5, maxX: 21, minZ: -13, maxZ: 6 },
    start: { x: 2.5, z: 0, yaw: P2 },
    target: { x: 13.3, z: -9.5, w: 3.2, d: 6, rot: 0 },
    objects: [
      wall(8.5, 3.6, 25, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(2.75, -3.6, 13.5, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(19.5, -3.6, 3, 2.2, { h: 3.4, color: 0xd9cfc2 }),
      wall(8.9, -7.75, 1.2, 10.5, { h: 3.4, color: 0xd9cfc2 }),
      wall(18.6, -7.75, 1.2, 10.5, { h: 3.4, color: 0xd9cfc2 }),
      bay(13.3, -9.5, { w: 3.2, d: 6 }),
      car(16.2, -11.1, 0, 'van'),
      car(10.55, -11.1, 0, 'van'),
      line(6.5, 0, 21, 0.14),
      cone(9.9, -4.9),
      cone(20, 1.8),
    ],
  },

  // An ordinary two-row car park, and the pickup cannot use it. 3.68 m of
  // wheelbase and 30 degrees of lock give it a 6.37 m turning radius where the
  // hatchback has 3.37, so the 5.0 m aisle First Bay's car swings across is one
  // this truck can only reverse into, and the run past the bay that the reverse
  // needs is 11 m — most of the row. The long drive here is the manoeuvre and
  // not the approach to it, which is the one place in the series where distance
  // is the point. Driving the game's own integrate(), it parks in 1.
  {
    id: 'wide-circle',
    name: 'Wide Circle',
    vehicle: 'pickup',
    theme: 'lot',
    bounds: { minX: -16, maxX: 12, minZ: -18, maxZ: 2.5 },
    start: { x: -1.0, z: -7.6, yaw: -P2 },
    target: { x: 0, z: -13.6, w: 3.0, d: 7.0, rot: 0 },
    objects: [
      bays(0, -13.6, ['hatch', null, 'suv', null, 'saloon', null, 'hatch'], { w: 3.0, d: 7.0 }),
      bays(0, -1.6, ['hatch', null, 'hatch', null, 'hatch', null, 'hatch'],
        { w: 3.0, d: 7.0, rot: Math.PI }),
    ],
  },

  // 2.35 m of the box lorry is behind its rear axle, so the tail is in the bay
  // long before the axle is, and the nose sweeps the aisle the other way while
  // it happens. The two numbers were swept rather than guessed: with the
  // neighbours 6.05 m apart across a 4.2 m aisle the lorry drives in nose-first
  // and the level costs nothing, and at 4.45 m across a 4.0 m aisle there is no
  // route at all. It ships at 5.25 m and 4.4 m, between the two. Driving the
  // game's own integrate(), it parks in 1.
  {
    id: 'tail-sweep',
    name: 'Tail Sweep',
    vehicle: 'lorry',
    theme: 'garage',
    bounds: { minX: -15, maxX: 15, minZ: -17, maxZ: 0 },
    start: { x: 5.0, z: -5.5, yaw: -P2 },
    target: { x: 0, z: -12.0, w: 3.8, d: 8.6, rot: 0 },
    objects: [
      bays(0, -12.0, ['lorry', null, 'lorry'], { w: 3.8, d: 8.6 }),
      wall(0, -2.4, 30, 1.8, { h: 4.2, color: 0xd9cfc2 }),
    ],
  },

  // The step van is the box lorry with its wheels moved to the ends: 1.20 m of
  // rear overhang against 2.35 m, on the same turning circle. That is what lets
  // it tuck into a slot off an alley — the tail stops swinging as soon as the
  // axle is through the mouth, and the lorry's would not have stopped. The
  // alley is 5.6 m and the slot 4.6 m clear, and 5.6 m is not enough depth for
  // a 7.3 m van to swing in nose-first. Driving the game's own integrate(), it
  // parks in 1.
  //
  // The paint is 4.0 m and not the 3.6 m it was cut at, because 3.6 m made the
  // level unpassable in a way no route dump showed. A van that comes out of
  // that alley is 0.6 m off the slot's centreline and a third of a degree off
  // square — it fits between the walls with room, and at 3.6 m it finished
  // 0.6 mm outside the paint, which is 0.0006 m of level design deciding
  // whether the game says parked. Paint the slot the van can actually reach:
  // at 4.0 m the same one-shunt route has 3 cm of slack on every side.
  {
    id: 'back-alley',
    name: 'Back Alley',
    vehicle: 'stepvan',
    theme: 'alley',
    bounds: { minX: -9, maxX: 21, minZ: -12, maxZ: 6 },
    start: { x: 1.0, z: 2.2, yaw: P2 },
    target: { x: -2.6, z: -5.1, w: 4.0, d: 9.0, rot: 0 },
    objects: [
      wall(6.0, 5.9, 29.8, 1.8, { h: 4.2, color: 0xd6c9bb }),
      wall(-7.0, -1.5, 3.8, 1.8, { h: 4.2, color: 0xd6c9bb }),
      wall(10.4, -1.5, 21.0, 1.8, { h: 4.2, color: 0xd6c9bb }),
      wall(-5.8, -5.45, 1.8, 9.7, { h: 4.2, color: 0xd6c9bb }),
      wall(0.6, -5.45, 1.8, 9.7, { h: 4.2, color: 0xd6c9bb }),
      wall(-2.6, -10.5, 8.2, 1.8, { h: 4.2, color: 0xd6c9bb }),
      bay(-2.6, -5.1, { w: 4.0, d: 9.0 }),
    ],
  },

  {
    id: 'bus-stop',
    name: 'Bus Stop',
    vehicle: 'bus',
    theme: 'street',
    bounds: { minX: -13, maxX: 11, minZ: -25, maxZ: 21 },
    start: { x: -1.9, z: -20, yaw: 0 },
    target: { x: 2.6, z: -1.75, w: 3.2, d: 12.4, rot: 0 },
    objects: [
      street(-1.625, -2, 11.95, 44, { left: 6, right: 5, h: 6 }),
      bay(2.6, -1.75, { w: 3.2, d: 12.4 }),
      // the gap: 13.5 m of kerb between two parked buses
      car(2.6, -16.6, 0, 'bus'),
      car(2.6, 13.1, Math.PI, 'bus'),
      // the shelter, right behind the kerb
      wall(5.45, -1.75, 1.2, 6, { h: 2.6, color: 0xe1d7c9 }),
      car(-5.2, -21, 0, 'hatch'),
      cone(-5.2, 6),
    ],
  },

  // The yard ends 13 m east of the bay, which is not enough room for a 10.9 m
  // bus to build its angle going forwards. So the angle is built going
  // backwards first and the bay is entered on the sweep that follows: reverse
  // 8.2 m, then 10.2 m of forward arc, and the direction change between them is
  // the level.
  //
  // Both numbers came out of the game's own integrate(), and so did the reason
  // this vehicle is the one in it. The school bus parks it in 1 direction
  // change. Put the CITY BUS here — the same box to within 10 cm, on a turning
  // radius 2.6 m smaller — and it needs 2, and its last leg is a straight
  // reverse to seat itself. Which way round that goes does not follow from
  // either vehicle's radius, and it is the clearest thing in the game against
  // reading the roster as a size ladder.
  {
    id: 'depot',
    name: 'Depot',
    vehicle: 'schoolbus',
    theme: 'lot',
    bounds: { minX: -20, maxX: 7, minZ: -21, maxZ: -2.45 },
    start: { x: -7, z: -5.45, yaw: P2 },
    target: { x: -8, z: -14.2, w: 4.6, d: 11.9, rot: 0 },
    objects: [
      bays(-8, -14.2, ['schoolbus', null, 'schoolbus'], { w: 4.6, d: 11.9 }),
      // the far side of the yard, 5.6 m from the bay mouth
      wall(-6, -1.75, 30, 1.8, { h: 4.6, color: 0xd9cfc2 }),
      // the end of the yard, 13 m east of the bay
      wall(5.9, -10, 1.8, 22, { h: 4.6, color: 0xd9cfc2 }),
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
  // cannot see that; the collision counter can.
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
    bounds: { minX: -17, maxX: 16, minZ: -16.5, maxZ: 7 },
    start: { x: 9, z: -5.5, yaw: -P2 },
    target: { x: 0, z: -13.9, w: 2.9, d: 4.1, rot: 0, part: 'trailer' },
    objects: [
      wall(-0.5, -0.4, 33, 0.8, { h: 1.5 }),
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
  // rest on that side either. So which way the rig folds is settled at the top
  // of the run, before the reverse begins, and nothing at that moment points
  // at it. The
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
    start: { x: 6.5, z: -2.0, yaw: -P2 },
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
    start: { x: -8, z: 6, yaw: P2 },
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
