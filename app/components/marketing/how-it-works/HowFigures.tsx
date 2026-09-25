import { CircleDashed, RotateCcw, ScanLine, Search, type LucideIcon } from "lucide-react";
import { OrganArt } from "../../anatomy/OrganArt";
import { Annotations, Plate, type Note } from "../../ui/Editorial";
import { StatusTag } from "../../ui/StatusTag";
import { format } from "../../../i18n/types";
import type { Hotspot, Organ } from "../../../i18n/merge";
import type { HowCopy } from "./types";

type Steps = HowCopy["steps"];

/** A hotspot from the anatomy data, so its label is translated in every locale. */
function hotspot(organ: Organ, id: string): Hotspot {
  return organ.hotspots.find((entry) => entry.id === id) ?? organ.hotspots[0];
}

/* ------------------------------------------------------------- 01 · See */

/** The organ presented whole and quiet, as an atlas plate. */
export function SeeFigure({ organ, copy }: { organ: Organ; copy: Steps["see"] }) {
  return (
    <Plate
      className="how-plate"
      head={
        <>
          <span>{copy.plateLabel}</span>
          <span className="ui-latin how-plate__latin" lang="la">
            {organ.scientificName}
          </span>
        </>
      }
      caption={format(copy.caption, { organ: organ.name })}
    >
      <div className="how-art how-art--organ how-plate__art">
        <OrganArt organ={organ} asset="organ" alt={copy.alt} size={720} loading="lazy" />
      </div>
    </Plate>
  );
}

/* --------------------------------------------------------- 02 · Explore */

const CONTROL_ICONS: Record<keyof Steps["explore"]["controls"], LucideIcon> = {
  rotate: RotateCcw,
  zoom: Search,
  isolate: CircleDashed,
  section: ScanLine,
};

/**
 * Where the right atrium's dot sits on the viewer still, as a share of the
 * image. Physical, not logical: the render never mirrors, so neither does this.
 */
const VIEWER_CALLOUT = { id: "right-atrium", x: 27.9, y: 40 };

/**
 * A real still from the Explore viewer (rendered from the heart model, chrome
 * removed), set in a drawn viewer frame with a static control rail.
 */
export function ExploreFigure({ organ, copy }: { organ: Organ; copy: Steps["explore"] }) {
  const structure = hotspot(organ, VIEWER_CALLOUT.id);
  const callout: Note[] = [
    {
      ...VIEWER_CALLOUT,
      side: "left",
      length: 36,
      label: (
        <span className="how-viewer__callout">
          <b>{structure.label}</b>
          <small>{structure.detail}</small>
        </span>
      ),
    },
  ];

  return (
    <figure className="how-viewer">
      <div className="how-viewer__frame">
        <div className="how-viewer__bar">
          <span className="ui-label">{copy.viewerLabel}</span>
          <span className="ui-latin how-viewer__latin" lang="la">
            {organ.scientificName}
          </span>
        </div>
        <div className="how-viewer__body">
          <div className="how-viewer__stage">
            <img src="/marketing/how-viewer-heart.webp" alt={copy.alt} width={1100} height={1100} loading="lazy" decoding="async" />
            <Annotations notes={callout} className="how-viewer__notes" />
          </div>
          <ul className="how-viewer__controls" aria-label={copy.controlsLabel}>
            {Object.entries(copy.controls).map(([key, control]) => {
              const Icon = CONTROL_ICONS[key as keyof typeof CONTROL_ICONS];
              return (
                <li key={key} className="how-viewer__control">
                  <Icon className="how-viewer__icon" size={18} strokeWidth={1.5} aria-hidden />
                  <span className="how-viewer__control-name">{control.name}</span>
                  <span className="how-viewer__control-note">{control.note}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <figcaption className="ui-caption how-figure__caption">{copy.caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------ 03 · Understand */

/** The organ, its tissue under the loupe, and the information panel — every
 *  value read from the organ data. */
export function UnderstandFigure({ organ, copy }: { organ: Organ; copy: Steps["understand"] }) {
  const facts: [string, string][] = [
    [copy.facts.size, organ.size],
    [copy.facts.location, organ.location],
    [copy.facts.bloodSupply, organ.bloodSupply],
    [copy.facts.function, organ.function],
    [copy.facts.tissue, organ.tissue],
  ];

  return (
    <figure className="how-understand">
      <div className="how-understand__art">
        <div className="how-art how-art--organ">
          <OrganArt organ={organ} asset="organ" alt={copy.organAlt} size={720} loading="lazy" />
        </div>
        <div className="how-understand__loupe">
          <div className="how-art how-art--tissue">
            <OrganArt organ={organ} asset="microscopic" alt={copy.tissueAlt} size={720} loading="lazy" />
          </div>
        </div>
      </div>

      <div className="how-panel">
        <p className="ui-label how-panel__label">{copy.panelLabel}</p>
        <div className="how-panel__head">
          <p className="how-panel__name">{organ.name}</p>
          <p className="ui-latin how-panel__latin" lang="la">
            {organ.scientificName}
          </p>
          <p className="how-panel__poetic">{organ.poetic}</p>
        </div>
        <dl className="how-panel__facts">
          {facts.map(([term, value]) => (
            <div key={term} className="how-panel__row">
              <dt>{term}</dt>
              <dd>
                <bdi>{value}</bdi>
              </dd>
            </div>
          ))}
          <div className="how-panel__row how-panel__row--clinical">
            <dt>{copy.conditionsLabel}</dt>
            <dd>
              <ul className="how-panel__conditions">
                {organ.conditions.slice(0, 3).map((condition) => (
                  <li key={condition}>{condition}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>

      <figcaption className="ui-caption how-figure__caption how-understand__caption">
        {format(copy.caption, { organ: organ.name })}
      </figcaption>
    </figure>
  );
}

/* -------------------------------------------------------- 04 · Practice */

/**
 * Where four brain structures sit on /anatomy/brain/organ.webp (lateral view,
 * frontal pole to the left), as a share of the square image. Physical, because
 * anatomy does not mirror in right-to-left languages.
 */
const QUIZ_MARKERS: Omit<Note, "label">[] = [
  { id: "frontal", x: 22, y: 34, side: "left", length: 28 },
  { id: "parietal", x: 58, y: 21, side: "right", length: 40 },
  { id: "temporal", x: 43, y: 52, side: "left", length: 56 },
  { id: "cerebellum", x: 72, y: 63, side: "right", length: 32 },
];
const QUIZ_TARGET = "temporal";

/** The labelling quiz as a static sheet: numbered structures, blank labels,
 *  and one prompt naming a structure that really exists in the brain data. */
export function PracticeFigure({ organ, copy, example }: { organ: Organ; copy: Steps["practice"]; example: string }) {
  const target = hotspot(organ, QUIZ_TARGET);
  const notes: Note[] = QUIZ_MARKERS.filter((marker) => organ.hotspots.some((entry) => entry.id === marker.id)).map((marker) => ({
    ...marker,
    label: <span className="how-quiz__blank" />,
  }));

  return (
    <figure className="how-quiz">
      <div className="how-quiz__sheet">
        <div className="how-quiz__prompt">
          <span className="ui-label how-quiz__find">{copy.prompt}</span>
          <strong className="how-quiz__target">{target.label}</strong>
          <span className="how-quiz__hint">{copy.hint}</span>
        </div>
        <div className="how-quiz__stage how-art how-art--organ">
          <OrganArt organ={organ} asset="organ" alt={format(copy.alt, { structure: target.label })} size={720} loading="lazy" />
          <Annotations notes={notes} numbered className="how-quiz__notes" />
        </div>
      </div>
      <figcaption className="how-figure__caption how-figure__caption--tagged">
        <StatusTag tone="example">{example}</StatusTag>
        <span className="ui-caption">{copy.caption}</span>
      </figcaption>
    </figure>
  );
}

/* -------------------------------------------------------- 05 · Remember */

/** Not built yet, and shown as such: an unwritten index card, no numbers. */
export function RememberFigure({ copy, comingSoon }: { copy: Steps["remember"]; comingSoon: string }) {
  return (
    <div className="how-future">
      <div className="how-future__head">
        <span className="ui-label">{copy.futureLabel}</span>
        <StatusTag tone="soon">{comingSoon}</StatusTag>
      </div>
      <ul className="how-future__list">
        {Object.entries(copy.future).map(([key, entry]) => (
          <li key={key} className="how-future__row">
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
