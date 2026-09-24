import type { OrganId } from "../../lib/anatomy-data";

export type OrganAsset = "thumb" | "organ" | "microscopic" | "compare" | "location";

/** The structural fields art needs — satisfied by both `OrganStructure` and `Organ`. */
type ArtSubject = { id: OrganId; illustrated: boolean; accent: string; icon: string };

/**
 * Renders an organ illustration, or its accent glyph for organs that ship as a
 * 3D model without the painted asset set. Keeps every image slot filled instead
 * of leaving a broken `<img>` behind.
 */
export function OrganArt({
  organ,
  asset,
  alt,
  size,
  loading,
}: {
  organ: ArtSubject;
  asset: OrganAsset;
  alt: string;
  size?: number;
  loading?: "eager" | "lazy";
}) {
  if (!organ.illustrated) {
    // An empty alt means a surrounding control already names this, so the
    // glyph should be skipped rather than announced with no label.
    const labelling = alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true };
    return (
      <span className="art-fallback" style={{ "--art-accent": organ.accent } as React.CSSProperties} {...labelling}>
        {organ.icon}
      </span>
    );
  }
  return (
    <img
      key={`${organ.id}-${asset}`}
      src={`/anatomy/${organ.id}/${asset}.webp`}
      alt={alt}
      width={size}
      height={size}
      loading={loading ?? (asset === "thumb" ? "eager" : "lazy")}
      decoding="async"
    />
  );
}
