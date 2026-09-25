import type { CSSProperties } from "react";
import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { format } from "../../../i18n/types";
import { OrganArt } from "../../anatomy/OrganArt";
import { Annotations, type Note } from "../../ui/Editorial";
import { NoteLabel, pickNotes } from "./notes";

type Copy = SiteDictionary["about"];

/**
 * Where two structures sit on /anatomy/brain/organ.webp (lateral view, frontal
 * pole to the left), as a percentage of the square image.
 */
const BRAIN_NOTES = [
  { id: "frontal", x: 21, y: 31, side: "left", length: 52 },
  { id: "cerebellum", x: 74, y: 64, side: "right", length: 44 },
] as const;

/** The four chapters, in order, and the heading each contents link lands on. */
const CHAPTERS = [
  { key: "depth", target: "about-depth-title" },
  { key: "atelier", target: "about-atelier-title" },
  { key: "principles", target: "about-principles-title" },
  { key: "world", target: "about-world-title" },
] as const;

/**
 * The manifesto's opening: the two sentences set across the page, then one
 * large labelled plate with the lede and a short contents list beside it.
 */
export function AboutHero({ copy, organ }: { copy: Copy; organ: Organ }) {
  const { hero } = copy;
  const picked = pickNotes(organ, BRAIN_NOTES);
  const notes: Note[] = picked.map(({ spot, hotspot }) => ({
    ...spot,
    label: <NoteLabel name={hotspot.label} latin={hotspot.ta} />,
  }));

  return (
    <section className="about-hero" aria-labelledby="about-title">
      <div className="ui-container">
        <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
        <h1 id="about-title" className="ui-display about-hero__title ui-rise" style={{ "--rise-delay": "80ms" } as CSSProperties}>
          <span className="about-hero__line">{hero.titleFirst}</span>{" "}
          <span className="about-hero__line about-hero__line--second">{hero.titleSecond}</span>
        </h1>

        <div className="about-hero__grid">
          <div className="about-hero__aside ui-rise" style={{ "--rise-delay": "220ms" } as CSSProperties}>
            <p className="ui-lede about-hero__lede">{hero.lede}</p>
            <nav className="about-contents" aria-labelledby="about-contents-title">
              <p id="about-contents-title" className="ui-label about-contents__title">
                {hero.contents}
              </p>
              <ol className="about-contents__list">
                {CHAPTERS.map(({ key, target }, index) => (
                  <li key={key}>
                    <a href={`#${target}`} className="about-contents__link">
                      <span className="about-contents__n" dir="ltr">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{copy[key].label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <figure className="about-hero__figure ui-rise" style={{ "--rise-delay": "300ms" } as CSSProperties}>
            <div className="about-hero__stage">
              <OrganArt organ={organ} asset="organ" alt={hero.alt} size={720} loading="eager" />
              <Annotations notes={notes} className="about-hero__notes" />
            </div>
            <figcaption className="about-caption">
              <span className="about-caption__plate">{format(copy.plate, { number: "I" })}</span>
              <span className="ui-latin about-caption__latin" lang="la">
                {organ.scientificName}
              </span>
              <span className="about-caption__text">
                {organ.name}
                <span className="ui-sr">: {picked.map(({ hotspot }) => hotspot.label).join(", ")}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
