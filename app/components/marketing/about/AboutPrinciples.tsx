import type { CSSProperties } from "react";
import type { SiteDictionary } from "../../../i18n/site";
import { IndexMarker } from "../../ui/Editorial";

type Copy = SiteDictionary["about"];

const NUMERALS = ["i", "ii", "iii"];

/** Chapter 03: a full-width typographic statement over three ruled columns. */
export function AboutPrinciples({ copy }: { copy: Copy }) {
  const { principles } = copy;
  return (
    <section className="ui-section about-principles" aria-labelledby="about-principles-title">
      <div className="ui-container">
        <IndexMarker n={3} label={principles.label} />
        <h2 id="about-principles-title" className="ui-display ui-display--xl about-principles__lines">
          {Object.entries(principles.lines).map(([key, line], index) => (
            <span
              key={key}
              className="about-principles__line"
              data-reveal
              style={{ "--step": index, "--reveal-delay": `${index * 140}ms` } as CSSProperties}
            >
              {line}{" "}
            </span>
          ))}
        </h2>

        <ol className="about-principles__columns">
          {Object.entries(principles.columns).map(([key, column], index) => (
            <li key={key} className="about-principles__column" data-reveal style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}>
              <p className="ui-label about-principles__label">
                <span className="about-principles__numeral" aria-hidden>
                  {NUMERALS[index]}
                </span>
                {column.label}
              </p>
              <h3 className="ui-h3 about-principles__title">{column.title}</h3>
              <p className="ui-body about-principles__body">{column.body}</p>
            </li>
          ))}
        </ol>

        <p className="ui-caption about-principles__note" data-reveal>
          {principles.note}
        </p>
      </div>
    </section>
  );
}
