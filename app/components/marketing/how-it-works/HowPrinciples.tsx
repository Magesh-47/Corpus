import { OrganArt } from "../../anatomy/OrganArt";
import { SectionHeader } from "../../ui/SectionHeader";
import { locales } from "../../../i18n/config";
import { format } from "../../../i18n/types";
import type { OrganId } from "../../../lib/anatomy-data";
import type { HowSectionProps } from "./types";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi"];

/** Why 3D matters: an essay column beside the organ placed in the body. */
export function HowWhy3d({ copy, organs }: Omit<HowSectionProps, "locale">) {
  const { why3d } = copy;
  const heart = organs.heart;
  return (
    <section className="how-why3d ui-section" aria-labelledby="how-why3d-title">
      <div className="ui-container how-why3d__grid">
        <div className="how-why3d__text">
          <SectionHeader id="how-why3d-title" eyebrow={why3d.eyebrow} title={why3d.title} lede={why3d.lede} />
          <ol className="how-numbered">
            {Object.entries(why3d.points).map(([key, point], index) => (
              <li key={key} className="how-numbered__row" data-reveal style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}>
                <span className="how-numbered__index" aria-hidden>
                  {ROMAN[index]}
                </span>
                <div>
                  <h3 className="how-numbered__title">{point.title}</h3>
                  <p className="ui-body">{point.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <figure className="how-why3d__figure" data-reveal>
          <div className="how-art how-art--organ how-why3d__art">
            <OrganArt organ={heart} asset="location" alt={why3d.figureAlt} size={720} />
          </div>
          <figcaption className="ui-caption how-figure__caption">{format(why3d.figureCaption, { organ: heart.name })}</figcaption>
          <p className="how-why3d__note">{why3d.note}</p>
        </figure>
      </div>
    </section>
  );
}

/** Why active recall matters: one statement, and the two habits side by side. */
export function HowRecall({ copy }: Pick<HowSectionProps, "copy">) {
  const { recall } = copy;
  return (
    <section className="how-recall" aria-labelledby="how-recall-title">
      <div className="ui-container how-recall__inner">
        <div className="how-recall__head">
          <p className="ui-eyebrow">{recall.eyebrow}</p>
          <h2 id="how-recall-title" className="ui-h2 how-recall__title">
            {recall.title}
          </h2>
        </div>
        <p className="ui-lede how-recall__body">{recall.body}</p>
        <div className="how-recall__contrast">
          {Object.entries(recall.contrast).map(([key, side]) => (
            <div key={key} className="how-recall__side" data-habit={key} data-reveal>
              <h3 className="how-recall__habit">{side.title}</h3>
              <p className="ui-body">{side.body}</p>
            </div>
          ))}
        </div>
        <p className="how-recall__corpus">{recall.inCorpus}</p>
      </div>
    </section>
  );
}

/** Terms shown under "Named with precision" — read from the models, never typed here. */
const TERM_SAMPLE: [OrganId, string][] = [
  ["heart", "left-ventricle"],
  ["brain", "cerebellum"],
  ["lungs", "bronchus"],
  ["kidneys", "cortex"],
  ["eyeball", "optic"],
  ["pancreas", "head"],
];

/** Why Corpus is different: a hairline register of principles. */
export function HowDifferent({ copy, organs }: Omit<HowSectionProps, "locale">) {
  const { different } = copy;
  const count = String(locales.length);
  const terms = TERM_SAMPLE.flatMap(([organ, hotspot]) => {
    const found = organs[organ].hotspots.find((entry) => entry.id === hotspot);
    return found ? [found.ta] : [];
  });

  return (
    <section className="how-different ui-section" aria-labelledby="how-different-title">
      <div className="ui-container">
        <SectionHeader id="how-different-title" eyebrow={different.eyebrow} title={different.title} />
        <ul className="how-register">
          {Object.entries(different.points).map(([key, point]) => (
            <li key={key} className="how-register__row" data-reveal>
              <h3 className="how-register__title">{format(point.title, { count })}</h3>
              <div className="how-register__body">
                <p className="ui-body">{format(point.body, { count })}</p>
                {key === "named" && (
                  <p className="how-register__terms" aria-label={different.termsLabel}>
                    {terms.map((term) => (
                      <span key={term} className="ui-latin" lang="la">
                        {term}
                      </span>
                    ))}
                  </p>
                )}
                {key === "languages" && (
                  <ul className="how-register__languages">
                    {locales.map((entry) => (
                      <li key={entry.code} lang={entry.code} dir={entry.dir}>
                        {entry.nativeName}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
