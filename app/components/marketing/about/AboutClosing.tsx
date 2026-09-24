import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { localeHref } from "../../../lib/routes";
import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import { Emphasis } from "./Emphasis";

type Copy = SiteDictionary["about"]["closing"];

/** The end of the essay, and the way into Explore. */
export function AboutClosing({
  copy,
  locale,
  organ,
  exploreLabel,
}: {
  copy: Copy;
  locale: string;
  organ: Organ;
  exploreLabel: string;
}) {
  return (
    <section className="about-closing" aria-labelledby="about-closing-title">
      <div className="ui-container about-closing__inner">
        <div className="about-closing__art" aria-hidden data-reveal>
          <OrganArt organ={organ} asset="organ" alt="" size={720} />
        </div>
        <div className="about-closing__text">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="about-closing-title" className="ui-h2 about-closing__title" data-reveal>
            <Emphasis text={copy.title} />
          </h2>
          <p className="ui-lede" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {copy.lede}
          </p>
          <div className="about-closing__actions" data-reveal style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
            <ButtonLink href={localeHref(locale, "explore", { organ: organ.id })} arrow>
              {exploreLabel}
            </ButtonLink>
            <ButtonLink href={localeHref(locale, "howItWorks")} variant="text">
              {copy.secondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
