# Tight Fit

A 3D parking game about threading a car through spaces that look too small for
it. Ten levels, two vehicles, no lap times and no "you were 4 cm off centre"
scoring — a level is passed the moment the car is inside the bay and stopped.
The difficulty is entirely in the route: which way you have to enter, how many
shunts it takes, and whether you can hold a 25 cm clearance while you do it.

```bash
pnpm install
pnpm dev        # http://127.0.0.1:5183
pnpm build      # static bundle in dist/
```

## Controls

| | |
|---|---|
| `W` / `S` | throttle, reverse (also brakes when moving the other way) |
| `A` / `D` | steer (works at a standstill, like power steering) |
| `Shift` | crawl — caps the speed at ~1.3 m/s for the tight bits |
| `Space` | brake |
| `C` | camera: chase → overhead → free orbit |
| `G` | guide lines on/off |
| `V` | reverse camera auto-flip on/off |
| `R` | restart level &nbsp;·&nbsp; `M` mute &nbsp;·&nbsp; `Esc` pause |
| drag / scroll | look around, zoom |

The yellow lines on the ground are where the two leading corners of the car
will actually travel at the current steering angle. The bar above the dash is
a parking sensor: the distance to the nearest thing in any direction.

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

## Why the levels are the size they are

A car at full lock sweeps a ring of a fixed width — 2.83 m for the hatchback,
3.41 m for the van. Any corridor narrower than that cannot be turned out of in
one arc, which is the line between "drive in" and "shunt it in", and every
level number is chosen against it.

Tight levels are easy to make impossible by accident, so they are checked
rather than eyeballed:

```bash
node tools/validate.js            # all levels
node tools/validate.js squeeze    # one
```

It confirms the car starts clear and the target is reachable and unblocked,
then runs a hybrid-A* search over `(x, z, yaw)` using the car's own motion
primitives and collision boxes. If the search cannot park the car, the level
does not ship. It also prints the real clearances and how many direction
changes the search needed — a decent proxy for how nasty a level is.

## Layout

| File | |
|---|---|
| `src/geom.js` | oriented-rectangle maths: SAT overlap, containment, distance |
| `src/vehicle.js` | kinematic bicycle model + the two vehicle specs |
| `src/levels.js` | all ten levels, in metres |
| `src/world.js` | scene construction, themes, lighting |
| `src/carMesh.js` | the car model |
| `src/camera.js` | chase / overhead / orbit, with occlusion pull-in |
| `src/guides.js` | predicted-path guide lines |
| `src/main.js` | game loop, collision resolution, progression |
| `tools/validate.js` | the solvability prover |

Collision is 2D: every obstacle and the car are rectangles on the XZ plane, so
what you see in the overhead view is exactly what the physics uses. Contact
stops the car rather than bouncing it — a binary search on the last sub-step
lets it creep right up against a wall instead of freezing short of it. Hits
above 0.6 m/s count as bumps; scraping through at a crawl does not.
