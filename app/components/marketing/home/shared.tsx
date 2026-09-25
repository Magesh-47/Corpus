import { Fragment } from "react";

/** Two-digit plate and chapter numbers ("01"), kept in Western digits to match Explore. */
export function plateNumber(value: number) {
  return String(value).padStart(2, "0");
}

/** A display heading whose copy marks preferred line breaks with "\n". */
export function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <Fragment key={index}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

export type Still = { src: string; width: number; height: number };

/**
 * Stills rendered from Explore's own 3D models (transparent WebP, trimmed to
 * the organ). `points` are where Explore places each hotspot dot on that
 * still, as a percentage of the image box — measured from the viewer when the
 * still was captured, so the markers sit exactly where the real dots do.
 */
export const stills = {
  heart: {
    src: "/marketing/home-heart.webp",
    width: 826,
    height: 1281,
    points: {
      aorta: [21.7, 8.8],
      "left-atrium": [61.6, 37.1],
      "right-atrium": [0.8, 42.5],
      "left-ventricle": [64.7, 73.8],
      "right-ventricle": [5, 72.5],
      mitral: [42.2, 92.3],
    },
  },
  heartBack: { src: "/marketing/home-heart-back.webp", width: 707, height: 1000 },
  heartSide: { src: "/marketing/home-heart-side.webp", width: 839, height: 1300 },
  heartSection: { src: "/marketing/home-heart-section.webp", width: 319, height: 900 },
  eye: { src: "/marketing/home-eye.webp", width: 1000, height: 823 },
  brain: {
    src: "/marketing/home-brain.webp",
    width: 1297,
    height: 1177,
    points: {
      frontal: [22.2, 22.5],
      parietal: [52.7, 17.5],
      temporal: [66.8, 55.3],
      cerebellum: [61.1, 78.4],
    },
  },
  brainSide: { src: "/marketing/home-brain-side.webp", width: 900, height: 853 },
  lungs: {
    src: "/marketing/home-lungs.webp",
    width: 1134,
    height: 1300,
    points: {
      trachea: [47.5, 9.5],
      "right-lung": [8.3, 47.3],
      "left-lung": [80.8, 50.4],
    },
  },
} satisfies Record<string, Still & { points?: Record<string, readonly [number, number] | number[]> }>;

/** A lazily loaded still with its intrinsic size, so it never shifts the layout. */
export function StillImage({ still, alt, className }: { still: Still; alt: string; className?: string }) {
  return (
    <img
      className={className}
      src={still.src}
      alt={alt}
      width={still.width}
      height={still.height}
      loading="lazy"
      decoding="async"
    />
  );
}
