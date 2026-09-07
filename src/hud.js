import { LEVELS } from './levels.js';
import { VEHICLES } from './vehicle.js';
import { SETTINGS } from './settings.js';

const $ = (id) => document.getElementById(id);

export class Hud {
  constructor(handlers) {
    this.h = handlers;
    this.el = {
      hud: $('hud'), menu: $('menu'), result: $('result'), pause: $('pause'),
      lvlLabel: $('lvl-label'),
      keysKb: $('keys-kb'), keysPad: $('keys-pad'),
      artic: $('artic'), articDot: $('artic-dot'), articLabel: $('artic-label'),
      shunts: $('stat-shunts'), collisions: $('stat-collisions'), best: $('stat-best'),
      sensor: $('sensor'), sensorFill: $('sensor-fill'), sensorText: $('sensor-text'),
      finish: $('finish'), finishKey: $('finish-key'), toast: $('toast'), flash: $('flash'),
      wheelRot: $('wheel-rot'), rewind: $('rewind'), rewindLeft: $('rewind-left'),
      grid: $('level-grid'), userGrid: $('user-grid'), editor: $('editor'),
      settings: $('settings'), settingsList: $('settings-list'),
      steerLegend: $('steer-legend'),
      pTitle: $('pause-title'), pVeh: $('pause-veh'),
      rKicker: $('result-kicker'), rTitle: $('result-title'), rShunts: $('result-shunts'),
      rCollisions: $('result-collisions'), rRank: $('result-rank'), rNote: $('result-note'),
      rVeh: $('result-veh'),
      btnNext: $('btn-next'),
    };

    $('btn-next').onclick = () => handlers.next();
    $('btn-retry').onclick = () => handlers.restart();
    $('btn-menu').onclick = () => handlers.toMenu();
    $('btn-resume').onclick = () => handlers.resume();
    $('btn-restart').onclick = () => handlers.restart();
    $('btn-quit').onclick = () => handlers.toMenu();
    $('unlock-all').onclick = () => handlers.unlockAll();
    $('wipe').onclick = () => handlers.wipe();
    $('new-level').onclick = () => handlers.newLevel();
    // A copy is made by picking the level to copy, and the picker resets
    // itself: it is an action, not a state, and it must be usable twice.
    $('copy-level').onchange = (e) => {
      const i = Number(e.target.value);
      e.target.value = '';
      if (Number.isInteger(i) && i >= 0) handlers.copyLevel(i);
    };
    $('btn-settings').onclick = () => handlers.openSettings();
    $('btn-pause-settings').onclick = () => handlers.openSettings();
    $('btn-settings-back').onclick = () => handlers.closeSettings();

    // Pad glyphs are what the legend shows until there is evidence otherwise:
    // this game is played on a controller. Touching the keyboard is that
    // evidence; plugging a pad back in (setPadMode) undoes it.
    addEventListener('keydown', () => this.setPadMode(false));

    this._toastTimer = 0;
  }

  renderMenu(progress, userLevels = [], userBests = {}) {
    this.el.grid.innerHTML = '';
    LEVELS.forEach((lvl, i) => {
      const unlocked = i <= progress.unlocked;
      const best = progress.best[lvl.id];
      const b = document.createElement('button');
      b.className = `tile${unlocked ? '' : ' locked'}`;
      b.disabled = !unlocked;
      b.innerHTML = `<span class="veh">${VEHICLES[lvl.vehicle].name}</span>
        <span class="n">${String(i + 1).padStart(2, '0')}</span>
        <span class="t">${unlocked ? lvl.name : 'Locked'}</span>
        <span class="m">${unlocked
          ? (best ? `your best: ${best.shunts}` : 'not parked yet')
          : 'finish the one before'}</span>`;
      b.onclick = () => this.h.play(i);
      this.el.grid.appendChild(b);
    });
    this.renderUser(userLevels, userBests);
  }

  // The player's own levels. A tile is two buttons rather than one, because a
  // level you wrote has two things you do to it and neither is the obvious
  // one: playing it and going back into it are equally likely.
  renderUser(userLevels, userBests) {
    const pick = $('copy-level');
    pick.innerHTML = '';
    pick.add(new Option('a shipped level…', ''));
    // Every shipped level, not only the unlocked ones. The editor is a
    // sandbox: taking a level apart is not a reward for having beaten it, and
    // a designer who wants to see how the last one is built should not have to
    // play their way there first.
    LEVELS.forEach((lvl, i) => pick.add(new Option(lvl.name, String(i))));
    this.el.userGrid.innerHTML = '';
    for (const lvl of userLevels) {
      const best = userBests[lvl.id];
      const tile = document.createElement('div');
      tile.className = 'tile own';
      const play = document.createElement('button');
      play.className = 'own-play';
      play.innerHTML = `<span class="veh">${VEHICLES[lvl.vehicle]?.name ?? lvl.vehicle}</span>
        <span class="t">${lvl.name}</span>
        <span class="m">${best ? `your best: ${best.shunts}` : 'not parked yet'}</span>`;
      play.onclick = () => this.h.playUser(lvl.id);
      const edit = document.createElement('button');
      edit.className = 'own-edit';
      edit.textContent = 'edit';
      edit.onclick = () => this.h.edit(lvl.id);
      tile.append(play, edit);
      this.el.userGrid.appendChild(tile);
    }
    if (!userLevels.length) {
      this.el.userGrid.innerHTML = '<p class="sub-note">Nothing built yet.</p>';
    }
  }

  // The whole menu is generated from the SETTINGS table, so a new setting is
  // a new entry there and nothing here.
  renderSettings(settings) {
    this.el.settingsList.innerHTML = '';
    for (const s of SETTINGS) {
      // A setting that is meaningless under the current mode is shown greyed
      // rather than removed: a menu whose rows move as you use it is harder to
      // navigate than one that admits a row is inert.
      const inert = s.when ? !s.when(settings) : false;
      const box = document.createElement('div');
      box.className = `setting${inert ? ' inert' : ''}`;
      box.innerHTML = `<span class="cap">${s.name}</span>`
        + (s.note ? `<p class="hint">${s.note}</p>` : '');
      const opts = document.createElement('div');
      opts.className = 'opts';
      opts.setAttribute('role', 'radiogroup');
      opts.setAttribute('aria-label', s.name);
      for (const v of s.values) {
        const b = document.createElement('button');
        b.className = s.note ? 'opt narrow' : 'opt';
        b.setAttribute('role', 'radio');
        b.setAttribute('aria-checked', String(settings[s.id] === v.id));
        b.innerHTML = `<span class="on">${settings[s.id] === v.id ? 'on' : 'off'}</span>
          <b>${v.name}</b>${v.note ? `<p class="note">${v.note}</p>` : ''}`;
        b.disabled = inert;
        b.onclick = () => this.h.setSetting(s.id, v.id);
        opts.appendChild(b);
      }
      box.appendChild(opts);
      this.el.settingsList.appendChild(box);
    }
  }

  showSettings(settings, on) {
    if (on) this.renderSettings(settings);
    this.el.settings.classList.toggle('hidden', !on);
  }

  // The pad legend names the stick's job, and the two modes give it different
  // jobs. Nothing else on screen changes with the mode.
  setSteerMode(mode) {
    if (this.el.steerLegend) {
      this.el.steerLegend.textContent = mode === 'rate' ? 'turn wheel' : 'steer';
    }
  }

  showMenu(progress, userLevels, userBests) {
    this.renderMenu(progress, userLevels, userBests);
    this.el.menu.classList.remove('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.settings.classList.add('hidden');
    this.el.hud.classList.add('hidden');
    this.el.editor.classList.add('hidden');
  }

  // The editor gets the whole screen: none of the driving readouts mean
  // anything when there is nothing being driven.
  showEditor() {
    for (const k of ['menu', 'result', 'pause', 'settings', 'hud']) {
      this.el[k].classList.add('hidden');
    }
  }

  showGame() {
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.settings.classList.add('hidden');
    this.el.editor.classList.add('hidden');
    this.el.hud.classList.remove('hidden');
  }

  showPause(on) {
    this.el.pause.classList.toggle('hidden', !on);
  }

  // A level the player wrote has no number in the shipped series, so it is labelled
  // by where it came from instead.
  //
  // The vehicle is named everywhere the level is named — the tile, the play
  // HUD, the pause card and the result card. Decided by the user, against the
  // derivation in DESIGN.md 12 that put it only on the tile: on several of the
  // shipped levels the vehicle *is* what the level is, so naming it is naming the
  // level and not labelling the car.
  setLevel(index, level, best) {
    const veh = VEHICLES[level.vehicle] ?? { name: level.vehicle };
    this.el.lvlLabel.textContent = index < 0
      ? `your level · ${level.name} · ${veh.name}`
      : `${String(index + 1).padStart(2, '0')} / ${LEVELS.length} · ${level.name} · ${veh.name}`;
    this.el.best.textContent = best ? `${best.shunts}` : '—';
    this.el.artic.classList.toggle('hidden', !veh.trailer);
    this.el.pTitle.textContent = level.name;
    this.el.pVeh.textContent = veh.name;
    this.el.rVeh.textContent = veh.name;
  }

  // `on` means "show the pad legend", not "a pad exists".
  setPadMode(on) {
    this.el.keysPad.classList.toggle('hidden', !on);
    this.el.keysKb.classList.toggle('hidden', on);
    this.el.finishKey.textContent = on ? 'B' : 'Enter';
  }

  update(s) {
    this.el.shunts.textContent = s.shunts;
    this.el.collisions.textContent = s.collisions;
    this.el.collisions.parentElement.classList.toggle('hot', s.collisions > 0);

    // The proximity sensor is an aid the inside view deliberately does without
    // (DESIGN.md 12): from the driver's seat you get the mirrors, the reverse
    // camera and your own eyes, which is what a real driver has.
    this.el.sensor.classList.toggle('hidden', !s.radar);

    const d = s.gap;
    const pct = Math.max(0, Math.min(1, 1 - d / 1.5));
    this.el.sensorFill.style.width = `${pct * 100}%`;
    const col = d < 0.15 ? 'var(--danger)' : d < 0.45 ? 'var(--warn)' : 'var(--accent)';
    this.el.sensorFill.style.background = col;
    this.el.sensorText.textContent = d > 1.5 ? 'clear' : `${d.toFixed(2)} m`;
    this.el.sensorText.style.color = d < 0.15 ? 'var(--danger)' : 'var(--dim)';

    if (s.maxArticulation) {
      const norm = s.articulation / s.maxArticulation;
      this.el.articDot.style.transform = `translateX(${-norm * 42}px)`;
      const mag = Math.abs(norm);
      this.el.artic.classList.toggle('warn', mag > 0.6 && mag <= 0.88);
      this.el.artic.classList.toggle('bad', mag > 0.88);
      this.el.articLabel.textContent = mag > 0.88 ? 'jackknife' : 'trailer';
    }

    // A steering wheel turns much further than the road wheels do; what the
    // number has to be is legible at a glance and never wrapped past vertical,
    // so full lock is a bit under half a turn. Positive steer is a left turn
    // and a rotation is clockwise, hence the sign.
    //
    // Set as a CSS property with a unit, on the svg itself. As a `transform`
    // attribute on a group it did not turn about the wheel's centre: at full
    // lock the graphic left the 42px gauge entirely.
    this.el.wheelRot.style.transform = `rotate(${-s.steer * 140}deg)`;

    this.el.rewind.classList.toggle('hidden', !s.rewinding);
    if (s.rewinding) this.el.rewindLeft.textContent = s.tape.toFixed(1);

    // Being in the bay and stopped is not the end of the level; saying so is
    // (DESIGN.md 20). The prompt is the only place the game says which button.
    this.el.finish.classList.toggle('hidden', !s.canFinish);
  }

  toast(msg) {
    this.el.toast.textContent = msg;
    this.el.toast.classList.add('on');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.el.toast.classList.remove('on'), 1400);
  }

  flash(strength) {
    const el = this.el.flash;
    el.style.transition = 'none';
    el.style.opacity = String(Math.min(0.34, strength));
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.35s';
      el.style.opacity = '0';
    });
  }

  showResult({ level, shunts, collisions, rank, note, isLast }) {
    this.el.rKicker.textContent = rank.kicker;
    // The kicker is the accent colour, which reads as approval. A voided run
    // must not wear it.
    this.el.rKicker.classList.toggle('void', !rank.clean);
    this.el.rTitle.textContent = level.name;
    this.el.rShunts.textContent = shunts;
    this.el.rCollisions.textContent = collisions;
    this.el.rRank.textContent = rank.label;
    this.el.rNote.textContent = note;
    this.el.btnNext.textContent = isLast ? 'Back to levels' : 'Next level';
    this.el.result.classList.remove('hidden');
  }
}
