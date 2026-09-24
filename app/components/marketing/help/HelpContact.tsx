import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../../lib/site-config";
import { HelpSection, type HelpContext } from "./shared";

export function HelpContact({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.contact;
  return (
    <HelpSection ctx={ctx} sectionKey="contact" className="help-section--contact">
      <div className="help-contact">
        <div className="help-contact__lead" data-reveal>
          <p className="ui-lede">{copy.intro}</p>
          <a
            href={siteConfig.issuesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-button ui-button--primary help-contact__cta"
          >
            {copy.cta}
            <span className="help-visually-hidden"> {copy.newTab}</span>
            <ArrowUpRight className="help-contact__icon" size={16} strokeWidth={1.75} aria-hidden />
          </a>
          <p className="ui-caption">{copy.public}</p>
        </div>

        <div className="help-contact__aside" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <h3 className="help-pair__title">{copy.includeTitle}</h3>
          <ul className="help-checklist">
            {Object.entries(copy.include).map(([key, item]) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
          <p className="help-contact__medical ui-body">{copy.medical}</p>
        </div>
      </div>
    </HelpSection>
  );
}
