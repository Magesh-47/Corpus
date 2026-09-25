import type { SiteDictionary } from "../../../i18n/site";
import { revealDelay } from "./motion";
import { Lines, StillImage, plateNumber, stills } from "./shared";

type Copy = SiteDictionary["marketing"]["features"];
type Key = keyof Copy["items"];

/**
 * The page's one ink-toned spread: four things the viewer does, each shown
 * with a still rendered from the Explore model it describes.
 */
export function ViewerFeatures({ copy }: { copy: Copy }) {
  const visuals: Record<Key, React.ReactNode> = {
    rotate: <StillImage still={stills.heartBack} alt={copy.items.rotate.alt} />,
    isolate: <StillImage still={stills.eye} alt={copy.items.isolate.alt} />,
    section: <StillImage still={stills.heartSection} alt={copy.items.section.alt} />,
    compare: (
      <span className="home-feature__pair" role="img" aria-label={copy.items.compare.alt}>
        <StillImage still={stills.brainSide} alt="" />
        <StillImage still={stills.heart} alt="" />
      </span>
    ),
  };

  return (
    <section className="ui-section ui-tone-ink home-features" aria-labelledby="home-features-title">
      <div className="ui-container">
        <header className="home-features__header">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-features-title" className="ui-h2" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-caption home-features__note" data-reveal style={revealDelay(120)}>
            {copy.note}
          </p>
        </header>

        <ol className="home-features__grid">
          {(Object.entries(copy.items) as [Key, Copy["items"][Key]][]).map(([key, item], index) => (
            <li key={key} className={`home-feature home-feature--${key}`} data-reveal style={revealDelay((index % 2) * 120)}>
              <div className="home-feature__visual">{visuals[key]}</div>
              <div className="home-feature__text">
                <p className="home-feature__mark">
                  <span className="home-feature__number" dir="ltr">
                    {plateNumber(index + 1)}
                  </span>
                  <span className="ui-label">{item.label}</span>
                </p>
                <h3 className="home-feature__line">{item.line}</h3>
                <p className="home-feature__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
