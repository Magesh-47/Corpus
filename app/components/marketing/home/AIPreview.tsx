import { StatusTag } from "../../ui/StatusTag";
import type { SiteDictionary } from "../../../i18n/site";
import { revealDelay } from "./motion";
import { Lines } from "./shared";

/**
 * A written example of the planned AI guide — deliberately not an interface:
 * no input, no send control, no typing effect, and it says so twice.
 */
export function AIPreview({ copy }: { copy: SiteDictionary["marketing"]["ai"] }) {
  return (
    <section className="ui-section home-ai" aria-labelledby="home-ai-title">
      <div className="ui-container home-ai__grid">
        <div className="home-ai__intro">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-ai-title" className="ui-h2" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(140)}>
            {copy.lede}
          </p>
        </div>

        <figure className="home-ai__sheet" data-reveal style={revealDelay(160)}>
          <p className="ui-label home-ai__label">{copy.exampleLabel}</p>
          <dl className="home-ai__exchange">
            <div className="home-ai__turn">
              <dt className="ui-label">{copy.you}</dt>
              <dd className="home-ai__question">{copy.question}</dd>
            </div>
            <div className="home-ai__turn home-ai__turn--corpus">
              <dt className="ui-label">{copy.corpus}</dt>
              <dd className="home-ai__answer">{copy.answer}</dd>
            </div>
          </dl>
          <figcaption className="home-ai__foot">
            <StatusTag tone="soon">{copy.status}</StatusTag>
            <span className="ui-caption">{copy.disclaimer}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
