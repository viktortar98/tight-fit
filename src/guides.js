import * as THREE from 'three';

// Reversing-camera style guide lines: where the two critical corners of the
// car will actually go if you hold the current steering angle. This is the
// difference between guessing and knowing, and every hard level assumes you
// have it on.

const SAMPLES = 26;
const ARC = 0.34; // metres per sample

export class Guides {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.lines = [];
    for (let i = 0; i < 3; i++) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SAMPLES * 3), 3));
      const mat = new THREE.LineBasicMaterial({
        color: i === 2 ? 0x8ab4ff : 0xffd24a,
        transparent: true,
        opacity: i === 2 ? 0.45 : 0.9,
        depthTest: false,
      });
      const line = new THREE.Line(geo, mat);
      line.renderOrder = 5;
      this.group.add(line);
      this.lines.push(line);
    }
    this.visible = true;
  }

  setVisible(v) {
    this.visible = v;
    this.group.visible = v;
  }

  update(car, spec, dir) {
    if (!this.visible) return;
    const off = { fo: spec.length - spec.wheelbase - spec.rearOverhang };
    // Local-frame points, relative to the rear axle: outer corners of the end
    // that leads, plus the centre line.
    const nose = spec.wheelbase + off.fo;
    const tail = -spec.rearOverhang;
    const hw = spec.width / 2;
    const zEnd = dir >= 0 ? nose : tail;
    const pts = [[-hw, zEnd], [hw, zEnd], [0, dir >= 0 ? nose : tail]];

    const arrays = this.lines.map((l) => l.geometry.attributes.position.array);
    let s = { x: car.x, z: car.z, yaw: car.yaw };
    const step = ARC * (dir >= 0 ? 1 : -1);
    for (let i = 0; i < SAMPLES; i++) {
      const c = Math.cos(s.yaw), sn = Math.sin(s.yaw);
      for (let p = 0; p < 3; p++) {
        const [lx, lz] = pts[p];
        arrays[p][i * 3] = s.x + lx * c + lz * sn;
        arrays[p][i * 3 + 1] = 0.06;
        arrays[p][i * 3 + 2] = s.z - lx * sn + lz * c;
      }
      const yawRate = (step * Math.tan(car.steer)) / spec.wheelbase;
      const mid = s.yaw + yawRate / 2;
      s = {
        x: s.x + step * Math.sin(mid),
        z: s.z + step * Math.cos(mid),
        yaw: s.yaw + yawRate,
      };
    }
    for (const l of this.lines) l.geometry.attributes.position.needsUpdate = true;
  }
}
