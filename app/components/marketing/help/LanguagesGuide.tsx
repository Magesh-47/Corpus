import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { HelpSection, type HelpContext } from "./shared";

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

export function LanguagesGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.languages;
  const nameOf = languageNames(ctx.locale.code);
  return (
    <HelpSection ctx={ctx} sectionKey="languages">
      <p className="ui-lede help-intro" data-reveal>
        {format(copy.intro, { count: ctx.num(locales.length) })}
      </p>

      {/* Full document loads rather than client navigation: a new language
          swaps the root layout's lang, dir and fonts. */}
      <ul className="help-languages" aria-label={copy.listLabel} data-reveal>
        {locales.map((entry) => {
          const current = entry.code === ctx.locale.code;
          return (
            <li key={entry.code} className="help-languages__item">
              <a
                href={`${localeHref(entry.code, "help")}#languages`}
                hrefLang={entry.code}
                className="help-languages__link"
                aria-current={current ? "page" : undefined}
              >
                <span className="help-languages__native" lang={entry.code} dir={entry.dir}>
                  {entry.nativeName}
                </span>
                <span className="help-languages__local">
                  {current ? copy.current : nameOf(entry.code, entry.englishName)}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="help-pair" data-reveal>
        <div>
          <h3 className="help-pair__title">{copy.switchTitle}</h3>
          <p className="ui-body">{copy.switchBody}</p>
        </div>
        <div>
          <p className="ui-body">{copy.rtl}</p>
          <p className="ui-body">{copy.fallback}</p>
        </div>
      </div>
    </HelpSection>
  );
}
