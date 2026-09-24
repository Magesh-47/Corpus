import Link from "next/link";
import { OrganArt } from "../../anatomy/OrganArt";
import { Container } from "../../ui/Container";
import { SectionHeader } from "../../ui/SectionHeader";
import { format } from "../../../i18n/types";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { planNumber } from "./plans";

/**
 * What "Free" actually contains, shown rather than told: every organ in the
 * anatomy data as a numbered atlas plate that opens that organ in Explore.
 * Names, Latin terms and structure counts all come from the anatomy data.
 */
export function FreeCollection({ locale, site, organs }: { locale: string; site: SiteDictionary; organs: Organ[] }) {
  const { collection } = site.pricing;

  return (
    <section className="pricing-collection ui-section" aria-labelledby="pricing-collection-title">
      <Container className="pricing-collection__grid">
        <div className="pricing-collection__intro">
          <SectionHeader
            id="pricing-collection-title"
            eyebrow={collection.eyebrow}
            title={collection.title}
            lede={collection.lede}
          />
          <p className="pricing-collection__footnote ui-caption">{collection.footnote}</p>
        </div>

        <ol className="pricing-plates">
          {organs.map((organ, index) => (
            <li
              key={organ.id}
              className="pricing-plate"
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
            >
              <Link
                className="pricing-plate__link"
                href={localeHref(locale, "explore", { organ: organ.id })}
                aria-label={format(collection.openOrgan, { organ: organ.name })}
              >
                <span className="pricing-plate__number" aria-hidden="true">
                  {format(collection.plateLabel, { number: planNumber(index) })}
                </span>
                <span className="pricing-plate__art" aria-hidden="true">
                  <OrganArt organ={organ} asset="organ" alt="" size={720} loading="lazy" />
                </span>
                <span className="pricing-plate__caption">
                  <span className="pricing-plate__name">{organ.name}</span>
                  <span className="pricing-plate__latin ui-latin" lang="la">
                    {organ.scientificName}
                  </span>
                  <span className="pricing-plate__count">
                    {format(collection.structures, { count: String(organ.hotspots.length) })}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
