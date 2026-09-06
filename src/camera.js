import * as THREE from 'three';
import { clamp, normalizeAngle } from './geom.js';
import { combinationLength, bodyRect, trailerRect } from './vehicle.js';
import { BTN } from './gamepad.js';

// The camera does what the player told it, and nothing else (DESIGN.md 9).
// Its whole state is the player's four instructions — mode, yaw offset, pitch,
// zoom — plus the framing those are handed at the start of a level.
//
// Two modes, answering two different questions: `chase` is what the driver can
// see, `top` is what the collision model sees. There is no third question.

// One time constant for the whole rig. Position, look point and the overhead
// rotation share it because they are one decision: the camera follows rather
// than snapping. That is non-instantaneity, not a guess about what you meant.
const FOLLOW = 0.0012;

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.mode = 'chase';
    this.pos = new THREE.Vector3(0, 6, 12);
    this.look = new THREE.Vector3();
    this.topYaw = 0;
    this.reset();
  }

  // A different view, not a trip to it: asking for the overhead cuts to the
  // overhead. Swooping between the two spends half a second with the camera
  // somewhere neither view asked for.
  cycle() {
    this.mode = this.mode === 'chase' ? 'top' : 'chase';
    this.first = true;
    return this.mode;
  }

  handleInput(input, pad, dt = 0.016) {
    if (input.drag.dx || input.drag.dy) {
      this.yawOffset -= input.drag.dx * 0.006;
      this.pitch = clamp(this.pitch + input.drag.dy * 0.004, 0.06, 1.4);
    }
    if (input.wheel) this.zoom(input.wheel);
    const swing = (input.keys.has('camleft') ? 1 : 0) - (input.keys.has('camright') ? 1 : 0);
    if (swing) this.yawOffset += swing * 1.9 * dt;
    if (input.pressed('KeyZ')) this.recentre();
    if (pad && pad.connected) {
      const look = pad.look();
      if (look.x) this.yawOffset -= look.x * 2.4 * dt;
      if (look.y) this.pitch = clamp(this.pitch + look.y * 1.5 * dt, 0.06, 1.4);
      if (pad.button(BTN.RS)) this.recentre();
      if (pad.tapped(BTN.UP)) this.zoom(-1);
      if (pad.tapped(BTN.DOWN)) this.zoom(1);
    }
    this.yawOffset = normalizeAngle(this.yawOffset);
  }

  zoom(steps) {
    if (this.mode === 'top') this.topHeight = clamp(this.topHeight + steps * 2.2, 9, 70);
    else this.dist = clamp(this.dist + steps * 0.9, 3.6, 30);
  }

  // Camera angles are held relative to the vehicle body, so a view you chose
  // stays on the same corner of the car as the car turns. Recentring puts the
  // view back where the level handed it to you, and nothing else ever does.
  recentre() {
    this.yawOffset = 0;
    this.pitch = this.basePitch;
  }

  update(dt, car, spec) {
    // Frame the whole combination, not the cab: anchored on the tractor's rear
    // axle, a chase camera for a 16.6 m artic sits on top of its own trailer.
    let cx = car.x + Math.sin(car.yaw) * 1.2;
    let cz = car.z + Math.cos(car.yaw) * 1.2;
    if (spec.trailer) {
      const b = bodyRect(spec, car);
      const t = trailerRect(spec, car);
      // Aimed slightly behind the middle, so the dash does not eat the tail.
      cx = b.x * 0.35 + t.x * 0.65;
      cz = b.z * 0.35 + t.z * 0.65;
    }

    const follow = 1 - Math.pow(FOLLOW, dt);
    const want = new THREE.Vector3();
    const target = new THREE.Vector3();

    if (this.mode === 'top') {
      want.set(cx, this.topHeight, cz);
      target.set(cx, 0, cz);
      // The overhead view is body-relative too: the vehicle keeps pointing up
      // the screen, so a stick left is always a nose left.
      const wantYaw = car.yaw + this.yawOffset;
      this.topYaw = this.first ? wantYaw : this.topYaw + normalizeAngle(wantYaw - this.topYaw) * follow;
    } else {
      const a = car.yaw + Math.PI + this.yawOffset;
      const flat = this.dist * Math.cos(this.pitch);
      want.set(cx + Math.sin(a) * flat, 1.1 + Math.sin(this.pitch) * this.dist, cz + Math.cos(a) * flat);
      target.set(cx, spec.height * 0.55, cz);
    }

    if (this.first) {
      this.pos.copy(want);
      this.look.copy(target);
      this.first = false;
    } else {
      this.pos.lerp(want, follow);
      this.look.lerp(target, follow);
    }

    this.camera.position.copy(this.pos);
    if (this.mode === 'top') this.camera.up.set(Math.sin(this.topYaw), 0, Math.cos(this.topYaw));
    else this.camera.up.set(0, 1, 0);
    this.camera.lookAt(this.look);
  }

  // The framing a level hands you: the one place in here that chooses a pose
  // rather than being told one, and it chooses only when a level starts.
  reset(theme = 'lot', spec = null) {
    // The lot is the only theme with room to stand back in. A street canyon,
    // a garage and an alley all put a wall where a shallow camera wants to
    // sit, so the view they hand you looks down over it instead of into it.
    const enclosed = theme !== 'lot';
    const long = spec ? Math.max(0, combinationLength(spec) - 3.95) * 0.85 : 0;
    // Two reasons to look down: the walls, and the vehicle's own length —
    // at a shallow angle a 16.6 m artic hides the world behind itself. They
    // are the same instruction, so take the larger rather than stacking them.
    this.basePitch = Math.max(enclosed ? 0.8 : 0.34, 0.34 + Math.min(0.26, long * 0.024));
    this.pitch = this.basePitch;
    this.dist = (enclosed ? 8.6 : 9.6) + long * 1.55;
    this.topHeight = 24 + long * 3;
    this.yawOffset = 0;
    this.first = true;
  }
}
