import type { Organ } from "../../../i18n/merge";
import { OrganArt } from "../../anatomy/OrganArt";
import { Annotations, type Note } from "../../ui/Editorial";
import { NoteLabel, pickNotes } from "./notes";

/**
 * Where two structures sit on /anatomy/kidneys/organ.webp (anterior view), as a
 * percentage of the square image: the outer edge of the right-hand kidney, and
 * the ureter leaving the left-hand one.
 */
const KIDNEY_NOTES = [
  { id: "cortex", x: 87, y: 36, side: "right", length: 28 },
  { id: "ureter", x: 38, y: 64, side: "left", length: 40 },
] as const;

/**
 * Chapter 02's picture: a drawn study table, not a photograph of one. A pencil
 * study pinned at an angle, a painted specimen on a turntable with leader-line
 * labels, the Latin name set large, and a few drawn instruments (a section
 * line, a turntable orbit, a scale slider). It is one image to assistive
 * technology — `role="img"` with a single description — and nothing in it is
 * interactive or styled to look pressable.
 */
export function StudioTable({ sketch, specimen, alt }: { sketch: Organ; specimen: Organ; alt: string }) {
  const notes: Note[] = pickNotes(specimen, KIDNEY_NOTES).map(({ spot, hotspot }) => ({
    ...spot,
    label: <NoteLabel name={hotspot.label} latin={hotspot.ta} />,
  }));

  return (
    <div className="about-studio" role="img" aria-label={alt}>
      <div className="about-studio__ruler" aria-hidden />

      <div className="about-studio__sheet" aria-hidden>
        <div className="about-studio__sketch">
          <OrganArt organ={sketch} asset="organ" alt="" size={360} />
          <svg className="about-studio__construction" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="52" r="34" />
            <line x1="50" y1="6" x2="50" y2="96" />
            <line x1="8" y1="52" x2="92" y2="52" />
            <line className="about-studio__dash" x1="22" y1="18" x2="78" y2="86" />
          </svg>
        </div>
        <p className="ui-latin about-studio__sheet-term" lang="la">
          {sketch.scientificName}
        </p>
      </div>

      <div className="about-studio__specimen" aria-hidden>
        <svg className="about-studio__orbit" viewBox="0 0 100 20" preserveAspectRatio="none">
          <ellipse cx="50" cy="10" rx="48" ry="8" />
          <path d="M 84 16.2 L 88.5 15.2 L 86 12.8" />
        </svg>
        <div className="about-studio__stage">
          <OrganArt organ={specimen} asset="organ" alt="" size={720} />
          <span className="about-studio__section">
            <span className="about-studio__section-mark">A</span>
            <span className="about-studio__section-mark">A</span>
          </span>
          <Annotations notes={notes} />
        </div>
      </div>

      <p className="about-studio__term" aria-hidden>
        <span className="ui-latin" lang="la">
          {specimen.scientificName}
        </span>
      </p>

      <svg className="about-studio__slider" viewBox="0 0 160 24" aria-hidden>
        <line className="about-studio__track" x1="4" y1="12" x2="156" y2="12" />
        {Array.from({ length: 9 }, (_, index) => (
          <line key={index} className="about-studio__tick" x1={4 + index * 19} y1={index % 4 === 0 ? 4 : 7} x2={4 + index * 19} y2="12" />
        ))}
        <line className="about-studio__fill" x1="4" y1="12" x2="99" y2="12" />
        <circle className="about-studio__knob" cx="99" cy="12" r="5" />
      </svg>
    </div>
  );
}
