const KEYMAP = {
  KeyW: 'up', ArrowUp: 'up',
  KeyS: 'down', ArrowDown: 'down',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
  Space: 'brake',
  ShiftLeft: 'crawl', ShiftRight: 'crawl',
  KeyQ: 'camleft', KeyE: 'camright',
};

export class Input {
  constructor(target = window) {
    this.keys = new Set();
    this.tapped = new Set();
    this.drag = { active: false, dx: 0, dy: 0 };
    this.wheel = 0;

    target.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      // A modified key is a browser command, not a game input: Ctrl+R has to
      // stay a reload.
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const a = KEYMAP[e.code];
      if (a) this.keys.add(a);
      this.tapped.add(e.code);
      // Only the driving keys have a default worth cancelling — arrows and
      // space scroll the page. Every other key the game reads is listed once,
      // in main.js, and does not need cancelling here.
      if (a) e.preventDefault();
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
    const k = this.keys;
    return {
      throttle: (k.has('up') ? 1 : 0) + (k.has('down') ? -1 : 0),
      steer: (k.has('left') ? 1 : 0) + (k.has('right') ? -1 : 0),
      brake: k.has('brake'),
      crawl: k.has('crawl'),
    };
  }
}
