import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { organStructures, type OrganId } from "../anatomy-data";
import { disposeObject } from "./dispose";

/**
 * The landing hero's figure. Built from primitives rather than loaded, so the
 * page costs no model download: a translucent body, a stipple of surface points
 * that reads as a drawn study, and a lit node where each specimen sits.
 */

const POINT_COUNT = 2400;
/** Slightly above centre, so the figure reads as standing rather than floating. */
const CAMERA = { y: 0.15, z: 9.4 };
const FOV = 34;

type Part = {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
};

/** Where each specimen sits in the body, in figure space. */
const NODES: { id: OrganId; position: [number, number, number] }[] = [
  { id: "brain", position: [0, 2.3, 0] },
  { id: "lungs", position: [-0.26, 1.46, 0.06] },
  { id: "heart", position: [0.14, 1.34, 0.12] },
  { id: "liver", position: [-0.24, 0.82, 0.12] },
  { id: "kidneys", position: [0.26, 0.6, -0.12] },
  { id: "intestine", position: [0, 0.42, 0.12] },
];

function buildParts(): Part[] {
  const capsule = (radius: number, length: number) => new THREE.CapsuleGeometry(radius, length, 6, 20);
  const sphere = (radius: number) => new THREE.SphereGeometry(radius, 26, 18);
  const parts: Part[] = [
    { geometry: sphere(0.36), position: [0, 2.28, 0], scale: [0.92, 1.08, 0.92] },
    { geometry: capsule(0.11, 0.16), position: [0, 1.92, 0] },
    { geometry: capsule(0.46, 0.6), position: [0, 1.36, 0], scale: [1.06, 1, 0.66] },
    { geometry: capsule(0.4, 0.4), position: [0, 0.74, 0], scale: [1, 1, 0.64] },
    { geometry: capsule(0.38, 0.14), position: [0, 0.36, 0], scale: [1.08, 1, 0.68] },
  ];

  // Arms and legs mirror, so each side is described once.
  for (const side of [-1, 1]) {
    parts.push(
      { geometry: sphere(0.17), position: [side * 0.54, 1.7, 0] },
      { geometry: capsule(0.115, 0.52), position: [side * 0.6, 1.26, 0], rotation: [0, 0, side * -0.07] },
      { geometry: capsule(0.1, 0.48), position: [side * 0.66, 0.66, 0], rotation: [0, 0, side * -0.03] },
      { geometry: sphere(0.11), position: [side * 0.68, 0.3, 0], scale: [0.78, 1.25, 0.6] },
      { geometry: capsule(0.175, 0.58), position: [side * 0.21, -0.26, 0] },
      { geometry: capsule(0.14, 0.54), position: [side * 0.21, -1.04, 0] },
      { geometry: sphere(0.13), position: [side * 0.21, -1.46, 0.08], scale: [0.8, 0.6, 1.5] },
    );
  }
  return parts;
}

export class HeroFigure {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  private figure = new THREE.Group();
  private nodes: { mesh: THREE.Mesh; halo: THREE.Mesh; phase: number }[] = [];
  private scanRing!: THREE.Mesh;

  private clock = new THREE.Clock();
  private frame = 0;
  private resizeObserver: ResizeObserver;
  private intersectionObserver: IntersectionObserver;
  private disposed = false;
  private isVisible = true;
  private isPageVisible = true;
  private reducedMotion: boolean;

  private pointerId: number | null = null;
  private lastPointerX = 0;
  private spinVelocity = 0;

  constructor(container: HTMLElement) {
    this.container = container;
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lowPower = window.matchMedia("(max-width: 780px)").matches || (navigator.hardwareConcurrency ?? 8) < 6;
    this.renderer = new THREE.WebGLRenderer({ antialias: !lowPower, alpha: true, powerPreference: "low-power" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.5 : 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // Decorative: the heading and lede carry the meaning of this section.
    this.renderer.domElement.setAttribute("aria-hidden", "true");
    container.appendChild(this.renderer.domElement);

    this.camera.position.set(0, CAMERA.y, CAMERA.z);
    this.camera.lookAt(0, 0, 0);

    this.buildScene();

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.isVisible = entry.isIntersecting;
    }, { rootMargin: "120px" });
    this.intersectionObserver.observe(container);
    document.addEventListener("visibilitychange", this.onVisibilityChange);

    const canvas = this.renderer.domElement;
    canvas.addEventListener("pointerdown", this.onPointerDown);
    canvas.addEventListener("pointermove", this.onPointerMove);
    canvas.addEventListener("pointerup", this.onPointerUp);
    canvas.addEventListener("pointercancel", this.onPointerUp);

    this.resize();
    this.animate();
  }

  private buildScene() {
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const key = new THREE.DirectionalLight(0xfff3e7, 2.1);
    key.position.set(3.5, 5, 6);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xffb7a5, 1.1);
    rim.position.set(-4, 2.5, -4);
    this.scene.add(rim);

    const parts = buildParts();
    const baked = parts.map(({ geometry, position, rotation, scale }) => {
      const matrix = new THREE.Matrix4().compose(
        new THREE.Vector3(...position),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(...(rotation ?? [0, 0, 0]))),
        new THREE.Vector3(...(scale ?? [1, 1, 1])),
      );
      return geometry.applyMatrix4(matrix);
    });
    const body = mergeGeometries(baked, false);
    baked.forEach((geometry) => geometry.dispose());

    const skin = new THREE.Mesh(
      body,
      new THREE.MeshPhysicalMaterial({
        color: 0xfbeee4,
        roughness: 0.36,
        metalness: 0,
        clearcoat: 0.55,
        clearcoatRoughness: 0.35,
        transparent: true,
        opacity: 0.26,
        // Overlapping translucent limbs would otherwise punch holes in the
        // torso behind them; letting them all accumulate reads as volume.
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    this.figure.add(skin);
    this.figure.add(this.buildStipple(skin));

    for (const { id, position } of NODES) {
      const accent = new THREE.Color(organStructures.find((organ) => organ.id === id)?.accent ?? "#ee7c6a");
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.072, 18, 14),
        new THREE.MeshBasicMaterial({ color: accent }),
      );
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 18, 14),
        new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.2, depthWrite: false }),
      );
      mesh.position.set(...position);
      halo.position.set(...position);
      this.figure.add(mesh, halo);
      this.nodes.push({ mesh, halo, phase: Math.random() * Math.PI * 2 });
    }

    this.scanRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.005, 6, 64),
      new THREE.MeshBasicMaterial({ color: 0x8d6bcc, transparent: true, opacity: 0.32, depthWrite: false }),
    );
    this.scanRing.rotation.x = Math.PI / 2;
    this.scanRing.scale.set(1, 1, 0.7);
    this.figure.add(this.scanRing);

    // The parts are described from the feet up; drop the group so the figure
    // sits centred in frame.
    this.figure.position.y = -0.45;
    this.scene.add(this.figure);
  }

  /** A stipple of surface points — the drawn-study layer over the soft body. */
  private buildStipple(source: THREE.Mesh) {
    const sampler = new MeshSurfaceSampler(source).build();
    const positions = new Float32Array(POINT_COUNT * 3);
    const point = new THREE.Vector3();
    for (let i = 0; i < POINT_COUNT; i += 1) {
      sampler.sample(point);
      positions.set([point.x, point.y, point.z], i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ color: 0x6d5c50, size: 0.019, transparent: true, opacity: 0.55, depthWrite: false }),
    );
  }

  private onVisibilityChange = () => {
    this.isPageVisible = document.visibilityState === "visible";
  };

  private onPointerDown = (event: PointerEvent) => {
    this.pointerId = event.pointerId;
    this.lastPointerX = event.clientX;
    this.renderer.domElement.setPointerCapture(event.pointerId);
  };

  private onPointerMove = (event: PointerEvent) => {
    if (this.pointerId !== event.pointerId) return;
    const delta = (event.clientX - this.lastPointerX) * 0.008;
    this.lastPointerX = event.clientX;
    this.figure.rotation.y += delta;
    this.spinVelocity = delta;
  };

  private onPointerUp = (event: PointerEvent) => {
    if (this.pointerId !== event.pointerId) return;
    this.renderer.domElement.releasePointerCapture(event.pointerId);
    this.pointerId = null;
  };

  private resize() {
    const { clientWidth, clientHeight } = this.container;
    if (!clientWidth || !clientHeight) return;
    this.renderer.setSize(clientWidth, clientHeight, false);
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
  }

  private animate = () => {
    if (this.disposed) return;
    this.frame = requestAnimationFrame(this.animate);
    if (!this.isVisible || !this.isPageVisible) return;

    const delta = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;

    if (!this.reducedMotion) {
      if (this.pointerId === null) {
        this.figure.rotation.y += delta * 0.26 + this.spinVelocity;
        this.spinVelocity *= 0.92;
      }
      this.figure.position.y = -0.45 + Math.sin(time * 0.85) * 0.045;

      for (const { mesh, halo, phase } of this.nodes) {
        const pulse = 1 + Math.sin(time * 2.1 + phase) * 0.14;
        mesh.scale.setScalar(pulse);
        halo.scale.setScalar(pulse * 1.08);
        (halo.material as THREE.MeshBasicMaterial).opacity = 0.14 + Math.sin(time * 2.1 + phase) * 0.07;
      }

      // A slow sweep up the body, like a scan passing through.
      this.scanRing.position.y = 0.4 + Math.sin(time * 0.42) * 1.85;
    }

    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    document.removeEventListener("visibilitychange", this.onVisibilityChange);

    const canvas = this.renderer.domElement;
    canvas.removeEventListener("pointerdown", this.onPointerDown);
    canvas.removeEventListener("pointermove", this.onPointerMove);
    canvas.removeEventListener("pointerup", this.onPointerUp);
    canvas.removeEventListener("pointercancel", this.onPointerUp);

    disposeObject(this.scene);
    this.figure.traverse((child) => {
      if (child instanceof THREE.Points) {
        child.geometry.dispose();
        (child.material as THREE.Material).dispose();
      }
    });
    this.renderer.dispose();
    canvas.remove();
  }
}
