/**
 * The Corpus lockup, set in type: CORPUS over ANATOMY ATELIER. It is a logo,
 * so it stays in Latin letters in every locale and is never translated — the
 * accessible name of the link that wraps it carries the localised label.
 */
export function Wordmark({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <span className={["ui-wordmark", `ui-wordmark--${size}`, className].filter(Boolean).join(" ")} translate="no" lang="en" dir="ltr" aria-hidden>
      <span className="ui-wordmark__name">Corpus</span>
      <span className="ui-wordmark__descriptor">Anatomy Atelier</span>
    </span>
  );
}
