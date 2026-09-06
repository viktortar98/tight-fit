import * as THREE from 'three';

// Three mirrors, drawn where a driver's eyes already go for them: the two
// flanks at the sides of the screen and the interior mirror at the top centre.
//
// The reason they are not drawn where the glass is: a mirror rendered onto a
// 7 cm rectangle out at the edge of the windscreen is unreadable, and reading
// it would mean turning the view — which is the thing the inside view exists
// to avoid. So the mirrors keep their real *aim* (a mirror camera sits at the
// mirror's mount point and looks where that mirror looks) and give up only
// their position on screen.
//
// Panels are fractions of the canvas, measured from its bottom-left corner,
// which is the viewport convention the renderer already uses.
const PANELS = [
  { id: 'left', dir: [0.44, -0.11, -1], fov: 44, rect: [0.012, 0.30, 0.165, 0.215] },
  { id: 'right', dir: [-0.44, -0.11, -1], fov: 44, rect: [0.823, 0.30, 0.165, 0.215] },
  { id: 'centre', dir: [0, -0.07, -1], fov: 38, rect: [0.355, 0.792, 0.29, 0.152] },
];

// Half the canvas resolution. A mirror is a glance, not a viewport, and three
// extra full-resolution passes buy detail nobody reads.
const SCALE = 0.5;

function quad(rect, texture) {
  const [x, y, w, h] = rect;
  const g = new THREE.PlaneGeometry(w, h);
  g.translate(x + w / 2, y + h / 2, 0);
  // A mirror shows a reversed image, and the reversal has to be in the picture
  // rather than in the projection: flipping the camera's x scale would reverse
  // triangle winding too, and every front face in the scene would be culled.
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

export class Mirrors {
  constructor() {
    this.overlay = new THREE.Scene();
    this.ortho = new THREE.OrthographicCamera(0, 1, 1, 0, -1, 1);
    this.panels = PANELS.map((p) => {
      const target = new THREE.WebGLRenderTarget(64, 64, { depthBuffer: true });
      const cam = new THREE.PerspectiveCamera(p.fov, p.rect[2] / p.rect[3], 0.08, 260);
      this.overlay.add(frame(p.rect, 0x0d1014, 0.006), quad(p.rect, target.texture));
      return { ...p, target, cam, dir: new THREE.Vector3(...p.dir).normalize() };
    });
  }

  // Mirrors are bolted to the vehicle, so they are aimed from the vehicle's
  // heading alone — turning your head does not turn a mirror.
  aim(car, view) {
    const s = Math.sin(car.yaw);
    const c = Math.cos(car.yaw);
    for (const p of this.panels) {
      const m = view[p.id];
      const px = car.x + m.x * c + m.z * s;
      const pz = car.z - m.x * s + m.z * c;
      const d = p.dir;
      p.cam.up.set(0, 1, 0);
      p.cam.position.set(px, m.y, pz);
      p.cam.lookAt(
        px + (d.x * c + d.z * s) * 10,
        m.y + d.y * 10,
        pz + (-d.x * s + d.z * c) * 10,
      );
    }
  }

  resize(width, height, pixelRatio) {
    for (const p of this.panels) {
      // The panel rectangle is a fraction of each axis, so its shape follows
      // the window's; the camera has to be told, or the mirror stretches.
      p.cam.aspect = (p.rect[2] * width) / (p.rect[3] * height);
      p.cam.updateProjectionMatrix();
      p.target.setSize(
        Math.max(16, Math.round(width * p.rect[2] * pixelRatio * SCALE)),
        Math.max(16, Math.round(height * p.rect[3] * pixelRatio * SCALE)),
      );
    }
  }

  // Called after the main pass, so the shadow maps this frame already has are
  // reused rather than rebuilt three more times.
  draw(renderer, scene) {
    const shadows = renderer.shadowMap.autoUpdate;
    const clear = renderer.autoClear;
    renderer.shadowMap.autoUpdate = false;
    for (const p of this.panels) {
      renderer.setRenderTarget(p.target);
      renderer.render(scene, p.cam);
    }
    renderer.setRenderTarget(null);
    renderer.shadowMap.autoUpdate = shadows;
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(this.overlay, this.ortho);
    renderer.autoClear = clear;
  }
}
