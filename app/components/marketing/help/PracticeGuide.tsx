import { OrganArt } from "../../anatomy/OrganArt";
import { StatusTag } from "../../ui/StatusTag";
import { format } from "../../../i18n/types";
import { GuideSection, type HelpContext } from "./shared";

/** Which structure the static example asks for, and where it sits in the round. */
const EXAMPLE = { organ: "heart", hotspot: "left-ventricle", step: 2 } as const;

export function PracticeGuide({ ctx }: { ctx: HelpContext }) {
  const copy = ctx.help.practice;
  const { quiz } = ctx.ui;
  const organ = ctx.organs.find((item) => item.id === EXAMPLE.organ)!;
  const target = organ.hotspots.find((hotspot) => hotspot.id === EXAMPLE.hotspot) ?? organ.hotspots[0];
  const total = organ.hotspots.length;

  return (
    <GuideSection ctx={ctx} guide="practice" title={copy.title}>
      <p className="ui-lede help-intro" data-reveal>
        {copy.intro}
      </p>

      <div className="help-practice">
        <div data-reveal>
          <ol className="help-sequence">
            {Object.entries(copy.steps).map(([key, step], index) => (
              <li key={key} className="help-sequence__item">
                <span className="help-sequence__number" aria-hidden>
                  {ctx.num(index + 1)}
                </span>
                <p className="ui-body">{format(step, { quiz: ctx.ui.info.quiz })}</p>
              </li>
            ))}
          </ol>
          <p className="help-footnote">{copy.note}</p>
        </div>

        {/* A static picture of the real quiz prompt, built from the same labels
            the quiz uses — marked as an example, because nothing here is live. */}
        <figure className="help-example" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
          <div className="help-example__frame">
            <StatusTag tone="example">{ctx.site.common.status.example}</StatusTag>
            <div className="help-example__art">
              <OrganArt organ={organ} asset="organ" alt="" size={320} loading="lazy" />
            </div>
            <div className="help-example__prompt">
              <em>{quiz.find}</em>
              <strong>{target.label}</strong>
              <span className="help-example__meta">
                {format(quiz.progress, { current: ctx.num(EXAMPLE.step), total: ctx.num(total) })}
              </span>
              <span className="help-example__pips" aria-hidden>
                {organ.hotspots.map((hotspot, index) => (
                  <i
                    key={hotspot.id}
                    className={index < EXAMPLE.step - 1 ? "is-done" : index === EXAMPLE.step - 1 ? "is-now" : undefined}
                  />
                ))}
              </span>
              <small>{quiz.hint}</small>
            </div>
          </div>
          <figcaption className="ui-caption help-example__caption">{copy.exampleCaption}</figcaption>
        </figure>
      </div>
    </GuideSection>
  );
}
