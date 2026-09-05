import * as THREE from 'three';
import { centerOffset } from './vehicle.js';

// The group's origin is the centre of the rear axle, matching the physics
// reference point, so placing a car is just position + rotation.y = yaw.

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

const RUBBER = new THREE.MeshStandardMaterial({ color: 0x16171a, roughness: 0.85, metalness: 0.05 });
const HUB = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, roughness: 0.4, metalness: 0.7 });
const GLASS = new THREE.MeshStandardMaterial({ color: 0x171d24, roughness: 0.15, metalness: 0.5 });
const TRIM = new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.7 });

export function createCarMesh(spec, color = spec.bodyColor, opts = {}) {
  const g = new THREE.Group();
  const off = centerOffset(spec);
  const r = spec.wheelRadius;
  const isVan = spec.id === 'van';

  const paint = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.42,
    metalness: 0.22,
  });

  const sillY = r + 0.06;
  const bodyH = isVan ? 0.72 : 0.6;
  const body = new THREE.Mesh(new THREE.BoxGeometry(spec.width, bodyH, spec.length), paint);
  body.position.set(0, sillY + bodyH / 2, off);
  g.add(body);

  // skirt below the sill so the car doesn't look like it floats
  const skirt = new THREE.Mesh(
    new THREE.BoxGeometry(spec.width * 0.94, sillY - 0.08, spec.length * 0.96),
    TRIM,
  );
  skirt.position.set(0, (sillY - 0.08) / 2 + 0.08, off);
  g.add(skirt);

  const cabinH = spec.height - (sillY + bodyH);
  const cabinLen = isVan ? spec.length * 0.72 : spec.length * 0.5;
  const cabinZ = off + (isVan ? -spec.length * 0.06 : -spec.length * 0.06);
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(spec.width * 0.93, cabinH, cabinLen),
    isVan ? paint : GLASS,
  );
  cabin.position.set(0, sillY + bodyH + cabinH / 2, cabinZ);
  g.add(cabin);

  if (isVan) {
    // windscreen band for the van
    const ws = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.86, cabinH * 0.55, 0.08), GLASS);
    ws.position.set(0, sillY + bodyH + cabinH * 0.6, cabinZ + cabinLen / 2 + 0.02);
    g.add(ws);
    for (const sx of [-1, 1]) {
      const sw = new THREE.Mesh(new THREE.BoxGeometry(0.08, cabinH * 0.5, cabinLen * 0.28), GLASS);
      sw.position.set(sx * spec.width * 0.47, sillY + bodyH + cabinH * 0.6, cabinZ + cabinLen * 0.28);
      g.add(sw);
    }
  } else {
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(spec.width * 0.84, 0.09, cabinLen * 0.86),
      paint,
    );
    roof.position.set(0, spec.height - 0.04, cabinZ - 0.05);
    g.add(roof);
  }

  // lights
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xfff6dd, emissive: 0xfff0c8, emissiveIntensity: 0.9, roughness: 0.3,
  });
  const tailMat = new THREE.MeshStandardMaterial({
    color: 0x5a1414, emissive: 0xff2010, emissiveIntensity: 0.25, roughness: 0.4,
  });
  const reverseMat = new THREE.MeshStandardMaterial({
    color: 0x4a4a46, emissive: 0xffffff, emissiveIntensity: 0.0, roughness: 0.4,
  });
  const noseZ = off + spec.length / 2;
  const tailZ = off - spec.length / 2;
  for (const sx of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.06), headMat);
    hl.position.set(sx * (spec.width / 2 - 0.28), sillY + bodyH * 0.62, noseZ + 0.01);
    g.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.06), tailMat);
    tl.position.set(sx * (spec.width / 2 - 0.26), sillY + bodyH * 0.66, tailZ - 0.01);
    g.add(tl);
    const rl = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.06), reverseMat);
    rl.position.set(sx * (spec.width / 2 - 0.55), sillY + bodyH * 0.45, tailZ - 0.01);
    g.add(rl);
  }

  // bumpers
  for (const [zPos, len] of [[noseZ - 0.06, 0.16], [tailZ + 0.06, 0.16]]) {
    const bump = new THREE.Mesh(new THREE.BoxGeometry(spec.width * 0.99, 0.22, len), TRIM);
    bump.position.set(0, sillY + 0.16, zPos);
    g.add(bump);
  }

  // mirrors — they stick out, and the collision box does not know about them,
  // so keep them modest.
  for (const sx of [-1, 1]) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.07), TRIM);
    m.position.set(sx * (spec.width / 2 + 0.06), spec.height - cabinH * 0.55, cabinZ + cabinLen / 2 - 0.1);
    g.add(m);
  }

  const wheels = { front: [], rear: [] };
  const wg = wheelGeometry(r, spec.wheelWidth);
  const hubG = new THREE.CylinderGeometry(r * 0.55, r * 0.55, spec.wheelWidth + 0.02, 12);
  hubG.rotateZ(Math.PI / 2);
  for (const [axleZ, list] of [[0, wheels.rear], [spec.wheelbase, wheels.front]]) {
    for (const sx of [-1, 1]) {
      const pivot = new THREE.Group();
      pivot.position.set(sx * spec.trackWidth / 2, r, axleZ);
      const tyre = new THREE.Mesh(wg, RUBBER);
      const hub = new THREE.Mesh(hubG, HUB);
      pivot.add(tyre, hub);
      pivot.userData.spin = tyre;
      pivot.userData.hub = hub;
      g.add(pivot);
      list.push(pivot);
    }
  }

  g.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = opts.receiveShadow ?? false;
    }
  });

  return { group: g, wheels, tailMat, reverseMat, headMat, paint };
}

export function updateCarMesh(mesh, spec, { steer = 0, spin = 0, braking = false, reversing = false }) {
  for (const w of mesh.wheels.front) {
    w.rotation.y = steer;
    w.userData.spin.rotation.x = spin;
    w.userData.hub.rotation.x = spin;
  }
  for (const w of mesh.wheels.rear) {
    w.userData.spin.rotation.x = spin;
    w.userData.hub.rotation.x = spin;
  }
  mesh.tailMat.emissiveIntensity = braking ? 1.6 : 0.25;
  mesh.reverseMat.emissiveIntensity = reversing ? 1.4 : 0.0;
}
