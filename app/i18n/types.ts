import type { OrganId } from "../lib/anatomy-data";

/** Prose for one organ. Structure (positions, colours, model) lives in
 *  `anatomy-data.ts`; only translatable text belongs here. */
export type OrganContent = {
  name: string;
  system: string;
  description: string;
  poetic: string;
  size: string;
  weight: string;
  location: string;
  function: string;
  dailyFact: string;
  medical: string;
  bloodSupply: string;
  funFact: string;
  tissue: string;
  comparison: string;
  conditions: string[];
  /** Keyed by hotspot id — the Terminologia Anatomica term is the anchor. */
  hotspots: Record<string, { label: string; detail: string }>;
};

export type OrganContentDictionary = Record<OrganId, OrganContent>;

export type UiDictionary = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string; imageAlt: string };
  brand: { home: string };
  /** The Explore top bar. `account` links to sign-in; `skip` is the skip link. */
  nav: { label: string; skip: string; explore: string; account: string };
  search: { label: string; placeholder: string; toggle: string };
  language: { label: string; choose: string };
  library: { title: string; showAll: string; empty: string; quoteLine1: string; quoteLine2: string; quoteSign: string };
  tools: { label: string; rotate: string; zoom: string; isolate: string; section: string; layers: string; compare: string; reset: string };
  viewer: {
    title: string; canvas: string; tip: string; tipDrag: string; tipScroll: string; tipClick: string;
    loading: string; autoRotate: string; caption: string; structures: string; selected: string; selectHint: string;
  };
  info: {
    keyFacts: string; size: string; weight: string; daily: string;
    location: string; bloodSupply: string; function: string; medical: string;
    didYouKnow: string;
    /** "Test yourself" — the labelling quiz's name wherever it is offered. */
    quiz: string; quizIntro: string;
  };
  compare: { title: string; comparing: string; reference: string; primaryRole: string; scale: string; vs: string; close: string };
  cards: {
    title: string; microscopic: string; compareOrgans: string; functionAnimation: string;
    clinicalNotes: string; whereItWorks: string; curiosity: string; commonConditions: string;
    exploreTissue: string; openComparison: string; playAnimation: string; seeAll: string; seeSystem: string;
  };
  quiz: {
    start: string; find: string; progress: string; correct: string; wrong: string;
    reveal: string; answer: string; done: string; score: string; retry: string; exit: string; hint: string;
  };
  modal: {
    close: string; continueExploring: string;
    motionTitle: string; bodyTitle: string; insideTitle: string; clinicalTitle: string;
    tissueIntro: string; motionIntro: string; disclaimer: string; tissue: string;
    systemIntro: string; system: string; primaryRole: string; bloodSupply: string;
  };
};

export type Dictionary = { ui: UiDictionary; organs: OrganContentDictionary };

/** Minimal `{name}` interpolation — the copy has no plurals or dates. */
export function format(template: string, values: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}
