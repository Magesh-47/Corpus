import { ArrowDown } from "lucide-react";
import { GUIDES, type HelpContext } from "./shared";

/**
 * The six topics as a numbered index — each entry a plain link to its guide
 * further down the page, so it needs no script.
 */
export function HelpCategories({ ctx }: { ctx: HelpContext }) {
  const { categories } = ctx.help;
  return (
    <section className="help-topics" aria-labelledby="help-topics-title">
      <div className="ui-container">
        <h2 id="help-topics-title" className="help-topics__title" data-reveal>
          {categories.heading}
        </h2>
        <ol className="help-topics__list">
          {GUIDES.map((guide, index) => {
            const item = categories.items[guide.key];
            return (
              <li
                key={guide.key}
                className="help-topics__item"
                data-reveal
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
              >
                <a href={`#${guide.id}`} className="help-topics__link">
                  <span className="help-topics__number" aria-hidden>
                    {ctx.num(index + 1, 2)}
                  </span>
                  <span className="help-topics__label">{item.label}</span>
                  <span className="help-topics__line">{item.line}</span>
                  <ArrowDown className="help-topics__arrow" size={18} strokeWidth={1.5} aria-hidden />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
