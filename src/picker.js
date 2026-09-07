import * as THREE from 'three';
import { VEHICLES, Vehicle } from './vehicle.js';
import { createVehicleMesh, updateVehicleMesh } from './carMesh.js';
import { TurnCircles } from './turnCircles.js';
import { BTN } from './gamepad.js';
import { statsOf, turnRadius, sweptRadius } from './vehicleStats.js';

// Choosing which vehicle a level is driven with.
//
// The roster is a coverage map of the manoeuvring space rather than a size
// ladder, so choosing from it is a comparison and not a lookup. A name in a
// dropdown says nothing about what a "Crane Carrier" will do at a bay mouth,
// and twenty-eight names say less than one, because what matters about any of
// them is how it differs from the others.
//
// So the picker shows the vehicles rather than naming them, drawn with the
// game's own mesh builder. Two decisions hold up the rest of the file.
//
// **Each vehicle is framed to fill its own tile, and the ground says how big
// it is.** One scale across a roster running 2.90 m to 16.65 m makes the small
// end unreadable in order to make the large end honest, which is a bad trade
// in a picture whose whole job is comparison. What replaces a shared scale is
// a shared *reference*: every tile stands on a 1 m grid with one marked bay on
// it, at the size `src/objects.js` gives a bay by default. Nothing is put in
// the scene that the game does not already contain — the bay is the thing the
// game is about, so "longer than a bay" and "wider than a bay" are read off
// the floor instead of off a number.
//
// **The model turns over, and that is what replaces a plan drawing.** A
// top-down blueprint was the other way to show wheel placement against the
// body line — whether the wheels are inside the flanks, whether the body is
// wider than the track. A model you can look at from underneath shows the same
// thing and is not a second description of a vehicle that could drift from the
// first. The orbit is yaw and pitch only, with the camera's up locked to the
// world's, so the vehicle is never seen tilted: there is no roll axis to get
// lost on.
//
// The numbers beside it are only what the model cannot show — see
// `src/vehicleStats.js` for which, and why those.

const $ = (id) => document.getElementById(id);
const IDS = Object.keys(VEHICLES);

// The game's default bay, from `buildBay` in src/objects.js. The same numbers
// rather than the same builder: that one also parks a car in the bay and works
// in a level's coordinate frame, neither of which applies here.
const BAY_W = 2.5;
const BAY_D = 5;
const PAINT = 0.12;

// The ground between the tiles. The canvas is behind the whole UI, so this is
// what shows wherever the picker's own DOM paints nothing.
const BASE = 0x14171c;

// Just short of the pole. At exactly 90° the camera's up and its view
// direction are parallel, `lookAt` has no answer, and the picture flips over
// as it crosses.
const PITCH_LIMIT = 1.53;

// The front three-quarter view every tile is drawn from, as yaw and pitch: the
// same direction `dev.html` frames its inspection sheet from, so a vehicle
// looks like itself in both places.
const HOME_YAW = 0.684;
const HOME_PITCH = 0.336;

const ORBIT_KEYS = { KeyA: 'left', KeyD: 'right', KeyW: 'up', KeyS: 'down' };
const ORBIT_RATE = 1.7;     // radians per second, held
const ZOOM_RATE = 1.4;      // proportion per second, held
const DRAG_RATE = 0.007;    // radians per pixel
const ZOOM_STEP = 0.14;
const ZOOM_MIN = 0.35;
const ZOOM_MAX = 4;

// The whole combination, front bumper to trailer tail, measured from the rear
// axle the vehicle is referenced at.
function extent(spec) {
  const t = spec.trailer;
  const nose = spec.length - spec.rearOverhang;
  const tail = t ? t.hitch - t.axleFromHitch - t.axleToRear : -spec.rearOverhang;
  return { nose, tail, reach: nose - tail };
}

export class Picker {
  constructor({ renderer, environment, onDone }) {
    this.renderer = renderer;
    this.onDone = onDone;
    this.open = false;
    this.id = IDS[0];
    this.meshes = new Map();
    this.shown = null;
    this.held = new Set();
    this.drag = null;
    this.navLatch = false;
    this.showCircles = false;
    this.yaw = HOME_YAW;
    this.pitch = HOME_PITCH;
    this.zoom = 1;

    this.scene = new THREE.Scene();
    this.scene.environment = environment;
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.05, 400);
    this.buildStudio();

    this.circles = new TurnCircles();
    this.circles.group.visible = false;
    this.scene.add(this.circles.group);

    this.buildDom();
    this.bind();
  }

  // --- the studio ------------------------------------------------------

  buildStudio() {
    this.floor = new THREE.Mesh(
      new THREE.PlaneGeometry(240, 240),
      new THREE.MeshStandardMaterial({ color: 0x6e737b, roughness: 0.95 }),
    );
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    // One line per metre. It is the only thing on this screen that is not in
    // the game, and it is a measure rather than an object: it reads at any
    // zoom and from any angle, including from underneath, and nobody has to
    // tell it apart from the vehicle.
    this.grid = new THREE.GridHelper(120, 120, 0x9aa4b0, 0x5a616b);
    this.grid.position.y = 0.006;
    this.grid.material.transparent = true;
    this.grid.material.opacity = 0.5;
    this.scene.add(this.grid);

    const paint = new THREE.MeshStandardMaterial({ color: 0xd6d3c6, roughness: 0.85 });
    const stripe = (w, d, x, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.02, d), paint);
      m.position.set(x, 0.013, z);
      return m;
    };
    this.bay = new THREE.Group();
    this.bay.add(
      stripe(PAINT, BAY_D, -BAY_W / 2, 0),
      stripe(PAINT, BAY_D, BAY_W / 2, 0),
      stripe(BAY_W, PAINT, 0, -BAY_D / 2 + PAINT / 2),
    );
    this.scene.add(this.bay);

    const sun = new THREE.DirectionalLight(0xfff4e2, 2.0);
    sun.position.set(7, 14, 5);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    // A directional light's shadow camera is ±5 m by default, which is shorter
    // than half this roster.
    const c = sun.shadow.camera;
    c.left = -24; c.right = 24; c.top = 24; c.bottom = -24; c.far = 90;
    c.updateProjectionMatrix();
    this.scene.add(sun, new THREE.HemisphereLight(0xbdd6ff, 0x4a4f57, 1.1));
  }

  // Built once and kept. A vehicle mesh is the most expensive thing this
  // screen makes, and the screen is opened and closed repeatedly while a level
  // is being written. `budget` caps how many are built in one frame, so
  // opening the picker is not a stall: a tile whose mesh does not exist yet is
  // skipped and appears a frame or two later.
  meshFor(id, budget) {
    if (!this.meshes.has(id)) {
      if (budget.left <= 0) return null;
      budget.left--;
      this.meshes.set(id, createVehicleMesh(VEHICLES[id]));
    }
    return this.meshes.get(id);
  }

  // One vehicle is in the scene at a time; every tile is a separate render of
  // the same studio with a different one standing in it.
  place(id, mesh, steer) {
    if (this.shown && this.shown !== mesh) {
      this.scene.remove(this.shown.group);
      if (this.shown.trailerGroup) this.scene.remove(this.shown.trailerGroup);
    }
    this.shown = mesh;
    this.scene.add(mesh.group);
    const spec = VEHICLES[id];
    mesh.group.position.set(0, 0, 0);
    mesh.group.rotation.y = 0;
    if (mesh.trailerGroup) {
      this.scene.add(mesh.trailerGroup);
      // Asking a Vehicle where its trailer axle is beats a subtraction here
      // that could be wrong in a way the picture would not show.
      const v = new Vehicle(spec);
      v.reset(0, 0, 0);
      const axle = v.trailerAxleWorld();
      mesh.trailerGroup.position.set(axle.x, 0, axle.z);
      mesh.trailerGroup.rotation.y = 0;
    }
    updateVehicleMesh(mesh, spec, { steer });
    // The bay is centred on the vehicle's own footprint, so whatever hangs out
    // of it hangs out of both ends at once and the overhang is the picture.
    const { nose, tail } = extent(spec);
    this.bay.position.z = (nose + tail) / 2;
  }

  // --- the DOM ---------------------------------------------------------

  buildDom() {
    this.el = $('picker');
    this.gridEl = $('pk-grid');
    this.viewEl = $('pk-view');
    this.tiles = IDS.map((id) => {
      const b = document.createElement('button');
      b.className = 'pk-tile';
      b.dataset.id = id;
      b.innerHTML = `<span class="pk-cap">${VEHICLES[id].name}</span>`;
      b.onclick = () => this.select(id);
      b.ondblclick = () => this.commit();
      this.gridEl.appendChild(b);
      return b;
    });
  }

  bind() {
    $('pk-use').onclick = () => this.commit();
    $('pk-cancel').onclick = () => this.close();
    $('pk-circle').onclick = () => this.setCircles(!this.showCircles);
    $('pk-home').onclick = () => this.home();

    addEventListener('keydown', (e) => {
      if (!this.open || e.ctrlKey || e.metaKey || e.altKey) return;
      if (ORBIT_KEYS[e.code]) this.held.add(e.code);
    });
    addEventListener('keyup', (e) => this.held.delete(e.code));
    addEventListener('blur', () => this.held.clear());

    // Dragging turns the model over, and only a drag that started on the
    // preview does: the tiles are buttons, and a drag across them is a
    // mis-click rather than a look.
    this.viewEl.addEventListener('pointerdown', (e) => {
      this.drag = { x: e.clientX, y: e.clientY };
      this.viewEl.setPointerCapture(e.pointerId);
    });
    this.viewEl.addEventListener('pointermove', (e) => {
      if (!this.drag) return;
      this.turn(-(e.clientX - this.drag.x) * DRAG_RATE, (e.clientY - this.drag.y) * DRAG_RATE);
      this.drag = { x: e.clientX, y: e.clientY };
    });
    const stop = (e) => {
      this.drag = null;
      try { this.viewEl.releasePointerCapture(e.pointerId); } catch { /* already gone */ }
    };
    this.viewEl.addEventListener('pointerup', stop);
    this.viewEl.addEventListener('pointercancel', stop);
    this.viewEl.addEventListener('wheel', (e) => {
      this.scale(Math.sign(e.deltaY) * ZOOM_STEP);
      e.preventDefault();
    }, { passive: false });
  }

  turn(dyaw, dpitch) {
    this.yaw += dyaw;
    this.pitch = THREE.MathUtils.clamp(this.pitch + dpitch, -PITCH_LIMIT, PITCH_LIMIT);
  }

  scale(by) {
    this.zoom = THREE.MathUtils.clamp(this.zoom * (1 + by), ZOOM_MIN, ZOOM_MAX);
  }

  home() {
    this.yaw = HOME_YAW;
    this.pitch = HOME_PITCH;
    this.zoom = 1;
  }

  // --- opening and choosing --------------------------------------------

  show(id) {
    this.open = true;
    this.id = id in VEHICLES ? id : IDS[0];
    this.home();
    this.setCircles(false);
    this.el.classList.remove('hidden');
    this.renderDetail();
    this.tiles[IDS.indexOf(this.id)].focus();
  }

  // `picked` is the vehicle chosen, or null for a screen closed without one.
  // Both go out through the same call, because the caller has the same thing
  // to put back either way: the editor it covered up.
  close(picked = null) {
    if (!this.open) return;
    this.open = false;
    this.held.clear();
    this.drag = null;
    this.el.classList.add('hidden');
    // Hand the renderer back whole. A viewport and a scissor rectangle are
    // renderer state and not per-frame state, so the last tile this screen
    // drew would otherwise still be the rectangle the game and the editor draw
    // into — a level rendered into a 320 x 140 box in the corner of a blank
    // canvas, with nothing in the failure naming the screen that caused it.
    const size = this.renderer.getSize(new THREE.Vector2());
    this.renderer.setScissorTest(false);
    this.renderer.setViewport(0, 0, size.x, size.y);
    this.renderer.setScissor(0, 0, size.x, size.y);
    this.onDone(picked);
  }

  select(id) {
    if (id === this.id) return;
    this.id = id;
    this.home();
    this.renderDetail();
    // So the tile with the green edge is also the tile the keyboard is on: a
    // click focuses it anyway, and this makes the two agree when the choice
    // was made any other way.
    this.tiles[IDS.indexOf(id)].focus();
  }

  commit() {
    this.close(this.id);
  }

  setCircles(on) {
    this.showCircles = on;
    this.circles.group.visible = on;
    $('pk-circle').classList.toggle('on', on);
    // The rings are a figure on the ground, and from a three-quarter view a
    // ring on the ground is a sliver. Switching them on lifts a low camera to
    // where the circle is a circle; a camera already up there is left alone,
    // and nothing moves it back down, so the view stays where the last
    // deliberate act put it.
    if (on && this.pitch < 0.95) this.pitch = 0.95;
  }

  renderDetail() {
    const spec = VEHICLES[this.id];
    $('pk-name').textContent = spec.name;
    $('pk-stats').innerHTML = statsOf(spec).map((r) => `
      <div class="pk-stat">
        <span class="pk-label">${r.label}</span>
        <b>${r.value}</b>
        <span class="pk-note">${r.note}</span>
      </div>`).join('');
    for (const t of this.tiles) t.classList.toggle('on', t.dataset.id === this.id);
  }

  // --- a frame ---------------------------------------------------------

  // Navigation is two-dimensional because the tiles are: left and right step
  // one, up and down step a row, and the row width is read off the laid-out
  // grid rather than assumed, because the grid reflows with the window.
  columns() {
    const top = this.tiles[0].offsetTop;
    let n = 0;
    while (n < this.tiles.length && this.tiles[n].offsetTop === top) n++;
    return Math.max(1, n);
  }

  step(by) {
    const i = IDS.indexOf(this.id);
    const next = THREE.MathUtils.clamp(i + by, 0, IDS.length - 1);
    if (next === i) return;
    this.select(IDS[next]);
    this.tiles[next].focus();
    this.tiles[next].scrollIntoView({ block: 'nearest' });
  }

  update(dt, input, pad) {
    if (input.pressed('Escape')) { this.close(); return; }
    if (input.pressed('Enter')) { this.commit(); return; }
    if (input.pressed('KeyT')) this.setCircles(!this.showCircles);
    if (input.pressed('KeyZ')) this.home();

    const cols = this.columns();
    if (input.pressed('ArrowLeft')) this.step(-1);
    if (input.pressed('ArrowRight')) this.step(1);
    if (input.pressed('ArrowUp')) this.step(-cols);
    if (input.pressed('ArrowDown')) this.step(cols);
    if (input.pressed('Equal') || input.pressed('NumpadAdd')) this.scale(-ZOOM_STEP);
    if (input.pressed('Minus') || input.pressed('NumpadSubtract')) this.scale(ZOOM_STEP);

    let dyaw = 0;
    let dpitch = 0;
    for (const code of this.held) {
      const dir = ORBIT_KEYS[code];
      if (dir === 'left') dyaw += ORBIT_RATE * dt;
      if (dir === 'right') dyaw -= ORBIT_RATE * dt;
      if (dir === 'up') dpitch += ORBIT_RATE * dt;
      if (dir === 'down') dpitch -= ORBIT_RATE * dt;
    }
    let zoom = 0;

    if (pad?.connected) {
      // The pad splits this screen the way the game splits the road: the left
      // stick and the d-pad move the selection, the right stick is the look.
      // DESIGN.md 11 keeps the pad first-class, and a player who has learnt RS
      // to look around their vehicle should not have to learn a second verb.
      const look = pad.look();
      dyaw -= look.x * ORBIT_RATE * dt;
      dpitch += look.y * ORBIT_RATE * dt;
      zoom += (pad.analog(BTN.LT) - pad.analog(BTN.RT)) * ZOOM_RATE * dt;
      const ax = pad.pad?.axes[0] ?? 0;
      const ay = pad.pad?.axes[1] ?? 0;
      const sx = Math.abs(ax) > 0.6 ? Math.sign(ax) : 0;
      const sy = Math.abs(ay) > 0.6 ? Math.sign(ay) : 0;
      if ((sx || sy) && !this.navLatch) this.step(sx || sy * cols);
      this.navLatch = !!(sx || sy);
      if (pad.tapped(BTN.RIGHT)) this.step(1);
      if (pad.tapped(BTN.LEFT)) this.step(-1);
      if (pad.tapped(BTN.DOWN)) this.step(cols);
      if (pad.tapped(BTN.UP)) this.step(-cols);
      if (pad.tapped(BTN.A)) { this.commit(); return; }
      if (pad.tapped(BTN.B)) { this.close(); return; }
      if (pad.tapped(BTN.X)) this.setCircles(!this.showCircles);
      if (pad.tapped(BTN.RB)) this.home();
    }
    if (dyaw || dpitch) this.turn(dyaw, dpitch);
    if (zoom) this.scale(zoom);
  }

  // A DOM rectangle as a WebGL viewport: same units, opposite vertical origin.
  //
  // Viewport and scissor are two rectangles rather than one because the grid
  // scrolls. The viewport is the whole tile, so the vehicle is framed the same
  // whether or not the tile is fully on screen; the scissor is the part of it
  // still inside the scrolling area, so a tile halfway under the heading is
  // drawn halfway and not over the heading. One rectangle for both would have
  // to choose, and either choice is a fault: clip with the viewport and the
  // vehicle squashes as it scrolls, clip with neither and it escapes its box.
  rectOf(el, within) {
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) return null;
    const c = within ? within.getBoundingClientRect() : { left: 0, top: 0, right: innerWidth, bottom: innerHeight };
    const left = Math.max(r.left, c.left, 0);
    const right = Math.min(r.right, c.right, innerWidth);
    const top = Math.max(r.top, c.top, 0);
    const bottom = Math.min(r.bottom, c.bottom, innerHeight);
    if (right - left < 2 || bottom - top < 2) return null;
    return {
      view: [r.left, innerHeight - r.bottom, r.width, r.height],
      clip: [left, innerHeight - bottom, right - left, bottom - top],
    };
  }

  // How far back the camera has to stand for a box to fit the viewport, at
  // this camera's angle and field of view.
  //
  // A size and a distance is not enough here, and the turning circle is why: a
  // ring lying on the ground seen from 19° above it projects to a sliver, and
  // a camera placed to fit its true width ends up three times too far away.
  // So every corner of the box is projected and asked what distance it needs,
  // and the answer is the largest of them. Cheap — eight corners, twice per
  // frame — and it is right for a tall vehicle and a flat ring alike.
  frameBox(box, yaw, pitch, aspect) {
    const focus = box.getCenter(new THREE.Vector3());
    const cp = Math.cos(pitch);
    const dir = new THREE.Vector3(Math.sin(yaw) * cp, Math.sin(pitch), Math.cos(yaw) * cp);
    const fwd = dir.clone().negate();
    const right = new THREE.Vector3().crossVectors(fwd, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const tan = Math.tan((this.camera.fov * Math.PI) / 360);
    const p = new THREE.Vector3();
    let dist = 0.2;
    for (let i = 0; i < 8; i++) {
      p.set(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z);
      p.sub(focus);
      const depth = p.dot(fwd);
      dist = Math.max(dist,
        Math.abs(p.dot(right)) / (tan * aspect) - depth,
        Math.abs(p.dot(up)) / tan - depth);
    }
    return { focus, dist: dist * 1.1 };
  }

  render() {
    const r = this.renderer;
    // Two per frame is enough that the grid fills in within half a second of
    // opening and never long enough to be seen as a stall.
    const budget = { left: 2 };
    r.setScissorTest(false);
    r.setClearColor(BASE, 1);
    r.clear();
    r.setScissorTest(true);

    for (const tile of this.tiles) {
      const rect = this.rectOf(tile, this.gridEl);
      if (!rect) continue;
      const mesh = this.meshFor(tile.dataset.id, budget);
      if (!mesh) continue;
      this.draw(rect, tile.dataset.id, mesh, HOME_YAW, HOME_PITCH, 1, false);
    }

    const rect = this.rectOf(this.viewEl);
    // The chosen vehicle is drawn whatever the budget says: it is the one the
    // person is looking at.
    const mesh = rect ? this.meshFor(this.id, { left: 1 }) : null;
    if (mesh) this.draw(rect, this.id, mesh, this.yaw, this.pitch, this.zoom, this.showCircles);

    r.setScissorTest(false);
  }

  // What has to be in the picture. The vehicle and the bay it is standing in
  // always, because the bay is the scale and a reference that falls off the
  // edge of the tile is not one; the rings as well when they are drawn, and
  // they are much the largest thing here.
  bounds(spec, withCircles) {
    const { nose, tail } = extent(spec);
    const half = Math.max(spec.width, spec.trailer?.width ?? 0) / 2;
    const mid = (nose + tail) / 2;
    const box = new THREE.Box3(
      new THREE.Vector3(Math.min(-half, -BAY_W / 2), 0, Math.min(tail, mid - BAY_D / 2)),
      new THREE.Vector3(Math.max(half, BAY_W / 2), spec.height, Math.max(nose, mid + BAY_D / 2)),
    );
    if (withCircles) {
      const R = turnRadius(spec);
      const out = sweptRadius(spec);
      box.expandByPoint(new THREE.Vector3(R - out, 0, -out));
      box.expandByPoint(new THREE.Vector3(R + out, 0, out));
    }
    return box;
  }

  draw(rect, id, mesh, yaw, pitch, zoom, withCircles) {
    const spec = VEHICLES[id];
    this.place(id, mesh, withCircles ? spec.maxSteer : 0);
    this.circles.group.visible = withCircles;
    if (withCircles) {
      const out = sweptRadius(spec);
      const R = turnRadius(spec);
      this.circles.update(spec, { x: 0, z: 0, yaw: 0, steer: spec.maxSteer },
        { minX: -out - R, maxX: out + R, minZ: -out, maxZ: out });
    }

    const [x, y, w, h] = rect.view;
    const cam = this.camera;
    cam.aspect = w / h;
    const { focus, dist } = this.frameBox(this.bounds(spec, withCircles), yaw, pitch, cam.aspect);
    const d = dist * zoom;
    const cp = Math.cos(pitch);
    cam.up.set(0, 1, 0);
    cam.position.set(
      focus.x + Math.sin(yaw) * cp * d,
      focus.y + Math.sin(pitch) * d,
      focus.z + Math.cos(yaw) * cp * d,
    );
    cam.lookAt(focus);
    cam.updateProjectionMatrix();

    // Seen from under the ground, the ground is in the way. The grid and the
    // paint stay — they are what the scale is read off, and a line and a
    // 2 cm slab are both visible from either side — and only the solid floor
    // stands down.
    this.floor.visible = cam.position.y > 0.02;

    this.renderer.setViewport(x, y, w, h);
    this.renderer.setScissor(...rect.clip);
    this.renderer.render(this.scene, cam);
  }
}
