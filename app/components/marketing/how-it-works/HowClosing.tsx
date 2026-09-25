import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import { localeHref } from "../../../lib/routes";
import type { HowCopy, Organs } from "./types";

/** The close: a single statement, and the door into Explore. */
export function HowClosing({ locale, copy, organs }: { locale: string; copy: HowCopy; organs: Organs }) {
  const { closing } = copy;
  return (
    <section className="how-closing ui-tone-deep" aria-labelledby="how-closing-title">
      <div className="ui-container how-closing__inner" data-reveal>
        <div className="how-art how-art--organ how-closing__art">
          <OrganArt organ={organs.eyeball} asset="organ" alt="" size={720} loading="lazy" />
        </div>
        <h2 id="how-closing-title" className="ui-display how-closing__title">
          <span>{closing.titleStart}</span> <em>{closing.titleEnd}</em>
        </h2>
        <ButtonLink href={localeHref(locale, "explore")} arrow className="how-closing__action">
          {closing.action}
        </ButtonLink>
      </div>
    </section>
  );
}
