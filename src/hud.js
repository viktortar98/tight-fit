import { LEVELS } from './levels.js';
import { VEHICLES } from './vehicle.js';

const $ = (id) => document.getElementById(id);

export function fmtTime(s) {
  if (s == null) return '—';
  return s < 60 ? `${s.toFixed(1)}s` : `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, '0')}`;
}

export class Hud {
  constructor(handlers) {
    this.h = handlers;
    this.el = {
      hud: $('hud'), menu: $('menu'), result: $('result'), pause: $('pause'),
      num: $('lvl-num'), name: $('lvl-name'), hint: $('lvl-hint'),
      time: $('stat-time'), bumps: $('stat-bumps'), best: $('stat-best'),
      gear: $('gear'), speedFill: $('speed-fill'), speedText: $('speed-text'),
      steerDot: $('steer-dot'), sensorFill: $('sensor-fill'), sensorText: $('sensor-text'),
      hold: $('hold'), holdFill: $('hold-fill'), toast: $('toast'), flash: $('flash'),
      grid: $('level-grid'), tArrow: $('target-arrow'),
      rKicker: $('result-kicker'), rTitle: $('result-title'), rTime: $('result-time'),
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
        <span class="m">${best ? `${fmtTime(best.time)} &middot; ${best.bumps} bump${best.bumps === 1 ? '' : 's'}` : unlocked ? 'not parked yet' : 'finish the one before'}</span>`;
      b.onclick = () => this.h.play(i);
      this.el.grid.appendChild(b);
    });
  }

  showMenu(progress) {
    this.renderMenu(progress);
    this.el.menu.classList.remove('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.hud.classList.add('hidden');
  }

  showGame() {
    this.el.menu.classList.add('hidden');
    this.el.result.classList.add('hidden');
    this.el.pause.classList.add('hidden');
    this.el.hud.classList.remove('hidden');
  }

  showPause(on) {
    this.el.pause.classList.toggle('hidden', !on);
  }

  setLevel(index, level, best) {
    this.el.num.textContent = `${String(index + 1).padStart(2, '0')} / ${LEVELS.length}`;
    this.el.name.textContent = level.name;
    this.el.hint.textContent = level.hint;
    this.el.best.textContent = best ? fmtTime(best.time) : '—';
  }

  update(s) {
    this.el.time.textContent = s.time.toFixed(1);
    this.el.bumps.textContent = s.bumps;
    this.el.bumps.parentElement.classList.toggle('hot', s.bumps > 0);

    const kmh = Math.abs(s.speed) * 3.6;
    this.el.speedFill.style.width = `${Math.min(100, (kmh / 26) * 100)}%`;
    this.el.speedText.textContent = `${kmh.toFixed(1)} km/h`;

    const gear = s.speed > 0.15 ? 'D' : s.speed < -0.15 ? 'R' : 'N';
    this.el.gear.textContent = gear;
    this.el.gear.className = gear.toLowerCase();

    this.el.steerDot.style.transform = `translateX(${-s.steerNorm * 42}px)`;

    const d = s.gap;
    const pct = Math.max(0, Math.min(1, 1 - d / 1.5));
    this.el.sensorFill.style.width = `${pct * 100}%`;
    const col = d < 0.15 ? 'var(--danger)' : d < 0.45 ? 'var(--warn)' : 'var(--accent)';
    this.el.sensorFill.style.background = col;
    this.el.sensorText.textContent = d > 1.5 ? 'clear' : `${d.toFixed(2)} m`;
    this.el.sensorText.style.color = d < 0.15 ? 'var(--danger)' : 'var(--dim)';

    this.el.hold.classList.toggle('hidden', s.hold <= 0);
    this.el.holdFill.style.width = `${Math.min(100, s.hold * 100)}%`;
  }

  targetArrow(pos) {
    const el = this.el.tArrow;
    if (!pos) { el.classList.add('hidden'); return; }
    el.classList.remove('hidden');
    el.style.left = `${pos.x}px`;
    el.style.top = `${pos.y}px`;
    el.firstElementChild.style.transform = `rotate(${pos.angle}rad)`;
    el.lastElementChild.textContent = `${pos.dist.toFixed(0)} m`;
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

  showResult({ level, index, time, bumps, rank, note, isLast }) {
    this.el.rKicker.textContent = rank.kicker;
    this.el.rTitle.textContent = level.name;
    this.el.rTime.textContent = fmtTime(time);
    this.el.rBumps.textContent = bumps;
    this.el.rRank.textContent = rank.label;
    this.el.rNote.textContent = note;
    this.el.btnNext.textContent = isLast ? 'Back to levels' : 'Next level';
    this.el.result.classList.remove('hidden');
  }
}
