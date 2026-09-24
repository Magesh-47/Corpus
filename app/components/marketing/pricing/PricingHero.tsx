import { ButtonLink } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { StatusTag } from "../../ui/StatusTag";
import { localeHref } from "../../../lib/routes";
import type { SiteDictionary } from "../../../i18n/site";
import { planAnchor, planOrder, planNumber } from "./plans";

/**
 * The opening: one plain statement (the core is free) beside a catalogue-style
 * index of the three plans, each marked with what is real and what is not yet.
 */
export function PricingHero({ locale, site }: { locale: string; site: SiteDictionary }) {
  const { hero, plans } = site.pricing;
  const { status, actions } = site.common;

  return (
    <section className="pricing-hero" aria-labelledby="pricing-title">
      <Container className="pricing-hero__grid">
        <div className="pricing-hero__text">
          <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
          <h1 id="pricing-title" className="ui-display pricing-hero__title ui-rise" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            {hero.title}
          </h1>
          <p className="ui-lede ui-rise" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
            {hero.lede}
          </p>
          <div className="pricing-actions ui-rise" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            <ButtonLink href={localeHref(locale, "explore")} arrow>
              {actions.exploreBody}
            </ButtonLink>
            <a className="ui-button ui-button--text" href="#pricing-plans">
              {hero.secondary}
            </a>
          </div>
        </div>

        <nav className="pricing-index ui-rise" aria-label={hero.indexLabel} style={{ "--rise-delay": "320ms" } as React.CSSProperties}>
          <p className="pricing-index__label" aria-hidden="true">
            {hero.indexLabel}
          </p>
          <ol className="pricing-index__list">
            {planOrder.map((key, index) => {
              const plan = plans.items[key];
              const available = key === "free";
              return (
                <li key={key} className="pricing-index__item">
                  <a className="pricing-index__link" href={`#${planAnchor(key)}`}>
                    <span className="pricing-index__number" aria-hidden="true">
                      {planNumber(index)}
                    </span>
                    <span className="pricing-index__names">
                      <span className="pricing-index__name">{plan.name}</span>
                      <span className="pricing-index__tagline">{plan.tagline}</span>
                    </span>
                  </a>
                  <StatusTag tone={available ? "available" : "soon"}>
                    {available ? status.availableNow : status.comingSoon}
                  </StatusTag>
                </li>
              );
            })}
          </ol>
          <p className="pricing-index__caption ui-caption">{hero.indexCaption}</p>
        </nav>
      </Container>
    </section>
  );
}
