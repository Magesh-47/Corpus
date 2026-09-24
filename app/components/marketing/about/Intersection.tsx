import type { SiteDictionary } from "../../../i18n/site";

type Copy = SiteDictionary["about"]["intersection"];

/**
 * Science + Visualization + Education + Art, set as a descending line of type
 * rather than four tiles. Each word steps further along the reading direction,
 * and its note sits in the numbered key beneath.
 */
export function Intersection({ copy }: { copy: Copy }) {
  const terms = Object.entries(copy.terms);
  return (
    <section className="about-meet" aria-labelledby="about-meet-title">
      <div className="ui-container about-meet__inner">
        <p className="ui-eyebrow" data-reveal>
          {copy.eyebrow}
        </p>
        <h2 id="about-meet-title" className="about-sr">
          {copy.title}
        </h2>
        <p className="about-meet__words" aria-hidden>
          {terms.map(([key, term], index) => (
            <span
              key={key}
              className="about-meet__word"
              data-reveal
              style={{ "--step": index, "--reveal-delay": `${index * 140}ms` } as React.CSSProperties}
            >
              <sup className="about-meet__index">{String(index + 1).padStart(2, "0")}</sup>
              {term.word}
              {index < terms.length - 1 && <span className="about-meet__plus">+</span>}
            </span>
          ))}
        </p>
        <dl className="about-meet__key">
          {terms.map(([key, term], index) => (
            <div key={key} className="about-meet__entry" data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}>
              <dt>
                <span className="about-meet__entry-number" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {term.word}
              </dt>
              <dd>{term.note}</dd>
            </div>
          ))}
        </dl>
        <p className="about-meet__conclusion" data-reveal>
          {copy.conclusion}
        </p>
      </div>
    </section>
  );
}
