import * as THREE from 'three';
import { TurnCircles } from './turnCircles.js';
import { trailerAxle } from './vehicle.js';

// Where the vehicle was, kept there.
//
// The player presses a key and the pose the vehicle is in at that instant is
// left standing in the world: the same model, at the same place, at the same
// steering angle, and — when the turning circles are on — on the same circles.
// Press it again and there are two. They stay until the run restarts or the
// player clears them.
//
// What it is for is the one thing driving cannot show you. A parallel-parking
// shuffle moves the vehicle sideways by alternating two arcs about two
// different centres, and the reason that works is a fact about *two poses at
// once*: where the vehicle was at the end of the last stroke against where it
// is now. A moving vehicle can only ever show one of them, and the tyre marks
// (DESIGN.md 19) record where the wheels went without recording how the body
// was turned when they went there. So a player watching the shuffle work
// cannot see why it works. A ghost is the missing half of that comparison.
//
// It is a record and not a prediction, so DESIGN.md 10 is untouched: every
// ghost is a place the vehicle has already been, put there by the player
// rather than computed for them. Nothing here says where to go next.
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

// Ghosts are laid down by hand, so the count is small by nature; the cap is
// here for the case where it is not. The oldest goes, because the newest is
// the one being compared against.
const MAX = 12;

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
const MATERIAL = new THREE.MeshStandardMaterial({
  color: 0xdfe6ef, roughness: 0.95, metalness: 0.0,
  transparent: true, opacity: 0.45, depthWrite: true,
});

// Fainter than the live figure, which has to stay the one you are steering by,
// and only the rear circles and the centre — see the note on `rings` in
// src/turnCircles.js for why a past pose does not want the front pair.
const CIRCLE_OPACITY = 0.3;

// A copy of the built vehicle that shares its geometry.
//
// Not `Object3D.clone()`: that deep-copies `userData` through `JSON.stringify`,
// and a wheel pivot's `userData` holds the tyre mesh, whose parent is the pivot.
// Cloning a vehicle therefore throws on a circular structure. This copies the
// two things a ghost needs — the local transform and the geometry — and takes
// its material from here rather than from the source, so nothing about the
// live vehicle can be changed by copying it.
function copyOf(src) {
  if (src.isMesh && src.userData.inner) return null;
  const out = src.isMesh ? new THREE.Mesh(src.geometry, MATERIAL) : new THREE.Group();
  out.position.copy(src.position);
  out.quaternion.copy(src.quaternion);
  out.scale.copy(src.scale);
  for (const c of src.children) {
    const k = copyOf(c);
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
    this.showCircles = false;
  }

  get count() { return this.list.length; }

  // `state` is the vehicle. The steering angle is part of the pose and not a
  // detail of it: it is what the wheels are drawn at and what the circles are
  // computed from, and at a direction change it is the whole point.
  capture(state) {
    const g = {
      pose: {
        x: state.x, z: state.z, yaw: state.yaw,
        trailerYaw: state.trailerYaw, steer: state.steer,
      },
      body: copyOf(this.mesh.group),
      trailer: this.mesh.trailerGroup ? copyOf(this.mesh.trailerGroup) : null,
      circles: null,
    };
    g.body.position.set(g.pose.x, 0, g.pose.z);
    g.body.rotation.y = g.pose.yaw;
    this.group.add(g.body);
    if (g.trailer) {
      const axle = trailerAxle(this.spec, g.pose);
      g.trailer.position.set(axle.x, 0, axle.z);
      g.trailer.rotation.y = g.pose.trailerYaw;
      this.group.add(g.trailer);
    }
    if (this.list.length >= MAX) this.drop(this.list.shift());
    this.list.push(g);
    if (this.showCircles) this.addCircles(g);
    return this.list.length;
  }

  // The figure the vehicle was standing on, frozen. It is drawn once and never
  // updated, which is what the live one already claims to be: hold the wheel
  // and the circles do not move (DESIGN.md 10), so the circles of a pose are a
  // property of the pose and outlive it.
  addCircles(g) {
    if (g.circles) return;
    g.circles = new TurnCircles({ opacity: CIRCLE_OPACITY, rings: 'rear' });
    g.circles.update(this.spec, g.pose, this.bounds);
    this.group.add(g.circles.group);
  }

  // Built when they are first wanted rather than at capture: a player with the
  // setting off is not paying for six ring buffers per ghost, and turning it on
  // still shows the circles of ghosts left before it.
  setCircles(on) {
    if (on === this.showCircles) return;
    this.showCircles = on;
    for (const g of this.list) {
      if (on) this.addCircles(g);
      else if (g.circles) {
        this.group.remove(g.circles.group);
        g.circles.dispose();
        g.circles = null;
      }
    }
  }

  drop(g) {
    this.group.remove(g.body);
    if (g.trailer) this.group.remove(g.trailer);
    if (g.circles) {
      this.group.remove(g.circles.group);
      g.circles.dispose();
    }
  }

  clear() {
    for (const g of this.list) this.drop(g);
    this.list = [];
  }

  // Only the circles own geometry; a ghost body shares the live vehicle's,
  // which belongs to the mesh it was copied from.
  dispose() { this.clear(); }
}
