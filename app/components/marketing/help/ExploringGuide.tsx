import Link from "next/link";
import { OrganArt } from "../../anatomy/OrganArt";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { GuideSection, type HelpContext } from "./shared";

export function ExploringGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.exploring;
  return (
    <GuideSection ctx={ctx} guide="exploring" title={copy.title}>
      <p className="ui-lede help-intro" data-reveal>
        {format(copy.intro, { count: ctx.num(ctx.organs.length) })}
      </p>

      <dl className="help-parts" data-reveal>
        {Object.entries(copy.parts).map(([key, part]) => (
          <div key={key} className="help-parts__item">
            <dt>{part.title}</dt>
            <dd className="ui-body">{part.body}</dd>
          </div>
        ))}
      </dl>

      <div className="help-sub" data-reveal>
        <h3 className="help-sub__title">{copy.catalogueTitle}</h3>
        {/* Derived from anatomy-data and the organ dictionary, so the list is
            always exactly what Explore offers, in the reader's language. */}
        <ul className="help-catalogue">
          {ctx.organs.map((organ) => (
            <li key={organ.id}>
              <Link
                href={localeHref(ctx.locale.code, "explore", { organ: organ.id })}
                className="help-catalogue__link"
                aria-label={format(copy.catalogueLink, { organ: organ.name })}
              >
                <span className="help-catalogue__art" style={{ "--art-accent": organ.accent } as React.CSSProperties}>
                  <OrganArt organ={organ} asset="thumb" alt="" size={120} loading="lazy" />
                </span>
                <span className="help-catalogue__text">
                  <span className="help-catalogue__name">{organ.name}</span>
                  <span className="ui-latin help-catalogue__latin" lang="la">
                    {organ.scientificName}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="help-footnote" data-reveal>
        {copy.clinical}
      </p>
    </GuideSection>
  );
}
