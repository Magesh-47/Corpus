import type { SiteDictionary } from "../../../i18n/site";

type Copy = SiteDictionary["about"]["chapters"]["atelier"]["tenets"];

/** The atelier's working principles, numbered like the rules pinned to a studio wall. */
export function Tenets({ copy }: { copy: Copy }) {
  return (
    <ol className="about-tenets">
      {Object.entries(copy).map(([key, tenet], index) => (
        <li key={key} className="about-tenets__item" data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}>
          <span className="about-tenets__number" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="ui-h3 about-tenets__title">{tenet.title}</h3>
          <p className="ui-body">{tenet.body}</p>
        </li>
      ))}
    </ol>
  );
}
