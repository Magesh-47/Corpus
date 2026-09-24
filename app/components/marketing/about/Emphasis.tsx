import { Fragment } from "react";

/**
 * Renders copy in which *asterisks* mark an italic phrase. Translators move the
 * asterisks with the words, so emphasis survives any word order.
 */
export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/g).map((part, index) =>
        index % 2 === 1 ? <em key={index}>{part}</em> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  );
}
