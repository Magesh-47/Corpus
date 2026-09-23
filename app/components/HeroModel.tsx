"use client";

import { useEffect, useRef, useState } from "react";
import type { HeroFigure } from "../lib/three/hero-figure";

/**
 * The landing hero's 3D figure. three.js is fetched only on the client, after
 * paint, and the canvas fades in once the scene is built.
 */
export function HeroModel() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let figure: HeroFigure | null = null;

    void import("../lib/three/hero-figure").then(({ HeroFigure: Figure }) => {
      if (cancelled || !mountRef.current) return;
      figure = new Figure(mountRef.current);
      setReady(true);
    });

    return () => {
      cancelled = true;
      figure?.dispose();
    };
  }, []);

  return (
    <div className={`hero-model ${ready ? "is-ready" : ""}`}>
      <span className="hero-model-glow" aria-hidden />
      <div ref={mountRef} className="hero-model-mount" />
    </div>
  );
}
