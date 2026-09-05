// Small WebAudio kit. No files, no loading, no licences.

export class Sfx {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.lastBeep = 0;
  }

  ensure() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  tone(freq, dur, { type = 'sine', gain = 0.12, slide = 0 } = {}) {
    if (this.muted) return;
    const ctx = this.ensure();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), ctx.currentTime + dur);
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(gain, ctx.currentTime + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + dur + 0.03);
  }

  // Parking sensor: interval shortens as the gap closes.
  sensor(dist, now) {
    if (this.muted || dist > 1.2) return;
    const interval = dist < 0.28 ? 0.001 : 0.09 + dist * 0.55;
    if (now - this.lastBeep < interval) return;
    this.lastBeep = now;
    if (dist < 0.28) {
      if (!this._solid) {
        this._solid = true;
        this.tone(1760, 0.4, { type: 'square', gain: 0.05 });
      }
      return;
    }
    this._solid = false;
    this.tone(1480, 0.055, { type: 'square', gain: 0.045 });
  }

  bump(force) {
    if (this.muted) return;
    const ctx = this.ensure();
    const dur = 0.16;
    const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 3);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 260 + force * 500;
    const g = ctx.createGain();
    g.gain.value = Math.min(0.55, 0.12 + force * 0.3);
    src.connect(filter).connect(g).connect(ctx.destination);
    src.start();
  }

  win() {
    if (this.muted) return;
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      setTimeout(() => this.tone(f, 0.32, { type: 'triangle', gain: 0.1 }), i * 95);
    });
  }

  click() {
    this.tone(880, 0.04, { type: 'square', gain: 0.03 });
  }
}
