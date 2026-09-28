"use client";

import { useSyncExternalStore } from "react";
import { format } from "../../../i18n/types";
import type { HelpCopy } from "./shared";
import { normalise, searchStore } from "./searchStore";

/**
 * Above the questions while a search is active: how many are showing, and a
 * way back to all of them. Renders nothing otherwise.
 */
export function HelpFaqStatus({
  copy,
  total,
  locale,
  headingId,
}: {
  copy: HelpCopy["search"];
  total: number;
  locale: string;
  /** Receives focus when the search is cleared here, as this button then disappears. */
  headingId: string;
}) {
  const { query, faqMatches } = useSyncExternalStore(searchStore.subscribe, searchStore.get, searchStore.getServer);
  if (!normalise(query, locale)) return null;
  const num = new Intl.NumberFormat(locale);
  const text = faqMatches
    ? format(copy.faqStatus, { count: num.format(faqMatches), total: num.format(total) })
    : copy.faqEmpty;
  return (
    <div className="help-faq-status">
      <p>{text}</p>
      <button
        type="button"
        className="ui-button ui-button--text"
        onClick={() => {
          searchStore.set({ query: "" });
          document.getElementById(headingId)?.focus();
        }}
      >
        {copy.showAll}
      </button>
    </div>
  );
}
