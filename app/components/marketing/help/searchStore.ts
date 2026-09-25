/**
 * The help search query, shared by the search field in the hero and the
 * status line above the questions. A module-level store is enough: both live
 * on one page, and nothing needs to persist.
 */
export type SearchState = {
  query: string;
  /** How many questions match the query (all of them when it is empty). */
  faqMatches: number;
};

let state: SearchState = { query: "", faqMatches: 0 };
const listeners = new Set<() => void>();
const initial: SearchState = { query: "", faqMatches: 0 };

export const searchStore = {
  get: () => state,
  getServer: () => initial,
  set(next: Partial<SearchState>) {
    state = { ...state, ...next };
    listeners.forEach((listener) => listener());
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};

/**
 * Case- and accent-insensitive comparison in the page's language: "Córnea",
 * "cornea" and "CORNEA" all meet, Arabic diacritics are ignored, and
 * punctuation counts as a space ("cross-section" finds "cross section").
 */
export function normalise(text: string, locale: string) {
  return text
    .normalize("NFKD")
    .replace(/\p{Mn}/gu, "")
    .toLocaleLowerCase(locale)
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}
