import type { LocaleConfig } from "../../../i18n/config";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { SectionMark } from "./SectionMark";

export type LexiconEntry = {
  locale: LocaleConfig;
  /** The structure's label in that locale, from its organs dictionary. */
  label: string;
  /** Font classes for the locale's script, so each label is set in its own face. */
  fontClass: string;
};

/**
 * One real structure — its stable ID, its Terminologia Anatomica term and its
 * label in every locale — read from the same data Explore renders. Each row's
 * language name links to this page in that language.
 */
export function LanguageSection({
  current,
  copy,
  structureId,
  ta,
  entries,
}: {
  current: string;
  copy: SiteDictionary["marketing"]["languages"];
  structureId: string;
  ta: string;
  entries: LexiconEntry[];
}) {
  const { specimen } = copy;

  return (
    <section className="ui-section home-languages" aria-labelledby="home-languages-title">
      <div className="ui-container">
        <SectionMark number={5}>{copy.mark}</SectionMark>

        <div className="home-languages__grid">
          <div className="home-languages__intro">
            <h2 id="home-languages-title" className="ui-h2" data-reveal>
              {copy.title}
            </h2>
            <p className="ui-lede" data-reveal style={revealDelay(120)}>
              {copy.lede}
            </p>
            <dl className="home-languages__points">
              {Object.entries(copy.points).map(([key, point], index) => (
                <div key={key} className="home-languages__point" data-reveal style={revealDelay(index * 100)}>
                  <dt>{point.title}</dt>
                  <dd>{point.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="home-lexicon" data-reveal style={revealDelay(160)}>
            <div className="home-lexicon__head">
              <p className="home-lexicon__caption">{specimen.caption}</p>
              <dl className="home-lexicon__keys">
                <div>
                  <dt>{specimen.idLabel}</dt>
                  <dd>
                    <code className="home-lexicon__id" dir="ltr">
                      {structureId}
                    </code>
                  </dd>
                </div>
                <div>
                  <dt>{specimen.taLabel}</dt>
                  <dd className="home-lexicon__ta ui-latin" lang="la" dir="ltr">
                    {ta}
                  </dd>
                </div>
              </dl>
            </div>

            <table className="home-lexicon__table">
              <caption className="home-visually-hidden">{specimen.caption}</caption>
              <thead className="home-visually-hidden">
                <tr>
                  <th scope="col">{specimen.languageColumn}</th>
                  <th scope="col">{specimen.labelColumn}</th>
                </tr>
              </thead>
              <tbody>
                {entries.map(({ locale, label, fontClass }) => (
                  <tr key={locale.code} className="home-lexicon__row">
                    <th scope="row" className="home-lexicon__language">
                      <a
                        href={localeHref(locale.code, "home")}
                        lang={locale.code}
                        hrefLang={locale.code}
                        dir={locale.dir}
                        aria-current={locale.code === current ? "true" : undefined}
                      >
                        {locale.nativeName}
                      </a>
                    </th>
                    <td className="home-lexicon__label">
                      <span lang={locale.code} dir={locale.dir} className={fontClass}>
                        {label}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        </div>
      </div>
    </section>
  );
}
