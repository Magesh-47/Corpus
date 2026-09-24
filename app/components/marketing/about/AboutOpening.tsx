import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { OrganArt } from "../../anatomy/OrganArt";
import { Emphasis } from "./Emphasis";

type Copy = SiteDictionary["about"];

/** The manifesto: one statement, a frontispiece plate, and the contents. */
export function AboutOpening({
  copy,
  organ,
  chapters,
}: {
  copy: Copy;
  /** The organ drawn on the frontispiece. */
  organ: Organ;
  chapters: { id: string; label: string }[];
}) {
  const { opening } = copy;
  return (
    <section className="about-opening" aria-labelledby="about-title">
      <div className="ui-container about-opening__inner">
        <div className="about-opening__text">
          <p className="ui-eyebrow ui-rise">{opening.eyebrow}</p>
          <h1 id="about-title" className="ui-display about-opening__title ui-rise" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            <Emphasis text={opening.title} />
          </h1>
          <p className="ui-lede about-opening__lede ui-rise" style={{ "--rise-delay": "200ms" } as React.CSSProperties}>
            {opening.lede}
          </p>
        </div>

        <figure className="about-plate about-opening__plate ui-rise" style={{ "--rise-delay": "320ms" } as React.CSSProperties}>
          <div className="about-plate__frame">
            <OrganArt organ={organ} asset="location" alt={opening.plate.alt} size={720} loading="eager" />
          </div>
          <figcaption className="about-plate__caption">
            <span className="about-plate__number">{opening.plate.number}</span>
            <span className="ui-latin about-plate__latin" lang="la">
              {organ.scientificName}
            </span>
            <span className="about-plate__text">{opening.plate.caption}</span>
          </figcaption>
        </figure>

        <nav className="about-contents" aria-label={opening.contentsNav}>
          <p className="about-contents__title">{opening.contents}</p>
          <ol className="about-contents__list">
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`}>
                  <span className="about-contents__number" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{chapter.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
