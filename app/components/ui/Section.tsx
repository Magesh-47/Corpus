import type { ReactNode } from "react";

type Tone = "paper" | "deep" | "solid" | "ink";

/**
 * A landmark section with the standard vertical rhythm. `labelledBy` points at
 * the id of the section's heading so every region has an accessible name.
 * `tone="ink"` is the warm, museum-dark ground — use it once per page at most.
 */
export function Section({
  labelledBy,
  tone = "paper",
  spacing = "default",
  className,
  id,
  children,
}: {
  labelledBy: string;
  tone?: Tone;
  spacing?: "default" | "tight" | "none";
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const classes = [
    spacing !== "none" && "ui-section",
    spacing === "tight" && "ui-section--tight",
    tone !== "paper" && `ui-tone-${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
