import type { CSSProperties } from "react";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { ButtonLink } from "../../ui/Button";

type Copy = SiteDictionary["about"]["closing"];

/** The last page of the manifesto: the anatomical bust on the dark ground, and the way in. */
export function AboutClosing({ copy, locale }: { copy: Copy; locale: string }) {
  return (
    <section className="ui-tone-ink about-closing" aria-labelledby="about-closing-title">
      <div className="ui-container about-closing__inner">
        <div className="about-closing__art" aria-hidden>
          <img src="/hero/figure.webp" alt="" width={614} height={970} loading="lazy" decoding="async" />
        </div>
        <div className="about-closing__text">
          <h2 id="about-closing-title" className="ui-display about-closing__title" data-reveal>
            <span className="about-closing__line">{copy.titleFirst}</span>{" "}
            <span className="about-closing__line">{copy.titleSecond}</span>
          </h2>
          <div className="about-closing__action" data-reveal style={{ "--reveal-delay": "160ms" } as CSSProperties}>
            <ButtonLink href={localeHref(locale, "explore")} arrow>
              {copy.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
