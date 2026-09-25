import type { Hotspot, Organ } from "../../../i18n/merge";

/** A leader-line position on an organ plate, keyed by hotspot id. */
export type Spot = { id: string; x: number; y: number; side: "left" | "right"; length: number };

/** Joins plate positions to the organ's localized hotspots, skipping any that are missing. */
export function pickNotes(organ: Organ, spots: readonly Spot[]): { spot: Spot; hotspot: Hotspot }[] {
  return spots.flatMap((spot) => {
    const hotspot = organ.hotspots.find((entry) => entry.id === spot.id);
    return hotspot ? [{ spot, hotspot }] : [];
  });
}

/** A leader-line label: the structure's name, with its Latin term beneath. */
export function NoteLabel({ name, latin }: { name: string; latin: string }) {
  return (
    <span className="about-note">
      <span className="about-note__name">{name}</span>
      <span className="ui-latin about-note__latin" lang="la">
        {latin}
      </span>
    </span>
  );
}
