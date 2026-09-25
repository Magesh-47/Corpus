import type { CSSProperties } from "react";
import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { format } from "../../../i18n/types";
import { OrganArt } from "../../anatomy/OrganArt";
import { IndexMarker } from "../../ui/Editorial";

type Copy = SiteDictionary["about"];

/**
 * Chapter 01. The heading runs across the page; below it, two plates laid one
 * over the other (the organ in the body, the organ itself) sit beside the
 * manifesto, whose four short truths step inward like stacked sheets.
 */
export function AboutDepth({ copy, organ }: { copy: Copy; organ: Organ }) {
  const { depth } = copy;
  return (
    <section className="ui-section about-depth" aria-labelledby="about-depth-title">
      <div className="ui-container">
        <header className="about-chapter-head">
          <IndexMarker n={1} label={depth.label} />
          <h2 id="about-depth-title" className="ui-h2 about-depth__title" data-reveal>
            <span className="about-line">{depth.titleFirst}</span>{" "}
            <span className="about-line">{depth.titleSecond}</span>
          </h2>
        </header>

        <div className="about-depth__grid">
          <div className="about-depth__text">
            <div className="about-depth__intro" data-reveal>
              <p className="ui-lede">{depth.intro}</p>
              <p className="ui-lede">{depth.valuable}</p>
            </div>
            <p className="ui-statement about-depth__turn" data-reveal>
              {depth.turn}
            </p>
            <ul className="about-depth__truths">
              {Object.entries(depth.truths).map(([key, line], index) => (
                <li
                  key={key}
                  className="about-depth__truth"
                  data-reveal
                  style={{ "--step": index, "--reveal-delay": `${index * 110}ms` } as CSSProperties}
                >
                  {line}
                </li>
              ))}
            </ul>
            <p className="about-depth__close" data-reveal>
              {depth.close}
            </p>
          </div>

          <figure className="about-depth__figure" data-reveal>
            <div className="about-depth__layers">
              <div className="about-sheet about-depth__body">
                <OrganArt organ={organ} asset="location" alt={depth.bodyAlt} size={720} />
              </div>
              <div className="about-sheet about-depth__organ">
                <OrganArt organ={organ} asset="organ" alt={depth.organAlt} size={720} />
              </div>
            </div>
            <figcaption className="about-caption">
              <span className="about-caption__plate">{format(copy.plate, { number: "II" })}</span>
              <span className="ui-latin about-caption__latin" lang="la">
                {organ.scientificName}
              </span>
              <span className="about-caption__text">{organ.name}</span>
              <span className="about-caption__note">{depth.caption}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
