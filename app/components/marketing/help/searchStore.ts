/**
 * The help search query, shared by the search field in the hero and the
 * status line above the questions. A module-level store is enough: both live
 * on one page, and nothing needs to persist (HelpSearch clears it on unmount).
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

/** Stands in for Russian й while accents are folded, so it is not read as и. */
const SHORT_I = "\uE000";

/**
 * Case- and accent-insensitive comparison in the page's language: "Córnea",
 * "cornea" and "CORNEA" all meet, Arabic short vowels are ignored, and
 * punctuation counts as a space ("cross-section" finds "cross section").
 *
 * Only marks that decorate a letter are folded — the Latin, Greek and
 * Cyrillic accents (U+0300–U+036F) and the Arabic harakat. Marks that make a
 * different letter or syllable are kept: Devanagari vowel signs, virama and
 * nukta, Japanese dakuten, and Russian й (ё still meets е, as Russian writes it).
 */
export function normalise(text: string, locale: string) {
  return text
    .normalize("NFC")
    .toLocaleLowerCase(locale)
    .replace(/й/g, SHORT_I)
    .normalize("NFKD")
    .replace(/[\u0300-\u036F\u064B-\u065F\u0670]/g, "")
    .replace(/\uE000/g, "й")
    .normalize("NFC")
    .replace(/[\p{P}\p{S}]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}
