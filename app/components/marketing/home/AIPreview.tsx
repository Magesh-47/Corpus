import type { CSSProperties } from "react";
import { OrganArt } from "../../anatomy/OrganArt";
import { ButtonLink } from "../../ui/Button";
import { StatusTag } from "../../ui/StatusTag";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { SectionMark } from "./SectionMark";

/**
 * Where the two ventricles sit on /anatomy/heart/organ.webp (anterior view),
 * either side of the anterior interventricular groove. Physical coordinates on
 * artwork that never mirrors.
 */
const MARKERS = [
  { id: "left-ventricle", x: 68.5, y: 61 },
  { id: "right-ventricle", x: 43, y: 60 },
] as const;

/**
 * A static, written example of the planned AI guide — deliberately not an
 * interface. There is no input, no send control and no typing effect, and it is
 * labelled as an example in three places. The structures it cites are real
 * hotspots on the heart model, read from the anatomy data.
 */
export function AIPreview({
  locale,
  copy,
  status,
  heart,
}: {
  locale: string;
  copy: SiteDictionary["marketing"]["ai"];
  status: SiteDictionary["common"]["status"];
  heart: Organ;
}) {
  const structures = MARKERS.map((marker) => ({
    ...marker,
    hotspot: heart.hotspots.find((hotspot) => hotspot.id === marker.id),
  }));

  return (
    <section className="ui-section home-ai" aria-labelledby="home-ai-title">
      <div className="ui-container">
        <SectionMark number={4}>{copy.mark}</SectionMark>

        <div className="home-ai__grid">
          <div className="home-ai__intro">
            <h2 id="home-ai-title" className="ui-h2" data-reveal>
              {copy.title}
            </h2>
            <p className="ui-lede" data-reveal style={revealDelay(120)}>
              {copy.lede}
            </p>
            <p className="home-ai__status" data-reveal style={revealDelay(200)}>
              <StatusTag tone="soon">{status.comingSoon}</StatusTag>
              <span>{copy.status}</span>
            </p>
          </div>

          <figure className="home-ai__sheet" data-reveal style={revealDelay(160)}>
            <div className="home-ai__sheet-head">
              <StatusTag tone="example">{status.example}</StatusTag>
              <span className="home-ai__sheet-label">{copy.exampleLabel}</span>
            </div>

            <dl className="home-ai__exchange">
              <div className="home-ai__turn">
                <dt className="home-ai__speaker">{copy.you}</dt>
                <dd className="home-ai__question">{copy.question}</dd>
              </div>
              <div className="home-ai__turn">
                <dt className="home-ai__speaker">{copy.corpus}</dt>
                <dd className="home-ai__answer">{copy.answer}</dd>
              </div>
            </dl>

            <div className="home-ai__refs">
              <div className="home-ai__plate">
                <OrganArt organ={heart} asset="organ" alt={copy.figureAlt} size={720} loading="lazy" />
                <ol className="home-ai__markers" aria-hidden>
                  {structures.map((marker, index) => (
                    <li
                      key={marker.id}
                      className="home-ai__marker"
                      style={{ "--x": `${marker.x}%`, "--y": `${marker.y}%` } as CSSProperties}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="home-ai__legend">
                <p className="home-ai__legend-label">{copy.referencesLabel}</p>
                <ol className="home-ai__legend-list">
                  {structures.map(
                    (marker, index) =>
                      marker.hotspot && (
                        <li key={marker.id}>
                          <span className="home-ai__legend-number" aria-hidden>
                            {index + 1}
                          </span>
                          <span className="home-ai__legend-names">
                            <span className="ui-latin" lang="la">
                              {marker.hotspot.ta}
                            </span>
                            <span className="home-ai__legend-label-text">{marker.hotspot.label}</span>
                          </span>
                        </li>
                      ),
                  )}
                </ol>
                <ButtonLink href={localeHref(locale, "explore", { organ: "heart" })} variant="text" arrow>
                  {copy.exploreHeart}
                </ButtonLink>
              </div>
            </div>

            <figcaption className="home-ai__caption ui-caption">{copy.disclaimer}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
