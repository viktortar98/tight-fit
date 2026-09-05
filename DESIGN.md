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

## 5. Every contact is a crash

There is no free-scrape threshold. Crashes are counted per attempt, reset on
restart, and stored with the player's best.

The old rule only counted hits above 0.6 m/s, which at these speeds hid almost
every contact — the threshold quietly taught players that grinding along a wall
was fine. Impact still scales the screen flash and the rumble; it does not
decide whether the crash happened.

*Held by:* `Game.onContact`, `src/main.js`.

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

## 9. Camera angles are relative to the driven body

A view you chose stays on the same corner of the vehicle as the vehicle turns —
including the overhead view, which keeps the nose pointing up the screen. A
jackknifed trailer never drags your viewpoint with it.

For an articulated vehicle the chase camera frames the *whole combination*, not
the cab, and pays back in height whatever the arena walls take away in
distance.

*Held by:* `src/camera.js`.

## 10. No path-prediction aids

The floor shows no predicted arcs, no ghost of where the vehicle will end up,
no steering guide lines. Judging where the vehicle will go is the skill the
game is about; drawing the answer on the ground removes it.

This was built once and deliberately removed. **Do not add it back** as a
"helpful" overlay, an accessibility option, or a beginner mode.

*Held by:* this paragraph, and nothing else.

## 11. Full controller parity

An Xbox pad drives, steers with analog input, looks around, rumbles on contact,
and navigates every menu, level tile, pause card and result card. The HUD
legend swaps to pad glyphs on the first button press. A pad user must never
have to reach for the keyboard.

*Held by:* `src/gamepad.js` and the pad branches in `Game.padMenu`.

---

## Where the rules are enforced

| Constraint | Enforced by | Fails how |
|---|---|---|
| 3 — proved solvable | `tools/validate.js` | exit 1, names the level |
| 4 — honest record | stale-record check in the validator | exit 1, prints the shorter answer |
| 4 — par derivation | `parOf` in `src/levels.js` | one place to change |
| 7 — swept ring | printed per level by the validator | visible drift |
| 1, 2, 5, 6, 8, 9, 10, 11 | nothing | silent |

Eight of eleven are held by reading. That is the honest state of it: the
solvability gate is machine-checked because a broken level is invisible until
someone plays it, and the rest are cheap for a person to notice and expensive
to automate. This file is what a reviewer checks a change against.
