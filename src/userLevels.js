import { LEVELS } from './levels.js';

// Levels the player made, and what they scored on them.
//
// They live in the browser and nowhere else, which is the whole shape of the
// feature: a level you build is playable the moment you build it and is still
// there after a reload, without anything being written back into the source.
// `export` (src/editor.js) is how one leaves the browser.
//
// Their bests are kept in their own key, apart from the fourteen. A level you
// wrote and a level the game shipped are not comparable — you can build a bay
// four metres wide and park in it first go — so a best on one must not appear
// anywhere the other's bests appear, and neither may unlock anything.
const KEY = 'tight-fit.levels';
const BESTS = 'tight-fit.level-bests';

function read(key, fallback) {
  try {
    const raw = JSON.parse(localStorage.getItem(key));
    return raw ?? fallback;
  } catch { return fallback; }
}

function write(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; }
}

export const loadLevels = () => {
  const list = read(KEY, []);
  return Array.isArray(list) ? list.filter((l) => l && l.id && l.objects) : [];
};
export const saveLevels = (list) => write(KEY, list);
export const loadBests = () => read(BESTS, {});
export const saveBests = (b) => write(BESTS, b);

// Ids have to survive being exported into src/levels.js one day, so they are
// the shape the shipped ones are: lowercase words joined by dashes.
function uniqueId(name, list) {
  const base = (name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'level');
  const taken = new Set([...list.map((l) => l.id), ...LEVELS.map((l) => l.id)]);
  if (!taken.has(base)) return base;
  for (let i = 2; ; i++) if (!taken.has(`${base}-${i}`)) return `${base}-${i}`;
}

// A copy carries `from`, which is what makes Reset possible: the shipped level
// is still in the source, so restoring is re-copying rather than remembering.
export function copyOf(level, list) {
  const clone = structuredClone(level);
  return {
    ...clone,
    id: uniqueId(`${level.id}-copy`, list),
    name: `${level.name} (copy)`,
    from: level.id,
  };
}

export const shippedSource = (level) =>
  (level.from ? LEVELS.find((l) => l.id === level.from) : null);

export function blank(list) {
  return {
    id: uniqueId('new-level', list),
    name: 'New Level',
    vehicle: 'hatch',
    theme: 'lot',
    bounds: { minX: -14, maxX: 14, minZ: -14, maxZ: 6 },
    start: { x: 8, z: -2, yaw: -Math.PI / 2 },
    target: { x: 0, z: -10, w: 2.5, d: 5, rot: 0 },
    objects: [
      { type: 'bays', x: 0, z: -10, slots: ['hatch', null, 'hatch'], w: 2.5, d: 5 },
      { type: 'bays', x: 0, z: -2.625, slots: ['hatch', null, 'hatch'], w: 2.5, d: 5, rot: Math.PI },
    ],
    from: null,
  };
}
