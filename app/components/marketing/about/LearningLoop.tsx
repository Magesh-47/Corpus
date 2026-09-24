import type { SiteDictionary } from "../../../i18n/site";

type Copy = SiteDictionary["about"]["chapters"]["active"]["loop"];

/** Explore → Understand → Practice → Remember, as one continuous line. */
export function LearningLoop({ copy }: { copy: Copy }) {
  const steps = Object.entries(copy.steps);
  return (
    <div className="about-loop">
      <h3 className="about-loop__title" data-reveal>
        {copy.title}
      </h3>
      <ol className="about-loop__list">
        {steps.map(([key, step], index) => (
          <li
            key={key}
            className="about-loop__step"
            data-reveal
            style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
          >
            <span className="about-loop__marker" aria-hidden>
              <span className="about-loop__dot" />
              <span className="about-loop__number">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <h4 className="about-loop__name">{step.title}</h4>
            <p className="ui-body">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
