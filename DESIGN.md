# Design constraints

The rules this game is judged against. README.md describes what the game *is*,
in a player's voice; this file says what it must *stay*, and how each one is
held in place. If a change would break one of these, it is the wrong change —
or this file needs an argument written into it first.

Each constraint says what enforces it. "Enforced by" means something fails
loudly. "Held by" means nothing checks it, so it is on the reader.

---

## 1. The difficulty is the route, never the measurement

A level is hard because of which way you have to enter it, how many shunts it
takes, and how little room there is while you do it. It is never hard because
of how precisely you finished.

**A bay is passed the moment the vehicle is inside it and stopped.** No
centring score, no angle tolerance, no "4 cm off" penalty. The containment test
is a plain rectangle-inside-rectangle with a 2 cm shrink, held for 0.6 s below
0.25 m/s (`Game.checkParked`, `src/main.js`).

*Held by:* nothing automatic. Any scoring that reads the final pose beyond
"inside and stopped" violates this.

## 2. The score is direction changes

Every swap between forward and reverse counts one. Parking anything is easy
given unlimited shunts, so the shunts are the game.

**Time is not measured anywhere** — not displayed, not stored, not ranked. A
level that rewards hurrying is a level about throttle control, which is what
constraint 4 exists to remove.

A shunt is counted only when the vehicle actually reverses its direction of
travel above 0.2 m/s, so rocking on the spot is free (`Game.stepPhysics`).

There is no clock in the source either. There was one — `Game.time`, ticking
every physics step, read by nothing — left behind when scoring moved off time.
A stopwatch nobody reads is still a stopwatch, and the next reader reasonably
concludes timing is coming back. It is gone.

**The save key carries the scoring unit** (`STORE = 'tight-fit.v2'`). A best
recorded in a unit the game no longer uses is not data, it is a memory of an
abandoned decision, so when the unit changes the key changes and there is
nothing to migrate. The migration loop that used to strip old time-based bests
is gone with it.

*Held by:* the reader. Re-introducing a timer would satisfy every test.

## 3. Every level ships proved, not eyeballed

Tight levels are easy to make impossible by accident. `node tools/validate.js`
runs a hybrid-A* search over `(x, z, yaw)` — `(x, z, yaw, trailerYaw)` for
articulated vehicles — using the game's own `integrate()` and collision boxes.
It also refuses any move that reaches the jackknife stop, so a solution may not
grind the limit to get round a corner.

**If the search cannot park it, the level does not ship.**

*Enforced by:* `tools/validate.js`, exit code 1.

## 4. Each level's `record` is a proved number, and par is derived from it

`record` on a level is the fewest direction changes the solver has actually
achieved on that geometry. It is shown to the player as the target. It is not a
guess and must never be typed by hand.

The validator fails a level whose search finds a shorter answer than the record
claims, which means the number on screen has always been proved reachable.

Par — the bar for a "flawless" rating — is `record + PAR_ALLOWANCE`, computed
in one place (`parOf`, `src/levels.js`). Levels carry no `par` field, so pars
cannot drift level by level.

*Enforced by:* the stale-record check in `tools/validate.js`; `parOf` for par.

## 5. A crash is entering contact, not being in it

Touching something is a state. The crash is the moment you enter that state,
and you cannot enter it again until you have left it. Grinding along a wall is
one crash however long you hold it; letting go and hitting again is two.

There is no threshold in speed and none in time. Both have been tried:

- The original rule ignored hits under 0.6 m/s, which at these speeds hid
  almost every contact and quietly taught players that scraping was free.
- Removing it left a 0.25 s cooldown doing the same job in a different unit.
  That is the deeper error: **this game does not measure time** (constraint 2),
  so a rule denominated in seconds is unreachable from its decisions and will
  read as an accident to whoever finds it next. A rule has to be expressed in
  a unit the game owns.

Contact state is the unit the game already owns, because the physics computes
it every sub-step to decide where the vehicle stops.

Impact still scales the flash and the rumble; it does not decide whether the
crash happened. Sound, rumble, flash and the counter all fire on the same
event — with the cooldown gone they would otherwise have fired every physics
step, buzzing at 120 Hz and allocating an audio buffer per frame for a scrape.

*Held by:* `Game.stepPhysics` (sets `touching`) and `Game.onContact`, which
returns early while it is set.

## 6. First gear is all there is

Top speeds are 2.3–2.9 m/s across every vehicle. Holding a slow steady speed is
not a skill this game tests, so the vehicle holds it for you. The throttle is
analog and the crawl modifier exists for the last metre, but there is no gear
above the one you start in.

*Held by:* `maxSpeed` / `maxReverse` in the vehicle specs, `src/vehicle.js`.

## 7. Level geometry is designed against the swept ring

A vehicle at full lock sweeps a ring of fixed width — 2.83 m for the hatchback,
6.60 m for the bus. A corridor narrower than that cannot be turned out of in
one arc, which is the line between "drive in" and "shunt it in". Every number
in a level is chosen against that constant for its vehicle, not by eye.

*Enforced by:* `sweptWidth()` is printed for every level by the validator, next
to the real clearances, so a level whose numbers stopped making sense is
visible in the same output that proves it.

## 8. The player's vehicle is the only saturated colour

Everything else in the world — parked cars, dropped trailers, walls, kerbs,
cones — is pastel. At a glance you always know which shape is you. Parked props
are built from the same mesh code with `{ pastel: true }`, so a new obstacle
type inherits the rule rather than choosing a colour.

*Held by:* the `PASTEL` palette in `src/levels.js` and the `pastel` option in
`src/carMesh.js`.

## 9. The camera does what the player told it, and nothing else

The player's instructions are mode, yaw offset, pitch and zoom. Anything the
camera decides on the player's behalf is a guess, and a camera that guesses is
wrong at exactly the moments that matter — the tight ones.

The worst of it was `autoFlip`: the view swung 180° whenever speed crossed
±0.35 m/s. **The score is direction changes** (constraint 2), so the camera
performed a half-turn on every point the player scored. Gone, with its
hysteresis timer and its lerp.

Deleting the flip is what settles how many camera modes there are. `orbit` was
`chase` minus the flip — the two branches differed by one term — so with the
flip gone the mode collapsed into `chase` on its own. Two modes remain, and
they answer two genuinely different questions:

- **chase** — what the driver can see. This is what makes it a driving game
  rather than a puzzle on a grid.
- **overhead** — what the physics sees. Collision is 2D on XZ, so this view
  *is* the collision model, with nothing hidden by perspective.

A third mode would have to answer a third question. "The same view, held
differently" is not one; that is what the right stick is for.

Angles stay relative to the driven body, so a view you chose stays on the same
corner of the vehicle as it turns and a jackknifed trailer never drags your
viewpoint with it. For an articulated vehicle the chase camera frames the
*whole combination*, not the cab — that is geometry, not guessing, and so is
deriving distance and pitch from vehicle length in `reset()`.

Smoothing position is not guessing either; it is only non-instantaneity.
Moving the camera somewhere the player did not put it is. The two "pay it back
in height" adjustments — arena clamp and occlusion pull-in — were the latter.

*Held by:* `src/camera.js`.

## 10. No path-prediction aids

The floor shows no predicted arcs, no ghost of where the vehicle will end up,
no steering guide lines. Judging where the vehicle will go is the skill the
game is about; drawing the answer on the ground removes it.

This was built once and deliberately removed. **Do not add it back** as a
"helpful" overlay, an accessibility option, or a beginner mode.

*Held by:* this paragraph, and nothing else.

## 11. The gamepad is the primary input

Not "supported", not "at parity" — primary. Analog steering and an analog
throttle are what a game about the last half-metre wants, and the keyboard is
the fallback that approximates them.

The consequence is that the pad is the reference the rest is measured against:
pad glyphs are the HUD legend a player sees first, and the keyboard legend is
the swap-in. The legend follows the device last touched, so a keyboard-only
player is not left reading pad glyphs.

**A pad whose triggers report no analog value drives from the left stick, and
its Y is a direction, not a magnitude.** Past 0.35 you are in first gear,
forward or reverse; X stays fully analog. This looks like the worse trade until
you notice a stick gate is round: with an analog throttle on Y, full lock on X
leaves nothing for Y, so that pad could never drive a full-lock arc — and every
level number is chosen against the swept ring that arc makes (constraint 7), so
levels 5, 7 and 10 would be unreachable. **A fallback that cannot finish the
game is not a fallback.** Losing the analog throttle is cheap by comparison:
constraint 6 hands steady speed to the vehicle anyway, and `LB` still crawls.

The latch is set the first time either trigger reports anything at all, and
cleared on disconnect so swapping pads re-tests. An Xbox pad never enters this
branch.

*Held by:* `src/gamepad.js` and the pad branches in `Game.padMenu`.

## 12. Nothing on screen is there for the first attempt

Players replay a level tens of times. **A part that only pays on the first
attempt is paid for on every attempt** — so the screen is designed for the
tenth run, not the first.

Removed under this rule, all of them aids for finding the bay:

- the screen-edge chevron with its distance-in-metres readout
  (`Game.updateTargetArrow`, ~35 lines of screen-space projection),
- the bobbing cone floating over the bay, and the four corner posts under it —
  posts are a clearance aid in principle, but at 1.25 m beside a 1.44 m
  hatchback they were more floating furniture,
- the level hint, which states the solution in words. It moved to the level
  select tile and the pause card, where a player who wants it can go and get
  it, instead of occupying the largest block of text on screen forever.

What stays is what is read while inching in on the tenth attempt: the bay's
ground outline, which is the containment boundary the level is scored against,
and its colour change, which is the "you are inside" feedback constraint 1
depends on.

**The only gauges are the scored numbers and what the player cannot see.**
Shunts, crashes, best and record are the score. The proximity bar is the one
gauge showing something no camera angle reveals, and the articulation gauge is
the only honest warning before a trailer folds. The speedometer, the gear
letter and the steering-angle dot were none of those — they measured a
quantity constraint 6 exists to make not matter, twice over, next to a scored
number displayed smaller than either.

Two consequences that were derived rather than decided, and are worth keeping
because the derivation generalises:

- **The vehicle name is not on the play HUD.** The player's vehicle is the only
  saturated colour on screen (constraint 8), so a tag naming it labels the one
  thing that cannot be missed. The level-select tile says it before you enter.
- **The proximity bar is captioned `nearest`.** With the speedometer gone, an
  unlabelled bar across the bottom centre sits exactly where a speedometer
  would, and the gauge read most often must not be mistakable for the quantity
  the game refuses to measure.

Level identity — number, name, best, record — lives with the stats rather than
in a panel of its own, because best and record are facts about the *level*, not
about the run in progress. The pause card uses the result card's shape, so
there is one card idiom rather than two.

*Held by:* `src/hud.js` and `index.html`. Nothing checks it.

## 13. Written in JavaScript, deliberately

No TypeScript, for now, as a standing experiment in what JS-only feels like to
work with on a codebase this size. The consequence to be honest about: "it
documents the intent" is not an argument for keeping an unused export, because
nothing here checks intent. Dead code is found by reading, or by a tool someone
adds later.

*Held by:* the reader.

## 14. A modified key is a browser command, not a game input

`Ctrl`, `Meta` or `Alt` held means the keystroke belongs to the browser, and
the game does not look at it. One rule, replacing a hardcoded list of key codes
that had drifted out of step with the keys the game actually acts on.

The list was not merely redundant. It matched on `e.code`, so `Ctrl+R` hit
`preventDefault()` and **the page could not be reloaded** while the canvas had
focus; `Ctrl+M`, `Ctrl+Z` and `Ctrl+S` went the same way. A rule that names a
class cannot drift like a list that names members.

`preventDefault` now fires only for keys the game binds, which is where the
defaults worth suppressing are — arrows and space scroll the page.

*Held by:* `src/input.js`.

---

## Where the rules are enforced

| Constraint | Enforced by | Fails how |
|---|---|---|
| 3 — proved solvable | `tools/validate.js` | exit 1, names the level |
| 4 — honest record | stale-record check in the validator | exit 1, prints the shorter answer |
| 4 — par derivation | `parOf` in `src/levels.js` | one place to change |
| 7 — swept ring | printed per level by the validator | visible drift |
| 1, 2, 5, 6, 8, 9, 10, 11, 12, 13, 14 | nothing | silent |

Eleven of fourteen are held by reading. That is the honest state of it: the
solvability gate is machine-checked because a broken level is invisible until
someone plays it, and the rest are cheap for a person to notice and expensive
to automate. This file is what a reviewer checks a change against.

---

## Open decisions

Not constraints — questions that are known, deliberately unanswered, and would
otherwise be lost. Each says who it belongs to.

**Mirrors, or a driver's-eye view.** Blind Side's hint says "the side the
mirrors don't cover". There are no mirrors, so that sentence is currently
fiction and the level's difficulty is pure geometry. Mirror insets on the chase
view, or a bumper-height driver's-eye mode, would make the stated problem real
and would make constraint 10 bite considerably harder. *The user's call — it
adds a decision rather than removing one.*

**The overhead view's rotation.** Constraint 9 keeps the vehicle's nose pointing
up the screen, smoothed. A world that rotates under the player is arguably the
kind of thing constraint 9 now forbids, and the smoothing especially so. Set
against that: it is a stated frame of reference, not the camera guessing, and
it makes a stick-left always a nose-left. *The user's call.*

**Themes.** `THEMES` holds four eight-field tables where the real distinction is
binary — `camera.js` already collapses them with `theme === 'garage' ||
theme === 'alley'`. Deliberately not touched: the themes are expected to be
replaced wholesale, and optimising a thing on its way out is waste.

**Levels per vehicle.** The bus and the tow car carry one level each, and
levels 7/8 are one route driven by two vehicles. More levels per vehicle are
wanted — but what each new level should be *about* has had no thought yet and
has not been discussed. *Design session first, with the user; do not invent
levels to fill a table.*

**Code-quality tooling.** `knip` and an eslint config would machine-catch the
dead-export class that this session cleared by hand, which is the class most
likely to come back. Not added yet, and TypeScript is excluded by constraint
13. *The user's call on scope.*
