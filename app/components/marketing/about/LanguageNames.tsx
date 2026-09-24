import type { SiteDictionary } from "../../../i18n/site";

type Copy = SiteDictionary["about"]["chapters"]["multilingual"]["names"];

export type LanguageName = { code: string; dir: "ltr" | "rtl"; nativeName: string; name: string };

/**
 * The same structure named in every language Explore ships, read from each
 * locale's own organ dictionary, with the one Latin term that anchors them all.
 */
export function LanguageNames({ copy, names, latin }: { copy: Copy; names: LanguageName[]; latin: string }) {
  return (
    <figure className="about-names">
      <figcaption className="about-names__head" data-reveal>
        <span className="about-names__title">{copy.title}</span>
        <span className="ui-caption">{copy.caption}</span>
      </figcaption>
      <div className="about-names__body">
        <p className="about-names__latin ui-latin" lang="la" data-reveal>
          {latin}
        </p>
        <ul className="about-names__list">
          {names.map((entry, index) => (
            <li
              key={entry.code}
              data-reveal
              style={{ "--reveal-delay": `${(index % 4) * 70}ms` } as React.CSSProperties}
            >
              <span className="about-names__word" lang={entry.code} dir={entry.dir}>
                {entry.name}
              </span>
              <span className="about-names__language" lang={entry.code} dir={entry.dir}>
                {entry.nativeName}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
