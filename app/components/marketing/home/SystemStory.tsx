import { Annotations, type Note } from "../../ui/Editorial";
import type { Organ } from "../../../i18n/merge";
import type { SiteDictionary } from "../../../i18n/site";
import { revealDelay } from "./motion";
import { Lines, StillImage, stills } from "./shared";

/**
 * The heart's box inside the composition, as percentages of the composition
 * (which takes the lungs still's proportions). Simplified: the heart is drawn
 * in front of the lungs rather than partly behind them.
 */
const HEART_BOX = { left: 34, top: 37, width: 37 };
const COMPOSITION_RATIO = stills.lungs.height / stills.lungs.width;
const HEART_HEIGHT = (HEART_BOX.width * (stills.heart.height / stills.heart.width)) / COMPOSITION_RATIO;

/** A point on the heart still, moved into composition coordinates. */
function onHeart([x, y]: readonly number[]) {
  return { x: HEART_BOX.left + (x / 100) * HEART_BOX.width, y: HEART_BOX.top + (y / 100) * HEART_HEIGHT };
}

export function SystemStory({
  copy,
  heart,
  lungs,
}: {
  copy: SiteDictionary["marketing"]["story"];
  heart: Organ;
  lungs: Organ;
}) {
  const lungLabel = (id: string) => lungs.hotspots.find((hotspot) => hotspot.id === id)?.label ?? id;
  const aorta = onHeart(stills.heart.points.aorta);
  const labels = [
    { id: "trachea", ...xy(stills.lungs.points.trachea), side: "right", length: 120, label: lungLabel("trachea") },
    { id: "aorta", ...aorta, side: "left", length: 150, label: heart.hotspots.find((h) => h.id === "aorta")?.label ?? "" },
    { id: "right-lung", ...xy(stills.lungs.points["right-lung"]), side: "left", length: 40, label: lungLabel("right-lung") },
    { id: "left-lung", ...xy(stills.lungs.points["left-lung"]), side: "right", length: 60, label: lungLabel("left-lung") },
    { id: "heart", ...onHeart([60, 62]), side: "right", length: 150, label: heart.name },
  ] satisfies Note[];

  return (
    <section className="ui-section home-story" aria-labelledby="home-story-title">
      <div className="ui-container home-story__grid">
        <h2 id="home-story-title" className="ui-h2 home-story__title" data-reveal>
          <Lines text={copy.title} />
        </h2>
        <div className="home-story__aside" data-reveal style={revealDelay(140)}>
          <p className="ui-statement home-story__body">{copy.body}</p>
          <ol className="home-story__legend" aria-label={copy.legendLabel}>
            {labels.map((note) => (
              <li key={note.id}>{note.label}</li>
            ))}
          </ol>
        </div>
        <figure className="home-story__figure" data-reveal style={revealDelay(80)}>
          <div className="home-story__composition" role="img" aria-label={copy.alt}>
            <StillImage still={stills.lungs} alt="" className="home-story__lungs" />
            <StillImage
              still={stills.heart}
              alt=""
              className="home-story__heart"
              style={{ left: `${HEART_BOX.left}%`, top: `${HEART_BOX.top}%`, width: `${HEART_BOX.width}%` }}
            />
            <Annotations notes={labels} className="home-story__notes" />
          </div>
          <figcaption className="home-figcaption">
            <span>{copy.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function xy([x, y]: readonly number[]) {
  return { x, y };
}
