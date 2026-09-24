import type { ReactNode } from "react";
import { format } from "../../../i18n/types";

/**
 * One chapter of the About essay: a numbered rail at the start edge, the
 * heading and prose in a reading column, and any plates or indexes below.
 */
export function Chapter({
  id,
  number,
  chapterLabel,
  label,
  title,
  body,
  children,
  tone,
}: {
  id: string;
  number: number;
  /** "Chapter {number}" — announced with the label for screen readers. */
  chapterLabel: string;
  label: string;
  title: string;
  body: Record<string, string>;
  children?: ReactNode;
  tone?: "deep";
}) {
  const headingId = `${id}-title`;
  const numeral = String(number).padStart(2, "0");
  return (
    <section id={id} className={`about-chapter${tone ? ` about-chapter--${tone}` : ""}`} aria-labelledby={headingId}>
      <div className="ui-container about-chapter__inner">
        <div className="about-chapter__rail" data-reveal>
          <span className="about-chapter__numeral" aria-hidden>
            {numeral}
          </span>
          <p className="ui-eyebrow about-chapter__label">
            <span className="about-sr">{format(chapterLabel, { number: String(number) })}: </span>
            {label}
          </p>
        </div>
        <div className="about-chapter__text">
          <h2 id={headingId} className="ui-h2 about-chapter__title" data-reveal>
            {title}
          </h2>
          <div className="about-chapter__body" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {Object.entries(body).map(([key, paragraph]) => (
              <p key={key} className="ui-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        {children && <div className="about-chapter__extra">{children}</div>}
      </div>
    </section>
  );
}
