import { OrganArt } from "../../anatomy/OrganArt";
import { StatusTag } from "../../ui/StatusTag";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import type { UiDictionary } from "../../../i18n/types";
import { revealDelay } from "./motion";
import { SectionMark, plateNumber } from "./SectionMark";

type Features = SiteDictionary["marketing"]["features"];
type Key = keyof Features["items"];

/**
 * The six capabilities as a ruled, numbered index rather than an icon grid.
 * Where a capability maps to a control in the viewer, the control's own label
 * is shown (read from Explore's UI dictionary), so the page names exactly what
 * the reader will find there.
 */
export function FeatureIndex({
  copy,
  status,
  ui,
  heart,
}: {
  copy: Features;
  status: SiteDictionary["common"]["status"];
  ui: UiDictionary;
  heart: Organ;
}) {
  const mitral = heart.hotspots.find((hotspot) => hotspot.id === "mitral");

  const tools: Partial<Record<Key, string[]>> = {
    explore3d: [ui.tools.rotate, ui.tools.zoom, ui.tools.isolate],
    compare: [ui.tools.compare],
    beneath: [ui.tools.section, ui.cards.microscopic],
    testYourself: [ui.info.quiz],
  };

  return (
    <section className="ui-section home-features" aria-labelledby="home-features-title">
      <div className="ui-container home-features__grid">
        <div className="home-features__aside">
          <SectionMark number={3}>{copy.mark}</SectionMark>
          <h2 id="home-features-title" className="ui-h2" data-reveal>
            {copy.title}
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(120)}>
            {copy.lede}
          </p>
          <figure className="home-features__figure" data-reveal style={revealDelay(200)}>
            <div className="home-features__art">
              <OrganArt organ={heart} asset="location" alt={copy.figure.alt} size={720} loading="lazy" />
            </div>
            <figcaption className="ui-caption">{copy.figure.caption}</figcaption>
          </figure>
        </div>

        <ol className="home-index">
          {(Object.entries(copy.items) as [Key, Features["items"][Key]][]).map(([key, item], index) => (
            <li key={key} className="home-index__item" data-reveal>
              <span className="home-index__number" aria-hidden>
                {plateNumber(index + 1)}
              </span>
              <div className="home-index__body">
                <h3 className="home-index__title">{item.title}</h3>
                <p className="ui-body home-index__text">{item.body}</p>

                {tools[key] && (
                  <p className="home-index__detail">
                    <span className="home-index__detail-label">{copy.toolsLabel}</span>
                    <span className="home-index__tools">
                      {tools[key].map((tool) => (
                        <span key={tool} className="home-index__tool">
                          {tool}
                        </span>
                      ))}
                    </span>
                  </p>
                )}

                {key === "everyStructure" && mitral && (
                  <p className="home-index__detail">
                    <span className="home-index__detail-label">{copy.exampleLabel}</span>
                    <span className="home-index__term">
                      <span className="ui-latin" lang="la">
                        {mitral.ta}
                      </span>
                      <span className="home-index__term-label">{mitral.label}</span>
                    </span>
                  </p>
                )}

                {"upcoming" in item && (
                  <p className="home-index__detail home-index__detail--upcoming">
                    <StatusTag tone="soon">{status.comingSoon}</StatusTag>
                    <span>{item.upcoming}</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
