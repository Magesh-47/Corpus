import { ButtonLink } from "../../ui/Button";
import { Annotations, type Note } from "../../ui/Editorial";
import type { SiteDictionary } from "../../../i18n/site";
import { localeHref } from "../../../lib/routes";
import { riseDelay } from "./motion";
import { Lines } from "./shared";

type Copy = SiteDictionary["marketing"];
type Structure = keyof Copy["hero"]["plate"]["structures"];

/**
 * Where each labelled muscle sits on /hero/figure.webp, as a percentage of the
 * image box, and which way its leader line runs. Physical coordinates on an
 * image that never mirrors, so they hold in right-to-left layouts too.
 */
const NOTES: { id: Structure; x: number; y: number; side: "left" | "right"; length: number }[] = [
  { id: "temporalis", x: 64.3, y: 10.8, side: "right", length: 72 },
  { id: "sternocleidomastoid", x: 48.9, y: 45.4, side: "left", length: 150 },
  { id: "deltoid", x: 84.7, y: 66, side: "right", length: 44 },
  { id: "pectoralisMajor", x: 53.7, y: 79.4, side: "left", length: 200 },
];

/** The opening spread: headline and actions on one page, a numbered plate on the other. */
export function HomeHero({ locale, copy }: { locale: string; copy: Copy }) {
  const { hero, transition } = copy;
  const { plate } = hero;
  const notes: Note[] = NOTES.map((note) => ({
    ...note,
    label: (
      <span className="ui-latin" lang="la">
        {plate.structures[note.id]}
      </span>
    ),
  }));

  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="ui-container home-hero__grid">
          <div className="home-hero__text">
            <p className="ui-eyebrow ui-rise">{hero.eyebrow}</p>
            <h1 id="home-hero-title" className="ui-display home-hero__title ui-rise" style={riseDelay(120)}>
              <Lines text={hero.title} />
            </h1>
            <p className="ui-lede home-hero__lede ui-rise" style={riseDelay(260)}>
              {hero.lede}
            </p>
            <div className="home-hero__actions ui-rise" style={riseDelay(380)}>
              <ButtonLink href={localeHref(locale, "explore")} arrow>
                {hero.primary}
              </ButtonLink>
              <ButtonLink href={localeHref(locale, "howItWorks")} variant="secondary">
                {hero.secondary}
              </ButtonLink>
            </div>
            <ul className="home-hero__facts ui-rise" style={riseDelay(500)} aria-label={hero.supportingLabel}>
              {Object.entries(hero.supporting).map(([key, fact]) => (
                <li key={key}>{fact}</li>
              ))}
            </ul>
          </div>

          <figure className="home-hero__plate">
            <div className="home-hero__plate-head ui-label ui-rise" style={riseDelay(420)}>
              <span>{plate.number}</span>
              <span>{plate.view}</span>
            </div>
            <div className="home-hero__specimen home-hero__reveal">
              <img
                src="/hero/figure.webp"
                alt={plate.alt}
                width={614}
                height={970}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              {/* Drawn for sighted readers; the legend below carries the same names once for everyone. */}
              <Annotations notes={notes} numbered className="home-hero__notes" />
            </div>
            <figcaption className="home-hero__caption ui-rise" style={riseDelay(900)}>
              <span className="home-hero__latin ui-latin" lang="la">
                {plate.latinTitle}
              </span>
              <span className="ui-caption">{plate.caption}</span>
              <ol className="home-hero__legend" aria-label={plate.legendLabel}>
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

      <div className="ui-container">
        <p className="home-transition" data-reveal>
          <span className="home-transition__number" dir="ltr">
            {transition.number}
          </span>
          <span className="home-transition__title">{transition.title}</span>
          <span className="home-transition__line">{transition.line}</span>
        </p>
      </div>
    </>
  );
}
