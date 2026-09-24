import type { CSSProperties } from "react";

/** Stagger for a scroll reveal (`data-reveal`). */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

/** Stagger for an above-the-fold entrance (`ui-rise`). */
export function riseDelay(ms: number): CSSProperties {
  return { "--rise-delay": `${ms}ms` } as CSSProperties;
}
