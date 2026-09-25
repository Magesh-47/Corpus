import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { GuideSection, languageNames, type HelpContext } from "./shared";

export function LanguagesGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.languages;
  const nameOf = languageNames(ctx.locale.code);
  return (
    <GuideSection ctx={ctx} guide="languages" title={copy.title}>
      <p className="ui-lede help-intro" data-reveal>
        {format(copy.intro, { count: ctx.num(locales.length) })}
      </p>

      {/* Full document loads rather than client navigation: a new language
          swaps the root layout's lang, dir and fonts. */}
      <ul className="help-languages" aria-label={copy.listLabel} data-reveal>
        {locales.map((entry) => {
          const current = entry.code === ctx.locale.code;
          return (
            <li key={entry.code}>
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
        <p className="ui-body">{copy.switchBody}</p>
        <p className="ui-body">{copy.rtl}</p>
      </div>
    </GuideSection>
  );
}
