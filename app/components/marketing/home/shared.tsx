import { Fragment, type CSSProperties } from "react";

/** Two-digit plate and chapter numbers ("01"), kept in Western digits to match Explore. */
export function plateNumber(value: number) {
  return String(value).padStart(2, "0");
}

/**
 * A display heading whose copy marks preferred line breaks with "\n". Each
 * line is its own block, so when a line has to wrap on a narrow screen it is
 * balanced on its own (text-wrap does not balance across <br>) instead of
 * leaving one word behind. The space between lines keeps the accessible name
 * reading as a sentence.
 */
export function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <Fragment key={index}>
          {index > 0 && " "}
          <span className="home-line">{line}</span>
        </Fragment>
      ))}
    </>
  );
}

/**
 * The approximate width of one line of display type, in em — Cormorant for
 * Latin and Cyrillic, the native faces for the other scripts. An estimate
 * from character classes (calibrated against the hero headline in all twelve
 * languages), used only to cap a headline's size so its longest line fits.
 */
export function displayMeasure(line: string) {
  let em = 0;
  for (const char of line) {
    const code = char.codePointAt(0)!;
    if (char === " ") em += 0.25;
    else if ("ijlıíìîï.,:;!'’‘|()-–".includes(char)) em += 0.26;
    else if ("frt".includes(char)) em += 0.33;
    else if ("mw".includes(char)) em += 0.66;
    else if ("MW".includes(char)) em += 0.85;
    else if (/[A-ZÀ-Þ]/.test(char)) em += 0.62;
    else if (code >= 0x410 && code <= 0x42f) em += 0.65;
    else if ("жшщыюмф".includes(char)) em += 0.62;
    else if (code >= 0x400 && code <= 0x4ff) em += 0.45;
    // Arabic: short vowels take no width of their own.
    else if ((code >= 0x64b && code <= 0x65f) || code === 0x670) em += 0;
    else if (code >= 0x600 && code <= 0x6ff) em += 0.36;
    // Devanagari: combining signs sit on their letter; spacing signs and the danda are narrow.
    else if (/[ऀ-ंऺ़ु-ै्॑-ॗॢॣ]/.test(char)) em += 0;
    else if (/[ऻा-ीॉ-ौॎॏ।॥]/.test(char)) em += 0.3;
    else if (code >= 0x900 && code <= 0x97f) em += 0.6;
    // Han, kana, Hangul and full-width punctuation: one em each.
    else if (
      (code >= 0x1100 && code <= 0x11ff) ||
      (code >= 0x3000 && code <= 0x30ff) ||
      (code >= 0x3400 && code <= 0x9fff) ||
      (code >= 0xac00 && code <= 0xd7af) ||
      (code >= 0xf900 && code <= 0xfaff) ||
      (code >= 0xff00 && code <= 0xffef)
    )
      em += 1;
    else em += 0.45;
  }
  return Math.round(em * 100) / 100;
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
export function StillImage({
  still,
  alt,
  className,
  style,
}: {
  still: Still;
  alt: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      className={className}
      style={style}
      src={still.src}
      alt={alt}
      width={still.width}
      height={still.height}
      loading="lazy"
      decoding="async"
    />
  );
}
