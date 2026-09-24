import type { CSSProperties } from "react";
import { ButtonLink } from "../../ui/Button";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { HeroFigure } from "./HeroFigure";
import { riseDelay } from "./motion";

type Structure = keyof SiteDictionary["marketing"]["hero"]["plate"]["structures"];

/**
 * Where each labelled muscle sits on /hero/figure.webp, as a percentage of the
 * image box. These are physical coordinates on an image that never mirrors, so
 * they stay the same in right-to-left layouts; only the label column moves.
 */
const NOTES: { id: Structure; x: number; y: number }[] = [
  { id: "temporalis", x: 64.3, y: 10.8 },
  { id: "sternocleidomastoid", x: 48.9, y: 45.4 },
  { id: "deltoid", x: 84.7, y: 66 },
  { id: "pectoralisMajor", x: 53.7, y: 79.4 },
];

export function HomeHero({
  locale,
  copy,
  actions,
}: {
  locale: string;
  copy: SiteDictionary["marketing"]["hero"];
  actions: SiteDictionary["common"]["actions"];
}) {
  const { plate } = copy;

  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="ui-container home-hero__grid">
        <div className="home-hero__text">
          <p className="ui-eyebrow ui-rise">{copy.eyebrow}</p>
          <h1 id="home-hero-title" className="ui-display home-hero__title ui-rise" style={riseDelay(90)}>
            {copy.title}
          </h1>
          <p className="ui-lede home-hero__lede ui-rise" style={riseDelay(200)}>
            {copy.lede}
          </p>
          <div className="home-hero__actions ui-rise" style={riseDelay(300)}>
            <ButtonLink href={localeHref(locale, "explore")} arrow>
              {actions.exploreBody}
            </ButtonLink>
            <ButtonLink href={localeHref(locale, "howItWorks")} variant="secondary">
              {actions.discoverCorpus}
            </ButtonLink>
          </div>
        </div>

        <figure className="home-plate ui-rise" style={riseDelay(160)}>
          <div className="home-plate__head">
            <span className="home-plate__number">{plate.number}</span>
            <span className="home-plate__latin ui-latin" lang="la">
              {plate.latinTitle}
            </span>
          </div>

          <div className="home-plate__stage">
            <div className="home-plate__specimen">
              <HeroFigure alt={plate.alt} />
              {/* The visible labels are drawn for sighted readers; the legend in
                  the caption carries the same names for everyone else. */}
              <ol className="home-plate__notes" aria-hidden>
                {NOTES.map((note, index) => (
                  <li
                    key={note.id}
                    className="home-note"
                    style={{ "--x": `${note.x}%`, "--y": `${note.y}%`, "--i": index } as CSSProperties}
                  >
                    <span className="home-note__dot">{index + 1}</span>
                    <span className="home-note__line" />
                    <span className="home-note__label ui-latin" lang="la" dir="ltr">
                      {plate.structures[note.id]}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <figcaption className="home-plate__caption">
            <span className="home-plate__caption-text">{plate.caption}</span>
            <span className="home-plate__caption-note">{plate.note}</span>
            <ol className="home-plate__legend" aria-label={plate.legendLabel}>
              {NOTES.map((note) => (
                <li key={note.id} className="ui-latin" lang="la">
                  {plate.structures[note.id]}
                </li>
              ))}
            </ol>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

