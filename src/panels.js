import * as THREE from 'three';
import { integrate, rearBodyRect } from './vehicle.js';

// Screen panels: extra views of the scene, rendered into the corners of the
// frame rather than into the world.
//
// The three mirrors are drawn where a driver's eyes already go for them — the
// two flanks at the sides of the screen and the interior mirror at the top
// centre. Not where the glass is: a mirror rendered onto a 7 cm rectangle out
// at the edge of the windscreen is unreadable, and reading it would mean
// turning the view, which is the thing the inside view exists to avoid. So the
// mirrors keep their real *aim* — a mirror camera sits at the mirror's mount
// point and looks where that mirror looks — and give up only their position on
// screen.
//
// The reverse camera is the one panel that is where a real one is, because a
// real one is already on a screen.
//
// Rectangles are fractions of the canvas measured from its bottom-left corner,
// which is the viewport convention the renderer already uses.
const PANELS = [
  { id: 'left', kind: 'mirror', dir: [0.44, -0.11, -1], fov: 44, rect: [0.012, 0.30, 0.165, 0.215] },
  { id: 'right', kind: 'mirror', dir: [-0.44, -0.11, -1], fov: 44, rect: [0.823, 0.30, 0.165, 0.215] },
  { id: 'centre', kind: 'mirror', dir: [0, -0.07, -1], fov: 38, rect: [0.355, 0.792, 0.29, 0.152] },
  { id: 'reverse', kind: 'reverse', fov: 78, rect: [0.362, 0.145, 0.276, 0.25] },
];

// Half the canvas resolution. A panel is a glance, not a viewport, and extra
// full-resolution passes buy detail nobody reads.
const SCALE = 0.5;

// How far back the reverse camera draws, and how wide the painted rails are.
const GUIDE_LENGTH = 1.0;
const GUIDE_STEPS = 50;
const GUIDE_WIDTH = 0.05;
// Where a real reverse camera changes colour: the last third is the part you
// are about to hit.
const BANDS = [[0.35, 0xe2483a], [0.7, 0xe8b33c], [1.01, 0x49c07a]];

function quad(rect, texture) {
  const [x, y, w, h] = rect;
  const g = new THREE.PlaneGeometry(w, h);
  g.translate(x + w / 2, y + h / 2, 0);
  // A mirror shows a reversed image, and so does a reverse camera — both are
  // read as though you were looking over your shoulder. The reversal has to be
  // in the picture rather than in the projection: flipping the camera's x
  // scale would reverse triangle winding too, and every front face in the
  // scene would be culled.
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i));
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: texture, toneMapped: false }));
}

function frame(rect, colour, grow) {
  const [x, y, w, h] = rect;
  const g = new THREE.PlaneGeometry(w + grow * 2, h + grow * 2);
  g.translate(x + w / 2, y + h / 2, -0.01);
  return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: colour, transparent: true, opacity: 0.85 }));
}

// Two painted rails on the ground, one under each rear corner, following the
// path the vehicle would take at the steering angle it is holding.
//
// They are kept to what a real car draws (DESIGN.md 10): only in the reverse
// camera panel, only while reversing, only the length a bumper can reach. They
// are added to the scene invisible and switched on for that one render pass,
// so no other view can show them — not because a plan view of the path is
// forbidden, which it no longer is, but because these are the panel's own
// furniture and the turning circles already draw the world's version.
class Guides {
  constructor() {
    this.group = new THREE.Group();
    this.group.visible = false;
    this.rails = [-1, 1].map(() => {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((GUIDE_STEPS + 1) * 6), 3));
      g.setAttribute('color', new THREE.BufferAttribute(new Float32Array((GUIDE_STEPS + 1) * 6), 3));
      const idx = [];
      for (let i = 0; i < GUIDE_STEPS; i++) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
      g.setIndex(idx);
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({
        vertexColors: true, side: THREE.DoubleSide, toneMapped: false,
      }));
      this.group.add(m);
      return g;
    });
    this.colour = new THREE.Color();
  }

  // Driven by the game's own integrator at the steering angle actually held,
  // so the rails are the path rather than an artist's idea of it.
  update(spec, car) {
    const step = GUIDE_LENGTH / GUIDE_STEPS;
    // A metre of travel, taken as a metre regardless of how fast the vehicle
    // is going or whether it is moving at all: the rails answer "where would
    // this go", not "where is it going".
    let s = { x: car.x, z: car.z, yaw: car.yaw, trailerYaw: car.trailerYaw, speed: -1 };
    const pos = this.rails.map((g) => g.attributes.position);
    const col = this.rails.map((g) => g.attributes.color);
    for (let i = 0; i <= GUIDE_STEPS; i++) {
      const r = rearBodyRect(spec, s);
      const sy = Math.sin(r.rot);
      const cy = Math.cos(r.rot);
      const bx = r.x - sy * (r.d / 2);
      const bz = r.z - cy * (r.d / 2);
      const travelled = i * step;
      const band = BANDS.find((b) => travelled < b[0]) ?? BANDS[BANDS.length - 1];
      this.colour.setHex(band[1]);
      for (let side = 0; side < 2; side++) {
        const sx = side === 0 ? -1 : 1;
        const ox = cy * (r.w / 2) * sx;
        const oz = -sy * (r.w / 2) * sx;
        for (let e = 0; e < 2; e++) {
          const ex = cy * GUIDE_WIDTH * (e ? 1 : -1);
          const ez = -sy * GUIDE_WIDTH * (e ? 1 : -1);
          pos[side].setXYZ(i * 2 + e, bx + ox + ex, 0.02, bz + oz + ez);
          col[side].setXYZ(i * 2 + e, this.colour.r, this.colour.g, this.colour.b);
        }
      }
      s = integrate(spec, s, step, car.steer);
      s.speed = -1;
    }
    for (let side = 0; side < 2; side++) {
      pos[side].needsUpdate = true;
      col[side].needsUpdate = true;
      this.rails[side].computeBoundingSphere();
    }
  }
}

export class Panels {
  constructor() {
    this.overlay = new THREE.Scene();
    this.ortho = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
    this.guides = new Guides();
    this.panels = PANELS.map((p) => {
      const target = new THREE.WebGLRenderTarget(64, 64, { depthBuffer: true });
      const cam = new THREE.PerspectiveCamera(p.fov, p.rect[2] / p.rect[3], 0.06, 260);
      const group = new THREE.Group();
      group.add(frame(p.rect, 0x0d1014, 0.006), quad(p.rect, target.texture));
      group.visible = false;
      this.overlay.add(group);
      return { ...p, target, cam, group, dir: p.dir ? new THREE.Vector3(...p.dir).normalize() : null };
    });
  }

  // Mirrors are bolted to the vehicle, so they are aimed from the vehicle's
  // heading alone — turning your head does not turn a mirror. The reverse
  // camera hangs off whatever the rearmost body is, which for an articulated
  // vehicle is the trailer.
  aim(spec, car, view) {
    const s = Math.sin(car.yaw);
    const c = Math.cos(car.yaw);
    for (const p of this.panels) {
      if (p.kind === 'mirror') {
        const m = view[p.id];
        const px = car.x + m.x * c + m.z * s;
        const pz = car.z - m.x * s + m.z * c;
        const d = p.dir;
        p.cam.up.set(0, 1, 0);
        p.cam.position.set(px, m.y, pz);
        p.cam.lookAt(px + (d.x * c + d.z * s) * 10, m.y + d.y * 10, pz + (-d.x * s + d.z * c) * 10);
      } else {
        const r = rearBodyRect(spec, car);
        const sy = Math.sin(r.rot);
        const cy = Math.cos(r.rot);
        const h = (spec.trailer ? spec.trailer.height : spec.height) * 0.78;
        // On the tail surface, where a real one is bolted. A camera set back
        // inside the body looks at the top of its own boot lid.
        const px = r.x - sy * (r.d / 2 - 0.02);
        const pz = r.z - cy * (r.d / 2 - 0.02);
        // Aimed at the ground a metre back, not at a fixed angle down: the
        // thing this panel is for is the metre immediately behind the bumper,
        // and a fixed angle drops that metre off the bottom of the frame on
        // anything tall enough to mount the camera high. With the wide lens a
        // reverse camera has, aiming there puts the bumper itself at the
        // bottom edge and about two metres of ground above it.
        p.cam.up.set(0, 1, 0);
        p.cam.position.set(px, h, pz);
        p.cam.lookAt(px - sy, 0, pz - cy);
      }
    }
  }

  // Which panels this frame shows. Every one of them belongs to the inside
  // view, and for one reason: they are the views a driver does not have out of
  // the windscreen. From outside the vehicle the player is already looking at
  // the thing a mirror or a reversing camera would have shown them, and a panel
  // there is a second answer to a question the view has already answered — and
  // a worse one, because it is 25% of the frame the actual view is not using.
  //
  // Both are also a player preference, and a panel switched off is not rendered
  // rather than drawn and hidden — a panel costs a scene pass.
  show({ cockpit, reversing, mirrors, camera }) {
    for (const p of this.panels) {
      p.group.visible = cockpit && (p.kind === 'mirror' ? mirrors : reversing && camera);
    }
    return this.panels.some((p) => p.group.visible);
  }

  resize(width, height, pixelRatio) {
    for (const p of this.panels) {
      // The panel rectangle is a fraction of each axis, so its shape follows
      // the window's; the camera has to be told, or the picture stretches.
      p.cam.aspect = (p.rect[2] * width) / (p.rect[3] * height);
      p.cam.updateProjectionMatrix();
      p.target.setSize(
        Math.max(16, Math.round(width * p.rect[2] * pixelRatio * SCALE)),
        Math.max(16, Math.round(height * p.rect[3] * pixelRatio * SCALE)),
      );
    }
  }

  // Called after the main pass, so the shadow maps this frame already has are
  // reused rather than rebuilt once per panel.
  draw(renderer, scene) {
    const shadows = renderer.shadowMap.autoUpdate;
    const clear = renderer.autoClear;
    renderer.shadowMap.autoUpdate = false;
    for (const p of this.panels) {
      if (!p.group.visible) continue;
      this.guides.group.visible = p.kind === 'reverse';
      renderer.setRenderTarget(p.target);
      renderer.render(scene, p.cam);
    }
    this.guides.group.visible = false;
    renderer.setRenderTarget(null);
    renderer.shadowMap.autoUpdate = shadows;
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(this.overlay, this.ortho);
    renderer.autoClear = clear;
  }
}
