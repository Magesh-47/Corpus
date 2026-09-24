import Link from "next/link";
import type { ReactNode } from "react";
import { OrganArt } from "../../anatomy/OrganArt";
import { SectionHeader } from "../../ui/SectionHeader";
import { StatusTag } from "../../ui/StatusTag";
import { organIds, type OrganId } from "../../../lib/anatomy-data";
import { localeHref } from "../../../lib/routes";
import { format } from "../../../i18n/types";
import type { Organ } from "../../../i18n/merge";
import type { HowCopy, HowSectionProps } from "./types";

type Status = { available: string; comingSoon: string; example: string };
type Items = HowCopy["steps"]["items"];
type StepKey = keyof Items;

/**
 * Where each marked heart structure sits on the painted plate, as a share of
 * the square image. Physical (not logical) on purpose: anatomy does not mirror
 * in right-to-left languages, so neither do the markers.
 */
const HEART_MARKERS: { id: string; x: number; y: number }[] = [
  { id: "aorta", x: 47, y: 16 },
  { id: "right-atrium", x: 31, y: 39 },
  { id: "left-ventricle", x: 67, y: 64 },
];

/** Numbered like a catalogue, set on a single hairline that runs the length of
 *  the method — five moves with one specimen, not five products. */
export function HowSteps({ locale, copy, organs, status }: HowSectionProps & { status: Status }) {
  const { steps } = copy;
  const { items } = steps;

  const figures: Record<StepKey, ReactNode> = {
    explore: <LibraryTray locale={locale} organs={organs} copy={items.explore} />,
    understand: <UnderstandPlate organ={organs.lungs} copy={items.understand} example={status.example} />,
    interact: <HotspotPlate organ={organs.heart} copy={items.interact} example={status.example} />,
    practise: <QuizPlate organ={organs.kidneys} copy={items.practise} example={status.example} />,
    remember: <TissuePlate organ={organs.brain} copy={items.remember} />,
  };

  const details: Record<StepKey, ReactNode> = {
    explore: <PointList label={steps.availableLabel} points={items.explore.points} />,
    understand: <PointList label={steps.availableLabel} points={items.understand.points} />,
    interact: <ToolList label={items.interact.toolsLabel} tools={items.interact.tools} available={steps.availableLabel} />,
    practise: <PointList label={steps.availableLabel} points={items.practise.points} />,
    remember: <Ledger copy={items.remember} status={status} />,
  };

  return (
    <section className="how-steps ui-section" aria-labelledby="how-steps-title">
      <div className="ui-container">
        <SectionHeader id="how-steps-title" eyebrow={steps.eyebrow} title={steps.title} lede={steps.lede} className="how-steps__header" />
        <ol className="how-steps__list">
          {(Object.keys(items) as StepKey[]).map((key, index) => {
            const item = items[key];
            return (
              <li key={key} className="how-step" data-side={index % 2 === 0 ? "end" : "start"}>
                <article aria-labelledby={`how-step-${key}`} className="how-step__inner">
                  <span className="how-step__num" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="how-step__text" data-reveal>
                    <h3 id={`how-step-${key}`} className="how-step__title">
                      {item.title}
                    </h3>
                    <p className="how-step__claim">{item.claim}</p>
                    <p className="ui-body how-step__body">{item.body}</p>
                    {details[key]}
                  </div>
                  <div className="how-step__figure" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
                    {figures[key]}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- text details */

function PointList({ label, points }: { label: string; points: Record<string, string> }) {
  return (
    <div className="how-points">
      <StatusTag tone="available">{label}</StatusTag>
      <ul className="how-points__list">
        {Object.entries(points).map(([key, point]) => (
          <li key={key}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ToolList({
  label,
  available,
  tools,
}: {
  label: string;
  available: string;
  tools: Items["interact"]["tools"];
}) {
  return (
    <div className="how-points">
      <StatusTag tone="available">{available}</StatusTag>
      <dl className="how-tools" aria-label={label}>
        {Object.entries(tools).map(([key, tool]) => (
          <div key={key} className="how-tools__row">
            <dt>{tool.name}</dt>
            <dd>{tool.note}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Ledger({ copy, status }: { copy: Items["remember"]; status: Status }) {
  return (
    <div className="how-points">
      <p className="how-points__label">{copy.ledgerLabel}</p>
      <ul className="how-ledger">
        {Object.entries(copy.ledger).map(([key, entry]) => {
          const available = key === "retry";
          return (
            <li key={key} className="how-ledger__row">
              <span className="how-ledger__text">{entry}</span>
              <StatusTag tone={available ? "available" : "soon"}>{available ? status.available : status.comingSoon}</StatusTag>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- figures */

/** The organ library as a specimen drawer: every organ is a real link into Explore. */
function LibraryTray({ locale, organs, copy }: { locale: string; organs: Record<OrganId, Organ>; copy: Items["explore"] }) {
  return (
    <figure className="how-figure">
      <ul className="how-tray">
        {organIds.map((id) => {
          const organ = organs[id];
          return (
            <li key={id}>
              <Link
                className="how-tray__item"
                href={localeHref(locale, "explore", { organ: id })}
                aria-label={format(copy.openOrgan, { organ: organ.name })}
              >
                <span className="how-tray__art">
                  <OrganArt organ={organ} asset="thumb" alt="" size={180} loading="lazy" />
                </span>
                <span className="how-tray__name">{organ.name}</span>
                <span className="how-tray__latin ui-latin" lang="la">
                  {organ.scientificName}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <figcaption className="ui-caption how-figure__caption">{copy.figureCaption}</figcaption>
    </figure>
  );
}

function UnderstandPlate({ organ, copy, example }: { organ: Organ; copy: Items["understand"]; example: string }) {
  const facts: [string, string][] = [
    [copy.facts.location, organ.location],
    [copy.facts.function, organ.function],
    [copy.facts.bloodSupply, organ.bloodSupply],
  ];
  return (
    <figure className="how-figure how-understand">
      <div className="how-understand__art">
        <div className="how-art how-art--organ">
          <OrganArt organ={organ} asset="organ" alt={copy.organAlt} size={720} />
        </div>
        <div className="how-understand__tissue">
          <div className="how-art how-art--tissue">
            <OrganArt organ={organ} asset="microscopic" alt={copy.tissueAlt} size={720} />
          </div>
          <span className="ui-caption">{format(copy.tissueCaption, { tissue: organ.tissue })}</span>
        </div>
      </div>
      <div className="how-label">
        <div className="how-label__head">
          <span className="how-label__name">{organ.name}</span>
          <span className="ui-latin how-label__latin" lang="la">
            {organ.scientificName}
          </span>
        </div>
        <dl className="how-label__facts">
          {facts.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>
                <bdi>{value}</bdi>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <figcaption className="how-figure__caption how-figure__caption--tagged">
        <StatusTag tone="example">{example}</StatusTag>
        <span className="ui-caption">{format(copy.figureCaption, { organ: organ.name })}</span>
      </figcaption>
    </figure>
  );
}

function HotspotPlate({ organ, copy, example }: { organ: Organ; copy: Items["interact"]; example: string }) {
  const markers = HEART_MARKERS.flatMap((marker) => {
    const hotspot = organ.hotspots.find((entry) => entry.id === marker.id);
    return hotspot ? [{ ...marker, hotspot }] : [];
  });
  return (
    <figure className="how-figure how-hotspots">
      <div className="how-hotspots__art">
        <div className="how-art how-art--organ">
          <OrganArt organ={organ} asset="organ" alt={copy.organAlt} size={720} />
        </div>
        {markers.map(({ id, x, y, hotspot }, index) => (
          <span
            key={id}
            className="how-marker"
            aria-hidden
            style={{ left: `${x}%`, top: `${y}%`, "--marker": hotspot.color } as React.CSSProperties}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <ol className="how-legend">
        {markers.map(({ id, hotspot }, index) => (
          <li key={id} className="how-legend__row">
            <span className="how-legend__num" aria-hidden>
              {index + 1}
            </span>
            <span className="how-legend__label">{hotspot.label}</span>
            <span className="ui-latin how-legend__latin" lang="la">
              {hotspot.ta}
            </span>
            <span className="how-legend__detail">{hotspot.detail}</span>
          </li>
        ))}
      </ol>
      <figcaption className="how-figure__caption how-figure__caption--tagged">
        <StatusTag tone="example">{example}</StatusTag>
        <span className="ui-caption">{copy.figureCaption}</span>
      </figcaption>
    </figure>
  );
}

function QuizPlate({ organ, copy, example }: { organ: Organ; copy: Items["practise"]; example: string }) {
  const target = organ.hotspots.find((hotspot) => hotspot.id === "ureter") ?? organ.hotspots[0];
  const total = organ.hotspots.length;
  return (
    <figure className="how-figure how-quiz">
      <div className="how-quiz__art">
        <div className="how-art how-art--organ">
          <OrganArt organ={organ} asset="organ" alt={copy.organAlt} size={720} />
        </div>
        <div className="how-quiz__bar" aria-hidden>
          <div className="how-quiz__prompt">
            <em>{copy.quizFind}</em>
            <strong>{target.label}</strong>
          </div>
          <div className="how-quiz__meta">
            <span>{format(copy.quizProgress, { current: "1", total: String(total) })}</span>
            <ol className="how-quiz__pips">
              {organ.hotspots.map((hotspot, index) => (
                <li key={hotspot.id} className={index === 0 ? "is-now" : undefined} />
              ))}
            </ol>
            <small>{copy.quizHint}</small>
          </div>
        </div>
      </div>
      <figcaption className="how-figure__caption how-figure__caption--tagged">
        <StatusTag tone="example">{example}</StatusTag>
        <span className="ui-caption">{format(copy.figureCaption, { organ: organ.name })}</span>
      </figcaption>
    </figure>
  );
}

function TissuePlate({ organ, copy }: { organ: Organ; copy: Items["remember"] }) {
  return (
    <figure className="how-figure how-tissue">
      <div className="how-art how-art--tissue how-tissue__art">
        <OrganArt organ={organ} asset="microscopic" alt={copy.tissueAlt} size={720} />
      </div>
      <figcaption className="ui-caption how-figure__caption how-tissue__caption">
        {format(copy.figureCaption, { tissue: organ.tissue })}
      </figcaption>
    </figure>
  );
}
