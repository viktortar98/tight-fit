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
      // [-maxSteer, maxSteer], which is why the solvability proofs in
      // tools/validate.js hold for either (DESIGN.md 7).
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
