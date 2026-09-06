# Tight Fit

A 3D parking game about threading a vehicle through spaces that look too small
for it. Fourteen levels, six vehicles, no lap times and no "you were 4 cm off
centre" scoring — a level is passed the moment the vehicle is inside the bay
and stopped.

What is scored is **direction changes**: every time you swap between forward
and reverse. Parking anything is easy given unlimited shunts, so the shunts are
the game. There is no par and no published best — the only number to beat is
your own on that level, and it sits next to your current one.
Crashes are counted per attempt too, however gentle: a crash is the moment you
touch something, so grinding along a wall is one crash, and letting go before
you hit it again is what makes it two.

Nothing tops 2.9 m/s. Holding a steady creep is not the challenge, so the
vehicles do it for you — the throttle is analog, but first gear is all there is.

## Play it

- [v3 — the current build](https://viktortar98.github.io/tight-fit/v3/): v2's
  fourteen levels with the handling opened up — two steering modes, two
  throttle modes, and four multipliers to tune them at play time (commit
  `cbe01a6`). The [root URL](https://viktortar98.github.io/tight-fit/) serves
  the newest version, which is v3 today.
- [v2](https://viktortar98.github.io/tight-fit/v2/): fourteen levels, six
  vehicles, scored on direction changes, one fixed way to steer and one fixed
  way to accelerate (commit `13de828`).
- [v1 — the first version](https://viktortar98.github.io/tight-fit/v1/): the
  original ten levels and two vehicles, scored on time and bumps, before
  direction changes became the score. Kept as it was (commit `e59328a`).

All three are static builds of this repo on the `gh-pages` branch. v2 and v3
score in the same unit and share a save key, so a best set in one shows up in
the other; v1 scored in a different unit and keeps its own key.

The rules this game is held to — what is scored, what is never scored, what a
level has to prove before it ships — are in [DESIGN.md](DESIGN.md). Read that
before changing how a level or the scoring works.

```bash
pnpm install
pnpm dev        # http://127.0.0.1:5183
pnpm build      # static bundle in dist/
```

## Controls

Built for a controller — analog steering and an analog throttle are what a game
about the last half-metre wants. Keyboard and mouse work too, and the HUD
legend follows whichever you touched last. Menus, level select and the pause
card are all pad-navigable.

| Pad | Keyboard | |
|---|---|---|
| `RT` / `LT` | `W` / `S` | throttle, reverse (also brakes when moving the other way) |
| left stick | `A` / `D` | steer (works at a standstill, like power steering) |
| `LB` | `Shift` | crawl — caps the speed at ~1 m/s for the tight bits |
| `A` | `Space` | brake |
| right stick | `Q` / `E`, drag | look around the body |
| `D-pad ↑↓` | scroll | zoom |
| `RS` click | `Z` | recentre the view where the level handed it to you |
| `RB` | `C` | view: chase → inside → overhead |
| `X` | `Backspace` | hold to rewind |
| `Y` | `R` | restart level |
| `LS` click | `M` | mute |
| `Menu` | `Esc` | pause |

**Handling is settable**, from the level select or the pause card.

*Steering* — **Direct** is the default: where you hold the stick is where the
front wheels point, and letting go straightens them. **Rate** is the truck-sim
handling: how far you push the stick is how fast the wheels turn, and letting
go leaves the lock where it is, so coming back to straight is something you
have to do.

*Throttle* — **Speed** is the default: the trigger is the speedometer, half
pressed is half speed, and the vehicle comes down about as fast as the trigger
itself springs back. It reads the trigger's own return curve, so it is
connected without being a switch. This game is about finding the line, not
about holding a speed along it, which is why this is the default rather than
the option. **Accelerator** is the older feel: the trigger builds speed and
letting go coasts down.

*Four multipliers* tune the feel: **steering speed** (Rate only — how far the
wheels turn is the vehicle's own lock, not a preference), **top speed**,
**acceleration**, and **slow-down**, which is how quickly it comes to rest when
you let go. At 4x it stops in a third of a second against 1.35 at 1x. Crawl
ignores the top-speed multiplier, because it exists to be a fixed slow speed,
and the brake button ignores slow-down, because a brake is a brake.

Settings change the vehicle's timing, never its geometry. The set of paths a
vehicle can drive is fixed by its lock, its wheelbase and its shape, and none
of those is settable — drive the same steering profile at 1 m/s and at 6 and
the path through the world is the same to fifteen decimal places, trailer
included. So every level is finishable under any combination, and a record
means the same thing in all of them.

A pad whose triggers report no analog value drives from the left stick instead,
with full lock still reachable — a fallback that could not turn at full lock
could not finish several of the levels.

**The camera does what you told it and nothing else.** It does not swing round
when you reverse, pull itself in past walls, or trade distance for height on
your behalf. Three views: chase, which shows the whole vehicle from outside;
inside, which is the driver's seat; and overhead, which is what the collision
model sees — collision is 2D, so the overhead view *is* the physics.

The inside view is built around the complaint that most driving games get it
wrong: you sit behind the glass and cannot see your own bonnet, which is the
one thing a real driver is always looking over. Here you can. A bus and a
cab-over have no bonnet, so they get the thing that does its job instead — a
dash whose front edge is a known distance from the nose. All three mirrors are
there too, aimed exactly where the real glass points, but drawn at the sides
and top of the screen rather than out at the corners of the windscreen, so
reading one never means turning the view. Angles are held relative to the driven body, so a jackknifed
trailer never drags your viewpoint with it, and a view you chose stays on the
same corner of the vehicle as it turns. If a wall is in the way, it is in the
way; the overhead view is one button away.

**Reverse and a camera comes up**, in every view, showing the ground behind the
bumper with two rails on it — the path the vehicle would actually take at the
steering angle you are holding, one metre of it, red then amber then green.
They are drawn by the same integrator the physics uses, they exist only inside
that panel, and they go away the moment you stop reversing.

The bar across the bottom is a parking sensor: the distance to the nearest
thing in any direction, beeping faster as it closes. It is switched off in the
inside view, bar and beeps together — from the driver's seat you get the
mirrors, the camera and your eyes, which is what a real driver has. Articulated vehicles get a
second gauge showing the angle at the hitch, which is the only honest warning
you get before it folds. Beside them is a steering wheel that mirrors your
stick — in Rate mode the lock stays where you leave it, and from the inside
view the front tyres are out of sight in both modes, so where the wheel is
pointing is a thing you otherwise cannot know. Those are the only three gauges,
because they are the only things the view cannot tell you — there is no
speedometer and no gear indicator, and nothing on screen is there to help you
find the bay on your first attempt.

**Hold rewind and the run plays backwards.** No budget, no cooldown. It winds
back the crashes and the direction changes with it, because the score is
recorded step by step alongside the vehicle's position rather than tallied
beside it — so a rewind past a crash also puts you back before the crash, and
you have to drive that stretch again. What it removes is the half minute of
driving back to the interesting part, which was never the difficulty. There are no hints anywhere: what a level is about is in
its geometry, and finding it is the level.

## Vehicles

| | Length | Turning | Top speed |
|---|---|---|---|
| Hatchback | 3.95 m | 2.83 m swept ring | 2.9 m/s |
| Van | 5.30 m | 3.41 m | 2.7 m/s |
| Bus | 11.0 m | 6.60 m | 2.5 m/s |
| Tour Coach | 12.0 m | 6.61 m | 2.4 m/s |
| Car + trailer | 4.60 m + 4.2 m | 3.05 m (car alone) | 2.6 m/s |
| Semi | 6.30 m + 13.0 m | 4.53 m (tractor alone) | 2.3 m/s |

The coach and the bus turn almost identically — 4.77 m against 4.70 m of
minimum radius — and are a metre apart in length. What separates them is where
the wheels sit: the coach's rear axle is 3.9 m forward of its tail, so 1.15 m of
it swings outside its own turning circle, against 0.67 m for the bus and 0.07 m
for the hatchback. Bigger is not harder in this roster; the worst-steering
vehicle in the game is the van, at 5.12 m.

The two articulated combinations are one hinge each — a drawbar behind the tow
car's rear axle, a fifth wheel just in front of the tractor's. Both fold if you
push the angle past the stop, and both reverse the way real ones do: the
trailer steers, and the car chases it.

Your vehicle is the only saturated colour on the map. Everything else — parked
cars, dropped trailers, walls, cones — is pastel, so at a glance you always
know which shape you are.

## Levels

The hatchback series is built so each level asks something the one before it
did not — a new kind of problem rather than a tighter version of the last one.

| # | Level | Vehicle | What it asks |
|---|---|---|---|
| 1 | First Bay | Hatchback | A 2.9 m aisle. The bay is behind your shoulder. |
| 2 | The Short Side | Hatchback | The room is 1.45 m past the bay and 15 m behind it. |
| 3 | Kerbside | Hatchback | The bay is beside the aisle, not across it. |
| 4 | The Alcove | Hatchback | 4.6 m each side. Reversing in wants 6.5. |
| 5 | The Impossible Gap | Hatchback | Can you tell it fits before you commit? |
| 6 | Dead End | Hatchback | The room you need is behind you, going nowhere. |
| 7 | Van Life | Van | Same puzzle, half a metre more vehicle. |
| 8 | Loading Dock | Van | A right-angle turn out of a corridor, into a bay between two vans. |
| 9 | Bus Stop | Bus | Parallel park 11 m of bus into a 13.5 m gap. |
| 10 | Tail Swing | Tour Coach | Out of your bay and into one two along, with 1.15 m of tail. |
| 11 | Trailer Trouble | Car + trailer | Reverse a drawbar trailer into a bay row. |
| 12 | Fold | Car + trailer | The trailer goes in the bay. Where does the cab go? |
| 13 | Artic Dock | Semi | 16.6 m, hinged, into a dock between two others. |
| 14 | Yard Full | Semi | The same dock from the far side, in a yard with pillars in it. |

## Why the levels are the size they are

A vehicle at full lock sweeps a ring of a fixed width — 2.83 m for the
hatchback, 6.60 m for the bus. Any corridor narrower than that cannot be turned
out of in one arc, which is the line between "drive in" and "shunt it in", and
the two corridor levels straddle it deliberately.

Bay levels are cut against different numbers, measured by driving the physics
out of a bay at full lock: reversing in needs 6.54 m of aisle past the bay,
nose-first needs 1.95 m past it and 4.09 m before it. Which of those you take
away *is* the level.

Tight levels are easy to make impossible by accident, so they are checked
rather than eyeballed:

```bash
node tools/validate.js            # all levels
node tools/validate.js alcove     # one
```

It confirms the vehicle starts clear and the target is reachable and unblocked,
then runs a hybrid-A* search over `(x, z, yaw)` — `(x, z, yaw, trailerYaw)` for
the articulated ones — using the game's own `integrate()` and collision boxes,
refusing any move that would reach the jackknife stop. If the search cannot
park it, the level does not ship.

Nothing it prints reaches the player. It is a tool for whoever is building a
level: the real clearances, and the fewest direction changes anything has
managed on that geometry. It orders routes the way the game scores them —
direction changes first, distance only as a tie-break — so that number means
something to a designer, but it is a record rather than an optimum, and the
validator only fails a level when the search beats the number the level
claims.

That record is an **upper bound**, and by more than we thought. The search
dedups on a lattice, and a cell too coarse to represent a long smooth arc pays
for the arc in direction changes it never needed. `CELL=0.5` halves the cell;
refining can only lower a count, never raise one. Run a level at two cell sizes
and check the count and the distance have both stopped moving — if they have,
the number is the level's; if the count is still falling, it is the lattice's.

## Layout

| File | |
|---|---|
| `src/geom.js` | oriented-rectangle maths: SAT overlap, containment, distance |
| `src/vehicle.js` | kinematic bicycle model, articulation, the five vehicle specs |
| `src/colliders.js` | obstacles as flat rectangles, shared by renderer and prover |
| `src/levels.js` | all fourteen levels, in metres |
| `src/world.js` | scene construction, themes, lighting |
| `src/carMesh.js` | vehicle and trailer models, saturated or pastel |
| `src/camera.js` | chase / inside / overhead, body-relative |
| `src/panels.js` | the three mirrors and the reverse camera, as screen panels |
| `src/rewind.js` | the tape the run plays backwards through |
| `src/gamepad.js` | Xbox mapping, analog triggers, rumble |
| `src/main.js` | game loop, collision resolution, progression |
| `tools/validate.js` | the solvability prover |
| `DESIGN.md` | the constraints all of the above exist to satisfy |

Collision is 2D: every obstacle, and every unit of the vehicle, is a rectangle
on the XZ plane, so what you see in the overhead view is exactly what the
physics uses. Contact stops the vehicle rather than bouncing it — a binary
search on the last sub-step lets it creep right up against a wall instead of
freezing short of it. Every contact counts as a crash for that attempt and buzzes the pad —
harder hits flash the screen more, but nothing scrapes through for free.
