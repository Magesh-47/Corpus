import { ButtonLink } from "../../ui/Button";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { Lines, plateNumber } from "./shared";

type Copy = SiteDictionary["marketing"]["audience"];
type Group = keyof Copy["groups"];

/** Three readers, three open columns divided by hairlines. */
export function Audience({ locale, copy }: { locale: string; copy: Copy }) {
  const hrefs: Record<Group, string> = {
    students: localeHref(locale, "explore"),
    // An informational destination, not a product: the education notes on pricing.
    educators: `${localeHref(locale, "pricing")}#education`,
    curious: localeHref(locale, "explore"),
  };

  return (
    <section className="ui-section home-audience" aria-labelledby="home-audience-title">
      <div className="ui-container">
        <header className="home-audience__header">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-audience-title" className="ui-h2" data-reveal>
            <Lines text={copy.title} />
          </h2>
        </header>

        <ul className="home-audience__groups">
          {(Object.entries(copy.groups) as [Group, Copy["groups"][Group]][]).map(([key, group], index) => (
            <li key={key} className="home-audience__group" data-reveal style={revealDelay(index * 120)}>
              <span className="home-audience__number" dir="ltr" aria-hidden>
                {plateNumber(index + 1)}
              </span>
              <h3 className="home-audience__title">{group.title}</h3>
              <p className="ui-body">{group.body}</p>
              <ButtonLink href={hrefs[key]} variant="text" arrow className="home-audience__cta">
                {group.cta}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
