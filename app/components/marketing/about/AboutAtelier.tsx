import type { CSSProperties } from "react";
import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { IndexMarker } from "../../ui/Editorial";
import { StudioTable } from "./StudioTable";

type Copy = SiteDictionary["about"];

/** Chapter 02: what the name means, the five verbs of the atelier, and its drawn study table. */
export function AboutAtelier({ copy, sketch, specimen }: { copy: Copy; sketch: Organ; specimen: Organ }) {
  const { atelier } = copy;
  return (
    <section className="ui-section ui-tone-deep about-atelier" aria-labelledby="about-atelier-title">
      <div className="ui-container about-atelier__grid">
        <div className="about-atelier__text">
          <header className="about-chapter-head">
            <IndexMarker n={2} label={atelier.label} />
            <h2 id="about-atelier-title" className="ui-display about-atelier__title" data-reveal>
              {atelier.title}
            </h2>
          </header>
          <p className="ui-statement about-atelier__meaning" data-reveal>
            {atelier.meaning}
          </p>
          <p className="ui-lede about-atelier__body" data-reveal>
            {atelier.body}
          </p>

          <ol className="about-verbs" aria-label={atelier.verbsTitle}>
            {Object.entries(atelier.verbs).map(([key, item], index) => (
              <li key={key} className="about-verbs__item" data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
                <span className="about-verbs__verb">{item.verb}</span>
                <span className="about-verbs__note">{item.note}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="about-atelier__visual" data-reveal>
          <StudioTable sketch={sketch} specimen={specimen} alt={atelier.studioAlt} />
        </div>
      </div>
    </section>
  );
}
