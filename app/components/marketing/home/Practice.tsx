import { ButtonLink } from "../../ui/Button";
import { Annotations, type Note } from "../../ui/Editorial";
import { StatusTag } from "../../ui/StatusTag";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { format, type UiDictionary } from "../../../i18n/types";
import { localeHref } from "../../../lib/routes";
import { revealDelay } from "./motion";
import { Lines, StillImage, stills } from "./shared";

/** The four brain hotspots, numbered in this order on the still. */
const MARKED: (keyof typeof stills.brain.points)[] = ["frontal", "parietal", "temporal", "cerebellum"];
/** The structure the preview asks for — one of the four, as Explore's quiz would. */
const ASKED: (typeof MARKED)[number] = "temporal";

/**
 * A still of the labelling quiz: numbered dots on the model and the prompt
 * beside it. The prompt, hint and progress are Explore's own quiz strings.
 * Nothing here is interactive — the real quiz is one link away.
 */
export function Practice({
  locale,
  copy,
  status,
  ui,
  brain,
}: {
  locale: string;
  copy: SiteDictionary["marketing"]["practice"];
  status: SiteDictionary["common"]["status"];
  ui: UiDictionary;
  brain: Organ;
}) {
  const notes: Note[] = MARKED.map((id) => {
    const [x, y] = stills.brain.points[id];
    return { id, x, y, length: 0, label: null };
  });
  const asked = brain.hotspots.find((hotspot) => hotspot.id === ASKED);

  return (
    <section className="ui-section home-practice" aria-labelledby="home-practice-title">
      <div className="ui-container home-practice__grid">
        <div className="home-practice__text">
          <p className="ui-eyebrow" data-reveal>
            {copy.eyebrow}
          </p>
          <h2 id="home-practice-title" className="ui-h2" data-reveal>
            <Lines text={copy.title} />
          </h2>
          <p className="ui-lede" data-reveal style={revealDelay(140)}>
            {copy.lede}
          </p>
          <div data-reveal style={revealDelay(220)}>
            <ButtonLink href={localeHref(locale, "explore", { organ: "brain" })} variant="secondary" arrow>
              {copy.cta}
            </ButtonLink>
          </div>
        </div>

        <figure className="home-practice__figure" data-reveal style={revealDelay(120)}>
          <div className="home-practice__model">
            <StillImage still={stills.brain} alt={copy.alt} />
            <Annotations notes={notes} numbered className="home-practice__marks" />
          </div>

          <div className="home-practice__panel">
            <div className="home-practice__panel-head">
              <span className="ui-label">{format(ui.quiz.progress, { current: "1", total: String(MARKED.length) })}</span>
              <StatusTag tone="preview">{status.preview}</StatusTag>
            </div>
            <p className="ui-label home-practice__identify">{copy.identify}</p>
            {asked && (
              <p className="home-practice__asked">
                <span className="home-practice__asked-name">{asked.label}</span>
                <span className="ui-latin" lang="la">
                  {asked.ta}
                </span>
              </p>
            )}
            <p className="home-practice__hint">{ui.quiz.hint}</p>
          </div>

          <figcaption className="home-figcaption home-practice__caption">
            <span>{copy.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
