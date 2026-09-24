import type { ReactNode } from "react";

export type AccordionItem = {
  /** Stable id — becomes the element id, so an item can be linked to (#id). */
  id: string;
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
};

/**
 * A list of disclosures built on native <details>/<summary>. The platform
 * supplies the button role, the expanded/collapsed state, Enter/Space toggling
 * and find-in-page expansion, so no script ships and nothing needs hydrating.
 *
 * Styling is left to the caller through a BEM block name: the root gets
 * `block`, each item `block__item`, then `__summary`, `__label`, `__marker`
 * and `__panel`. `name` makes the group exclusive (one item open at a time)
 * in browsers that support it; elsewhere items simply open independently.
 */
export function Accordion({
  items,
  block = "ui-accordion",
  name,
  className,
}: {
  items: AccordionItem[];
  block?: string;
  name?: string;
  className?: string;
}) {
  return (
    <div className={[block, className].filter(Boolean).join(" ")}>
      {items.map((item) => (
        <details key={item.id} id={item.id} name={name} open={item.defaultOpen} className={`${block}__item`}>
          <summary className={`${block}__summary`}>
            <span className={`${block}__label`}>{item.summary}</span>
            <span className={`${block}__marker`} aria-hidden />
          </summary>
          <div className={`${block}__panel`}>{item.children}</div>
        </details>
      ))}
    </div>
  );
}
