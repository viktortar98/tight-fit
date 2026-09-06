import * as THREE from 'three';
import { TurnCircles } from './turnCircles.js';
import { bodyRect, trailerAxle } from './vehicle.js';
import { overlaps } from './geom.js';

// The vehicle drawn where it is not: a copy of the built mesh, posed somewhere
// the vehicle is not standing. Two of those, and the difference between them
// is the whole of DESIGN.md 10.
//
// `Ghosts` is a record — where the vehicle was at every direction change.
// `ContactGhost` is a prediction — where it would first touch something if the
// present lock were held. They share this file because they share the one
// thing that is hard: making a copy of a vehicle that reads as that vehicle
// without reading as another car parked in the level.
//
// --- Ghosts: where the vehicle was at every direction change ---------------
//
// Turn the setting on and each reversal leaves a translucent copy of the
// vehicle standing where it turned: same model, same place, same steering
// angle, and — when the turning circles are on — on the circles it was turning
// about. A shuffle of eight strokes leaves eight of them, and the manoeuvre is
// on the ground all at once instead of one pose at a time.
//
// What it is for is the one thing driving cannot show you. A parallel-parking
// shuffle moves the vehicle sideways by alternating two arcs about two
// different centres, and the reason that works is a fact about *two poses at
// once*: where the vehicle was at the end of the last stroke against where it
// is now. A moving vehicle can only ever show one of them, and the tyre marks
// (DESIGN.md 19) record where the wheels went without recording how the body
// was turned when they went there. So a player watching the shuffle work
// cannot see why it works.
//
// The instant is not chosen by this file and is not a judgement about which
// moments are interesting. It is the direction change — the event the game
// already detects, because it is the score (DESIGN.md 2). That is what makes
// the record exact rather than approximately when the player reacted, and it
// is why every ghost carries the shunt number it belongs to: rewinding
// un-scores a shunt by winding the tape past it, and a ghost whose shunt no
// longer happened has to go with it (DESIGN.md 23).
//
// It is a record and not a prediction. Every ghost is a place the vehicle has
// already been, at a moment the game did not choose but merely noticed.
//
// Two decisions worth stating, because neither is arbitrary:
//
// The ghost is desaturated, not tinted like the car it came from. The player's
// vehicle is the only saturated colour in the game (DESIGN.md 8) and that is
// what makes it findable at a glance; a pile of translucent red hatchbacks
// would spend that. One flat grey for the whole thing — no paint, no glass, no
// lamps — also makes a ghost read as an annotation rather than as another
// vehicle parked in the level.
//
// The cabin lining is dropped. It is the surface the driver sees from inside
// the shell (src/carMesh.js), it is hidden by the shell's own faces from
// outside, and through a translucent shell it is just clutter inside the
// outline.

// A run that needs more than two dozen strokes has stopped being a manoeuvre
// anyone is reading off the floor. The oldest goes, because the newest is the
// one being compared against.
const MAX = 24;

// Pale rather than mid-grey, and at an opacity that survives being drawn over
// asphalt. The first pass was 0x9aa4b0 at 0.3 and it disappeared into the road
// in the overhead view, which is the view a manoeuvre is read in: a ghost that
// has to be hunted for is not a comparison.
//
// `depthWrite` is the load-bearing one, and it was measured rather than
// chosen. A vehicle is a dozen surfaces deep along any sight line — shell
// front and back, glazing, bumpers, wheels — so with depth writes off, a
// *single* ghost blends a dozen times and reads nearly solid; six of them
// stacked, which is what a parallel-parking shuffle produces because the
// vehicle gains centimetres per cycle, painted the player's own car out of the
// picture entirely and left a white slab. That breaks DESIGN.md 8 outright:
// the saturated shape is supposed to be the one you are driving. Writing depth
// makes a stack of ghosts cost about what one costs.
const material = (color, opacity) => new THREE.MeshStandardMaterial({
  color, roughness: 0.95, metalness: 0.0,
  transparent: true, opacity, depthWrite: true,
});

const MATERIAL = material(0xdfe6ef, 0.45);

// Warm where the record is cool, and firmer: a pose in the vehicle's future
// has to be tellable at a glance from a pose in its past, and the two are
// often on screen together. It can afford the extra weight because there is
// never more than one of it — the 0.45 above is the number that keeps a *pile*
// of ghosts off the player's car, and a pile is the one thing this cannot be.
// It stays pale even so, because a saturated vehicle-shaped thing on this
// screen is the player's own car and nothing else (DESIGN.md 8).
const CONTACT_MATERIAL = material(0xf0b9a2, 0.55);

// Fainter than the live figure, which has to stay the one you are steering by,
// and only the rear circles and the centre — see the note on `rings` in
// src/turnCircles.js for why a past pose does not want the front pair.
const CIRCLE_OPACITY = 0.3;

// A copy of the built vehicle that shares its geometry, and a map from each
// source node to its copy so the caller can pose the parts it cares about.
//
// Not `Object3D.clone()`: that deep-copies `userData` through `JSON.stringify`,
// and a wheel pivot's `userData` holds the tyre mesh, whose parent is the pivot.
// Cloning a vehicle therefore throws on a circular structure. This copies the
// two things a ghost needs — the local transform and the geometry — and takes
// its material from here rather than from the source, so nothing about the
// live vehicle can be changed by copying it.
function copyOf(src, map, mat) {
  if (src.isMesh && src.userData.inner) return null;
  const out = src.isMesh ? new THREE.Mesh(src.geometry, mat) : new THREE.Group();
  out.position.copy(src.position);
  out.quaternion.copy(src.quaternion);
  out.scale.copy(src.scale);
  map.set(src, out);
  for (const c of src.children) {
    const k = copyOf(c, map, mat);
    if (k) out.add(k);
  }
  return out;
}

export class Ghosts {
  // `mesh` is the live vehicle's mesh, and it is the only description of the
  // model a ghost has: copying the thing on screen is what makes "the same
  // vehicle" true by construction rather than by two builders agreeing.
  constructor(spec, mesh, bounds) {
    this.spec = spec;
    this.mesh = mesh;
    this.bounds = bounds;
    this.group = new THREE.Group();
    this.list = [];
    this.shown = false;
    this.showCircles = false;
  }

  get count() { return this.list.length; }

  // Called at the direction change itself, from the physics step that scored
  // it. `at` is the shunt number the pose belongs to, `state` is the vehicle,
  // and `steer` is the lock the stroke that just ended was being driven at —
  // passed in rather than read off the vehicle because by this instant the
  // wheel is already turning towards the next stroke's lock (see the note at
  // the call site).
  //
  // The steering angle is part of the pose and not a detail of it: it is what
  // the wheels are drawn at and what the circles are computed from, and the
  // circle a stroke ran on is the thing that explains the stroke.
  //
  // The pose is recorded whether or not anything is being drawn. It is five
  // numbers, and keeping them means a player who turns the setting on halfway
  // through a manoeuvre is shown the manoeuvre rather than the rest of it.
  record(at, state, steer) {
    const g = {
      at,
      x: state.x,
      z: state.z,
      yaw: state.yaw,
      trailerYaw: state.trailerYaw,
      steer,
      body: null,
      trailer: null,
      circles: null,
    };
    if (this.list.length >= MAX) this.drop(this.list.shift());
    this.list.push(g);
    if (this.shown) this.build(g);
  }

  // Everything after shunt `n` never happened: the tape was wound back past
  // the direction change that scored it (DESIGN.md 18). Called for every frame
  // the rewind pops, so the common case has to be the cheap one.
  truncate(n) {
    while (this.list.length && this.list[this.list.length - 1].at > n) {
      this.drop(this.list.pop());
    }
  }

  build(g) {
    if (g.body) return;
    const map = new Map();
    g.body = copyOf(this.mesh.group, map, MATERIAL);
    g.body.position.set(g.x, 0, g.z);
    g.body.rotation.y = g.yaw;
    this.group.add(g.body);
    if (this.mesh.trailerGroup) {
      g.trailer = copyOf(this.mesh.trailerGroup, map, MATERIAL);
      const axle = trailerAxle(this.spec, g);
      g.trailer.position.set(axle.x, 0, axle.z);
      g.trailer.rotation.y = g.trailerYaw;
      this.group.add(g.trailer);
    }
    // The front wheels are turned to the recorded lock rather than left at
    // whatever the live mesh is holding. A ghost built now for a pose from
    // thirty seconds ago has to show that pose, and the copy came off a mesh
    // that has moved on since.
    for (const w of this.mesh.wheels.front) map.get(w)?.rotation.set(0, g.steer, 0);
    if (this.showCircles) this.addCircles(g);
  }

  // The figure the vehicle was standing on, frozen. It is drawn once and never
  // updated, which is what the live one already claims to be: hold the wheel
  // and the circles do not move (DESIGN.md 10), so the circles of a pose are a
  // property of the pose and outlive it.
  addCircles(g) {
    if (g.circles) return;
    g.circles = new TurnCircles({ opacity: CIRCLE_OPACITY, rings: 'rear' });
    g.circles.update(this.spec, g, this.bounds);
    this.group.add(g.circles.group);
  }

  // A ghost the vehicle is standing in is not drawn, and this is constraint 8
  // rather than tidiness. The material writes depth, so one ghost costs one
  // blend along a sight line — but a *stack* of them costs one each, and a
  // player rocking on the spot leaves the whole stack in the same place. Five
  // of them at 0.45 leave 5% of the car showing: measured on First Bay, and
  // the saturated shape the player steers by had gone.
  //
  // Hiding them costs nothing, because a ghost of where you are standing is
  // the one place you can already see the vehicle. Drive off it and it is
  // there again. The test is the game's own overlap test on the body
  // rectangle, so "standing in it" means what it means everywhere else. The
  // circles stay: they lie on the ground, they veil nothing, and the centre a
  // stroke turned about is the half of the record the tyre marks do not draw.
  occlude(state) {
    const live = bodyRect(this.spec, state);
    for (const g of this.list) {
      if (!g.body) continue;
      const on = !overlaps(bodyRect(this.spec, g), live, 0);
      g.body.visible = on;
      if (g.trailer) g.trailer.visible = on;
    }
  }

  // The setting. Turning it off throws the meshes away and keeps the poses, so
  // turning it back on is not a decision the player has to have made in
  // advance.
  setShown(on) {
    if (on === this.shown) return;
    this.shown = on;
    for (const g of this.list) {
      if (on) this.build(g);
      else this.unbuild(g);
    }
  }

  // Built when they are first wanted rather than at capture: a player with the
  // circles off is not paying for ring buffers per ghost, and turning them on
  // reaches the ghosts already standing, not just the next one.
  setCircles(on) {
    if (on === this.showCircles) return;
    this.showCircles = on;
    for (const g of this.list) {
      if (!g.body) continue;
      if (on) this.addCircles(g);
      else this.dropCircles(g);
    }
  }

  dropCircles(g) {
    if (!g.circles) return;
    this.group.remove(g.circles.group);
    g.circles.dispose();
    g.circles = null;
  }

  unbuild(g) {
    if (g.body) this.group.remove(g.body);
    if (g.trailer) this.group.remove(g.trailer);
    g.body = null;
    g.trailer = null;
    this.dropCircles(g);
  }

  // Only the circles own geometry; a ghost body shares the live vehicle's,
  // which belongs to the mesh it was copied from.
  drop(g) { this.unbuild(g); }

  clear() {
    for (const g of this.list) this.unbuild(g);
    this.list = [];
  }

  dispose() { this.clear(); }
}

// --- ContactGhost: where this lock runs out -------------------------------
//
// One copy of the vehicle, standing at the pose it would reach by holding the
// steering it is holding and driving on in the direction it is going, until
// some part of it first touches an obstacle or the arena edge.
//
// The user's statement of what it is for:
//
// > "although the projections are helpful to understand how the car would get
// > there, it's not clear where the car could get without crashing into
// > anything"
//
// which is exactly the question the turning circles do not answer. A circle
// says where the vehicle *can* go; it says nothing about how much of that
// circle is left before the wing hits a pillar. This is that point, and no
// more than that point (DESIGN.md 10).
//
// The pose is found by the game rather than by this class, because the game is
// what owns the world: `Game.contactPose` walks the vehicle's own `integrate`
// forward and stops on the same `isFree` the physics stops on. A predicted
// contact that disagreed with the real one would be worse than no prediction.
export class ContactGhost {
  constructor(spec, mesh) {
    this.spec = spec;
    this.group = new THREE.Group();
    this.group.visible = false;
    const map = new Map();
    this.body = copyOf(mesh.group, map, CONTACT_MATERIAL);
    this.group.add(this.body);
    this.trailer = mesh.trailerGroup
      ? copyOf(mesh.trailerGroup, map, CONTACT_MATERIAL) : null;
    if (this.trailer) this.group.add(this.trailer);
    this.wheels = mesh.wheels.front.map((w) => map.get(w)).filter(Boolean);
  }

  // `pose` is a vehicle state, `steer` the lock it is being driven at — the
  // ghost's front wheels are turned to it, because the arc it is standing at
  // the end of is the arc that lock draws.
  show(pose, steer) {
    this.group.visible = true;
    this.body.position.set(pose.x, 0, pose.z);
    this.body.rotation.y = pose.yaw;
    if (this.trailer) {
      const axle = trailerAxle(this.spec, pose);
      this.trailer.position.set(axle.x, 0, axle.z);
      this.trailer.rotation.y = pose.trailerYaw;
    }
    for (const w of this.wheels) w.rotation.set(0, steer, 0);
  }

  hide() { this.group.visible = false; }

  // Shares the live vehicle's geometry, so there is nothing of its own to
  // release; the method exists so the caller has one way to put a ghost away.
  dispose() { this.hide(); }
}
