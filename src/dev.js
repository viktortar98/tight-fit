import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { VEHICLES, Vehicle } from './vehicle.js';
import { createVehicleMesh } from './carMesh.js';
import { LEVELS } from './levels.js';
import { World } from './world.js';
import * as OBJECTS from './objects.js';
import { SCHEMA } from './objects.js';
import { TurnCircles } from './turnCircles.js';
import { Ghosts } from './ghosts.js';

// An inspection sheet. Not part of the game: `dev.html`, dev server only.
//
// It exists because a bug that is only visible on screen was shipped twice. The
// game shows one vehicle, from one of three cameras, in one level, and reading
// that picture for a fault means driving to the fault first. A z-fighting seam
// on a hatchback's roof was in the build for two versions because nothing ever
// looked at a hatchback's roof from two metres away.
//
// So this renders every case at once into a single frame: thirteen vehicles by
// five views, or fourteen levels from above. One image is one look at the whole
// matrix, which is the only way looking at all of it stays cheap enough to do
// every time. `report()` is the same sheet as text for anything countable.
//
// Routes, on the hash:
//   #cars                every vehicle, five views each
//   #car=hatch           one vehicle, the same five, large
//   #levels              every level from above, vehicle at its start
//   #level=alcove        one level, large
//   #circles=hatch       the turning circles at six steering angles, from above
//   #ghosts              every vehicle with two ghosts of itself behind it
// and `?spin=1` turns the vehicles, because a seam that flickers is a seam that
// a still frame can miss.

const UP = new THREE.Vector3(0, 1, 0);

const SHEET = document.getElementById('sheet');
const LABELS = document.getElementById('labels');

const renderer = new THREE.WebGLRenderer({ canvas: SHEET, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.95;
renderer.autoClear = false;

const pmrem = new THREE.PMREMGenerator(renderer);
const ENV = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();

// --- the studio a vehicle is shown in ---------------------------------

const studio = new THREE.Scene();
studio.environment = ENV;
studio.background = new THREE.Color(0x2a2e35);
{
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80),
    new THREE.MeshStandardMaterial({ color: 0x6e737b, roughness: 0.95 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  studio.add(floor);
  const sun = new THREE.DirectionalLight(0xfff4e2, 2.1);
  sun.position.set(6, 12, 4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  studio.add(sun, new THREE.HemisphereLight(0xbdd6ff, 0x4a4f57, 1.1));
}

// The six ways a vehicle can be wrong. Three-quarters from each end show the
// flanks and the roof, which is where a lining seam lands; `top` shows the
// footprint; and two of them are from the driver's seat, because the cabin is
// only a surface from in there. Looking straight ahead shows the header, the
// mirror and the bonnet; looking left shows the A-pillar, the side glass and
// the door, which is the half of the cabin the forward view cannot see.
const VIEWS = {
  fq: { name: 'front 3/4', at: [1.1, 0.62, 1.35] },
  rq: { name: 'rear 3/4', at: [-1.15, 0.58, -1.4] },
  side: { name: 'side', at: [2.0, 0.30, 0] },
  top: { name: 'top', at: [0.01, 2.2, 0] },
  in: { name: "seat, ahead", eye: [0, 0.06, 82] },
  inl: { name: 'seat, left', eye: [1.15, 0.12, 88] },
};

// The whole combination, front bumper to trailer tail, measured from the rear
// axle the vehicle is referenced at. The rear axle is the origin, so the nose
// is everything ahead of it: the length less the rear overhang. There is no
// `frontOverhang` on a spec.
function extent(spec) {
  const t = spec.trailer;
  const nose = spec.length - spec.rearOverhang;
  const tail = t ? t.hitch - t.axleFromHitch - t.axleToRear : -spec.rearOverhang;
  return { nose, tail, reach: nose - tail };
}

// A trailer has a place of its own, and the vehicle is the thing that knows
// it. Asking a real Vehicle where its axle is beats a subtraction here that
// could be wrong in a way the picture would not show.
function placeVehicle(spec, mesh, spin) {
  mesh.group.rotation.y = spin;
  if (mesh.trailerGroup) {
    const v = new Vehicle(spec);
    v.reset(0, 0, spin);
    const axle = v.trailerAxleWorld();
    mesh.trailerGroup.position.set(axle.x, 0, axle.z);
    mesh.trailerGroup.rotation.y = spin;
  }
}

function frameVehicle(cam, spec, mesh, view, spin) {
  const { nose, tail, reach } = extent(spec);
  const size = Math.max(reach, spec.width) * 0.9;
  const mid = new THREE.Vector3(0, spec.height * 0.45, (nose + tail) / 2);
  placeVehicle(spec, mesh, spin);
  cam.up.set(0, 1, 0);
  if (view.eye) {
    // The same placement src/camera.js uses for the inside view, with the head
    // turned: the eye is exactly where the mesh says it is, and only the
    // direction of the look is this page's choice.
    const [yaw, pitch, fov] = view.eye;
    const e = mesh.view.eye.clone().applyAxisAngle(UP, spin);
    const a = spin + yaw;
    cam.fov = fov;
    cam.position.copy(e);
    cam.lookAt(e.x + Math.sin(a) * Math.cos(pitch) * 10, e.y + Math.sin(pitch) * 10,
      e.z + Math.cos(a) * Math.cos(pitch) * 10);
    cam.updateProjectionMatrix();
    return;
  }
  cam.fov = 40;
  const [ax, ay, az] = view.at;
  cam.position.set(ax, ay, az).multiplyScalar(size).add(mid);
  cam.lookAt(mid);
  cam.updateProjectionMatrix();
}

// --- the level sheet ---------------------------------------------------

const levelScene = new THREE.Scene();
const world = new World(levelScene);
let levelCar = null;

function buildLevel(level) {
  world.build(level);
  if (levelCar) {
    levelScene.remove(levelCar.group);
    if (levelCar.trailerGroup) levelScene.remove(levelCar.trailerGroup);
  }
  const spec = VEHICLES[level.vehicle];
  levelCar = createVehicleMesh(spec);
  levelCar.group.position.set(level.start.x, 0, level.start.z);
  levelCar.group.rotation.y = level.start.yaw;
  levelScene.add(levelCar.group);
  if (levelCar.trailerGroup) {
    levelCar.trailerGroup.position.set(level.start.x, 0, level.start.z);
    levelCar.trailerGroup.rotation.y = level.start.yaw;
    levelScene.add(levelCar.trailerGroup);
  }
}

function frameLevel(cam, level, aspect) {
  const b = level.bounds;
  cam.fov = 45;
  const tan = Math.tan((cam.fov * Math.PI) / 360);
  const h = Math.max((b.maxZ - b.minZ) * 1.1, ((b.maxX - b.minX) * 1.1) / aspect) / (2 * tan);
  const x = (b.minX + b.maxX) / 2;
  const z = (b.minZ + b.maxZ) / 2;
  cam.up.set(0, 0, -1);
  cam.position.set(x, h, z + 0.001);
  cam.lookAt(x, 0, z);
  cam.updateProjectionMatrix();
}

// --- the turning circles ------------------------------------------------

// Six locks over one vehicle, from above. The whole point of the drawing is
// which circle belongs to which end, and that is a colour: rear blue, front
// violet, shared centre amber. A sheet is the only place all six are together.
const circleScene = new THREE.Scene();
circleScene.background = new THREE.Color(0x3b4048);
circleScene.environment = ENV;
{
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(400, 400),
    new THREE.MeshStandardMaterial({ color: 0x6e737b, roughness: 0.95 }),
  );
  floor.rotation.x = -Math.PI / 2;
  circleScene.add(floor);
  circleScene.add(new THREE.HemisphereLight(0xbdd6ff, 0x4a4f57, 1.4));
}
const circles = new TurnCircles();
circleScene.add(circles.group);
let circleCar = null;

const LOCKS = [1, 0.6, 0.3, -0.3, -0.6, -1];

function drawCircles(spec, frac, span) {
  if (circleCar) {
    circleScene.remove(circleCar.group);
    if (circleCar.trailerGroup) circleScene.remove(circleCar.trailerGroup);
  }
  circleCar = createVehicleMesh(spec);
  circleScene.add(circleCar.group);
  if (circleCar.trailerGroup) circleScene.add(circleCar.trailerGroup);
  const bounds = { minX: -span, maxX: span, minZ: -span, maxZ: span };
  circles.update(spec, { x: 0, z: 0, yaw: 0, steer: spec.maxSteer * frac }, bounds);
}

// --- the ghost sheet ----------------------------------------------------

// Every vehicle standing where it is, with two ghosts of itself behind it —
// the shape a pair of shunts leaves. What the picture has to answer is whether
// a ghost still reads as *that* vehicle once it is one flat translucent grey:
// whether the silhouette survives, whether an articulated one brings its
// trailer and bends it, and whether two of them overlapping are still two.
const GHOST_STEPS = [
  { ax: 0.30, az: -0.62, yaw: -0.30 },
  { ax: 0.14, az: -0.30, yaw: -0.15 },
];

const ghostSets = new Map();
function ghostsFor(id) {
  if (!ghostSets.has(id)) {
    const spec = VEHICLES[id];
    const { reach } = extent(spec);
    const set = new Ghosts(spec, meshFor(id));
    set.setShown(true);
    // At full lock, because that is where a stroke ends, and a copy that
    // dropped the steering angle would show up nowhere else.
    GHOST_STEPS.forEach((st, i) => set.record(i + 1, {
      x: st.ax * reach, z: st.az * reach, yaw: st.yaw,
      trailerYaw: st.yaw + (spec.trailer ? 0.22 : 0),
    }, spec.maxSteer));
    studio.add(set.group);
    ghostSets.set(id, set);
  }
  return ghostSets.get(id);
}

// Far enough back to hold the whole trail, and centred on it rather than on
// the vehicle, or the oldest ghost falls off the tile.
function frameGhosts(cam, spec) {
  const { nose, tail, reach } = extent(spec);
  const mid = new THREE.Vector3(
    reach * 0.15, spec.height * 0.4, (nose + tail) / 2 - reach * 0.31,
  );
  cam.up.set(0, 1, 0);
  cam.fov = 40;
  cam.position.set(1.15, 0.78, 1.3).multiplyScalar(reach * 0.92).add(mid);
  cam.lookAt(mid);
  cam.updateProjectionMatrix();
}

// --- the sheet ---------------------------------------------------------

const cam = new THREE.PerspectiveCamera(40, 1, 0.05, 500);
let tiles = [];
let spinning = false;

function route() {
  const h = location.hash.slice(1);
  const [key, value] = h.split('=');
  const views = Object.entries(VIEWS);
  if (key === 'car') {
    const id = value in VEHICLES ? value : 'hatch';
    return { cols: 3, tiles: views.map(([k, v]) => ({ kind: 'car', spec: id, view: v, label: `${id} · ${v.name}`, id: k })) };
  }
  if (key === 'level') {
    const level = LEVELS.find((l) => l.id === value) ?? LEVELS[0];
    return { cols: 1, tiles: [{ kind: 'level', level, label: `${level.id} · ${level.name}` }] };
  }
  if (key === 'levels') {
    return { cols: 4, tiles: LEVELS.map((l) => ({ kind: 'level', level: l, label: `${l.id} · ${VEHICLES[l.vehicle].name}` })) };
  }
  if (key === 'ghosts') {
    return {
      cols: 4,
      tiles: Object.keys(VEHICLES).map((id) => ({
        kind: 'ghosts', spec: id, label: `${id} · two ghosts`,
      })),
    };
  }
  if (key === 'circles') {
    const id = value in VEHICLES ? value : 'hatch';
    return {
      cols: 3,
      tiles: LOCKS.map((f) => ({
        kind: 'circles', spec: id, frac: f,
        label: `${id} · ${(f * 100).toFixed(0)}% lock`,
      })),
    };
  }
  const ids = Object.keys(VEHICLES);
  const out = [];
  for (const id of ids) for (const [k, v] of views) out.push({ kind: 'car', spec: id, view: v, label: `${id} · ${v.name}`, id: k });
  return { cols: views.length, tiles: out };
}

const meshes = new Map();
function meshFor(id) {
  if (!meshes.has(id)) meshes.set(id, createVehicleMesh(VEHICLES[id]));
  return meshes.get(id);
}

function layout() {
  const sheet = route();
  tiles = sheet.tiles;
  const cols = sheet.cols;
  const rows = Math.ceil(tiles.length / cols);
  const w = innerWidth;
  const h = innerHeight;
  renderer.setSize(w, h, false);
  const tw = w / cols;
  const th = h / rows;
  LABELS.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  LABELS.innerHTML = tiles.map((t) => `<span>${t.label}</span>`).join('');
  tiles.forEach((t, i) => {
    const c = i % cols;
    const r = Math.floor(i / cols);
    t.rect = [c * tw, h - (r + 1) * th, tw, th];
  });
}

function frame(now) {
  const spin = spinning ? (now / 1400) % (Math.PI * 2) : 0;
  renderer.setScissorTest(true);
  renderer.setClearColor(0x1a1d22, 1);
  renderer.clear();
  for (const t of tiles) {
    const [x, y, w, h] = t.rect;
    renderer.setViewport(x, y, w, h);
    renderer.setScissor(x, y, w, h);
    cam.aspect = w / h;
    if (t.kind === 'car' || t.kind === 'ghosts') {
      const spec = VEHICLES[t.spec];
      const mesh = meshFor(t.spec);
      for (const m of meshes.values()) {
        studio.remove(m.group);
        if (m.trailerGroup) studio.remove(m.trailerGroup);
      }
      studio.add(mesh.group);
      if (mesh.trailerGroup) studio.add(mesh.trailerGroup);
      if (t.kind === 'ghosts') {
        ghostsFor(t.spec);
        for (const [id, set] of ghostSets) set.group.visible = id === t.spec;
        placeVehicle(spec, mesh, 0);
        frameGhosts(cam, spec);
      } else {
        for (const set of ghostSets.values()) set.group.visible = false;
        frameVehicle(cam, spec, mesh, t.view, spin);
      }
      renderer.render(studio, cam);
    } else if (t.kind === 'circles') {
      const spec = VEHICLES[t.spec];
      // Wide enough that a gentle lock still shows an arc, tight enough that
      // full lock is not a dot.
      const span = spec.wheelbase / Math.tan(spec.maxSteer * Math.abs(t.frac)) + spec.length * 1.6;
      drawCircles(spec, t.frac, span);
      frameLevel(cam, { bounds: { minX: -span, maxX: span, minZ: -span, maxZ: span } }, w / h);
      renderer.render(circleScene, cam);
    } else {
      buildLevel(t.level);
      frameLevel(cam, t.level, w / h);
      renderer.render(levelScene, cam);
    }
  }
  renderer.setScissorTest(false);
  requestAnimationFrame(frame);
}

// --- the same sheet as text -------------------------------------------

// Everything countable about a vehicle or a level, in the fewest characters
// that still name what they are. Read with `agent-browser eval`, not by eye.
function report() {
  const rows = [];
  rows.push('vehicle len width height wheelbase track maxSteer eye look');
  for (const [id, s] of Object.entries(VEHICLES)) {
    const b = s.body;
    rows.push([id, s.length, s.width, s.height, s.wheelbase, s.trackWidth,
      (s.maxSteer * 180 / Math.PI).toFixed(1),
      b ? `${b.eye[0]},${b.eye[1]}` : '-', b ? `${b.look[0]},${b.look[1]}` : '-'].join(' '));
  }
  rows.push('');
  rows.push('level vehicle theme bounds start target objects');
  for (const l of LEVELS) {
    const b = l.bounds;
    rows.push([l.id, l.vehicle, l.theme,
      `${b.maxX - b.minX}x${b.maxZ - b.minZ}`,
      `${l.start.x},${l.start.z}`,
      `${l.target.w}x${l.target.d}`,
      l.objects.length].join(' '));
  }
  return rows.join('\n');
}

// How much of the picture is two surfaces at the same depth: the fault that
// made this page necessary. Every mesh in the vehicle is compared with every
// other for a face plane they share, which is what the depth buffer cannot
// choose between.
function coplanar(id) {
  const mesh = meshFor(id);
  mesh.group.rotation.y = 0;
  mesh.group.updateMatrixWorld(true);
  const planes = [];
  mesh.group.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry.clone().applyMatrix4(o.matrixWorld.clone());
    g.computeVertexNormals();
    const pos = g.attributes.position;
    const nor = g.attributes.normal;
    const seen = new Set();
    for (let i = 0; i < pos.count; i++) {
      const n = [nor.getX(i), nor.getY(i), nor.getZ(i)];
      const d = n[0] * pos.getX(i) + n[1] * pos.getY(i) + n[2] * pos.getZ(i);
      const key = `${n.map((v) => v.toFixed(2)).join(',')}|${d.toFixed(3)}`;
      if (!seen.has(key)) { seen.add(key); planes.push({ key, o: o.userData.inner ? 'lining' : 'shell' }); }
    }
  });
  const by = new Map();
  for (const p of planes) {
    if (!by.has(p.key)) by.set(p.key, new Set());
    by.get(p.key).add(p.o);
  }
  const clashes = [...by.entries()].filter(([, s]) => s.size > 1).map(([k]) => k);
  return `${id}: ${clashes.length} shared plane(s) between shell and lining${clashes.length ? `\n  ${clashes.join('\n  ')}` : ''}`;
}

// Does every object type's `args`/`opts` in src/objects.js actually describe
// the builder it sits next to? Export writes that call, and a wrong entry
// produces a level file that looks right and builds walls at NaN. Calling the
// builder and comparing it with what the editor would have stored is the only
// check that cannot drift from either.
function builders() {
  const out = [];
  for (const [type, def] of Object.entries(SCHEMA)) {
    const o = { type, x: 1, z: -2, ...structuredClone(def.def ?? {}) };
    const pos = def.args.map((k) => o[k]);
    const rest = Object.fromEntries(Object.entries(o).filter(([k]) => k !== 'type' && !def.args.includes(k)));
    const built = OBJECTS[def.fn ?? type](...pos, ...(def.opts ? [rest] : []));
    // One direction only. A builder may derive keys the editor never stores --
    // a pillar is square, so `d` comes from `w` -- and that is the builder
    // doing its job. What must hold is that nothing stored is lost or changed.
    const same = Object.entries(o).every(([k, v]) => JSON.stringify(built[k]) === JSON.stringify(v));
    out.push(`${same ? 'ok  ' : 'BAD '} ${type}`);
    if (!same) out.push(`      stored ${JSON.stringify(o)}\n      built  ${JSON.stringify(built)}`);
  }
  return out.join('\n');
}

// Every mirror has to touch the vehicle it belongs to.
//
// A mirror is placed by hand, in `spec.mirrors`, and it is the one part of a
// vehicle that is not derived from the silhouette — so it is the one part that
// can be specified somewhere the bodywork is not. That is not hypothetical:
// eight of the thirteen were, the worst by 70 cm, and on the cars they hung in
// the air over the bonnet because the windscreen had sloped away beneath them.
// Nothing in the game puts a camera close enough to a parked car's A-pillar to
// show it, which is why it survived to be reported by the player.
//
// The test is the mirror's *front* face, not its centre: on a raked screen the
// front is the corner that leaves the body first. A negative number is how far
// the mirror is buried in the body, which is fine — mirrors have stalks.
function mirrors() {
  const out = [];
  for (const [id, spec] of Object.entries(VEHICLES)) {
    const m = spec.mirrors;
    const b = spec.body;
    if (!m || !b?.top) continue;
    const af = (m.z + m.d / 2 + spec.rearOverhang) / spec.length;
    let up = null;
    for (let i = 0; i < b.top.length - 1; i++) {
      const a = b.top[i];
      const c = b.top[i + 1];
      if (af >= Math.min(a[0], c[0]) && af <= Math.max(a[0], c[0])) {
        up = a[1] + ((af - a[0]) / ((c[0] - a[0]) || 1)) * (c[1] - a[1]);
        break;
      }
    }
    const gap = (m.y + m.h / 2) - (up === null ? -Infinity : up * spec.height);
    out.push({ id, gap: +gap.toFixed(3), floating: gap > 0 });
  }
  const bad = out.filter((o) => o.floating);
  return { ok: bad.length === 0, floating: bad, all: out };
}

window.dev = { report, coplanar, builders, mirrors, VEHICLES, LEVELS };

spinning = new URLSearchParams(location.search).get('spin') === '1';
addEventListener('resize', layout);
addEventListener('hashchange', layout);
layout();
requestAnimationFrame(frame);
