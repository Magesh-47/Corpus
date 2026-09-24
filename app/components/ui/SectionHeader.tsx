import type { ReactNode } from "react";

/** Eyebrow, heading and optional lede — the opening of most sections. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  level = 2,
  align = "start",
  id,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  /** 1 for a page's opening heading; sections below it use 2. */
  level?: 1 | 2;
  align?: "start" | "center";
  id?: string;
  className?: string;
}) {
  const Heading = level === 1 ? "h1" : "h2";
  const classes = ["ui-section-header", align === "center" && "ui-section-header--center", className]
    .filter(Boolean)
    .join(" ");
  return (
    <header className={classes}>
      {eyebrow && <p className="ui-eyebrow">{eyebrow}</p>}
      <Heading id={id} className={level === 1 ? "ui-display" : "ui-h2"}>
        {title}
      </Heading>
      {lede && <p className="ui-lede">{lede}</p>}
    </header>
  );
}
