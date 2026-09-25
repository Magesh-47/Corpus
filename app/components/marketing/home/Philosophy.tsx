import { OrganArt } from "../../anatomy/OrganArt";
import { Annotations, type Note } from "../../ui/Editorial";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { revealDelay } from "./motion";
import { Lines, StillImage, plateNumber, stills } from "./shared";

type Copy = SiteDictionary["marketing"]["philosophy"];

/**
 * Structures marked on the lungs watercolour (/anatomy/lungs/organ.webp) for
 * the labelling sheet. Ids are real hotspots on the lungs model; coordinates
 * are physical positions on artwork that never mirrors.
 */
const SHEET = [
  { id: "trachea", x: 49.5, y: 17 },
  { id: "bronchus", x: 43.5, y: 43 },
  { id: "left-lung", x: 71, y: 55 },
  { id: "base", x: 27, y: 83 },
] as const;

/** Three chapters — see, understand, remember — each laid out differently. */
export function Philosophy({
  copy,
  stillLabel,
  brain,
  lungs,
  intl,
}: {
  copy: Copy;
  stillLabel: string;
  brain: Organ;
  lungs: Organ;
  intl: string;
}) {
  const { see, understand, remember } = copy.steps;
  const conditions = new Intl.ListFormat(intl.replace("_", "-"), { type: "conjunction" }).format(
    brain.conditions.slice(0, 3),
  );
  const facets = [
    { key: "function", label: understand.facets.function, value: brain.function },
    { key: "bloodSupply", label: understand.facets.bloodSupply, value: brain.bloodSupply },
    { key: "tissue", label: understand.facets.tissue, value: brain.tissue },
    { key: "clinical", label: understand.facets.clinical, value: conditions },
  ];
  const sheet = SHEET.map((mark) => ({ ...mark, hotspot: lungs.hotspots.find((hotspot) => hotspot.id === mark.id) }));
  const sheetNotes: Note[] = sheet.map((mark) => ({ id: mark.id, x: mark.x, y: mark.y, label: null, length: 0 }));

  return (
    <section className="ui-section home-philosophy" id="philosophy" aria-labelledby="home-philosophy-title">
      <div className="ui-container">
        <header className="home-philosophy__intro">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-philosophy-title" className="ui-display home-philosophy__title" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-lede home-philosophy__lede" data-reveal style={revealDelay(140)}>
            {copy.lede}
          </p>
        </header>

        <ol className="home-chapters">
          {/* 01 — a large, tightly cropped still: the specimen seen in the round. */}
          <li className="home-chapter home-chapter--see">
            <ChapterText number={1} step={see} />
            <figure className="home-chapter__figure" data-reveal style={revealDelay(120)}>
              <div className="home-see__crop">
                <StillImage still={stills.heartSide} alt={see.alt} />
              </div>
              <figcaption className="home-figcaption">
                <span>{see.caption}</span>
                <span className="home-figcaption__source">{stillLabel}</span>
              </figcaption>
            </figure>
          </li>

          {/* 02 — one organ, and the threads that run from it. */}
          <li className="home-chapter home-chapter--understand">
            <ChapterText number={2} step={understand} />
            <figure className="home-chapter__figure home-understand" data-reveal style={revealDelay(120)}>
              <div className="home-understand__art">
                <OrganArt organ={brain} asset="organ" alt={understand.alt} size={720} loading="lazy" />
              </div>
              <div className="home-understand__record">
                <p className="home-understand__name">
                  <span className="home-understand__organ">{brain.name}</span>
                  <span className="ui-latin" lang="la">
                    {brain.scientificName}
                  </span>
                </p>
                <dl className="home-understand__facets">
                  {facets.map((facet) => (
                    <div key={facet.key} className="home-understand__facet">
                      <dt className="ui-label">{facet.label}</dt>
                      <dd>{facet.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <figcaption className="home-figcaption home-understand__caption">
                <span>{understand.caption}</span>
              </figcaption>
            </figure>
          </li>

          {/* 03 — a labelling sheet: numbers on the plate, blanks to fill in. */}
          <li className="home-chapter home-chapter--remember">
            <ChapterText number={3} step={remember} />
            <figure className="home-chapter__figure home-sheet" data-reveal style={revealDelay(120)}>
              <div className="home-sheet__art">
                <OrganArt organ={lungs} asset="organ" alt={remember.alt} size={720} loading="lazy" />
                <Annotations notes={sheetNotes} numbered className="home-sheet__marks" />
              </div>
              <ol className="home-sheet__blanks">
                {sheet.map((mark, index) => (
                  <li key={mark.id}>
                    <span className="home-sheet__n" aria-hidden>
                      {index + 1}
                    </span>
                    <span className="home-sheet__line">
                      <span className="ui-sr">{remember.blank}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="home-sheet__answers">
                <span className="ui-label">{remember.answers}</span>
                {sheet.map((mark, index) => (
                  <span key={mark.id} className="home-sheet__answer">
                    <span dir="ltr">{index + 1}</span> {mark.hotspot?.label}
                  </span>
                ))}
              </p>
              <figcaption className="home-figcaption">
                <span>{remember.caption}</span>
              </figcaption>
            </figure>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ChapterText({ number, step }: { number: number; step: { label: string; title: string; body: string } }) {
  return (
    <div className="home-chapter__text" data-reveal>
      <p className="home-chapter__mark">
        <span className="home-chapter__number" dir="ltr">
          {plateNumber(number)}
        </span>
        <span className="ui-label">{step.label}</span>
      </p>
      <h3 className="home-chapter__title">{step.title}</h3>
      <p className="ui-body home-chapter__body">{step.body}</p>
    </div>
  );
}
