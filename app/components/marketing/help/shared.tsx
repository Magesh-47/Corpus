import type { ReactNode } from "react";
import type { LocaleConfig } from "../../../i18n/config";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import type { UiDictionary } from "../../../i18n/types";

export type HelpCopy = SiteDictionary["help"];

/** Everything a help section may need: its own copy, the app's live labels
 *  (so instructions name controls exactly as Explore shows them) and organs. */
export type HelpContext = {
  locale: LocaleConfig;
  help: HelpCopy;
  site: SiteDictionary;
  ui: UiDictionary;
  organs: Organ[];
  /** Locale-aware numerals — Arabic gets Arabic-Indic digits, for example. */
  num: (value: number, pad?: number) => string;
};

/** The order of the page, and the anchor each section is reached by. */
export const HELP_SECTIONS = [
  { key: "gettingStarted", id: "getting-started" },
  { key: "viewer", id: "viewer" },
  { key: "exploring", id: "exploring" },
  { key: "practice", id: "practice" },
  { key: "languages", id: "languages" },
  { key: "account", id: "account" },
  { key: "questions", id: "questions" },
  { key: "contact", id: "contact" },
] as const satisfies ReadonlyArray<{ key: keyof HelpCopy["sections"]; id: string }>;

export type HelpSectionKey = (typeof HELP_SECTIONS)[number]["key"];

export function sectionId(key: HelpSectionKey) {
  return HELP_SECTIONS.find((section) => section.key === key)!.id;
}

export function numberFormatter(code: string) {
  const cache = new Map<number, Intl.NumberFormat>();
  return (value: number, pad = 1) => {
    if (!cache.has(pad)) cache.set(pad, new Intl.NumberFormat(code, { minimumIntegerDigits: pad, useGrouping: false }));
    return cache.get(pad)!.format(value);
  };
}

/**
 * One numbered chapter of the help centre: a labelled region with a folio
 * number above its heading, like a chapter opening in a printed guide.
 */
export function HelpSection({
  ctx,
  sectionKey,
  className,
  children,
}: {
  ctx: HelpContext;
  sectionKey: HelpSectionKey;
  className?: string;
  children: ReactNode;
}) {
  const id = sectionId(sectionKey);
  const index = HELP_SECTIONS.findIndex((section) => section.key === sectionKey);
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={["help-section", className].filter(Boolean).join(" ")}>
      <header className="help-section__header" data-reveal>
        <span className="help-section__number" aria-hidden>
          {ctx.num(index + 1, 2)}
        </span>
        <h2 id={`${id}-title`} className="ui-h2 help-section__title">
          {ctx.help.sections[sectionKey]}
        </h2>
      </header>
      {children}
    </section>
  );
}
