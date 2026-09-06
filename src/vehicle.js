// Kinematic bicycle model, referenced at the centre of the rear axle, plus a
// one-joint articulation for the trailer and semi.
//
// Deliberately not a drift sim: at parking speeds tyres don't slip, and a
// predictable vehicle is what makes a tight squeeze a skill problem rather
// than a luck problem. Top speeds are first-gear slow on purpose — holding a
// steady creep is not supposed to be part of the difficulty.

import { clamp, normalizeAngle } from './geom.js';

const deg = (d) => (d * Math.PI) / 180;

// A trailer is described from its own axle: how far the hitch is in front of
// it (`axleFromHitch`), and how much body sits fore and aft of the axle.
//
// `mirrors` is where the door mirrors are and how far past the flank they
// reach — geometry, not decoration, because they collide (DESIGN.md 17) and
// `src/carMesh.js` draws them from these numbers rather than inventing its own.
//
// `body` is the vehicle's side silhouette, and it is here for the same reason:
// so that adding a vehicle is a list of points rather than a new function in
// the mesh builder. `top` walks the outline from the nose backwards, each point
// a fraction of `length` measured from the tail and a fraction of `height`; the
// builder closes it along the floor at `sill` and cuts an arch at every axle.
// `glass` names which of those segments are glazed by index, so the windscreen
// is the raked segment of the silhouette rather than a slab invented beside it.
//
// `eye` and `look` are where the driver's head and the interior mirror are, in
// the same fractions. Both sit *inside* the cabin, and that is a constraint and
// not a preference: the inside view puts the camera at `eye`, so a head placed
// level with the top of the windscreen has the whole cabin behind it and sees
// no roof, no pillar and no mirror, and a mirror placed above the glass line
// looks at the outside of the vehicle's own roof. Both were true of every car
// here until they were measured. The rule they were measured against is a head
// 0.32 m behind the top of the windscreen and a mirror 0.10 m behind it and
// 0.13 m under whatever roof is over that point -- the cab's roof on a lorry,
// which is not the highest roof it has.
export const VEHICLES = {
  // The bottom of the range, and the control for every level a bigger vehicle
  // has to fit into: short, narrow, and 38° of lock on a 2.30 m wheelbase.
  citycar: {
    id: 'citycar',
    name: 'City Car',
    length: 3.57, width: 1.63, height: 1.49,
    wheelbase: 2.30, rearOverhang: 0.62, trackWidth: 1.41,
    wheelRadius: 0.29, wheelWidth: 0.18,
    mirrors: { z: 1.400, out: 0.13, d: 0.1, h: 0.09, y: 1.22 },
    maxSteer: deg(38), steerRate: deg(160),
    accel: 3.1, brakeAccel: 6.0, rollDrag: 2.0,
    maxSpeed: 2.9, maxReverse: 2.3, crawlSpeed: 1.0,
    bodyColor: 0xf2c53d,
    body: {
      sill: 0.24, arch: 1.22, taper: [0.60, 0.86],
      top: [[1.000, 0.46], [0.900, 0.53], [0.700, 0.58], [0.530, 0.980],
        [0.230, 1.000], [0.070, 0.800], [0.000, 0.720]],
      glass: [2, 4],
      sides: [[0.25, 0.52, 0.63, 0.95]],
      eye: [0.440, 0.880], look: [0.502, 0.895],
    },
  },
  hatch: {
    id: 'hatch',
    name: 'Hatchback',
    length: 3.95, width: 1.76, height: 1.44,
    wheelbase: 2.45, rearOverhang: 0.75, trackWidth: 1.5,
    wheelRadius: 0.31, wheelWidth: 0.2,
    mirrors: { z: 1.550, out: 0.14, d: 0.1, h: 0.09, y: 1.18 },
    maxSteer: deg(36), steerRate: deg(155),
    accel: 3.0, brakeAccel: 6.0, rollDrag: 2.0,
    maxSpeed: 2.9, maxReverse: 2.3, crawlSpeed: 1.0,
    bodyColor: 0xe23c1e,
    body: {
      sill: 0.24, arch: 1.22, taper: [0.60, 0.86],
      top: [[1.000, 0.44], [0.905, 0.50], [0.720, 0.545], [0.560, 0.965],
        [0.235, 1.000], [0.075, 0.775], [0.000, 0.700]],
      glass: [2, 4],
      sides: [[0.26, 0.545, 0.62, 0.94]],
      eye: [0.479, 0.876], look: [0.535, 0.877],
    },
  },
  // Three boxes instead of two: 0.80 m more car than the hatchback, most of it
  // hung off the ends. Same class to drive, a different gap to fit into.
  saloon: {
    id: 'saloon',
    name: 'Saloon',
    length: 4.75, width: 1.83, height: 1.46,
    wheelbase: 2.79, rearOverhang: 1.06, trackWidth: 1.57,
    wheelRadius: 0.33, wheelWidth: 0.22,
    mirrors: { z: 1.780, out: 0.14, d: 0.1, h: 0.10, y: 1.20 },
    maxSteer: deg(34), steerRate: deg(150),
    accel: 2.9, brakeAccel: 5.9, rollDrag: 2.0,
    maxSpeed: 2.85, maxReverse: 2.25, crawlSpeed: 1.0,
    bodyColor: 0x2f6f4e,
    body: {
      sill: 0.235, arch: 1.22, taper: [0.60, 0.87],
      top: [[1.000, 0.44], [0.900, 0.50], [0.735, 0.545], [0.575, 0.965],
        [0.290, 1.000], [0.185, 0.720], [0.030, 0.660], [0.000, 0.600]],
      glass: [2, 4],
      sides: [[0.315, 0.555, 0.62, 0.94]],
      eye: [0.508, 0.875], look: [0.554, 0.879],
    },
  },
  // The same length as the saloon to within 3 cm, and 12 cm wider. It exists to
  // isolate width: whatever it cannot do that the saloon can is about the bay
  // being narrow, not about the vehicle being long.
  suv: {
    id: 'suv',
    name: 'SUV',
    length: 4.72, width: 1.95, height: 1.72,
    wheelbase: 2.82, rearOverhang: 0.95, trackWidth: 1.66,
    wheelRadius: 0.37, wheelWidth: 0.25,
    mirrors: { z: 1.990, out: 0.15, d: 0.1, h: 0.11, y: 1.38 },
    maxSteer: deg(33), steerRate: deg(145),
    accel: 2.7, brakeAccel: 5.6, rollDrag: 1.95,
    maxSpeed: 2.8, maxReverse: 2.2, crawlSpeed: 0.95,
    bodyColor: 0x2b4a7a,
    body: {
      sill: 0.26, arch: 1.20, taper: [0.62, 0.88],
      top: [[1.000, 0.42], [0.905, 0.50], [0.740, 0.55], [0.600, 0.955],
        [0.225, 1.000], [0.075, 0.870], [0.000, 0.780]],
      glass: [2, 4],
      sides: [[0.25, 0.585, 0.60, 0.94]],
      eye: [0.532, 0.855], look: [0.579, 0.882],
    },
  },
  van: {
    id: 'van',
    name: 'Delivery Van',
    length: 5.3, width: 2.02, height: 2.3,
    wheelbase: 3.2, rearOverhang: 0.95, trackWidth: 1.72,
    wheelRadius: 0.36, wheelWidth: 0.24,
    mirrors: { z: 3.19, out: 0.14, d: 0.1, h: 0.11, y: 1.66 },
    maxSteer: deg(32), steerRate: deg(130),
    accel: 2.6, brakeAccel: 5.4, rollDrag: 1.9,
    maxSpeed: 2.7, maxReverse: 2.1, crawlSpeed: 0.95,
    bodyColor: 0xf07f12,
    body: {
      sill: 0.183, arch: 1.24, taper: [0.55, 0.96],
      top: [[1.000, 0.34], [0.945, 0.40], [0.900, 0.44], [0.822, 0.90],
        [0.792, 0.99], [0.020, 1.00], [0.000, 0.94]],
      glass: [2],
      sides: [[0.80, 0.90, 0.55, 0.86]],
      eye: [0.598, 0.808], look: [0.664, 0.935],
    },
  },
  // The wide-circle vehicle: 3.68 m of wheelbase and only 30° of lock, so it
  // needs 6.4 m of radius where the hatchback needs 3.4 m. It is barely wider
  // than a van and it will not go where one goes.
  pickup: {
    id: 'pickup',
    name: 'Pickup Truck',
    length: 6.10, width: 2.03, height: 1.95,
    wheelbase: 3.68, rearOverhang: 1.35, trackWidth: 1.72,
    wheelRadius: 0.40, wheelWidth: 0.27,
    mirrors: { z: 2.220, out: 0.18, d: 0.1, h: 0.16, y: 1.56 },
    maxSteer: deg(30), steerRate: deg(130),
    accel: 2.5, brakeAccel: 5.2, rollDrag: 1.9,
    maxSpeed: 2.7, maxReverse: 2.1, crawlSpeed: 0.9,
    bodyColor: 0x8c3b2e,
    body: {
      sill: 0.26, arch: 1.20, taper: [0.62, 0.90],
      top: [[1.000, 0.44], [0.930, 0.56], [0.680, 0.60], [0.560, 0.965],
        [0.420, 1.000], [0.418, 0.600], [0.000, 0.600]],
      glass: [2, 4],
      sides: [[0.44, 0.55, 0.62, 0.94]],
      eye: [0.508, 0.870], look: [0.544, 0.902],
    },
  },
  // The tail-swing vehicle, and the near-twin of the step van below. They are
  // the same box to within 30 cm and they turn on the same radius; what differs
  // is where the axle sits under it, which is the whole point of having both.
  lorry: {
    id: 'lorry',
    name: 'Box Lorry',
    length: 7.60, width: 2.35, height: 3.20,
    wheelbase: 4.20, rearOverhang: 2.35, trackWidth: 2.00,
    wheelRadius: 0.46, wheelWidth: 0.28,
    mirrors: { z: 3.30, out: 0.20, d: 0.1, h: 0.30, y: 2.30 },
    maxSteer: deg(40), steerRate: deg(110),
    accel: 2.2, brakeAccel: 4.8, rollDrag: 1.8,
    maxSpeed: 2.5, maxReverse: 1.95, crawlSpeed: 0.85,
    bodyColor: 0xb4632a,
    body: {
      sill: 0.185, arch: 1.22, taper: [0.50, 0.98], dash: true,
      top: [[1.000, 0.30], [0.985, 0.42], [0.958, 0.80], [0.930, 0.855],
        [0.800, 0.855], [0.800, 1.000], [0.010, 1.000], [0.000, 0.94]],
      glass: [1],
      sides: [[0.81, 0.95, 0.46, 0.78]],
      eye: [0.880, 0.560], look: [0.926, 0.814],
    },
  },
  // Wheels near the ends of the same box: 1.20 m of rear overhang against the
  // lorry's 2.35 m. It sweeps a corner the lorry cannot, on the same circle.
  stepvan: {
    id: 'stepvan',
    name: 'Step Van',
    length: 7.30, width: 2.40, height: 3.00,
    wheelbase: 4.75, rearOverhang: 1.20, trackWidth: 2.02,
    wheelRadius: 0.42, wheelWidth: 0.26,
    mirrors: { z: 3.75, out: 0.20, d: 0.1, h: 0.28, y: 2.10 },
    maxSteer: deg(44), steerRate: deg(115),
    accel: 2.3, brakeAccel: 4.9, rollDrag: 1.8,
    maxSpeed: 2.55, maxReverse: 2.0, crawlSpeed: 0.85,
    bodyColor: 0x6f7a86,
    body: {
      sill: 0.16, arch: 1.22, taper: [0.50, 0.98], dash: true,
      top: [[1.000, 0.36], [0.988, 0.52], [0.960, 0.94], [0.945, 1.00],
        [0.015, 1.00], [0.000, 0.93]],
      glass: [1],
      sides: [[0.86, 0.95, 0.50, 0.88]],
      eye: [0.880, 0.560], look: [0.928, 0.957],
    },
  },
  // The user's own example, and the reason the roster is not a size ladder: it
  // is the city bus's length and width to within 10 cm, and it needs half again
  // as much room to turn, because the engine in front of the windscreen pushes
  // its front axle a metre back down the body.
  schoolbus: {
    id: 'schoolbus',
    name: 'School Bus',
    length: 10.90, width: 2.44, height: 3.05,
    wheelbase: 6.55, rearOverhang: 2.85, trackWidth: 2.06,
    wheelRadius: 0.52, wheelWidth: 0.30,
    mirrors: { z: 6.050, out: 0.22, d: 0.1, h: 0.30, y: 2.20 },
    maxSteer: deg(42), steerRate: deg(100),
    accel: 2.1, brakeAccel: 4.5, rollDrag: 1.8,
    maxSpeed: 2.45, maxReverse: 1.9, crawlSpeed: 0.85,
    bodyColor: 0xe8a319,
    body: {
      sill: 0.185, arch: 1.24, taper: [0.52, 0.97],
      top: [[1.000, 0.36], [0.968, 0.44], [0.853, 0.46], [0.818, 0.93],
        [0.800, 1.000], [0.015, 1.000], [0.000, 0.90]],
      glass: [3],
      sides: [[0.05, 0.79, 0.52, 0.86]],
      eye: [0.771, 0.640], look: [0.791, 0.957],
    },
  },
  bus: {
    id: 'bus',
    name: 'City Bus',
    length: 11.0, width: 2.5, height: 3.15,
    wheelbase: 5.6, rearOverhang: 2.9, trackWidth: 2.1,
    wheelRadius: 0.5, wheelWidth: 0.3,
    mirrors: { z: 7.75, out: 0.19, d: 0.1, h: 0.28, y: 2.457 },
    maxSteer: deg(50), steerRate: deg(105),
    accel: 2.2, brakeAccel: 4.6, rollDrag: 1.8,
    maxSpeed: 2.5, maxReverse: 1.9, crawlSpeed: 0.85,
    bodyColor: 0xd81f5e,
    body: {
      sill: 0.175, arch: 1.20, taper: [0.50, 0.97], dash: true,
      top: [[1.000, 0.30], [0.988, 0.56], [0.972, 0.96], [0.958, 1.00],
        [0.030, 1.00], [0.012, 0.62], [0.000, 0.32]],
      glass: [1, 4],
      sides: [[0.04, 0.95, 0.50, 0.90]],
      eye: [0.859, 0.610], look: [0.891, 0.959],
    },
  },
  // A rear-engine coach: the rear axle sits far forward under a long body, so
  // 3.9 m of bus hangs behind it. It turns fractionally wider than the city bus
  // and is only a metre longer, which is the point — what makes it different is
  // not its size or its lock but where its wheels are. Steer it by the nose and
  // the tail takes out whatever is behind and beside it.
  coach: {
    id: 'coach',
    name: 'Tour Coach',
    length: 12.0, width: 2.55, height: 3.35,
    wheelbase: 6.1, rearOverhang: 3.9, trackWidth: 2.15,
    wheelRadius: 0.52, wheelWidth: 0.3,
    mirrors: { z: 7.640, out: 0.19, d: 0.1, h: 0.28, y: 2.613 },
    maxSteer: deg(52), steerRate: deg(100),
    accel: 2.0, brakeAccel: 4.4, rollDrag: 1.8,
    maxSpeed: 2.4, maxReverse: 1.8, crawlSpeed: 0.85,
    bodyColor: 0x7a4fd6,
    body: {
      sill: 0.185, arch: 1.26, taper: [0.52, 0.97], dash: true,
      top: [[1.000, 0.34], [0.986, 0.60], [0.962, 0.95], [0.944, 1.00],
        [0.040, 1.00], [0.018, 0.66], [0.000, 0.36]],
      glass: [1, 4],
      sides: [[0.05, 0.94, 0.58, 0.92]],
      eye: [0.871, 0.579], look: [0.900, 0.961],
    },
  },
  towcar: {
    id: 'towcar',
    name: 'Car + Trailer',
    length: 4.6, width: 1.86, height: 1.62,
    wheelbase: 2.75, rearOverhang: 0.95, trackWidth: 1.6,
    wheelRadius: 0.33, wheelWidth: 0.22,
    mirrors: { z: 2.020, out: 0.14, d: 0.1, h: 0.09, y: 1.27 },
    maxSteer: deg(34), steerRate: deg(140),
    accel: 2.5, brakeAccel: 5.2, rollDrag: 1.9,
    maxSpeed: 2.6, maxReverse: 2.0, crawlSpeed: 0.9,
    bodyColor: 0x1d7fe0,
    // An estate: the roof runs back to the tailgate, which is why it can pull
    // something. Same silhouette grammar as the hatchback, different points.
    body: {
      sill: 0.222, arch: 1.20, taper: [0.62, 0.88],
      top: [[1.000, 0.44], [0.880, 0.48], [0.775, 0.51], [0.620, 0.94],
        [0.150, 1.00], [0.055, 0.82], [0.000, 0.44]],
      glass: [2, 4],
      sides: [[0.18, 0.61, 0.58, 0.92]],
      eye: [0.550, 0.852], look: [0.598, 0.863],
    },
    trailer: {
      name: 'box trailer',
      hitch: -1.1,          // signed, along tractor forward: behind the rear axle
      axleFromHitch: 2.9,   // hitch to trailer axle
      axleToFront: 1.9, axleToRear: 1.15,
      width: 1.9, height: 1.75,
      trackWidth: 1.62, wheelRadius: 0.29, wheelWidth: 0.2,
      maxAngle: deg(78),
      drawbar: true,
    },
  },
  semi: {
    id: 'semi',
    name: 'Semi Truck',
    length: 6.3, width: 2.5, height: 3.4,
    wheelbase: 3.9, rearOverhang: 1.0, trackWidth: 2.15,
    wheelRadius: 0.52, wheelWidth: 0.32,
    mirrors: { z: 5.15, out: 0.21, d: 0.1, h: 0.5, y: 2.931 },
    maxSteer: deg(40), steerRate: deg(100),
    accel: 2.0, brakeAccel: 4.2, rollDrag: 1.7,
    maxSpeed: 2.3, maxReverse: 1.7, crawlSpeed: 0.8,
    bodyColor: 0x1fa8a0,
    // A cab-over: the outline drops from the roof to the chassis rail behind
    // the cab and runs flat to the tail, so one silhouette draws both the cab
    // and the bare frame the fifth wheel sits on.
    body: {
      sill: 0.288, arch: 1.10, taper: [0.60, 0.98], dash: true,
      top: [[1.000, 0.42], [1.000, 0.93], [0.982, 1.00], [0.603, 1.00],
        [0.603, 0.400], [0.000, 0.400]],
      glass: [0],
      sides: [[0.66, 0.96, 0.62, 0.92]],
      eye: [0.825, 0.681], look: [0.881, 0.962],
    },
    trailer: {
      name: 'semitrailer',
      hitch: 0.45,          // fifth wheel, just ahead of the drive axle
      axleFromHitch: 7.6,
      axleToFront: 8.8, axleToRear: 4.2,
      width: 2.55, height: 4.0,
      trackWidth: 2.1, wheelRadius: 0.5, wheelWidth: 0.3,
      maxAngle: deg(72),
      drawbar: false,
    },
  },
};

// Distance from the rear axle to the geometric centre of the body box.
export function centerOffset(spec) {
  const frontOverhang = spec.length - spec.wheelbase - spec.rearOverhang;
  return (spec.wheelbase + frontOverhang - spec.rearOverhang) / 2;
}

export function trailerCenterOffset(t) {
  return (t.axleToFront - t.axleToRear) / 2;
}

export function trailerLength(t) {
  return t.axleToFront + t.axleToRear;
}

// Nose to tail of the whole combination.
export function combinationLength(spec) {
  const front = spec.wheelbase + (spec.length - spec.wheelbase - spec.rearOverhang);
  if (!spec.trailer) return spec.length;
  const t = spec.trailer;
  return front + (-t.hitch + t.axleFromHitch + t.axleToRear);
}

// --- state helpers -----------------------------------------------------
// A state is {x, z, yaw, trailerYaw, speed}, x/z at the tractor's rear axle.

export function bodyRect(spec, s) {
  const off = centerOffset(spec);
  return {
    x: s.x + Math.sin(s.yaw) * off,
    z: s.z + Math.cos(s.yaw) * off,
    w: spec.width, d: spec.length, rot: s.yaw,
  };
}

function hitchPoint(spec, s) {
  const t = spec.trailer;
  return { x: s.x + Math.sin(s.yaw) * t.hitch, z: s.z + Math.cos(s.yaw) * t.hitch };
}

export function trailerAxle(spec, s) {
  const t = spec.trailer;
  const h = hitchPoint(spec, s);
  return {
    x: h.x - Math.sin(s.trailerYaw) * t.axleFromHitch,
    z: h.z - Math.cos(s.trailerYaw) * t.axleFromHitch,
  };
}

export function trailerRect(spec, s) {
  const t = spec.trailer;
  const a = trailerAxle(spec, s);
  const off = trailerCenterOffset(t);
  return {
    x: a.x + Math.sin(s.trailerYaw) * off,
    z: a.z + Math.cos(s.trailerYaw) * off,
    w: t.width, d: trailerLength(t), rot: s.trailerYaw,
  };
}

// Where the wheels are. A semi has a twin drive axle; everything else has one
// of each. Shared by the mesh builder, which draws them, and the tyre traces,
// which need the ground point rather than the drawing.
export function axleRows(spec) {
  return { rear: spec.id === 'semi' ? [0, -1.35] : [0], front: [spec.wheelbase] };
}

export function trailerBogie(t) {
  return t.drawbar ? [0] : [0.7, -0.7];
}

// Every wheel's contact patch, in world XZ, with the heading its tread is
// laid down along. Steering is not in it: a steered wheel touches the ground
// in the same place whichever way it points.
export function wheelPoints(spec, s) {
  const out = [];
  const c = Math.cos(s.yaw);
  const sn = Math.sin(s.yaw);
  const rows = axleRows(spec);
  for (const z of [...rows.rear, ...rows.front]) {
    for (const sx of [-1, 1]) {
      const lx = (sx * spec.trackWidth) / 2;
      out.push({ x: s.x + lx * c + z * sn, z: s.z - lx * sn + z * c, w: spec.wheelWidth, rot: s.yaw });
    }
  }
  if (spec.trailer) {
    const t = spec.trailer;
    const a = trailerAxle(spec, s);
    const tc = Math.cos(s.trailerYaw);
    const ts = Math.sin(s.trailerYaw);
    for (const z of trailerBogie(t)) {
      for (const sx of [-1, 1]) {
        const lx = (sx * t.trackWidth) / 2;
        out.push({ x: a.x + lx * tc + z * ts, z: a.z - lx * ts + z * tc, w: t.wheelWidth, rot: s.trailerYaw });
      }
    }
  }
  return out;
}

// Every rectangle the world has to collide against.
// The mirrors stick out and they collide, by the user's decision: "Let them
// stick out and collide". They get a rectangle of their own rather than a wider
// body, because a car is only mirror-wide at the mirrors — widening `width`
// would make its bumpers hit things its bumpers do not reach.
export function mirrorRect(spec, s) {
  const m = spec.mirrors;
  return {
    x: s.x + Math.sin(s.yaw) * m.z,
    z: s.z + Math.cos(s.yaw) * m.z,
    w: spec.width + 2 * m.out, d: m.d, rot: s.yaw,
  };
}

// The rectangle at the back of the whole vehicle, which is the trailer's when
// there is one. Named rather than indexed off `bodyRects`, because what that
// returns is a set the physics tests in any order.
export function rearBodyRect(spec, s) {
  return spec.trailer ? trailerRect(spec, s) : bodyRect(spec, s);
}

function bodyRects(spec, s) {
  const r = [bodyRect(spec, s), mirrorRect(spec, s)];
  if (spec.trailer) r.push(trailerRect(spec, s));
  return r;
}

// Advance a state by dt at its own speed and the given steering angle.
export function integrate(spec, s, dt, steer) {
  const v = s.speed;
  const yawRate = (v * Math.tan(steer)) / spec.wheelbase;
  const midYaw = s.yaw + (yawRate * dt) / 2;
  const next = {
    x: s.x + v * Math.sin(midYaw) * dt,
    z: s.z + v * Math.cos(midYaw) * dt,
    yaw: s.yaw + yawRate * dt,
    trailerYaw: s.trailerYaw,
    speed: v,
  };
  if (spec.trailer) {
    const t = spec.trailer;
    const behind = -t.hitch; // positive when the hitch is behind the rear axle
    // The articulation rate that keeps the trailer axle rolling: the hitch is
    // dragged by the tractor, and the only motion the trailer's own wheels
    // permit is along its heading. Taken at the half-step, the way the tractor
    // takes its heading above — the yaw rate is constant across the step, so
    // `midYaw` is exactly the tractor's heading there. Sampling this at the
    // start of the step instead leaves a first-order error that shows up as
    // the trailer sliding sideways: 2.4e-3 m per metre travelled on the box
    // trailer against 4.9e-6 for this, 1.5e-3 against 1.2e-6 on the semi.
    const rateAt = (yaw, tYaw) => {
      const d = yaw - tYaw;
      return (v * Math.sin(d) - behind * yawRate * Math.cos(d)) / t.axleFromHitch;
    };
    const half = rateAt(s.yaw, s.trailerYaw) * (dt / 2);
    next.trailerYaw = s.trailerYaw + rateAt(midYaw, s.trailerYaw + half) * dt;
    // The jackknife limit is a stop, not a clamp. Holding the angle by pinning
    // trailerYaw — which is what this used to do — keeps the number in range by
    // teleporting the trailer axle sideways, the one motion a wheel cannot
    // make: measured at 97% of the trailer's remaining travel. So the state is
    // marked unreachable instead, and the caller refuses it exactly as it
    // refuses a state inside a wall (DESIGN.md 16).
    if (Math.abs(normalizeAngle(next.yaw - next.trailerYaw)) > t.maxAngle) {
      next.jackknifed = true;
    }
  }
  return next;
}

// A player who has never opened the menu, and every caller that does not
// have one — the prover included.
const NO_GAINS = { steerSpeed: 1, topSpeed: 1, acceleration: 1, slowdown: 1 };

export class Vehicle {
  constructor(spec) {
    this.spec = spec;
    this.reset(0, 0, 0);
  }

  reset(x, z, yaw) {
    this.x = x;
    this.z = z;
    this.yaw = yaw;
    this.trailerYaw = yaw;
    this.speed = 0;
    this.steer = 0;
    this.wheelSpin = 0;
    this.braking = false;
  }

  get state() {
    return { x: this.x, z: this.z, yaw: this.yaw, trailerYaw: this.trailerYaw, speed: this.speed };
  }

  set state(s) {
    this.x = s.x;
    this.z = s.z;
    this.yaw = s.yaw;
    this.trailerYaw = s.trailerYaw;
  }

  body(state = this) { return bodyRect(this.spec, state); }
  trailerAxleWorld(state = this) { return trailerAxle(this.spec, state); }
  rects(state = this) { return bodyRects(this.spec, state); }
  integrate(state, dt) { return integrate(this.spec, state, dt, this.steer); }

  get articulation() {
    return this.spec.trailer ? normalizeAngle(this.yaw - this.trailerYaw) : 0;
  }

  // Longitudinal + steering dynamics. Position integration is left to the
  // caller so it can be sub-stepped against collisions.
  control(dt, input) {
    const s = this.spec;
    // Player multipliers. Every one of them scales a *rate* — how fast the
    // wheel turns, how fast the vehicle gets to a speed, what a full trigger
    // is worth. None of them reaches maxSteer, the wheelbase or a body
    // rectangle, which is why none of them can change the set of paths the
    // vehicle can drive (DESIGN.md 15).
    const g = input.gains ?? NO_GAINS;

    const wheel = clamp(input.steer, -1, 1);
    if (input.steerMode === 'rate') {
      // The stick is the steering wheel's speed, not its angle. Let go and the
      // lock stays where you left it, so straightening out is a thing you do
      // rather than a thing that happens. Both modes reach every angle in
      // [-maxSteer, maxSteer], which is why the solvability proofs the levels
      // were cut against covered both — the solver that produced them is gone
      // (DESIGN.md 4), and the property is what remains of it (DESIGN.md 7).
      this.steer = clamp(this.steer + wheel * s.steerRate * g.steerSpeed * dt, -s.maxSteer, s.maxSteer);
    } else {
      const steerTarget = wheel * s.maxSteer;
      const steerRate = s.steerRate * (Math.abs(wheel) < 0.02 ? 1.7 : 1) * dt;
      this.steer += clamp(steerTarget - this.steer, -steerRate, steerRate);
    }

    const throttle = clamp(input.throttle, -1, 1);
    // Crawl is deliberately not scaled: it exists to be a fixed slow speed.
    const capF = input.crawl ? s.crawlSpeed : s.maxSpeed * g.topSpeed;
    const capR = input.crawl ? s.crawlSpeed : s.maxReverse * g.topSpeed;
    const pull = s.accel * g.acceleration;

    let accel;
    this.braking = false;
    if (input.brake) {
      this.braking = true;
      accel = -Math.sign(this.speed) * s.brakeAccel;
      if (Math.abs(this.speed) <= s.brakeAccel * dt) {
        this.speed = 0;
        accel = 0;
      }
    } else if (input.throttleMode === 'speed') {
      // The trigger is the speedometer, not the accelerator: where you hold it
      // is how fast the vehicle goes. A trigger let go springs back over a few
      // tens of milliseconds rather than instantly, so following it is already
      // a curve and not a step — the rate limit below only stops a keyboard,
      // which has no such curve, from teleporting the speed.
      //
      // Closing the gap gets the brake's rate rather than the coast's, which
      // is what makes this mode feel connected: the vehicle is where the
      // trigger says it is, near enough, instead of trailing it. Constraint 6
      // still holds — the caps are the same ones, crawl included, so this
      // changes how speed is asked for and not how much of it there is.
      const target = throttle * (throttle >= 0 ? capF : capR);
      const closing = Math.abs(target) < Math.abs(this.speed) || target * this.speed < 0;
      const rate = (closing ? s.brakeAccel * g.slowdown : pull) * dt;
      const step = clamp(target - this.speed, -rate, rate);
      this.braking = closing && Math.abs(step) > 0;
      this.speed += step;
      accel = 0;
    } else if (Math.abs(throttle) > 0.02) {
      const dir = Math.sign(throttle);
      if (this.speed * dir < -0.05) {
        this.braking = true;
        accel = dir * s.brakeAccel; // pedal against the motion brakes first
      } else {
        const cap = (dir > 0 ? capF : capR) * Math.abs(throttle);
        const fade = 1 - Math.min(1, Math.abs(this.speed) / Math.max(cap, 0.15));
        accel = dir * pull * Math.max(fade, 0.08);
        if (Math.abs(this.speed) > cap) accel = -Math.sign(this.speed) * s.brakeAccel * 0.5;
      }
    } else {
      const drag = s.rollDrag * g.slowdown;
      accel = -Math.sign(this.speed) * drag;
      if (Math.abs(this.speed) <= drag * dt) {
        this.speed = 0;
        accel = 0;
      }
    }

    this.speed = clamp(this.speed + accel * dt, -capR, capF);
    this.wheelSpin += (this.speed / s.wheelRadius) * dt;
  }
}
