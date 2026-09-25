import { locales } from "../../../i18n/config";
import { fontClassName } from "../../../i18n/fonts";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { Lines } from "./shared";

type Copy = SiteDictionary["marketing"]["languages"];

/**
 * A typographic wall of the twelve languages, each name set in its own script
 * and direction and linking to this page in that language. Plain anchors: a
 * new language swaps the document's lang, dir and fonts, so it is a real load.
 */
export function LanguageSection({ current, copy, latinNames }: { current: string; copy: Copy; latinNames: string[] }) {
  const endonyms: Record<string, string> = copy.endonyms;

  return (
    <section className="ui-section home-languages" aria-labelledby="home-languages-title">
      <div className="ui-container">
        <header className="home-languages__header">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-languages-title" className="ui-h2" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(140)}>
            {copy.lede}
          </p>
        </header>

        <ul className="home-wall" aria-label={copy.wallLabel} data-reveal style={revealDelay(120)}>
          {locales.map((locale, index) => (
            <li key={locale.code} className={`home-wall__item${locale.dir === "rtl" ? " home-wall__item--rtl" : ""}`}>
              <a
                href={localeHref(locale.code, "home")}
                lang={locale.code}
                hrefLang={locale.code}
                dir={locale.dir}
                aria-current={locale.code === current ? "true" : undefined}
                className={fontClassName(locale.script)}
              >
                <span className="home-wall__code" dir="ltr" aria-hidden>
                  {String(index + 1).padStart(2, "0")} {locale.code.toUpperCase()}
                </span>
                <span className="home-wall__name">{endonyms[locale.code] ?? locale.nativeName}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="home-languages__foot" data-reveal>
          <p className="home-languages__rtl">
            <span className="home-languages__arrow" aria-hidden>
              ←
            </span>
            {copy.rtlNote}
          </p>
          <p className="home-languages__latin">
            <span className="ui-latin" lang="la" dir="ltr">
              {latinNames.join(" · ")}
            </span>
            <span>{copy.latinNote}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
