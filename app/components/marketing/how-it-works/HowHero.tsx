import type { CSSProperties } from "react";
import { stepKeys, stepNumber, type HowCopy } from "./types";

/**
 * Opening: the page's one <h1>, set as four short lines, and a contents list
 * of the five steps below — the sequence the rest of the page unfolds.
 */
export function HowHero({ copy }: { copy: HowCopy }) {
  const { hero, steps } = copy;
  const lines = Object.entries(hero.title);

  return (
    <section className="how-hero" aria-labelledby="how-title">
      <div className="ui-container how-hero__grid">
        <p className="ui-eyebrow how-hero__eyebrow ui-rise">{hero.eyebrow}</p>

        <h1 id="how-title" className="ui-display ui-display--xl how-hero__title">
          {lines.map(([key, line], index) => (
            <span
              key={key}
              className="how-hero__line ui-rise"
              style={{ "--rise-delay": `${80 + index * 90}ms`, "--line": index } as CSSProperties}
            >
              {line}
            </span>
          ))}
        </h1>

        <div className="how-hero__aside ui-rise" style={{ "--rise-delay": "460ms" } as CSSProperties}>
          <p className="ui-statement how-hero__lede">{hero.lede}</p>
          <p className="ui-body how-hero__body">{hero.body}</p>
        </div>

        <nav className="how-contents ui-rise" aria-labelledby="how-contents-label" style={{ "--rise-delay": "560ms" } as CSSProperties}>
          <p id="how-contents-label" className="ui-label how-contents__label">
            {hero.contentsLabel}
          </p>
          <ol className="how-contents__list">
            {stepKeys.map((key, index) => (
              <li key={key}>
                <a className="how-contents__link" href={`#how-step-${key}`}>
                  <span className="how-contents__n" dir="ltr">
                    {stepNumber(index)}
                  </span>
                  <span className="how-contents__name">{steps[key].name}</span>
                  <span className="how-contents__title">{steps[key].title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
