import { ButtonLink } from "../../ui/Button";
import { StatusTag } from "../../ui/StatusTag";
import { localeHref } from "../../../lib/routes";
import { GuideSection, type HelpContext } from "./shared";

/** Said plainly: there are no accounts yet, and none is needed. */
export function AccountGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.account;
  return (
    <GuideSection ctx={ctx} guide="account" title={copy.title}>
      <div className="help-account" data-reveal>
        <StatusTag tone="soon">{ctx.site.common.status.comingSoon}</StatusTag>
        <p className="ui-lede">{copy.body}</p>
        <p className="ui-body">{copy.saved}</p>
        <ButtonLink href={localeHref(ctx.locale.code, "explore")} variant="secondary" arrow>
          {copy.cta}
        </ButtonLink>
      </div>
    </GuideSection>
  );
}
