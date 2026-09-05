// Xbox / standard-mapping controller. Analog throttle on the triggers and
// analog steering on the left stick — a pad is the better input for this
// game, so it gets first-class treatment rather than a d-pad shim.

export const BTN = {
  A: 0, B: 1, X: 2, Y: 3,
  LB: 4, RB: 5, LT: 6, RT: 7,
  BACK: 8, START: 9, LS: 10, RS: 11,
  UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15,
};

const DEAD = 0.16;

function curve(v) {
  const a = Math.abs(v);
  if (a < DEAD) return 0;
  const t = (a - DEAD) / (1 - DEAD);
  // gentle expo: fine control near centre, full lock still reachable
  return Math.sign(v) * (t * t * 0.65 + t * 0.35);
}

export class Pad {
  constructor() {
    this.connected = false;
    this.prev = [];
    this.tappedSet = new Set();
    this.id = '';
    addEventListener('gamepadconnected', (e) => { this.id = e.gamepad.id; });
  }

  raw() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) if (p && p.connected && p.mapping === 'standard') return p;
    for (const p of pads) if (p && p.connected) return p;
    return null;
  }

  poll() {
    const p = this.raw();
    this.tappedSet.clear();
    if (!p) {
      this.connected = false;
      this.prev = [];
      return null;
    }
    const wasConnected = this.connected;
    this.connected = true;
    this.pad = p;
    const vals = p.buttons.map((b) => (typeof b === 'object' ? b.value : b));
    for (let i = 0; i < vals.length; i++) {
      const down = vals[i] > 0.55;
      const wasDown = (this.prev[i] ?? 0) > 0.55;
      if (down && !wasDown) this.tappedSet.add(i);
    }
    this.prev = vals;
    this.justConnected = !wasConnected;
    return p;
  }

  tapped(btn) { return this.tappedSet.has(btn); }

  button(btn) { return (this.prev[btn] ?? 0) > 0.55; }
  analog(btn) { return this.prev[btn] ?? 0; }

  driving() {
    if (!this.connected) return null;
    const p = this.pad;
    const rt = this.analog(BTN.RT);
    const lt = this.analog(BTN.LT);
    let throttle = rt - lt;
    if (Math.abs(throttle) < 0.06) throttle = 0;
    // stick fallback for pads without analog triggers
    const stickY = -curve(p.axes[1] ?? 0);
    if (throttle === 0 && Math.abs(stickY) > 0.2 && rt === 0 && lt === 0) throttle = 0;
    return {
      throttle,
      steer: -curve(p.axes[0] ?? 0),
      brake: this.button(BTN.A),
      crawl: this.button(BTN.LB),
    };
  }

  // Right stick, as a per-second rate.
  look() {
    if (!this.connected) return { x: 0, y: 0 };
    const p = this.pad;
    return { x: curve(p.axes[2] ?? 0), y: curve(p.axes[3] ?? 0) };
  }

  rumble(strength, ms = 160) {
    const p = this.pad;
    if (!p || !p.vibrationActuator) return;
    try {
      p.vibrationActuator.playEffect('dual-rumble', {
        duration: ms,
        strongMagnitude: Math.min(1, strength),
        weakMagnitude: Math.min(1, strength * 0.6),
      });
    } catch { /* unsupported */ }
  }
}
