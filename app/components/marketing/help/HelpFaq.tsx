import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "../../ui/Accordion";
import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { languageNames } from "./LanguagesGuide";
import { HelpSection, sectionId, type HelpContext } from "./shared";

type FaqKey = keyof HelpContext["help"]["faq"];
type LinkKey = keyof HelpContext["help"]["faqLinks"];

/** Where an answer can take the reader next — only real destinations. */
function followUps(ctx: HelpContext): Partial<Record<FaqKey, { link: LinkKey; href: string }>> {
  const code = ctx.locale.code;
  return {
    exploreOrgan: { link: "explore", href: localeHref(code, "explore") },
    free: { link: "pricing", href: localeHref(code, "pricing") },
    accuracy: { link: "report", href: `#${sectionId("contact")}` },
  };
}

export function HelpFaq({ ctx }: { ctx: HelpContext }) {
  const { faq, faqLinks } = ctx.help;
  const nameOf = languageNames(ctx.locale.code);
  const languageList = new Intl.ListFormat(ctx.locale.code, { type: "conjunction" }).format(
    locales.map((entry) => nameOf(entry.code, entry.englishName)),
  );
  const values = {
    count: ctx.num(locales.length),
    list: languageList,
    reset: ctx.ui.tools.reset,
  };
  const links = followUps(ctx);

  const items = Object.entries(faq).map(([key, entry]) => {
    const next = links[key as FaqKey];
    return {
      id: `faq-${key}`,
      summary: entry.q,
      children: (
        <>
          <p>{format(entry.a, values)}</p>
          {next && (
            <Link href={next.href} className="ui-button ui-button--text help-accordion__link">
              {faqLinks[next.link]}
              <ArrowRight className="ui-arrow" size={15} strokeWidth={1.75} aria-hidden />
            </Link>
          )}
        </>
      ),
    };
  });

  return (
    <HelpSection ctx={ctx} sectionKey="questions">
      <div data-reveal>
        <Accordion block="help-accordion" className="help-accordion--faq" items={items} />
      </div>
    </HelpSection>
  );
}
