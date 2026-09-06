// Player preferences. Kept in their own key rather than inside the progress
// blob: progress is versioned with the scoring unit and gets thrown away when
// that changes (main.js), and a steering preference is not a score.
const KEY = 'tight-fit.settings';

// Every setting is an id plus the fixed list of values it may take. The menu
// is generated from this, so adding a setting is adding an entry here.
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
];

// The first value of each setting is its default, so the order in the table
// is the only place a default lives.
const DEFAULTS = Object.fromEntries(SETTINGS.map((s) => [s.id, s.values[0].id]));

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
