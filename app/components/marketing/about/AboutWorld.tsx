import type { SiteDictionary } from "../../../i18n/site";
import { format } from "../../../i18n/types";
import { IndexMarker } from "../../ui/Editorial";
import { LanguageNames, type LanguageName } from "./LanguageNames";

type Copy = SiteDictionary["about"];

/** Chapter 04: the languages, with the names themselves set as the evidence beside the claim. */
export function AboutWorld({ copy, names, latin }: { copy: Copy; names: LanguageName[]; latin: string }) {
  const { world } = copy;
  const count = String(names.length);
  return (
    <section className="ui-section about-world" aria-labelledby="about-world-title">
      <div className="ui-container about-world__grid">
        <div className="about-world__text">
          <header className="about-chapter-head">
            <IndexMarker n={4} label={world.label} />
            <h2 id="about-world-title" className="ui-h2 about-world__title" data-reveal>
              {world.title}
            </h2>
          </header>
          <div className="about-world__body" data-reveal>
            {Object.entries(world.body).map(([key, paragraph]) => (
              <p key={key} className={`about-world__p about-world__p--${key}`}>
                {format(paragraph, { count })}
              </p>
            ))}
          </div>
        </div>
        <div className="about-world__visual">
          <LanguageNames title={format(world.namesTitle, { count })} caption={world.namesCaption} names={names} latin={latin} />
        </div>
      </div>
    </section>
  );
}
