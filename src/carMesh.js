import * as THREE from 'three';
import { axleRows, trailerBogie, trailerCenterOffset, trailerLength } from './vehicle.js';

// Vehicle groups have their origin at the physics reference point: the centre
// of the rear axle for a tractor, the axle for a trailer. Placing one is then
// just position + rotation.y = yaw.
//
// A body is one shape: the side silhouette in `spec.body`, extruded across the
// width, with an arch cut at every axle. There used to be a builder per vehicle
// shape and a branch on `spec.id` to pick between them, which meant a wheel was
// drawn wherever it looked right under a slab and a new vehicle was a new
// function. Now the silhouette is data and the arches are cut from `axleRows()`,
// so a wheel sits in a hole the right size for it by construction, and adding a
// vehicle is a list of points in src/vehicle.js and nothing here.
//
// Nothing drawn here may stick out past the rectangle the physics collides
// with (DESIGN.md 17). The silhouette is given in fractions of `length` and
// `height`, so a body cannot leave its rectangle unless a point leaves [0, 1];
// the taper below only ever moves geometry inward. Parts that want to read as
// flush — lights, bumpers, glazing — are inset by half their own depth. The
// mirrors are the exception that proves it: they stick out, so they were given
// a rectangle of their own, and they are drawn from `spec.mirrors` to exactly
// fill it.
//
// Each build also records where the driver's head and mirrors are, in the
// group's own frame. Whoever draws the windows is the only code that knows
// where someone sitting behind them would be.

const wheelGeoCache = new Map();
function wheelGeometry(r, w) {
  const key = `${r}|${w}`;
  if (!wheelGeoCache.has(key)) {
    const g = new THREE.CylinderGeometry(r, r, w, 18);
    g.rotateZ(Math.PI / 2);
    wheelGeoCache.set(key, g);
  }
  return wheelGeoCache.get(key);
}

const RUBBER = new THREE.MeshStandardMaterial({ color: 0x2c2e33, roughness: 0.85, metalness: 0.05 });
const HUB = new THREE.MeshStandardMaterial({ color: 0xc9ced6, roughness: 0.4, metalness: 0.6 });
const TRIM = new THREE.MeshStandardMaterial({ color: 0x555a63, roughness: 0.7 });
// Glazing you sit behind, as opposed to glazing you look at. A windscreen is a
// separate slab in front of the driver rather than a face of the body, so from
// the inside view it is a front face and reads as a wall. This is the same
// glass with something on the other side of it.
const GLAZE = new THREE.MeshStandardMaterial({
  color: 0x9fc4dc, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.22,
});
const STEEL = new THREE.MeshStandardMaterial({ color: 0x8d939c, roughness: 0.5, metalness: 0.5 });

function addWheels(group, positions, r, w, track, store) {
  const wg = wheelGeometry(r, w);
  const hubG = new THREE.CylinderGeometry(r * 0.55, r * 0.55, w + 0.02, 12);
  hubG.rotateZ(Math.PI / 2);
  for (const z of positions) {
    for (const sx of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set((sx * track) / 2, r, z);
      const tyre = new THREE.Mesh(wg, RUBBER);
      const hub = new THREE.Mesh(hubG, HUB);
      pivot.add(tyre, hub);
      pivot.userData.spin = tyre;
      pivot.userData.hub = hub;
      group.add(pivot);
      store.push(pivot);
    }
  }
}

function lightMaterials() {
  return {
    head: new THREE.MeshStandardMaterial({
      color: 0xfff6dd, emissive: 0xfff0c8, emissiveIntensity: 0.9, roughness: 0.3,
    }),
    tail: new THREE.MeshStandardMaterial({
      color: 0x6d2323, emissive: 0xff2010, emissiveIntensity: 0.25, roughness: 0.4,
    }),
    reverse: new THREE.MeshStandardMaterial({
      color: 0xb8bcc2, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.4,
    }),
  };
}

// --- the shell ---------------------------------------------------------

// The outline, in metres, in the (along-from-tail, up) plane, as points. The
// floor is flat at `sill` except where an axle passes: there the outline
// follows the part of a disc around the wheel centre that rises above the
// floor, which is what an arch is. Sizing the disc from the wheel rather than
// from the floor is what makes one rule work for a hatchback, whose floor is
// barely above its axle, and for a truck, whose chassis rail is half a metre
// above its own.
//
// Points rather than a THREE.Shape because a body is built in two pieces, and
// a piece is this polygon cut against a horizontal line.
function outline(body, length, height, axlesFromTail, wheelR) {
  const sill = body.sill * height;
  // Enough radius to clear the tyre, whatever the floor is doing: the disc has
  // to reach above the wheel's top, or the "arch" is a line across a tyre.
  const rA = Math.max(body.arch, 1.04) * wheelR;
  const dy = sill - wheelR;
  const pts = [[0, sill]];
  if (Math.abs(dy) < rA) {
    const dx = Math.sqrt(rA * rA - dy * dy);
    const phi = Math.atan2(dy, dx);
    const from = Math.PI - phi;
    for (const a of [...axlesFromTail].sort((p, q) => p - q)) {
      if (a - dx <= 0 || a + dx >= length) continue;   // an arch that is not in the body
      const steps = 12;
      for (let i = 0; i <= steps; i++) {
        const th = from + (phi - from) * (i / steps);
        pts.push([a + rA * Math.cos(th), wheelR + rA * Math.sin(th)]);
      }
    }
  }
  pts.push([length, sill]);
  for (const [af, yf] of body.top) pts.push([af * length, yf * height]);
  return pts;
}

// Sutherland-Hodgman against one horizontal line. Both halves of a cut are
// still simple polygons, because every outline here is a silhouette: it has one
// top edge and one bottom edge over any given `along`.
function cut(pts, y, above) {
  const inside = (p) => (above ? p[1] >= y : p[1] <= y);
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % pts.length];
    if (inside(a)) out.push(a);
    if (inside(a) !== inside(b)) {
      const t = (y - a[1]) / (b[1] - a[1]);
      out.push([a[0] + (b[0] - a[0]) * t, y]);
    }
  }
  return out;
}

// One extrusion of a closed outline, laid into the vehicle's frame.
function piece(pts, width, tailZ, material) {
  if (pts.length < 3) return null;
  const shape = new THREE.Shape(pts.map(([a, y]) => new THREE.Vector2(a, y)));
  const g = new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false });
  // The shape plane is (along, up) and the extrusion runs along its own +Z, so
  // rotate that axis onto the vehicle's X and slide the result onto centre.
  g.rotateY(-Math.PI / 2);
  g.translate(width / 2, 0, 0);
  const m = new THREE.Mesh(g, material);
  m.position.set(0, 0, tailZ);
  return m;
}

// The shell: the outline extruded across the vehicle, in two pieces split at
// the waist so the greenhouse can be narrower than the body. A single
// extrusion narrowed by moving its vertices would do the same thing, but it
// warps the flank into a curved surface that the flat shading then shows as a
// diagonal seam corner to corner. Two planar pieces meet in a shoulder line
// instead, which is what a car has anyway. Both are inside the full-width
// rectangle, so DESIGN.md 17 holds by construction.
function shell(g, pts, width, height, taper, tailZ, material) {
  if (!taper) {
    g.add(piece(pts, width, tailZ, material));
    return;
  }
  const waist = taper[0] * height;
  for (const [half, w] of [[false, width], [true, width * taper[1]]]) {
    const m = piece(cut(pts, waist, half), w, tailZ, material);
    if (m) g.add(m);
  }
}

// A pane lying on one segment of the silhouette, pushed in by its own thickness
// so it sits in the opening rather than proud of it. The outline is walked
// counter-clockwise in (along, up), so an edge running (da, dy) has its outward
// normal at (dy, -da) and its inward normal is the other one.
function pane(g, from, to, width, length, height, zOffset) {
  const a0 = from[0] * length; const y0 = from[1] * height;
  const a1 = to[0] * length; const y1 = to[1] * height;
  const da = a1 - a0; const dy = y1 - y0;
  const span = Math.hypot(da, dy);
  if (span < 0.08) return;
  const t = 0.06;
  const m = new THREE.Mesh(new THREE.BoxGeometry(width, t, span * 0.94), GLAZE);
  // Turn the pane's length onto the segment: about X, local +Z goes to
  // (0, -sin, cos), which is the unit segment when the angle is atan2(-dy, da).
  m.rotation.x = Math.atan2(-dy, da);
  const k = (t / 2 + 0.006) / span;
  m.position.set(0, (y0 + y1) / 2 + da * k, zOffset + (a0 + a1) / 2 - dy * k);
  g.add(m);
}

// The driver sits on the left, and +X is the driver's left: the group's
// forward is +Z and its up is +Y, so +X is the side a left-hand-drive seat is
// on. The mirror points sit a hand's width outside the flank, where the glass
// faces, so a mirror camera is not looking at the inside of the bodywork.
// Exactly the rectangle `mirrorRect()` collides with: it spans the flank to the
// outer edge and fills the rectangle's depth, so the mirror the player sees hit
// something is the mirror that hit it.
function mirror(spec, sx) {
  const m = spec.mirrors;
  const box = new THREE.Mesh(new THREE.BoxGeometry(m.out, m.h, m.d), TRIM);
  box.position.set(sx * (spec.width / 2 + m.out / 2), m.y, m.z);
  return box;
}

function buildBody(g, spec, paint, lights) {
  const b = spec.body;
  const { length, width, height } = spec;
  // Profile coordinates run from the tail; the group's origin is the rear axle.
  const tailZ = -spec.rearOverhang;
  const axles = [...axleRows(spec).rear, ...axleRows(spec).front].map((z) => z - tailZ);
  shell(g, outline(b, length, height, axles, spec.wheelRadius), width, height, b.taper, tailZ, paint);

  // Glazing. `glass` names segments of the outline by index, so the windscreen
  // is the raked part of the shape and cannot end up somewhere else than the
  // hole it fills.
  const glassW = width * (b.taper ? b.taper[1] : 1) * 0.94;
  for (const i of b.glass ?? []) {
    if (i + 1 >= b.top.length) continue;
    pane(g, b.top[i], b.top[i + 1], glassW, length, height, tailZ);
  }
  // Side glass is a band, not a segment: it spans along the cabin rather than
  // lying on the outline, so it is given as [a0, a1, y0, y1].
  for (const [a0, a1, y0, y1] of b.sides ?? []) {
    const sw = 0.07;
    const bandH = (y1 - y0) * height;
    const bandL = (a1 - a0) * length;
    // Which piece of the shell the band lies in decides how wide the vehicle is
    // there: glass set to the greenhouse's flank on a body that is still full
    // width at that height disappears inside it.
    const narrow = b.taper && (y0 + y1) / 2 > b.taper[0];
    const flank = (width / 2) * (narrow ? b.taper[1] : 1) - sw / 2 + 0.01;
    for (const sx of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(sw, bandH, bandL), GLAZE);
      m.position.set(sx * flank, (y0 + y1) / 2 * height, tailZ + (a0 + a1) / 2 * length);
      g.add(m);
    }
  }

  const sill = b.sill * height;
  const noseZ = tailZ + length;
  const faceTop = b.top[0][1] * height;
  const rearTop = b.top[b.top.length - 1][1] * height;
  const lampY = sill + (faceTop - sill) * 0.5;
  const rearY = sill + (rearTop - sill) * 0.5;
  const inset = width / 2 - Math.min(0.35, width * 0.18);
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(width * 0.19, 0.17, 0.06), lights.head);
    hl.position.set(sx * inset, lampY, noseZ - 0.031);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(width * 0.17, 0.19, 0.06), lights.tail);
    tl.position.set(sx * inset, rearY, tailZ + 0.031);
    const rl = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.11, 0.06), lights.reverse);
    rl.position.set(sx * (inset - width * 0.16), rearY - 0.16, tailZ + 0.031);
    g.add(hl, tl, rl);
    g.add(mirror(spec, sx));
  }

  for (const [zPos, top] of [[noseZ - 0.081, faceTop], [tailZ + 0.081, rearTop]]) {
    const bump = new THREE.Mesh(new THREE.BoxGeometry(width * 0.99, 0.22, 0.16), TRIM);
    bump.position.set(0, Math.min(sill + 0.14, top - 0.12), zPos);
    g.add(bump);
  }

  // A vehicle with no bonnet in front of the driver gets the thing that does
  // the same job for the inside view: a dash whose front edge is a fixed
  // distance from the nose (DESIGN.md 9).
  if (b.dash) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(width * 0.88, 0.52, 0.8), TRIM);
    dash.position.set(0, b.eye[1] * height - 0.62, noseZ - 0.78);
    g.add(dash);
  }

  if (spec.trailer) {
    const t = spec.trailer;
    if (t.drawbar) {
      const ball = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.22, 8), STEEL);
      ball.position.set(0, sill - 0.05, t.hitch);
      g.add(ball);
    } else {
      const plate = new THREE.Mesh(new THREE.BoxGeometry(width * 0.62, 0.12, 1.1), STEEL);
      plate.position.set(0, rearTop + 0.06, t.hitch);
      g.add(plate);
      for (const sx of [-1, 1]) {
        const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.5, 10), STEEL);
        stack.position.set(sx * (width / 2 - 0.16), height * 0.72, tailZ + b.top[3][0] * length - 0.1);
        g.add(stack);
      }
    }
  }

  g.userData.view = {
    eye: new THREE.Vector3(width * 0.21, b.eye[1] * height, tailZ + b.eye[0] * length),
    left: new THREE.Vector3(width / 2 + spec.mirrors.out + 0.05, spec.mirrors.y + 0.04, spec.mirrors.z),
    right: new THREE.Vector3(-(width / 2 + spec.mirrors.out + 0.05), spec.mirrors.y + 0.04, spec.mirrors.z),
    centre: new THREE.Vector3(0, b.look[1] * height, tailZ + b.look[0] * length),
  };
}

// A trailer is the same shell with a plain outline: a box on a deck, arched
// over its own bogie. It has no `body` of its own because there is nothing to
// say about the shape of a box.
const TRAILER_BODY = { sill: 0.0, arch: 1.35, top: [[1, 1], [0, 1]], taper: null };

function buildTrailer(t, paint, lights, wheels) {
  const group = new THREE.Group();
  const len = trailerLength(t);
  const off = trailerCenterOffset(t);
  const deckY = t.wheelRadius + 0.28;
  const tailZ = off - len / 2;
  const bogie = trailerBogie(t);
  const body = { ...TRAILER_BODY, sill: deckY / t.height };
  const pts = outline(body, len, t.height, bogie.map((z) => z - tailZ), t.wheelRadius);
  shell(group, pts, t.width, t.height, null, tailZ, paint);

  const deck = new THREE.Mesh(new THREE.BoxGeometry(t.width * 0.9, 0.2, len * 0.96), TRIM);
  deck.position.set(0, deckY - 0.06, off);
  group.add(deck);

  for (const sx of [-1, 1]) {
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.16, 0.06), lights.tail);
    tl.position.set(sx * (t.width / 2 - 0.25), deckY + 0.16, tailZ + 0.031);
    group.add(tl);
  }

  if (t.drawbar) {
    const bar = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.12, t.axleFromHitch - t.axleToFront + 0.3), STEEL,
    );
    bar.position.set(0, deckY - 0.12, t.axleFromHitch - (t.axleFromHitch - t.axleToFront) / 2);
    group.add(bar);
  } else {
    const pin = new THREE.Mesh(new THREE.BoxGeometry(t.width * 0.6, 0.14, 1.0), STEEL);
    pin.position.set(0, deckY - 0.16, t.axleFromHitch);
    group.add(pin);
    for (const sx of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.14, deckY - 0.2, 0.14), STEEL);
      leg.position.set(sx * t.width * 0.34, (deckY - 0.2) / 2, t.axleFromHitch - 1.6);
      group.add(leg);
    }
  }

  addWheels(group, bogie, t.wheelRadius, t.wheelWidth, t.trackWidth, wheels.trailer);
  group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return group;
}

export function createVehicleMesh(spec, color = spec.bodyColor, opts = {}) {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.pastel ? 0.62 : 0.42,
    metalness: opts.pastel ? 0.08 : 0.22,
  });
  const lights = lightMaterials();
  if (opts.pastel) {
    lights.head.emissiveIntensity = 0.25;
    lights.tail.emissiveIntensity = 0.12;
  }

  buildBody(g, spec, paint, lights);

  const wheels = { front: [], rear: [], trailer: [] };
  const axles = axleRows(spec);
  addWheels(g, axles.rear, spec.wheelRadius, spec.wheelWidth, spec.trackWidth, wheels.rear);
  addWheels(g, axles.front, spec.wheelRadius, spec.wheelWidth, spec.trackWidth, wheels.front);

  const trailerGroup = spec.trailer ? buildTrailer(spec.trailer, paint, lights, wheels) : null;

  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  return {
    group: g, trailerGroup, wheels, view: g.userData.view,
    tailMat: lights.tail, reverseMat: lights.reverse,
  };
}

export function updateVehicleMesh(mesh, spec, { steer = 0, spin = 0, braking = false, reversing = false }) {
  for (const w of mesh.wheels.front) {
    w.rotation.y = steer;
    w.userData.spin.rotation.x = spin;
    w.userData.hub.rotation.x = spin;
  }
  for (const list of [mesh.wheels.rear, mesh.wheels.trailer]) {
    for (const w of list) {
      w.userData.spin.rotation.x = spin;
      w.userData.hub.rotation.x = spin;
    }
  }
  mesh.tailMat.emissiveIntensity = braking ? 1.6 : 0.25;
  mesh.reverseMat.emissiveIntensity = reversing ? 1.4 : 0.0;
}
