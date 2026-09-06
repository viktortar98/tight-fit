import * as THREE from 'three';
import { axleRows } from './vehicle.js';

// The circle each wheel is currently on.
//
// Hold the wheel still and every wheel of a vehicle runs round a circle, and
// all four circles share one centre: the point on the rear axle's line that the
// front wheels are steering about. This draws those circles on the ground, and
// the centre they share.
//
// The thing it is for is that the circles do not move. Drive with the steering
// held and the vehicle travels along a ring that stays exactly where it was
// drawn, because the ring is not a prediction of a path — it is the geometry
// the vehicle is in right now, recomputed every frame and landing in the same
// place every frame. Turn the wheel and the whole figure jumps to the new one.
// A player who wants to know whether a bay is reachable at this lock can read
// it off the floor instead of trying it.
//
// It is off by default and it is a setting, because the game a player is
// handed is still the plainest one (DESIGN.md 10, 12). What makes it allowed
// at all is that it never reads the bay: it is derived from the vehicle's own
// state, so it can say where the vehicle is going and can never say where it
// should go.

const HEIGHT = 0.022;
const BAND = 0.055;
// About this far apart along the arc. Fine enough that a 3 m circle is round.
const ARC = 0.28;
const MAX_STEPS = 900;
// Beyond this the vehicle is going straight in any way a player can act on, and
// the "circle" is a line further away than the level is wide.
const MAX_RADIUS = 4000;

// The two ends of the vehicle are two different questions. The rear wheels say
// where the vehicle will end up, because a bay is entered by the back of the
// car; the front wheels say what it will sweep past on the way, because they
// are the widest thing on the outside of the turn. Reading one for the other is
// the mistake the drawing exists to prevent, so they are not the same colour.
const REAR_COLOUR = 0x4a9fd8;
const FRONT_COLOUR = 0xb07ee8;
const CENTRE_COLOUR = 0xe8b33c;

function ribbon(count, colour, opacity) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * 2 * 3), 3));
  const idx = [];
  for (let i = 0; i < count - 1; i++) {
    const a = i * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  g.setIndex(idx);
  g.setDrawRange(0, 0);
  // The centre of a large circle is a long way off the level; a bounding sphere
  // fitted to an empty buffer culls the ring that is on it.
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({
    color: colour, transparent: true, opacity, depthWrite: false,
    side: THREE.DoubleSide, toneMapped: false,
    polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
  }));
  return { geometry: g, mesh: m };
}

export class TurnCircles {
  // Two things a caller gets to say about how this is drawn, and both exist
  // for the frozen copy a ghost carries (src/ghosts.js).
  //
  // `opacity` keeps a ghost's figure under the live one, so there is never a
  // question about which figure the wheel in your hands is moving.
  //
  // `rings` is the more interesting one. `rear` drops the front-wheel circles,
  // which for a *past* pose are the ones the ground already has: the tyre
  // marks (DESIGN.md 19) are the arcs the wheels actually ran, front pair
  // included, drawn where they ran. What a past pose adds that nothing else
  // records is the centre it was turning about, and the circle its rear axle —
  // the end that decides where the vehicle ends up — was on. Six ghosts of the
  // full figure is thirty-six rings over one manoeuvre, and a picture nobody
  // can read is not a record of anything.
  constructor({ opacity = 0.5, rings = 'all' } = {}) {
    this.group = new THREE.Group();
    this.group.visible = false;
    this.rings = [];
    this.spec = null;
    this.opacity = opacity;
    this.wheelSet = rings;
    this.centre = ribbon(64, CENTRE_COLOUR, opacity);
    this.group.add(this.centre.mesh);
  }

  // One ring per wheel, so the count follows the vehicle rather than assuming
  // four. Rebuilt on a change of vehicle and not otherwise.
  setSpec(spec) {
    if (this.spec === spec) return;
    this.spec = spec;
    for (const r of this.rings) {
      this.group.remove(r.mesh);
      r.geometry.dispose();
    }
    const rows = axleRows(spec);
    this.wheels = [];
    for (const z of rows.rear) {
      for (const sx of [-1, 1]) this.wheels.push([(sx * spec.trackWidth) / 2, z, REAR_COLOUR]);
    }
    if (this.wheelSet === 'all') {
      for (const z of rows.front) {
        for (const sx of [-1, 1]) this.wheels.push([(sx * spec.trackWidth) / 2, z, FRONT_COLOUR]);
      }
    }
    this.rings = this.wheels.map(([, , colour]) => ribbon(MAX_STEPS + 1, colour, this.opacity));
    for (const r of this.rings) this.group.add(r.mesh);
  }

  // `car` is the vehicle state; `bounds` is the level's, and nothing is drawn
  // outside it. Clipping rather than scaling is the only honest choice: a
  // circle shrunk to fit the level would be a circle the vehicle is not on.
  update(spec, car, bounds) {
    this.setSpec(spec);
    const t = Math.tan(car.steer);
    // Straight ahead has no centre and no circle, and neither does a lock so
    // slight that the circle is nowhere near the level.
    const R = Math.abs(t) < 1e-4 ? Infinity : spec.wheelbase / t;
    if (!Number.isFinite(R) || Math.abs(R) > MAX_RADIUS) {
      this.group.visible = false;
      return;
    }
    this.group.visible = true;

    // The centre sits on the rear axle line, R to the driver's left of the
    // reference point — the same +X the mesh calls left, so a left lock puts it
    // on the left. Vehicle frame to world is the transform the mirrors use.
    const s = Math.sin(car.yaw);
    const c = Math.cos(car.yaw);
    const cx = car.x + R * c;
    const cz = car.z - R * s;

    const diag = Math.hypot(bounds.maxX - bounds.minX, bounds.maxZ - bounds.minZ);
    for (let i = 0; i < this.wheels.length; i++) {
      const [wx, wz] = this.wheels[i];
      this.arc(this.rings[i], cx, cz, Math.hypot(wx - R, wz), car, diag, bounds);
    }
    // The centre is a ring of its own, small and fixed, and it is drawn only
    // when it is on the level: for a gentle lock it is hundreds of metres away.
    this.mark(cx, cz, bounds);
  }

  arc(ring, cx, cz, radius, car, diag, bounds) {
    const attr = ring.geometry.attributes.position;
    if (radius < 0.05) { ring.geometry.setDrawRange(0, 0); return; }
    // Sample around the vehicle's own place on the circle, out to as much of it
    // as could possibly reach the level. For a tight lock that is the whole
    // circle; for a wide one it is the short piece near the vehicle, which is
    // what keeps the step count the same for both.
    const theta0 = Math.atan2(car.z - cz, car.x - cx);
    const half = Math.min(Math.PI, (diag * 1.1) / radius);
    const steps = Math.min(MAX_STEPS, Math.max(24, Math.ceil((2 * half * radius) / ARC)));
    const d = (2 * half) / steps;
    let n = 0;
    let broke = true;
    for (let i = 0; i <= steps; i++) {
      const th = theta0 - half + i * d;
      const co = Math.cos(th);
      const si = Math.sin(th);
      const x = cx + co * radius;
      const z = cz + si * radius;
      if (x < bounds.minX || x > bounds.maxX || z < bounds.minZ || z > bounds.maxZ) {
        broke = true;
        continue;
      }
      // A sample that follows a skipped one starts a new strip rather than
      // joining across the gap, or the ring is closed by a chord through the
      // part of it that is off the level.
      if (broke && n > 0) {
        attr.setXYZ(n * 2, x, HEIGHT, z);
        attr.setXYZ(n * 2 + 1, x, HEIGHT, z);
        n++;
      }
      broke = false;
      attr.setXYZ(n * 2, x + co * BAND, HEIGHT, z + si * BAND);
      attr.setXYZ(n * 2 + 1, x - co * BAND, HEIGHT, z - si * BAND);
      n++;
      if (n > MAX_STEPS) break;
    }
    attr.needsUpdate = true;
    ring.geometry.setDrawRange(0, Math.max(0, n - 1) * 6);
  }

  mark(cx, cz, bounds) {
    const attr = this.centre.geometry.attributes.position;
    if (cx < bounds.minX || cx > bounds.maxX || cz < bounds.minZ || cz > bounds.maxZ) {
      this.centre.geometry.setDrawRange(0, 0);
      return;
    }
    const steps = 31;
    for (let i = 0; i <= steps; i++) {
      const th = (i / steps) * Math.PI * 2;
      const co = Math.cos(th);
      const si = Math.sin(th);
      attr.setXYZ(i * 2, cx + co * 0.34, HEIGHT, cz + si * 0.34);
      attr.setXYZ(i * 2 + 1, cx + co * 0.22, HEIGHT, cz + si * 0.22);
    }
    attr.needsUpdate = true;
    this.centre.geometry.setDrawRange(0, steps * 6);
  }

  dispose() {
    for (const r of this.rings) r.geometry.dispose();
    this.centre.geometry.dispose();
  }
}
