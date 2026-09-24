import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import { localeHref } from "../../../lib/routes";
import type { HowSectionProps } from "./types";

/** The close: back to looking — the eye, and the door into Explore. */
export function HowCta({ locale, copy, organs, exploreLabel }: HowSectionProps & { exploreLabel: string }) {
  const { cta } = copy;
  return (
    <section className="how-cta" aria-labelledby="how-cta-title">
      <div className="ui-container ui-container--narrow how-cta__inner" data-reveal>
        <div className="how-art how-art--organ how-cta__art">
          <OrganArt organ={organs.eyeball} asset="organ" alt="" size={720} />
        </div>
        <p className="ui-eyebrow">{cta.eyebrow}</p>
        <h2 id="how-cta-title" className="ui-display how-cta__title">
          {cta.title}
        </h2>
        <p className="ui-lede how-cta__body">{cta.body}</p>
        <div className="how-cta__actions">
          <ButtonLink href={localeHref(locale, "explore")} arrow>
            {exploreLabel}
          </ButtonLink>
          <ButtonLink href={localeHref(locale, "explore", { organ: "eyeball" })} variant="secondary">
            {cta.organLink}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
