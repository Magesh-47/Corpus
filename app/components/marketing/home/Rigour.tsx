import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { revealDelay } from "./motion";
import { Lines, plateNumber } from "./shared";

/**
 * Three principles as a ruled index, beside one real structure record read
 * from the anatomy data — the kind of entry every dot in Explore opens.
 */
export function Rigour({ copy, heart }: { copy: SiteDictionary["marketing"]["rigor"]; heart: Organ }) {
  const structure = heart.hotspots.find((hotspot) => hotspot.id === "left-ventricle");

  return (
    <section className="ui-section ui-tone-deep home-rigour" aria-labelledby="home-rigour-title">
      <div className="ui-container home-rigour__grid">
        <div className="home-rigour__intro">
          <h2 id="home-rigour-title" className="ui-h2" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(140)}>
            {copy.lede}
          </p>
        </div>

        <ol className="home-rigour__pillars">
          {Object.entries(copy.pillars).map(([key, pillar], index) => (
            <li key={key} className="home-rigour__pillar" data-reveal style={revealDelay(index * 110)}>
              <span className="home-rigour__number" dir="ltr" aria-hidden>
                {plateNumber(index + 1)}
              </span>
              <h3 className="ui-label home-rigour__pillar-title">{pillar.title}</h3>
              <p className="ui-body">{pillar.body}</p>
            </li>
          ))}
        </ol>

        {structure && (
          <figure className="home-record" data-reveal style={revealDelay(160)}>
            <p className="ui-label home-record__label">{copy.entry.label}</p>
            <p className="home-record__term ui-latin" lang="la">
              {structure.ta}
            </p>
            <p className="home-record__source">{copy.entry.term}</p>
            <dl className="home-record__fields">
              <div>
                <dt className="ui-label">{copy.entry.name}</dt>
                <dd>{structure.label}</dd>
              </div>
              <div>
                <dt className="ui-label">{copy.entry.organ}</dt>
                <dd>
                  {heart.name} <span className="ui-latin" lang="la">({heart.scientificName})</span>
                </dd>
              </div>
              <div>
                <dt className="ui-label">{copy.entry.role}</dt>
                <dd>{structure.detail}</dd>
              </div>
            </dl>
            <figcaption className="ui-caption home-record__note">{copy.note}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
