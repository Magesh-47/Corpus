import { ButtonLink } from "../../ui/Button";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { GuideSection, type HelpContext } from "./shared";

export function GettingStarted({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.gettingStarted;
  return (
    <GuideSection ctx={ctx} guide="gettingStarted" title={copy.title}>
      <p className="ui-lede help-intro" data-reveal>
        {copy.intro}
      </p>
      <ol className="help-steps" data-reveal>
        {Object.entries(copy.steps).map(([key, step], index) => (
          <li key={key} className="help-steps__item">
            <span className="help-steps__number" aria-hidden>
              {ctx.num(index + 1)}
            </span>
            <h3 className="help-steps__title">{step.title}</h3>
            <p className="ui-body help-steps__body">{format(step.body, { explore: ctx.site.navigation.links.explore })}</p>
          </li>
        ))}
      </ol>
      <div className="help-actions" data-reveal>
        <ButtonLink href={localeHref(ctx.locale.code, "explore")} arrow>
          {copy.cta}
        </ButtonLink>
      </div>
    </GuideSection>
  );
}
