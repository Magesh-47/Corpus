import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { OrganArt } from "../../anatomy/OrganArt";

type Copy = SiteDictionary["about"]["chapters"]["exploration"]["collection"];

/** The organs Explore holds today, as a catalogue index that deep-links each one. */
export function Collection({ copy, organs, locale }: { copy: Copy; organs: Organ[]; locale: string }) {
  return (
    <div className="about-collection">
      <div className="about-collection__head" data-reveal>
        <h3 className="about-collection__title">{copy.title}</h3>
        <p className="ui-caption">{format(copy.caption, { count: String(organs.length) })}</p>
      </div>
      <ol className="about-collection__list">
        {organs.map((organ, index) => (
          <li key={organ.id} data-reveal style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties}>
            <Link
              href={localeHref(locale, "explore", { organ: organ.id })}
              className="about-collection__link"
              aria-label={format(copy.open, { organ: organ.name })}
            >
              <span className="about-collection__thumb">
                <OrganArt organ={organ} asset="thumb" alt="" size={72} loading="lazy" />
              </span>
              <span className="about-collection__names">
                <span className="about-collection__name">{organ.name}</span>
                <span className="ui-latin about-collection__latin" lang="la">
                  {organ.scientificName}
                </span>
              </span>
              <span className="about-collection__system">{organ.system}</span>
              <ArrowRight className="ui-arrow about-collection__arrow" size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
