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
number would have to come from a search, and a search finds one route, not the
best one — which is why the solver that used to produce it was never allowed to
publish it, and why its withdrawal (constraint 4) changes nothing here.

The result card's verdict follows from that. It used to have four grades, the
top one gated on beating par. With no par it lost that one, and the remaining
three were all about collisions — which is a scale over a fact that has only
two values, so it is now the two: `counts` or `void`.

**A collision voids the score, not the progress.** A run with any contact in it
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
collision — displayed next to the collision counter, in a game where a
collision now voids the run. `shunts` survives as the identifier in code, where
the second meaning cannot reach a player.

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

## 3. Withdrawn: every level ships proved, not eyeballed

## 4. Withdrawn: the solver is a design tool, and its number is a record

Both of these were the same thing: `tools/validate.js`, a hybrid-A* search over
`(x, z, yaw[, trailerYaw])` driven by the game's own `integrate()` and collision
boxes. Constraint 3 refused to ship a level the search could not park. Constraint
4 said the number it produced was a record and never reached the player, and
carried the reasoning for why that number was an upper bound rather than a
minimum: `seen` collapsed exact poses into lattice cells, so a route the lattice
could not represent was a route the search could not find.

**They are withdrawn because the solver is gone.** It was the largest thing in
the project — a search, a lattice, a stale-record check, a no-slip sweep, three
substitution probes — and everything it produced was for the designer. The
levels it validated are kept; the tool that validated them is not. The numbers
are still withdrawn to two places rather than deleted, because the sections
below refer to them and because the levels were cut against them.

**What survives the withdrawal**, because the levels rest on it:

- The entry minima for the hatchback, measured by driving `integrate()` out of a
  bay at full lock. Reverse-in: 1.60 m of aisle depth, 6.54 m of aisle past the
  bay, 0.95 m short of it. Nose-first: 3.04 m of depth, 4.09 m of run-up before
  the bay, 1.95 m past it. These are minima — loosening the lock makes both
  worse — and they are the numbers the levels are cut against. They are written
  at the top of `src/levels.js`, where they are used.
- **The window is 0.21 m wide.** A perpendicular bay costs a direction change
  only while the aisle in front of it is between the hatchback's swept width
  (2.83 m, below which it cannot turn at all) and the depth its nose-first swing
  needs (3.04 m). Every aisle in the hatchback series is placed inside or below
  that window on purpose. First Bay's is 2.90 m.
- **Ten of thirteen levels were not asking for the score.** That was the
  solver's one substantial finding, and it is the reason constraint 1 exists in
  the shape it does. Three levels were re-cut in response and one was cut
  outright. The finding is kept; the tool that found it is not needed to keep
  believing it.
- **A level and its mirror image are the same puzzle** — the model is
  equivariant under `(x, yaw, steer) -> (-x, -yaw, -steer)`. This is a property
  of `integrate()`, not of the search, and it is still true.

**What is lost, stated plainly.** Nothing now proves a level is solvable, and
nothing now measures whether a level's cost is its route or its clearances. A
level edited into impossibility will be found by playing it. That is the cost of
the removal, and it was accepted knowingly: the alternative was carrying a
search, a lattice and four probes to check fourteen levels that do not change.

*Held by:* nothing. Playing the level is the check.

## 5. A collision is entering contact, not being in it

Touching something is a state. The collision is the moment you enter that
state, and you cannot enter it again until you have left it. Grinding along a
wall is one collision however long you hold it; letting go and hitting again is
two.

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

**The word is "collision" and not "crash", and it follows from the two bullets
above.** Decided by the user. A game with no severity threshold scores a
0.05 m/s kerb touch and a hard hit identically, so "crash" promises a severity
this game refuses to measure and then does not deliver it. "Collision" names
the event, and the event is all there is. The counter, the on-screen label, the
identifier in the code and this file now say one word between them — they used
to say three: `bumps`, "crashes", "contact".

**The jackknife stop is a contact.** Decided by the user: folding a trailer as
far as the hitch goes costs a collision, on the same terms as a wall — one on
entering, none for holding it, another after unwinding and refolding. It
already stopped the vehicle, because `isFree` refuses a jackknifed state
exactly as it refuses one inside a wall (constraint 16); what it did not do was
score correctly.

It scored **two collisions for one fold**, and the reason is that `touching`
was inferred from whether a step was refused rather than read off the state.
At a wall those agree: the sub-step creep leaves the body flush, so every later step
is refused too. At the fold they do not. Measured on Fold against a 78.00°
limit: refused at 77.9918°, then a **free** step at 77.9978° — nearer the limit
than the refusal — then refused again. The free step cleared `touching`, so the
refold counted a second time.

No margin on the angle separates those two states, because a slow approach
passes through any margin while still free. What separates them is direction:
the rig has left the fold when it has actually unwound it. So the fold angle at
the refusal is remembered, and `touching` is held until the articulation comes
back below it.

Impact still scales the flash and the rumble; it does not decide whether the
collision happened. Sound, rumble, flash and the counter all fire on the same
event — with the cooldown gone they would otherwise have fired every physics
step, buzzing at 120 Hz and allocating an audio buffer per frame for a scrape.

*Held by:* `Game.stepPhysics` (sets `touching`, and holds it through a fold via
`foldAt`) and `Game.onContact`, which returns early while it is set. `foldAt`
is on the rewind tape with the rest of the frame (constraint 18), so rewinding
past a fold un-scores it.

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

*Enforced by:* nothing. A `sweptWidth()` used to be printed per level by the
validator, which made the two corridor levels legible in its output but was
never an enforcement of this constraint: it is constant per vehicle, so the
column read 2.83 on every hatchback row and could not make drift visible. A bay
level's real constraint was not printed at all. Both are gone with the solver;
what governs bay entries is the table above, repeated at the top of
`src/levels.js`, and a person checks against it.

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
flip gone the mode collapsed into `chase` on its own. Three modes remain, and
they answer three genuinely different questions:

- **chase** — what the vehicle looks like from outside, so its extremities are
  legible at once. This is what makes it a driving game rather than a puzzle
  on a grid.
- **cockpit** — what the driver actually has: a seat, a bonnet, and three
  mirrors. It is the view every other one is a cheat against.
- **overhead** — what the physics sees. Collision is 2D on XZ, so this view
  *is* the collision model, with nothing hidden by perspective.

A fourth mode would have to answer a fourth question. "The same view, held
differently" is not one; that is what the right stick is for.

**The inside view exists because most driving games get it wrong.** The user's
statement of the fault, which is the whole specification:

> "In most driving games, this view is flawed because I can only see the inside
> of the car, but in real life, when I am driving, I can see the front of the
> car also."

So the bonnet is not decoration in this mode, it is the mode. Three things
follow, and each was measured against a screenshot rather than guessed:

- **The eye sits above the body box, behind the glass.** That is what puts the
  bonnet in frame at all; `src/carMesh.js` places it, because the code that
  draws the windows is the only code that knows where someone behind them
  would be. A bus and a cab-over have no bonnet, so they are given the thing
  that does its job — a dash whose front edge is a fixed distance from the
  nose.
- **A windscreen is glazed, not glassed.** A screen the driver sits *behind*
  is a separate slab in front of the eye, and an opaque slab there is a wall:
  the first bus build rendered a full-frame grey rectangle. `GLAZE` is the
  same glass with something on the other side of it.
- **The lens is 60° and the head starts 7.5° down.** A driver's field of view
  is far wider than a game camera's, and the part a 52° frame cuts off is
  exactly the bonnet. Both are the framing a level hands you, so `recentre`
  puts them back; neither is the camera deciding something mid-drive.

**Mirrors are aimed where the glass is and drawn where the eyes go.** A mirror
camera sits at the mirror's mount point and looks where that mirror looks —
that part is real. What is not real is the position on screen: the panels are
at the two edges and the top centre, because the alternative is a 7 cm
rectangle out at the corner of the windscreen that can only be read by turning
the view, which is the thing this mode exists to avoid. The user asked for
exactly that trade:

> "not on this side of the car, so I don't have to turn the camera in the game,
> but on the sides of my screen and on top in the center of the screen"

Mirrors are aimed from the vehicle's heading alone. Turning your head does not
turn a mirror. They render only in the inside view, because the other two
answer the same question by showing the vehicle from outside, and they are
rendered after the main pass with `shadowMap.autoUpdate` off, so three extra
scene passes do not become four shadow rebuilds.

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

**A level may not be built on what the player cannot see.** This used to be
justified by there being no mirrors and no driver's-eye view; both now exist,
and the rule survives on a better argument. Every mode is one button away at
any moment, and the overhead mode shows the whole collision model with nothing
hidden by perspective — so a level premised on occlusion is a level premised on
the player not pressing a button. Blind Side was exactly that: a semi backing
into the dock on the side a real driver's mirrors do not cover. What the level
actually has is a yard with two pillars in it, so a single long arc does not
fit, and that is now what it says.

The inside view is therefore an *option*, never an assumption. Every level has
to remain finishable from the chase camera alone, which is the view they were
all proved and tuned against.

When this was first written it claimed the rule bought something back — that
height was the axis an outside view opens, since an overhang is legible from
the chase camera and invisible from above, and `wall()` already takes an `h`.
**That was wrong, and the engine says so.** Collision is two-dimensional on
XZ. `collidersOf()` (`src/colliders.js`) emits `{x, z, w, d, rot, type}` and
drops `h` for every obstacle; `overlaps()` is a separating-axis test on those
rectangles; nothing in `Game.isFree` reads a height. The only readers of `h` are the mesh builders in `src/world.js` and the
camera's look-at target. **A 0.15 m kerb is exactly as solid as a 5 m
building**, and Kerbside and Bus Stop already depend on that being true.

So the rule closes an axis and opens nothing. Height becomes available only by
building it: an obstacle `clearance` compared against a vehicle height in the
two containment tests, which is roughly a dozen lines and a new rule about what
a vehicle may pass under. That is a decision, not a discovery, and it is in
Open decisions rather than assumed here.

*Held by:* the reader, `src/camera.js` for the three modes, and
`src/mirrors.js` for the panels.

## 10. An aid may describe the vehicle; it may not describe the solution

The floor may draw what the vehicle is doing and where that runs out. It may
not draw where the bay is, which way to go, or what to do next. Judging the
route is the skill the game is about; the geometry of your own steering is not
the route, and refusing to show it does not make the route harder to find, only
harder to see.

**The mechanical form of the line, and the one to check a new aid against: an
aid may not read the target.** Every drawing in this game is derived from the
vehicle's own state by the game's own code — `world.target` is not reachable
from `TurnCircles.update`, `Guides.update`, `Game.contactPose` or `Traces`, and
that is not an accident of layering. A route to the bay cannot be computed
without knowing where the bay is, so an aid that never reads it cannot become
one, whatever else is done to it. Anything that would need the target is the
thing this constraint exists to keep out.

**This used to be a flat prohibition on drawing the vehicle's future, and it
was withdrawn by its author.** It read "no ghost of where the vehicle will end
up... This was built once and deliberately removed. **Do not add it back**",
and the record of the removal is still worth having: the first version of that
feature was a painted arc that was not good and did not survive. What the
sentence did not record is that it was written while the user did not yet know
whether they wanted such a thing at all. They now do, and said so:

> "at that point I wasn't even sure whether I want a feature like this. But now
> I know that I'm missing something, and I have better ideas, but I know better
> what I would need... So at this point, that node that you found in design.md
> becomes stale and should not be preserved, but should be removed."

So the prohibition is gone and the line above replaces it. A constraint that
records an unmade decision as a settled one is worse than no constraint,
because it is obeyed by whoever comes next without the decision ever being
looked at again.

**What is still removed, and stays removed**, is on the other side of the line:
the screen-edge chevron pointing at the bay, the bobbing cone over it, the
corner posts, and the level hint that stated the solution in words. Those are
listed under constraint 12 with the reason they went. Every one of them had to
read the target to exist.

**The reverse camera rails.** Requested as such: "the reverse camera should
show the current trajectory of the car for about a meter distance". Four limits
keep them to what a real car draws:

- **Only in the reverse camera panel.** The rails are a `Group` added to the
  scene with `visible = false`, switched on for that one render pass and off
  again, so no other view can show them. *The reason for this bullet has
  changed and the bullet has not.* It used to be that the overhead view would
  turn them into a plan-view solution — which cannot be the reason any more,
  because the turning circles now draw a longer version of the same thing in
  exactly that view, with permission. What keeps the rails in the panel is that
  they are the panel's own furniture: a real reverse camera paints them on its
  own screen, and a second copy of them lying in the world would say less than
  the circles already say, in a second visual language.
- **Only from the driver's seat.** The panel is inside-view only, along with
  the mirrors. It was not, once, and that was a bug: from a chase or overhead
  camera the player is already looking at the space behind the vehicle, so a
  reversing panel there is a second, worse answer to a question the view has
  already answered.
- **Only while reversing.** Forwards, the panel is not up.
- **Only one metre.** Long enough to know whether the bumper clears, far too
  short to plan a shunt with. A real car's rails stop at about the same place
  and for the same reason.

**The turning circles.** Requested as such: a projection on the ground of "the
circle that wheel would drive along if the steering wheel would stay in the
current position", for every wheel, with the shared centre marked.

- **It is a setting, and it starts off.** The game a player is given is still
  the plainest one. Turning it on is a decision the player makes about their
  own game (constraint 12).
- **It is the present, not a plan.** The figure is the geometry the vehicle is
  in at the lock it is holding — hold the wheel and drive, and the circles do
  not move, because they were never a path the vehicle was going to take. Turn
  the wheel and the whole figure jumps.
- **It is clipped to the level.** A gentle lock puts the circle hundreds of
  metres away; what is off the level is not drawn, and the level is not made
  bigger to hold it. A circle scaled to fit would be a circle the vehicle is
  not on.

*Held by:* `src/turnCircles.js`, and the `turnCircles` setting defaulting to
`off` in `src/settings.js`.

**First contact: where this lock runs out.** The one aid that is about the
future, and the newest. The user's statement of what it is for:

> "although the projections are helpful to understand how the car would get
> there, it's not clear where the car could get without crashing into anything"

A circle says where the vehicle *can* go and says nothing about how much of it
is left, which on these levels is usually a metre or two. So: one copy of the
vehicle, standing at the pose it would first touch something at, driving on at
the steering it is holding, in the direction it is going.

- **It is the vehicle's own answer, not a drawing of one.** `Game.contactPose`
  walks the game's own `integrate` forward and stops on the game's own
  `isFree`, creeping up with the same bisection `stepPhysics` uses. A predicted
  contact that disagreed with the real one would be worse than showing nothing,
  because a player would learn to distrust it exactly where it matters. It is
  the same argument as the rails being driven by `integrate` rather than by an
  artist.
- **It rides on the turning circles and is inert without them.** It is the end
  of an arc, and a vehicle standing by itself in the middle of a level says
  nothing about how it got there. Its own setting, off by default, greyed out
  in the menu while the circles are off.
- **It is one point, not a plan.** It says where this lock stops. It does not
  say which lock to hold, does not search over locks, and does not know the bay
  exists — the rule at the top of this constraint, in the one place it was
  most tempting to break.
- **Bounded by one lap.** Hold a lock and the vehicle comes round to where it
  started, so a lap that touches nothing means there is nothing to touch and
  nothing is drawn. Straight ahead, the arena runs out inside its own diagonal.
- **Nothing when the answer is "here".** A vehicle already resting against a
  wall is not told where it would first touch one, and the ghost is not drawn
  over the car the player steers by (constraint 8).

*Held by:* `Game.contactPose`, `ContactGhost` in `src/ghosts.js`, and the
`firstContact` setting.

**The tyre traces and the direction-change ghosts are records, and the line
above is what they are on the right side of.** "Record, not prediction" used to
be the whole argument, and it is no longer available on its own: two of the
aids above *are* predictions and are allowed. What all four have in common is
the rule at the top. The traces draw where the wheels have been; the ghosts
draw where the body has been (constraints 19, 23). A player can read a bad line
off either afterwards, which is the point. Neither has been told where the bay
is, and neither could say.

**Why this is not folded into constraint 12.** They overlap on the chevron and
the hint, which fail both, but they ask different questions. 12 asks whether a
thing on screen pays on the tenth attempt; 10 asks whether it knows the answer.
An aid can pass 12 handsomely and still be forbidden here — a route to the bay
would be read on every attempt, and that is exactly what makes it worth
forbidding.

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
Shunts, collisions and your own best are the score — there is no record and no
par on screen (constraint 2). The proximity bar is the one
gauge showing something no camera angle reveals, and the articulation gauge is
the only honest warning before a trailer folds. The speedometer and the gear
letter were neither — they measured a quantity constraint 6 exists to make not
matter, twice over, next to a scored number displayed smaller than either.

**The proximity gauge is off in the inside view.** Both the bar and the beeps.
The user's instruction — "In the first person view, the reverse radar should be
turned off" — reads as the whole sensor system rather than only its display,
which is the reading that makes the inside view coherent: from the driver's
seat you get three mirrors, a reverse camera and your own eyes, which is what a
real driver has, and no gauge counting down centimetres. The articulation gauge
stays, because a folding trailer is not something a driver's seat reveals
either.

**The steering wheel came back, and the rule is why.** A steering-angle dot was
removed here alongside them, when Direct was the only steering mode: the stick
position *was* the wheel position, so the gauge repeated the controller. Two
things since then made the wheel a quantity the player cannot see. Rate
steering (constraint 15) leaves the lock where you let go of it, so the wheel
became state rather than an echo of the stick. And the inside view puts the
front tyres out of sight entirely, in both modes. The user's statement of what
it has to be:

> "the driving wheel on my screen should mirror my movements with my Controller
> device"

Which `car.steer` already is: in Direct it is where the stick is, in Rate it is
where the stick has left it, and in both it is where the wheel physically
points. Full lock is drawn at 140° rather than a real wheel's two-and-a-half
turns, so the marker is legible at a glance and never wraps past vertical. It
is a position, not a readout: no number, no degrees, nothing that invites
aiming at a value.

Two consequences that were derived rather than decided, and are worth keeping
because the derivation generalises:

- **The vehicle name is on the play HUD after all, and the derivation that
  removed it was wrong in an instructive way.** It used to be here as a
  consequence: the player's vehicle is the only saturated colour on screen
  (constraint 8), so a tag naming it labels the one thing that cannot be
  missed, and the level-select tile says it before you enter. The user
  overruled it — "each level should name which vehicle is on the level" — and
  the reason the derivation failed is that it treated the name as a label on
  the *car*. It is a label on the *level*. The roster is a content axis (Open
  decisions): several of the twenty-one repose an earlier level's geometry with a
  heavier or worse-steering vehicle, and on those the vehicle is the whole
  difference between one level and another. A player looking at a paused card
  that says only "The Alcove" is not being told which of the two problems by
  that name they are in. So it is named wherever the level is named — tile,
  play HUD, pause card, result card — in the dim mono the rest of the level
  identity uses, which is not the register a saturated tag would have been.
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

## 15. A setting may change the vehicle's timing, never its geometry

The game shipped with no options at all. The ones it has now are handling, and
they divide into two modes and four rates.

**Steering.** *Direct* is the default: where you hold the stick is where the
front wheels point, and letting go straightens them. *Rate* is how a truck sim
does it — how far you push the stick is how fast the wheels turn, and letting
go leaves them where they are, so returning to straight is something you do.

**Throttle.** *Speed* is the default: the trigger is the speedometer, half
pressed is half speed, and it closes the gap at `brakeAccel` rather than
`rollDrag`. A trigger springs back over tens of milliseconds rather than
instantly, so following it is already a curve; the rate limit is there for the
keyboard, which has no such curve. *Accelerator* is the original and is kept as
the option. Speed is the default because it is what the game actually asks for:
the difficulty is finding the line, not holding a speed along it, which is
constraint 6's argument about gears applied to the pedal.

**Four multipliers**: steering speed (Rate only), top speed, acceleration and
slow-down. Two are deliberately excluded. Crawl is not scaled, because it
exists to be a *fixed* slow speed. The brake button is not scaled, because a
brake is a brake — slow-down governs letting go, which is the thing that felt
too slow.

### Why the line is where it is

The line is not "how it is commanded" — that was the first draft of this rule
and it was too weak to place the multipliers. It is **timing against geometry**.

A vehicle's reachable set of *paths* is fixed by `maxSteer`, `wheelbase`, the
body rectangles and the trailer geometry. None of those is settable. Everything
that is settable only changes how fast a path is traversed, and that is not an
argument, it is arithmetic: in `integrate()` both the position step and the yaw
step carry a factor of `v`, and so does the trailer's articulation rate. Over a
fixed *arc length* the path is therefore identical at any speed. Measured, at
equal 3 cm steps over 20 m of a varying-lock profile:

| | 1.0 vs 2.5 vs 6.0 m/s |
|---|---|
| van | 3.55e-15 m, 4.44e-16 rad |
| coach | 1.99e-15 m, 4.44e-16 rad |
| semi (trailer included) | 1.78e-15 m, 2.22e-16 rad |

That is floating-point identity, not similarity. And `steerRate` is not in the
the measurement at all: it was taken by applying steer angles to `integrate()`
with no rate limit, so how fast the wheel reaches an angle is something the
measurement already ignores.

So every route that is drivable stays drivable under every combination of
settings, and a level's difficulty means one thing rather than sixteen.
The score is safe for the same reason: a shunt is a sign change in the
direction of travel with a 0.2 m/s deadband (`Game.stepPhysics`), and no
multiplier changes how many times a route crosses zero.

`maxSteer` is the one geometric constant a player might expect to tune, and it
is the one that is not offered — which is the same objection the user raised
before it was built: how far the wheels turn is the vehicle's own lock, not a
preference. Bay tolerances, collision boxes and the vehicle specs' dimensions
are geometry too, and are not settable for the same reason.

Collision sampling survives the top end: `Game.stepPhysics` sub-steps by
distance at 3 cm and caps at 6, which binds only above 21.6 m/s. The fastest
reachable setting is 1.6 x 2.9 = 4.64 m/s, so nothing tunnels.

*Held by:* the `SETTINGS` table in `src/settings.js` — the menu is generated
from it, so adding a setting is adding an entry there — its `gains()`, and the
mode branches in `Vehicle.control`, `src/vehicle.js`.

## 16. Every wheel rolls; nothing is dragged sideways

No body in this game moves perpendicular to the direction its own wheels point.
Not the tractor, not a trailer, not at any speed, and not at the limits of its
articulation. A vehicle that slides sideways is not one the player can aim, and
aiming is the whole game.

This is a statement about the *model*, and the model already satisfies it. The
bicycle kinematics move the rear axle along the heading by construction, and the
articulation rate

    d(trailerYaw)/dt = (v sin d - behind * yawRate * cos d) / axleFromHitch

is the rate that holds the trailer axle rolling while the hitch is dragged
around. Nothing has to be added to get the invariant. It can only be lost, and
it was lost in two places:

**The jackknife limit was a clamp.** On reaching `maxAngle`, `integrate()` used
to pin `trailerYaw` to `yaw - maxAngle`. The trailer axle is *derived* from the
hitch and that angle, so pinning the angle teleports the axle. Keep reversing
and the pin holds while the tractor turns under it, and the trailer travels
sideways indefinitely. Driven through the game's own `stepPhysics` loop, full
lock in reverse in open ground: **97% of the box trailer's travel at the fold
was sideways** — 18.7 m across against 0.6 m rolled — and 86% of the
semitrailer's, 17.1 m against 2.7 m. Neither ever stopped. After the fix both
reach the same limit and go 0.00 m further.

The limit is a stop, not a clamp — at `maxAngle` the cab and the trailer are
touching, which the game already has a rule for. So `integrate()` marks the
state `jackknifed` and leaves the geometry alone, and `Game.isFree` refuses it.
The existing sub-step bisection then creeps to the fold and stops against it,
on the same code path as a wall, and constraint 5 counts it as the contact it
is. Driving out is unobstructed: forward motion reduces the angle, so those
states are free.

**The articulation was integrated at the start of the step** while the tractor
took its heading at the half-step. The mismatch is a first-order error, and a
first-order error in the *angle* is a lateral displacement of the axle. Both are
sampled at the half-step now, which is exact for the tractor because `yawRate`
is constant across a step.

Measured as sideways metres per metre the vehicle travels — the worst step of a
sweep over both directions of travel, seven steering angles and three starting
articulations, at the game's 1/120 s:

| | before | after |
|---|---|---|
| every vehicle without a trailer | 1e-13 | 1e-13 |
| box trailer | 1.8e+0 | 4.9e-6 |
| semitrailer | 2.6e+0 | 1.2e-6 |

Restoring only the start-of-step articulation, leaving the jackknife stop
correct, gives 2.4e-3 and 1.5e-3 — three orders above where the model sits now.
The check that measured this was a sweep of the whole roster in the validator,
and it is gone with it; the numbers are kept here because they are what a
re-measurement would have to reproduce.

Normalising by the axle's *own* longitudinal displacement is the obvious measure
and it is the wrong one. A trailer axle at large articulation sits near its own
instantaneous pivot: it rotates while barely translating, so both components
approach zero together and their ratio is noise. That reported a 3.1e-1 slide on
the semitrailer which was 1.4 nanometres of movement. The distance the vehicle
travelled is never zero, so it cannot do that.

The rigid bodies are exact to floating point. What is left on the trailers is
integration error and falls with the step, at the second order the midpoint rule
is meant to give. It is not a direction the trailer can be pushed: five
micrometres per metre travelled, on the vehicle where it is largest.

The solver never had this bug to fix: it always discarded any state flagged
`jackknifed`, on the grounds that grinding the fold is a mistake rather than a
manoeuvre. What changed is that the game now agrees with it.

*Held by:* nothing, since the no-slip check went with the validator. It swept
the whole roster before the levels and refused to run them if any vehicle could
be made to slide, and it was checked against both defects it was written for:
re-introduce either and it failed, which is the only evidence that a check of
this shape is worth having. The first version of it was not — it skipped a step
once the state was flagged `jackknifed`, and the clamp sets that flag on the same step it
teleports the axle, so the check broke out immediately before the evidence and
passed against the bug it existed to catch.

*Enforced by:* `integrate()` in `src/vehicle.js` and `Game.isFree` in
`src/main.js`.

## 17. Nothing is drawn outside a collision rectangle

The user's statement, which is the rule:

> "everything I can see has a collision box, or should have a collision box"

A part drawn past the rectangle the physics collides with is a part that passes
through walls, and the player has no way to tell which parts those are. Every
mesh in `src/carMesh.js` therefore sits inside the union of the vehicle's
collision rectangles — the tractor's and the trailer's, for the articulated
ones — in the vehicle's own frame, where that union is fixed.

Measured before the fix, as the furthest any mesh's footprint reached past that
union:

| | mirrors | ends | other |
|---|---|---|---|
| hatch, van | 0.140 m each side | 0.040 m (lights), 0.020 m (bumpers) | — |
| bus, coach | 0.190 m | 0.050 m (lights), 0.045 m (front and rear glass) | 0.025 m (window bands) |
| towcar | 0.140 m | 0.040–0.050 m | 0.230 m (tow ball) |
| semi | 0.210 m | 0.260 m (cab and screen past the nose) | 0.030 m (side windows) |

Two ways to close a gap, and they are not equivalent. Bringing the geometry
inside the rectangle costs nothing but the look. Widening the collision
footprint to the geometry is the realistic one — mirrors do hit things — and it
changes what fits, so every level has to be driven again after it.

**Lights, bumpers and glazing took the first**, and are inset by half their own
depth; the semi's cab ends where its rectangle ends.

**The mirrors took the second**, on the user's decision: "Let them stick out and
collide". They are not folded in, and they are not a wider `width` either — a
car is only mirror-wide at the mirrors, and widening the body would make its
bumpers hit things its bumpers do not reach. They get a rectangle of their own,
`spec.mirrors` wide and thin, at the mirror's own z. The direction of the
dependency is the part worth keeping: the rectangle is in the spec and
`src/carMesh.js` draws the housing to fill it, so the mirror that the player
sees hit something is the mirror that hit it, and the two cannot drift apart.

**The silhouette made it structural.** A body is no longer a slab positioned by
hand: it is `spec.body`, a side outline given in *fractions* of `length` and
`height` and extruded across `width`, with an arch cut at every axle in
`axleRows()`. A point outside the rectangle would have to be a fraction outside
[0, 1], and the greenhouse is narrowed by splitting the shell at the waist,
which only ever moves geometry inward. So the body cannot leave its rectangle
by being drawn wrong, only by being written wrong.

Everything else is now zero — except one. The tow car's ball sits 0.230 m behind the car's
rectangle because that is where the hitch physically is, and the drawbar spans
1.3 m of open air between the car's rectangle and the trailer's. Drawing that
inside a rectangle would misplace the hitch; giving it a rectangle of its own
would change what fits, and so needs the levels re-checked by hand. It is in
Open decisions rather than closed by default.

*Enforced by:* construction for the body, and by nothing for the rest. Body
parts are placed as fractions of `spec.body`, which are in [0,1] of the
rectangle, so those cannot leave it. The mirrors need no check either:
`mirror()` in `src/carMesh.js` builds the housing from the same `spec.mirrors`
that `mirrorRect()` collides with. Everything else — lamps, bumpers, wheel
arches, the tow ball — is checked by eye on `dev.html` (constraint 22).

There was a script. It built every vehicle's mesh in node, walked each part's
bounding box and reported the furthest any corner sat outside all of the
vehicle's rectangles; the last run before it went reported 0.000 m for every
vehicle then in the roster and 0.230 m for the tow ball, which is the exception
above. It lived in `tools/validate.js` and went with the solver (constraint 4),
and the numbers above are a record of what it once said rather than something
anything now re-establishes. That is the honest state of it.

## 18. Rewind is free, and it does not launder the score

The user's statement of what it is for:

> "the aim of this game is to experience with the driving and parking methods
> and learn how to do it correctly... in real life, crashes are obviously bad,
> but in the game it doesn't really matter because I want to learn"

Hold the button and the run plays backwards at 3x through a tape of every
physics step; let go and it continues from there. There is no budget, no
cooldown and no cost.

**A recorded frame is the whole step, score included** — pose, motion, shunts,
collisions, the direction the last move was in, whether the vehicle was already
touching something. That is the entire mechanism for "undo the collisions and
direction changes I made during the stretch I rewound": the counters are on the
tape with the pose, so winding the tape back winds them back, and no arithmetic
anywhere needs to know a rewind happened.

**It does not conflict with constraint 2**, which is the thing to check before
adding an undo to a scored game. Rewinding past a collision puts the vehicle
back *before* it, so that stretch has to be driven again; the count that
survives is the count belonging to the path the player actually finished on.
The same holds for direction changes: rewinding a shunt also rewinds the
progress the shunt bought. What rewind removes is the cost of *restarting* —
thirty seconds of driving back to the interesting part — which was never part
of the difficulty this game is about (constraint 1).

The tape holds four minutes at the physics rate and drops the oldest frames
past that. A run long enough to overflow it is one where restarting is cheaper
anyway.

*Held by:* `src/rewind.js` and `Game.record`/`Game.restore`.

## 19. The tyres write down what the driver did

Every wheel lays a faint mark where it rolled, and the marks stay for the
level. Requested as "a light trace of all the wheels that they traveled...
not forever, but for the level duration".

**It is a record of the past, and it never reads the bay** — both halves of
constraint 10's test, and it needs only the second. The line
into a bay only becomes visible after it has been driven; nothing about the
next metre is drawn. What it gives the player is the thing that is otherwise
impossible to see from inside a car — whether the swing was one continuous arc
or three corrections, and how much wider the front wheels ran than the rear
ones.

**Sampled by distance, not by time.** A cross-section is laid every 6 cm of
travel, so the mark is a property of the path and not of the frame rate:
holding full lock while stationary writes nothing, because nothing rolled. The
same choice bounds the cost — 6000 samples per wheel is 360 m of driving, and a
level that outruns that is one where the trace stopped being readable a long
way back.

**One count for the whole vehicle, which is what makes rewind work.** Every
wheel is sampled on the same tick, so the trace is a single integer, and that
integer is on the tape with the rest of the step (constraint 18). Rewinding
truncates it. Wind a run back to the start and the asphalt is clean again —
without which the rewind would leave behind a picture of a run that no longer
happened.

The wheel positions come from `wheelPoints()` in `src/vehicle.js`, the same
function the mesh builder's axle rows come from, so a trace cannot drift from
the wheel that is drawn. Steering is deliberately not in it: a steered wheel
touches the ground in the same place whichever way it points.

*Held by:* `src/traces.js`, and `Game.record`/`Game.restore` for the rewind.

## 20. The player says when the run is over

Being inside the bay and stopped used to end the level on its own, after
holding still for 0.6 s. The user's objection is the rule:

> "it is very annoying that when I am inside the accepted parking spot and my
> vehicle's current speed is zero, then the level is ended and it shows my
> results. Instead of this, I want the player to say that they are finished"

Parking is not the moment the rectangle first fits. It is the moment the driver
decides they are done, and everything between the two — straightening up,
pulling forward half a metre, backing off the kerb — is driving the game used
to interrupt. Worse, it interrupted it *at the first success*, which is the
worst possible time: the run that ends is the sloppiest one that qualified.

So the game reports the state and never acts on it. `canFinish` is inside the
target and under 0.25 m/s; the HUD says so; **B** on the pad or **Enter** on the
keyboard ends the run, and nothing else does.

**The 0.6 s hold went with it.** It existed to keep a twitchy pass through the
bay from ending the level, which is a problem a button press does not have. A
timer that guesses at deliberateness is worse than an act that is deliberate.

*Held by:* `Game.checkParked` reports, `Game.frame` acts, both in `src/main.js`.

## 21. A level the player builds is a level, in the same words

There is no editor format. What the editor writes is `src/levels.js`'s own list
of objects (`src/objects.js`), and Export prints that list in that file's own
syntax, so a level made in the browser is source you can paste into the game.

That is a constraint and not a convenience. A second description of a level
would be a second place a bay's width can be written down, and the two would
disagree the first time either changed. It also fixes what the editor can offer:
the palette is the palette, and a thing the level format cannot say is a thing
the editor does not have a button for.

`SCHEMA` in `src/objects.js` is the whole of what the editor knows — the fields
of each type, their defaults, and the shape of the builder's own call. It sits
beside the builders, so a field the builder reads and nobody can set is visible
on one screen, and `window.dev.builders()` checks that each entry still
describes the call it claims to.

**Player levels are their own list.** Separate bests, and they unlock nothing.
A level you wrote and a level the game shipped are not comparable — you can
build a four-metre bay and park in it first go — so a best on one must not
appear where the other's do, and the twenty-one stay a sequence.

*Held by:* `src/editor.js`, `SCHEMA` in `src/objects.js`, `src/userLevels.js`.

## 22. Looking at the whole thing has to be cheap

Two bugs shipped that were visible the moment anyone looked: the driver's seat
showed no cabin at all, and the shell and its lining shared face planes, which
came out as a shifting comb across the roof and flanks of every car. Neither
needed a subtle test. Both needed somebody to look at a hatchback's roof from
two metres away, and nothing in the game puts you there — it shows one vehicle,
from one of three cameras, in one level, and reaching a fault means driving to
it first.

So `dev.html` renders the whole matrix in one frame: thirteen vehicles by six
views, or twenty-one levels from above, or the turning circles at six locks. One
image is one look at all of it, which is what keeps looking cheap enough to do
on every change. `window.dev` on that page answers the countable half —
`report()`, `coplanar()`, `builders()`.

It is dev-server only and outside the build. It is not a test suite, and this
project still has none (constraint 13's checks are `lint`, `knip` and `build`);
it is a way of seeing, and the check is still a person looking at the picture.

*Held by:* `dev.html`, `src/dev.js`, and `src/dev.js` being knip's second entry
point rather than something the game imports.

## 23. The vehicle is left standing at every direction change

A setting. Turn it on and each time the run swaps between forward and reverse,
a translucent copy of the vehicle stays where it turned: same model, same
place, same steering angle. Eight strokes leave eight of them, and the whole
manoeuvre is on the floor at once instead of one pose at a time. A ghost is a
pose and nothing else — nothing is drawn on the ground for it, for a reason
given below that is the second half of this constraint.

**It answers a question the game could not otherwise be asked.** The user's
statement of what it is for, which is the specification:

> "it would be a great demonstration of showing and capturing the position, the
> pose of the vehicle at specific moments during the execution of a series of
> steps... it's hard to understand visually why this is happening, why the
> manoeuvre is happening... Not just how is it working, but why is it working."

A parallel-parking shuffle translates a vehicle sideways by alternating two
arcs about two centres on opposite sides of it. Why that works is a fact about
*two poses at once* — where the vehicle was at the end of the last stroke
against where it is now — and a moving vehicle can only ever show one of them.
The tyre marks (constraint 19) do not close the gap: they record where the
wheels rolled, not how the body was turned when they rolled there, and a
shuffle gains centimetres per cycle, so its whole content is an orientation and
a displacement too small to remember. Nothing else in the game records a pose.

**The moment is the direction change, and that is the whole design.** This was
first built as a key the player presses at moments they choose. The user chose
the automatic form instead, and gave the reason:

> "It's a good idea to create automatic captures because when the direction
> changes, because that's automatic and accurate and precise, and the game can
> already remember this... it could be just a toggle to show all the direction
> change points... And it would eliminate a whole class of problems as well."

The class of problems is real and every item in it was open before this
decision: when to press, how many pile up, what the cap should be, whether
there is a clear key, and whether a player who released the stick before
pressing captures a straightened wheel — measured at 0.27 rad against the 0.36
rad actually held through the stroke, and once at 0.00. An automatic capture
has none of them, because it does not depend on a player's reaction at all.
That last measurement outlived the question it was taken for: it is the number
behind the withdrawal further down.

It also costs nothing to detect. A direction change is a sign change in the
direction of travel above 0.2 m/s, and the game already counts them, because
counting them **is the score** (constraint 2). The interesting instants and the
scored instants are the same instants. So the aid adds no new notion of what
matters: it draws the thing the game was already measuring.

**A ghost belongs to the shunt that scored it, and rewind takes it back.**
This is the opposite of what the manual version did, and the reason is that the
ghost is no longer the player's annotation — it is a picture of the score.
Every ghost carries its shunt number; `Game.restore` truncates the list to the
count on the tape frame, next to the line that truncates the tyre marks.
Rewinding past a reversal un-scores it (constraint 18), and a ghost left
standing after that would draw a direction change that no longer happened.
Restart clears them for the same reason: a new run starts at zero.

**The poses are recorded whether or not they are drawn.** Five numbers per
direction change, kept regardless of the setting. So a player who finishes a
shuffle, wonders why it worked, and turns the aid on then is shown the
manoeuvre rather than whatever is left of it.

**It is off by default**, and constraint 12 is why rather than constraint 10.
It is a record and not a prediction, so 10 has nothing against it — but it puts
a copy of the vehicle on the floor for every point the player scores, and the
score of a hard level is a dozen. That is a lot of world for a player who never
asked, and nothing about it pays on the first attempt. It pays on the eighth,
which is when a player turns it on.

**A ghost is desaturated, and that is constraint 8 rather than taste.** The
player's vehicle is the only saturated colour on screen, which is what makes it
findable at a glance; a dozen translucent copies of it in its own paint spends
exactly that. One flat pale grey for the whole ghost — no paint, no glazing, no
lamps — also makes it read as an annotation rather than as another vehicle
parked in the level.

**The ghost material writes depth, and that was measured.** A vehicle is a
dozen surfaces deep along any sight line, so with depth writes off a single
ghost blends a dozen times and reads nearly solid, and six stacked — which is
what a shuffle produces, because the poses are centimetres apart — painted the
player's own car out of the picture and left a white slab where the level was.
That is constraint 8 broken outright by an aid meant to explain the manoeuvre.
Writing depth makes a stack cost about what one ghost costs.

**A ghost the vehicle is standing in is not drawn**, and this is constraint 8
again rather than tidiness. Writing depth makes one ghost cost one blend along
a sight line, but a *stack* costs one each, and the automatic form stacks them
where the manual one did not: a player rocking on the spot leaves every ghost
of the sequence in the same place. Five at 0.45 left five per cent of the car
showing — measured on First Bay, and the saturated shape the player steers by
had gone. Hiding them costs nothing, because a ghost of where you are standing
is the one place you can already see the vehicle, and driving off it brings it
back. The test is the game's own rectangle overlap, so "standing in it" means
what it means everywhere else.

**Nothing is drawn from the driver's seat.** From the seat the eye is *inside*
the ghost, and a translucent shell around the head fogs the windscreen and all
three mirrors together — measured on Kerbside, and the whole view went milky.
The rule costs nothing, because every view is one button away (constraint 9)
and the ghost is a thing you read by looking at the vehicle from outside it.

**A ghost carries no figure on the ground, and that is a withdrawal.** The
first version drew the turning circles of the pose each ghost was captured at,
because it had been asked for and because constraint 10 already says a circle
is a property of the pose rather than a prediction about it. The user withdrew
the request after seeing it, and the reason is a fact about where direction
changes actually happen:

> "very often, the position of the direction change has nothing to do with
> maximal wheel angle and wheel trace projection that belongs to it... my
> turning points were once where I was reversing straight and then going
> forward to turn fully into the other direction... So it had nothing to do
> with the exact wheel trace that would be shown for that position. So now I'm
> thinking that it was a bad idea to show wheel traces for this capture...
> because the position, the position change, the sideways movement of the car,
> and the change of the angle is the interesting part."

The measurement taken for a different question is the numeric form of that
charge: at a reversal the lock read 0.27 rad where 0.36 had been held through
the stroke, and once 0.00. A figure drawn from the instant of a reversal is a
claim about a turn that the stroke did not make, and a straight stroke ends
with no figure at all. Neither is a record of anything, which is what puts this
on the wrong side of the rule that opens this constraint.

What survives is the pose itself, front wheels included: they stay turned as
they were, because the angle of a wheel is part of a pose in the way that a
ring painted on the floor is not. The `opacity` and `rings` options added to
`TurnCircles` for the withdrawn version were removed with it — nothing else
used them, and an unused constructor option is not something `knip` can see.

**The fade is how the order is read, and its limit is measured.** The user
asked for it and said what it is for: opacity decreases with age, "although it
should never truly disappear... something like exponential decay", so that "it
would make the progress more readable". Three things follow. Age is position in
the sequence and not seconds, because a ghost left before a five-minute pause
is not older than the one after it. The oldest never reaches nothing, because
the whole manoeuvre is the thing being read. And every ghost owns its material,
because a shared one can only say one thing about age.

The curve is `floor + (top - floor) · ratio^age` with top 0.45, floor 0.11 and
ratio 0.66, and those three are measured rather than chosen. What a step of the
curve is worth is not a difference in alpha but a difference on screen, and a
ghost is drawn over whatever it is standing on. Measured on First Bay from
overhead, in luminance out of 255 against each ghost's own background, the
steps of this series are **9.9, 8.1, 5.7, 4.4, 2.8 and then under two**, and
the floor still stands 16.7 above the ground it is drawn on.

So the honest limit is that **the picture orders about the newest four**, and
everything older sits together near the floor. That is not a curve that can be
tuned out of it: the whole usable range is about 0.45 down to 0.11, which is
some fifty luminance levels, and a dozen steps that a reader could tell apart
would need every one of them. An exponential spends the range at the recent
end, which is where the question is — the two poses either side of the last
stroke are the pair the aid exists to compare. The rest of the trail says
"older, all of them", which is a true thing to say.

One thing the fade does not fix. Ghosts that overlap each other still compound,
because writing depth makes a *single* ghost one blend and does nothing about
two: ten poses within half a metre of each other — a player rocking on the spot
— read as a pale slab about 90% opaque, against 99.75% if every ghost were
drawn at the top of the curve. The fade improves that case without solving it,
and constraint 8 is protected by the standing-in-it rule above rather than by
the curve.

**Twelve, then the oldest goes.** A dozen is about the score of a hard level,
so the cap usually keeps the whole manoeuvre; a run needing more than that has
stopped being a manoeuvre anyone reads off the floor. It was two dozen before
the fade was measured, and two dozen had no argument behind it: past the fourth
ghost the curve no longer distinguishes anything, so the far end of a longer
list is a crowd rather than a record. The oldest is dropped because the newest
is the one being compared against. The cap is the one place the ghosts and the
score disagree, which is why a ghost stores its shunt number rather than its
index: a truncation after a rewind still lands on the right ones when the front
of the list has fallen off.

**The lock is the one the finished stroke was driven at, not the one held at
the instant of the reversal.** By the time the game detects a direction change
the wheel is already on its way to the next stroke's lock and is at neither:
measured on The Short Side at −0.203 rad, between a stroke held at +0.203 and
one about to be driven at −0.55. So the step remembers the steering angle from
the last step the vehicle was still moving the old way, and that is what the
ghost carries. The wheels are the only thing that shows it — nothing is drawn
on the ground — but a pose whose wheels are caught mid-transit between two
strokes is a pose the vehicle was never in, and this is a record. The
remembered angle is on the rewind tape with everything else (constraint 18).

*Held by:* `src/ghosts.js` for the copy, the fade and the cap,
`Game.stepPhysics` for the instant and the lock, `Game.restore` for the rewind,
and `Game.frame` for the seat rule and the standing-in-it rule. Nothing checks
any of it; `dev.html#ghosts` is where it is looked at (constraint 22).

## Where the rules are enforced

| Constraint | Enforced by | Fails how |
|---|---|---|
| 13 — no dead code | `pnpm knip`, `pnpm lint` | exit 1, names the export |
| 15 — settings are timing, not geometry | review; `gains()` scales only rates, and `maxSteer` / dimensions are not in it | silent |
| 17 — nothing drawn outside a rectangle | construction, for body parts and mirrors only | silent |
| 17 — a mirror is on the vehicle, not beside it | `window.dev.mirrors()` on `dev.html` | names each floating mirror and its gap |
| 21 — the editor writes calls the builders accept | `window.dev.builders()` on `dev.html` | prints `BAD <type>` |
| 22 — no two surfaces at one depth | `window.dev.coplanar(id)` on `dev.html` | names the shared plane |
| 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 19, 20, 23 | nothing | silent |
| 17, for everything else | nothing; the script that did it went with the solver | silent |
| 3, 4 | withdrawn | — |

**Four of twenty-one live constraints are machine-checked**, and three of the four
have to be asked rather than run. That is the honest
state of it, and it got worse on purpose: constraints 3, 4, 7, 16 and 1's probe
were all held by `tools/validate.js`, and the tool was removed. What it bought
was a designer's tool for a set of fourteen levels that are finished; what it
cost was a search, a lattice, four probes and a no-slip sweep, all of which had
to stay correct against every change to `integrate()`. The trade was taken
knowingly (constraint 4).

What is now unchecked, named rather than implied: nothing proves a level is
solvable, nothing catches a level whose cost turns out to be clearance rather
than route, nothing catches a vehicle that can be made to slide sideways, and
nothing checks that a level still asks the question its comment says it asks.
The last of those was never checked anyway. The first three are found by
playing the game, which is the check this project now has.

This file is what a reviewer checks a change against.

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
still owed is a measurement: the difference probe could not tell whether a
vehicle substitution changes which routes exist or only how much room they
have, and that measurement is what would decide whether Van Life and Bus Stop
are earning their place or merely occupying it. The probe is gone with the
solver (constraint 4), so this is now a question for playing rather than for a
tool. Being designed.

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
probe said survives.

**The approach is not the level.** Raised by the user: "a lot of the current
levels require a lot of upfront movement that is unnecessary … getting to the
place where I can start maneuvering takes a lot of time and it doesn't make
sense because this is not a travel game." The low top speeds stay — constraint
15, and the complaint is about distance, not speed.

Measured before anything moved, and the measurement is the whole argument. The
route finder's leg dumps for the shipped starts all opened the same way: `F0:9.0`
— nine metres at zero steer, which is the longest leg the search offers and the
only one with no decision in it. First Bay, Kerbside and Dead End each began
with one; Bus Stop began with two, eighteen metres of it.

The fix is that `start` moves forward along its own heading to the pose where
the first steering input happens, and `bounds` follows it in. That is
**route-preserving by construction**, and it was checked rather than assumed:
driving the *original* geometry straight ahead from the original start reaches
the new start every time — 3.5 m for First Bay, 6.5 m for Kerbside, 2.0 m for
Dead End, 6.0 m for Loading Dock, 5.0 m for Bus Stop, 4.0 m for Trailer
Trouble — and for Fold and Artic Dock, where the search cannot finish, the new
start reverses straight back to the old one, 3.5 m and 3.0 m. Every old route
survives with a prefix removed, and shrinking `bounds` can only remove routes,
never add one.

Six levels needed nothing. Measured nose-to-first-constraining-obstacle rather
than axle-to-target — the distinction matters, because measuring from the axle
overstates the lead-in of a long vehicle by most of its own length — The Short
Side, The Alcove, The Impossible Gap, Van Life, Tail Swing and Yard Full already
begin at the manoeuvre.

**The seven unused vehicles now have levels**, which is the other half of the
same request: "all vehicles that don't appear on any levels at the moment should
have levels that they appear on." Herringbone (city car, 45-degree bays and a
dead end, 1), The Elbow (saloon, a reverse whose run-up turns a corner, 2), The
Pinch (SUV, a 2.9 m gate that must be entered square, 3), Wide Circle (pickup,
an ordinary car park and 6.37 m of radius, 1), Tail Sweep (box lorry, 2.35 m of
overhang arriving first, 1), Back Alley (step van, a slot the short overhang
tucks into, 1), Depot (school bus, a yard too short to build the angle
forwards, 1). Each is interleaved by the question it asks rather than by the
length of its vehicle, and each cost above was measured by driving the game's
own `integrate()`.

Two things the cutting taught, both of which contradict how the levels above
were reasoned about:

- **The envelope constants say what a level probably costs, not what it does.**
  Both bay-entry envelopes were re-measured for all thirteen vehicles, and the
  along-aisle figures reproduce the numbers this file already records to within
  0.05 m. The *depth* figures do not bind where they were expected to: The Elbow
  ships with 3.6 m of aisle against a 4.13 m nose-first depth for the saloon and
  the saloon still enters nose-first, because the recess and the open leg give it
  room the straight-aisle envelope does not model. Tail Sweep had to be swept
  rather than derived — 6.05 m of mouth across a 4.2 m aisle costs nothing,
  4.45 m across 4.0 m has no route at all, and it ships at 5.25 m and 4.4 m.
- **The finder is an upper bound and it is loose enough to mislead.** It reported
  Trailer Trouble at 2 before the trim and 1 after, which looks like the trim
  making a level cheaper. It is not: the new start is 4.0 m straight ahead of the
  old one in the old geometry, so the 1 that it found after is a route the level
  always had and the 2 it found before was an overestimate. A count from this
  tool can only ever say *no more than*.

Still owed: playing them. A found route is evidence the level is completable,
not evidence it is good to drive.

**Loading Dock costs zero.** Found while trimming it, and it is worse than the
1 recorded in the difference-rule table above. Driven by `integrate()` it parks
in **0** direction changes — one continuous forward curve out of the corridor
into the dock — and it did so before the start moved as well as after, so the
count belongs to the level. The throat is 8.5 m wide for a 3.2 m bay and the
aisle is 9 m deep where a van needs 5.32 m to swing in nose-first, so the
right-angle turn it claims is slack in both directions at once. It has been
trimmed like the rest, which only stops it wasting the player's time; what it
needs is a re-cut, and that is a decision about what the level should ask
rather than a repair. Its source comment says all of this in place.

Put to the user with the re-cut costed, and **decided: it stays as it is.**
"Let it be." So the zero is deliberate, and the set now contains one level that
asks nothing — which is a smaller cost than it looks, because the difference
rule (constraint 1) is about levels differing from each other, and a level that
is simply easy does not make any other level less itself. The 1 in the
difference-rule table below was an overestimate from the withdrawn solver and is
corrected to 0 there. Nothing else about the level changes; the approach trim it
received stands, because that only stopped it wasting the player's time on the
way in.

**The tow car's drawbar collides. Decided by the user.** This was the one gap
left by constraint 17, and it is closed.

The numbers recorded here before were wrong, and they were wrong in the
direction that made the gap sound larger than it is. Measured off the specs by
driving the game's own `trailerRect`: the car's rectangle ends 0.95 m behind
its rear axle and the trailer's begins **2.10 m** behind it, so the gap is
**1.15 m**, not the 2.25 m and 1.30 m this file used to claim. Nothing had ever
checked those figures against the code.

`drawbarRect` in `src/vehicle.js` is the third rectangle, and it is the bar's
own footprint rather than the gap: 0.12 m wide by 1.30 m long, which is exactly
what `src/carMesh.js` draws, hung off the trailer's heading because the bar
pivots at the hitch. It spans 0.95 m to 2.25 m behind the rear axle, so it
overlaps both neighbours and leaves no seam on the centreline.

Sizing it to the gap instead was considered and rejected. The gap is 1.9 m wide
and the steel in it is 0.12 m, so a cone standing 0.30 m off the centreline
really does clear a real drawbar; a rectangle that stopped it would be the same
class of error as the one being fixed, pointing the other way. What the change
buys is that an obstacle on the centreline is no longer driven through. Both
cases were checked.

The re-drive that this was expected to cost came to nothing: all twenty-one
levels still start legally, and Trailer Trouble still completes — at 2 direction
changes with 5 cm of clearance, though no pre-change figure at that clearance
exists to compare it against, so this is evidence the level survives and not a
measurement of what the drawbar cost it. Fold has never been solved by any
search (constraint 4), so it has no baseline either way.

*Held by:* `drawbarRect` in `src/vehicle.js`, and `collidersOf` in
`src/colliders.js` for parked combinations, which carry one for the same reason
their mirrors do.

**Whether obstacles get a height.** Found by measurement, not assumed: collision
is two-dimensional. `collidersOf()` drops `h`, `overlaps()` is a separating-axis
test on flat rectangles, and `Game.isFree` does not read a height — so a
0.15 m kerb stops a semi exactly as a 5 m
building does, and Kerbside and Bus Stop depend on that. Giving obstacles a
`clearance` compared against a vehicle height in those two tests is about a
dozen lines. It would open overhangs, canopies and low bars as level material,
which is the one class of obstacle an outside camera reads better than a plan
view. It also adds a rule the player must learn without being told (constraint
12 forbids telling them), and a vehicle that fits under one thing and not
another is a *measurement* difficulty unless the level is built so the height
changes the route. Not decided.

**The set against the difference rule.** Measured once, and the measurement is
kept here because the levels were cut against it. The probe shrank every
rectangle belonging to the vehicle by δ per side, changed nothing kinematic, and
asked whether the level still cost what it cost. Every number below was produced
by `SHRINK=δ node tools/validate.js <level>` and reproduced independently of the
peer who proposed the method. **The probe is gone** (constraint 4), so this
table is a record of the set as it stood, not something a change can be
re-checked against.

| level | δ=0 | δ=0.15 | δ=0.30 | reading |
|---|---|---|---|---|
| Loading Dock | 0 | 0 | 0 | **asks nothing; kept by decision** |
| Kerbside | 1 | 1 | 1 | structural outright |
| Bus Stop | 1 | 1 | 1 | structural outright |
| Trailer Trouble | 1 | 1 | 1 | structural outright |
| The Impossible Gap | 3 | 3 | 0 | structural, narrow basin |
| The Alcove | 2 | 2 | 0 | structural, narrow basin |
| Dead End | 5 | 2 | 0 | survives 15 cm, dies at 30 |
| First Bay | 2 | 1 | 0 | half of it is clearance |
| Van Life | 1 | 1 | 1 | structural outright, after re-cut |
| Tail Swing | 2 | 2 | 2 | structural outright |
| The Short Side | 2 | 0 | 0 | **all of it is clearance** |
| Tight Lane (cut) | 5 | 0 | — | all of it is clearance |

Read it with two cautions. The solver was an upper bound, so ±1 is noise and
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
- **Loading Dock was recorded here as a structural survivor, and it is the
  worst level in the set.** That entry read 3/3/3 and said the level had an
  idea nobody had written down. Both halves were wrong, and they were wrong
  because the number came from one handedness. Solved mirrored it parks in 1,
  and the honest panel is 1/0/0 — it collapses to a single sweep with 0.15 m of
  relief, which is constraint 1's stated failing condition. Its record was 3;
  it is now 1. This is the strongest available argument for reading a table
  like this one as provisional: the row that looked soundest was the row with
  the error in it.
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
- **Van Life passed the probe and still broke constraint 1**, which is the
  clearest demonstration in the file that δ-invariance is not the whole test.
  It read 1/1/0 and its single direction change was a half-metre straight
  reverse at the end, to seat the van once it was already inside the bay. The
  probe cannot see that, because a nudge into a bay is a property of the route,
  not of the clearance. `ROUTE=1` sees it immediately, and the fingerprint is a
  leg with **zero turn**: `R+0` in a signature is final positioning by
  definition, since a straight reverse changes nothing but where the vehicle
  sits. Ten candidate edits were swept. Moving the neighbouring cars around did
  nothing at all, and lowering the wall to narrow the aisle produced *two*
  `R+0` legs instead of one — tightening made it worse, exactly as the
  constraint-4 warning says. What worked was parking the right-hand neighbour
  1.7 m out of its bay, which closes the aisle enough that the nose-first arc
  does not exist: the van drives past the bay and reverses in on one 73° arc.
  The record is still 1, and the 1 is now a manoeuvre. It holds its shape at
  δ = 0.30, which nothing else in the set does.
- **Look for `R+0` in any signature.** It is the machine-readable form of "this
  level scores you on parking-space fiddling", and it costs nothing to check.
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

**The jackknife stop is a collision.** Decided by the user, from the three
options that were on the table — a contact, a refusal to steer further, or a
void. It
is a contact, which is the one that needed no new rule: the fold already
stopped the vehicle the way a wall does, so making it score the way a wall does
is the whole change. Written up under constraint 5, including the double-count
it exposed.

**The game has settings, and they are handling only.** Requested by the user:
a rate-based steering mode ("the joystick would control the turning speed of
the wheel ... if I release the joystick, then it keeps that turning angle") and
a speed-based throttle mode reading the trigger's own release curve, on the
grounds that "the focus is finding the correct trace that the car should go
along, not the twitchy part of actually driving the car through it". Both
shipped as options rather than replacements, and constraint 15 is the rule
that came out of it: a setting may change how the vehicle is commanded, never
what it can do.

**Speed is the default throttle.** Decided by the user, when it was put to
them that the throttle argument is the one constraint 6 already makes about
gears — the game does not test holding a speed — so the mode that suits the
game should not be the one players have to find in a menu. Accelerator being
first was history, not a decision. No existing best is invalidated by the
change: a shunt is a sign change in the direction of travel, and both modes
cross zero equally often. Steering kept Direct as its default, because neither
mode there is the one the design argues for; they are two skills.

Not available: shaping DualSense adaptive-trigger resistance. The standard
Gamepad API exposes the trigger's analog value, which is what Speed mode reads,
but no standard way to set its resistance curve. Nothing in the game depends on
that changing.

**A sixth vehicle, and a level built for it.** Decided by the user, who was
given three options — a vehicle plus its own level, a vehicle dropped into the
levels that already exist, or no vehicle and `OVH` kept as a measurement only —
and chose the first, on the grounds that dropping a long-tailed vehicle into a
level not laid out for it had already been measured producing a shuffle. That
reasoning held up: the Tour Coach ships with Tail Swing, and the search for
that level is what established that tail swing does not generate direction
changes at all. The vehicle is kept anyway, because the user's stated interest
was vehicles that *move* differently, which this one measurably does, and not
vehicles that score differently. The numbers are in Tail Swing's comment in
`src/levels.js`.

**Trailer Trouble stays as it is.** Decided by the user, against the
measurement and knowing it. Nine perturbations of the vehicle — wheelbase and
lock at ±25%, overhang from 0.4x to 1.3x, trailer response at 0.6x, and a
0.15 m shrink — all return the same 1 direction change, because the aisle is
10.6 m wide and the rig is 8.8 m long, so it can turn around freely. The level
poses no problem to the vehicle in it. Two alternatives were put up: bring the
wall down to about a 5 m aisle so the rig has to be reversed in, or cut it and
let Fold be the first trailer level. The user chose to keep it as the gentle
introduction to the trailer, which is a deliberate exception to the ruling that
only level 1 is exempt from being a tutorial. Do not re-open this on the
strength of the same measurement; it has already been weighed against it.

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

**Mirrors, and the driver's-eye view.** Decided against, then built anyway,
and the record is worth keeping in that order. The decision was that the game
has one kind of view — outside the vehicle, whole vehicle visible — so no
level may be built on what the player cannot see. What survives of it is the
half that gains something: height is legible from an outside view and invisible
from a plan view, and `wall()` already takes an `h`.

The rest was overturned by the user asking for the seat itself. Constraint 9
now lists `cockpit` as one of three modes — a seat, a bonnet and three mirrors
— and `src/carMesh.js` builds the mirrors and records where the driver's head
sits; the mirrors are a setting in `src/settings.js`. So a reader who finds
cockpit mode and wonders whether it breaks a rule has the answer here: it does
not, because the rule it would break was withdrawn. What *is* still enforced is
the sentence that did the work — no level may be built on what the player
cannot see — and it holds because every view is one button away, so nothing a
level does can depend on the player being in one of them.

Blind Side, whose entire premise was a mirror blind spot, was renamed Yard Full
under the old rule and now claims only the obstruction it has. The rename still
stands and the reason for it no longer does, which makes it a level-design
question rather than a documentation one: mirrors exist, so a level *could* be
built on one again. Nobody has asked for that.

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
