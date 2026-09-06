import * as THREE from 'three';
import { centerOffset, trailerCenterOffset, trailerLength } from './vehicle.js';

// Vehicle groups have their origin at the physics reference point: the centre
// of the rear axle for a tractor, the axle for a trailer. Placing one is then
// just position + rotation.y = yaw.

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
const GLASS = new THREE.MeshStandardMaterial({ color: 0x53667a, roughness: 0.18, metalness: 0.45 });
const TRIM = new THREE.MeshStandardMaterial({ color: 0x555a63, roughness: 0.7 });
const STEEL = new THREE.MeshStandardMaterial({ color: 0x8d939c, roughness: 0.5, metalness: 0.5 });

function axleLayout(spec) {
  const rear = spec.id === 'semi' ? [0, -1.35] : [0];
  return { rear, front: [spec.wheelbase] };
}

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

function buildCarBody(g, spec, paint, lights) {
  const off = centerOffset(spec);
  const r = spec.wheelRadius;
  const isVan = spec.id === 'van';
  const sillY = r + 0.06;
  const bodyH = isVan ? 0.72 : 0.6;

  const body = new THREE.Mesh(new THREE.BoxGeometry(spec.width, bodyH, spec.length), paint);
  body.position.set(0, sillY + bodyH / 2, off);
  g.add(body);

  const skirt = new THREE.Mesh(
    new THREE.BoxGeometry(spec.width * 0.94, sillY - 0.08, spec.length * 0.96), TRIM,
  );
  skirt.position.set(0, (sillY - 0.08) / 2 + 0.08, off);
  g.add(skirt);

  const cabinH = spec.height - (sillY + bodyH);
  const cabinLen = isVan ? spec.length * 0.72 : spec.length * 0.5;
  const cabinZ = off - spec.length * 0.06;
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(spec.width * 0.93, cabinH, cabinLen), isVan ? paint : GLASS,
  );
  cabin.position.set(0, sillY + bodyH + cabinH / 2, cabinZ);
  g.add(cabin);

  if (isVan) {
    const ws = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.86, cabinH * 0.55, 0.08), GLASS);
    ws.position.set(0, sillY + bodyH + cabinH * 0.6, cabinZ + cabinLen / 2 + 0.02);
    g.add(ws);
  } else {
    const roof = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.84, 0.09, cabinLen * 0.86), paint);
    roof.position.set(0, spec.height - 0.04, cabinZ - 0.05);
    g.add(roof);
  }

  const noseZ = off + spec.length / 2;
  const tailZ = off - spec.length / 2;
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.06), lights.head);
    hl.position.set(sx * (spec.width / 2 - 0.28), sillY + bodyH * 0.62, noseZ + 0.01);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.06), lights.tail);
    tl.position.set(sx * (spec.width / 2 - 0.26), sillY + bodyH * 0.66, tailZ - 0.01);
    const rl = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.06), lights.reverse);
    rl.position.set(sx * (spec.width / 2 - 0.55), sillY + bodyH * 0.45, tailZ - 0.01);
    g.add(hl, tl, rl);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.07), TRIM);
    m.position.set(sx * (spec.width / 2 + 0.06), spec.height - cabinH * 0.55, cabinZ + cabinLen / 2 - 0.1);
    g.add(m);
  }
  for (const zPos of [noseZ - 0.06, tailZ + 0.06]) {
    const bump = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.99, 0.22, 0.16), TRIM);
    bump.position.set(0, sillY + 0.16, zPos);
    g.add(bump);
  }
  if (spec.trailer) {
    const ball = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.22, 8), STEEL);
    ball.position.set(0, sillY - 0.05, spec.trailer.hitch);
    g.add(ball);
  }
}

function buildBus(g, spec, paint, lights) {
  const off = centerOffset(spec);
  const r = spec.wheelRadius;
  const floorY = r + 0.22;
  const bodyH = spec.height - floorY;

  const body = new THREE.Mesh(new THREE.BoxGeometry(spec.width, bodyH, spec.length), paint);
  body.position.set(0, floorY + bodyH / 2, off);
  g.add(body);

  const skirt = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.94, floorY - 0.1, spec.length * 0.97), TRIM);
  skirt.position.set(0, (floorY - 0.1) / 2 + 0.1, off);
  g.add(skirt);

  // window band down both sides and across the front
  const bandH = bodyH * 0.42;
  const bandY = floorY + bodyH * 0.62;
  for (const sx of [-1, 1]) {
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.07, bandH, spec.length * 0.88), GLASS);
    band.position.set(sx * (spec.width / 2 - 0.01), bandY, off);
    g.add(band);
  }
  const front = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.9, bandH * 1.15, 0.07), GLASS);
  front.position.set(0, bandY, off + spec.length / 2 + 0.01);
  g.add(front);
  const back = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.86, bandH * 0.8, 0.07), GLASS);
  back.position.set(0, bandY, off - spec.length / 2 - 0.01);
  g.add(back);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.92, 0.1, spec.length * 0.94), paint);
  roof.position.set(0, spec.height - 0.03, off);
  g.add(roof);

  const noseZ = off + spec.length / 2;
  const tailZ = off - spec.length / 2;
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.06), lights.head);
    hl.position.set(sx * (spec.width / 2 - 0.35), floorY * 0.75, noseZ + 0.02);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.24, 0.06), lights.tail);
    tl.position.set(sx * (spec.width / 2 - 0.32), floorY * 0.85, tailZ - 0.02);
    const rl = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.06), lights.reverse);
    rl.position.set(sx * (spec.width / 2 - 0.72), floorY * 0.6, tailZ - 0.02);
    g.add(hl, tl, rl);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.08), TRIM);
    m.position.set(sx * (spec.width / 2 + 0.09), spec.height * 0.78, noseZ - 0.35);
    g.add(m);
  }
}

function buildTractor(g, spec, paint, lights) {
  const r = spec.wheelRadius;
  const frameY = r + 0.32;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.8, 0.26, spec.length * 0.9), TRIM);
  frame.position.set(0, frameY, centerOffset(spec) - 0.3);
  g.add(frame);

  const cabH = spec.height - frameY - 0.1;
  const cabLen = 2.5;
  const cabZ = spec.wheelbase + 0.35;
  const cab = new THREE.Mesh(new THREE.BoxGeometry(spec.width, cabH, cabLen), paint);
  cab.position.set(0, frameY + 0.13 + cabH / 2, cabZ);
  g.add(cab);

  const ws = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.88, cabH * 0.42, 0.08), GLASS);
  ws.position.set(0, frameY + cabH * 0.75, cabZ + cabLen / 2 + 0.02);
  g.add(ws);
  for (const sx of [-1, 1]) {
    const sw = new THREE.Mesh(new THREE.BoxGeometry(0.08, cabH * 0.34, cabLen * 0.4), GLASS);
    sw.position.set(sx * (spec.width / 2 - 0.01), frameY + cabH * 0.72, cabZ + cabLen * 0.2);
    g.add(sw);
    const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.5, 10), STEEL);
    stack.position.set(sx * (spec.width / 2 - 0.16), frameY + cabH * 0.75, cabZ - cabLen / 2 - 0.1);
    g.add(stack);
    const mir = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.08), TRIM);
    mir.position.set(sx * (spec.width / 2 + 0.16), frameY + cabH * 0.85, cabZ + cabLen / 2 - 0.15);
    g.add(mir);
  }

  // fifth wheel plate, at the hitch point
  const plate = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.62, 0.12, 1.1), STEEL);
  plate.position.set(0, frameY + 0.19, spec.trailer.hitch);
  g.add(plate);

  const noseZ = spec.wheelbase + (spec.length - spec.wheelbase - spec.rearOverhang);
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.2, 0.06), lights.head);
    hl.position.set(sx * (spec.width / 2 - 0.33), frameY - 0.05, noseZ - 0.02);
    g.add(hl);
    const rl = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.12, 0.06), lights.reverse);
    rl.position.set(sx * (spec.width / 2 - 0.5), frameY - 0.05, -spec.rearOverhang + 0.02);
    g.add(rl);
  }
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

  if (spec.id === 'bus') buildBus(g, spec, paint, lights);
  else if (spec.id === 'semi') buildTractor(g, spec, paint, lights);
  else buildCarBody(g, spec, paint, lights);

  const wheels = { front: [], rear: [], trailer: [] };
  const axles = axleLayout(spec);
  addWheels(g, axles.rear, spec.wheelRadius, spec.wheelWidth, spec.trackWidth, wheels.rear);
  addWheels(g, axles.front, spec.wheelRadius, spec.wheelWidth, spec.trackWidth, wheels.front);

  let trailerGroup = null;
  if (spec.trailer) {
    const t = spec.trailer;
    trailerGroup = new THREE.Group();
    const len = trailerLength(t);
    const off = trailerCenterOffset(t);
    const deckY = t.wheelRadius + 0.28;
    const boxH = t.height - deckY;

    const box = new THREE.Mesh(new THREE.BoxGeometry(t.width, boxH, len), paint);
    box.position.set(0, deckY + boxH / 2, off);
    trailerGroup.add(box);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(t.width * 0.9, 0.2, len * 0.96), TRIM);
    deck.position.set(0, deckY - 0.06, off);
    trailerGroup.add(deck);

    for (const sx of [-1, 1]) {
      const tl = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.16, 0.06), lights.tail);
      tl.position.set(sx * (t.width / 2 - 0.25), deckY + 0.16, off - len / 2 - 0.02);
      trailerGroup.add(tl);
    }

    if (t.drawbar) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, t.axleFromHitch - t.axleToFront + 0.3), STEEL);
      bar.position.set(0, deckY - 0.12, t.axleFromHitch - (t.axleFromHitch - t.axleToFront) / 2);
      trailerGroup.add(bar);
    } else {
      // kingpin plate and landing legs
      const pin = new THREE.Mesh(new THREE.BoxGeometry(t.width * 0.6, 0.14, 1.0), STEEL);
      pin.position.set(0, deckY - 0.16, t.axleFromHitch);
      trailerGroup.add(pin);
      for (const sx of [-1, 1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.14, deckY - 0.2, 0.14), STEEL);
        leg.position.set(sx * t.width * 0.34, (deckY - 0.2) / 2, t.axleFromHitch - 1.6);
        trailerGroup.add(leg);
      }
    }

    const bogie = t.drawbar ? [0] : [0.7, -0.7];
    addWheels(trailerGroup, bogie, t.wheelRadius, t.wheelWidth, t.trackWidth, wheels.trailer);
    trailerGroup.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  }

  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });

  return { group: g, trailerGroup, wheels, tailMat: lights.tail, reverseMat: lights.reverse };
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
