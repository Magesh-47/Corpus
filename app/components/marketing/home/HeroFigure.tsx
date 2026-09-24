/**
 * The hero specimen: a cut-out bust of the superficial musculature. It breathes
 * slowly on its own (pure CSS, stilled under reduced motion) and deliberately
 * has no pointer or tilt interaction. Loaded eagerly: it is the page's largest
 * above-the-fold image.
 */
export function HeroFigure({ alt }: { alt: string }) {
  return (
    <div className="home-figure">
      <span className="home-figure__halo" aria-hidden />
      <img
        className="home-figure__art"
        src="/hero/figure.webp"
        alt={alt}
        width={614}
        height={970}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
