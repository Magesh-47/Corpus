import { ButtonLink } from "../../ui/Button";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";

/** A quiet last page: the opening plate again, as a faint drawing under the words. */
export function Closing({ locale, copy }: { locale: string; copy: SiteDictionary["marketing"]["closing"] }) {
  return (
    <section className="ui-section home-closing" aria-labelledby="home-closing-title">
      <div className="ui-container home-closing__inner">
        <img
          className="home-closing__drawing"
          src="/hero/figure.webp"
          alt=""
          width={614}
          height={970}
          loading="lazy"
          decoding="async"
        />
        <h2 id="home-closing-title" className="ui-display home-closing__title" data-reveal>
          {copy.title}
        </h2>
        <p className="home-closing__line" data-reveal style={revealDelay(120)}>
          {copy.line}
        </p>
        <div data-reveal style={revealDelay(240)}>
          <ButtonLink href={localeHref(locale, "explore")} arrow>
            {copy.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
