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
      shunts: $('stat-shunts'), bumps: $('stat-bumps'), best: $('stat-best'),
      sensorFill: $('sensor-fill'), sensorText: $('sensor-text'),
      hold: $('hold'), holdFill: $('hold-fill'), toast: $('toast'), flash: $('flash'),
      grid: $('level-grid'),
      settings: $('settings'), settingsList: $('settings-list'),
      steerLegend: $('steer-legend'),
      pTitle: $('pause-title'),
      rKicker: $('result-kicker'), rTitle: $('result-title'), rShunts: $('result-shunts'),
      rBumps: $('result-bumps'), rRank: $('result-rank'), rNote: $('result-note'),
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
    $('btn-settings').onclick = () => handlers.openSettings();
    $('btn-pause-settings').onclick = () => handlers.openSettings();
    $('btn-settings-back').onclick = () => handlers.closeSettings();

    // Pad glyphs are what the legend shows until there is evidence otherwise:
    // this game is played on a controller. Touching the keyboard is that
    // evidence; plugging a pad back in (setPadMode) undoes it.
    addEventListener('keydown', () => this.setPadMode(false));

    this._toastTimer = 0;
  }

  renderMenu(progress) {
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

  showMenu(progress) {
    this.renderMenu(progress);
    this.el.menu.classList.remove('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.settings.classList.add('hidden');
    this.el.hud.classList.add('hidden');
  }

  showGame() {
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.settings.classList.add('hidden');
    this.el.hud.classList.remove('hidden');
  }

  showPause(on) {
    this.el.pause.classList.toggle('hidden', !on);
  }

  setLevel(index, level, best) {
    this.el.lvlLabel.textContent =
      `${String(index + 1).padStart(2, '0')} / ${LEVELS.length} · ${level.name}`;
    this.el.best.textContent = best ? `${best.shunts}` : '—';
    this.el.artic.classList.toggle('hidden', !VEHICLES[level.vehicle].trailer);
    this.el.pTitle.textContent = level.name;
  }

  // `on` means "show the pad legend", not "a pad exists".
  setPadMode(on) {
    this.el.keysPad.classList.toggle('hidden', !on);
    this.el.keysKb.classList.toggle('hidden', on);
  }

  update(s) {
    this.el.shunts.textContent = s.shunts;
    this.el.bumps.textContent = s.bumps;
    this.el.bumps.parentElement.classList.toggle('hot', s.bumps > 0);

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

    this.el.hold.classList.toggle('hidden', s.hold <= 0);
    this.el.holdFill.style.width = `${Math.min(100, s.hold * 100)}%`;
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

  showResult({ level, shunts, bumps, rank, note, isLast }) {
    this.el.rKicker.textContent = rank.kicker;
    // The kicker is the accent colour, which reads as approval. A voided run
    // must not wear it.
    this.el.rKicker.classList.toggle('void', !rank.clean);
    this.el.rTitle.textContent = level.name;
    this.el.rShunts.textContent = shunts;
    this.el.rBumps.textContent = bumps;
    this.el.rRank.textContent = rank.label;
    this.el.rNote.textContent = note;
    this.el.btnNext.textContent = isLast ? 'Back to levels' : 'Next level';
    this.el.result.classList.remove('hidden');
  }
}
