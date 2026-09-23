"use client";

import { useEffect, useRef, useState } from "react";
import type { Organ } from "../i18n/merge";
import type { AnatomyViewer } from "../lib/three/viewer";

/**
 * The landing hero's live specimen. Drives the same three.js viewer the app
 * uses, minus the tools, hotspots, and quiz — drag to rotate, nothing to click.
 * three.js and the model are fetched only on the client, after paint.
 */
export function HeroModel({ organ, label }: { organ: Organ; label: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const organRef = useRef(organ);
  const labelRef = useRef(label);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let viewer: AnatomyViewer | null = null;

    void import("../lib/three/viewer").then(({ AnatomyViewer: Viewer }) => {
      if (cancelled || !mountRef.current) return;
      viewer = new Viewer(
        mountRef.current,
        { onLoading: (loading) => !loading && setReady(true), onSelect: () => {} },
        { enableZoom: false },
      );
      viewer.setCanvasLabel(labelRef.current);
      viewer.setAutoRotate(true);
      const { model, accent } = organRef.current;
      viewer.setOrgan(model, [], accent).catch(() => setReady(true));
    });

    return () => {
      cancelled = true;
      viewer?.dispose();
    };
  }, []);

  return (
    <div className={`hero-model ${ready ? "is-ready" : ""}`} style={{ "--organ-accent": organ.accent } as React.CSSProperties}>
      <span className="hero-model-glow" aria-hidden />
      <div ref={mountRef} className="hero-model-mount" />
    </div>
  );
}
