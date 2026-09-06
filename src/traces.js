import * as THREE from 'three';
import { wheelPoints } from './vehicle.js';

// What the tyres leave behind, for as long as the level lasts.
//
// One ribbon per wheel, extended by a cross-section every few centimetres of
// travel. Sampling by distance rather than by time is what makes the trace a
// property of the path instead of the frame rate — stand still with the wheel
// turned and nothing is laid down, because nothing rolled.
//
// The count is a single number for the whole vehicle, because every wheel is
// sampled on the same tick. That is what lets a rewind take the trace back
// with it: the tape records the count, and restoring it is a truncation
// (src/rewind.js).

const SPACING = 0.06;
// 360 m of travel per wheel. A parking level that outruns this is one where
// the trace stopped being informative a long way back.
const MAX = 6000;

// DoubleSide because the ribbon's winding follows the direction of travel:
// reverse out of a bay and the quads face down, which FrontSide culls.
const MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x14161a, transparent: true, opacity: 0.24, depthWrite: false,
  side: THREE.DoubleSide,
  polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
});

// Just clear of the paint, which is itself just clear of the asphalt.
const HEIGHT = 0.012;

export class Traces {
  constructor(spec) {
    this.spec = spec;
    this.group = new THREE.Group();
    this.count = 0;
    this.last = null;
    const n = wheelPoints(spec, { x: 0, z: 0, yaw: 0, trailerYaw: 0 }).length;
    const index = [];
    for (let i = 0; i < MAX - 1; i++) {
      const a = i * 2;
      index.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    this.ribbons = [];
    for (let i = 0; i < n; i++) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(MAX * 6), 3));
      g.setIndex(index);
      g.setDrawRange(0, 0);
      // The trace is laid where the vehicle has been, which is anywhere; a
      // bounding sphere computed from an empty buffer culls the whole thing.
      g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4);
      this.ribbons.push(g);
      this.group.add(new THREE.Mesh(g, MATERIAL));
    }
  }

  clear() {
    this.count = 0;
    this.last = null;
    for (const g of this.ribbons) g.setDrawRange(0, 0);
  }

  // Rewind hands back a count the run had earlier. Everything past it is
  // simply no longer drawn — the vertices stay and get overwritten by
  // whatever is driven next.
  truncate(count) {
    this.count = Math.min(this.count, count);
    this.last = null;
    for (const g of this.ribbons) g.setDrawRange(0, Math.max(0, this.count - 1) * 6);
  }

  // Called once per physics step; lays a cross-section only when the vehicle
  // has actually rolled far enough since the last one.
  follow(state) {
    if (this.count >= MAX) return;
    if (this.last && Math.hypot(state.x - this.last.x, state.z - this.last.z) < SPACING) return;
    this.last = { x: state.x, z: state.z };
    const points = wheelPoints(this.spec, state);
    for (let i = 0; i < this.ribbons.length; i++) {
      const p = points[i];
      const ox = Math.cos(p.rot) * (p.w / 2);
      const oz = -Math.sin(p.rot) * (p.w / 2);
      const attr = this.ribbons[i].attributes.position;
      attr.setXYZ(this.count * 2, p.x - ox, HEIGHT, p.z - oz);
      attr.setXYZ(this.count * 2 + 1, p.x + ox, HEIGHT, p.z + oz);
      attr.needsUpdate = true;
    }
    this.count++;
    for (const g of this.ribbons) g.setDrawRange(0, (this.count - 1) * 6);
  }

  dispose() {
    for (const g of this.ribbons) g.dispose();
  }
}
