import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { LEVELS } from './levels.js';
import { VEHICLES, Vehicle, trailerRect } from './vehicle.js';
import { World } from './world.js';
import { createVehicleMesh, updateVehicleMesh } from './carMesh.js';
import { CameraRig } from './camera.js';
import { Input } from './input.js';
import { Sfx } from './audio.js';
import { Pad, BTN } from './gamepad.js';
import { Hud } from './hud.js';
import { Panels } from './panels.js';
import { Tape } from './rewind.js';
import { load as loadSettings, save as saveSettings, gains } from './settings.js';
import { overlaps, rectInsideRect, rectDistance, corners, clamp } from './geom.js';

// Versioned with the scoring unit. When the unit changes this key changes,
// and there is nothing to migrate — a best in an abandoned unit is not data.
const STORE = 'tight-fit.v4';
const PHYS_DT = 1 / 120;
// How much faster than real time the tape runs backwards. Fast enough to undo
// half a minute without waiting for it, slow enough to release on the frame
// you meant.
const REWIND_RATE = 3;

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
    this.panels = new Panels();
    this.world = new World(this.scene);
    this.scene.add(this.panels.guides.group);
    this.input = new Input();
    this.pad = new Pad();
    this.sfx = new Sfx();
    this.progress = loadProgress();
    this.settings = loadSettings();
    this.gains = gains(this.settings);

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
      openSettings: () => this.openSettings(),
      closeSettings: () => this.closeSettings(),
      setSetting: (id, value) => {
        this.settings[id] = value;
        saveSettings(this.settings);
        // Re-render rather than toggle a class: the menu is generated from the
        // settings, so the settings are the only place the state lives.
        this.gains = gains(this.settings);
        this.hud.renderSettings(this.settings);
        this.hud.setSteerMode(this.settings.steering);
      },
    });

    this.state = 'menu';
    this.index = 0;
    this.navIndex = 0;
    this.navLatch = 0;
    this.padSeen = true;
    this.padWasConnected = false;
    this.carMesh = null;
    this.vehicle = null;
    this.clock = new THREE.Clock();
    this.accum = 0;
    this.tape = new Tape();
    this.rewinding = false;
    this.reversing = false;

    addEventListener('resize', () => this.resize());
    addEventListener('blur', () => { if (this.state === 'playing') this.setPaused(true); });
    this.resize();
    this.hud.showMenu(this.progress);
    this.hud.setSteerMode(this.settings.steering);
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
    this.panels.resize(w, h, this.renderer.getPixelRatio());
  }

  // --- level lifecycle -------------------------------------------------

  play(index) {
    this.index = index;
    this.level = LEVELS[index];
    this.spec = VEHICLES[this.level.vehicle];
    this.world.build(this.level);

    if (this.carMesh) {
      this.scene.remove(this.carMesh.group);
      if (this.carMesh.trailerGroup) this.scene.remove(this.carMesh.trailerGroup);
    }
    this.carMesh = createVehicleMesh(this.spec);
    this.scene.add(this.carMesh.group);
    if (this.carMesh.trailerGroup) this.scene.add(this.carMesh.trailerGroup);
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
    this.bumps = 0;
    this.shunts = 0;
    this.lastDir = 0;
    this.hold = 0;
    this.inside = false;
    this.touching = false;
    this.tape.clear();
    this.rewinding = false;
    this.rig.reset(this.level.theme, this.spec);
    this.hud.update(this.telemetry(this.nearestGap()));
  }

  next() {
    if (this.index + 1 >= LEVELS.length) return this.toMenu();
    this.play(this.index + 1);
  }

  toMenu() {
    this.state = 'menu';
    this.hud.showMenu(this.progress);
  }

  // Settings sit on top of whatever was showing and hand it back on the way
  // out, so the same card serves the level select and a paused level.
  openSettings() {
    if (this.state === 'settings') return;
    this.settingsFrom = this.state;
    this.state = 'settings';
    this.hud.showSettings(this.settings, true);
  }

  closeSettings() {
    if (this.state !== 'settings') return;
    this.hud.showSettings(this.settings, false);
    this.state = this.settingsFrom;
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
    // A jackknifed state is one the cab and the trailer would have to pass
    // through each other to reach. It is refused here rather than clamped in
    // the kinematics, so the vehicle creeps up to the fold and stops against
    // it — the same treatment, and the same code path, as a wall.
    if (state.jackknifed) return false;
    for (const body of this.vehicle.rects(state)) {
      if (!rectInsideRect(body, this.world.arena)) return false;
      for (const c of this.world.colliders) {
        if (overlaps(body, c, -0.015)) return false;
      }
    }
    return true;
  }

  // The rectangle that has to end up in the bay: the trailer, when there is
  // one to back in.
  parkRect(state = this.vehicle) {
    return this.world.target.part === 'trailer'
      ? trailerRect(this.spec, state)
      : this.vehicle.body(state);
  }

  // Everything a step reads and writes, so that running the tape backwards
  // restores the run rather than just the pose (src/rewind.js).
  record() {
    const car = this.vehicle;
    this.tape.push({
      x: car.x, z: car.z, yaw: car.yaw, trailerYaw: car.trailerYaw,
      speed: car.speed, steer: car.steer, wheelSpin: car.wheelSpin,
      shunts: this.shunts, bumps: this.bumps, lastDir: this.lastDir,
      touching: this.touching, hold: this.hold, inside: this.inside,
    });
  }

  restore(f) {
    if (!f) return false;
    const car = this.vehicle;
    car.x = f.x;
    car.z = f.z;
    car.yaw = f.yaw;
    car.trailerYaw = f.trailerYaw;
    car.speed = f.speed;
    car.steer = f.steer;
    car.wheelSpin = f.wheelSpin;
    car.braking = false;
    this.shunts = f.shunts;
    this.bumps = f.bumps;
    this.lastDir = f.lastDir;
    this.touching = f.touching;
    this.hold = f.hold;
    this.inside = f.inside;
    return true;
  }

  // Backwards through the tape at REWIND_RATE, on the same clock the forward
  // steps use, so a second held is a fixed number of steps undone whatever the
  // frame rate is doing.
  stepRewind(dt) {
    this.accum += dt * REWIND_RATE;
    let steps = 0;
    while (this.accum >= PHYS_DT && steps < 12 * REWIND_RATE) {
      this.accum -= PHYS_DT;
      steps++;
      if (!this.restore(this.tape.pop())) break;
    }
  }

  stepPhysics(dt, input) {
    const car = this.vehicle;
    this.record();
    car.control(dt, input);

    // The score is shunts: every time the vehicle actually reverses its
    // direction of travel. Rocking on the spot below 0.2 m/s is not one.
    const dir = car.speed > 0.2 ? 1 : car.speed < -0.2 ? -1 : 0;
    if (dir) {
      if (this.lastDir && dir !== this.lastDir) this.shunts++;
      this.lastDir = dir;
    }

    if (car.speed === 0) return;

    const dist = Math.abs(car.speed) * dt;
    const n = clamp(Math.ceil(dist / 0.03), 1, 6);
    const h = dt / n;

    let hit = false;
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
      hit = true;
      this.onContact(Math.abs(car.speed));
      car.speed = 0;
      break;
    }
    this.touching = hit;
  }

  // A crash is entering contact, not being in it — see DESIGN.md 5. Touching
  // is a state, so grinding along a wall is one crash however long it lasts,
  // and letting go before hitting again is what makes it two. There is no
  // threshold in either speed or time: this game measures neither.
  onContact(impact) {
    if (this.touching) return;
    this.bumps++;
    this.sfx.bump(clamp(impact / 2.5, 0.05, 1));
    this.pad.rumble(clamp(impact / 2.2, 0.15, 1), impact > 0.6 ? 220 : 110);
    this.hud.flash(impact > 0.6 ? 0.1 + impact * 0.05 : 0.05);
  }

  nearestGap() {
    let min = Infinity;
    const a = this.world.arena;
    for (const body of this.vehicle.rects()) {
      for (const c of this.world.colliders) {
        const d = rectDistance(body, c);
        if (d < min) min = d;
      }
      for (const p of corners(body)) {
        min = Math.min(min,
          p.x - (a.x - a.w / 2), (a.x + a.w / 2) - p.x,
          p.z - (a.z - a.d / 2), (a.z + a.d / 2) - p.z);
      }
    }
    return Math.max(0, min);
  }

  telemetry(gap) {
    const car = this.vehicle;
    return {
      shunts: this.shunts,
      bumps: this.bumps,
      gap,
      steer: car.steer / this.spec.maxSteer,
      rewinding: this.rewinding,
      tape: this.tape.len / 120,
      radar: this.rig.mode !== 'cockpit',
      hold: this.hold / 0.6,
      articulation: car.articulation,
      maxArticulation: this.spec.trailer ? this.spec.trailer.maxAngle : 0,
    };
  }

  checkParked() {
    const car = this.vehicle;
    this.inside = rectInsideRect(this.parkRect(), this.world.target, 0.02);
    if (this.inside && Math.abs(car.speed) < 0.25) this.hold += PHYS_DT;
    else this.hold = 0;
    return this.hold >= 0.6;
  }

  finish() {
    this.state = 'won';
    this.sfx.win();
    const id = this.level.id;
    const prev = this.progress.best[id];
    // A crash voids the score but not the progress (DESIGN.md 2). The level is
    // still passed and the next one still unlocks — you are never stuck on a
    // level you cannot drive cleanly — but nothing about the run is recorded,
    // so a best is always a clean run and needs no tie-break to say which of
    // two is better.
    const clean = this.bumps === 0;
    const better = clean && (!prev || this.shunts < prev.shunts);
    if (better) this.progress.best[id] = { shunts: this.shunts };
    if (this.index === this.progress.unlocked) this.progress.unlocked = Math.min(LEVELS.length - 1, this.index + 1);
    this.save();

    // There is nothing left to grade. A run either counts or it does not, and
    // which one it is is the only thing the card has to say about quality.
    const rank = clean
      ? { clean: true, label: 'counts', kicker: 'parked' }
      : { clean: false, label: 'void', kicker: 'parked, but you hit something' };

    const notes = [];
    if (!clean) {
      notes.push(`${this.bumps} crash${this.bumps === 1 ? '' : 'es'}, so this run does not count.`);
    }
    if (better && prev) notes.push('New best.');
    else if (prev) notes.push(`Your best is ${prev.shunts}.`);
    else if (!clean) notes.push('No clean run on this level yet.');
    this.hud.showResult({
      level: this.level,
      shunts: this.shunts,
      bumps: this.bumps,
      rank,
      note: notes.join(' ') || 'Textbook.',
      isLast: this.index + 1 >= LEVELS.length,
    });
  }

  // --- frame -----------------------------------------------------------

  navButtons() {
    const el = this.hud.el;
    const overlay = !el.menu.classList.contains('hidden') ? el.menu
      : !el.result.classList.contains('hidden') ? el.result
        : !el.settings.classList.contains('hidden') ? el.settings
          : !el.pause.classList.contains('hidden') ? el.pause : null;
    return overlay ? [...overlay.querySelectorAll('button:not(:disabled)')] : [];
  }

  padMenu() {
    const btns = this.navButtons();
    if (!btns.length) return;
    if (!btns.includes(document.activeElement)) {
      this.navIndex = Math.min(this.navIndex, btns.length - 1);
      btns[this.navIndex].focus();
    }
    let step = 0;
    if (this.pad.tapped(BTN.RIGHT) || this.pad.tapped(BTN.DOWN)) step = 1;
    if (this.pad.tapped(BTN.LEFT) || this.pad.tapped(BTN.UP)) step = -1;
    const ax = this.pad.pad?.axes[0] ?? 0;
    const ay = this.pad.pad?.axes[1] ?? 0;
    const stick = Math.abs(ax) > 0.6 ? Math.sign(ax) : Math.abs(ay) > 0.6 ? Math.sign(ay) : 0;
    if (stick && !this.navLatch) step = stick;
    this.navLatch = stick !== 0;
    if (step) {
      this.navIndex = (btns.indexOf(document.activeElement) + step + btns.length) % btns.length;
      btns[this.navIndex].focus();
      this.sfx.click();
    }
    if (this.pad.tapped(BTN.A)) {
      const i = btns.indexOf(document.activeElement);
      // Remember where the click happened: choosing a setting re-renders the
      // card, and the button that had focus no longer exists to hand it back.
      if (i >= 0) this.navIndex = i;
      btns[i >= 0 ? i : this.navIndex].click();
    }
    if (this.pad.tapped(BTN.B)) {
      if (this.state === 'settings') this.closeSettings();
      else if (this.state === 'paused') this.setPaused(false);
    }
  }

  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const input = this.input;
    this.pad.poll();
    if (this.pad.connected && !this.padWasConnected) this.hud.toast('controller connected');
    this.padWasConnected = this.pad.connected;

    // The legend names the device you last touched. The pad is the default
    // (DESIGN.md 11), so this only has to notice a hand moving to the keyboard.
    const padDrive = this.pad.driving();
    const padUsed = this.pad.tappedSet.size > 0
      || !!(padDrive && (padDrive.throttle || padDrive.steer || padDrive.brake || padDrive.crawl));
    const keyUsed = input.keys.size > 0 || input.tapped.size > 0;
    if (padUsed !== keyUsed && padUsed !== this.padSeen) {
      this.padSeen = padUsed;
      this.hud.setPadMode(padUsed);
    }

    if (input.pressed('Escape') || this.pad.tapped(BTN.START)) {
      if (this.state === 'settings') this.closeSettings();
      else if (this.state === 'playing') this.setPaused(true);
      else if (this.state === 'paused') this.setPaused(false);
    }

    if (this.state === 'playing' || this.state === 'paused' || this.state === 'won') {
      if (input.pressed('KeyR') || this.pad.tapped(BTN.Y)) {
        this.restart();
        this.hud.showGame();
        this.state = 'playing';
      }
      if (input.pressed('KeyC') || this.pad.tapped(BTN.RB)) this.hud.toast(`view: ${this.rig.cycle()}`);
      if (input.pressed('KeyM') || this.pad.tapped(BTN.LS)) {
        this.sfx.muted = !this.sfx.muted;
        this.hud.toast(this.sfx.muted ? 'muted' : 'sound on');
      }
      this.rig.handleInput(input, this.pad, dt);
    }

    if (this.state !== 'playing' && this.pad.connected) this.padMenu();

    if (this.state === 'playing') {
      const keys = input.driving();
      const drive = padDrive
        ? {
          throttle: Math.abs(padDrive.throttle) > Math.abs(keys.throttle) ? padDrive.throttle : keys.throttle,
          steer: Math.abs(padDrive.steer) > Math.abs(keys.steer) ? padDrive.steer : keys.steer,
          brake: keys.brake || padDrive.brake,
          crawl: keys.crawl || padDrive.crawl,
        }
        : keys;
      drive.steerMode = this.settings.steering;
      drive.throttleMode = this.settings.throttle;
      drive.gains = this.gains;

      // Rewinding replaces the step rather than modifying it: nothing is
      // driven, nothing is scored, and no bay is checked, because every state
      // it visits is one the run already passed through.
      this.rewinding = (keys.rewind || this.pad.button(BTN.X)) && this.tape.len > 0;
      if (this.rewinding) {
        this.stepRewind(dt);
      } else {
        this.accum += dt;
        let steps = 0;
        while (this.accum >= PHYS_DT && steps < 12) {
          this.accum -= PHYS_DT;
          steps++;
          this.stepPhysics(PHYS_DT, drive);
          if (this.checkParked()) { this.finish(); break; }
        }
      }

      // Reverse is a gear, not a speed: the panel comes up when you ask for
      // reverse, before the vehicle has started moving.
      this.reversing = this.vehicle.speed < -0.02 || drive.throttle < -0.1;

      const gap = this.nearestGap();
      // The radar is off in the inside view, along with its gauge.
      if (this.rig.mode !== 'cockpit') this.sfx.sensor(gap, performance.now() / 1000);
      this.hud.update(this.telemetry(gap));
    }

    if (this.vehicle) {
      const car = this.vehicle;
      this.carMesh.group.position.set(car.x, 0, car.z);
      this.carMesh.group.rotation.y = car.yaw;
      if (this.carMesh.trailerGroup) {
        const axle = this.vehicle.trailerAxleWorld();
        this.carMesh.trailerGroup.position.set(axle.x, 0, axle.z);
        this.carMesh.trailerGroup.rotation.y = car.trailerYaw;
      }
      updateVehicleMesh(this.carMesh, this.spec, {
        steer: car.steer,
        spin: car.wheelSpin,
        braking: car.braking,
        reversing: car.speed < -0.05,
      });
      this.rig.update(dt, car, this.spec, this.carMesh.view);
      this.anyPanel = this.panels.show({
        cockpit: this.rig.mode === 'cockpit',
        reversing: this.reversing,
      });
      if (this.anyPanel) this.panels.aim(this.spec, car, this.carMesh.view);
      if (this.reversing) this.panels.guides.update(this.spec, car);
      this.world.animateTarget(performance.now() / 1000, this.inside);
    }

    this.renderer.render(this.scene, this.camera);
    if (this.vehicle && this.anyPanel) this.panels.draw(this.renderer, this.scene);
    input.endFrame();
  }
}

new Game();
