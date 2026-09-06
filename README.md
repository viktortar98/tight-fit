# Tight Fit

A 3D parking game about threading a vehicle through spaces that look too small
for it. Fourteen levels, six vehicles, no lap times and no "you were 4 cm off
centre" scoring — a level is passed when the vehicle is inside the bay, stopped,
and you say you are done with it.

What is scored is **direction changes**: every time you swap between forward
and reverse. Parking anything is easy given unlimited shunts, so the shunts are
the game. There is no par and no published best — the only number to beat is
your own on that level, and it sits next to your current one.
Collisions are counted per attempt too, however gentle: a collision is the
moment you touch something, so grinding along a wall is one collision, and
letting go before you hit it again is what makes it two. There is no severity
threshold anywhere in the game, which is why the word is *collision* and not
*crash* — a kerb touch and a real hit score the same. Folding a trailer as far
as the hitch goes counts on the same terms: the rig stops dead against the
fold, and unwinding and refolding it is a second one.

Nothing tops 2.9 m/s. Holding a steady creep is not the challenge, so the
vehicles do it for you — the throttle is analog, but first gear is all there is.

## Play it

- [v6 — the current build](https://viktortar98.github.io/tight-fit/v6/): v5
  with a cabin you can see from the driver's seat, a reversing panel that stays
  in that seat, fainter tyre marks, and turning circles you can switch on
  (commit `dfdcaf0`). The [root URL](https://viktortar98.github.io/tight-fit/)
  serves the newest version, which is v6 today.
- [v5](https://viktortar98.github.io/tight-fit/v5/): thirteen vehicles instead
  of six, every body drawn from its own silhouette, and the four driving aids
  switchable (commit `c3eaf36`).
- [v4](https://viktortar98.github.io/tight-fit/v4/): the levels rebuilt against
  what the vehicles can actually do (commit `ed881f6`).
- [v3](https://viktortar98.github.io/tight-fit/v3/): v2's fourteen levels with
  the handling opened up — two steering modes, two throttle modes, and four
  multipliers to tune them at play time (commit `cbe01a6`).
- [v2](https://viktortar98.github.io/tight-fit/v2/): fourteen levels, six
  vehicles, scored on direction changes, one fixed way to steer and one fixed
  way to accelerate (commit `13de828`).
- [v1 — the first version](https://viktortar98.github.io/tight-fit/v1/): the
  original ten levels and two vehicles, scored on time and bumps, before
  direction changes became the score. Kept as it was (commit `e59328a`).

All of them are static builds of this repo on the `gh-pages` branch. v2 onwards
score in the same unit and share a save key, so a best set in one shows up in
the others; v1 scored in a different unit and keeps its own key.

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
| `B` | `Enter` | finish the level — only offered once you are in the bay and stopped |
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
reading one never means turning the view. The mirrors stick out and they
collide: they get their own thin rectangle in the vehicle's footprint, so
clipping one on a pillar costs you a collision exactly as a bumper would. Angles are held relative to the driven body, so a jackknifed
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

The corner also names the level and the vehicle it is driven with, and so do
the pause and result cards. The vehicle is part of the level's identity rather
than a label on the car: several of the fourteen set an earlier level's
geometry against a longer body or a worse lock, and on those the vehicle is the
whole difference between one problem and another.

**Hold rewind and the run plays backwards.** No budget, no cooldown. It winds
back the collisions and the direction changes with it, because the score is
recorded step by step alongside the vehicle's position rather than tallied
beside it — so a rewind past a collision also puts you back before it, and you
have to drive that stretch again. What it removes is the half minute of
driving back to the interesting part, which was never the difficulty.

**Switch on direction-change ghosts and every reversal leaves the vehicle
standing there** — a translucent copy, same model, same pose, same steering
angle, at each point where you swapped between forward and reverse. It is there
for the manoeuvre that is hard to see yourself doing: a parallel-parking
shuffle moves the car sideways by alternating two arcs about two centres, it
gains a few centimetres a cycle, and what makes it work is where the car *was*
at the end of the last stroke against where it is now. Nothing else in the game
records that — the tyre marks say where the wheels rolled, not which way the
body was pointing when they did. With the ghosts on, the whole shuffle is on
the ground at once.

You do not have to decide in advance. The poses are kept whether or not they
are being drawn, so finishing a manoeuvre and *then* turning the setting on
shows you the manoeuvre you just drove. The moment is picked by the game rather
than by your thumb: a direction change is the thing the game already counts,
because counting them is the score.

Ghosts are grey rather than your car's colour, so the saturated shape on screen
is still the one you are driving. With turning circles switched on, each ghost
brings the circles of the lock it was standing at — the rear ones and the
centre they turn about, which is the part the tyre marks do not already draw.
They are not drawn from the driver's seat, where the eye would be inside them.
Rewind takes them with it: wind back past a reversal and its ghost goes, the
same way the direction change itself goes off the counter.

**Switch on first contact and one more copy stands where this lock runs out** —
the pose the vehicle would first touch something at, driving on at the steering
you are holding, in the direction you are going. The turning circles say where
the vehicle *can* go; they say nothing about how much of that arc is left
before a wing meets a pillar, which on these levels is usually a metre or two.
It rides on the circles and is greyed out without them, because it is the end
of one of them. It is found by running the game's own physics forward and
stopping on the game's own collision test, so what it shows is where the
vehicle will actually stop — not an artist's idea of it. It is warm where the
recorded ghosts are cool, so a pose in the future never reads as a pose in the
past.

Nothing on the floor knows where the bay is. Every drawing in this game is
worked out from the vehicle's own state — the circles, the reversing rails,
first contact, the tyre marks, the ghosts — and none of them can see the
target, so none of them can turn into a route.

**The tyres leave marks, and they stay for the level.** Faint, but enough to
see afterwards whether the swing into the bay was one arc or three
corrections, and how much wider the front wheels ran than the rear ones — the
one thing you cannot see from the driver's seat while you are doing it. They
are laid by distance rather than by time, so sitting still with the wheel
turned writes nothing. Rewind takes them back with it: wind a run to the start
and the asphalt is clean.

There are no hints anywhere: what a level is about is in
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

Tight levels are easy to make impossible by accident. There used to be a
hybrid-A* solver in `tools/` that proved each one and printed the fewest
direction changes it could find; it was removed, because it was the largest
thing in the project and everything it produced was for the designer of a set
of levels that is finished. What is left is playing them. `DESIGN.md`
constraint 4 records the trade and the measurements worth keeping.

## Levels are objects

A level is a list of objects and nothing else:

```js
objects: [
  room(0, -8.475, 9.2, 10.35),
  bays(0, -11, ['hatch', null, 'hatch'], { w: 2.6, d: 5 }),
]
```

`src/objects.js` holds the palette — walls, kerbs, pillars, cones, parked
vehicles and paint, plus the composites built from them: `bay`, `bays`, `room`,
`street`, `docks`. Each is a `type` and its parameters, and `expand()` turns
them into rectangles and paint once, when the world is built.

The numbers a level writes down are the ones it is *about*: an aisle width, a
bay pitch, the length of a street. Everything that follows from those is worked
out in `src/objects.js` — where a car's rear axle has to go so the car sits
centred in its bay, where a kerb sits so the road is the width asked for. Levels
used to do that arithmetic by hand, and one of them had a bay row and the cars
parked in it a metre apart. An editor edits the parameters.

## Build your own

The menu has a second list under the fourteen: levels you made. **+ new level**
starts an empty lot, or **or start from** copies a shipped one — a copy carries
a *Reset to original*, because the original is still in the source and restoring
it is re-copying rather than remembering.

The editor is a plan view over the level and a panel of numbers beside it. You
drag to arrange, snapped to 10 cm, and you type the number that matters, because
a clearance that came out of a mouse is exactly what
[`DESIGN.md`](DESIGN.md) §7 exists to prevent — the picture is the check on the
number, not a replacement for it. **Test drive** plays it immediately; **Export**
prints it as `src/levels.js` source, which is how a level leaves the browser.

Your levels have their own bests and unlock nothing. A bay you widened yourself
is not a key to the next level.

## Looking at it

`dev.html`, on the dev server only, is an inspection sheet: every vehicle from
six angles, or all fourteen levels from above, or the turning circles at six
locks, or every vehicle standing in front of two ghosts of itself — one frame
each, so looking at the whole matrix costs one look.

```
pnpm dev
# then: /dev.html#cars  #car=hatch  #levels  #level=alcove  #circles=van  #ghosts
```

`window.dev` on that page has `report()` (every vehicle and level as one text
table), `coplanar(id)` (surfaces the depth buffer cannot choose between — the
check that would have caught the shell/lining z-fighting), and `builders()`
(that every object type's export writes a call its builder actually accepts).

## Layout

| File | |
|---|---|
| `src/geom.js` | oriented-rectangle maths: SAT overlap, containment, distance |
| `src/vehicle.js` | kinematic bicycle model, articulation, the thirteen vehicle specs |
| `src/colliders.js` | obstacles as flat rectangles, shared by renderer and physics |
| `src/objects.js` | the palette a level is built from, and what expands it |
| `src/levels.js` | all fourteen levels, in metres |
| `src/world.js` | scene construction, themes, lighting |
| `src/carMesh.js` | vehicle and trailer models from `spec.body`, plus the cabin lining |
| `src/camera.js` | chase / inside / overhead, body-relative |
| `src/panels.js` | the three mirrors and the reverse camera, as screen panels |
| `src/rewind.js` | the tape the run plays backwards through |
| `src/traces.js` | the marks the tyres leave, one ribbon per wheel |
| `src/ghosts.js` | the pose at each direction change, and the pose this lock runs out at |
| `src/turnCircles.js` | the circle each wheel is on, drawn on the ground when asked |
| `src/gamepad.js` | Xbox mapping, analog triggers, rumble |
| `src/editor.js` | the level editor: a plan view and a number panel |
| `src/userLevels.js` | levels the player built, kept in the browser |
| `src/dev.js` | the inspection sheet — every vehicle and every level at once |
| `src/main.js` | game loop, collision resolution, progression |
| `DESIGN.md` | the constraints all of the above exist to satisfy |

Collision is 2D: every obstacle, and every unit of the vehicle, is a rectangle
on the XZ plane, so what you see in the overhead view is exactly what the
physics uses. Contact stops the vehicle rather than bouncing it — a binary
search on the last sub-step lets it creep right up against a wall instead of
freezing short of it. Every contact counts as a collision for that attempt and buzzes the pad —
harder hits flash the screen more, but nothing scrapes through for free.
