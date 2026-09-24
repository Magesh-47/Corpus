import { ButtonLink } from "../../ui/Button";
import { StatusTag } from "../../ui/StatusTag";
import { localeHref } from "../../../lib/routes";
import { HelpSection, type HelpContext } from "./shared";

/** Said plainly: there are no accounts yet, and none is needed. */
export function AccountNote({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.account;
  return (
    <HelpSection ctx={ctx} sectionKey="account" className="help-section--account">
      <div className="help-account" data-reveal>
        <StatusTag tone="soon">{copy.status}</StatusTag>
        <p className="ui-lede">{copy.body}</p>
        <p className="ui-body">{copy.saved}</p>
        <ButtonLink href={localeHref(ctx.locale.code, "explore")} variant="secondary" arrow>
          {copy.cta}
        </ButtonLink>
      </div>
    </HelpSection>
  );
}
