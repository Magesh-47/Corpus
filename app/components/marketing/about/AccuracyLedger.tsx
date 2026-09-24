import type { SiteDictionary } from "../../../i18n/site";
import type { Hotspot, Organ } from "../../../i18n/merge";

type Copy = SiteDictionary["about"]["chapters"]["accuracy"];

/**
 * A short excerpt of the structure index — localized label beside its fixed
 * Latin term — followed by what Corpus is, and what it is not.
 */
export function AccuracyLedger({ copy, entries }: { copy: Copy; entries: { organ: Organ; hotspot: Hotspot }[] }) {
  return (
    <div className="about-ledger">
      <figure className="about-index" data-reveal>
        <figcaption className="about-index__head">
          <span className="about-index__title">{copy.index.title}</span>
          <span className="ui-caption">{copy.index.caption}</span>
        </figcaption>
        <table className="about-index__table">
          <thead>
            <tr>
              <th scope="col">{copy.index.structure}</th>
              <th scope="col" className="about-index__organ-col">
                {copy.index.organ}
              </th>
              <th scope="col">{copy.index.term}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(({ organ, hotspot }) => (
              <tr key={`${organ.id}-${hotspot.id}`}>
                <th scope="row">{hotspot.label}</th>
                <td className="about-index__organ-col">{organ.name}</td>
                <td className="ui-latin about-index__term" lang="la">
                  {hotspot.ta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </figure>

      <div className="about-commitments">
        <ol className="about-commitments__list">
          {Object.entries(copy.commitments).map(([key, item], index) => (
            <li
              key={key}
              className={`about-commitments__item${key === "notClinical" ? " about-commitments__item--notice" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <span className="about-commitments__number" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="about-commitments__title">{item.title}</h3>
              <p className="ui-body">{item.body}</p>
            </li>
          ))}
        </ol>
        <p className="about-commitments__note" data-reveal>
          {copy.note}
        </p>
      </div>
    </div>
  );
}
