const KEYMAP = {
  KeyW: 'up', ArrowUp: 'up',
  KeyS: 'down', ArrowDown: 'down',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
  Space: 'brake',
  ShiftLeft: 'crawl', ShiftRight: 'crawl',
};

export class Input {
  constructor(target = window) {
    this.keys = new Set();
    this.tapped = new Set();
    this.drag = { active: false, dx: 0, dy: 0 };
    this.wheel = 0;
    this.enabled = true;

    target.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const a = KEYMAP[e.code];
      if (a) this.keys.add(a);
      this.tapped.add(e.code);
      if (a || ['KeyC', 'KeyG', 'KeyR', 'KeyV', 'KeyM', 'Escape'].includes(e.code)) e.preventDefault();
    });
    target.addEventListener('keyup', (e) => {
      const a = KEYMAP[e.code];
      if (a) this.keys.delete(a);
    });
    target.addEventListener('blur', () => this.keys.clear());

    const canvas = document.getElementById('scene');
    canvas.addEventListener('pointerdown', (e) => {
      this.drag.active = true;
      this._last = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!this.drag.active) return;
      this.drag.dx += e.clientX - this._last.x;
      this.drag.dy += e.clientY - this._last.y;
      this._last = { x: e.clientX, y: e.clientY };
    });
    const stop = (e) => {
      this.drag.active = false;
      try { canvas.releasePointerCapture(e.pointerId); } catch { /* already gone */ }
    };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('wheel', (e) => {
      this.wheel += Math.sign(e.deltaY);
      e.preventDefault();
    }, { passive: false });
  }

  // Consumes: true only on the frame the key went down.
  pressed(code) {
    if (this.tapped.has(code)) {
      this.tapped.delete(code);
      return true;
    }
    return false;
  }

  endFrame() {
    this.tapped.clear();
    this.drag.dx = 0;
    this.drag.dy = 0;
    this.wheel = 0;
  }

  driving() {
    if (!this.enabled) return { throttle: 0, steer: 0, brake: false, crawl: false };
    const k = this.keys;
    return {
      throttle: (k.has('up') ? 1 : 0) + (k.has('down') ? -1 : 0),
      steer: (k.has('left') ? 1 : 0) + (k.has('right') ? -1 : 0),
      brake: k.has('brake'),
      crawl: k.has('crawl'),
    };
  }
}
