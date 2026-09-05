import * as THREE from 'three';
import { clamp, lerp } from './geom.js';

export const CAMERA_MODES = ['chase', 'top', 'orbit'];

export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.mode = 'chase';
    this.yawOffset = 0;      // user orbit, radians
    this.pitch = 0.34;
    this.dist = 9.2;
    this.topHeight = 24;
    this.autoFlip = true;
    this.flip = 0;           // 0 = behind, 1 = in front (reversing)
    this.flipWant = 0;
    this.flipTimer = 0;
    this.pos = new THREE.Vector3(0, 6, 12);
    this.ray = new THREE.Raycaster();
    this._carHead = new THREE.Vector3();
    this._dir = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.first = true;
  }

  cycle() {
    this.mode = CAMERA_MODES[(CAMERA_MODES.indexOf(this.mode) + 1) % CAMERA_MODES.length];
    return this.mode;
  }

  handleInput(input) {
    if (input.drag.dx || input.drag.dy) {
      this.yawOffset -= input.drag.dx * 0.006;
      this.pitch = clamp(this.pitch + input.drag.dy * 0.004, 0.06, 1.35);
    }
    if (input.wheel) {
      if (this.mode === 'top') this.topHeight = clamp(this.topHeight + input.wheel * 2.2, 9, 60);
      else this.dist = clamp(this.dist + input.wheel * 0.9, 3.6, 26);
    }
  }

  update(dt, car, spec, world) {
    const cx = car.x + Math.sin(car.yaw) * 1.2;
    const cz = car.z + Math.cos(car.yaw) * 1.2;

    let want = this.pos.clone();
    let target = new THREE.Vector3(cx, spec.height * 0.55, cz);
    let damp = 1 - Math.pow(0.0015, dt);

    if (this.mode === 'top') {
      want.set(cx, this.topHeight, cz + 0.001);
      target.set(cx, 0, cz);
      damp = 1 - Math.pow(0.0008, dt);
    } else if (this.mode === 'orbit') {
      const a = this.yawOffset;
      want.set(
        cx + Math.sin(a) * this.dist * Math.cos(this.pitch),
        1.0 + Math.sin(this.pitch) * this.dist,
        cz + Math.cos(a) * this.dist * Math.cos(this.pitch),
      );
    } else {
      // chase: sit behind the car, and swing round when reversing so the
      // camera always faces the direction of travel
      if (this.autoFlip) {
        if (car.speed < -0.35) this.flipWant = 1;
        else if (car.speed > 0.35) this.flipWant = 0;
      } else this.flipWant = 0;
      if (this.flipWant !== Math.round(this.flip)) this.flipTimer += dt;
      else this.flipTimer = 0;
      if (this.flipTimer > 0.3) this.flip = lerp(this.flip, this.flipWant, 1 - Math.pow(0.02, dt));
      const a = car.yaw + Math.PI + this.yawOffset + this.flip * Math.PI;
      want.set(
        cx + Math.sin(a) * this.dist * Math.cos(this.pitch),
        1.1 + Math.sin(this.pitch) * this.dist,
        cz + Math.cos(a) * this.dist * Math.cos(this.pitch),
      );
    }

    if (this.mode !== 'top' && world) {
      // Keep the camera inside the arena, then pull it in past anything that
      // would otherwise stand between it and the car. Enclosed levels put
      // walls exactly where a chase camera wants to be.
      const a = world.arena;
      const m = 0.5;
      want.x = clamp(want.x, a.x - a.w / 2 + m, a.x + a.w / 2 - m);
      want.z = clamp(want.z, a.z - a.d / 2 + m, a.z + a.d / 2 - m);
      want.y = Math.max(want.y, 1.4);

      this._carHead.set(cx, 1.35, cz);
      this._dir.copy(want).sub(this._carHead);
      const len = this._dir.length();
      if (len > 0.01) {
        this._dir.divideScalar(len);
        this.ray.set(this._carHead, this._dir);
        this.ray.far = len;
        const hit = this.ray.intersectObjects(world.occluders, true)[0];
        if (hit) {
          const got = Math.max(2.4, hit.distance - 0.4);
          want.copy(this._carHead).addScaledVector(this._dir, got);
          // Trade the lost distance for height, so a camera shoved against a
          // wall looks down over the car instead of at the back of its roof.
          want.y += Math.min(3.4, (len - got) * 0.45);
        }
      }
    }

    if (this.first) {
      this.pos.copy(want);
      this.look.copy(target);
      this.first = false;
    } else {
      this.pos.lerp(want, damp);
      this.look.lerp(target, 1 - Math.pow(0.0005, dt));
    }

    this.camera.position.copy(this.pos);
    if (this.mode === 'top') this.camera.up.set(0, 0, -1);
    else this.camera.up.set(0, 1, 0);
    this.camera.lookAt(this.look);
  }

  reset(theme, spec) {
    // Enclosed levels need a steeper look-down; there is nowhere to stand.
    const tight = theme === 'garage' || theme === 'alley';
    const long = spec ? (spec.length - 3.95) * 1.3 : 0;
    this.pitch = tight ? 0.6 : 0.34;
    this.dist = (tight ? 8.6 : 9.6) + long;
    this.first = true;
    this.yawOffset = 0;
    this.flip = 0;
    this.flipWant = 0;
  }
}
