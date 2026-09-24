import type { SiteDictionary } from "../../../i18n/site";
import { StatusTag } from "../../ui/StatusTag";

type Copy = SiteDictionary["about"]["chapters"]["future"]["layers"];

/**
 * Plans, drawn as layers laid over Explore. Every one carries a "Coming soon"
 * tag, and nothing here links anywhere: none of these exist yet.
 */
export function FutureLayers({ copy, status }: { copy: Copy; status: string }) {
  return (
    <ol className="about-future">
      {Object.entries(copy).map(([key, layer], index) => (
        <li key={key} className="about-future__item" data-reveal style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}>
          <div className="about-future__meta">
            <span className="about-future__number" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <StatusTag tone="soon">{status}</StatusTag>
          </div>
          <h3 className="ui-h3 about-future__title">{layer.title}</h3>
          <p className="ui-body">{layer.body}</p>
        </li>
      ))}
    </ol>
  );
}
