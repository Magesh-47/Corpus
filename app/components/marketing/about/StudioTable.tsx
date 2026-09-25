import type { Organ } from "../../../i18n/merge";
import { OrganArt } from "../../anatomy/OrganArt";
import { Annotations, type Note } from "../../ui/Editorial";
import { NoteLabel, pickNotes } from "./notes";

/**
 * Where two structures sit on /anatomy/kidneys/organ.webp (anterior view), as a
 * percentage of the square image: the outer edge of the left-hand kidney, and
 * the ureter leaving the right-hand one.
 */
const KIDNEY_NOTES = [
  { id: "cortex", x: 13, y: 42, side: "left", length: 18 },
  { id: "ureter", x: 61, y: 68, side: "right", length: 30 },
] as const;

/**
 * Chapter 02's picture: a drawn study table, not a photograph of one. A pencil
 * study of the heart pinned at an angle, a painted specimen on a turntable
 * with leader-line labels and a specimen tag, and a few drawn instruments (a
 * section line, a turntable orbit, a scale slider). It is one image to
 * assistive technology (`role="img"` with a single description) and nothing
 * in it is interactive or styled to look pressable.
 *
 * Positions are physical, like any image: the table does not mirror in RTL.
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
            <circle cx="50" cy="54" r="33" />
            <line x1="50" y1="8" x2="50" y2="96" />
            <line x1="8" y1="54" x2="92" y2="54" />
            <line className="about-studio__dash" x1="24" y1="20" x2="76" y2="88" />
          </svg>
        </div>
        <p className="ui-latin about-studio__sheet-term" lang="la">
          {sketch.scientificName}
        </p>
      </div>

      <div className="about-studio__specimen" aria-hidden>
        <div className="about-studio__stage">
          <OrganArt organ={specimen} asset="organ" alt="" size={720} />
          <span className="about-studio__section">
            <span className="about-studio__section-mark">A</span>
            <span className="about-studio__section-mark">A</span>
          </span>
          <Annotations notes={notes} className="about-studio__notes" />
        </div>
        <svg className="about-studio__orbit" viewBox="0 0 100 20" preserveAspectRatio="none">
          <ellipse cx="50" cy="10" rx="48" ry="8" />
          <path d="M 82 16.6 L 87.5 15.5 L 84.6 12.6" />
        </svg>
      </div>

      <p className="about-studio__tag" aria-hidden>
        <span className="about-studio__tag-rule" />
        <span className="ui-latin about-studio__tag-term" lang="la">
          {specimen.scientificName}
        </span>
      </p>

      <svg className="about-studio__slider" viewBox="0 0 160 24" aria-hidden>
        <line className="about-studio__track" x1="4" y1="14" x2="156" y2="14" />
        {Array.from({ length: 9 }, (_, index) => (
          <line key={index} className="about-studio__tick" x1={4 + index * 19} y1={index % 4 === 0 ? 4 : 8} x2={4 + index * 19} y2="14" />
        ))}
        <line className="about-studio__fill" x1="4" y1="14" x2="99" y2="14" />
        <circle className="about-studio__knob" cx="99" cy="14" r="4.5" />
      </svg>
    </div>
  );
}
