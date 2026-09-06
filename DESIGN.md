# Design constraints

The rules this game is judged against. README.md describes what the game *is*,
in a player's voice; this file says what it must *stay*, and how each one is
held in place. If a change would break one of these, it is the wrong change —
or this file needs an argument written into it first.

Each constraint says what enforces it. "Enforced by" means something fails
loudly. "Held by" means nothing checks it, so it is on the reader.

---

## 1. The difficulty is the route, never the measurement

A level is hard because of which way you have to enter it and how many shunts
it takes. It is never hard because of how precisely you finished.

Room is in that list only through what it *removes*: a narrow lane is hard
because it deletes the routes that would have worked, not because threading it
demands a steadier hand. The two are easy to confuse and they pull opposite
ways — a level tuned until the gap is nerve-racking is a level about execution,
which is the thing each level is supposed not to be a harder version of.

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

**No target number reaches the player.** There is no par and no published
record on the HUD, the level tile, or the result card. The only number a score
is measured against is the player's own best on that level, and a level with no
best yet says so. A published optimum tells a player what the designer thinks
the level is worth, which is a claim about difficulty of *execution* — the
thing constraint 1 says this game is not about. It also cannot be honest: the
number would come from the solver, and what the solver finds is one route, not
the best one (constraint 4).

The rating on the result card follows from that. It used to have four grades,
the top one gated on beating par; with no par it has three, and all three are
about crashes, which is the other thing the game measures.

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

## 4. The solver is a design tool, and its number is a record, not a minimum

`tools/validate.js` exists to tell the designer whether a level still asks the
question it was built to ask. **Nothing it produces reaches the player**
(constraint 2). That is the decision the rest of this follows from.

**Its objective is the game's score.** A route is ordered first by direction
changes and only then by distance, as a pair compared lexicographically — not
as one number with an exchange rate between the two. The search used to cost a
route at `metres + 1.4 per direction change` under a heuristic weighted 1.35 to
1.7, which minimised neither quantity and would shuffle at a bay mouth rather
than drive 6 m away and come back for one shunt. Every number it produced was
biased against exactly the routes a level is usually about.

**Its counting matches the game's.** A run starts with no direction of travel
(`dir = 0`, mirroring `lastDir = 0` in `Game.stepPhysics`), so the first
movement is free in either direction and a level whose opening move is a
reverse is not charged for it. Direction of travel is part of the state key:
without it, a pose reached going forwards and the same pose reached in reverse
collapse into one node and whichever arrived first decides the cost of every
route through it. The fine straight run into the bay is a candidate pushed onto
the heap with its own direction change charged, not an answer returned
unpriced.

**It is still an upper bound.** `seen` collapses exact poses into lattice cells
(0.3 m, 10°), so which pose represents a cell decides what continuations exist
from it. The evidence is in the output: Dead End reports 5 where the older,
worse-objective search found 4. A search that minimises cannot report a larger
number than one that does not — unless both are approximations over the same
lattice, which they are. A pose that is already parked is exempt from the
collapse, because a cell holds parked and unparked states alike and dropping
the parked one is how a minimising search reports a number that is too high.

So `record` on a level means **the fewest direction changes anything has
achieved on that geometry**. It is a record, not an optimum, and the validator
checks it in one direction only: finding fewer fails the level, because the
number is stale and the level is easier than its design believes. Finding more
is not a failure — it is the lattice.

**What this measurement found.** On the objective that is actually the score,
almost the whole level set is a 0-shunt or 1-shunt level. That is a fact about
the levels, not about the tool, and it is the first thing the next level design
session has to answer.

**It costs what it costs.** Ordering by direction changes first means the
search exhausts everything reachable in *n* of them before it looks at *n+1*.
The Impossible Gap went from 1 s to 26 s, Blind Side from 20 s to 50 s, Artic
Dock from 101 s to 404 s. That was accepted rather than worked around: this is a tool a designer runs between
edits, not something in a player's way, and a fast wrong number is worth less
than a slow honest one.

*Enforced by:* the stale-record check in `tools/validate.js`, exit 1.

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

## 7. Level geometry is measured, not eyeballed — against the right constant

There are two kinds of level here and they are decided by different numbers.
This constraint used to name only the first and claim it governed both.

**A corridor turn** is decided by the swept ring. A vehicle at full lock sweeps
a band of fixed width — 2.83 m for the hatchback, 6.60 m for the bus — and a
corridor narrower than that cannot be turned out of in one arc. That is the
line between "drive in" and "shunt it in", and two levels straddle it on
purpose: The Impossible Gap pinches its corridor to 2.6 m, *below* the ring, so
the 90° provably cannot be driven; Dead End's 3.0 m doorway is *above* it, so
the arc exists and what is missing is the room to line it up.

**A bay entry** is decided by longitudinal envelopes, and the swept ring says
nothing about it. Measured by driving `integrate()` out of a bay at full lock:

| hatchback | aisle depth | aisle before the bay | aisle past the bay |
|---|---|---|---|
| reverse in | 1.60 m | 0.95 m | **6.54 m** |
| nose first | **3.04 m** | 4.09 m | 1.95 m |

Loosening the lock worsens both numbers in both dimensions, so these are
minima, not a trade to tune. The table lives in the header of `src/levels.js`,
next to what it generates.

Why the old wording survived so long without being contradicted: 2.83 m is a
*width*, so it reads as a floor on how narrow an aisle may be — but a reverse-in
needs only 1.60 m of aisle depth, less than the car's own width plus paint. It
never binds. Any aisle you can drive down is wide enough to reverse into a bay
from. What decides a bay level is a *length*, and the swept ring has nothing to
say about it. The constant was not wrong; it was not load-bearing there.

*Enforced by:* `sweptWidth()` is printed per level by the validator, which is
worth keeping — it is what makes the two corridor levels legible in the output.
**It is not an enforcement of this constraint.** It is constant per vehicle, so
the column reads 2.83 on every hatchback row and cannot make drift visible. A
bay level's real constraint is not printed at all.

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

Smoothing position is not guessing either; it is only non-instantaneity — and
it is now one time constant, because position, look point and the overhead
rotation were three spellings of the same decision (0.103, 0.112 and 0.115 per
frame at 60 Hz). Moving the camera somewhere the player did not put it is
guessing, and the arena clamp and the occlusion pull-in both did.

Those two were removed on measurement, not taste, and the numbers are recorded
here because intuition argues for putting them back:

- Together they moved the camera **a mean of 3.36 m from the pose the player's
  instructions describe, up to 28.6 m** on artic-dock. The clamp fired on
  30–90% of poses depending on the level, so it was the normal operating
  condition rather than a rescue.
- The pull-in **failed exactly where it was needed**: `max(2.4, hit - 0.4)`
  puts the camera *through* any occluder nearer than 2.8 m, which on Dead End
  is 15% of the cases where it fired. Its answer to the hardest pose was to
  hide the camera inside the masonry.
- What it bought was 7.2% of sampled poses with a wall at screen centre, and
  2.3% once the framing below was fixed. Of that residual, the chase view is
  **0% blocked when the vehicle points along the corridor it is in**. What is
  left is pointing across a 3.4 m alley between 4.2 m walls, where clearing the
  wall would need a 59° sight line — no camera placement answers that pose.

So the player gets the wall, and three controls that get them out of it. A wall
is predictable; a 6 m lurch whenever a pillar crosses the sight line is not.
The pose that has no camera answer has a *mode* answer, one button away.

**`street` is an enclosed theme.** Kerbside and Bus Stop are canyons
between 5 m buildings 8–9 m apart — more enclosed than the garage
levels — and were being framed as though they were open lots. The lot is the
only theme with room to stand back in, so the test is `theme !== 'lot'`.

The camera reads the pad through the `BTN` map, like every other reader.

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
Shunts, crashes and your own best are the score — there is no record and no
par on screen (constraint 2). The proximity bar is the one
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

Level identity — number, name, best — lives with the stats rather than in a
panel of its own, because a best is a fact about the *level*, not about the run
in progress. The pause card uses the result card's shape, so
there is one card idiom rather than two.

*Held by:* `src/hud.js` and `index.html`. Nothing checks it.

## 13. Written in JavaScript, deliberately

No TypeScript, for now, as a standing experiment in what JS-only feels like to
work with on a codebase this size.

The consequence that had to be answered: "it documents the intent" is not an
argument for keeping an unused export, because nothing here checks intent. So
something does. `knip` reports unused files, exports and dependencies; eslint
is kept deliberately small, because without type information its reach here is
narrow and a large borrowed ruleset is a decision nobody made. Together they
found `lerp`, `gate()` and `barrier()` on the first run.

They cannot find everything. The dead `kind === 'barrier'` render branch in
`world.js` was reachable only from the factory eslint flagged — a dead branch
keyed on a string is invisible to both tools, and was found by following the
chain from the head the tools did see. That is the shape of what these tools
buy: a starting point, not a guarantee.

*Enforced by:* `pnpm lint` and `pnpm knip`, exit 1.

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
| 4 — record not stale | stale-record check in the validator | exit 1, prints the shorter answer |
| 13 — no dead code | `pnpm knip`, `pnpm lint` | exit 1, names the export |
| 7 — swept ring | printed per level by the validator | visible drift |
| 1, 2, 5, 6, 8, 9, 10, 11, 12, 14 | nothing | silent |

Ten of fourteen are held by reading. That is the honest state of it: the
solvability gate and the dead-code sweep are machine-checked because both are
invisible until someone trips over them, and the rest are cheap for a person to
notice and expensive to automate. This file is what a reviewer checks a change
against.

Two entries here are weaker than they look. The swept-ring row prints a number
that is constant per vehicle, so it cannot show drift in anything a level does
— constraint 7 says what actually governs bay entries. And the stale-record row
only catches a level getting *easier*; nothing checks that a level still asks
the question its comment says it asks.

---

## Open decisions

Not constraints — questions that are known, deliberately unanswered, and would
otherwise be lost. Each says who it belongs to.

### Core, and the user's

**The level set does not ask for shunts.** With the solver's objective fixed to
be the game's score (constraint 4), the fewest direction changes found on each
level is: First Bay 0, Tight Lane 0, The Short Side 2, Kerbside 1, The Alcove
0, Dead End 4, The Impossible Gap 3, Van Life 1, Loading Dock 3, Bus Stop 1,
Trailer Trouble 1, Artic Dock 1, Blind Side 1. Three hatchback levels are
0-shunt levels, and the only score this game has is direction changes. A 0-shunt level cannot be
scored: a clean first run is already perfect. The old numbers were four, three
and zero — they were artifacts of a search that priced a shunt at 1.4 m of
driving, and they made the set look like it had range it does not have.

**The progression has two ideas in one level.** Tight Lane does not require
reversing, so The Short Side is where both the reverse-in *and* "the room is on
the side you did not arrive from" arrive together. That is two new ideas in one
level, against the rule that each level introduces one. Cutting Pillar Problem
shortened the habit-building interval further, so The Alcove now breaks a
belief that only The Short Side and Kerbside built — and Kerbside is a
different parking form. Tight Lane may also be execution difficulty wearing a
comprehension label: "0.64 m of slack, aim it" is precision unless its question
is made "align before you enter, because you cannot correct inside".

**The hints give the answer away.** The level-select tile is unavoidable before
a first attempt, and several hints state the insight outright: The Short Side
names which side has the room, Kerbside gives the manoeuvre step by step, The
Alcove says reverse entry does not fit, Dead End says to borrow the dead end.
Against the rule that a level should be harder to *figure out*, that converts
discovery into execution. The alternative is to state the problem on the tile
and put the solution behind an explicit request.

**Crashes rank the run.** Constraint 2 says the score is direction changes.
`Game.finish` breaks a tie between two bests on crash count, and the result
card's rating is decided entirely by crashes. Counting contact and showing it
is compatible with shunt-only scoring; letting it choose the better run and
award the rating is not. Either the rating and the tie-break go, or constraint
2 says the score is shunts *and* crashes.

**What "this level teaches X" has to mean** before a tool can check it: that
every completion embodies the lesson, that the best-shunt completion does, or
only that one intended solution exists. Impossibility cannot be proved here —
a lattice search that finds no counterexample has only failed to find one — so
"every completion" is not available. The reachable contract is the middle one,
and it is the one that follows the player's incentive: a player optimises
shunts against their own best, so if an unintended route is cheaper in shunts,
the game rewards avoiding the lesson.

**The word "shunt" on the HUD.** The stat row is labelled `shunts`; the result
card says "direction changes"; the README defines the first with the second.
Nothing in the game itself defines it, and the word is ordinary driving usage
rather than something a player is guaranteed to arrive with. Either the HUD
label becomes "direction changes" and the game has one word for the thing it
scores, or `shunts` stays as a short label a player learns once and the longer
phrase stays on the card that has room for it. *Recorded because it was asked,
which is the evidence that it is not self-explanatory.*

**Mirrors, or a driver's-eye view.** Blind Side's hint says "the side the
mirrors don't cover". There are no mirrors, so that sentence is currently
fiction and the level's difficulty is pure geometry. Mirror insets on the chase
view, or a bumper-height driver's-eye mode, would make the stated problem real
and would make constraint 10 bite considerably harder. *It adds a decision
rather than removing one.*

**Levels for the van, bus, tow car and semi.** Answered for the hatchback only,
and that answer is now in question above. Same terms: design session first,
with the user; do not invent levels to fill a table.

### Recorded, not open

**Themes.** `THEMES` holds four eight-field tables whose real distinction is
close to binary: open versus enclosed, with `lot` the only open one.
`camera.js` used to test `garage || alley`, which quietly misfiled the three
street-canyon levels. Deliberately not collapsed — the themes are expected to
be replaced wholesale, and optimising a thing on its way out is waste. Whatever
replaces them should keep that one distinction.

**The overhead view's rotation.** Constraint 9 keeps the vehicle's nose
pointing up the screen, smoothed. Kept: it is a stated frame of reference
chosen once per mode, not the camera guessing at intent, and it makes a stick
left always a nose left. The smoothing is the same non-instantaneity the
position follow has, from the same constant.

**How a level's design goal gets checked.** Not yet built, and the shape is
constrained by what was learned above. Exact geometry values would be snapshot
tests — "this number changed", not "the level stopped asking its question" —
and `slackW`, `slackD` and `nearest` describe the target rectangle, not lane
width or the usable room on each side of a bay. The unit that carries meaning
is a relational inequality: usable far-side length below the reverse-entry
envelope, doorway width above or below the swept band. A route check needs a
signature carried on the search state — side crossed, region visited, entry
orientation — not a test on the final direction of travel, which cannot express
The Short Side (which side supplied the room), Dead End (a region visited) or
The Impossible Gap (the order of events). Blocked on the contract question
above.
