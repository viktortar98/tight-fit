// Kinematic bicycle model, referenced at the centre of the rear axle.
// Deliberately not a drift sim: at parking speeds tyres don't slip, and a
// predictable car is what makes a tight squeeze a skill problem rather than
// a luck problem.

import { clamp } from './geom.js';

const deg = (d) => (d * Math.PI) / 180;

export const VEHICLES = {
  hatch: {
    id: 'hatch',
    name: 'Hatchback',
    length: 3.95,
    width: 1.76,
    height: 1.44,
    wheelbase: 2.45,
    rearOverhang: 0.75,
    trackWidth: 1.5,
    wheelRadius: 0.31,
    wheelWidth: 0.2,
    maxSteer: deg(36),
    steerRate: deg(150),
    accel: 3.4,
    brakeAccel: 7.5,
    rollDrag: 1.5,
    maxSpeed: 7.0,
    maxReverse: 3.6,
    crawlSpeed: 1.3,
    bodyColor: 0xd8442f,
  },
  van: {
    id: 'van',
    name: 'Delivery Van',
    length: 5.3,
    width: 2.02,
    height: 2.3,
    wheelbase: 3.2,
    rearOverhang: 0.95,
    trackWidth: 1.72,
    wheelRadius: 0.36,
    wheelWidth: 0.24,
    maxSteer: deg(32),
    steerRate: deg(120),
    accel: 2.6,
    brakeAccel: 6.5,
    rollDrag: 1.6,
    maxSpeed: 5.6,
    maxReverse: 3.0,
    crawlSpeed: 1.1,
    bodyColor: 0xe8e5dd,
  },
};

// Distance from the rear axle to the geometric centre of the body box.
export function centerOffset(spec) {
  const frontOverhang = spec.length - spec.wheelbase - spec.rearOverhang;
  return (spec.wheelbase + frontOverhang - spec.rearOverhang) / 2;
}

export function turningRadius(spec) {
  return spec.wheelbase / Math.tan(spec.maxSteer);
}

// Width of the ring swept by a full-lock turn: the corridor a 90-degree
// swing needs. Levels are tuned against this number.
export function sweptWidth(spec) {
  const r = turningRadius(spec);
  const frontOverhang = spec.length - spec.wheelbase - spec.rearOverhang;
  const outer = Math.hypot(r + spec.width / 2, spec.wheelbase + frontOverhang);
  const inner = Math.hypot(r - spec.width / 2, spec.rearOverhang);
  return { outer, inner, width: outer - (r - spec.width / 2) };
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
    this.speed = 0;
    this.steer = 0;
    this.wheelSpin = 0;
    this.braking = false;
  }

  get forward() {
    return { x: Math.sin(this.yaw), z: Math.cos(this.yaw) };
  }

  // Body rectangle in world space (collision + parking checks use this).
  body(state = this) {
    const off = centerOffset(this.spec);
    return {
      x: state.x + Math.sin(state.yaw) * off,
      z: state.z + Math.cos(state.yaw) * off,
      w: this.spec.width,
      d: this.spec.length,
      rot: state.yaw,
    };
  }

  // Longitudinal + steering dynamics. Integration of position is done by the
  // caller so it can be sub-stepped against collisions.
  control(dt, input) {
    const s = this.spec;

    const steerTarget = input.steer * s.maxSteer;
    const steerRate = s.steerRate * (input.steer === 0 ? 1.7 : 1) * dt;
    this.steer += clamp(steerTarget - this.steer, -steerRate, steerRate);

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
    } else if (input.throttle !== 0) {
      const dir = Math.sign(input.throttle);
      if (this.speed * dir < -0.05) {
        this.braking = true;
        accel = dir * s.brakeAccel; // pedal opposite to motion brakes first
      } else {
        const cap = dir > 0 ? capF : capR;
        const fade = 1 - Math.min(1, Math.abs(this.speed) / cap);
        accel = dir * s.accel * Math.max(fade, 0.06);
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

  // Advance a plain {x, z, yaw} by dt without touching this.speed/steer.
  integrate(state, dt) {
    const yawRate = (state.speed ?? this.speed) * Math.tan(this.steer) / this.spec.wheelbase;
    const v = state.speed ?? this.speed;
    const midYaw = state.yaw + (yawRate * dt) / 2;
    return {
      x: state.x + v * Math.sin(midYaw) * dt,
      z: state.z + v * Math.cos(midYaw) * dt,
      yaw: state.yaw + yawRate * dt,
      speed: v,
    };
  }

  get state() {
    return { x: this.x, z: this.z, yaw: this.yaw, speed: this.speed };
  }

  set state(s) {
    this.x = s.x;
    this.z = s.z;
    this.yaw = s.yaw;
  }
}
