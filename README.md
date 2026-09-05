# Tight Fit

A 3D parking game about threading a vehicle through spaces that look too small
for it. Fourteen levels, five vehicles, no lap times and no "you were 4 cm off
centre" scoring — a level is passed the moment the vehicle is inside the bay
and stopped.

What is scored is **direction changes**: every time you swap between forward
and reverse. Parking anything is easy given unlimited shunts, so the shunts are
the game. Each level ships with the record — the fewest direction changes the
solver has ever proved possible on it — and your own best sits next to it.
Crashes are counted per attempt too, and every contact counts, however gentle.

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

Keyboard and mouse, or an Xbox controller — plug it in and press anything, the
HUD legend swaps over on its own. Menus, level select and the pause card are
all navigable from the pad.

| Keyboard | Pad | |
|---|---|---|
| `W` / `S` | `RT` / `LT` | throttle, reverse (also brakes when moving the other way) |
| `A` / `D` | left stick | steer (works at a standstill, like power steering) |
| `Shift` | `LB` | crawl — caps the speed at ~1 m/s for the tight bits |
| `Space` | `A` | brake |
| `Q` / `E` | right stick | swing the camera around the body |
| drag / scroll | right stick / `D-pad ↑↓` | look around, zoom |
| `Z` | `RS` click | recentre the camera behind the vehicle |
| `C` | `RB` | camera: chase → overhead → free orbit |
| `R` | `Y` | restart level |
| `V` | `View` | reverse camera auto-flip on/off |
| `M` | `LS` click | mute |
| `Esc` | `Menu` | pause |

The camera angle is held relative to the driven unit's body, not the world, so
a jackknifed trailer never drags your viewpoint with it — you keep looking
where the cab is pointing until you say otherwise.

The bar above the dash is a parking sensor: the distance to the nearest thing in any direction. Articulated
vehicles get a second gauge showing the angle at the hitch, which is the only
honest warning you get before it folds.

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

| # | Level | Vehicle | The problem |
|---|---|---|---|
| 1 | First Bay | Hatchback | Drive in. The tutorial. |
| 2 | Back In | Hatchback | 4.4 m lane — too narrow to swing in nose-first. |
| 3 | Kerbside | Hatchback | Parallel park, 5.7 m gap. |
| 4 | The Squeeze | Hatchback | Parallel park, 4.85 m gap, wall 4.6 m behind. |
| 5 | Dead End | Hatchback | 3.4 m alley into a 3.0 m doorway. |
| 6 | Pillar Problem | Hatchback | A pillar on the bay corner and one in the lane. |
| 7 | Threading | Hatchback | Three 2.25 m gates, offset 3 m apart. |
| 8 | Van Life | Van | Same puzzle, half a metre more vehicle. |
| 9 | Loading Dock | Van | Reverse blind around a corner between two vans. |
| 10 | The Impossible Gap | Hatchback | 2.3 m slot, then 90° inside a 2.6 m corridor. |
| 11 | Bus Stop | Bus | Parallel park 11 m of bus into a 13.5 m gap. |
| 12 | Trailer Trouble | Car + trailer | Reverse a drawbar trailer into a bay row. |
| 13 | Artic Dock | Semi | 16.6 m, hinged, into a dock between two others. |
| 14 | Blind Side | Semi | The same dock, on the side the mirrors don't cover. |

## Why the levels are the size they are

A vehicle at full lock sweeps a ring of a fixed width — 2.83 m for the
hatchback, 6.60 m for the bus. Any corridor narrower than that cannot be turned
out of in one arc, which is the line between "drive in" and "shunt it in", and
every level number is chosen against it.

Tight levels are easy to make impossible by accident, so they are checked
rather than eyeballed:

```bash
node tools/validate.js            # all levels
node tools/validate.js squeeze    # one
```

It confirms the vehicle starts clear and the target is reachable and unblocked,
then runs a hybrid-A* search over `(x, z, yaw)` — `(x, z, yaw, trailerYaw)` for
the articulated ones — using the game's own `integrate()` and collision boxes,
refusing any move that would reach the jackknife stop. If the search cannot
park it, the level does not ship. It also prints the real clearances and how many direction changes the search
needed. That number is the level's `record` — First Bay 0, The Squeeze 8 — and
the validator fails the level if the search finds a shorter answer than the
record claims, so the target in the HUD is always one that has been proved.

## Layout

| File | |
|---|---|
| `src/geom.js` | oriented-rectangle maths: SAT overlap, containment, distance |
| `src/vehicle.js` | kinematic bicycle model, articulation, the five vehicle specs |
| `src/colliders.js` | obstacles as flat rectangles, shared by renderer and prover |
| `src/levels.js` | all fourteen levels, in metres |
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
