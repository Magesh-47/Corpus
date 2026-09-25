import type { ReactNode } from "react";
import { ExploreFigure, PracticeFigure, RememberFigure, SeeFigure, UnderstandFigure } from "./HowFigures";
import { stepKeys, stepNumber, type HowCopy, type Organs, type Status, type StepKey } from "./types";

/**
 * The five steps, numbered like catalogue entries and joined by one hairline
 * spine. Text and figure swap sides from step to step, so the page reads as a
 * sequence rather than a stack of identical cards.
 */
export function HowSteps({ copy, organs, status }: { locale: string; copy: HowCopy; organs: Organs; status: Status }) {
  const { steps } = copy;

  const figures: Record<StepKey, ReactNode> = {
    see: <SeeFigure organ={organs.heart} copy={steps.see} />,
    explore: <ExploreFigure organ={organs.heart} copy={steps.explore} />,
    understand: <UnderstandFigure organ={organs.lungs} copy={steps.understand} />,
    practice: <PracticeFigure organ={organs.brain} copy={steps.practice} example={status.example} />,
    remember: <RememberFigure copy={steps.remember} comingSoon={status.comingSoon} />,
  };

  return (
    <div className="how-steps">
      {stepKeys.map((key, index) => {
        const step = steps[key];
        const titleId = `how-step-${key}-title`;
        return (
          <section
            key={key}
            id={`how-step-${key}`}
            className="how-step"
            data-step={key}
            data-side={index % 2 === 0 ? "text-first" : "figure-first"}
            aria-labelledby={titleId}
          >
            <div className="ui-container how-step__grid">
              <div className="how-step__rail" aria-hidden>
                <span className="how-step__numeral" dir="ltr">
                  {stepNumber(index)}
                </span>
              </div>

              <div className="how-step__text" data-reveal>
                <p className="how-step__kicker">
                  <span className="how-step__kicker-n" dir="ltr">
                    {stepNumber(index)}
                  </span>
                  <span className="how-step__kicker-name">{step.name}</span>
                </p>
                <h2 id={titleId} className="ui-h2 how-step__title">
                  {step.title}
                </h2>
                <p className="ui-lede how-step__line">{step.line}</p>
                <p className="ui-body how-step__body">{step.body}</p>
              </div>

              <div className="how-step__figure" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
                {figures[key]}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
