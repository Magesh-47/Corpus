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

export type GuideKey = keyof HelpCopy["categories"]["items"];

/** The six guides, in page order, with the anchor each one is reached by. */
export const GUIDES = [
  { key: "gettingStarted", id: "getting-started" },
  { key: "viewer", id: "viewer" },
  { key: "exploring", id: "exploring" },
  { key: "practice", id: "practice" },
  { key: "languages", id: "languages" },
  { key: "account", id: "account" },
] as const satisfies ReadonlyArray<{ key: GuideKey; id: string }>;

export const FAQ_ID = "questions";
export const CONTACT_ID = "contact";

export function guideId(key: GuideKey) {
  return GUIDES.find((guide) => guide.key === key)!.id;
}

export function numberFormatter(code: string) {
  const cache = new Map<number, Intl.NumberFormat>();
  return (value: number, pad = 1) => {
    if (!cache.has(pad)) cache.set(pad, new Intl.NumberFormat(code, { minimumIntegerDigits: pad, useGrouping: false }));
    return cache.get(pad)!.format(value);
  };
}

/** A language's name in the reader's own language, e.g. "Spanish" or "الإسبانية". */
export function languageNames(code: string) {
  let names: Intl.DisplayNames | null = null;
  try {
    names = new Intl.DisplayNames([code], { type: "language" });
  } catch {
    names = null;
  }
  return (target: string, fallback: string) => names?.of(target) ?? fallback;
}

/**
 * One guide: its number, topic and title in a narrow column that stays in
 * view while the reader moves through the content beside it.
 */
export function GuideSection({
  ctx,
  guide,
  title,
  children,
}: {
  ctx: HelpContext;
  guide: GuideKey;
  title: string;
  children: ReactNode;
}) {
  const id = guideId(guide);
  const index = GUIDES.findIndex((item) => item.key === guide);
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="help-guide">
      <div className="ui-container help-guide__inner">
        <header className="help-guide__header" data-reveal>
          <p className="help-guide__kicker">
            <span className="help-guide__number" aria-hidden>
              {ctx.num(index + 1, 2)}
            </span>
            <span>{ctx.help.categories.items[guide].label}</span>
          </p>
          <h2 id={`${id}-title`} className="ui-h2 help-guide__title">
            {title}
          </h2>
        </header>
        <div className="help-guide__body">{children}</div>
      </div>
    </section>
  );
}
