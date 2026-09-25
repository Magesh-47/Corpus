import { ButtonLink } from "../../ui/Button";
import { Annotations, type Note } from "../../ui/Editorial";
import { StatusTag } from "../../ui/StatusTag";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import type { UiDictionary } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { Lines, StillImage, stills } from "./shared";

/** Which of the heart's hotspots are named on the still, and which way each label runs. */
const LABELLED: { id: keyof typeof stills.heart.points; side: "left" | "right"; length: number }[] = [
  { id: "aorta", side: "left", length: 96 },
  { id: "right-atrium", side: "left", length: 56 },
  { id: "left-atrium", side: "right", length: 120 },
  { id: "left-ventricle", side: "right", length: 88 },
];
/** Shown as dots only, as Explore shows them before one is selected. */
const UNLABELLED: (keyof typeof stills.heart.points)[] = ["right-ventricle", "mitral"];

/**
 * The page's widest moment: a viewport-sized panel with the heart as Explore
 * renders it. A still, and labelled as one.
 */
export function ExplorePromo({
  locale,
  copy,
  status,
  ui,
  heart,
}: {
  locale: string;
  copy: SiteDictionary["marketing"]["explore"];
  status: SiteDictionary["common"]["status"];
  ui: UiDictionary;
  heart: Organ;
}) {
  const label = (id: string) => heart.hotspots.find((hotspot) => hotspot.id === id)?.label ?? id;
  const notes: Note[] = [
    ...LABELLED.map(({ id, side, length }) => {
      const [x, y] = stills.heart.points[id];
      return { id, x, y, side, length, label: label(id) };
    }),
    ...UNLABELLED.map((id) => {
      const [x, y] = stills.heart.points[id];
      return { id, x, y, length: 0, label: null };
    }),
  ];
  const tools = [ui.tools.rotate, ui.tools.zoom, ui.tools.isolate, ui.tools.section, ui.tools.layers, ui.tools.compare];

  return (
    <section className="home-promo" aria-labelledby="home-promo-title">
      <div className="ui-container ui-container--wide">
        <div className="home-promo__panel">
          <div className="home-promo__text">
            <h2 id="home-promo-title" className="ui-display home-promo__title" data-reveal>
              <Lines text={copy.title} />
            </h2>
            <p className="ui-lede home-promo__lede" data-reveal style={revealDelay(140)}>
              {copy.lede}
            </p>
            <div data-reveal style={revealDelay(240)}>
              <ButtonLink href={localeHref(locale, "explore")} arrow>
                {copy.cta}
              </ButtonLink>
            </div>
          </div>

          <figure className="home-promo__figure">
            <div className="home-promo__head ui-label">
              <span>
                {heart.name} · <span className="ui-latin" lang="la">{heart.scientificName}</span>
              </span>
              <StatusTag tone="preview">{status.preview}</StatusTag>
            </div>
            <div className="home-promo__model" data-reveal style={revealDelay(120)}>
              <StillImage still={stills.heart} alt={copy.alt} />
              <Annotations notes={notes} className="home-promo__notes" />
            </div>
            <figcaption className="home-promo__caption">
              <span className="home-figcaption__source">{copy.still}</span>
              <span>{copy.caption}</span>
            </figcaption>
          </figure>

          <div className="home-promo__tools">
            <span className="ui-label">{copy.controlsLabel}</span>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
