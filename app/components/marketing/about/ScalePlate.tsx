import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";
import { OrganArt, type OrganAsset } from "../../anatomy/OrganArt";

type Copy = SiteDictionary["about"]["chapters"]["visual"]["scales"];

/**
 * One organ at three scales — body, organ, tissue — laid out as a catalogue
 * plate. The captions come from the organ's own data (system, name, tissue).
 */
export function ScalePlate({ copy, organ }: { copy: Copy; organ: Organ }) {
  const panels: { key: "body" | "organ" | "tissue"; asset: OrganAsset; detail: string; latin?: string }[] = [
    { key: "body", asset: "location", detail: organ.system },
    { key: "organ", asset: "organ", detail: organ.name, latin: organ.scientificName },
    { key: "tissue", asset: "microscopic", detail: organ.tissue },
  ];
  return (
    <figure className="about-scales" aria-labelledby="about-scales-title">
      <figcaption id="about-scales-title" className="about-scales__title" data-reveal>
        {copy.title}
      </figcaption>
      <ol className="about-scales__list">
        {panels.map((panel, index) => (
          <li
            key={panel.key}
            className={`about-scales__panel about-scales__panel--${panel.key}`}
            data-reveal
            style={{ "--reveal-delay": `${index * 140}ms` } as React.CSSProperties}
          >
            <div className="about-scales__art">
              <OrganArt organ={organ} asset={panel.asset} alt={copy[panel.key].alt} size={720} />
            </div>
            <p className="about-scales__caption">
              <span className="about-scales__number" aria-hidden>
                {["i", "ii", "iii"][index]}
              </span>
              <span className="about-scales__label">{copy[panel.key].label}</span>
              <span className="about-scales__detail">
                {panel.detail}
                {panel.latin && (
                  <>
                    {" · "}
                    <span className="ui-latin" lang="la">
                      {panel.latin}
                    </span>
                  </>
                )}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
