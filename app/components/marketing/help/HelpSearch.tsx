"use client";

import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { format } from "../../../i18n/types";
import type { HelpCopy } from "./shared";
import { normalise, searchStore } from "./searchStore";

export type SearchEntry = {
  /** The id of the element the result links to (a question or a guide). */
  id: string;
  kind: "question" | "guide";
  title: string;
  excerpt: string;
  /** Everything the entry may be found by, already in the page's language. */
  text: string;
};

/**
 * The help search: a plain filter over the questions and guides on this page,
 * in the language the page is shown in. Nothing is sent anywhere — the whole
 * index arrives with the page.
 */
export function HelpSearch({
  entries,
  copy,
  locale,
}: {
  entries: SearchEntry[];
  copy: HelpCopy["search"];
  locale: string;
}) {
  const inputId = useId();
  const { query } = useSyncExternalStore(searchStore.subscribe, searchStore.get, searchStore.getServer);
  const setQuery = (value: string) => searchStore.set({ query: value });
  const inputRef = useRef<HTMLInputElement>(null);
  // The clear buttons disappear once pressed, so focus returns to the field.
  const clear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const index = useMemo(
    () => entries.map((entry) => ({ ...entry, haystack: normalise(`${entry.title} ${entry.text}`, locale), heading: normalise(entry.title, locale) })),
    [entries, locale],
  );

  const terms = useMemo(() => normalise(query, locale).split(" ").filter(Boolean), [query, locale]);
  const active = terms.length > 0;

  const results = useMemo(() => {
    if (!active) return [];
    const found = index.filter((entry) => terms.every((term) => entry.haystack.includes(term)));
    // Questions before guides; within each, a match in the title comes first.
    const score = (entry: (typeof found)[number]) =>
      (entry.kind === "question" ? 0 : 2) + (terms.every((term) => entry.heading.includes(term)) ? 0 : 1);
    return found.map((entry, order) => ({ entry, order })).sort((a, b) => score(a.entry) - score(b.entry) || a.order - b.order).map(({ entry }) => entry);
  }, [index, terms, active]);

  // The questions further down the page follow the search: matches open,
  // everything else steps aside. Items opened here close again on clear.
  useEffect(() => {
    const matched = new Set(results.map((entry) => entry.id));
    let faqMatches = 0;
    for (const entry of index) {
      if (entry.kind !== "question") continue;
      const item = document.getElementById(entry.id);
      if (!(item instanceof HTMLDetailsElement)) continue;
      const show = !active || matched.has(entry.id);
      if (show) faqMatches += 1;
      item.hidden = !show;
      if (active && show && !item.open) {
        item.open = true;
        item.dataset.searchOpened = "";
      }
      if (!active && "searchOpened" in item.dataset) {
        item.open = false;
        delete item.dataset.searchOpened;
      }
    }
    if (searchStore.get().faqMatches !== faqMatches) searchStore.set({ faqMatches });
  }, [index, results, active]);

  // Announced after typing pauses, so a screen reader is not interrupted on
  // every keystroke.
  const summary = !active
    ? ""
    : results.length
      ? format(copy.count, { count: new Intl.NumberFormat(locale).format(results.length) })
      : format(copy.empty.title, { query: query.trim() });
  const [announced, setAnnounced] = useState("");
  useEffect(() => {
    const timer = window.setTimeout(() => setAnnounced(summary), 450);
    return () => window.clearTimeout(timer);
  }, [summary]);

  const openTarget = (id: string) => {
    const target = document.getElementById(id);
    if (target instanceof HTMLDetailsElement) target.open = true;
  };

  return (
    <div className="help-search" role="search">
      <label htmlFor={inputId} className="help-search__label">
        {copy.label}
      </label>
      <div className="help-search__field">
        <Search className="help-search__icon" size={22} strokeWidth={1.5} aria-hidden />
        <input
          ref={inputRef}
          id={inputId}
          type="search"
          className="help-search__input"
          value={query}
          placeholder={copy.placeholder}
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          aria-controls={`${inputId}-results`}
          aria-describedby={`${inputId}-status`}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape" && query) {
              event.preventDefault();
              setQuery("");
            }
          }}
        />
        {active && (
          <button type="button" className="help-search__clear" onClick={clear} aria-label={copy.clear}>
            <X size={18} strokeWidth={1.6} aria-hidden />
          </button>
        )}
      </div>

      <p id={`${inputId}-status`} className="ui-sr" aria-live="polite" aria-atomic="true">
        {announced}
      </p>

      <div id={`${inputId}-results`} className="help-search__results" hidden={!active}>
        {active && results.length > 0 && (
          <>
            <p className="help-search__count" aria-hidden>
              {summary}
            </p>
            <ul className="help-search__list" aria-label={copy.resultsLabel}>
              {results.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`} className="help-search__result" onClick={() => openTarget(entry.id)}>
                    <span className="help-search__kind">{copy.kind[entry.kind]}</span>
                    <span className="help-search__title">{entry.title}</span>
                    <span className="help-search__excerpt">{entry.excerpt}</span>
                    <ArrowRight className="ui-arrow help-search__arrow" size={16} strokeWidth={1.6} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {active && results.length === 0 && (
          <div className="help-search__empty">
            <p className="help-search__empty-title">{summary}</p>
            <p className="help-search__empty-body">{copy.empty.body}</p>
            <button type="button" className="ui-button ui-button--text" onClick={clear}>
              {copy.clear}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
