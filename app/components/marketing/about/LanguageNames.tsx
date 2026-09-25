import type { CSSProperties } from "react";

export type LanguageName = { code: string; nativeName: string; name: string; dir: "ltr" | "rtl" };

/**
 * One structure named in every language Explore ships, read from each locale's
 * own organ dictionary, hanging from the single Latin term that anchors them.
 */
export function LanguageNames({
  title,
  caption,
  names,
  latin,
}: {
  title: string;
  caption: string;
  names: LanguageName[];
  latin: string;
}) {
  return (
    <figure className="about-names">
      <div className="about-names__root" data-reveal>
        <span className="ui-label">{title}</span>
        <span className="ui-latin about-names__latin" lang="la">
          {latin}
        </span>
      </div>
      <ul className="about-names__list">
        {names.map((entry, index) => (
          <li
            key={entry.code}
            className="about-names__item"
            data-reveal
            style={{ "--reveal-delay": `${(index % 3) * 70}ms` } as CSSProperties}
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
      <figcaption className="ui-caption about-names__caption">{caption}</figcaption>
    </figure>
  );
}
