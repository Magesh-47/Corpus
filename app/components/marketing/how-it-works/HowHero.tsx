import { ArrowRight } from "lucide-react";
import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import type { HowSectionProps } from "./types";

/**
 * Opening: the page's one <h1>, a mounted specimen plate (the whole organ and
 * the tissue it is made of — the method in miniature), and the five-verb
 * sequence the rest of the page unfolds.
 */
export function HowHero({ locale, copy, organs, exploreLabel }: HowSectionProps & { exploreLabel: string }) {
  const { hero, sequence } = copy;
  const heart = organs.heart;
  const words = Object.entries(sequence.items);

  return (
    <section className="how-hero" aria-labelledby="how-hero-title">
      <div className="ui-container how-hero__grid">
        <div className="how-hero__text">
          <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
          <h1 id="how-hero-title" className="ui-display how-hero__title ui-rise" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            {hero.title}
          </h1>
          <p className="ui-lede ui-rise" style={{ "--rise-delay": "180ms" } as React.CSSProperties}>
            {hero.lede}
          </p>
          <div className="how-hero__actions ui-rise" style={{ "--rise-delay": "260ms" } as React.CSSProperties}>
            <ButtonLink href={localeHref(locale, "explore")} arrow>
              {exploreLabel}
            </ButtonLink>
            <a className="ui-button ui-button--text" href="#how-steps-title">
              {hero.stepsLink}
            </a>
          </div>
        </div>

        <figure className="how-hero__plate ui-rise" style={{ "--rise-delay": "140ms" } as React.CSSProperties}>
          <div className="how-plate__head">
            <span>{hero.plateLabel}</span>
            <span className="ui-latin" lang="la">
              {heart.scientificName}
            </span>
          </div>
          <div className="how-hero__art">
            <div className="how-art how-art--organ">
              <OrganArt organ={heart} asset="organ" alt={hero.organAlt} size={720} loading="eager" />
            </div>
            <div className="how-art how-art--tissue how-hero__tissue">
              <OrganArt organ={heart} asset="microscopic" alt={hero.tissueAlt} size={720} loading="eager" />
            </div>
          </div>
          <figcaption className="ui-caption how-plate__caption">{format(hero.plateCaption, { organ: heart.name })}</figcaption>
        </figure>
      </div>

      <div className="ui-container">
        <div className="how-sequence">
          <p className="how-sequence__label" id="how-sequence-label">
            {sequence.label}
          </p>
          <ol className="how-sequence__list" aria-labelledby="how-sequence-label">
            {words.map(([key, item], index) => (
              <li
                key={key}
                className="how-sequence__item"
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
              >
                <span className="how-sequence__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                  {index < words.length - 1 && <ArrowRight className="ui-arrow how-sequence__arrow" size={14} strokeWidth={1.5} />}
                </span>
                <span className="how-sequence__word">{item.word}</span>
                <span className="how-sequence__note">{item.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
