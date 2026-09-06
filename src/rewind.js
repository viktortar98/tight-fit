// The tape the game runs backwards.
//
// A recorded frame is everything a physics step reads and writes: the
// vehicle's pose and motion, and the counters that are the score. That is what
// makes "undo the crashes and direction changes I made during the stretch I
// rewound" not a second feature — the score is on the tape with the pose, so
// winding the tape back winds the score back with it, and no arithmetic
// anywhere has to know that a rewind happened.
//
// It also keeps the score honest. Rewinding past a crash puts the vehicle back
// before the crash, so the stretch has to be driven again; what you keep is
// the count that belongs to the path you actually finished on. Rewind removes
// the cost of restarting, not the cost of the mistake.

// Four minutes at the physics rate. Past that the oldest frames are dropped:
// a run long enough to overflow this is one where restarting is the cheaper
// move anyway.
const CAP = 120 * 240;

export class Tape {
  constructor() {
    this.frames = [];
    this.head = 0;
    this.len = 0;
  }

  clear() {
    this.head = 0;
    this.len = 0;
  }

  push(frame) {
    this.frames[this.head] = frame;
    this.head = (this.head + 1) % CAP;
    if (this.len < CAP) this.len++;
  }

  // The most recent frame, removed. Null when there is nothing left to undo.
  pop() {
    if (!this.len) return null;
    this.head = (this.head - 1 + CAP) % CAP;
    this.len--;
    return this.frames[this.head];
  }
}
