import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import { Container } from "../../ui/Container";
import { Annotations, type Note } from "../../ui/Editorial";
import { format } from "../../../i18n/types";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { COMPARE_ANCHOR } from "./plans";

/**
 * Where each layer sits on /anatomy/skin/organ.webp, as a percentage of the
 * image box (physical, never mirrored). Dots rest on the block's front edge;
 * leader lines run out to the left, into the plate's margin.
 */
const LAYERS: { id: string; x: number; y: number }[] = [
  { id: "epidermis", x: 18.5, y: 31 },
  { id: "dermis", x: 18.5, y: 45 },
  { id: "hypodermis", x: 18.5, y: 66 },
];

/**
 * The opening. "Choose how deeply you want to go" is answered with the one
 * organ that is literally drawn in depth: a block of skin cut down through its
 * layers, labelled from the anatomy data.
 */
export function PricingHero({ locale, site, skin }: { locale: string; site: SiteDictionary; skin: Organ }) {
  const { hero } = site.pricing;
  // The labels come from the anatomy data, so they are translated with it. The
  // alt text names the same layers, so the leader lines stay decorative.
  const notes: Note[] = LAYERS.map(({ id, x, y }) => ({
    id,
    x,
    y,
    side: "left",
    length: 44,
    label: skin.hotspots.find((hotspot) => hotspot.id === id)?.label,
  }));

  return (
    <section className="pricing-hero" aria-labelledby="pricing-title">
      <Container className="pricing-hero__grid">
        <div className="pricing-hero__text">
          <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
          <h1
            id="pricing-title"
            className="ui-display pricing-hero__title ui-rise"
            style={{ "--rise-delay": "80ms" } as React.CSSProperties}
          >
            <span className="pricing-hero__lead">{hero.titleLead}</span>{" "}
            <span className="pricing-hero__rest">{hero.titleRest}</span>
          </h1>
          <p className="ui-lede ui-rise" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
            {hero.lede}
          </p>
          <div className="pricing-actions ui-rise" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            <ButtonLink href={localeHref(locale, "explore")} arrow>
              {hero.primary}
            </ButtonLink>
            <a className="ui-button ui-button--text" href={`#${COMPARE_ANCHOR}`}>
              {hero.secondary}
            </a>
          </div>
        </div>

        <figure className="pricing-hero__plate ui-rise" style={{ "--rise-delay": "200ms" } as React.CSSProperties}>
          <p className="pricing-hero__plate-head ui-label">{format(hero.plate.label, { organ: skin.name })}</p>
          <div className="pricing-hero__stage">
            <OrganArt organ={skin} asset="organ" alt={hero.plate.alt} size={720} loading="eager" />
            <Annotations notes={notes} />
          </div>
          <figcaption className="pricing-hero__caption ui-caption">{hero.plate.caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
