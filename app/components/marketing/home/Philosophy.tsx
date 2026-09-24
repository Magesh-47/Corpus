import type { SiteDictionary } from "../../../i18n/site";
import { revealDelay } from "./motion";
import { SectionMark, plateNumber } from "./SectionMark";

/** See, understand, remember: three open columns divided by hairlines, not cards. */
export function Philosophy({ copy }: { copy: SiteDictionary["marketing"]["philosophy"] }) {
  return (
    <section className="ui-section home-philosophy" aria-labelledby="home-philosophy-title">
      <div className="ui-container">
        <SectionMark number={1}>{copy.mark}</SectionMark>

        <div className="home-philosophy__intro">
          <h2 id="home-philosophy-title" className="ui-h2 home-philosophy__title" data-reveal>
            {copy.title}
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(120)}>
            {copy.lede}
          </p>
        </div>

        <ol className="home-pillars">
          {Object.entries(copy.pillars).map(([key, pillar], index) => (
            <li key={key} className="home-pillar" data-reveal style={revealDelay(index * 140)}>
              <span className="home-pillar__number" aria-hidden>
                {plateNumber(index + 1)}
              </span>
              <h3 className="home-pillar__title">{pillar.title}</h3>
              <p className="home-pillar__line">{pillar.line}</p>
              <p className="ui-body home-pillar__body">{pillar.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

