import type { CSSProperties, ReactNode } from "react";

/*
 * Small editorial pieces shared by every page: the eyebrow, the hairline
 * divider, the catalogue index number, the plate (a framed anatomical image
 * with its caption) and leader-line annotations. Styles live in site.css.
 */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={["ui-eyebrow", className].filter(Boolean).join(" ")}>{children}</p>;
}

export function Divider({ strong, className }: { strong?: boolean; className?: string }) {
  return <hr className={["ui-rule", strong && "ui-rule--strong", className].filter(Boolean).join(" ")} />;
}

/** "01" set as a catalogue number, with an optional label beside it. */
export function IndexMarker({ n, label, className }: { n: number | string; label?: ReactNode; className?: string }) {
  const value = typeof n === "number" ? String(n).padStart(2, "0") : n;
  return (
    <span className={["ui-index", className].filter(Boolean).join(" ")}>
      <span className="ui-index__n" dir="ltr">
        {value}
      </span>
      {label && <span className="ui-index__label">{label}</span>}
    </span>
  );
}

/**
 * A framed anatomical image. `head` sits above the image (plate number, Latin
 * title), `caption` below it. The frame is optional: `bare` drops the border
 * so the illustration floats on the paper.
 */
export function Plate({
  head,
  caption,
  bare,
  className,
  children,
}: {
  head?: ReactNode;
  caption?: ReactNode;
  bare?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure className={["ui-plate", bare && "ui-plate--bare", className].filter(Boolean).join(" ")}>
      {head && <div className="ui-plate__head">{head}</div>}
      <div className="ui-plate__stage">{children}</div>
      {caption && <figcaption className="ui-plate__caption">{caption}</figcaption>}
    </figure>
  );
}

export type Note = {
  id: string;
  /** Position of the structure on the image, as a percentage of its box. */
  x: number;
  y: number;
  label: ReactNode;
  /** Which way the leader line runs from the dot. Physical, because images never mirror. */
  side?: "left" | "right";
  /** Leader line length in px. */
  length?: number;
};

/**
 * Thin leader lines from a point on an image to a label, drawn in on load.
 * Place inside a `position: relative` box that is exactly the image's size.
 * Decorative by default (`aria-hidden`): give the same names in a caption or
 * legend so they reach assistive technology once, not twice.
 */
export function Annotations({ notes, numbered, className }: { notes: Note[]; numbered?: boolean; className?: string }) {
  return (
    <ol className={["ui-notes", className].filter(Boolean).join(" ")} aria-hidden>
      {notes.map((note, index) => (
        <li
          key={note.id}
          className={`ui-note ui-note--${note.side ?? "right"}`}
          style={{ "--x": `${note.x}%`, "--y": `${note.y}%`, "--i": index, "--len": `${note.length ?? 64}px` } as CSSProperties}
        >
          <span className="ui-note__dot">{numbered ? index + 1 : null}</span>
          <span className="ui-note__line" />
          <span className="ui-note__label">{note.label}</span>
        </li>
      ))}
    </ol>
  );
}
