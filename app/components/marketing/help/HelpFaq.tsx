import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "../../ui/Accordion";
import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { HelpFaqStatus } from "./HelpFaqStatus";
import { CONTACT_ID, FAQ_ID, languageNames, type HelpContext } from "./shared";

type FaqKey = keyof HelpContext["help"]["faq"];
type LinkKey = keyof HelpContext["help"]["faqLinks"];

/** The values the answers interpolate: live Explore labels and the language list. */
export function faqValues(ctx: HelpContext) {
  const nameOf = languageNames(ctx.locale.code);
  const list = new Intl.ListFormat(ctx.locale.code, { type: "conjunction" }).format(
    locales.map((entry) => nameOf(entry.code, entry.englishName)),
  );
  return {
    count: ctx.num(locales.length),
    list,
    reset: ctx.ui.tools.reset,
    zoom: ctx.ui.tools.zoom,
    isolate: ctx.ui.tools.isolate,
  };
}

export const faqItemId = (key: string) => `faq-${key}`;

/** Where an answer can take the reader next — only real destinations. */
function followUps(ctx: HelpContext): Partial<Record<FaqKey, { link: LinkKey; href: string; internal?: boolean }>> {
  return {
    exploreOrgan: { link: "explore", href: localeHref(ctx.locale.code, "explore") },
    accuracy: { link: "report", href: `#${CONTACT_ID}`, internal: true },
  };
}

export function HelpFaq({ ctx }: { ctx: HelpContext }) {
  const { faq, faqLinks, faqHeading, search } = ctx.help;
  const values = faqValues(ctx);
  const links = followUps(ctx);

  const items = Object.entries(faq).map(([key, entry]) => {
    const next = links[key as FaqKey];
    return {
      id: faqItemId(key),
      summary: entry.q,
      children: (
        <>
          <p>{format(entry.a, values)}</p>
          {next &&
            (next.internal ? (
              <a href={next.href} className="ui-button ui-button--text help-accordion__link">
                {faqLinks[next.link]}
                <ArrowRight className="ui-arrow" size={15} strokeWidth={1.75} aria-hidden />
              </a>
            ) : (
              <Link href={next.href} className="ui-button ui-button--text help-accordion__link">
                {faqLinks[next.link]}
                <ArrowRight className="ui-arrow" size={15} strokeWidth={1.75} aria-hidden />
              </Link>
            ))}
        </>
      ),
    };
  });

  return (
    <section id={FAQ_ID} aria-labelledby={`${FAQ_ID}-title`} className="help-guide help-faq">
      <div className="ui-container help-guide__inner">
        <header className="help-guide__header" data-reveal>
          <h2 id={`${FAQ_ID}-title`} className="ui-h2 help-guide__title">
            {faqHeading}
          </h2>
          <HelpFaqStatus copy={search} total={items.length} locale={ctx.locale.code} />
        </header>
        <div className="help-guide__body" data-reveal>
          <Accordion block="help-accordion" items={items} />
        </div>
      </div>
    </section>
  );
}
