import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { SectionMark, plateNumber } from "./SectionMark";

/**
 * A catalogue of plates. Every fact on a plate — name, system, description,
 * Latin name — is read from the organ data Explore itself uses; this component
 * only arranges it.
 */
export function OrganShowcase({
  locale,
  intl,
  copy,
  organs,
  others,
}: {
  locale: string;
  /** BCP-47 tag, for joining the list of remaining organs. */
  intl: string;
  copy: SiteDictionary["marketing"]["showcase"];
  /** The six featured organs, in order. */
  organs: Organ[];
  /** The rest of the collection, named in a closing line. */
  others: Organ[];
}) {
  const remaining = new Intl.ListFormat(intl, { style: "long", type: "conjunction" }).format(
    others.map((organ) => organ.name),
  );

  return (
    <section className="ui-section home-showcase" aria-labelledby="home-showcase-title">
      <div className="ui-container">
        <SectionMark number={2}>{copy.mark}</SectionMark>

        <header className="home-showcase__header">
          <h2 id="home-showcase-title" className="ui-h2" data-reveal>
            {copy.title}
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(120)}>
            {copy.lede}
          </p>
        </header>

        <ol className="home-specimens">
          {organs.map((organ, index) => (
            <li
              key={organ.id}
              className="home-specimen"
              data-reveal
              style={{ ...revealDelay((index % 3) * 120), "--specimen-accent": organ.accent } as React.CSSProperties}
            >
              <article className="home-specimen__plate">
                <p className="home-specimen__meta">
                  <span>{format(copy.plate, { number: plateNumber(index + 1) })}</span>
                  <span>{organ.system}</span>
                </p>
                <div className="home-specimen__art">
                  <OrganArt organ={organ} asset="organ" alt="" size={720} loading="lazy" />
                </div>
                <h3 className="home-specimen__name">
                  {/* One link per plate, stretched over the whole plate so the art is clickable too. */}
                  <Link className="home-specimen__link" href={localeHref(locale, "explore", { organ: organ.id })}>
                    {organ.name}
                  </Link>
                </h3>
                <p className="home-specimen__latin ui-latin" lang="la">
                  {organ.scientificName}
                </p>
                <p className="home-specimen__description">{organ.description}</p>
                <span className="home-specimen__cta" aria-hidden>
                  {copy.explore}
                  <ArrowRight className="ui-arrow" size={15} strokeWidth={1.75} />
                </span>
              </article>
            </li>
          ))}
        </ol>

        <div className="home-showcase__footer" data-reveal>
          <p className="home-showcase__more">
            {format(copy.more, { organs: remaining })}{" "}
            <ButtonLink href={localeHref(locale, "explore")} variant="text" arrow>
              {copy.browseAll}
            </ButtonLink>
          </p>
          <p className="ui-caption">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
