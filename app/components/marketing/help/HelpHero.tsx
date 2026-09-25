import { OrganArt } from "../../anatomy/OrganArt";
import { HelpSearch, type SearchEntry } from "./HelpSearch";
import type { HelpContext } from "./shared";

/** The eye stands at the front of the guide: a book about looking closely. */
const PLATE_ORGAN = "eyeball";

export function HelpHero({ ctx, entries }: { ctx: HelpContext; entries: SearchEntry[] }) {
  const { hero, search } = ctx.help;
  const plate = ctx.organs.find((organ) => organ.id === PLATE_ORGAN)!;

  return (
    <section className="help-hero" aria-labelledby="help-title">
      <div className="ui-container help-hero__inner">
        <div className="help-hero__text">
          <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
          <h1 id="help-title" className="ui-display help-hero__title ui-rise" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
            {hero.title}
          </h1>
          <div className="ui-rise" style={{ "--rise-delay": "160ms" } as React.CSSProperties}>
            <HelpSearch entries={entries} copy={search} locale={ctx.locale.code} />
          </div>
        </div>

        <figure className="help-plate ui-rise" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
          <div className="help-plate__art">
            <OrganArt organ={plate} asset="organ" alt={hero.plate.alt} size={560} loading="eager" />
          </div>
          <figcaption className="help-plate__caption">
            <span className="help-plate__name">{plate.name}</span>
            <span className="ui-latin help-plate__latin" lang="la">
              {plate.scientificName}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
