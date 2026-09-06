# Tight Fit

A 3D parking game about threading a vehicle through spaces that look too small
for it. Thirteen levels, five vehicles, no lap times and no "you were 4 cm off
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
| `RB` | `C` | camera: chase ↔ overhead |
| `Y` | `R` | restart level |
| `LS` click | `M` | mute |
| `Menu` | `Esc` | pause |

A pad whose triggers report no analog value drives from the left stick instead,
with full lock still reachable — a fallback that could not turn at full lock
could not finish several of the levels.

**The camera does what you told it and nothing else.** It does not swing round
when you reverse, pull itself in past walls, or trade distance for height on
your behalf. Two views: chase, which is what the driver can see, and overhead,
which is what the collision model sees — collision is 2D, so the overhead view
*is* the physics. Angles are held relative to the driven body, so a jackknifed
trailer never drags your viewpoint with it, and a view you chose stays on the
same corner of the vehicle as it turns. If a wall is in the way, it is in the
way; the overhead view is one button away.

The bar across the bottom is a parking sensor: the distance to the nearest
thing in any direction. Articulated vehicles get a second gauge showing the
angle at the hitch, which is the only honest warning you get before it folds.
Those are the only two gauges, because they are the only two things the view
cannot tell you — there is no speedometer, no gear indicator and no
steering-angle readout, and nothing on screen is there to help you find the bay
on your first attempt. The level's hint lives on the level-select tile and the
pause card, for a player who wants it.

## Vehicles

| | Length | Turning | Top speed |
|---|---|---|---|
| Hatchback | 3.95 m | 2.83 m swept ring | 2.9 m/s |
| Van | 5.30 m | 3.41 m | 2.7 m/s |
| Bus | 11.0 m | 6.60 m | 2.5 m/s |
| Car + trailer | 4.60 m + 4.2 m | 3.05 m (car alone) | 2.6 m/s |
| Semi | 6.30 m + 13.0 m | 4.53 m (tractor alone) | 2.3 m/s |

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
| 1 | First Bay | Hatchback | Where the bay is, and what counts as parked. |
| 2 | Tight Lane | Hatchback | How do you aim an entry, with 0.64 m of slack? |
| 3 | The Short Side | Hatchback | The room is 1.45 m past the bay and 15 m behind it. |
| 4 | Kerbside | Hatchback | The bay is beside the aisle, not across it. |
| 5 | The Alcove | Hatchback | 5.8 m each side. Reversing in wants 6.5. |
| 6 | Dead End | Hatchback | The room you need is behind you, going nowhere. |
| 7 | The Impossible Gap | Hatchback | Can you tell it fits before you commit? |
| 8 | Van Life | Van | Same puzzle, half a metre more vehicle. |
| 9 | Loading Dock | Van | Reverse blind around a corner between two vans. |
| 10 | Bus Stop | Bus | Parallel park 11 m of bus into a 13.5 m gap. |
| 11 | Trailer Trouble | Car + trailer | Reverse a drawbar trailer into a bay row. |
| 12 | Artic Dock | Semi | 16.6 m, hinged, into a dock between two others. |
| 13 | Blind Side | Semi | The same dock, on the side the mirrors don't cover. |

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

## Layout

| File | |
|---|---|
| `src/geom.js` | oriented-rectangle maths: SAT overlap, containment, distance |
| `src/vehicle.js` | kinematic bicycle model, articulation, the five vehicle specs |
| `src/colliders.js` | obstacles as flat rectangles, shared by renderer and prover |
| `src/levels.js` | all thirteen levels, in metres |
| `src/world.js` | scene construction, themes, lighting |
| `src/carMesh.js` | vehicle and trailer models, saturated or pastel |
| `src/camera.js` | chase / overhead / orbit, body-relative, with occlusion pull-in |
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
