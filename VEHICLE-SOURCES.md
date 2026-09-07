# Where the thirteen vehicles' numbers should come from

An audit of the specs in `src/vehicle.js` against published figures for the
**classes** they represent.

**No source file was changed by this document, and none should be changed on
account of it without a deliberate decision.** Twenty-one levels were cut
against the current numbers; a spec edit silently re-cuts all of them. What
follows is evidence, not a patch.

## Read this before treating any "wrong" below as a defect

The audit was commissioned to find out whether the specs were sourced. They were
not — there were no web lookups anywhere in the project's history, so every
number was written from memory. That question is now answered, and the answer is
useful. **The follow-up question — whether to correct them — has been decided,
and the answer is no.**

The user's ruling, after seeing everything below: *"what I want is to have
varied options, a wide range of different body shapes and wheel placements and
sizes, to explore all kinds of manoeuvring challenges. Realistic is not
important."*

So the roster's purpose is **coverage of the manoeuvring space**, not fidelity
to any real vehicle. That inverts several of the verdicts in §3 and §4 without
changing any of their measurements:

- The roster spans 2.94–6.37 m of turning radius where the real classes span
  3.33–5.41 m. §4 records this as the set being "more spread out than reality".
  Under the actual goal that is the point, not a flaw.
- The step van's 1.20 m rear overhang and the SUV's 1.95 m width are called
  fictions below, correctly. **Both are deliberate and both stay** — each exists
  to isolate one variable against a near-twin, which is a design instrument
  rather than a claim about a real vehicle.
- Every lock angle §3 calls "materially wrong" is wrong only against a class
  average. None of them is wrong as a choice about how a vehicle should feel.

**What this document is still good for**, and it is a lot: it is the only place
that says what real geometry looks like, so it is the reference for judging
whether a *new* vehicle would open a manoeuvring problem the roster does not
already have. Read §3 as a map of the space rather than a list of corrections.
The measurements are sound; only the verdicts were written against the wrong
objective.

---

## 0. Method, and a bias to declare

### 0.1 Class first, vehicle second

The question this document answers is *"what is typical of a city bus / a
supermini / a 7.5 t box lorry?"* — not *"which real vehicle do these numbers
match?"*

That distinction is the whole method. Searching for a vehicle that matches a
number already in the code will always succeed, because every class is wide
enough to contain almost any plausible number somewhere in it; the match then
gets written down as a citation and the guess has been laundered. So each class
below was sampled on the class's own terms — what is common on the road, what
the segment is defined by — and only then compared with the code.

Consequently every finding is a **range plus a central value**, and every
vehicle in every sample is named. A range is what distinguishes *"the spec is
wrong"* from *"the spec is a different but equally normal member of the class"*,
and several of the verdicts below turn on exactly that.

### 0.2 The bias I could not remove

I already knew all thirteen current figures before sampling: they are in the
repository, and an earlier pass of this same audit picked its exemplars by
proximity to them (Fiat 500, VW Passat B8, Audi Q5, Mercedes Sprinter L1, Ford
F-150 — five of thirteen chosen *because* they agreed). That earlier framing is
discarded, and the sourced data from it appears below only as ordinary named
members of wider samples.

I cannot unsee the current numbers, so this is declared rather than claimed to
be absent. Two guards were used instead. First, the sample for each class was
fixed from segment membership before any comparison was computed — the samples
below are simply the volume sellers of each European segment, and the heavy
classes are whoever publishes usable data. Second, wherever a class sample
happens to bracket the current figure closely, the size of the class **spread**
is reported next to it, so a reader can see whether "it fits" means "the class
is narrow and the number is right" or "the class is wide and almost anything
fits". Where the spread does the work, it is said so explicitly.

### 0.3 Source quality

| Tier | What is here |
|---|---|
| **Primary** | Manufacturer spec sheets and brochures (Mercedes-Benz Sprinter / Atego / Actros / Citaro, Setra, MAN, Solaris, Volvo Trucks Model Range, Blue Bird, Morgan Olson, Ford F-150), a US state procurement specification, and a government-funded field-measurement study (MBTC). |
| **Secondary — marked as such throughout** | Aggregators (cars-data.com, carsguide.com.au, transbus.org) and the motoring press. |

**Every light-vehicle turning circle in this document is secondary.** Car makers
publish turning circles in brochures that are not archived at stable URLs, and
they rarely say whether the figure is kerb-to-kerb or wall-to-wall. The
aggregators normalise them but do not state the convention either. This is the
single biggest weakness in the audit and is repeated in §5.

Every document is listed with its URL in §6.

Where sources disagree, the conflict is reported, not resolved.

---

## 1. The short answer

Nine of the thirteen lock angles are wrong, and they are wrong in a **pattern**
rather than at random: the three cars and the SUV turn slightly tighter than
their classes do, the working vehicles up to lorry size turn markedly *wider*,
and the two big buses turn markedly *tighter*. The dimensions are, on the whole,
much better than the lock angles — most are squarely class-typical. The largest
departures are not lock at all but **where the axles sit under the body** on the
step van, the school bus and the coach.

| id | current | class range | class typical | verdict |
|---|---|---|---|---|
| `citycar` | 38° | 34.3–35.8° | 34.9° | off but harmless (~11% tight) |
| `hatch` | 36° | 31.9–34.5° | 33.3° | off but harmless (~10% tight) |
| `saloon` | 34° | 32.6–35.5° | 34.3° | **sound** |
| `suv` | 33° | 31.1–35.4° | 33.7° | **sound** (lock); dimensions belong to a bigger class |
| `van` | 32° | 35.7–39.9° | 37.9° | **materially wrong** (25% wide) |
| `pickup` | 30° | 32.8–34.5° | 34.0° | **materially wrong** (17% wide) |
| `lorry` | 40° | 42.6–43.8° | 43.2° | off but harmless (12% wide) |
| `stepvan` | 44° | *no published circle found* | — | **unknown**; its overhangs are wrong |
| `schoolbus` | 42° | 36.4–36.7° | 36.5° | **materially wrong** (18% tight) |
| `bus` | 50° | 42.2–45.6° | 44.1° | **materially wrong** (19% tight) |
| `coach` | 52° | 49.4–54.5° | 51.4° | **sound** |
| `towcar` | 34° | 32.6–36.1° | 34.4° | **sound** |
| `semi` | 40° | 39.0–40.2° | 39.4° | **sound** |

Two things worth saying at the top:

- **The city bus and the coach are not the same case.** The suspicion that both
  large buses had an inner-wheel figure fed into a bicycle model is half right.
  The coach at 52° is genuinely what a 12 m high-deck coach does; three
  manufacturers' published circles put the class at 49.4–54.5°. The city bus at
  50° is not: a 12 m low-floor bus is restricted to 42–46° because its front
  wheel arches must not intrude into the low-floor gangway, and that constraint
  is exactly why a coach of the same length turns *tighter* than a bus. Mercedes
  sells the same 12.13 m bus in both floor heights, and the low-floor one needs
  1.76 m more turning circle than the interurban one (§3.10) — the code's 50° is
  the interurban figure.

- **The roster's manoeuvrability ordering survives being sourced.** Ranked by
  outer swept radius — the quantity that decides whether a vehicle clears a
  corner — correcting every angle to its class typical produces two adjacent
  swaps and no other change (§4.1). The ladder the levels are built on is
  sound; the rungs are in the wrong places.

---

## 2. Turning a published circle into `maxSteer`

### 2.1 What `maxSteer` means in this code

`src/vehicle.js:479`:

```js
const yawRate = (v * Math.tan(steer)) / spec.wheelbase;
```

That is a kinematic bicycle model referenced at the centre of the rear axle:
one virtual wheel at the middle of the front axle. At full lock the rear axle
centre traces

> **R = wheelbase / tan(maxSteer)**

`maxSteer` is therefore the **virtual centre-wheel angle**, and it is smaller
than any angle a manufacturer prints.

### 2.2 Why you must never source "maximum steering angle"

Manufacturers publish the **inner** wheel's lock, because that is the wheel that
hits the stop. Ackermann geometry gives the outer wheel a smaller angle, and the
bicycle-model angle sits between them, nearer the outer. Three of these appeared
during this audit and every one of them would have made the vehicle turn better
than it can:

| Published | Source | Real bicycle-model angle |
|---|---|---|
| `WHEEL CUT 50°` | Blue Bird Vision brochure (primary) | 36.5° |
| "steering angle of 52 degrees" | Iveco Eurocargo press material (secondary) | ~43° for the class |
| "maximum wheel deflection angle of 53°" | DAF LF brochure copy (primary) | ~43° for the class |

The MBTC study measured this directly: two identical Type C buses were found
with inner-wheel locks of 31.3° and 36.9°, against a manufacturer-listed maximum
of 50.0°. Never source the angle. Source the circle.

### 2.3 The two relations

A published turning circle comes in two flavours and they are not
interchangeable — on the Setra S 515 HD they differ by 4.2 m of diameter.

- **Kerb-to-kerb** (also *track circle*, German *Spurkreis*, US *curb-to-curb*):
  traced by the outer front **tyre**. With `t` = front track width:

  > R = √(Rk² − wheelbase²) − t/2

- **Wall-to-wall** (also *turning circle*, *Wendekreis*): traced by the
  outermost point of the **body**, normally the outer front bumper corner. With
  `fo` = front overhang and `w` = body width:

  > R = √(Rw² − (wheelbase + fo)²) − w/2

Then in both cases `maxSteer = atan(wheelbase / R)`.

**The kerb form is preferred wherever both are published**, because the wall
form assumes a square body corner and real corners are chamfered, which makes
the wall form read a degree or two tight. Where only a wall figure exists it is
used and labelled.

### 2.4 One example worked in full — the Mercedes-Benz Citaro

Mercedes-Benz Buses publishes both circles for the 12 m Citaro solo:

- Turning circle (wall-to-wall) **22,970 mm**
- Track circle, minimal (kerb-to-kerb) **19,160 mm**
- Wheelbase **5,900 mm**, front overhang **2,730 mm**, width **2,550 mm**,
  front track **≈2,100 mm**

**Kerb form.** Rk = 19.160 / 2 = 9.580 m.

```
√(9.580² − 5.900²)          = √(91.78 − 34.81) = √56.97 = 7.548 m
7.548 − 2.100/2             = 7.548 − 1.050    = 6.498 m   ← R
atan(5.900 / 6.498)         = atan(0.9080)     = 42.2°     ← maxSteer
```

**Wall form, as a check.** Rw = 22.970 / 2 = 11.485 m, and
wheelbase + front overhang = 5.900 + 2.730 = 8.630 m.

```
√(11.485² − 8.630²)         = √(131.90 − 74.48) = √57.42 = 7.578 m
7.578 − 2.550/2             = 7.578 − 1.275     = 6.303 m ← R
atan(5.900 / 6.303)         = 43.1°                        ← maxSteer
```

The two forms agree to 0.9°, which is the expected size of the chamfered-corner
effect and is the best internal check available. **A 12 m city bus steers at
about 42–43° in this model, not 50°.**

### 2.5 How the derivation was validated

Consistency across a single manufacturer's wheelbase ladder is the strongest
available test: a spec sheet that lists five wheelbases and five circles should
yield five near-identical angles if the relation is right.

| Spec sheet | Wheelbases | Derived angles | Spread |
|---|---|---|---|
| Mercedes-Benz Atego (wall) | 3.02 / 3.32 / 3.62 / 4.22 / 4.82 m | 43.8 / 43.6 / 43.4 / 42.7 / 42.6° | 1.2° |
| Volvo FH 4×2 tractor (kerb) | 3.50 / 3.60 / 3.70 / 3.80 m | 39.3 / 39.0 / 39.1 / 39.1° | 0.3° |
| Volvo FH 6×4 tractor (kerb, theoretical wheelbase) | 3.00–3.90 m | 39.25–39.35° | 0.1° |
| Setra ComfortClass 500 (kerb) | S 511 HD 5.005 m, S 515 HD 6.090 m | 49.4 / 49.5° | 0.1° |
| MBTC Type C school bus — three independent radii of the same vehicle | — | 36.4 / 36.5 / 36.7° | 0.3° |

The relation reproduces published circles to a few tenths of a degree.

---

## 3. Class by class

Each section gives the sample, the class range, where the code sits, and — as
the correction to this brief required — what the class's **shape and layout**
are, judged against the `body` silhouette in `src/vehicle.js`.

---

### 3.1 `citycar` — A-segment city car

**Sample** (all European A-segment volume sellers): Fiat 500 (2007–), VW up!,
Hyundai i10 (2020–), Kia Picanto, Toyota Aygo X, Renault Twingo III.

| | length | width | height | wheelbase | kerb circle |
|---|---|---|---|---|---|
| Fiat 500 | 3.546 | 1.627 | 1.488 | 2.300 | 9.3 m |
| VW up! | 3.540–3.600 | 1.641 | 1.489–1.504 | 2.407–2.420 | 9.8 m |
| Hyundai i10 | 3.670 | 1.680 | 1.480 | 2.425 | 9.5–9.7 m |
| Kia Picanto | 3.595 | 1.595 | 1.485 | 2.400 | 9.4 m |
| Toyota Aygo X | 3.700 | 1.740 | 1.525 | 2.430 | not sourced |
| Renault Twingo III | 3.615 | 1.646 | 1.541 | 2.492 | 8.6 m |

*(dimensions in metres; circles secondary — cars-data.com, carsguide.com.au,
What Car?, Auto Express. A conflict: the up!'s wheelbase is given as both 2,407
and 2,420 mm by different aggregators; the difference moves the derived angle by
0.1°.)*

**Class range** 3.54–3.70 m long, 1.60–1.74 m wide, 1.48–1.54 m tall, wheelbase
2.30–2.49 m. Derived steer angle **34.3–35.8°, typical 34.9°**.

**Where the code sits.** `3.57 × 1.63 × 1.49`, wheelbase 2.30 — at the small end
of the class on every axis but comfortably inside it. Notably, the **2.30 m
wheelbase ties the shortest in the class and the length is among the shortest**,
and the two go together correctly: this is a coherent small A-segment car, not
an invented one. That part of the roster is realistic.

The lock is not. 38° gives R = 2.94 m where the class typical gives 3.30 m —
about 11% optimistic.

**But the range matters here.** The Renault Twingo III turns in 8.6 m on a
2.49 m wheelbase, which derives to **41.8°** — tighter than the game's 38°. The
Twingo is rear-engined, and taking the engine out from between the front wheels
is exactly what buys the extra lock. So the game's citycar is not doing anything
physically impossible; it is doing what a rear-engined city car does while being
drawn as a front-engined one.

**Shape and layout.** The silhouette runs bonnet to 0.700 of the length from the
tail (a 1.07 m nose), windscreen top at 0.530, roof to 0.230, tail face at 72%
of body height. That is a front-engine transverse two-box hatch with a tall
near-vertical tailgate — correct for the class, and consistent with the
front-engined layout the lock angle contradicts.

**Verdict: off but harmless.** 11% is inside the noise of "which city car".

---

### 3.2 `hatch` — B-segment supermini

**Sample**: VW Polo Mk6, Renault Clio V, Peugeot 208 II, Vauxhall/Opel Corsa F,
Toyota Yaris XP210. (Ford Fiesta and Škoda Fabia belong in the class; their
current-generation circles were not separately sourced.)

| | length | width | height | wheelbase | kerb circle |
|---|---|---|---|---|---|
| VW Polo Mk6 | 4.074 | 1.751 | 1.461 | 2.552 | 10.6–10.7 m |
| Renault Clio V | 4.116 | 1.768 | 1.451 | 2.583 | 10.4 m |
| Peugeot 208 II | 4.055 | 1.765 | 1.430 | 2.540 | 10.4 m |
| Vauxhall Corsa F | 4.060 | 1.765 | 1.433 | 2.538 | 10.7 m |
| Toyota Yaris XP210 | 3.940 | 1.745 | 1.500 | 2.560 | 11.0 m |

*(secondary sources as above)*

**Class range** 3.94–4.12 m long, 1.745–1.77 m wide, wheelbase 2.54–2.58 m.
Derived steer angle **31.9–34.5°, typical 33.3°**.

**Where the code sits.** `3.95 × 1.76 × 1.44` is class-typical — the Yaris is
3.94 m and the width and height land in the middle of the sample. The
**wheelbase is not**: 2.45 m is 9–13 cm shorter than every current supermini.
2.45 m on 3.95 m of length is a *previous*-generation supermini (a Mk7 Fiesta or
a Mk5 Polo); the class has grown its wheelbase without growing much longer.

Lock 36° gives R = 3.37 m against a class typical of 3.73 m — 10% optimistic,
the same direction and size as the citycar.

**Shape and layout.** Bonnet to 0.720, windscreen top 0.560, roof to 0.235, tail
at 70% of height — the same grammar as the citycar with a slightly longer nose
and a slightly more raked screen. Correct for the class.

**Verdict: off but harmless** on lock; the wheelbase is a generation behind but
that is a legitimate member of the class as it existed ten years ago.

---

### 3.3 `saloon` — D-segment saloon

**Sample**: VW Passat B8, Škoda Superb III, Audi A4 B9, BMW 3 Series G20,
Mercedes C-Class W205.

| | length | width | height | wheelbase | kerb circle | derived |
|---|---|---|---|---|---|---|
| VW Passat B8 | 4.767 | 1.832 | 1.456 | 2.791 | 11.7 m | 32.6° |
| Škoda Superb III | 4.861 | 1.864 | 1.469 | 2.841 | 11.1 m | 35.5° |
| Audi A4 B9 | 4.726 | 1.842 | 1.427 | 2.820 | 11.6 m | 33.4° |
| BMW 3 Series G20 | 4.709 | 1.827 | 1.435 | 2.851 | 11.2 m | 35.3° |
| Mercedes C-Class W205 | 4.751 | 1.810 | 1.437 | 2.840 | 11.22 m | 35.0° |

*(circles secondary; the A4's is quoted anywhere from 11.1 to 11.9 m depending
on wheel and tyre package — a real conflict, and 11.6 m is the middle of it,
worth ±0.7° in the derivation)*

**Class range** 4.71–4.86 m long, 1.81–1.86 m wide, 1.43–1.47 m tall, wheelbase
2.79–2.85 m.
Derived steer angle **32.6–35.5°, typical 34.3°**.

**Where the code sits.** `4.75 × 1.83 × 1.46`, wheelbase 2.79, rear overhang
1.06 — every one of those is inside the class range, and the wheelbase and rear
overhang are within 1 cm of the Passat's. Lock 34° gives R = 4.14 m against a
class typical of 4.08 m: **1% out**.

This is the best-matched vehicle in the roster, and it is matched on the class,
not on one car.

**Shape and layout.** Three-box: bonnet to 0.735, screen top 0.575, roof back to
0.290, then a boot lid stepping down through 0.185 and 0.030 to a tail face at
60% of height. Correct three-box proportions for the segment — a saloon's roof
ends about 60% of the way back and the boot is roughly a fifth of the length,
which is what these points describe.

**Verdict: sound.**

---

### 3.4 `suv` — mid-size SUV

**Sample**: Nissan Qashqai J12, VW Tiguan Mk2, Toyota RAV4 XA50, Kia Sportage
NQ5, Hyundai Tucson NX4. (Audi Q5 and BMW X3 are the premium members and are
quoted below for the width point only.)

| | length | width | height | wheelbase | kerb circle | derived |
|---|---|---|---|---|---|---|
| Nissan Qashqai J12 | 4.425 | 1.835 | 1.625 | 2.665 | 10.6–11.1 m | 34.1° |
| VW Tiguan Mk2 | 4.509 | 1.839 | 1.659 | 2.680 | 11.5–12.0 m | 31.1° |
| Toyota RAV4 XA50 | 4.600 | 1.855 | 1.685 | 2.690 | 10.6–11.4 m | 33.9° |
| Kia Sportage NQ5 | 4.660 | 1.865 | 1.665 | 2.680 | 10.6 m | 35.4° |
| Hyundai Tucson NX4 | ~4.500 | 1.865 | 1.650 | 2.680 | — | — |

*(secondary; note the Tiguan's own spread of 11.5–12.0 m across variants is
almost as wide as the whole class's)*

**Class range** 4.43–4.66 m long, 1.835–1.865 m wide, 1.63–1.69 m tall,
wheelbase 2.665–2.69 m. Derived steer angle **31.1–35.4°, typical 33.7°**.

**Where the code sits.** Lock 33° → R = 4.34 m against a class typical of
4.23 m: 3% out. **Sound.**

The dimensions are a different story. `4.72 × 1.95 × 1.72` on a 2.82 m wheelbase
is **outside the mainstream mid-size class on all four**: 6 cm longer than the
longest sampled, 3 cm taller, 13 cm more wheelbase, and 8.5–11.5 cm wider. The
width is the striking one — even the premium members of the class (Audi Q5
1.893 m, BMW X3 1.891 m) are 6 cm narrower. 1.95 m belongs to the *large* SUV
band (VW Touareg 1.984 m, BMW X5 2.004 m).

This is very likely deliberate: the comment above the spec says the SUV "exists
to isolate width", being "the same length as the saloon to within 3 cm, and
12 cm wider". That is a sound level-design reason to hold the length and inflate
the width. It is worth recording anyway that the resulting vehicle is not a
Qashqai-sized SUV but a Touareg-width one on mid-size length.

**Shape and layout.** Bonnet to 0.740, screen top 0.600, roof to 0.225, tail at
78% of height, sill 0.26 (against 0.235–0.24 on the cars) and a 1.20 arch
factor. Raised ride height, near-vertical tailgate, roof running further back
than the saloon's — correct SUV proportions.

**Verdict: sound on lock; dimensionally a member of the class above, by
apparent intent.**

---

### 3.5 `van` — large panel van, short body

**Sample**: Mercedes-Benz Sprinter L1, Fiat Ducato / Peugeot Boxer / Citroën
Relay L1, Ford Transit L2, VW Crafter, Renault Master.

| | length | body width | height | wheelbase | circle | derived |
|---|---|---|---|---|---|---|
| Sprinter L1 (FWD) | 5.267 | 2.020 | 2.355 (H1) | 3.259 | track 12.2–12.6 m *(primary)* | 37.2–35.7° |
| Sprinter L1 | — | — | — | — | turning 13.0–13.4 m *(primary)* | — |
| Peugeot Boxer / Ducato L1 | 4.963 | 2.050 | 2.254 | 3.000 | 10.8 m *(secondary, class min)* | 39.9° |
| Ford Transit L2 | ~5.53 | 2.059 | ~2.53 | 3.300 | 11.9 m *(secondary)* | 39.0° |
| VW Crafter medium | — | — | — | — | 13.6 m *(secondary)* | — |

The Mercedes-Benz UK Sprinter spec sheet is the useful one here because it
publishes **both** circles side by side ("Turning circle Ø" and "Track circle
Ø") for every body length, which is what makes §2.3 checkable in both
directions.

**Class range** for the short-body 3.5 t van: 4.96–5.53 m long, 2.02–2.06 m body
width, 2.25–2.53 m tall, wheelbase 3.00–3.30 m. Derived steer angle
**35.7–39.9°, typical 37.9°**.

**Where the code sits.** `5.30 × 2.02 × 2.30`, wheelbase 3.20, rear overhang
0.95 — every figure is inside the class range and most are near its middle. The
dimensions are right.

The lock is the roster's second-largest error. 32° gives R = 5.12 m where the
class needs **4.11 m** — the game's van needs **25% more radius than any large
panel van on sale**. Even the widest-turning member sampled (Sprinter L1 at its
12.6 m track circle, 35.7°) needs only 4.45 m.

**What "materially wrong" changes in a parking space.** Swinging the nose into a
bay from a 6 m aisle, the outer swept radius is 7.52 m in the game against 6.72 m
for the real thing — 0.80 m more aisle needed to make the same turn. That is
more than half a bay width. Any level tuned so the van "only just" makes a turn
is tuned around a vehicle that turns like nothing on the road.

**Shape and layout.** A short 0.53 m bonnet, then a steeply raked screen to
0.822 and a flat roof running the whole length to the tail. That is the
semi-bonneted large-van layout exactly: engine longitudinally ahead of the
driver but under a stub nose, driver over or just behind the front axle, cargo
box the full height behind. Front overhang 1.15 m against the Sprinter's 1.01 m
and the Ducato's ~0.95 m — 15 cm long, minor.

**Verdict: materially wrong on lock; dimensions and layout sound.**

---

### 3.6 `pickup` — pickup truck

**This class needs deciding before it can be judged**, and that is itself a
finding. "Pickup" names two different vehicles:

| | length | width | height | wheelbase | kerb circle | derived |
|---|---|---|---|---|---|---|
| **US full-size crew cab** | | | | | | |
| Ford F-150 SuperCrew 5.5 ft | 5.885 | 2.029 | 1.960 | 3.683 | 14.57 m *(primary)* | 34.2° |
| Chevrolet Silverado 1500 Crew | ~5.885 | — | — | 3.744 | — | — |
| Ram 1500 Crew | ~5.916 | — | — | 3.672 | — | — |
| Toyota Tundra CrewMax | ~5.933 | — | — | 3.700 | — | — |
| **Global mid-size double cab** | | | | | | |
| Ford Ranger T6.2 | 5.360 | 1.918 | 1.884 | 3.270 | 12.9 m *(secondary)* | 34.5° |
| Toyota Hilux AN120 | 5.325 | 1.855 | 1.815 | 3.085 | 12.71 m *(secondary)* | 32.8° |
| VW Amarok (2022–) | 5.350 | 1.910 | 1.886 | 3.270 | 12.95 m *(secondary)* | 34.4° |
| Isuzu D-Max | 5.265–5.325 | 1.870–1.880 | 1.785–1.810 | 3.125 | — | — |

`6.10 × 2.03 × 1.95` on a 3.68 m wheelbase is unambiguously the **US full-size
crew cab**: a mid-size double cab is 0.75 m shorter and 0.4–0.6 m shorter in the
wheelbase. In Europe, a "pickup" is the second table. Since the rest of the
roster is European (the semi is a cab-over, the coach is a Setra/Tourismo-shaped
high-decker, the van is a Sprinter-sized panel van), the pickup is the one
outlier in market as well as in size. Whether that is wanted is a design
question, not an audit one — but it should be a choice rather than an accident.

**The lock is wrong either way, and by almost the same amount**, which is the
useful part: full-size derives to 34.2°, mid-size to 32.8–34.5°. The class
typical is **34.0°** in both sub-classes. The game's 30° gives R = 6.37 m against
5.42 m for the F-150 — **17% wide**, and the widest-turning pickup in either
sample still needs less radius than the game's.

The comment above the spec calls this "the wide-circle vehicle: 3.68 m of
wheelbase and only 30° of lock, so it needs 6.4 m of radius where the hatchback
needs 3.4 m. It is barely wider than a van and it will not go where one goes."
The *intent* is right — a pickup is the worst-turning light vehicle here — but
the mechanism is overstated. Real pickups do not have unusually little lock;
they have 34°, the same as a saloon. What makes them turn wide is the long
wheelbase alone.

**Length/wheelbase mismatch.** At 3.683 m of wheelbase the F-150 is 5.885 m
long (a 5.5 ft box). 6.10 m of length goes with a 6.5 ft box and 3.99 m of
wheelbase. The game's 6.10 m on 3.68 m is 0.2 m longer than the real
combination.

**Shape and layout.** Bonnet to 0.680 (a 1.95 m nose — right for a full-size),
screen top 0.560, cab roof to 0.420, then a vertical drop to a bed rail at 60%
of height running to the tail. The **cab roof is 0.87 m long and the bed is
2.55 m**. A real crew cab has roughly 1.5 m of roof and a 5.5 ft (1.68 m) or
6.5 ft (1.98 m) box; 2.55 m is longer than an 8 ft bed. So the silhouette splits
the vehicle as *small cab + very long bed* where the class splits it as *large
cab + short bed*. That is the one clearly wrong proportion in the thirteen
silhouettes.

**Verdict: materially wrong on lock; the class itself is undecided; the
cab/bed split in the silhouette is backwards.**

---

### 3.7 `lorry` — 7.5 t box lorry

**Sample**: Mercedes-Benz Atego, DAF LF, Iveco Eurocargo, MAN TGL, Isuzu
N-series, Renault D.

Only the Atego publishes usable circles. DAF and Iveco publish **inner-wheel
angles** (53° and 52°), which §2.2 rules out. That is the sample's limitation
and it is real: the class range below rests on one manufacturer's spec sheet,
albeit five wheelbases of it.

| Atego wheelbase | wall circle | derived |
|---|---|---|
| 3.020 m | 12.3 m | 43.8° |
| 3.320 m | 13.2 m | 43.6° |
| 3.620 m | 14.1 m | 43.4° |
| 4.220 m | 16.0 m | 42.7° |
| 4.820 m | 17.8 m | 42.6° |

**Class range** — distribution rigids at 7.5 t are 7.5–8.5 m long over
wheelbases of 3.0–4.8 m, cab width 2.28–2.31 m, box width 2.35–2.55 m, height
3.2–3.5 m. Derived steer angle **42.6–43.8°, typical 43.2°**.

**Where the code sits.** `7.60 × 2.35 × 3.20`, wheelbase 4.20, rear overhang
2.35. Length is at the short end of the class; the Atego on the same 4.22 m
wheelbase is 8.07 m. Width, height and — importantly — the **rear-overhang
fraction** are right: 2.35 m behind a 4.20 m wheelbase is 56%, against the
Atego's 58%. The lorry is the one heavy vehicle whose axle placement is
class-correct. Front overhang 1.05 m against 1.38 m is 33 cm short.

Lock 40° gives R = 5.01 m against 4.47 m: 12% wide. Enough to notice, not enough
to break a level — the outer swept radius is 8.11 m against 7.97 m, a 14 cm
difference, because at this size the body length dominates the radius.

**Shape and layout.** Cab-over, 1.52 m of cab from the nose with its roof at
2.74 m, then a box stepping up to the full 3.20 m and running to the tail. That
is the European distribution truck exactly: engine under the cab, driver ahead
of the front axle, box taller than the cab. The `dash: true` flag and the
`eye`/`look` points put the driver at 0.880 of the length — over the front
wheels. Correct.

**Verdict: off but harmless.**

---

### 3.8 `stepvan` — walk-in step van

**Sample**: Morgan Olson Route Star on Freightliner Custom Chassis MT45/MT55,
Utilimaster Aeromaster, Workhorse P-series, plus a US state procurement
specification as an independent check on the class's body/wheelbase pairing.

Morgan Olson's chassis-body specification (primary) tabulates every
configuration:

| Wheelbase | 138" | 158" | 178" | 190" | 208" | 218" |
|---|---|---|---|---|---|---|
| Body length | 12' | 14' | 16' | 18'–20' | 20' | 22'–24' |
| Overall length | 22'9" | 23'9" | 25'9" | 27'9"–29'9" | 29'9" | 30'9"–32'9" |
| Rear overhang | 92" | 84" | 88" | 112"–124" | 96"–106" | 98"–132" |

Overall width 89" or 95" (2.26 / 2.41 m); overall height 116–124" (2.95–3.15 m).
Utilimaster's class figures agree on the pairing (14' body → 178" wheelbase,
16'–18' → 190"), and the Washington State DES walk-in-van procurement
specification independently requires *"158 In. wheelbase with adequate frame
overhang for 14 Ft. van body"*.

**Where the code sits.** Width 2.40 m and height 3.00 m are class-typical. The
axles are not.

`7.30 m` overall (23'11") is a **14 ft body**. The class pairs a 14 ft body with
a **158" (4.01 m) wheelbase and 84" (2.13 m) of rear overhang**. The code has a
**4.75 m (187") wheelbase and 1.20 m (47") of rear overhang** — that is a 16–18 ft
body's wheelbase carrying a 14 ft body's length, with the rear axle pushed a
metre back to absorb the difference.

**No configuration in the class has a rear overhang under 75" (1.91 m).** The
code's 47" is not at the edge of the class; it is outside it by 0.7 m.

This is deliberate: the comment above the spec says "Wheels near the ends of the
same box: 1.20 m of rear overhang against the lorry's 2.35 m. It sweeps a corner
the lorry cannot, on the same circle." That is a good game mechanic and a clear
contrast with `lorry`. It is not what a walk-in van is. Real walk-in vans are
built the way they are *because* the body has to reach back to a rear roll-up
door over the axle.

**No turning circle for this class was found at any source**, primary or
secondary — US body builders publish body dimensions and chassis makers publish
wheelbases, and neither publishes a circle. The 44° in the code is therefore
**unverified in both directions**; it is not contradicted either. See §5.

**Shape and layout.** Forward control: near-vertical nose, a short raked lower
screen to 0.960, then flat roof for the entire length. Sill 0.16 — the lowest in
the roster, correct for a vehicle whose whole point is a low step-in floor.
The silhouette is right; only the axle under it is not.

**Verdict: lock unknown; the axle placement is materially wrong as a
representation of the class, and knowingly so.**

---

### 3.9 `schoolbus` — Type C school bus

**Sample**: the MBTC study (*School Bus Design Vehicle Dimensions*, Mack-Blackwell
Transportation Center, 1998) is the right source for this class because it is
not one bus — it is four buses from three manufacturers, measured in a car park
with paint burettes on the bumper corners and water sprayers on the tyres, then
reduced to a recommended design vehicle. It also collects four manufacturers'
own design-vehicle tables. Blue Bird's Vision brochure (primary) supplies the
current production figures.

**Manufacturer design vehicles (MBTC Table 3):**

| | overall length | front overhang | wheelbase | rear overhang |
|---|---|---|---|---|
| X 66-passenger, Type C | 10.86 | 0.83 | 6.57 | 3.57 |
| X 66-passenger, Type D | 10.15 | 2.07 | 4.95 | 3.13 |
| W 84-passenger, Type D | 12.12 | 2.06 | 7.01 | 3.05 |
| Z 84-passenger, Type D | 12.07 | 2.10 | 7.03 | 2.93 |

**Recommended Type C design vehicle:** length 11.1, width 2.4, height 3.3, front
overhang **0.85**, wheelbase **6.5**, rear overhang **3.7**; outer front wheel
radius 11.8 m, outer front body radius 12.4 m, inner rear wheel radius 7.7 m.

All three radii derive to the same angle — 36.4°, 36.5°, 36.7° — so
**a Type C school bus steers at 36.5° in this model**, R = 8.8 m.

**Where the code sits.** Length 10.90 and wheelbase 6.55 are within 20 cm and
5 cm of the class. The overhangs are not: the code has **1.50 m front / 2.85 m
rear** where the class has **0.85 / 3.70**. Two-thirds of a metre has been moved
from the tail to the nose.

Lock 42° gives R = 7.27 m against 8.8 m — **18% too tight**.

**What "materially wrong" changes.** The two errors partly cancel in the outer
sweep (11.70 m against 12.43 m) but not at the back: the code's tail swings
0.47 m where a real Type C swings 0.66 m, and its swept ring is 5.65 m wide
against 4.84 m. In a bay, a real Type C needs 0.7 m more room at the nose and
gives you 0.2 m more tail swing to worry about than the game's does.

**Shape and layout — the important finding.** The silhouette *is* a bonneted
Type C: a 1.60 m engine bonnet from the nose back to 0.853, then a raked screen
to 0.818 and a flat roof. That is drawn correctly. But the front axle sits at
the front overhang, 1.50 m from the nose — i.e. **behind the drawn bonnet**,
under the base of the windscreen. On a real Type C the axle is 0.85 m from the
nose, under the *middle* of the bonnet, ahead of the driver.

The comment above the spec explains the design as: *"the engine in front of the
windscreen pushes its front axle a metre back down the body."* **That mechanism
is inverted.** Putting the engine ahead of the windscreen is what lets the axle
sit *forward*, which is why a Type C's front overhang (0.85 m) is a third of a
low-floor city bus's (2.73 m). The forward-control Type D in the same table is
the one with the axle set back — 2.07 m of front overhang on a 4.95 m wheelbase.

What actually makes a Type C turn wider than a city bus is its **6.5 m wheelbase
combined with a 36.5° lock**, against the bus's 5.9 m at 43°. The conclusion the
comment reaches is right; the reason it gives is the opposite of the truth.

**And the inner-wheel trap in the flesh.** Blue Bird's Vision brochure prints
`WHEEL CUT 50°`. MBTC measured two identical buses at 31.3° and 36.9° of
inner-wheel lock, and found the front wheel stop is a field-adjustable screw —
so two buses of the same model differ by 5.6°. Neither 50° nor the measured
inner-wheel angles is the bicycle-model angle; only the radii are.

**Verdict: materially wrong on lock; the overhang split is wrong; the design
rationale in the code has the physics backwards while reaching the right
answer.**

---

### 3.10 `bus` — city bus

**Sample**: Mercedes-Benz Citaro C2, MAN Lion's City 12 and Lion's City M 10.5,
Solaris Urbino 12. (Volvo 7900, VDL Citea, Iveco Urbanway and ADL Enviro200
belong in the class; none publishes a circle at a citable URL.)

| | length | width | height | wheelbase | front OH | rear OH | circle |
|---|---|---|---|---|---|---|---|
| Mercedes Citaro C2 | 12.135 | 2.550 | 3.12 | 5.900 | 2.730 | 3.505 | turning 22.970 / track 19.160 *(primary)* |
| MAN Lion's City 12 | 11.98–12.185 | 2.550 | 3.06 | 5.875–6.005 | 2.730–2.775 | 3.375–3.405 | Wendekreis 22.312 *(primary)* |
| Solaris Urbino 12 | 12.000 | 2.550 | 3.30 | 5.900 | 2.700 | 3.400 | not published *(primary sheet, no circle)* |
| MAN Lion's City M | ~10.5 | 2.550 | 3.06 | 4.395 | ~2.70 | — | Wendekreis 18.058 *(primary)* |

**Class range** (12 m solo low-floor): length 11.98–12.14, width 2.55, height
3.06–3.30, wheelbase 5.875–6.005, **front overhang 2.70–2.78, rear overhang
3.38–3.51**. Derived steer angle **42.2–45.6°, typical 44.1°**.

**Where the code sits.** `11.00 × 2.50 × 3.15` with wheelbase 5.60 — an 11 m bus
is a real thing (a midibus subclass sits between the 10.5 m Lion's City M and
the 12 m standard) and the height and width are right. The **overhang split is
also right**: 2.50 front / 2.90 rear is a 0.86 ratio against the class's
0.79–0.82. This is the one large vehicle whose axles are in the right place.

The lock is the roster's largest error. 50° gives **R = 4.70 m** where the class
gives **5.78 m** at the same wheelbase — 19% too tight, and 4.70 m is below the
tightest-turning member of the sample by a full metre.

**Why the class is where it is, demonstrated on one platform.** A low-floor
city bus has a *restricted* steering lock, because at full lock the front wheels
and their arches must not intrude into the low floor between the front doors. A
high-floor coach has no such constraint, which is why §3.11's 12 m coach turns
*tighter* than this 12 m bus.

Mercedes-Benz supplies the cleanest possible demonstration, because it sells two
12.13 m buses on the same platform:

| | turning circle | derived |
|---|---|---|
| **Citaro** (low-floor city) | 22.970 m | 42–43° |
| **Citaro Ü** (interurban, raised floor) | 21.210 m | **50.4°** |

Same length, same width, same height, same maker — 1.76 m of turning circle
between them, and the only difference that can produce it is the floor. *(The
derivation for the Ü assumes it shares the city Citaro's 5.90 m wheelbase and
2.73 m front overhang, which its identical 12.13 m length makes near-certain but
which Mercedes does not print on the Ü's data page.)*

This is worth stating precisely: **the code's 50° is not a fantasy figure — it is
the right figure for the wrong bus.** It is what a 12 m *interurban* bus does. It
is not what a low-floor city bus does, and the vehicle is named `bus`, coloured
as a city bus, and drawn with a city bus's low sill and low waistline.

**What "materially wrong" changes.** Outer swept radius 10.05 m in the game
against 11.34 m real — the game's bus needs **1.3 m less aisle** to swing its
nose into a bay. Any level where the bus "just" makes the turn is a level a real
bus could not attempt.

**Shape and layout.** Near-vertical front face rising to full height within 4% of
the length, flat roof the whole way, a small tail drop. Glazing band from
`sides` at 0.50–0.90 of height = 1.58–2.84 m. On a real low-floor bus the
waistline is about 1.5–1.6 m; correct. Sill 0.175 → 0.55 m, correct for a
low-floor body's underside. The silhouette is right.

**Verdict: materially wrong on lock; dimensions, overhang split and silhouette
sound.**

---

### 3.11 `coach` — tour coach

**Sample**: Setra ComfortClass 500 (S 511 HD and S 515 HD), Mercedes-Benz
Tourismo RHD, MAN Lion's Coach (2018–). VDL Futura, Irizar i6 and Volvo 9700
belong in the class; no circles found.

| | length | width | height | wheelbase | front OH | rear OH | circle |
|---|---|---|---|---|---|---|---|
| Setra S 515 HD | 12.295 | 2.550 | ~3.75 | 6.090 | 2.890 | 3.315 | turning 21.616 / track 17.451 *(primary)* |
| Setra S 511 HD | 10.495 | 2.550 | ~3.75 | 5.005 | — | — | track 14.628 *(primary)* |
| Mercedes Tourismo 15 RHD | 12.295 | 2.550 | 3.68 | 6.090 | 2.890 | 3.315 | not published *(secondary: transbus.org)* |
| MAN Lion's Coach R07 | 12.101 | 2.550 | 3.87 | 6.060 | ~2.75 | ~3.29 | 20.880 *(secondary: transbus.org)* |

**Class range** (12 m two-axle high-deck): length 12.10–12.30, width 2.55,
height **3.68–3.87**, wheelbase 6.06–6.09, front overhang 2.75–2.89, rear
overhang 3.29–3.32. Derived steer angle **49.4–54.5°, typical 51.4°**.

**Where the code sits.** Lock 52° → R = 4.77 m against a class typical of
4.87 m: **2% out. Sound**, and the suspicion that it was an inner-wheel figure
is not supported — three independent circles put the class right there.

Two dimensions are not sound:

- **Height 3.35 m** against a class range of 3.68–3.87 m. A 12 m high-deck coach
  is 0.3–0.5 m taller than the code has it. (3.35 m would be a low-deck or
  intercity body, which is a different class.)
- **Overhangs reversed relative to the class.** The code has **2.00 front /
  3.90 rear**; the class has **2.89 / 3.31**. Nearly 0.9 m has been moved from
  the nose to the tail.

**What that changes.** The code's coach swings **1.15 m of tail** where a real
one swings **0.84 m** — 37% more. Level 17 ("tail-swing") is built on that
number, so it is built on 0.3 m of tail swing the vehicle would not have. In the
other direction the real coach's longer nose costs 0.78 m more outer swept
radius (10.88 m against 10.10 m), so the real vehicle is harder at the front and
easier at the back than the game's.

The comment above the spec says: *"A rear-engine coach: the rear axle sits far
forward under a long body, so 3.9 m of bus hangs behind it."* The rear axle of a
real coach is indeed well forward — but by 3.3 m, not 3.9 m, and its nose is
correspondingly longer. The class's own front:rear overhang ratio is 0.87; the
code's is 0.51.

**Shape and layout.** Near-vertical front face, flat roof, tail drop — and,
correctly, a **higher glazing band than the city bus**: `sides` puts the coach's
windows at 0.58–0.92 of height (1.94–3.08 m) against the bus's 1.58–2.84 m.
That is the right distinction: a high-deck coach carries its floor about 1.35 m
up over luggage bays, so its waistline is 30–40 cm above a low-floor bus's. The
silhouette gets the height *distribution* right even though the total height is
0.3–0.5 m short.

**Verdict: lock sound; height and overhang split materially wrong, and the
overhang error is load-bearing for at least one level.**

---

### 3.12 `towcar` — car plus drawbar box trailer

**Tow car sample**: D-segment estates — Škoda Octavia III Combi (4.659, wheelbase
2.686, kerb circle 10.4 m, derived 36.1°), VW Passat B8 Variant (4.767,
wheelbase 2.791, 11.7 m, 32.6°), Ford Focus Estate (4.67, wheelbase 2.70),
Peugeot 308 SW (4.64, wheelbase 2.73). Class typical **34.4°**.

*(Both circles are secondary. One source consulted for the Octavia —
auto-data.net — returned a Seat Altea page under an Octavia URL; that data was
discarded.)*

**Trailer sample**: Ifor Williams BV series, Brenderup, Humbaur, Anssems,
Debon/Cheval Liberté. The Ifor Williams BV105G (10' × 5' × 6' braked box van,
the UK class staple) is published as: **overall length 4.610 m, overall width
2.088 m, overall height 2.291 m**, loading area 3.00 × 1.47 × 1.83 m.

**Where the code sits.**

*Car*: `4.60 × 1.86 × 1.62`, wheelbase 2.75, lock 34° → R = 4.08 m against a
class typical of 4.02 m. **Sound**, dimensions and lock both.

*Trailer*: body 3.05 m long (1.90 + 1.15) × 1.90 wide × 1.75 tall; hitch 1.10 m
behind the car's rear axle; drawbar 2.90 m from coupling to trailer axle, so the
coupling stands **1.00 m ahead of the box**.

- Box length 3.05 m against the BV105G's ~3.05 m external — **right**.
- Width 1.90 against 2.088 overall — 19 cm narrow, minor.
- Height 1.75 against 2.291 — **0.54 m short**. 1.75 m is a low unbraked
  garden trailer; a 6 ft-headroom box van trailer of that footprint is 2.3 m
  tall. (Smaller box trailers do exist, so this is a different member of a wide
  class rather than an impossible one.)
- **Drawbar 1.00 m ahead of the box against ~1.4 m real.** The BV105G is 4.61 m
  overall on a ~3.2 m box, so the A-frame protrudes about 1.4 m. The recently
  added `drawbarRect` (commit `ac046eb`) draws and collides a 1.30 m bar, which
  is closer to the class than the 1.00 m gap it spans.
- Tow ball 1.10 m behind the rear axle — class-typical for an estate (1.0–1.2 m).
- Axle at 62% back along the box — plausible for correct noseweight; not
  separately sourced.
- `maxAngle` 78° — **not sourced**. See §5.

**Shape and layout.** The estate silhouette runs its roof back to 0.150 of the
length before dropping to a 44%-height tail — a genuine estate profile rather
than a saloon with a taller boot, which is right for a tow car (an estate's
lower drag and longer roof are why it is the class's towing body style).

**Verdict: car sound; trailer footprint sound, height a class member at the
small end, drawbar slightly short.**

---

### 3.13 `semi` — tractor and semitrailer

**Tractor sample**: Mercedes-Benz Actros 4×2, Volvo FH 4×2, Volvo FH 6×4 (as a
cross-check), plus Scania R, DAF XF, MAN TGX and Renault T as class members
whose circles were not found.

The Volvo Trucks Model Range sheet for the FH 42T 3A (primary) is the most
useful document in this section because it gives the whole geometry:

| | 3.50 m | 3.60 m | 3.70 m | 3.80 m |
|---|---|---|---|---|
| Overall chassis length | 5.880 | 5.980 | 6.080 | 6.180 |
| Rear overhang min / max | 0.825 / 1.015 | " | " | " |
| **Fifth wheel position** (EC 96/53) | **0.375 ahead of rear axle** | " | " | " |
| Turning circle kerb-to-kerb | 12.700 | 13.100 | 13.400 | 13.700 |
| Turning circle wall-to-wall | 14.100 | 14.400 | 14.700 | 15.000 |
| **Derived** | **39.3°** | **39.0°** | **39.1°** | **39.1°** |

Mercedes Actros 4×2 (primary, wall circles) gives 40.0° at 3.60 m and 40.2° at
3.90 m. Volvo FH 6×4 gives 39.25–39.35° across five wheelbases on its
theoretical wheelbase.

**Class range 39.0–40.2°, typical 39.4°.**

**Trailer sample**: Schmitz Cargobull and Krone 13.6 m tri-axle curtainsiders,
against the EU envelope in Directive 96/53/EC (kingpin to rear ≤ 12.0 m, front
swing radius ≤ 2.040 m, combination ≤ 16.5 m, width 2.55 m).

Schmitz Cargobull Curtainsider Standard: **kingpin to first axle 7,700 mm**,
loading length 13,620 mm, total width 2,550 mm, total height 4,000 mm.

**Where the code sits.**

*Tractor*: `6.30 × 2.50 × 3.40`, wheelbase 3.90, rear overhang 1.00, lock 40°
→ R = 4.65 m against a class typical of 4.74 m. **Sound.** Rear overhang 1.00 m
is exactly the Volvo's published maximum of 1.015 m. Length 6.30 m is 0.12 m
over the FH's longest chassis; trivial. Height 3.40 m is right for a
high-roof sleeper cab.

*Fifth wheel*: `hitch: 0.45` (0.45 m ahead of the rear axle) against Volvo's
published 0.375 m for a 4×2 under EC 96/53. Within the adjustment range of a
sliding fifth wheel. **Sound**, and worth noting because it is a number nobody
would guess right by accident.

*Trailer*: `axleFromHitch: 7.60` against the class's **7.70 m** — sound.
Width 2.55 and height 4.00 are the EU maxima, exactly right.

The trailer's **length** is not. `axleToFront 8.80 + axleToRear 4.20` makes a
13.00 m trailer with the kingpin **1.20 m** from its nose. A real 13.6 m
curtainsider is about 13.72 m overall with the kingpin **1.7 m** back, because
EU rules cap kingpin-to-rear at 12.0 m. So the code's trailer is **0.7 m short**
and its **nose overhangs the kingpin by 0.5 m too little**.

Consequences, both small: the modelled front swing radius is
√(1.20² + 1.275²) = 1.75 m against the regulation's 2.040 m limit, so the code's
trailer sweeps *less* at the front than a real one may; and the combination
measures 16.65 m against the 16.5 m legal maximum — 0.15 m over, effectively
correct.

`maxAngle: 72°` — **not sourced**. See §5.

**Shape and layout.** The tractor is drawn cab-over: the outline goes vertically
from the nose to full roof height, runs flat to 0.603 of the length, then drops
to a bare chassis rail at 40% of height and runs to the tail. Cab length 2.50 m.
That is the European tractor exactly — flat-front cab over the engine, driver
ahead of the front axle, fifth wheel on an exposed frame — and it is the right
choice given the rest of the roster is European. (A US tractor would be
bonneted with a 2 m nose ahead of the screen.)

**Verdict: tractor sound, hitch sound, trailer 0.7 m short with its kingpin
0.5 m too far forward.**

---

## 4. What the roster gets wrong as a set

### 4.1 The manoeuvrability ordering survives

Ranked by **outer swept radius** — the radius the nose sweeps at full lock,
which is what decides whether a vehicle clears the corner of a bay — the game's
order and the class-corrected order are:

```
game : citycar < hatch < towcar < saloon < suv < van < semi < lorry < pickup < bus < coach < schoolbus
class: citycar < hatch < towcar < saloon < suv < van < lorry < semi < pickup < coach < bus < schoolbus
```

*(`stepvan` omitted: no class circle exists to correct it to.)*

Two adjacent swaps out of twelve, and nothing else moves. **The ladder the
twenty-one levels are built on is sound.** The vehicles are in the right order;
several are simply at the wrong distance from their neighbours.

This is worth stating plainly because it bounds the damage. Correcting the
angles would not reshuffle which vehicle is hard and which is easy. It would
change how hard, and by how much.

### 4.2 The errors are directional, not random

| Group | Direction | Size |
|---|---|---|
| `citycar`, `hatch` | tighter than class | 10–11% |
| `saloon`, `suv`, `towcar`, `coach`, `semi` | correct | 1–3% |
| `van`, `pickup`, `lorry` | **wider** than class | 12–25% |
| `schoolbus`, `bus` | **tighter** than class | 18–19% |

Random guessing does not produce that. The pattern is a single intuition applied
consistently: *small things turn tightly, working vehicles turn badly, big buses
turn on a sixpence.* Two of those three are wrong. Working vehicles have
markedly more lock than cars (vans 38°, lorries 43°, tractors 39°, coaches 51°)
because they are designed for yards and depots; large low-floor buses have
markedly *less* than a coach because of the gangway constraint.

### 4.3 Above van size, the departures are about axles, not lock

The three worst geometry errors in the roster are all overhang distribution, and
none of them is a lock angle:

| | code front / rear | class front / rear | moved |
|---|---|---|---|
| `stepvan` | 1.35 / 1.20 | 1.10 / 2.13 | 0.93 m to the nose |
| `schoolbus` | 1.50 / 2.85 | 0.85 / 3.70 | 0.65 m to the nose |
| `coach` | 2.00 / 3.90 | 2.89 / 3.31 | 0.89 m to the tail |

Overhang is what the tail-swing and swept-ring mechanics are made of, so these
matter more to gameplay than a few degrees of lock. Notably the two vehicles
whose axle placement *is* class-correct — `lorry` (56% rear against 58%) and
`bus` (0.86 front:rear ratio against 0.79–0.82) — are the two whose design
comments do not claim a special axle position.

### 4.4 The three commented design rationales

The code carries three explicit explanations of why a vehicle is the way it is.
All three reach a defensible gameplay conclusion; two get the physics wrong.

- **`pickup`** — "3.68 m of wheelbase and only 30° of lock". Right that it is the
  worst-turning light vehicle. Wrong that it has little lock: pickups have a
  saloon's 34°. The wheelbase alone does the work.
- **`schoolbus`** — "the engine in front of the windscreen pushes its front axle
  a metre back down the body". Inverted. A bonnet ahead of the screen lets the
  axle sit *forward* (0.85 m of front overhang against a city bus's 2.73 m). The
  long wheelbase is what makes it turn wide.
- **`stepvan`** — "Wheels near the ends of the same box: 1.20 m of rear overhang
  against the lorry's 2.35 m". Accurate about the code and a good contrast to
  build a level on, but no walk-in van in the class has under 1.91 m.

### 4.5 One thing the roster gets right that is easy to miss

`saloon`, `towcar`, `semi` and `coach` are accurate to 1–3% on lock, and the
semi's fifth-wheel position (0.45 m ahead of the drive axle against a published
0.375 m), the tractor's rear overhang (1.00 m against a published maximum of
1.015 m), the trailer's kingpin-to-axle distance (7.60 m against 7.70 m) and its
2.55 × 4.00 m envelope are all right. The city bus's overhang split and the box
lorry's rear-overhang fraction are right. Whoever wrote these had a good feel
for vehicle geometry; the failures are concentrated in the one quantity —
steering lock — where the intuition available without a source is systematically
misleading.

---

## 5. Every remaining unknown

These are findings, not gaps to fill with a plausible number.

1. **No walk-in step van turning circle exists in any source consulted.** Body
   builders (Morgan Olson, Utilimaster) publish body and wheelbase tables;
   chassis makers (Freightliner Custom Chassis, Workhorse) publish wheelbases;
   neither publishes a circle, and the state procurement specification does not
   require one. `stepvan`'s 44° is unverified in both directions.

2. **Both articulation limits are unsourced.** `towcar` `maxAngle: 78°` and
   `semi` `maxAngle: 72°` are the angles at which the drawn geometry would
   contact. No manufacturer publishes a jackknife limit; it is a property of a
   particular tractor/trailer pair. Both are plausible for their geometry and
   neither is confirmed.

3. **Every light-vehicle turning circle here is secondary**, and none of the
   aggregators states whether its figure is kerb-to-kerb or wall-to-wall. Read
   as kerb (the more common convention for cars), which is what §3.1–3.6 assume.
   If any of them are actually wall figures, those derived angles are ~1–2° too
   low, which would make the `citycar` and `hatch` errors slightly smaller and
   the `van` and `pickup` errors slightly larger. **This is the largest single
   uncertainty in the audit.**

4. **Track widths are largely class assumptions.** Front track is published far
   less often than wheelbase. Where a figure was found it was used (Fiat 500
   1.414, Polo 1.522, Passat 1.577, Sprinter 1.713); elsewhere a class-typical
   value was assumed. The derivation is insensitive to this: ±0.05 m of track
   moves the answer ~0.2°, ±0.10 m ~0.3°. It does not affect any verdict.

5. **The 7.5 t box lorry class rests on one manufacturer.** Only Mercedes-Benz
   publishes circles for the Atego; DAF and Iveco publish inner-wheel angles
   (53°, 52°) which cannot be used. Five wheelbases from one spec sheet is a
   consistency check, not a class sample.

6. **The city bus and coach classes each rest on two manufacturers with usable
   circles** (Mercedes + MAN in both cases). Solaris publishes full geometry and
   no circle; Volvo, VDL, Iveco, ADL, Irizar and Neoplan publish neither at a
   citable URL.

7. **A conflict on the Citaro, now resolved — and the resolution is a
   finding.** A figure of 21,214 mm circulates for "the Citaro's" turning circle
   against the 22,970 mm in the low-floor Citaro's technical data table. These
   are two different buses: 21.21 m is the **Citaro Ü** interurban, confirmed on
   Mercedes-Benz Buses' own Citaro Ü technical-data page. Both are 12.13 m long.
   The gap between them is the low-floor gangway constraint, and it is the
   evidence in §3.10. What remains unknown is the Ü's wheelbase and front
   overhang, which Mercedes does not publish on that page; the 50.4° derived for
   it assumes they match the city Citaro's.

8. **A conflict on the Audi A4's circle** (11.1–11.9 m depending on source and
   wheel package), worth ±0.7° in the derivation. The middle was used.

9. **A conflict on the VW up!'s wheelbase** (2,407 vs 2,420 mm). Worth 0.1°.

10. **Coach and city bus heights above 3.3 m are from secondary sources**
    (transbus.org). Setra does not put overall height in the technical-data
    columns consulted.

11. **The `body` silhouettes were judged qualitatively, not measured.** No
    manufacturer publishes a bonnet length or a windscreen-base position as a
    number. The findings in §3 about bonnet length, cab/bed split and glazing
    height are proportion judgements against class-typical layouts, which is the
    best available standard, not measurements.

12. **Nothing was sourced for `accel`, `brakeAccel`, `rollDrag`, `maxSpeed`,
    `steerRate` or the mirror positions**, which were outside the brief. The
    `steerRate` figures in particular (100–160°/s of steering-wheel-referred
    virtual-wheel rate) would need a steering ratio and a lock-to-lock time to
    check, and neither is published for most of these vehicles.

---

## 6. Sources

### Primary

| Document | URL |
|---|---|
| Mercedes-Benz UK, *The new Sprinter panel van — Dimensions, weights and technical data* (Aug 2018) | https://tools.mercedes-benz.co.uk/current/vans/brochures/sprinter-panel-van-dimensions.pdf |
| Mercedes-Benz UK, *Atego 4×2 Rigid 816–824* specification sheet | https://tools.mercedes-benz.co.uk/current/trucks/specification-sheets/atego/atego-4x2-rigid-816-824.pdf |
| Mercedes-Benz UK, *Actros 1844LS/1846LS/1848LS 4×2 Tractor* specification sheet (document "CV 709") | `tools.mercedes-benz.co.uk/current/trucks/specification-sheets/` — exact filename not recorded |
| Mercedes-Benz Buses, *The Citaro — Technical data and equipment at a glance* | https://www.mercedes-benz-bus.com/content/dam/mb/models/citaro/facts-citaro/facts-citaro-int-en.pdf |
| Mercedes-Benz Buses, *Citaro Ü* technical data | https://www.mercedes-benz-bus.com/en_DE/models/citaro-ue/facts/technical-data.html |
| Setra, *ComfortClass 500 HD models — Technical data and equipment* | https://www.setra-bus.com/int/en/models/cc-hd-models/facts-cc-hd-models.pdf |
| MAN, *Lion's City* technical data brochure | https://www.bahnbus.at/technischedaten/Technische%20Daten%20_%20NICHT%20HOCHLADEN/Lions_City.pdf |
| Solaris, *Dane techniczne — Urbino 12 electric* (Transexpo 2022 press pack) | https://www.solarisbus.com/public/assets/Biuro_prasowe/2022_10_12_Transexpo/Dane_techniczne_Solaris_Urbino_12_electric_Transexpo_PL.pdf |
| Volvo Trucks, *Model Range FH 42T 3A — FH 13 4×2 Tractor, Rear Air Suspension* | https://stpi.it.volvo.com/STPIFiles/Volvo/ModelRange/fh42t3a_gbr_eng.pdf |
| Volvo Trucks, *Model Range FH 64T 3L — FH 13 6×4 Tractor* | https://stpi.it.volvo.com/STPIFiles/Volvo/ModelRange/fh64t3l_gbr_eng.pdf |
| DAF, *The new LF — Pure Excellence* brochure (source of the 53° inner-wheel figure) | https://www.daf.global/-/media/files/document-library/brochures/modelrange-euro-6/lf-euro-6/daf-lf-brochure-my2020-hq-gb.pdf |
| Blue Bird, *Vision* brochure (source of `WHEEL CUT 50°`) | https://blue-bird.com/wp-content/uploads/2024/04/vision-brochure-web-ready.pdf |
| Morgan Olson, *FCCC MT45/MT55 chassis–BODY spec* (ML002_20b) | https://morganolson.com/wp-content/uploads/2021/12/Morgan-Olson-FCCC-MT45-55-chassisBODYspec-ML002_20b.pdf |
| Washington State Dept. of Enterprise Services, walk-in step van procurement specification 00814s | https://apps.des.wa.gov/contracting/00814s.pdf |
| Ford, *2021 F-150 Technical Specs* | https://media.ford.com/content/dam/fordmedia/North%20America/US/2020/09/29/21F150_Tech_Specs.pdf |
| J. L. Gattis & M. D. Howard, *Large School Bus Design Vehicle Dimensions*, MBTC FR 1054-1 / FHWA/AR-98-008, Mack-Blackwell Transportation Center, University of Arkansas, 1998 | https://rosap.ntl.bts.gov/view/dot/14445/dot_14445_DS1.pdf |
| Schmitz Cargobull, curtainsider semitrailer product data | https://www.cargobull.com/en/products/curtainsider/curtainsider-semi-trailer/s-cs-mega |
| Ifor Williams Trailers, braked box van (BV) specification options | https://www.iwt.co.uk/products/box-van/box-van-braked/?tab=spec |
| Directive 96/53/EC (EU dimension and weight envelope) | — |

### Secondary — used for every light-vehicle turning circle, and marked as such throughout

| Source | Used for | URL |
|---|---|---|
| cars-data.com | turning-circle ranges across all variants of a model: VW up!, Hyundai i10, Nissan Qashqai, VW Tiguan, Toyota RAV4, Peugeot Boxer, Ford Transit | https://www.cars-data.com/ (e.g. https://www.cars-data.com/en/nissan-qashqai-2/turning-circle) |
| carsguide.com.au | dimensions and turning circles for RAV4, Tiguan, Sportage, Tucson, Ranger, Hilux, Amarok, D-Max, Ducato, Boxer | https://www.carsguide.com.au/ |
| transbus.org | bus and coach geometry (MAN Lion's City 12C, Solaris Urbino 12, MAN Lion's Coach, Mercedes Tourismo RHD) | https://www.transbus.org/construc/ |
| What Car?, Auto Express, Parkers, Van Reviewer, Professional Pickup | class dimensions and circles for A-segment, B-segment and D-segment cars, and for vans and pickups | various |

**Discarded:** an auto-data.net URL for the Škoda Octavia returned a Seat Altea
page; that data was not used.

---

## 7. Where this file lives, and why

`VEHICLE-SOURCES.md` at the repository root. The project has no `docs/` or
`notes/` directory and no convention for supporting documents; `README.md` and
`DESIGN.md` both sit at the root, and this belongs beside `DESIGN.md` as
evidence for decisions rather than under a directory invented for one file. It
is deliberately not part of `DESIGN.md`: that file records what the game *is*,
and this records what the world is, which is a different kind of claim with a
different lifetime.
