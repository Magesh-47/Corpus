import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrganArt } from "../../anatomy/OrganArt";
import type { OrganId } from "../../../lib/anatomy-data";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { Lines, plateNumber } from "./shared";

type Copy = SiteDictionary["marketing"]["collection"];
export type FeaturedId = keyof Copy["lines"] & OrganId;

/** The order of the catalogue. The first plate is set large. */
export const FEATURED: FeaturedId[] = ["heart", "brain", "lungs", "liver", "kidneys", "eyeball"];

/**
 * A catalogue of six plates. Names, systems and Latin names are read from the
 * organ data Explore itself uses; only the one-line descriptions are page copy.
 */
export function OrganShowcase({
  locale,
  intl,
  copy,
  organs,
  others,
}: {
  locale: string;
  intl: string;
  copy: Copy;
  organs: Organ[];
  others: Organ[];
}) {
  const remaining = new Intl.ListFormat(intl.replace("_", "-"), { style: "long", type: "conjunction" }).format(
    others.map((organ) => organ.name),
  );

  return (
    <section className="ui-section home-collection" aria-labelledby="home-collection-title">
      <div className="ui-container">
        <header className="home-collection__header">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-collection-title" className="ui-h2 home-collection__title" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-lede home-collection__lede" data-reveal style={revealDelay(140)}>
            {copy.lede}
          </p>
        </header>

        <ol className="home-catalogue">
          {organs.map((organ, index) => (
            <li
              key={organ.id}
              className={`home-organ home-organ--${organ.id}`}
              data-reveal
              style={{ ...revealDelay((index % 3) * 110), "--organ-accent": organ.accent } as CSSProperties}
            >
              <article className="home-organ__plate">
                <p className="home-organ__meta ui-label">
                  <span className="home-organ__number" dir="ltr">
                    {plateNumber(index + 1)}
                  </span>
                  <span>{organ.system}</span>
                </p>
                <div className="home-organ__art">
                  <OrganArt organ={organ} asset="organ" alt="" size={720} loading="lazy" />
                  {/* Appears on hover: the specimen's Latin name, drawn in like a leader line. */}
                  <span className="home-organ__note" aria-hidden>
                    <span className="home-organ__note-line" />
                    <span className="ui-latin" lang="la">
                      {organ.scientificName}
                    </span>
                  </span>
                </div>
                <div className="home-organ__text">
                  <h3 className="home-organ__name">
                    {/* One link per plate, stretched over the whole plate. */}
                    <Link className="home-organ__link" href={localeHref(locale, "explore", { organ: organ.id })}>
                      {organ.name}
                    </Link>
                  </h3>
                  <p className="home-organ__latin ui-latin" lang="la">
                    {organ.scientificName}
                  </p>
                  <p className="home-organ__line">{copy.lines[organ.id as FeaturedId]}</p>
                  <span className="home-organ__cta" aria-hidden>
                    {copy.explore}
                    <ArrowRight className="ui-arrow" size={15} strokeWidth={1.75} />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <div className="home-collection__footer" data-reveal>
          <p className="home-collection__more">{format(copy.more, { organs: remaining })}</p>
          <p className="ui-caption">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
