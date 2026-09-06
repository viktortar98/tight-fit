import * as THREE from 'three';
import { VEHICLES, trailerAxle } from './vehicle.js';
import { createVehicleMesh } from './carMesh.js';
import { collidersOf } from './colliders.js';

const THEMES = {
  lot: {
    sky: 0x9fc0e0, fog: [0x9fc0e0, 60, 190], ground: '#33353a', speck: '#41444a',
    hemi: [0xcfe2f5, 0x54544e, 0.5], sun: [0xfff2dc, 1.25, [38, 46, 22]],
    wall: 0xdcd9d0, boundaryH: 1.0, ambient: 0.0, env: 0.32,
  },
  street: {
    sky: 0x8fb3d6, fog: [0x8fb3d6, 50, 160], ground: '#313337', speck: '#3f4046',
    hemi: [0xc8ddf2, 0x50504a, 0.48], sun: [0xffeed2, 1.2, [-30, 44, 26]],
    wall: 0xd9d2c6, boundaryH: 1.2, ambient: 0.0, env: 0.3,
  },
  garage: {
    sky: 0x3c424c, fog: [0x3c424c, 30, 110], ground: '#3c3f45', speck: '#494c53',
    hemi: [0xaebbd0, 0x33353a, 0.62], sun: [0xe8eeff, 0.6, [10, 40, 14]],
    wall: 0xd2d4d9, boundaryH: 3.0, ambient: 0.3, lamps: true, env: 0.26,
  },
  alley: {
    sky: 0x6d7686, fog: [0x6d7686, 34, 120], ground: '#3a393f', speck: '#46454c',
    hemi: [0xb6c1d4, 0x35333a, 0.6], sun: [0xffe6c6, 0.8, [-22, 40, -18]],
    wall: 0xd8ccc0, boundaryH: 3.4, ambient: 0.22, lamps: true, env: 0.24,
  },
};

// Both of these depend on the theme, not on the level, so they are drawn once
// and kept for the life of the page. `clear()` disposes every other texture it
// finds, so it consults this set before reaching for dispose().
const KEPT = new Set();

const grainCache = new Map();
function groundTexture(theme) {
  if (grainCache.has(theme)) return grainCache.get(theme);
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = theme.ground;
  ctx.fillRect(0, 0, 512, 512);
  // grain
  for (let i = 0; i < 9000; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? theme.speck : 'rgba(0,0,0,0.18)';
    ctx.globalAlpha = 0.35 + Math.random() * 0.4;
    const s = Math.random() * 3 + 0.6;
    ctx.fillRect(Math.random() * 512, Math.random() * 512, s, s);
  }
  // patches
  ctx.globalAlpha = 0.035;
  for (let i = 0; i < 12; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? '#000' : '#fff';
    ctx.beginPath();
    ctx.ellipse(Math.random() * 512, Math.random() * 512, 20 + Math.random() * 70, 15 + Math.random() * 50, Math.random() * 3, 0, 7);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  grainCache.set(theme, tex);
  KEPT.add(tex);
  return tex;
}

function stripeTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f3eee5';
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = '#e8b3a4';
  ctx.lineWidth = 0;
  for (let i = -128; i < 256; i += 44) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 22, 0);
    ctx.lineTo(i + 22 + 128, 128);
    ctx.lineTo(i + 128, 128);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  KEPT.add(tex);
  return tex;
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.lights = new THREE.Group();
    this.scene.add(this.lights);
    this.stripe = stripeTexture();
    this.colliders = [];
    this.occluders = [];
    this.arena = null;
  }

  clear() {
    for (const g of [this.root, this.lights]) {
      while (g.children.length) {
        const c = g.children.pop();
        c.traverse?.((o) => {
          if (o.isMesh) {
            o.geometry.dispose();
            if (o.material.map && !KEPT.has(o.material.map)) o.material.map.dispose();
          }
        });
      }
    }
    this.colliders = [];
    this.occluders = [];
  }

  build(level) {
    this.clear();
    const theme = THEMES[level.theme] ?? THEMES.lot;
    const b = level.bounds;
    const cx = (b.minX + b.maxX) / 2;
    const cz = (b.minZ + b.maxZ) / 2;
    const w = b.maxX - b.minX;
    const d = b.maxZ - b.minZ;
    this.arena = { x: cx, z: cz, w, d, rot: 0 };

    // --- atmosphere
    this.scene.background = new THREE.Color(theme.sky);
    this.scene.fog = new THREE.Fog(theme.fog[0], theme.fog[1], theme.fog[2]);
    this.scene.environmentIntensity = theme.env ?? 0.7;

    const hemi = new THREE.HemisphereLight(theme.hemi[0], theme.hemi[1], theme.hemi[2]);
    this.lights.add(hemi);
    if (theme.ambient) this.lights.add(new THREE.AmbientLight(0xffffff, theme.ambient));

    const sun = new THREE.DirectionalLight(theme.sun[0], theme.sun[1]);
    sun.position.set(...theme.sun[2]);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const span = Math.max(w, d) * 0.62 + 6;
    const cam = sun.shadow.camera;
    cam.left = -span; cam.right = span; cam.top = span; cam.bottom = -span;
    cam.near = 1; cam.far = 160;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.02;
    sun.target.position.set(cx, 0, cz);
    sun.position.set(cx + theme.sun[2][0], theme.sun[2][1], cz + theme.sun[2][2]);
    this.lights.add(sun, sun.target);

    if (theme.lamps) {
      for (let i = 0; i < 4; i++) {
        const lx = b.minX + ((i % 2) + 0.5) * (w / 2);
        const lz = b.minZ + (Math.floor(i / 2) + 0.5) * (d / 2);
        const lamp = new THREE.PointLight(0xffd9a0, 34, 26, 2);
        lamp.position.set(lx, 4.2, lz);
        this.lights.add(lamp);
      }
    }

    // --- ground
    const gTex = groundTexture(theme);
    gTex.repeat.set((w + 80) / 8, (d + 80) / 8);
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(w + 80, d + 80),
      new THREE.MeshStandardMaterial({ map: gTex, roughness: 0.96, metalness: 0.0 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(cx, 0, cz);
    ground.receiveShadow = true;
    this.root.add(ground);

    // --- paint
    const paintMat = new THREE.MeshStandardMaterial({ color: 0xd6d3c6, roughness: 0.85 });
    for (const p of level.paint ?? []) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(p.w, 0.02, p.d), paintMat);
      m.position.set(p.x, 0.011, p.z);
      m.rotation.y = p.rot ?? 0;
      m.receiveShadow = true;
      this.root.add(m);
    }

    // --- boundary (visual only; containment is enforced against the arena)
    const bh = theme.boundaryH;
    const bt = 0.6;
    const bMat = new THREE.MeshStandardMaterial({ color: theme.wall, roughness: 0.9 });
    const edges = [
      [cx, b.minZ - bt / 2, w + bt * 2, bt],
      [cx, b.maxZ + bt / 2, w + bt * 2, bt],
      [b.minX - bt / 2, cz, bt, d],
      [b.maxX + bt / 2, cz, bt, d],
    ];
    for (const [ex, ez, ew, ed] of edges) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(ew, bh, ed), bMat);
      m.position.set(ex, bh / 2, ez);
      m.castShadow = true;
      m.receiveShadow = true;
      this.root.add(m);
      this.occluders.push(m);
    }

    // --- obstacles
    for (const o of level.obstacles) {
      this.colliders.push(...collidersOf(o));
      const mesh = this.obstacleMesh(o, theme);
      this.root.add(mesh);
      // Cones and kerbs are too small to be worth shoving the camera around.
      if (o.kind !== 'cone' && o.kind !== 'kerb') this.occluders.push(mesh);
    }

    // --- target
    this.target = level.target;
    this.root.add(this.buildTarget(level.target));

    return this;
  }

  obstacleMesh(o, theme) {
    const g = new THREE.Group();
    if (o.kind === 'parked') {
      const spec = VEHICLES[o.spec];
      const car = createVehicleMesh(spec, o.color ?? 0xdfe3e8, { pastel: true });
      car.group.position.set(o.x, 0, o.z);
      car.group.rotation.y = o.rot;
      g.add(car.group);
      if (car.trailerGroup) {
        const axle = trailerAxle(spec, { x: o.x, z: o.z, yaw: o.rot, trailerYaw: o.rot });
        car.trailerGroup.position.set(axle.x, 0, axle.z);
        car.trailerGroup.rotation.y = o.rot;
        g.add(car.trailerGroup);
      }
      return g;
    }

    if (o.kind === 'dropped') {
      const paint = new THREE.MeshStandardMaterial({ color: o.color ?? 0xdfe3e8, roughness: 0.62 });
      const deckY = 1.1;
      const box = new THREE.Mesh(new THREE.BoxGeometry(o.w, o.h - deckY, o.d), paint);
      box.position.set(o.x, deckY + (o.h - deckY) / 2, o.z);
      box.rotation.y = o.rot;
      const under = new THREE.Mesh(
        new THREE.BoxGeometry(o.w * 0.9, 0.22, o.d * 0.94),
        new THREE.MeshStandardMaterial({ color: 0x9aa0a9, roughness: 0.6 }),
      );
      under.position.set(o.x, deckY - 0.1, o.z);
      under.rotation.y = o.rot;
      g.add(box, under);
      const c = Math.cos(o.rot), sn = Math.sin(o.rot);
      const legMat = new THREE.MeshStandardMaterial({ color: 0x8d939c, roughness: 0.5, metalness: 0.4 });
      for (const [lx, lz] of [[-o.w * 0.34, o.d * 0.3], [o.w * 0.34, o.d * 0.3],
        [-o.w * 0.34, -o.d * 0.34], [o.w * 0.34, -o.d * 0.34]]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, deckY - 0.2, 0.16), legMat);
        leg.position.set(o.x + lx * c + lz * sn, (deckY - 0.2) / 2, o.z - lx * sn + lz * c);
        g.add(leg);
      }
      for (const m of g.children) { m.castShadow = true; m.receiveShadow = true; }
      return g;
    }

    let mat;
    if (o.kind === 'barrier') {
      const tex = this.stripe.clone();
      tex.needsUpdate = true;
      tex.repeat.set(Math.max(1, o.w / 1.2), 1);
      mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75 });
    } else if (o.kind === 'kerb') {
      mat = new THREE.MeshStandardMaterial({ color: 0xe6e3db, roughness: 0.95 });
    } else if (o.kind === 'pillar') {
      mat = new THREE.MeshStandardMaterial({ color: 0xd3d5d9, roughness: 0.92 });
    } else if (o.kind === 'cone') {
      mat = new THREE.MeshStandardMaterial({ color: 0xf2b795, roughness: 0.7 });
    } else {
      mat = new THREE.MeshStandardMaterial({ color: o.color ?? theme.wall, roughness: 0.9 });
    }

    if (o.kind === 'cone') {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.22, o.h, 14), mat);
      cone.position.set(o.x, o.h / 2, o.z);
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.05, 0.42),
        new THREE.MeshStandardMaterial({ color: 0x9ea3ac, roughness: 0.9 }),
      );
      base.position.set(o.x, 0.025, o.z);
      const band = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.175, 0.12, 14),
        new THREE.MeshStandardMaterial({ color: 0xfbf7ef, roughness: 0.7 }),
      );
      band.position.set(o.x, o.h * 0.52, o.z);
      for (const m of [cone, base, band]) { m.castShadow = true; g.add(m); }
      return g;
    }

    const box = new THREE.Mesh(new THREE.BoxGeometry(o.w, o.h, o.d), mat);
    box.position.set(o.x, o.h / 2, o.z);
    box.rotation.y = o.rot ?? 0;
    box.castShadow = true;
    box.receiveShadow = true;
    g.add(box);

    if (o.kind === 'pillar') {
      const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(o.w * 1.03, 0.28, o.d * 1.03),
        new THREE.MeshStandardMaterial({ color: 0xf0dcab, roughness: 0.8 }),
      );
      stripe.position.set(o.x, 0.85, o.z);
      stripe.rotation.y = o.rot ?? 0;
      g.add(stripe);
    }
    return g;
  }

  buildTarget(t) {
    const g = new THREE.Group();
    const fill = new THREE.Mesh(
      new THREE.BoxGeometry(t.w, 0.02, t.d),
      new THREE.MeshBasicMaterial({ color: 0x3ddc84, transparent: true, opacity: 0.16, depthWrite: false }),
    );
    fill.position.set(t.x, 0.02, t.z);
    fill.rotation.y = t.rot;
    g.add(fill);

    const edgeMat = new THREE.MeshBasicMaterial({ color: 0x5cf2a0, transparent: true, opacity: 0.9 });
    const th = 0.08;
    const parts = [
      [0, t.d / 2 - th / 2, t.w, th],
      [0, -t.d / 2 + th / 2, t.w, th],
      [t.w / 2 - th / 2, 0, th, t.d],
      [-t.w / 2 + th / 2, 0, th, t.d],
    ];
    const c = Math.cos(t.rot), s = Math.sin(t.rot);
    for (const [lx, lz, pw, pd] of parts) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(pw, 0.03, pd), edgeMat);
      m.position.set(t.x + lx * c + lz * s, 0.03, t.z - lx * s + lz * c);
      m.rotation.y = t.rot;
      g.add(m);
    }

    this.targetEdgeMat = edgeMat;
    this.targetFill = fill.material;
    return g;
  }

  // The bay is a boundary drawn on the ground, and the only thing it has to
  // say on a fiftieth attempt is whether you are inside it yet — DESIGN.md 1.
  // Anything standing up out of it was a first-attempt aid, and a first
  // attempt is one attempt out of many.
  animateTarget(time, inside) {
    if (!this.targetEdgeMat) return;
    const pulse = 0.55 + Math.sin(time * 3) * 0.2;
    this.targetEdgeMat.opacity = inside ? 1 : pulse + 0.2;
    this.targetFill.opacity = inside ? 0.3 : 0.14;
    const col = inside ? 0xfff27a : 0x5cf2a0;
    this.targetEdgeMat.color.setHex(col);
    this.targetFill.color.setHex(col);
  }
}
