// Player preferences. Kept in their own key rather than inside the progress
// blob: progress is versioned with the scoring unit and gets thrown away when
// that changes (main.js), and a handling preference is not a score.
const KEY = 'tight-fit.settings';

// A multiplier setting. The values are ordered slow-to-fast rather than
// default-first, because a row of numbers a player reads left to right is
// worth more than the table's usual "the default is the first entry" rule.
const scale = (values, def) => ({
  values: values.map((v) => ({ id: String(v), name: `${v.toFixed(2).replace(/0$/, '')}×` })),
  default: String(def),
});

// Every setting is an id plus the fixed list of values it may take, and
// optionally a `when` saying which other setting it is meaningful under. The
// menu is generated from this, so adding a setting is adding an entry here.
export const SETTINGS = [
  {
    id: 'steering',
    name: 'Steering',
    values: [
      {
        id: 'direct',
        name: 'Direct',
        note: 'The stick is the wheel. Where you hold it is where the front '
          + 'wheels point, and letting go straightens them.',
      },
      {
        id: 'rate',
        name: 'Rate',
        note: 'The stick turns the wheel. How far you push it is how fast the '
          + 'front wheels turn, and letting go leaves them where they are — so '
          + 'coming back to straight is something you have to do.',
      },
    ],
  },
  {
    id: 'steerSpeed',
    name: 'Steering speed',
    note: 'How fast the wheels turn at full stick. There is no equivalent for '
      + 'Direct steering: how far the wheels turn is the vehicle’s own '
      + 'lock, not a preference.',
    when: (s) => s.steering === 'rate',
    ...scale([0.5, 0.7, 1, 1.4, 2], 1),
  },
  {
    id: 'throttle',
    name: 'Throttle',
    values: [
      {
        id: 'speed',
        name: 'Speed',
        note: 'The trigger is the speed. Half pressed is half speed, and '
          + 'releasing it brings the vehicle down as fast as the trigger '
          + 'itself comes back — connected rather than twitchy.',
      },
      {
        id: 'accelerator',
        name: 'Accelerator',
        note: 'The trigger adds speed. Hold it and the vehicle builds up to '
          + 'the cap; let go and it coasts down.',
      },
    ],
  },
  {
    id: 'topSpeed',
    name: 'Top speed',
    note: 'What a fully pressed trigger is worth, forward and in reverse. '
      + 'Crawl is left alone — it exists to be a fixed slow speed.',
    ...scale([0.6, 0.8, 1, 1.3, 1.6], 1),
  },
  {
    id: 'acceleration',
    name: 'Acceleration',
    note: 'How hard it pulls away. Under Speed throttle this is how quickly '
      + 'the vehicle catches up to the trigger.',
    ...scale([0.6, 0.8, 1, 1.5, 2], 1),
  },
  {
    id: 'slowdown',
    name: 'Slow-down',
    note: 'How fast it comes to rest when you let go, forward and in reverse. '
      + 'The brake button is not affected — a brake is a brake.',
    ...scale([1, 1.5, 2, 3, 4], 1),
  },
  // The driving aids. Each one is a display and nothing else: turning it off
  // changes what the player is told, never what the vehicle can do or where it
  // fits, so DESIGN.md 15 holds for these the same way it holds for the
  // multipliers above. They default on because a player who has never opened
  // this menu should be given everything (DESIGN.md 12 is about what is on
  // screen for the first attempt, not about withholding the car's own kit).
  {
    id: 'mirrors',
    name: 'Mirrors',
    note: 'The three mirror panels in the inside view. Off leaves that view '
      + 'with only what the windscreen shows.',
    values: [{ id: 'on', name: 'Shown' }, { id: 'off', name: 'Hidden' }],
  },
  {
    id: 'reverseCam',
    name: 'Reversing camera',
    note: 'The rear camera panel and its painted rails, which come up whenever '
      + 'you select reverse.',
    values: [{ id: 'on', name: 'Shown' }, { id: 'off', name: 'Hidden' }],
  },
  {
    id: 'radar',
    name: 'Parking sensor',
    note: 'The nearest-obstacle bar and the beep that quickens with it. Already '
      + 'absent from the inside view, which does without it on purpose.',
    values: [{ id: 'on', name: 'On' }, { id: 'off', name: 'Off' }],
  },
  {
    // The first of the three aids that draw in the world rather than on the
    // vehicle. All three are off unless asked for: what DESIGN.md 10 permits
    // is not the same as what the default game shows, and the game a player is
    // handed is still the plainest one.
    id: 'turnCircles',
    name: 'Turning circles',
    note: 'The circle each wheel is on at the steering you are holding, and the '
      + 'point they all turn about — rear wheels in blue, front in violet. Hold '
      + 'the wheel and they stay where they are; only turning it moves them. '
      + 'Off by default.',
    values: [{ id: 'off', name: 'Hidden' }, { id: 'on', name: 'Shown' }],
  },
  {
    // The one aid that is about the future. It rides on the circles rather
    // than standing alone: it is where one of them runs out, and a vehicle
    // standing by itself in the middle of a level says nothing about how it
    // got there. DESIGN.md 10 is what its limits are written against.
    id: 'firstContact',
    name: 'First contact',
    note: 'Where the vehicle would first touch something, driving on at the '
      + 'steering you are holding, in the direction you are going. It is the '
      + 'end of the circle it is standing on, so it needs those switched on. '
      + 'Off by default.',
    when: (s) => s.turnCircles === 'on',
    values: [{ id: 'off', name: 'Hidden' }, { id: 'on', name: 'Shown' }],
  },
  {
    // Also off unless asked for, and for a different reason than the circles.
    // This one is a record rather than a prediction, so DESIGN.md 10 has
    // nothing against it — but it draws a copy of the vehicle for every point
    // the player scores, and a game whose score *is* direction changes would
    // hand an unasked-for level a dozen of them. DESIGN.md 12 is about what is
    // on screen for the first attempt, and this is for the eighth.
    //
    // It does not depend on the circles and is not listed under them: a ghost
    // is a pose and carries no figure on the ground (DESIGN.md 23).
    id: 'ghosts',
    name: 'Direction-change ghosts',
    note: 'A pale copy of the vehicle left standing wherever you swap between '
      + 'forward and reverse, so a shuffle shows every pose it went through at '
      + 'once instead of one at a time. The newest is the firmest and each '
      + 'older one is fainter, so the order they were left in is on the floor '
      + 'too. The poses are kept whether or not they are drawn, so turning '
      + 'this on halfway through a manoeuvre shows the whole manoeuvre. Off by '
      + 'default.',
    values: [{ id: 'off', name: 'Hidden' }, { id: 'on', name: 'Shown' }],
  },
  {
    id: 'traces',
    name: 'Tyre marks',
    note: 'The line each wheel leaves on the ground. It is the record of what '
      + 'you did, so hiding it hides the route as well as the mess.',
    values: [{ id: 'on', name: 'Shown' }, { id: 'off', name: 'Hidden' }],
  },
];

const DEFAULTS = Object.fromEntries(
  // The first value is the default unless the setting names one.
  SETTINGS.map((s) => [s.id, s.default ?? s.values[0].id]),
);

export function load() {
  const out = { ...DEFAULTS };
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    // A stored value that is no longer offered falls back to the default
    // rather than reaching the physics as an unknown mode.
    for (const s of SETTINGS) {
      if (s.values.some((v) => v.id === raw?.[s.id])) out[s.id] = raw[s.id];
    }
  } catch { /* fresh start, or private mode */ }
  return out;
}

export function save(settings) {
  try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch { /* private mode */ }
}

// The multipliers the physics reads, as numbers. Everything the player can
// tune is a rate: see DESIGN.md 15 for why none of them can reach the geometry
// a level is proved against.
export function gains(settings) {
  return {
    steerSpeed: settings.steering === 'rate' ? Number(settings.steerSpeed) : 1,
    topSpeed: Number(settings.topSpeed),
    acceleration: Number(settings.acceleration),
    slowdown: Number(settings.slowdown),
  };
}
