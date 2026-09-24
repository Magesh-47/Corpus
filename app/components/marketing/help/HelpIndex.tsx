import { HELP_SECTIONS, type HelpContext } from "./shared";

/**
 * The table of contents: plain anchor links, so it needs no script. Sticky
 * beside the chapters on wide screens; a compact two-column list above them
 * on small ones.
 */
export function HelpIndex({ ctx }: { ctx: HelpContext }) {
  const { index, sections } = ctx.help;
  return (
    <nav className="help-index" aria-labelledby="help-index-title">
      <h2 id="help-index-title" className="help-index__title">
        {index.heading}
      </h2>
      <ol className="help-index__list">
        {HELP_SECTIONS.map((section, position) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="help-index__link">
              <span className="help-index__number" aria-hidden>
                {ctx.num(position + 1, 2)}
              </span>
              <span>{sections[section.key]}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
