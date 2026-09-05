import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { LEVELS } from './levels.js';
import { VEHICLES, Vehicle, centerOffset } from './vehicle.js';
import { World } from './world.js';
import { createCarMesh, updateCarMesh } from './carMesh.js';
import { CameraRig } from './camera.js';
import { Guides } from './guides.js';
import { Input } from './input.js';
import { Sfx } from './audio.js';
import { Hud, fmtTime } from './hud.js';
import { overlaps, rectInsideRect, rectDistance, corners, clamp } from './geom.js';

const STORE = 'tight-fit.v1';
const PHYS_DT = 1 / 120;

function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE));
    if (raw && typeof raw.unlocked === 'number') return { unlocked: raw.unlocked, best: raw.best ?? {} };
  } catch { /* fresh start */ }
  return { unlocked: 0, best: {} };
}

class Game {
  constructor() {
    this.canvas = document.getElementById('scene');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.95;

    this.scene = new THREE.Scene();
    // A generated room environment gives the paint something to reflect;
    // without it every car reads as flat black under a single directional light.
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    this.camera = new THREE.PerspectiveCamera(52, 1, 0.1, 400);
    this.rig = new CameraRig(this.camera);
    this.world = new World(this.scene);
    this.guides = new Guides(this.scene);
    this.input = new Input();
    this.sfx = new Sfx();
    this.progress = loadProgress();

    this.hud = new Hud({
      play: (i) => this.play(i),
      next: () => this.next(),
      restart: () => { this.restart(); this.hud.showGame(); this.state = 'playing'; },
      resume: () => this.setPaused(false),
      toMenu: () => this.toMenu(),
      unlockAll: () => {
        this.progress.unlocked = LEVELS.length - 1;
        this.save();
        this.hud.renderMenu(this.progress);
      },
      wipe: () => {
        this.progress = { unlocked: 0, best: {} };
        this.save();
        this.hud.renderMenu(this.progress);
      },
    });

    this.state = 'menu';
    this.index = 0;
    this.carMesh = null;
    this.vehicle = null;
    this.time = 0;
    this.clock = new THREE.Clock();
    this.accum = 0;

    addEventListener('resize', () => this.resize());
    addEventListener('blur', () => { if (this.state === 'playing') this.setPaused(true); });
    this.resize();
    this.hud.showMenu(this.progress);
    if (import.meta.env?.DEV) window.game = this;
    this.renderer.setAnimationLoop(() => this.frame());
  }

  save() {
    try { localStorage.setItem(STORE, JSON.stringify(this.progress)); } catch { /* private mode */ }
  }

  resize() {
    const w = innerWidth;
    const h = innerHeight;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // --- level lifecycle -------------------------------------------------

  play(index) {
    this.index = index;
    this.level = LEVELS[index];
    this.spec = VEHICLES[this.level.vehicle];
    this.world.build(this.level);

    if (this.carMesh) this.scene.remove(this.carMesh.group);
    this.carMesh = createCarMesh(this.spec);
    this.scene.add(this.carMesh.group);
    this.vehicle = new Vehicle(this.spec);

    this.hud.setLevel(index, this.level, this.progress.best[this.level.id]);
    this.restart();
    this.hud.showGame();
    this.state = 'playing';
    this.sfx.ensure();
  }

  restart() {
    const s = this.level.start;
    this.vehicle.reset(s.x, s.z, s.yaw);
    this.time = 0;
    this.bumps = 0;
    this.hold = 0;
    this.started = false;
    this.contactCooldown = 0;
    this.rig.reset(this.level.theme, this.spec);
    this.hud.update(this.telemetry(999));
  }

  next() {
    if (this.index + 1 >= LEVELS.length) return this.toMenu();
    this.play(this.index + 1);
  }

  toMenu() {
    this.state = 'menu';
    this.hud.targetArrow(null);
    this.hud.showMenu(this.progress);
  }

  setPaused(on) {
    if (on && this.state === 'playing') {
      this.state = 'paused';
      this.hud.showPause(true);
    } else if (!on && this.state === 'paused') {
      this.state = 'playing';
      this.hud.showPause(false);
    }
  }

  // --- physics ---------------------------------------------------------

  isFree(state) {
    const body = this.vehicle.body(state);
    if (!rectInsideRect(body, this.world.arena)) return false;
    for (const c of this.world.colliders) {
      if (overlaps(body, c, -0.015)) return false;
    }
    return true;
  }

  stepPhysics(dt, input) {
    const car = this.vehicle;
    car.control(dt, input);
    if (car.speed === 0) return;

    const dist = Math.abs(car.speed) * dt;
    const n = clamp(Math.ceil(dist / 0.03), 1, 6);
    const h = dt / n;

    for (let i = 0; i < n; i++) {
      const cand = car.integrate(car.state, h);
      if (this.isFree(cand)) {
        car.state = cand;
        continue;
      }
      // Creep as close to the obstacle as we can before stopping, so the car
      // rests against the wall instead of freezing a few centimetres short.
      let lo = 0;
      let hi = 1;
      for (let k = 0; k < 5; k++) {
        const mid = (lo + hi) / 2;
        if (this.isFree(car.integrate(car.state, h * mid))) lo = mid;
        else hi = mid;
      }
      if (lo > 0) car.state = car.integrate(car.state, h * lo);
      this.onContact(Math.abs(car.speed));
      car.speed = 0;
      break;
    }
  }

  onContact(impact) {
    if (this.contactCooldown > 0) return;
    this.contactCooldown = 0.25;
    this.sfx.bump(clamp(impact / 4, 0.05, 1));
    if (impact > 0.6) {
      this.bumps++;
      this.hud.flash(0.1 + impact * 0.05);
    } else {
      this.hud.flash(0.04);
    }
  }

  nearestGap() {
    const body = this.vehicle.body();
    let min = Infinity;
    for (const c of this.world.colliders) {
      const d = rectDistance(body, c);
      if (d < min) min = d;
    }
    const a = this.world.arena;
    for (const p of corners(body)) {
      min = Math.min(min,
        p.x - (a.x - a.w / 2), (a.x + a.w / 2) - p.x,
        p.z - (a.z - a.d / 2), (a.z + a.d / 2) - p.z);
    }
    return Math.max(0, min);
  }

  // Screen-edge chevron for a target you cannot see — the dock and the gap
  // both put it behind you for most of the level.
  updateTargetArrow() {
    const t = this.world.target;
    const w = innerWidth;
    const h = innerHeight;
    const v = this._tmp ?? (this._tmp = new THREE.Vector3());
    v.set(t.x, 1.2, t.z).project(this.camera);
    const behind = v.z > 1;
    let sx = (v.x * 0.5 + 0.5) * w;
    let sy = (-v.y * 0.5 + 0.5) * h;
    if (behind) { sx = w - sx; sy = h - sy; }

    const m = 54;
    const inside = !behind && sx > m && sx < w - m && sy > m && sy < h - m;
    if (inside) return this.hud.targetArrow(null);

    const cxs = w / 2;
    const cys = h / 2;
    let dx = sx - cxs;
    let dy = sy - cys;
    const len = Math.hypot(dx, dy) || 1;
    dx /= len; dy /= len;
    // walk out from the centre to the inset border
    const tx = dx === 0 ? Infinity : (dx > 0 ? (w - m - cxs) : (m - cxs)) / dx;
    const ty = dy === 0 ? Infinity : (dy > 0 ? (h - m - cys) : (m - cys)) / dy;
    const k = Math.min(tx, ty);
    const car = this.vehicle;
    this.hud.targetArrow({
      x: cxs + dx * k,
      y: cys + dy * k,
      angle: Math.atan2(dx, -dy),
      dist: Math.hypot(t.x - car.x, t.z - car.z),
    });
  }

  telemetry(gap) {
    const car = this.vehicle;
    return {
      time: this.time,
      bumps: this.bumps,
      speed: car.speed,
      steerNorm: car.steer / this.spec.maxSteer,
      gap: gap ?? this.nearestGap(),
      hold: this.hold / 0.6,
    };
  }

  checkParked() {
    const car = this.vehicle;
    const inside = rectInsideRect(car.body(), this.world.target, 0.02);
    if (inside && Math.abs(car.speed) < 0.25) this.hold += PHYS_DT;
    else this.hold = 0;
    return { inside, done: this.hold >= 0.6 };
  }

  finish() {
    this.state = 'won';
    this.sfx.win();
    const id = this.level.id;
    const prev = this.progress.best[id];
    const better = !prev || this.time < prev.time || (this.bumps < prev.bumps && this.time < prev.time * 1.4);
    if (better) this.progress.best[id] = { time: this.time, bumps: this.bumps };
    if (this.index === this.progress.unlocked) this.progress.unlocked = Math.min(LEVELS.length - 1, this.index + 1);
    this.save();

    const underPar = this.time <= this.level.par;
    const rank = this.bumps === 0 && underPar
      ? { label: 'flawless', kicker: 'not a mark on it' }
      : this.bumps === 0
        ? { label: 'clean', kicker: 'parked' }
        : this.bumps <= 2
          ? { label: 'scuffed', kicker: 'parked' }
          : { label: 'rough', kicker: 'parked, eventually' };

    const notes = [];
    if (!underPar) notes.push(`Par is ${fmtTime(this.level.par)}.`);
    if (this.bumps > 0) notes.push(`${this.bumps} contact${this.bumps === 1 ? '' : 's'} over 0.6 m/s.`);
    if (better && prev) notes.push('New best.');
    this.hud.showResult({
      level: this.level,
      index: this.index,
      time: this.time,
      bumps: this.bumps,
      rank,
      note: notes.join(' ') || 'Textbook.',
      isLast: this.index + 1 >= LEVELS.length,
    });
  }

  // --- frame -----------------------------------------------------------

  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const input = this.input;

    if (input.pressed('Escape')) {
      if (this.state === 'playing') this.setPaused(true);
      else if (this.state === 'paused') this.setPaused(false);
    }

    if (this.state === 'playing' || this.state === 'paused' || this.state === 'won') {
      if (input.pressed('KeyR')) {
        this.restart();
        this.hud.showGame();
        this.state = 'playing';
      }
      if (input.pressed('KeyC')) this.hud.toast(`camera: ${this.rig.cycle()}`);
      if (input.pressed('KeyG')) {
        this.guides.setVisible(!this.guides.visible);
        this.hud.toast(`guide lines ${this.guides.visible ? 'on' : 'off'}`);
      }
      if (input.pressed('KeyV')) {
        this.rig.autoFlip = !this.rig.autoFlip;
        this.hud.toast(`reverse camera ${this.rig.autoFlip ? 'auto' : 'fixed'}`);
      }
      if (input.pressed('KeyM')) {
        this.sfx.muted = !this.sfx.muted;
        this.hud.toast(this.sfx.muted ? 'muted' : 'sound on');
      }
      this.rig.handleInput(input);
    }

    if (this.state === 'playing') {
      const drive = input.driving();
      if (!this.started && (drive.throttle || drive.steer)) this.started = true;

      this.accum += dt;
      let steps = 0;
      while (this.accum >= PHYS_DT && steps < 12) {
        this.accum -= PHYS_DT;
        steps++;
        this.stepPhysics(PHYS_DT, drive);
        if (this.started) this.time += PHYS_DT;
        this.contactCooldown = Math.max(0, this.contactCooldown - PHYS_DT);
        const { done } = this.checkParked();
        if (done) { this.finish(); break; }
      }

      const gap = this.nearestGap();
      this.sfx.sensor(gap, performance.now() / 1000);
      this.hud.update(this.telemetry(gap));
      this.updateTargetArrow();
    }

    if (this.vehicle) {
      const car = this.vehicle;
      this.carMesh.group.position.set(car.x, 0, car.z);
      this.carMesh.group.rotation.y = car.yaw;
      updateCarMesh(this.carMesh, this.spec, {
        steer: car.steer,
        spin: car.wheelSpin,
        braking: car.braking,
        reversing: car.speed < -0.05,
      });
      this.rig.update(dt, car, this.spec, this.world);
      this.guides.update(car, this.spec, car.speed < -0.05 ? -1 : 1);
      this.world.animateTarget(performance.now() / 1000, rectInsideRect(car.body(), this.world.target, 0.02));
    }
    this.guides.group.visible = this.guides.visible && this.state !== 'menu';

    this.renderer.render(this.scene, this.camera);
    input.endFrame();
  }
}

new Game();
