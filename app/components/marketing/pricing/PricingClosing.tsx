import { ButtonLink } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { OrganArt } from "../../anatomy/OrganArt";
import { format } from "../../../i18n/types";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";

/**
 * The last word, and a bookend to the hero: the page opens on a block of skin
 * and closes on the same skin under the microscope — as deep as Corpus goes.
 */
export function PricingClosing({ locale, site, organ }: { locale: string; site: SiteDictionary; organ: Organ }) {
  const { closing } = site.pricing;

  return (
    <section className="pricing-closing ui-section" aria-labelledby="pricing-closing-title">
      <Container className="pricing-closing__grid">
        <div className="pricing-closing__text" data-reveal>
          <p className="ui-eyebrow">{closing.eyebrow}</p>
          <h2 id="pricing-closing-title" className="ui-h2 pricing-closing__title">
            <span className="pricing-closing__lead">{closing.titleLead}</span>{" "}
            <span className="pricing-closing__rest">{closing.titleRest}</span>
          </h2>
          <ButtonLink href={localeHref(locale, "explore")} arrow>
            {closing.cta}
          </ButtonLink>
        </div>

        <figure className="pricing-closing__figure" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <span className="pricing-closing__art">
            <OrganArt organ={organ} asset="microscopic" alt={closing.imageAlt} size={720} loading="lazy" />
          </span>
          <figcaption className="pricing-closing__caption ui-caption">
            {format(closing.caption, { organ: organ.name, tissue: organ.tissue })}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
