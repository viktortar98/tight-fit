import * as THREE from 'three';
import { VEHICLES, bodyRect } from './vehicle.js';
import { THEMES } from './world.js';
import { SCHEMA, expandOne } from './objects.js';
import { createVehicleMesh } from './carMesh.js';
import { corners } from './geom.js';
import { shippedSource } from './userLevels.js';

// The level editor.
//
// A level is already a list of objects with named parameters (src/objects.js),
// so the editor is not a new description of a level — it is a second way to
// write the one that exists. That is why there is no editor format: what you
// build here is the same data `src/levels.js` holds, and Export prints it in
// that file's own syntax.
//
// Two surfaces, and the division between them is deliberate. The plan view is
// where you see what you have and pick things up; the number panel is where a
// value is actually set. Dragging snaps to 10 cm and is for arranging, because
// DESIGN.md 7 says level geometry is measured rather than eyeballed, and a
// level whose clearances came out of a mouse is exactly the level that
// constraint exists to prevent. The view is the check on the number, not a
// replacement for it.
//
// The plan view is the overhead one for the same reason the game has it:
// collision is 2D, so what is drawn from above is what the vehicle will hit.

const SNAP = 0.1;
const $ = (id) => document.getElementById(id);
const deg = (r) => (r * 180) / Math.PI;
const rad = (d) => (d * Math.PI) / 180;

// The bay slot list offers every vehicle plus empty, and 'trailer' for docks.
const SLOT_IDS = Object.keys(VEHICLES);

function rectOf(o) {
  if (o.type === 'parked') return bodyRect(VEHICLES[o.spec] ?? VEHICLES.hatch, { x: o.x, z: o.z, yaw: o.rot ?? 0 });
  if (o.w == null || o.d == null) return null;
  return { x: o.x, z: o.z, w: o.w, d: o.d, rot: o.rot ?? 0 };
}

// Every rectangle one level object turns into, which is what the pointer is
// tested against. A bay row is picked by clicking any of its bays, because a
// bay row is what the level contains and what a click has to select.
function footprint(o) {
  const { obstacles, paint } = expandOne(o);
  return [...obstacles, ...paint].map(rectOf).filter(Boolean);
}

function inside(r, x, z) {
  const c = Math.cos(r.rot);
  const s = Math.sin(r.rot);
  const dx = x - r.x;
  const dz = z - r.z;
  return Math.abs(dx * c - dz * s) <= r.w / 2 && Math.abs(dx * s + dz * c) <= r.d / 2;
}

// A closed outline on the ground, one per rectangle, in one geometry.
function outline(rects, colour, y) {
  const pts = [];
  for (const r of rects) {
    const c = corners(r);
    for (let i = 0; i < 4; i++) {
      const a = c[i];
      const b = c[(i + 1) % 4];
      pts.push(a.x, y, a.z, b.x, y, b.z);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  return new THREE.LineSegments(g, new THREE.LineBasicMaterial({
    color: colour, transparent: true, opacity: 0.95, depthTest: false, toneMapped: false,
  }));
}

const N = (id, label, step = 0.1) => ({ id, label, kind: 'number', step });

// The three things every level has that are not objects in its list. Objects
// get their fields from src/objects.js; these are the level itself.
const FIELDS = {
  bounds: [N('minX', 'west edge', 0.5), N('maxX', 'east edge', 0.5),
    N('minZ', 'north edge', 0.5), N('maxZ', 'south edge', 0.5)],
  start: [N('x', 'x'), N('z', 'z'), { id: 'yaw', label: 'facing', kind: 'angle' }],
  target: [N('x', 'x'), N('z', 'z'), N('w', 'width'), N('d', 'depth'),
    { id: 'rot', label: 'rotation', kind: 'angle' }],
};

export class Editor {
  constructor(deps) {
    this.d = deps;                 // { scene, camera, canvas, world }
    this.level = null;
    this.sel = null;               // an object in level.objects, or 'start' / 'target'
    this.drag = null;
    this.marks = new THREE.Group();
    this.ghost = null;
    this.d.scene.add(this.marks);
    this.height = 34;
    this.pan = { x: 0, z: 0 };
    this.bind();
  }

  // --- lifecycle -------------------------------------------------------

  open(level, onChange) {
    this.level = level;
    this.onChange = onChange;
    this.sel = null;
    const b = level.bounds;
    this.pan = { x: (b.minX + b.maxX) / 2, z: (b.minZ + b.maxZ) / 2 };
    this.height = this.fit(b);
    this.rebuild();
    $('editor').classList.remove('hidden');
  }

  // High enough that the whole level is in the frame, in both directions. The
  // camera's own field of view and aspect decide it, so opening a level shows
  // the level rather than a fixed amount of ground around its middle.
  fit(b) {
    const cam = this.d.camera;
    const tan = Math.tan((cam.fov * Math.PI) / 360);
    const w = (b.maxX - b.minX) * 1.12;
    const d = (b.maxZ - b.minZ) * 1.12;
    return Math.max(d, w / cam.aspect) / (2 * tan);
  }

  close() {
    $('editor').classList.add('hidden');
    this.clearMarks();
  }

  // The world is rebuilt from the level after every change, which is the only
  // way the picture and the data cannot drift apart. A level is a few dozen
  // objects; rebuilding it is cheaper than keeping a second representation in
  // step with the first.
  rebuild() {
    this.d.world.build(this.level);
    this.showGhost();
    this.mark();
    this.renderPanels();
    this.onChange?.();
  }

  showGhost() {
    if (this.ghost) {
      this.d.scene.remove(this.ghost.group);
      if (this.ghost.trailerGroup) this.d.scene.remove(this.ghost.trailerGroup);
    }
    const spec = VEHICLES[this.level.vehicle] ?? VEHICLES.hatch;
    this.ghost = createVehicleMesh(spec);
    const s = this.level.start;
    this.ghost.group.position.set(s.x, 0, s.z);
    this.ghost.group.rotation.y = s.yaw;
    this.d.scene.add(this.ghost.group);
    if (this.ghost.trailerGroup) {
      this.ghost.trailerGroup.position.set(s.x, 0, s.z);
      this.ghost.trailerGroup.rotation.y = s.yaw;
      this.d.scene.add(this.ghost.trailerGroup);
    }
  }

  clearMarks() {
    for (const m of [...this.marks.children]) {
      this.marks.remove(m);
      m.geometry.dispose();
    }
  }

  // The level's own edge, the start pose and the selection. Everything the
  // editor draws that the game does not.
  mark() {
    this.clearMarks();
    this.marks.add(outline([this.boundsRect()], 0x6d7581, 0.03));
    const spec = VEHICLES[this.level.vehicle] ?? VEHICLES.hatch;
    this.marks.add(outline(
      [bodyRect(spec, { x: this.level.start.x, z: this.level.start.z, yaw: this.level.start.yaw })],
      0x3ddc84, 0.05,
    ));
    const rects = this.selRects();
    if (rects.length) this.marks.add(outline(rects, 0xffb020, 0.06));
  }

  selRects() {
    if (this.sel === 'bounds') return [this.boundsRect()];
    if (this.sel === 'start') {
      const spec = VEHICLES[this.level.vehicle] ?? VEHICLES.hatch;
      return [bodyRect(spec, { x: this.level.start.x, z: this.level.start.z, yaw: this.level.start.yaw })];
    }
    if (this.sel === 'target') return [this.level.target];
    if (this.sel && typeof this.sel === 'object') return footprint(this.sel);
    return [];
  }

  // --- the plan view ---------------------------------------------------

  update() {
    const cam = this.d.camera;
    cam.position.set(this.pan.x, this.height, this.pan.z + 0.001);
    cam.up.set(0, 0, -1);
    cam.lookAt(this.pan.x, 0, this.pan.z);
  }

  // Pointer to the ground, through the same camera the picture came out of.
  ground(ev) {
    const rect = this.d.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((ev.clientX - rect.left) / rect.width) * 2 - 1,
      -((ev.clientY - rect.top) / rect.height) * 2 + 1,
    );
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.d.camera);
    const hit = new THREE.Vector3();
    return ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit) ? hit : null;
  }

  pick(x, z) {
    if (inside(this.level.target, x, z)) return 'target';
    const spec = VEHICLES[this.level.vehicle] ?? VEHICLES.hatch;
    if (inside(bodyRect(spec, { x: this.level.start.x, z: this.level.start.z, yaw: this.level.start.yaw }), x, z)) {
      return 'start';
    }
    // Last drawn wins, so an object placed on top of another is the one a
    // click gets — the same rule the eye is using to read the picture.
    for (let i = this.level.objects.length - 1; i >= 0; i--) {
      const o = this.level.objects[i];
      if (footprint(o).some((r) => inside(r, x, z))) return o;
    }
    return null;
  }

  bind() {
    const canvas = this.d.canvas;
    canvas.addEventListener('pointerdown', (ev) => {
      if (!this.level || $('editor').classList.contains('hidden')) return;
      const p = this.ground(ev);
      if (!p) return;
      if (ev.button !== 0 || ev.shiftKey) {
        this.drag = { mode: 'pan', x: ev.clientX, y: ev.clientY, from: { ...this.pan } };
        canvas.setPointerCapture(ev.pointerId);
        return;
      }
      const hit = this.pick(p.x, p.z);
      this.select(hit);
      if (hit) {
        const at = this.posOf(hit);
        this.drag = { mode: 'move', grab: { x: p.x - at.x, z: p.z - at.z } };
        canvas.setPointerCapture(ev.pointerId);
      }
    });
    canvas.addEventListener('pointermove', (ev) => {
      if (!this.drag) return;
      if (this.drag.mode === 'pan') {
        const k = this.height / canvas.clientHeight * 1.1;
        this.pan.x = this.drag.from.x - (ev.clientX - this.drag.x) * k;
        this.pan.z = this.drag.from.z - (ev.clientY - this.drag.y) * k;
        return;
      }
      const p = this.ground(ev);
      if (!p) return;
      const snap = (v) => Math.round(v / SNAP) * SNAP;
      this.setPos(this.sel, snap(p.x - this.drag.grab.x), snap(p.z - this.drag.grab.z));
      this.mark();
      this.renderFields();
    });
    const end = (ev) => {
      if (!this.drag) return;
      const moved = this.drag.mode === 'move';
      this.drag = null;
      try { canvas.releasePointerCapture(ev.pointerId); } catch { /* not captured */ }
      if (moved) this.rebuild();
    };
    canvas.addEventListener('pointerup', end);
    canvas.addEventListener('pointercancel', end);
    canvas.addEventListener('wheel', (ev) => {
      if (!this.level || $('editor').classList.contains('hidden')) return;
      ev.preventDefault();
      this.height = Math.min(160, Math.max(8, this.height * (ev.deltaY > 0 ? 1.12 : 0.89)));
    }, { passive: false });
    addEventListener('keydown', (ev) => {
      if (!this.level || $('editor').classList.contains('hidden')) return;
      if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'SELECT') return;
      if ((ev.key === 'Delete' || ev.key === 'Backspace') && typeof this.sel === 'object' && this.sel) {
        this.removeSelected();
      }
      // Rotation is a quarter turn from the keyboard and any angle from the
      // panel: the levels that exist are built on right angles.
      if (ev.key === '[' || ev.key === ']') {
        const step = rad(ev.key === ']' ? 15 : -15);
        const t = this.sel;
        if (t === 'start') this.level.start.yaw += step;
        else if (t === 'target') this.level.target.rot = (this.level.target.rot ?? 0) + step;
        // Only what can be turned. A cone and a pillar are square and their
        // builders take no angle, so a rotation on one would be a number the
        // level carried and nothing read.
        else if (t && typeof t === 'object') {
          if (!SCHEMA[t.type]?.fields.some((f) => f.id === 'rot')) return;
          t.rot = (t.rot ?? 0) + step;
        }
        else return;
        this.rebuild();
      }
    });
  }

  boundsRect() {
    const b = this.level.bounds;
    return {
      x: (b.minX + b.maxX) / 2, z: (b.minZ + b.maxZ) / 2,
      w: b.maxX - b.minX, d: b.maxZ - b.minZ, rot: 0,
    };
  }

  posOf(t) {
    if (t === 'bounds') return this.level.bounds;
    if (t === 'start') return this.level.start;
    if (t === 'target') return this.level.target;
    return t;
  }

  setPos(t, x, z) {
    const o = this.posOf(t);
    o.x = +x.toFixed(3);
    o.z = +z.toFixed(3);
  }

  select(t) {
    this.sel = t;
    this.mark();
    this.renderPanels();
  }

  removeSelected() {
    const i = this.level.objects.indexOf(this.sel);
    if (i < 0) return;
    this.level.objects.splice(i, 1);
    this.sel = null;
    this.rebuild();
  }

  // A new object starts as exactly the keys its builder reads (the `def` in
  // src/objects.js), and lands in the middle of the view, which is where the
  // person adding one is looking.
  add(type) {
    const def = structuredClone(SCHEMA[type].def ?? {});
    if (type === 'parked') def.spec = this.level.vehicle;
    const o = { type, x: +this.pan.x.toFixed(2), z: +this.pan.z.toFixed(2), ...def };
    this.level.objects.push(o);
    this.sel = o;
    this.rebuild();
  }

  // --- the panels ------------------------------------------------------

  renderPanels() {
    this.renderHeader();
    this.renderList();
    this.renderFields();
  }

  renderHeader() {
    const l = this.level;
    $('ed-name').value = l.name;
    const veh = $('ed-vehicle');
    if (!veh.options.length) {
      for (const id of SLOT_IDS) veh.add(new Option(VEHICLES[id].name, id));
    }
    veh.value = l.vehicle;
    const th = $('ed-theme');
    if (!th.options.length) for (const id of Object.keys(THEMES)) th.add(new Option(id, id));
    th.value = l.theme;
    $('ed-reset').classList.toggle('hidden', !shippedSource(l));
  }

  renderList() {
    const list = $('ed-list');
    list.innerHTML = '';
    const row = (label, target, note) => {
      const b = document.createElement('button');
      b.className = `ed-row${this.sel === target ? ' on' : ''}`;
      b.innerHTML = `<b>${label}</b>${note ? `<span>${note}</span>` : ''}`;
      b.onclick = () => this.select(target);
      list.appendChild(b);
    };
    const b = this.level.bounds;
    row('Level bounds', 'bounds', `${(b.maxX - b.minX).toFixed(1)} × ${(b.maxZ - b.minZ).toFixed(1)} m`);
    row('Start', 'start', `${this.level.start.x.toFixed(1)}, ${this.level.start.z.toFixed(1)}`);
    row('Target bay', 'target', `${this.level.target.w} × ${this.level.target.d}`);
    this.level.objects.forEach((o, i) => {
      const s = SCHEMA[o.type];
      row(s ? s.name : o.type, o, `${i + 1} · ${o.x.toFixed(1)}, ${o.z.toFixed(1)}`);
    });
  }

  renderFields() {
    const box = $('ed-fields');
    box.innerHTML = '';
    const t = this.sel;
    if (!t) { box.innerHTML = '<p class="ed-hint">Click something in the plan, or add one.</p>'; return; }

    const target = this.posOf(t);
    const fields = FIELDS[t] ?? SCHEMA[t.type]?.fields ?? [];

    for (const f of fields) box.appendChild(this.field(target, f));

    if (typeof t === 'object') {
      const del = document.createElement('button');
      del.className = 'ed-del';
      del.textContent = 'Remove this object';
      del.onclick = () => this.removeSelected();
      box.appendChild(del);
    }
  }

  field(target, f) {
    const wrap = document.createElement('label');
    wrap.className = 'ed-field';
    wrap.innerHTML = `<span>${f.label}</span>`;
    const commit = () => this.rebuild();

    if (f.kind === 'number' || f.kind === 'angle') {
      const input = document.createElement('input');
      input.type = 'number';
      input.step = f.kind === 'angle' ? 5 : f.step;
      const raw = target[f.id] ?? 0;
      input.value = f.kind === 'angle' ? deg(raw).toFixed(1).replace(/\.0$/, '') : raw;
      input.oninput = () => {
        const v = Number(input.value);
        if (Number.isNaN(v)) return;
        target[f.id] = f.kind === 'angle' ? rad(v) : v;
        this.mark();
      };
      input.onchange = commit;
      wrap.appendChild(input);
    } else if (f.kind === 'vehicle') {
      const sel = document.createElement('select');
      if (f.empty) sel.add(new Option('— empty —', ''));
      for (const id of SLOT_IDS) sel.add(new Option(VEHICLES[id].name, id));
      sel.value = target[f.id] ?? '';
      sel.onchange = () => { target[f.id] = sel.value || null; commit(); };
      wrap.appendChild(sel);
    } else if (f.kind === 'sides') {
      const box = document.createElement('div');
      box.className = 'ed-set';
      for (const side of ['front', 'back', 'left', 'right']) {
        const b = document.createElement('button');
        const on = (target[f.id] ?? []).includes(side);
        b.className = on ? 'on' : '';
        b.textContent = side;
        b.onclick = () => {
          const cur = new Set(target[f.id] ?? []);
          if (cur.has(side)) cur.delete(side); else cur.add(side);
          target[f.id] = [...cur];
          commit();
        };
        box.appendChild(b);
      }
      wrap.appendChild(box);
    } else if (f.kind === 'slots') {
      const box = document.createElement('div');
      box.className = 'ed-slots';
      const slots = target[f.id] ?? [];
      slots.forEach((v, i) => {
        const sel = document.createElement('select');
        sel.add(new Option('empty', ''));
        if (f.of === 'trailer') sel.add(new Option('trailer', 'trailer'));
        else for (const id of SLOT_IDS) sel.add(new Option(VEHICLES[id].name, id));
        sel.value = v ?? '';
        sel.onchange = () => { slots[i] = sel.value || null; commit(); };
        box.appendChild(sel);
      });
      const less = document.createElement('button');
      less.textContent = '−';
      less.onclick = () => { slots.pop(); commit(); };
      const more = document.createElement('button');
      more.textContent = '+';
      more.onclick = () => { slots.push(null); commit(); };
      box.append(less, more);
      wrap.appendChild(box);
    }
    return wrap;
  }

  // --- export ----------------------------------------------------------

  // The syntax src/levels.js is written in, not JSON: what comes out is meant
  // to be pasted into that file, and the composites are what a person reads a
  // level as. Angles come out as expressions where they are recognisable ones.
  code() {
    const l = this.level;
    const n = (v) => (Number.isInteger(v) ? String(v) : String(+Number(v).toFixed(3)));
    const angle = (r) => {
      const half = r / Math.PI;
      const known = { 0: '0', 1: 'Math.PI', '-1': '-Math.PI', 0.5: 'P2', '-0.5': '-P2' };
      const k = +half.toFixed(6);
      // levels.js has no degree helper, and adding one it might not use would
      // be an unused binding in that file. An odd angle prints as the
      // expression that produces it.
      return known[k] ?? `(${+deg(r).toFixed(2)} * Math.PI) / 180`;
    };
    const val = (k, v) => {
      if (k === 'rot' || k === 'yaw') return angle(v);
      if (v === null) return 'null';
      if (typeof v === 'string') return `'${v}'`;
      if (Array.isArray(v)) return `[${v.map((e) => val('', e)).join(', ')}]`;
      return n(v);
    };
    // Each builder is called the way it is declared: some take their size
    // positionally and the rest in an object, some take everything
    // positionally. src/objects.js says which, next to the builder.
    const obj = (o) => {
      const def = SCHEMA[o.type] ?? { args: ['x', 'z'], opts: true };
      const pos = def.args.map((k) => val(k, o[k]));
      const rest = Object.entries(o)
        .filter(([k]) => k !== 'type' && !def.args.includes(k))
        .filter(([k, v]) => !(k === 'rot' && !v));
      const tail = def.opts && rest.length
        ? `, { ${rest.map(([k, v]) => `${k}: ${val(k, v)}`).join(', ')} }`
        : '';
      return `      ${def.fn ?? o.type}(${pos.join(', ')}${tail}),`;
    };
    const b = l.bounds;
    return `  {
    id: '${l.id}',
    name: '${l.name}',
    vehicle: '${l.vehicle}',
    theme: '${l.theme}',
    bounds: { minX: ${n(b.minX)}, maxX: ${n(b.maxX)}, minZ: ${n(b.minZ)}, maxZ: ${n(b.maxZ)} },
    start: { x: ${n(l.start.x)}, z: ${n(l.start.z)}, yaw: ${angle(l.start.yaw)} },
    target: { x: ${n(l.target.x)}, z: ${n(l.target.z)}, w: ${n(l.target.w)}, d: ${n(l.target.d)}, rot: ${angle(l.target.rot ?? 0)} },
    objects: [
${l.objects.map(obj).join('\n')}
    ],
  },`;
  }
}
