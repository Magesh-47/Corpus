import { ButtonLink } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { OrganArt } from "../../anatomy/OrganArt";
import { format } from "../../../i18n/types";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";

/** The page-level invitation: create an account, or simply begin exploring. */
export function PricingClosing({ locale, site, organ }: { locale: string; site: SiteDictionary; organ: Organ }) {
  const { closing } = site.pricing;

  return (
    <section className="pricing-closing ui-section" aria-labelledby="pricing-closing-title">
      <Container className="pricing-closing__grid">
        <figure className="pricing-closing__figure" data-reveal>
          <span className="pricing-closing__art">
            <OrganArt organ={organ} asset="microscopic" alt={closing.imageAlt} size={720} loading="lazy" />
          </span>
          <figcaption className="pricing-closing__caption ui-caption">
            {format(closing.caption, { tissue: organ.tissue })}
          </figcaption>
        </figure>

        <div className="pricing-closing__text" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <p className="ui-eyebrow">{closing.eyebrow}</p>
          <h2 id="pricing-closing-title" className="ui-h2">
            {closing.title}
          </h2>
          <p className="ui-lede">{closing.lede}</p>
          <div className="pricing-actions">
            <ButtonLink href={localeHref(locale, "signUp")} arrow>
              {closing.getStarted}
            </ButtonLink>
            <ButtonLink href={localeHref(locale, "explore")} variant="secondary">
              {site.common.actions.exploreBody}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
