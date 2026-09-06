import * as THREE from 'three';
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
// angle. A shuffle of eight strokes leaves eight of them, and the manoeuvre is
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
// A ghost is a pose and nothing else. Nothing is drawn on the ground for it:
// the turning circles it carried in a first version came off, because the lock
// at a reversal is very often unrelated to the stroke that produced the
// displacement — a stroke reversed out of straight-line travel captures a
// wheel near centre, and the figure drawn for it is a claim about a turn that
// did not happen (DESIGN.md 23). The front wheels stay turned as they were,
// because that is part of the pose and not a figure about it.
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

// A run that needs more than this many strokes has stopped being a manoeuvre
// anyone is reading off the floor. The oldest goes, because the newest is the
// one being compared against, and because past the far end of the fade below
// an older ghost is no longer distinguishable from an even older one anyway.
const MAX = 12;

// The fade. A ghost is drawn fainter the further back in the sequence it is,
// so the order the poses were left in can be read off the picture without
// counting: the newest is the firmest thing on the floor and the trail leads
// back from it.
//
// Age is position in the list, not seconds — a ghost left before a five-minute
// pause is not older than the one left after it — and the oldest never reaches
// nothing: at the floor a ghost is still a shape against the asphalt, because
// the whole manoeuvre is what the aid is for.
//
// The three numbers were measured on screen rather than chosen, because
// nominal opacity is not what a reader sees: a ghost is drawn over whatever it
// stands on, so what a step of the curve is worth is a number of luminance
// levels, not a number of hundredths of alpha. Measured on First Bay from
// overhead, in luminance out of 255 over each ghost's own background, the
// steps of this series are 9.9, 8.1, 5.7, 4.4, 2.8 and then under two. So the
// picture orders about the newest four and the rest sit together near the
// floor: see DESIGN.md 23, which is where that limit is written down rather
// than hidden in a constant.
const TOP = 0.45;
const FLOOR = 0.11;
const RATIO = 0.66;
const fade = (age) => FLOOR + (TOP - FLOOR) * RATIO ** age;

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
// makes a stack of ghosts cost about what one costs — and it is also what
// makes the fade above mean anything, because one ghost is then one blend of
// its own opacity rather than a dozen.
const COLOUR = 0xdfe6ef;
const material = (color, opacity) => new THREE.MeshStandardMaterial({
  color, roughness: 0.95, metalness: 0.0,
  transparent: true, opacity, depthWrite: true,
});

// Warm where the record is cool, and firmer: a pose in the vehicle's future
// has to be tellable at a glance from a pose in its past, and the two are
// often on screen together. It can afford the extra weight because there is
// never more than one of it — the fade above is what keeps a *pile* of ghosts
// off the player's car, and a pile is the one thing this cannot be. It stays
// pale even so, because a saturated vehicle-shaped thing on this screen is the
// player's own car and nothing else (DESIGN.md 8).
const CONTACT_MATERIAL = material(0xf0b9a2, 0.55);

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
  constructor(spec, mesh) {
    this.spec = spec;
    this.mesh = mesh;
    this.group = new THREE.Group();
    this.list = [];
    this.shown = false;
  }

  get count() { return this.list.length; }

  // Called at the direction change itself, from the physics step that scored
  // it. `at` is the shunt number the pose belongs to, `state` is the vehicle,
  // and `steer` is the lock the stroke that just ended was being driven at —
  // passed in rather than read off the vehicle because by this instant the
  // wheel is already turning towards the next stroke's lock (see the note at
  // the call site).
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
      material: null,
    };
    if (this.list.length >= MAX) this.drop(this.list.shift());
    this.list.push(g);
    if (this.shown) { this.build(g); this.refade(); }
  }

  // Everything after shunt `n` never happened: the tape was wound back past
  // the direction change that scored it (DESIGN.md 18). Called for every frame
  // the rewind pops, so the common case has to be the cheap one.
  truncate(n) {
    let cut = false;
    while (this.list.length && this.list[this.list.length - 1].at > n) {
      this.drop(this.list.pop());
      cut = true;
    }
    // A rewind makes the survivors younger, and the newest of them has to
    // become the firm one again, or the trail leads back from a pose that is
    // no longer there.
    if (cut) this.refade();
  }

  // Opacity by position from the newest, on every change to the list. Each
  // ghost owns its material for exactly this reason: a shared one could only
  // ever say one thing about age.
  refade() {
    const n = this.list.length;
    for (let i = 0; i < n; i++) {
      const g = this.list[i];
      if (g.material) g.material.opacity = fade(n - 1 - i);
    }
  }

  build(g) {
    if (g.body) return;
    const map = new Map();
    g.material = material(COLOUR, TOP);
    g.body = copyOf(this.mesh.group, map, g.material);
    g.body.position.set(g.x, 0, g.z);
    g.body.rotation.y = g.yaw;
    this.group.add(g.body);
    if (this.mesh.trailerGroup) {
      g.trailer = copyOf(this.mesh.trailerGroup, map, g.material);
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
  // rectangle, so "standing in it" means what it means everywhere else.
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
    if (on) this.refade();
  }

  unbuild(g) {
    if (g.body) this.group.remove(g.body);
    if (g.trailer) this.group.remove(g.trailer);
    g.material?.dispose();
    g.body = null;
    g.trailer = null;
    g.material = null;
  }

  // A ghost body shares the live vehicle's geometry, which belongs to the mesh
  // it was copied from; the material is the one thing of its own it holds, and
  // `unbuild` releases it.
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
