/** The hero specimen. Breathes and drifts on its own; nothing to interact with. */
export function HeroFigure() {
  return (
    <div className="hero-figure">
      <span className="hero-figure-glow" aria-hidden />
      <img
        className="hero-figure-art"
        src="/hero/figure.webp"
        alt=""
        width={614}
        height={970}
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
