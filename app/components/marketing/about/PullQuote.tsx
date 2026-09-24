import { Emphasis } from "./Emphasis";

/** A line set large between hairlines — the essay's pauses. */
export function PullQuote({ text, lang }: { text: string; lang?: string }) {
  return (
    <blockquote className="about-quote" data-reveal lang={lang}>
      <span className="about-quote__mark" aria-hidden>
        “
      </span>
      <p>
        <Emphasis text={text} />
      </p>
    </blockquote>
  );
}
