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

**Levels differ in kind, not in tolerance.** The user's statement of this, which
is the sharper form and the one to design against:

> "they should feel different from each other, not just same layout, tighter
> spaces... not optimized for final positioning of the car inside the parking
> area... not easy, just hard to do fast..."

Three rules come out of it. Two levels posing the same problem at different
clearances are one level, so **the same layout with a tighter gap is not a new
level**. The hard part may not live in the last metre, so **the bay is not the
puzzle** — `slack` and `nearest` are consequences of a level's geometry and not
levers to tune it by. And a level that is easy to understand but demanding to
perform is the failure mode named outright: **hard to work out, not hard to
execute.** There is no clock in this game, so "hard to do fast" cannot be about
speed; it names execution difficulty standing in for comprehension difficulty.

**A bigger vehicle is not a tighter gap.** The user's ruling, and the boundary
of the rule above: "same level with bigger vehicle / worse steering vehicle is
more challenging." Shrinking a gap leaves the vehicle able to do everything it
could before, only with less room. Changing the vehicle changes the wheelbase,
the lock, the turning radius and the swept band together, so the set of routes
that exist is different rather than narrower. The two look alike on a plan and
are not alike in the car. See "The vehicle roster is a content axis" under Open
decisions for what follows from it.

This is expensive, and it should be. It rules out the two quantities the level
set had been varying — direction-change count, which constraint 4 found to be a
0.21 m window on a perpendicular bay, and bay slack, which is what the set fell
back on when the first ran out. What is left is the only thing that was ever
the point: what the player has to work out. It cost a level immediately:
Tight Lane was cut against it, not re-tuned. See "The set against the
difference rule" under Open decisions for where the rest stands.

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

The result card's verdict follows from that. It used to have four grades, the
top one gated on beating par. With no par it lost that one, and the remaining
three were all about crashes — which is a scale over a fact that has only two
values, so it is now the two: `counts` or `void`.

**A crash voids the score, not the progress.** A run with any contact in it
still parks and still unlocks the next level — nobody is stuck on a level they
cannot drive cleanly — but nothing about it is recorded. A best is therefore
always a clean run, which is why it needs no tie-break to say which of two runs
is better, and why nothing further is left to grade. This is what makes
constraint 2 true as written. It also ends the cheapest exploit in the game,
which was to lean on a wall to find out where it is: contact costs the run.

The card's kicker line carries the accent colour, which reads as approval, so a
voided run takes `--danger` instead (`.kicker.void`). A card that says the run
does not count in the colour reserved for success says two things at once.

**The word on the HUD is "direction changes."** It used to say `shunts`, which
is right in driving usage but shares a register with *a shunt*, a minor
collision — displayed next to a crash counter, in a game where a crash now
voids the run. `shunts` survives as the identifier in code, where the second
meaning cannot reach a player.

**The save key carries the scoring unit, and the level order** (`STORE =
'tight-fit.v4'`). A best recorded in a unit the game no longer uses is not
data, it is a memory of an abandoned decision, so when the unit changes the key
changes and there is nothing to migrate. The migration loop that used to strip
old time-based bests is gone with it. The order counts for the same reason:
bests are keyed by level id and survive anything, but `progress.unlocked` is an
index into `LEVELS`, so changing the series makes a stored index a statement
about different levels than the one it was written for. v4 covers every such
change in this run: the re-order, the cut of Tight Lane, and the addition of
Fold.

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

**The solver and the game do not play by the same rules.** `integrate()` clamps
the hitch at `maxAngle` and sets `jackknifed` (`src/vehicle.js:192`). Only the
validator reads it (`tools/validate.js:158` and `:188`), where grinding the
stop is treated as a mistake rather than a manoeuvre. The game reads it
nowhere — `Game.showHud` passes `maxArticulation` to the HUD gauge and that is
all — so the player may grind the stop freely and the solver may not. The
search is therefore conservative, which is the safe direction for constraint 3:
a route it finds is a route the player can drive. It is the wrong direction for
`record`, which is defined below as the fewest direction changes *anything* has
achieved: on the two articulated levels a player is playing a game the solver
never searched, and a record beaten that way would not be a stale record but a
different game. Whether the game should enforce the stop is in Open decisions.

So `record` on a level means **the fewest direction changes anything has
achieved on that geometry**. It is a record, not an optimum, and the validator
checks it in one direction only: finding fewer fails the level, because the
number is stale and the level is easier than its design believes. Finding more
is not a failure — it is the lattice.

**The difference probe.** `SHRINK=δ` (an environment variable, default 0)
trims δ metres off every side of every rectangle belonging to the vehicle —
body, trailer, and the rectangle the bay has to contain. Nothing kinematic
changes: wheelbase, lock, turning radius and swept path are identical, so every
route keeps its shape and every gap in the level gets δ wider. **If a level's
direction-change count falls under it, that count was a clearance.** If it
holds, the cost is the shape of the free space, which is what constraint 1 says
a level is allowed to be made of. Three lines in the validator, and it is the
only thing that has ever held constraint 1 — the enforcement table listed that
row as held by nothing.

**The failing condition.** Run at δ = 0.15 per side, and read three outcomes.
*Structural*: the count does not fall, and the level's comment may say so.
*Mixed*: it falls but not to zero — part idea, part clearance, which is normal
and often correct. *Clearance*: it falls to **zero**, and only this fails. A
level whose count reaches zero on a 15 cm trim has no route structure at all;
every direction change in it existed because something did not quite fit.

δ = 0.15 rather than another number because it is about 9% of a hatchback's
width, smaller than every level's stated `slack` in both axes, and because it
is where the set actually separates. At δ = 0.30 almost everything collapses,
including the levels that are supposed to collapse last, and a test that fails
everything discriminates nothing — so 0.30 is a stress reading to quote, not a
pass mark to set.

**The probe must not become a target.** A level tuned to survive δ = 0.15 by
adding 0.3 m everywhere has not become structural, it has become loose. The
probe detects clearance-dependence and cannot detect that a level is boring.

**The ban is not on numbers, it is on numbers whose neighbourhood matters.** A
threshold — the swept band, the bay-entry envelopes of constraint 7 — switches
which routes exist and then plays the same anywhere on one side of it. A
tolerance has a knife edge. **The operational test is the width of the basin:**
sweep the dimension that carries the level's cost and look at the neighbourhood
of the shipped value. Flat for a metre either side is a plateau and a
threshold; changed by a quarter-metre step is a spike and a tolerance, whatever
it looks like in the file.

**Threshold-ness is necessary and not sufficient, and this is the trap.** A
number can be a genuine threshold and still be a clearance. A bus needs 6.5 m
of street to turn through a 6 m gate for 3 direction changes, 7–8 m for 1, and
9 m for none: a real plateau, a metre wide. The whole ladder slides half a
metre sideways at δ = 0.15, because the threshold *is* the swept band and the
band *is* the body. So the two tests are independent and a level should pass
both — **basin width** answers "is this a tolerance?", **δ-invariance** answers
"is this clearance?".

What comes out the other side is the sentence to design against:

> A constraint built against the shape of the free space survives shrinking the
> vehicle. A constraint built against the size of the vehicle does not. Walls
> that forbid a *placement* hold at any clearance; gaps that forbid a *sweep*
> hold only at the clearance you tuned them to.

**Making a weak level harder by tightening it makes it worse by this measure,
every time.** Counter-intuitive, and the specific mistake the probe exists to
catch. The Short Side's closing wall was swept: flush with the bay it costs 11
direction changes at full size and 1 at δ = 0.15. Shaving an envelope buys
hardness by standing as close to the cliff as possible, which is the most
clearance-dependent place a level can be.

The results are under Open decisions, "The set against the difference rule".

**What this measurement found.** On the objective that is actually the score,
ten of the thirteen levels then in the set wanted 0 or 1 direction change. The game's own
scoring unit was, in almost every level, not being asked for. That is a fact
about the levels and not about the tool, and it is what the tool is for. Three
levels were re-cut in response — First Bay to 2, Tight Lane to 5, The Alcove to
2 — though Tight Lane was cut shortly afterwards under constraint 1's
difference rule, because 5 direction changes bought with 0.1 m of bay slack is
the anti-pattern that rule names. That is the shape of the whole finding: the
solver can tell you a level is not asking for the score, and it cannot tell you
the level has an idea.

The lever that moved them is narrow. A perpendicular bay costs a direction
change only while the lane in front of it is between the hatchback's swept
width (2.83 m, below which it cannot turn at all) and the depth its nose-first
swing needs (3.04 m). That is a 0.21 m window, measured, and every lane in the
hatchback series is now placed inside or below it on purpose.

**It costs what it costs.** Ordering by direction changes first means the
search exhausts everything reachable in *n* of them before it looks at *n+1*.
The Impossible Gap went from 1 s to 26 s, Yard Full from 20 s to 50 s, Artic
Dock from 101 s to 404 s. That was accepted rather than worked around: this is
a tool a designer runs between edits, not something in a player's way, and a
fast wrong number is worth less than a slow honest one.

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

**There is one view, and levels are designed for it.** A chase camera and an
overhead mode, both of which see the whole vehicle from outside. There are no
mirrors, and there is no driver's-eye view. So **a level may not be built on
what the player cannot see** — occlusion is not a difficulty this game has, and
a level premised on it describes something that does not exist. Blind Side was
exactly that: a semi backing into the dock on the side a real driver's mirrors
do not cover, in a game with no mirrors. What the level actually has is a yard
with two pillars in it, so a single long arc does not fit, and that is now what
it says.

When this was first written it claimed the rule bought something back — that
height was the axis an outside view opens, since an overhang is legible from
the chase camera and invisible from above, and `wall()` already takes an `h`.
**That was wrong, and the engine says so.** Collision is two-dimensional on
XZ. `collidersOf()` (`src/colliders.js`) emits `{x, z, w, d, rot, kind}` and
drops `h` for every obstacle; `overlaps()` is a separating-axis test on those
rectangles; nothing in `Game.isFree` or the validator's `blocked()` reads a
height. The only readers of `h` are the mesh builders in `src/world.js` and the
camera's look-at target. **A 0.15 m kerb is exactly as solid as a 5 m
building**, and Kerbside and Bus Stop already depend on that being true.

So the rule closes an axis and opens nothing. Height becomes available only by
building it: an obstacle `clearance` compared against a vehicle height in the
two containment tests, which is roughly a dozen lines and a new rule about what
a vehicle may pass under. That is a decision, not a discovery, and it is in
Open decisions rather than assumed here.

*Held by:* the reader, and `src/camera.js` for the two modes.

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
- the level hint, which stated the solution in words. It first moved to the
  level-select tile and the pause card; then it went entirely. The tile is
  unavoidable before a first attempt, so a hint there is not optional reading —
  it hands over the insight the level exists to make you find, and turns a
  level that is hard to figure out into one that is merely hard to drive. The
  geometry now carries the whole lesson. The risk taken knowingly: a level
  whose idea nobody finds looks exactly like a level that is broken, and
  nothing in the game distinguishes them.

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
| 1 — route, not measurement | `SHRINK=0.15` difference probe | count collapses |
| 7 — swept ring | printed per level by the validator | visible drift |
| 2, 5, 6, 8, 9, 10, 11, 12, 14 | nothing | silent |

Nine of fourteen are held by reading. That is the honest state of it: the
solvability gate and the dead-code sweep are machine-checked because both are
invisible until someone trips over them, and the rest are cheap for a person to
notice and expensive to automate. This file is what a reviewer checks a change
against.

Constraint 1's row is new and is not yet a gate. The probe produces the number
and a person reads it; nothing exits 1. Making it a gate needs a failing
condition, and the honest one is not obvious — "the count must not fall at all"
would fail First Bay, which is a legitimate first level, and "must not fall to
zero" passes a level that goes 5 to 1. It is listed here because it is the
first thing that measures constraint 1 at all, not because it decides anything
on its own yet.

Two other entries are weaker than they look. The swept-ring row prints a number
that is constant per vehicle, so it cannot show drift in anything a level does
— constraint 7 says what actually governs bay entries. And the stale-record row
only catches a level getting *easier*; nothing checks that a level still asks
the question its comment says it asks.

---

## Open decisions

Not constraints — questions that are known, deliberately unanswered, and would
otherwise be lost. Each says who it belongs to.

### Core, and the user's

**The vehicle roster is a content axis.** Decided by the user, and it overrides
the repetition charge that the audit above was built on: "same level with
bigger vehicle / worse steering vehicle is more challenging", and "i'm open to
add even more vehicles with different wheel positioning / shape that makes the
manouvering feel different, makes the movement of the vehicle different." So a
level is not disqualified for reposing an earlier level's geometry to a heavier
or worse-steering vehicle, and **no level is cut for repetition**. What is
still owed is a measurement: the difference probe cannot tell whether a vehicle
substitution changes which routes exist or only how much room they have, and
that measurement is what would decide whether Van Life and Bus Stop are earning
their place or merely occupying it. Being designed.

The corollary the roster already supports and no level uses: the vehicles are
not a size ladder. Steady-state articulation in a full-lock forward turn is
**+15.1° for the tow car and −5.5° for the semi** — opposite signs, because the
drawbar hitch sits 1.10 m *behind* the tow car's rear axle and the fifth wheel
sits 0.45 m *ahead* of the semi's. Reverse response distance (`axleFromHitch`)
is 2.90 m against 7.60 m. The tow car is twitchy and correctable; the semi is
slow and unforgiving. And the bus is the only vehicle with a tail: rear
overhang swing at full lock is 0.67 m against 0.07–0.09 m for everything else.
Bus Stop does not use it. A tail that swings outboard on the side opposite the
turn is a placement property, not a width property, which is the class the
probe says survives.

**Whether obstacles get a height.** Found by measurement, not assumed: collision
is two-dimensional. `collidersOf()` drops `h`, `overlaps()` is a separating-axis
test on flat rectangles, and neither `Game.isFree` nor the validator's
`blocked()` reads a height — so a 0.15 m kerb stops a semi exactly as a 5 m
building does, and Kerbside and Bus Stop depend on that. Giving obstacles a
`clearance` compared against a vehicle height in those two tests is about a
dozen lines. It would open overhangs, canopies and low bars as level material,
which is the one class of obstacle an outside camera reads better than a plan
view. It also adds a rule the player must learn without being told (constraint
12 forbids telling them), and a vehicle that fits under one thing and not
another is a *measurement* difficulty unless the level is built so the height
changes the route. Not decided.

**Whether the game should enforce the jackknife stop.** The solver treats
grinding it as a failed move; the game permits it. Enforcing it in the game —
a contact, a refusal to steer further, or a void — would make the two agree and
would make an articulation budget a thing a level can be built on. Leaving it
permits a player to beat a record by a route the tool cannot search. Not
decided.

**The set against the difference rule.** No longer a hand audit. Constraint 1
is now measured, by the probe described under constraint 4: shrink every
rectangle belonging to the vehicle by δ per side, change nothing kinematic, and
see whether the level still costs what it cost. Every number below was produced
by `SHRINK=δ node tools/validate.js <level>` and reproduced independently of
the peer who proposed the method.

| level | δ=0 | δ=0.15 | δ=0.30 | reading |
|---|---|---|---|---|
| Loading Dock | 3 | 3 | 3 | structural outright |
| Kerbside | 1 | 1 | 1 | structural outright |
| Bus Stop | 1 | 1 | 1 | structural outright |
| Trailer Trouble | 1 | 1 | 1 | structural outright |
| The Impossible Gap | 3 | 3 | 0 | structural, narrow basin |
| The Alcove | 2 | 2 | 0 | structural, narrow basin |
| Dead End | 5 | 2 | 0 | survives 15 cm, dies at 30 |
| First Bay | 2 | 1 | 0 | half of it is clearance |
| Van Life | 1 | 1 | 0 | holds at the honest line |
| The Short Side | 2 | 0 | 0 | **all of it is clearance** |
| Tight Lane (cut) | 5 | 0 | — | all of it is clearance |

Read it with two cautions. The solver is an upper bound, so ±1 is noise and
only a collapse is signal. And δ=0.30 makes the hatchback 1.16 × 3.35 m, which
is smaller than a real car — it is a stress test for separating survivors, not
a fair pass. **δ=0.15 is the honest line.**

What it establishes:

- **Tight Lane's cut is confirmed mechanically**, 5 → 0. Its entire cost was
  clearance, and its README line said so in its own voice: "Now aim it, with
  0.64 m of slack."
- **The Short Side is mislabelled, and the hand audit had it in the holds
  column.** It is 2 → 0 at the honest line. Sweeping the wall that closes the
  aisle west of the bay shows why: flush with the bay costs 11 direction
  changes, the shipped position costs 2, and 0.75 m further west costs 0. The
  level stands on a spike about half a metre wide with a cliff on one side and
  a chasm on the other — a tolerance in the purest form the game contains.
  And the constant it is tuned against is the wrong one. Its comment reasons
  about the reverse-in envelope (6.54 m past the bay); the bay has 1.45 m,
  which was never close, so the reverse-in is not what the wall decides. What
  the wall decides is the **nose-first** entry, which wants 1.95 m. The level
  ships half a metre short of it, and that half-metre is the whole level —
  which is exactly why 0.15 m a side hands back enough to collapse it.
  Constraint 7 says a level must be measured against the right constant; this
  one is measured against 6.54 when 1.95 is binding. So the class it claims —
  *the room is not on the side you arrived from* — is not built by anything in
  the game, and it is buildable: by making the wrong approach **absent**, not
  narrow. Shortening an aisle is a clearance, and clearances are what the probe
  eats. Being re-cut.
- **Kerbside is the soundest level in the game, not an at-risk one.** It holds
  at 30 cm of relief per side because a parallel park is non-holonomy in its
  pure form: a car cannot translate sideways, so a lateral displacement costs a
  manoeuvre at *any* clearance. Its 0.05 m `nearest` is a real fault and a
  separate one — the idea is structural and the execution is knife-edge. Two
  faults were being conflated. Loosen the gap, keep the level.
- **Loading Dock is the other structural survivor**, holding 3 through 30 cm,
  and it was the level with no stated idea at all. It has one; nobody had
  written it down.
- **First Bay's two direction changes are a 0.45 m nudge.** Found by the
  `ROUTE=1` leg dump the moment it was added: forward 7 m, reverse one step,
  forward into the bay. The count is real and the manoeuvre is not, which is
  the same shuffle-at-the-bay-mouth behaviour the old cost function was
  criticised for — except the number is now honest about it. Acceptable in the
  one level that exists to teach the reverse-in, and it would not be acceptable
  anywhere else. A count without its legs is not evidence about a route.
- **Bus Stop and Van Life are not answered by this probe**, because their
  charge was repetition rather than tolerance and no clearance measurement can
  speak to it. **That charge has since been rejected** — see the vehicle-roster
  entry below. Both stay.
- **Artic Dock and Yard Full hold** at 1 direction change through δ = 0.30.
  Measured after the table above was first written. Neither is a tolerance
  level.

**What this probe cannot see, and what was concluded from it anyway.** `SHRINK`
trims the vehicle's rectangles and leaves the kinematics untouched, which is
exactly what makes it a clean test of clearance — and exactly why it says
nothing about putting a *different vehicle* in the same geometry. A δ-shrunk
hatchback is a hatchback with more room. A van is not a hatchback with less
room. On the strength of the probe plus a taxonomy that counted five available
problem classes, a recommendation was put to the user to cut The Short Side,
Van Life, Bus Stop, Yard Full and Artic Dock — a third of the game. The user
rejected it, on the grounds recorded below, and was right to: the measurement
did not support the part of the conclusion that mattered. Nothing was cut.
Tight Lane, cut earlier, stays cut; that one was confirmed mechanically at
5 → 0 and does not depend on this reasoning.

**Only the first level is exempt from asking something.** Decided. First Bay
teaches the reverse-in and the controls, and a level doing that is allowed to
have no puzzle. By the time a player reaches the van they know how to park, so
introducing a vehicle is not on its own a reason for a level to exist. The
alternative considered was one handover level per vehicle, which would have
exempted five of twelve levels — most of the way to the rule not being a rule.
The consequence is recorded above: Van Life and Artic Dock need ideas they do
not have.

**Which manoeuvre First Bay should teach.** Re-cutting it to cost a direction
change made it a two-row car park with a 2.9 m aisle, so level 1 now hands the
player the reverse-in. That fixes what was wrong before — The Short Side used
to introduce the reverse-in *and* "the room is on the side you did not arrive
from" in the same level — but it also means level 1 teaches the manoeuvre, the
controls and the parking test at once.

**A per-level design goal for the six large-vehicle levels.** Van Life, Loading
Dock, Bus Stop, Trailer Trouble, Artic Dock and Yard Full each state what the
vehicle makes hard, but none states what the *player* has to work out, which is
what the hatchback series was re-cut around. Five of the six cost 1 direction
change. Whether that is a gap or the correct answer — the vehicle being the
problem, so the geometry need not also be — is undecided. Same terms as the
hatchback series: a design session first, with the user; do not invent levels
to fill a table.

### Recorded, not open

**The order of the hatchback series.** Decided: reordered rather than
re-tuned. Tight Lane cost 5 direction changes at position 2, making it the
second-hardest of the seven and the second level a player meets, and its
manoeuvre was First Bay's, so it introduced nothing. Loosening its bay to 0.79
m would have brought it to 3 but made it roomier than First Bay's 0.74 m,
which is the drift its rename was meant to end. It moved to position 7
instead. The series is now First Bay 2, The Short Side 2, Kerbside 1, The
Alcove 2, The Impossible Gap 3, Dead End 4, Tight Lane 5 — ascending from
position 3, with the dip at Kerbside being a different manoeuvre rather than
an easier one. The move also gives Tight Lane a reason to exist that it did
not have at position 2: at the end of the series every idea has already been
handed over, so a level with no idea of its own is the exam rather than a
lesson.

**What "this level teaches X" has to mean.** Decided: **the cheapest completion
embodies the lesson.** The three candidates were that every completion does,
that the cheapest one does, or that exactly one solution exists. The first and
third are not reachable — impossibility is not provable with a lattice search,
which can only fail to find a counterexample — and the second is the one that
follows the player's incentive: a player optimises direction changes against
their own best, so an unintended route that is *cheaper* than the intended one
means the game actively rewards avoiding the lesson. Not yet built. What a
checker needs is below, under "How a level's design goal gets checked": a
signature carried on the search state, not a test on the final pose.

**Mirrors, and the driver's-eye view.** Decided: neither, and the reason is
general. The game has one kind of view — outside the vehicle, whole vehicle
visible — so no level may be built on what the player cannot see. That is now
written into constraint 9, along with the half of it that gains something:
height is legible from an outside view and invisible from a plan view, and
`wall()` already takes an `h`. Blind Side, whose entire premise was a mirror
blind spot, is renamed Yard Full and now claims only the obstruction it has.

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
