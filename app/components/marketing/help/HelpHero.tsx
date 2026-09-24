import { OrganArt } from "../../anatomy/OrganArt";
import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import type { HelpContext } from "./shared";

/** The eye stands at the front of the guide: a book about looking closely. */
const PLATE_ORGAN = "eyeball";

export function HelpHero({ ctx }: { ctx: HelpContext }) {
  const { hero } = ctx.help;
  const plate = ctx.organs.find((organ) => organ.id === PLATE_ORGAN)!;
  const glance = [
    { key: "account", ...hero.glance.account },
    { key: "languages", term: hero.glance.languages.term, value: format(hero.glance.languages.value, { count: ctx.num(locales.length) }) },
    { key: "purpose", ...hero.glance.purpose },
  ];

  return (
    <div className="help-hero">
      <div className="ui-container help-hero__inner">
        <div className="help-hero__text">
          <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
          <h1 className="ui-display help-hero__title ui-rise" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            {hero.title}
          </h1>
          <p className="ui-lede ui-rise" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
            {hero.lede}
          </p>
        </div>

        <figure className="help-plate ui-rise" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
          <div className="help-plate__art">
            <OrganArt organ={plate} asset="organ" alt={hero.plate.alt} size={720} loading="eager" />
          </div>
          <figcaption className="help-plate__caption">
            <span className="help-plate__number">{hero.plate.number}</span>
            <span className="ui-latin help-plate__latin" lang="la">
              {plate.scientificName}
            </span>
            <span className="help-plate__note">
              {format(hero.plate.caption, { organ: plate.name, count: ctx.num(ctx.organs.length) })}
            </span>
          </figcaption>
        </figure>

        <div className="help-glance">
          <h2 className="help-glance__label">{hero.glance.label}</h2>
          <dl className="help-glance__list">
            {glance.map((item) => (
              <div key={item.key} className="help-glance__item">
                <dt>{item.term}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
