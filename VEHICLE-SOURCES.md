# Where the vehicle numbers come from

An audit of the thirteen specs in `src/vehicle.js` against published manufacturer
data. Nothing in this document changes any source file: every level was cut
against the numbers as they stand, so what to do about a discrepancy is a
separate decision from knowing that it exists.

Written September 2026. Every figure below is either quoted from the source named
beside it or derived from quoted figures by the arithmetic set out in
[§2](#2-how-a-published-turning-circle-becomes-a-model-steer-angle), which is
shown in full so a reader can check it.

---

## 1. The short answer

**Nine of the thirteen are sound. Two are materially wrong, and they are wrong in
opposite directions.**

| | verdict |
|---|---|
| SUV, Semi | **sound** — the lock is right to within half a degree |
| Saloon, Hatchback, Coach, Car + trailer, Box Lorry | **sound** — lock within 2.5°, radius within 12% |
| City Car, Delivery Van, Pickup Truck | **off but harmless** — lock out by 2–4°, radius by 12–20%, in a direction that makes the level harder rather than impossible |
| **City Bus** | **materially wrong** — turns 22% tighter than a real low-floor city bus |
| **School Bus** | **materially wrong in its body, not its lock** — 0.7 m of rear overhang is missing and has been moved to the front |
| **Step Van** | **materially wrong in its body** — its defining 1.20 m rear overhang is about half what a real walk-in van has; and its lock could not be sourced at all |
| Tour Coach | sound in the lock, but its overhangs are **front-to-back reversed** |

The specific claim that prompted this audit — that the lock angles on the large
vehicles look like inner-wheel figures used as bicycle-model figures — is **half
right**. It is true of the city bus. It is not true of the coach, which at 52°
lands within 0.6% of the figure derived from Setra's own published turning
circle, nor of the semi, which lands within 0.4% of Mercedes' Actros data. The
reason is a real engineering fact rather than an accident: a low-floor city bus
has a *restricted* steering lock, because the front wheel arches must not intrude
into the low-floor gangway, while a high-floor coach has no such constraint. A
12 m coach genuinely turns tighter than a 12 m city bus. The game has that
relationship backwards.

The other prompt — that the small-car dimensions look close to real — is
**confirmed and then some**. The city car is a Fiat 500 to within 24 mm on
length, 3 mm on width, 2 mm on height, 0 mm on wheelbase and 4 mm on track
width. The SUV's lock is within 0.14° of an Audi Q5's. The semi's tractor
wheelbase is Mercedes' Actros 4x2 figure exactly and its lock is that vehicle's
to within 0.16°. These are not coincidences; whoever wrote the file knew a lot
about cars.

**What is systematically absent is overhang.** The passenger cars have overhangs
that match their exemplars closely. Everything from the box lorry up does not:
the game gives the step van, school bus and city bus rear overhangs that are
0.6–1.0 m shorter than the real vehicles', and gives the coach a rear overhang
0.6 m *longer* than the real one while cutting 0.9 m off its front. Overhang is
the thing this game is most sensitive to — three of the twenty-one levels are
explicitly about tail swing — so it is the finding with the most consequence.

---

## 2. How a published turning circle becomes a model steer angle

`src/vehicle.js:479` integrates

```js
const yawRate = (v * Math.tan(steer)) / spec.wheelbase;
```

which is the kinematic bicycle model referenced at the centre of the rear axle.
At full lock the rear axle therefore travels a circle of radius

> **R = wheelbase / tan(maxSteer)**

`maxSteer` is the angle of one virtual wheel at the centre of the front axle. No
manufacturer publishes that number. What they publish is a turning circle, in one
or both of two flavours, and manufacturers who publish both label them
distinctly — Mercedes-Benz's van and bus data sheets carry *Turning circle Ø* and
*Track circle Ø* as separate rows, and the German originals call them *Wendekreis*
and *Spurkreis*:

- **kerb-to-kerb** (*track circle*, *Spurkreis*, *curb-to-curb*): the circle
  traced by the outer front **tyre**.
- **wall-to-wall** (*turning circle*, *Wendekreis*): the circle traced by the
  outermost point of the **body**, normally the outer front bumper corner.

They are not interchangeable. On the Setra S 515 HD the two differ by 4.2 m of
diameter; on the Mercedes Sprinter L1, by 0.8 m.

### The two relations

Put the instantaneous centre of rotation on the rear-axle line at distance `R`
from the vehicle centreline. Then:

**From a kerb-to-kerb radius `Rk`** — the outer front tyre sits `wheelbase`
forward of the rear axle and `trackWidth/2` outboard of the centreline, so
`Rk² = wheelbase² + (R + trackWidth/2)²`, giving

> **R = √(Rk² − wheelbase²) − trackWidth / 2**   →   **maxSteer = atan(wheelbase / R)**

**From a wall-to-wall radius `Rw`** — the outer front bumper corner sits
`wheelbase + frontOverhang` forward and `width/2` outboard, so

> **R = √(Rw² − (wheelbase + frontOverhang)²) − width / 2**   →   **maxSteer = atan(wheelbase / R)**

The kerb form is the one to prefer when both are published, because it depends on
no assumption about how square the front corners are. The wall form is used below
wherever only that figure exists — every truck and the school bus — and it reads
slightly *tight*, because real bumper corners are chamfered and the published
circle is therefore a little smaller than a sharp-cornered box would trace. Where
both were available the two forms agreed to within 1.3° (Citaro) and 2.6°
(Setra), which is the size of that error.

### Worked example, in full: the Mercedes-Benz Citaro city bus

Published by Mercedes-Benz Buses, *Citaro* technical data table:

| | |
|---|---|
| Length | 12,135 mm |
| Width | 2,550 mm |
| Wheelbase, front axle–drive axle | 5,900 mm |
| Overhang at front | 2,805 mm |
| Overhang at rear | 3,430 mm |
| **Track circle minimal** | **19,160 mm** |
| **Turning circle** | **22,970 mm** |

Front track width is not published; a 2.55 m-wide bus runs about 2.10 m, and the
result is insensitive to it (±0.10 m of track moves the answer by 0.3°).

*From the track circle (kerb-to-kerb):*

```
Rk           = 19.160 / 2                       = 9.580 m
Rk² − wb²    = 91.776 − 34.810                  = 56.966 m²
√            = 7.548 m
R            = 7.548 − 2.10/2                   = 6.498 m
maxSteer     = atan(5.900 / 6.498) = atan(0.9080) = 42.24°
```

*From the turning circle (wall-to-wall), as a cross-check:*

```
Rw           = 22.970 / 2                        = 11.485 m
wb + FO      = 5.900 + 2.805                     = 8.705 m
Rw² − 8.705² = 131.905 − 75.777                  = 56.128 m²
√            = 7.492 m
R            = 7.492 − 2.550/2                   = 6.217 m
maxSteer     = atan(5.900 / 6.217) = atan(0.9490) = 43.50°
```

The two agree to 1.3°, in the expected direction. A real 12 m low-floor city bus
therefore turns on a rear-axle radius of **6.2–6.5 m** at a bicycle-model steer
angle of **42–43.5°**.

`src/vehicle.js` gives the city bus `maxSteer: deg(50)` on a 5.60 m wheelbase, so
**R = 4.70 m**. Holding the sourced *angle* and applying it to the game's own
5.60 m wheelbase gives R = 5.90–6.18 m. The game's bus turns **22% tighter than
it should**.

### Why not source "maximum steering angle" directly

Because the number manufacturers give under that name is the **inner wheel's**
angle, which is always larger than the bicycle-model angle, and using it directly
would make every vehicle turn better than it can. Blue Bird's *Vision* brochure
prints `WHEEL CUT 50°`; the MBTC field study below found the equivalent Citaro G
figure quoted as `53°/46° (inner/outer)`. On a 6.55 m wheelbase, feeding 50°
straight into `maxSteer` would give R = 5.50 m where the correct derivation gives
6.4 m at best and 9.7 m as the road-design figure. The gap is the whole reason
this document derives rather than quotes.

---

## 3. Per-vehicle findings

Each block gives the exemplar sourced against, the published figures, the
derivation, and the verdict. `Δ` compares the game's value with the sourced one.
Where the game's wheelbase differs from the exemplar's, the radius comparison
holds the *angle* fixed and re-evaluates it on the game's wheelbase, so that the
lock is judged separately from the body.

Primary sources are manufacturer spec sheets, brochures and technical-data
tables. Anything else is marked **[secondary]**.

---

### citycar — City Car → **Fiat 500 (Type 312, 1.2, 2007–2020)**

| | current | sourced | Δ |
|---|---|---|---|
| length | 3.57 | 3.546 m | +24 mm |
| width | 1.63 | 1.627 m | +3 mm |
| height | 1.49 | 1.488 m | +2 mm |
| wheelbase | 2.30 | 2.300 m | 0 |
| trackWidth | 1.41 | 1.414 m (front) | −4 mm |
| overhangs (F/R) | 0.65 / 0.62 | combined 1.246 m; split not sourced | combined +24 mm |
| turning circle | — | 9.2–9.3 m kerb (1.2); 10.6 m (TwinAir, 1.4 16v) | — |
| **maxSteer** | **38°** | **34.6°** (from 9.3 m), 35.1° (9.2 m), 29.5° (10.6 m) | **+3.4°** |
| **R** | **2.94 m** | **3.33 m** (best case) to 4.07 m | **−12% to −28%** |

Sources: [Stellantis media, Fiat 500 model document](https://www.media.stellantis.com/em-en/download-model-document/165) (turning circle 9.3 m); [Fiat 500/500C brochure, Feb 2010](https://manuals.plus/m/243b529ed79d89d0acafc76781c3b83d5dc1d1780be7f99c1936fcb1fe06b151) (9.28 m); [cars-data, Fiat 500 turning circle](https://www.cars-data.com/en/fiat-500/turning-circle) **[secondary]** (9.2–10.6 m across variants); [cars-data front track](https://www.cars-data.com/en/fiat-500/front-track-width) **[secondary]** (1,414 mm).

**Conflict, reported rather than resolved:** Fiat publishes 9.2 m, 9.28 m, 9.3 m
and 10.68 m for different engines of the same body, and the spread moves the
derived angle by 5.6°. The 9.2–9.3 figures belong to the 1.2, which is the car
this exemplar is; the 10.6 figures belong to the TwinAir and 1.4 16v.

**Verdict: off but harmless.** The dimensions are the closest match in the whole
roster — this is a Fiat 500 and the file should say so. The lock is 3.4° optimistic
even against the tightest published circle. In play the city car turns about 40 cm
tighter than the real thing, which makes level 4 (Herringbone) marginally easier
than a Fiat 500 would find it, and breaks nothing.

---

### hatch — Hatchback → **Ford Fiesta Mk7 facelift (2013), 5-door** *(blended)*

| | current | sourced | Δ |
|---|---|---|---|
| length | 3.95 | 3.969 m | −19 mm |
| width | 1.76 | 1.722 m | +38 mm |
| height | 1.44 | 1.495 m | −55 mm |
| wheelbase | 2.45 | 2.489 m | −39 mm |
| trackWidth | 1.50 | 1.493 m **[secondary]** | +7 mm |
| turning circle | — | 10.2 m (minimum turning diameter) | — |
| **maxSteer** | **36°** | **33.9°** | **+2.1°** |
| **R** | **3.37 m** | **3.65 m** (angle held, on the game's 2.45 m wheelbase) | **−7.5%** |

Sources: [auto-data.net, Fiesta VII (Mk7, facelift 2013)](https://www.auto-data.net/en/ford-fiesta-vii-mk7-facelift-2013-3-door-1.0-65hp-46878) **[secondary]**; [carsguide Fiesta dimensions 2013](https://www.carsguide.com.au/ford/fiesta/car-dimensions/2013) **[secondary]**.

**This one is a blend and should be labelled as one.** Length and wheelbase are a
Fiesta Mk7's; width 1.76 m and height 1.44 m belong to a later, larger supermini
(the VW Polo Mk6 is 1,751 × 1,446 mm) on a longer wheelbase. No single car has
all four. Its overhangs are also split exactly evenly, 0.75 m front and rear,
which no front-wheel-drive hatchback is — the engine makes the front overhang
longer, by about 140 mm on a Fiesta.

**Verdict: sound.** 7.5% of radius on the game's benchmark vehicle is inside the
noise of which supermini you pick. I could not find a primary Ford source that
was fetchable; the 10.2 m figure is consistent across several aggregators but is
marked secondary.

---

### saloon — Saloon → **Volkswagen Passat B8 saloon (2014–2023)**

| | current | sourced | Δ |
|---|---|---|---|
| length | 4.75 | 4.767 m | −17 mm |
| width | 1.83 | 1.832 m | −2 mm |
| height | 1.46 | 1.456 m | +4 mm |
| wheelbase | 2.79 | 2.786–2.791 m | −1 mm |
| rearOverhang | 1.06 | ~1.05 m **[secondary]** | +10 mm |
| trackWidth | 1.57 | 1.547 m **[secondary]** | +23 mm |
| turning circle | — | 11.7 m **[secondary]** | — |
| **maxSteer** | **34°** | **32.6°** | **+1.4°** |
| **R** | **4.14 m** | **4.36 m** | **−5.2%** |

Sources: [Wikipedia, Volkswagen Passat (B8)](https://en.wikipedia.org/wiki/Volkswagen_Passat_(B8)) (length, width, height, wheelbase — themselves quoting VW's figures); [cars-data Passat turning circle](https://www.cars-data.com/en/volkswagen-passat/turning-circle) **[secondary]**.

**Verdict: sound.** Dimensions are a B8 Passat to within 20 mm everywhere. The
lock is 1.4° optimistic. Its swept ring, 3.03 m in-game against 3.01 m sourced,
is right to two centimetres.

---

### suv — SUV → **Audi Q5 (FY, 2017–)**

| | current | sourced | Δ |
|---|---|---|---|
| length | 4.72 | 4.663 m (EU) / 4.629 m (US) | +57 mm |
| width | 1.95 | 1.893–1.898 m | +54 mm |
| height | 1.72 | 1.657–1.663 m | +59 mm |
| wheelbase | 2.82 | 2.819 m | +1 mm |
| trackWidth | 1.66 | 1.618 m front / 1.613 m rear **[secondary]** | +42 mm |
| turning circle | — | 11.7 m **[secondary]** | — |
| **maxSteer** | **33°** | **33.14°** | **−0.14°** |
| **R** | **4.34 m** | **4.32 m** | **+0.4%** |

Sources: [carsguide Audi Q5 dimensions 2017](https://www.carsguide.com.au/audi/q5/car-dimensions/2017) **[secondary]**; [Edmunds 2017 Q5 specs](https://www.edmunds.com/audi/q5/2017/features-specs/) **[secondary]**.

**Verdict: sound — the best lock in the roster.** 0.14° from a published turning
circle. The body is uniformly ~55 mm generous in all three dimensions, which
reads as an SUV drawn a size up rather than a mistake, and the wheelbase is exact.
Note that the game's SUV is *not* taller than a real Q5 by much: at 1.72 m it is
6 cm over, so DESIGN.md's clearance rules see roughly the right vehicle.

---

### van — Delivery Van → **Mercedes-Benz Sprinter panel van, L1 H1 (VS30, 2018–)**

| | current | sourced | Δ |
|---|---|---|---|
| length | 5.30 | 5.267 m | +33 mm |
| width | 2.02 | 2.020 m (excl. mirrors) | 0 |
| height | 2.30 | 2.355 m (H1 standard roof) | −55 mm |
| wheelbase | 3.20 | 3.259 m | −59 mm |
| rearOverhang | 0.95 | ~1.01 m **[secondary]** | −60 mm |
| **track circle Ø** | — | **12.2–12.6 m** | — |
| **turning circle Ø** | — | **13.0–13.4 m** | — |
| **maxSteer** | **32°** | **35.7–37.2°** | **−3.7 to −5.2°** |
| **R** | **5.12 m** | **4.22–4.45 m** | **+18%** |

Sources: [Mercedes-Benz UK, *The new Sprinter panel van — dimensions, weights and technical data*](https://tools.mercedes-benz.co.uk/current/vans/brochures/sprinter-panel-van-dimensions.pdf) — this document carries *Track circle Ø, m* and *Turning circle Ø, m* as separate rows, which is what makes the derivation clean; L1 reads 12.2–12.6 and 13–13.4 respectively.

**Verdict: off but harmless.** The van's body is a Sprinter L1 to within 60 mm
everywhere. Its lock is 4–5° short, and it wants about 0.7–0.9 m more radius than
a real Sprinter. That makes levels 10 (Van Life) and 11 (Loading Dock) harder
than they would be in the real van, not impossible — and Loading Dock is already
the roster's acknowledged zero-shunt level, so it has room.

---

### pickup — Pickup Truck → **Ford F-150 SuperCrew, 5.5-ft box, 4x2 (2021)** *(part-blended)*

| | current | sourced | Δ |
|---|---|---|---|
| length | 6.10 | 5.885 m (5.5-ft box) / 6.185 m (6.5-ft box) | +215 mm / −85 mm |
| width | 2.03 | 2.029 m (79.9 in, excl. mirrors) | +1 mm |
| height | 1.95 | 1.920 m (75.6 in, cab height) | +30 mm |
| wheelbase | 3.68 | 3.693 m (145.4 in) | −13 mm |
| frontOverhang | 1.07 | 0.955 m (37.6 in) | +115 mm |
| rearOverhang | 1.35 | 1.234 m (48.6 in) | +116 mm |
| trackWidth | 1.72 | 1.725 m front (67.9 in) / 1.735 m rear | −5 mm |
| turning circle | — | **47.8 ft curb-to-curb** (145.4 in wb) | — |
| **maxSteer** | **30°** | **34.3°** | **−4.3°** |
| **R** | **6.37 m** | **5.39 m** | **+18%** |

Source: [Ford, *2021 F-150 Technical Specifications*](https://www.fromtheroad.ford.com/content/dam/fordmediasite/us/en/library/2021/specs/2021-F-150-Technical-Specs.pdf) — full exterior-dimensions tables per cab and box, plus a *Turning circle (curb-to-curb)* table giving 41.2 / 46.4 / 47.8 / 51.1 / 52.5 ft against wheelbases of 122.8 / 141.5 / 145.4 / 157.2 / 164.1 in.

This is North American, correctly: the spec is plainly an F-150 and there is no
European equivalent at these dimensions. It is a mild blend — the wheelbase is
the 5.5-ft-box SuperCrew's to 13 mm, but the overall length is 215 mm longer,
closer to the 6.5-ft box (which has a 3.99 m wheelbase). Deriving from the
6.5-ft box instead gives 34.4°, so the blend does not change the answer.

**Verdict: off but harmless — but this is the largest single lock error after the
city bus.** A real F-150 turns on 5.39 m where the game's turns on 6.37 m, 18%
wider. The game's own README builds level 12 (Wide Circle) explicitly around
"6.37 m of turning radius"; sourced, the vehicle would want about a metre less.
The level would get noticeably easier if the number were corrected, which is
exactly why this document does not correct it.

---

### lorry — Box Lorry → **Mercedes-Benz Atego 816, 4x2 rigid, 4,220 mm wheelbase, day cab**

| | current | sourced | Δ |
|---|---|---|---|
| length | 7.60 | 8.065 m (chassis-cab, incl. rear bumper) | −465 mm |
| width | 2.35 | 2.295 m (S-cab) **[secondary]**; a 7.5 t box body runs 2.40–2.50 m | +55 mm on the cab |
| height | 3.20 | ~3.2 m with a box body **[secondary]** | — |
| wheelbase | 4.20 | 4.220 m | −20 mm |
| frontOverhang | 1.05 | 1.380 m | **−330 mm** |
| rearOverhang | 2.35 | 2.285 m (frame) / 2.465 m (to bumper) | +65 / −115 mm |
| turning circle | — | **16.0 m wall-to-wall** | — |
| **maxSteer** | **40°** | **42.75°** | **−2.75°** |
| **R** | **5.01 m** | **4.57 m** | **+9.6%** |

Source: [Mercedes-Benz UK, *Atego 4x2 rigid 816 818 822 824* specification sheet](https://tools.mercedes-benz.co.uk/current/trucks/specification-sheets/atego/atego-4x2-rigid-816-824.pdf) — wheelbase, rear overhang, overall length, bumper-to-back-of-cab and cab-rear-to-front-axle rows, plus *Turning circle (wall to wall) m* at 12.3 / 13.2 / 14.1 / 16.0 / 17.8 for the five wheelbases. Front overhang is derived from the sheet's own rows (1,650 mm bumper-to-back-of-cab minus 270 mm cab-rear-to-front-axle).

Deriving from all five wheelbases on the same sheet gives 43.80 / 43.60 / 43.44 /
42.75 / 42.62° — a spread of 1.2° across a 1.8 m range of wheelbase, which is
what a single steering box should produce and is the strongest internal check
available in this document.

**Verdict: sound.** 2.75° of lock and 44 cm of radius is a real difference but
not one that changes what fits where. The rear overhang, which is what level 13
(Tail Sweep) is entirely about, is right to within 12 cm. The front overhang is
33 cm short, which makes the game's lorry slightly less prone to swinging its
nose than the real thing.

---

### stepvan — Step Van → **Freightliner Custom Chassis MT45 + Morgan Olson Route Star walk-in van, 178 in wheelbase**

| | current | sourced | Δ |
|---|---|---|---|
| length | 7.30 | 7.849 m (25 ft 9 in, 16-ft body) | −549 mm |
| width | 2.40 | 2.261 m (89 in) or 2.413 m (95 in) | −13 mm vs the 95 in body |
| height | 3.00 | 2.946–3.150 m (116–124 in) | in range |
| wheelbase | 4.75 | 4.521 m (178 in) or 4.826 m (190 in) | between the two |
| frontOverhang | 1.35 | 1.092 m (43 in, constant across the range) | **+258 mm** |
| **rearOverhang** | **1.20** | **2.235 m** (88 in) | **−1,035 mm** |
| turning circle | — | **not published** | — |
| **maxSteer** | **44°** | **not sourced** | **unknown** |

Source: [Morgan Olson, *FCCC MT45 MT55 / Morgan Olson Route Star Walk-In Step Van Chassis / Body Specs*, ML002 Rev 23A](https://morganolson.com/wp-content/uploads/2023/01/Morgan-Olson-FCCC-MT45-55-chassisBODYspec_ML002_23A.pdf). Front overhang is derived from the sheet's own rows: overall length minus wheelbase minus rear overhang gives 43 in at every one of the thirteen configurations listed.

**Verdict: materially wrong in the body.** The step van exists in this roster to
be the box lorry's opposite — "wheels near the ends of the same box: 1.20 m of
rear overhang against the lorry's 2.35 m", per the source comment at
`src/vehicle.js:191`. **A real walk-in van does not have that property.** Every
configuration Morgan Olson lists has a rear overhang between 75 and 132 inches
(1.91–3.35 m); the 178 in chassis with a 16-ft body has 88 in, which is 2.24 m —
within 11 cm of the Atego's 2.29 m frame overhang. The contrast the pair is built
on is invented.

There *is* a real contrast between the two vehicles, and it sits at the other end:
the walk-in van's front overhang is 1.09 m and constant regardless of length,
because the driver sits over the front axle, while the Atego's is 1.38 m. The
game has this backwards too — it gives the step van the *longer* front overhang
of the pair (1.35 m against the lorry's 1.05 m).

**Remaining unknown, named: the step van's lock.** Neither Freightliner Custom
Chassis nor Morgan Olson publishes a turning circle or a wheel cut for the
MT45/MT55, and I could not find one in any secondary source either. The game's
44° is *consistent* with a 50° inner-wheel cut on its 4.75 m wheelbase (which
would give 44.05°), and 50° is the figure Blue Bird quotes for a comparable
medium-duty front axle — but that is a plausibility argument, not a source, and
it should not be recorded as one.

Level 14 (Back Alley) is built on this vehicle's short rear overhang. Correcting
the overhang to a real walk-in van's would invalidate that level outright.

---

### schoolbus — School Bus → **65/66-passenger Type C conventional school bus** (US)

The best source here is not a manufacturer sheet but a field study that measured
real buses because the manufacturers' own figures did not agree with each other.

| | current | sourced (design vehicle) | Δ |
|---|---|---|---|
| length | 10.90 | 10.86 m | +40 mm |
| width | 2.44 | 2.44 m | 0 |
| height | 3.05 | 3.05 m | 0 |
| wheelbase | 6.55 | 6.57 m | −20 mm |
| **frontOverhang** | **1.50** | **0.83 m** | **+670 mm** |
| **rearOverhang** | **2.85** | **3.57 m** | **−720 mm** |
| trackWidth | 2.06 | ~2.04 m **[secondary]** | +20 mm |
| outside body sweep radius | — | 13.21 m | — |
| outside tyre curb clearance radius | — | 11.84 m | — |
| manufacturer turn angle | — | 50.0° (inner wheel) | — |
| measured wheel angle, two in-service buses | — | 31.3° and 36.9° | — |
| **maxSteer** | **42°** | **34.1°** (design vehicle) to **45.6°** (at the 50° wheel cut) | **inside the bracket** |
| **R** | **7.27 m** | **6.41–9.67 m** | **inside the bracket** |

Sources: J. L. Gattis et al., [*Large School Bus Design Vehicle Dimensions*, MBTC FR 1054-1, Sept 1998](https://rosap.ntl.bts.gov/view/dot/14445/dot_14445_DS1.pdf) — Table 3 gives the manufacturer-specified 65/66-passenger Type C design vehicle (height 3.05, width 2.44, length 10.86, front overhang 0.83, wheelbase 6.57, rear overhang 3.57, inside tyre radius 5.79, outside tyre curb clearance radius 11.84, outside body sweep radius 13.21, turn angle 50.0°), and Chapter 4 reports the field measurements. [Blue Bird, *Vision* brochure](https://blue-bird.com/wp-content/uploads/2024/04/vision-brochure-web-ready.pdf) independently gives `WHEEL CUT 50°`, `EXTERIOR WIDTH 96"`, `OVERALL HEIGHT 122"–128"`, and `OVERHANG 45" front with standard steel bumper`.

**Conflict, reported rather than resolved.** The manufacturer's own numbers do
not cohere. A 50° inner-wheel cut on a 6.57 m wheelbase implies a rear-axle
radius of 6.44 m and an outside body sweep radius of 10.64 m; the same table
publishes 13.21 m, which implies a rear-axle radius of 9.72 m and an inner-wheel
angle of 36.8°. The study then went and measured two in-service buses of that
exact make and model and found **31.3° and 36.9°** — and explains why: *"a 'wheel
stop' exists on the front wheels of a school bus; this wheel stop can be adjusted
to change the turning angle."* One of the two buses could not be adjusted further
without the wheel fouling the tie-rod bolts.

So the honest answer is a bracket, not a number: a Type C school bus turns
somewhere between **34° and 46°** of bicycle-model steer depending on how its
wheel stops are set, and the figure used for road geometry design is the low end.
**The game's 42° is inside that bracket**, closer to the manufacturer's maximum
than to what buses in service actually do.

**Verdict: the lock is defensible; the body is materially wrong.** 0.72 m of rear
overhang has been moved to the front. This is the vehicle the game most cares
about getting right — the README calls it "the worst-steering vehicle in the
game" and DESIGN.md records it as "the user's own example" — and its tail is
three-quarters of a metre shorter than a real Type C bus's. Level 16 (Depot) was
cut against the short tail.

The *relative* claim survives, though, and gets stronger: at the design-vehicle
figure the school bus needs a 9.7 m rear-axle radius against the city bus's 6.5 m,
where the game has 7.27 against 4.70. The school bus really is the worst-turning
vehicle in this roster by a wide margin, and really is only the ninth longest.

---

### bus — City Bus → **Mercedes-Benz Citaro, 12 m two-axle solo (C2)**

| | current | sourced | Δ |
|---|---|---|---|
| length | 11.00 | 12.135 m | **−1,135 mm** |
| width | 2.50 | 2.550 m | −50 mm |
| height | 3.15 | 3.095 m | +55 mm |
| wheelbase | 5.60 | 5.900 m | −300 mm |
| frontOverhang | 2.50 | 2.805 m | −305 mm |
| rearOverhang | 2.90 | 3.430 m | **−530 mm** |
| track circle (kerb) | — | 19.160 m | — |
| turning circle (wall) | — | 22.970 m | — |
| **maxSteer** | **50°** | **42.2–43.5°** | **+6.5 to +7.8°** |
| **R** | **4.70 m** | **5.90–6.18 m** (angle held on the game's 5.60 m wheelbase) | **−22%** |

Source: [Mercedes-Benz Buses, *Citaro* technical data](https://www.mercedes-benz-bus.com/int/en/models/citaro/facts-citaro.html) and the [German original](https://www.mercedes-benz-bus.com/de/de/models/citaro/facts-citaro.html), which carries *Wendekreis* and *Spurkreis* as separate rows. Worked in full in [§2](#worked-example-in-full-the-mercedes-benz-citaro-city-bus).

**Conflict, reported rather than resolved.** Some Daimler press material quotes a
turning figure of 21,214 mm for the 12 m solo Citaro. That number does not pair
with the published 19,160 mm track circle under either reading — from a 19.16 m
track circle a sharp-cornered body would sweep 23.3 m, close to the published
22.97 m, whereas 21.21 m would require a 16.6 m track circle. I have used the
technical-data table's pair, which is internally consistent to 1.6%, and noted the
outlier.

**Verdict: materially wrong.** This is the lock the audit was called for, and the
suspicion was right. A real low-floor city bus turns on 6.2–6.5 m of rear-axle
radius; the game's turns on 4.70. **The reason is not that an inner-wheel angle
was mistaken for a bicycle-model one** — 50° is not the Citaro's inner-wheel
figure either (that is around 47°, and the Citaro G's is published as 53°/46°
inner/outer). It is simpler than that: a low-floor city bus has a *restricted*
lock, because the front wheel arches must not intrude into the low-floor gangway,
and whoever wrote the number reasoned from "buses turn tightly" instead.

What it changes: level 15 (Bus Stop) asks the player to parallel-park 11 m of bus
into a 13.5 m gap. At the sourced radius the bus needs about 1.3 m more turning
room in every direction than the level was cut for, and the level would very
likely become unsolvable — this is the one correction that could not be applied
without re-cutting a level.

---

### coach — Tour Coach → **Setra S 515 HD (ComfortClass 500)**

| | current | sourced | Δ |
|---|---|---|---|
| length | 12.00 | 12.295 m (12.517 m incl. mirrors) | −295 mm |
| width | 2.55 | 2.550 m | 0 |
| height | 3.35 | 3.770 m | **−420 mm** |
| wheelbase | 6.10 | 6.090 m | +10 mm |
| **frontOverhang** | **2.00** | **2.890 m** | **−890 mm** |
| **rearOverhang** | **3.90** | **3.315 m** | **+585 mm** |
| track circle (kerb) | — | 17.451 m | — |
| turning circle (wall) | — | 21.616 m | — |
| ring width | — | 6.926 m | — |
| **maxSteer** | **52°** | **49.5°** (track circle) / **52.1°** (turning circle) | **+2.5° / −0.1°** |
| **R** | **4.77 m** | **4.75–5.21 m** | **−4.3%** |

Source: [Setra, *ComfortClass 500 HD models — technical data and equipment*](https://www.setra-bus.com/int/en/models/cc-hd-models/facts-cc-hd-models.pdf). For the 12.295 m column: length 12,295; length incl. mirrors 12,517; width 2,550; height 3,770; wheelbase front axle–drive axle 6,090; overhang at front 2,890; overhang at rear 3,315; turning circle min. 21,616; ring width turning circles min. 6,926; track circle minimal 17,451.

Two cross-checks confirm the tighter reading. The published *ring width* of
6.926 m implies an innermost swept radius of 10.808 − 6.926 = 3.882 m; a rear-axle
radius of 5.20 m puts the inner body edge at 5.20 − 1.275 = 3.93 m, while the
wall-derived 4.74 m would put it at 3.46 m. And running the same derivation on
the S 511 HD in the neighbouring column (10.465 m long, 5.005 m wheelbase, 14.628 m
track circle) gives 49.44° — the same front axle, the same answer.

**Verdict: sound in the lock, materially wrong in the overhangs.** 52° against a
sourced 49.5–52.1° is as good as this roster gets, and it disproves the "inner
wheel used as bicycle model" hypothesis for this vehicle outright.

But the overhangs are **front-to-back reversed**. A real rear-engined high-decker
has its *longer* overhang at the front, because the entrance door sits ahead of
the front axle: 2.89 m front, 3.32 m rear. The game gives it 2.00 front and 3.90
rear. The consequence is measurable and it is exactly what level 17 (Tail Swing)
is about: the game's coach swings **1.15 m** outside its own turning circle,
where a real S 515 HD swings **0.80 m**. The level's premise — "with 1.15 m of
tail" — is 44% more tail swing than the vehicle has.

The height is also 42 cm short: a high-decker is 3.77 m, not 3.35 m. That matters
only to DESIGN.md's clearance rules, and no shipped level uses a height gate.

---

### towcar — Car + Trailer → **Škoda Octavia III Combi (2013–2020) + Ifor Williams BV105G box van trailer**

| tow car | current | sourced | Δ |
|---|---|---|---|
| length | 4.60 | 4.685 m | −85 mm |
| width | 1.86 | 1.814 m | +46 mm |
| height | 1.62 | 1.480 m | +140 mm |
| wheelbase | 2.75 | 2.686 m | +64 mm |
| trackWidth | 1.60 | 1.549 m **[secondary]** | +51 mm |
| turning circle | — | 10.4 m **[secondary]** | — |
| **maxSteer** | **34°** | **36.1°** | **−2.1°** |
| **R** | **4.08 m** | **3.77 m** | **+8.1%** |

| trailer | current | sourced (BV105G) | Δ |
|---|---|---|---|
| coupling to tail | 4.05 m | 4.610 m | −560 mm |
| width | 1.90 | 2.088 m overall (1.470 m internal) | between |
| height | 1.75 | 2.291 m overall | −541 mm |
| axles | 1 | 2 (tandem) | — |
| hitch, behind car's rear axle | 1.10 | not sourced | unknown |
| hitch to trailer axle | 2.90 | not sourced | unknown |
| maxAngle | 78° | not sourced | unknown |

Sources: [auto-data.net, Škoda Octavia III Combi](https://www.auto-data.net/en/skoda-octavia-iii-combi-generation-4190) **[secondary]**; [Ifor Williams Trailers, braked box van specification](https://www.iwt.co.uk/products/box-van/box-van-braked/?tab=spec) and [BV105G dealer listing](https://gttowing.co.uk/products/ifor-williams-bv105g-trailer-with-ramp-doors/) **[secondary]**.

**Verdict: the car is sound; the trailer is a plausible fiction rather than a
sourced vehicle.** The tow car is an ordinary compact estate and its lock is
2.1° conservative, which is fine. The trailer is smaller than the common UK box
trailer it most resembles — 0.56 m shorter and 0.54 m lower — and it is single-axle
where the BV105G is tandem. That last difference matters less than it sounds: a
closely-spaced tandem behaves kinematically much like a single axle at the bogie
centre, so the model is a fair approximation of either.

**Remaining unknowns, named:** the hitch offset behind the car's rear axle
(1.10 m in-game), the drawbar length from hitch to trailer axle (2.90 m in-game),
and the 78° jackknife limit. None of the three is published by trailer or car
manufacturers in any form I could find. All three are load-bearing for levels 18
and 19.

---

### semi — Semi Truck → **Mercedes-Benz Actros 4x2 tractor, 3,900 mm wheelbase + standard EU 13.6 m semitrailer**

| tractor | current | sourced | Δ |
|---|---|---|---|
| length | 6.30 | 6.117 m | +183 mm |
| width | 2.50 | 2.500 m (cab) | 0 |
| height | 3.40 | 3.87–4.03 m for a MegaSpace sleeper; a day cab is lower **[secondary]** | day-cab territory |
| wheelbase | 3.90 | 3.900 m | 0 |
| frontOverhang | 1.40 | ~1.385 m **[secondary]** | +15 mm |
| rearOverhang | 1.00 | ~0.832 m (derived from overall length) | +168 mm |
| **fifth wheel, ahead of drive axle** | **0.45** | **0.840 m** recommended for full-length trailers (0.740 m for others) | **−390 mm** |
| turning circle | — | **15.8 m wall-to-wall** (14.9 m at 3,600 mm wb) | — |
| **maxSteer** | **40°** | **40.16°** (and 40.03° at the 3,600 mm wheelbase) | **−0.16°** |
| **R** | **4.65 m** | **4.62 m** | **+0.4%** |

| semitrailer | current | sourced | Δ |
|---|---|---|---|
| body length | 13.00 m | 13.6 m loading length; 13.9 m overall | −600 mm |
| width | 2.55 | 2.550 m | 0 |
| height | 4.00 | 4.000 m | 0 |
| kingpin to front of trailer | 1.20 m | ~1.6–1.7 m in practice; regulatory limit is a 2.040 m swing radius | −400 to −500 mm |
| kingpin to axle (bogie centre) | 7.60 m | ~7.7 m **[secondary]** | −100 mm |
| kingpin to rear | 11.80 m | 12.000 m regulatory maximum | −200 mm |
| combination length | 16.65 m | 16.5 m regulatory maximum | +150 mm |
| maxAngle | 72° | not sourced | unknown |

Sources: [Mercedes-Benz UK, *Actros 4x2 tractor* specification sheet](https://tools.mercedes-benz.co.uk/current/trucks/specification-sheets/actros/actros-4x2-tractor.pdf) — wheelbase 3,600/3,900, overall length 5,817/6,117, *Turning circle (wall to wall) m* 14.9/15.8, and *Recommended 5th wheel position: full length trailers 540/840, other trailers 640/740*. [Directive 96/53/EC](https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX%3A31996L0053) and the [European Commission weights-and-dimensions summary](https://transport.ec.europa.eu/transport-modes/road/weights-and-dimensions_en) for the 12.0 m kingpin-to-rear, 2.04 m front swing radius and 16.5 m combination limits; [Krone SD curtainsider listings](https://www.truckscout24.com/tsp/ts-167-38-706) **[secondary]** for 13,600 mm loading length, 2,550 mm width, 4,000 mm height.

Deriving from both published wheelbases on the same Mercedes sheet gives 40.03°
and 40.16°. The game's value is 40°.

**Verdict: sound, and remarkably so.** The tractor's wheelbase is exact, its lock
is within 0.16° of Mercedes' own turning circle, and its trailer is within 20 cm
of the EU regulatory envelope on every dimension that has one. Two things are off
and both are small: the fifth wheel sits 0.39 m further back than Mercedes
recommends for a full-length trailer, which slightly changes how the trailer
responds to the tractor's steering; and the trailer's kingpin is 0.4–0.5 m closer
to its nose than a real one, which makes the trailer's forward swing smaller than
it should be — the game's trailer front corner swings on a 1.75 m radius about the
kingpin where the regulation allows 2.04 m.

**Remaining unknown, named:** the 72° jackknife limit. The geometry does not force
it — with the trailer's front corner at 1.75 m from the kingpin and the cab rear
about 2.59 m ahead of it, the corner would not reach the cab at any angle — so 72°
appears to be a game decision rather than a physical one. That is a legitimate
thing for it to be, but it should not be recorded as a sourced figure.

---

## 4. What the roster gets wrong as a set

The game's design rests on the vehicles differing from each other in specific
ways, not on any absolute figure being right. So the question that matters more
than any single delta is whether the *ordering* survives sourcing. Mostly it does.

**Turning radius, game order against sourced order** (sourced radii evaluated at
each vehicle's own real wheelbase, so this is the real ordering, not a rescaled one):

| | game R | sourced R | |
|---|---|---|---|
| City Car | 2.94 | 3.33 | |
| Hatchback | 3.37 | 3.70 | |
| Car + trailer (car alone) | 4.08 | 3.68 | ↑ moves up one |
| Saloon | 4.14 | 4.36 | |
| SUV | 4.34 | 4.32 | |
| Box Lorry | 5.01 | 4.56 | ↑ |
| Van | 5.12 | 4.42 | ↑ moves up three |
| Semi (tractor alone) | 4.65 | 4.62 | |
| Step Van | 4.92 | *not sourced* | |
| Pickup Truck | 6.37 | 5.41 | |
| Tour Coach | 4.77 | 5.20 | ↓ |
| City Bus | 4.70 | 6.51 | ↓↓ moves down five |
| School Bus | 7.27 | 9.70 | |

**Four things the set gets right.**

1. **Bigger is genuinely not harder.** The central claim survives sourcing intact
   and gets stronger. The school bus really is the worst-turning vehicle in the
   roster while being only the ninth longest; the pickup really does want a
   substantially wider circle than a van two metres shorter (5.41 against 4.42,
   a 22% gap where the game has 6.37 against 5.12, a 24% gap — the ratio is
   almost exactly preserved).
2. **The saloon/SUV pair holds.** Both real cars turn on essentially the same
   radius (4.36 and 4.32), so whatever one can do and the other cannot really is
   about the 12 cm of width. The pair isolates what it claims to isolate.
3. **The school bus vs city bus contrast holds and widens.** The game has
   7.27 against 4.70; sourced it is 9.70 against 6.51. The engine ahead of the
   windscreen really does cost the Type C bus its manoeuvrability.
4. **The semi is right end to end**, which matters because levels 20 and 21 are
   the roster's hardest and are cut against it.

**Three things the set gets wrong.**

1. **The coach/bus pair is inverted.** The README says they are "7 cm apart in
   radius" and that what separates them is tail swing. Sourced, they are **1.31 m
   apart in radius and the coach is the tighter one** — 5.20 against 6.51. And
   the tail swing that is supposed to be the difference goes the other way too:
   the real coach swings 0.80 m outside its circle against the real bus's 0.72 m,
   a gap of 8 cm, where the game has 1.15 against 0.67, a gap of 48 cm. The pair
   currently isolates a variable that, in the real vehicles, is nearly equal —
   and ignores the one (radius) that really separates them.
2. **The lorry/step van pair is built on a property real walk-in vans do not
   have.** Both real vehicles carry about 2.25 m behind the rear axle. The pair's
   premise — same box, different axle position — is invented. There is a real
   contrast between them, at the front (1.09 m against 1.38 m), and the game has
   even that one reversed.
3. **The vehicles cluster more tightly in reality than in the game.** Excluding
   the two buses, the sourced radii run from 3.33 m to 5.41 m — a range of 2.1 m
   across eleven vehicles. The game's run from 2.94 to 6.37, a range of 3.4 m.
   The roster is *more* spread out than reality, which is a defensible design
   choice for a game about vehicles feeling different, but it is a choice and it
   should be recorded as one rather than mistaken for realism.

**And one thing worth saying plainly about direction.** The errors are not random.
The three cars turn *tighter* than their exemplars (city car by 12%, hatchback by
7.5%, saloon by 5%); the three working vehicles below bus size turn *wider* (van
by 18%, pickup by 18%, lorry by 10%). That reads like a single mental model —
"small cars are nippy, work vehicles are lumbering" — applied on top of otherwise
accurate dimensions. It is a bias, not a set of independent slips, which is
useful to know if the numbers are ever revised: correcting them one at a time
would change the shape of the roster, not just its scale.

---

## 5. Every remaining unknown

Named, not filled in.

| vehicle | what could not be sourced |
|---|---|
| **stepvan** | The turning circle and the wheel cut. Neither Freightliner Custom Chassis nor Morgan Olson publishes either for the MT45/MT55, and no secondary source has them. The game's 44° is unverified. |
| **towcar** | The hitch offset behind the tow car's rear axle, the drawbar length from hitch to trailer axle, and the 78° jackknife limit. Trailer makers publish overall length and body dimensions but not axle position. |
| **semi** | The 72° jackknife limit. The geometry does not force it and no manufacturer publishes a maximum articulation angle. |
| **citycar** | The front/rear overhang split. Only the combined 1.246 m follows from published length and wheelbase. |
| **hatch, suv** | Overhang splits, same reason. Also the hatchback's front and rear track (secondary only). |
| **bus, coach** | Front track width. Neither Mercedes nor Setra publishes it for these buses; 2.10 m was assumed. The derivation is insensitive: ±0.10 m of track moves the answer by 0.3°. |
| **lorry** | The width of the box body actually fitted (the sheet gives the cab, 2.295 m). The game's 2.35 m is inside the normal 2.40–2.50 m range for a 7.5 t box. |
| **schoolbus** | A single authoritative lock. The bracket 34°–46° is the finding; the wheel stop is field-adjustable and two buses of the same model measured 5.6° apart. |
| **all** | Nothing was sourced for `steerRate`, `accel`, `brakeAccel`, `rollDrag`, `maxSpeed`, `maxReverse` or `crawlSpeed`, and nothing should be: DESIGN.md constraint 6 makes these deliberate game values ("first-gear slow on purpose"), not claims about vehicles. They are outside this audit's scope. |

### On the exemplars themselves

Five of the thirteen are near-exact matches to a single real vehicle and should
simply be named in the source: **Fiat 500** (city car), **VW Passat B8**
(saloon), **Audi Q5** (SUV), **Mercedes Sprinter L1 H1** (van), **Ford F-150
SuperCrew** (pickup). Four more are close enough to name with a caveat:
**Mercedes Atego 816** (lorry), **Mercedes Actros 4x2 + 13.6 m EU semitrailer**
(semi), **Type C conventional school bus** (school bus), **FCCC MT45 + Morgan
Olson Route Star** (step van).

Two are blends and should be labelled as such: the **hatchback** (a Fiesta Mk7's
length and wheelbase on a Polo Mk6's width and height) and, mildly, the
**pickup** (a 5.5-ft-box wheelbase with a 6.5-ft-box length).

Two are close to a real vehicle in size but not in shape: the **city bus** is
1.1 m shorter than a Citaro and turns far tighter than any low-floor bus; the
**tour coach** is a Setra S 515 HD in length, width, wheelbase and lock, but with
its overhangs swapped end for end and 42 cm taken off its roof.

The **car + trailer** is the only entry with no identifiable exemplar for its
trailer at all.
