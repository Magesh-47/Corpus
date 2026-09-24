import type { ReactNode } from "react";

type Tone = "soon" | "available" | "example" | "preview";

/**
 * Marks what is real and what is not yet — "Coming soon", "Example",
 * "Available now". The label carries the meaning; the dot is decoration.
 */
export function StatusTag({ tone = "soon", children }: { tone?: Tone; children: ReactNode }) {
  return <span className={`ui-tag ui-tag--${tone}`}>{children}</span>;
}
