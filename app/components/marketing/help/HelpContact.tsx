import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../../lib/site-config";
import { CONTACT_ID, type HelpContext } from "./shared";

/**
 * The one real support channel: the project's public GitHub issue tracker.
 * No form and no address — nothing here pretends to send a message.
 */
export function HelpContact({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.contact;
  return (
    <section id={CONTACT_ID} aria-labelledby={`${CONTACT_ID}-title`} className="help-contact ui-tone-ink">
      <div className="ui-container help-contact__inner">
        <h2 id={`${CONTACT_ID}-title`} className="ui-h2 help-contact__title" data-reveal>
          {copy.title}
        </h2>
        <div className="help-contact__body" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <p className="ui-statement help-contact__lede">{copy.body}</p>
          <a
            href={siteConfig.issuesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-button ui-button--primary help-contact__cta"
            aria-describedby="help-contact-description"
          >
            {copy.cta}
            <ArrowRight className="ui-arrow" size={16} strokeWidth={1.75} aria-hidden />
          </a>
          <p id="help-contact-description" className="help-contact__description">
            {copy.ctaDescription}
          </p>
          <p className="help-contact__note">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
