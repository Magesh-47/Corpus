/** Two-digit plate and chapter numbers ("01"), kept in Western digits to match Explore. */
export function plateNumber(value: number) {
  return String(value).padStart(2, "0");
}

/**
 * The running head that opens each chapter of the landing page: a number, a
 * name and a hairline, as in the margin of an atlas.
 */
export function SectionMark({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <p className="home-mark" data-reveal>
      <span className="home-mark__number" aria-hidden>
        {plateNumber(number)}
      </span>
      <span className="home-mark__label">{children}</span>
    </p>
  );
}
