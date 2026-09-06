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
export const VEHICLES = {
  hatch: {
    id: 'hatch',
    name: 'Hatchback',
    length: 3.95, width: 1.76, height: 1.44,
    wheelbase: 2.45, rearOverhang: 0.75, trackWidth: 1.5,
    wheelRadius: 0.31, wheelWidth: 0.2,
    maxSteer: deg(36), steerRate: deg(155),
    accel: 3.0, brakeAccel: 6.0, rollDrag: 2.0,
    maxSpeed: 2.9, maxReverse: 2.3, crawlSpeed: 1.0,
    bodyColor: 0xe23c1e,
  },
  van: {
    id: 'van',
    name: 'Delivery Van',
    length: 5.3, width: 2.02, height: 2.3,
    wheelbase: 3.2, rearOverhang: 0.95, trackWidth: 1.72,
    wheelRadius: 0.36, wheelWidth: 0.24,
    maxSteer: deg(32), steerRate: deg(130),
    accel: 2.6, brakeAccel: 5.4, rollDrag: 1.9,
    maxSpeed: 2.7, maxReverse: 2.1, crawlSpeed: 0.95,
    bodyColor: 0xf07f12,
  },
  bus: {
    id: 'bus',
    name: 'City Bus',
    length: 11.0, width: 2.5, height: 3.15,
    wheelbase: 5.6, rearOverhang: 2.9, trackWidth: 2.1,
    wheelRadius: 0.5, wheelWidth: 0.3,
    maxSteer: deg(50), steerRate: deg(105),
    accel: 2.2, brakeAccel: 4.6, rollDrag: 1.8,
    maxSpeed: 2.5, maxReverse: 1.9, crawlSpeed: 0.85,
    bodyColor: 0xd81f5e,
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
    maxSteer: deg(52), steerRate: deg(100),
    accel: 2.0, brakeAccel: 4.4, rollDrag: 1.8,
    maxSpeed: 2.4, maxReverse: 1.8, crawlSpeed: 0.85,
    bodyColor: 0x7a4fd6,
  },
  towcar: {
    id: 'towcar',
    name: 'Car + Trailer',
    length: 4.6, width: 1.86, height: 1.62,
    wheelbase: 2.75, rearOverhang: 0.95, trackWidth: 1.6,
    wheelRadius: 0.33, wheelWidth: 0.22,
    maxSteer: deg(34), steerRate: deg(140),
    accel: 2.5, brakeAccel: 5.2, rollDrag: 1.9,
    maxSpeed: 2.6, maxReverse: 2.0, crawlSpeed: 0.9,
    bodyColor: 0x1d7fe0,
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
    maxSteer: deg(40), steerRate: deg(100),
    accel: 2.0, brakeAccel: 4.2, rollDrag: 1.7,
    maxSpeed: 2.3, maxReverse: 1.7, crawlSpeed: 0.8,
    bodyColor: 0x1fa8a0,
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

function turningRadius(spec) {
  return spec.wheelbase / Math.tan(spec.maxSteer);
}

// Width of the ring swept by a full-lock turn: the corridor a 90-degree swing
// needs. Level dimensions are chosen against this number.
export function sweptWidth(spec) {
  const r = turningRadius(spec);
  const frontOverhang = spec.length - spec.wheelbase - spec.rearOverhang;
  const outer = Math.hypot(r + spec.width / 2, spec.wheelbase + frontOverhang);
  return { outer, inner: r - spec.width / 2, width: outer - (r - spec.width / 2) };
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

// Every rectangle the world has to collide against.
export function bodyRects(spec, s) {
  return spec.trailer ? [bodyRect(spec, s), trailerRect(spec, s)] : [bodyRect(spec, s)];
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
    const diff = s.yaw - s.trailerYaw;
    const rate = (v * Math.sin(diff) - behind * yawRate * Math.cos(diff)) / t.axleFromHitch;
    next.trailerYaw = s.trailerYaw + rate * dt;
    // Jackknife stop: the cab and the trailer would be touching by now.
    const over = normalizeAngle(next.yaw - next.trailerYaw);
    if (Math.abs(over) > t.maxAngle) {
      next.trailerYaw = next.yaw - Math.sign(over) * t.maxAngle;
      next.jackknifed = true;
    }
  }
  return next;
}

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

    const steerTarget = clamp(input.steer, -1, 1) * s.maxSteer;
    const steerRate = s.steerRate * (Math.abs(input.steer) < 0.02 ? 1.7 : 1) * dt;
    this.steer += clamp(steerTarget - this.steer, -steerRate, steerRate);

    const throttle = clamp(input.throttle, -1, 1);
    const capF = input.crawl ? s.crawlSpeed : s.maxSpeed;
    const capR = input.crawl ? s.crawlSpeed : s.maxReverse;

    let accel;
    this.braking = false;
    if (input.brake) {
      this.braking = true;
      accel = -Math.sign(this.speed) * s.brakeAccel;
      if (Math.abs(this.speed) <= s.brakeAccel * dt) {
        this.speed = 0;
        accel = 0;
      }
    } else if (Math.abs(throttle) > 0.02) {
      const dir = Math.sign(throttle);
      if (this.speed * dir < -0.05) {
        this.braking = true;
        accel = dir * s.brakeAccel; // pedal against the motion brakes first
      } else {
        const cap = (dir > 0 ? capF : capR) * Math.abs(throttle);
        const fade = 1 - Math.min(1, Math.abs(this.speed) / Math.max(cap, 0.15));
        accel = dir * s.accel * Math.max(fade, 0.08);
        if (Math.abs(this.speed) > cap) accel = -Math.sign(this.speed) * s.brakeAccel * 0.5;
      }
    } else {
      accel = -Math.sign(this.speed) * s.rollDrag;
      if (Math.abs(this.speed) <= s.rollDrag * dt) {
        this.speed = 0;
        accel = 0;
      }
    }

    this.speed = clamp(this.speed + accel * dt, -capR, capF);
    this.wheelSpin += (this.speed / s.wheelRadius) * dt;
  }
}
