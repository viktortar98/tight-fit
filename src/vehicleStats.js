// What a vehicle is like to drive, as numbers — and only the numbers that a
// picture of it cannot give you.
//
// The picker shows a 3D model you can turn over, so length, width, height and
// where the wheels sit relative to the body are things you look at rather than
// read. Printing them beside the model would be printing the caption of the
// picture. What is left over is the part of a spec that has no shape: how far
// the lock goes, how fast it gets there, and the two consequences of lock and
// overhang that decide whether you clip something on the way round.
//
// `maxSteer` on its own is not comparable across the roster and must not be
// read as though it were. The wheeled loader and the micro pod both lock to
// 45°, and they turn on 3.30 m and 2.25 m, because a radius is a lock *and* a
// wheelbase. So the radius leads and the angle stands beside it.

const deg = (r) => (r * 180) / Math.PI;

// The circle the rear axle is on at full lock, measured where the bicycle
// model references the vehicle. The same arithmetic `TurnCircles` does every
// frame, and the same one `src/levels.js` sizes an aisle against.
export function turnRadius(spec) {
  return spec.wheelbase / Math.tan(spec.maxSteer);
}

// The outermost point of the vehicle's own sweep: the front outer corner, out
// at the end of everything ahead of the rear axle, on the far side of the
// body. Everything the vehicle passes on the outside of a full-lock turn is
// inside this radius.
export function sweptRadius(spec) {
  const nose = spec.length - spec.rearOverhang;
  return Math.hypot(nose, turnRadius(spec) + spec.width / 2);
}

// Both ends measured against the same thing: the circle the outer flank is
// already on. The nose reaches outside it because the nose is ahead of the
// axle the turn is about; the tail leaves it on the *other* side, because a
// rear overhang swings outboard opposite the direction of the turn. A vehicle
// with no overhang has no swing at either end, which is why the platform cart
// reads 0.01 and the tour coach 1.15.
function swing(spec) {
  const flank = turnRadius(spec) + spec.width / 2;
  return {
    nose: sweptRadius(spec) - flank,
    tail: Math.hypot(spec.rearOverhang, flank) - flank,
  };
}

// One row per number, in the order they answer a question: what circle does it
// turn on, what does that cost at the lock and how long does the lock take,
// and then what sticks out while it goes round. The articulated pair is added
// only where there is a trailer, because a rigid vehicle has no answer to give
// rather than a zero.
export function statsOf(spec) {
  const { nose, tail } = swing(spec);
  const rows = [
    {
      label: 'turning radius',
      value: `${turnRadius(spec).toFixed(2)} m`,
      note: 'the circle the rear axle is on at full lock',
    },
    {
      label: 'steering lock',
      value: `${deg(spec.maxSteer).toFixed(0)}°`,
      note: 'how far the wheels go over — the radius is this and the wheelbase together',
    },
    {
      label: 'steering rate',
      value: `${deg(spec.steerRate).toFixed(0)}°/s`,
      note: 'how long full lock takes to wind on',
    },
    {
      label: 'nose swing',
      value: `${nose.toFixed(2)} m`,
      note: 'how far the front corner reaches outside the flank on the way round',
    },
    {
      label: 'tail swing',
      value: `${tail.toFixed(2)} m`,
      note: 'how far the back corner swings out the opposite way',
    },
  ];
  if (spec.trailer) {
    rows.push({
      label: 'reverse response',
      value: `${spec.trailer.axleFromHitch.toFixed(2)} m`,
      note: 'hitch to trailer axle — short folds quickly, long answers slowly',
    });
    rows.push({
      label: 'jackknife limit',
      value: `${deg(spec.trailer.maxAngle).toFixed(0)}°`,
      note: 'the fold the combination stops dead at',
    });
  }
  return rows;
}
