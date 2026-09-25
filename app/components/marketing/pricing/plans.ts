import type { SiteDictionary } from "../../../i18n/site";

type Pricing = SiteDictionary["pricing"];

export type PlanKey = keyof Pricing["plans"]["items"];
export type FeatureKey = keyof Pricing["comparison"]["rows"];
export type CellStatus = keyof Pricing["comparison"]["status"];

/** Presentation order — the one plan that exists today comes first. */
export const planOrder: PlanKey[] = ["free", "plus", "education"];

/** Anchors other pages link to (the landing page links to /pricing#education). */
export const planAnchor = (key: PlanKey) => (key === "education" ? "education" : `pricing-plan-${key}`);
export const COMPARE_ANCHOR = "pricing-compare";
export const CLASSROOM_ANCHOR = "pricing-faq-classroom";

/** Where each future plan's "Learn more" goes: somewhere on this page that answers it. */
export const learnMoreAnchor: Record<Exclude<PlanKey, "free">, string> = {
  plus: COMPARE_ANCHOR,
  education: CLASSROOM_ANCHOR,
};

/**
 * The comparison, as status codes. The Free column must match Explore as it
 * ships today — there is no AI, no saved progress and no educator tooling
 * anywhere in Corpus yet. The two future columns only ever say "planned",
 * "not decided" or "not in this plan".
 */
export const comparisonMatrix: Record<FeatureKey, Record<PlanKey, CellStatus>> = {
  exploration: { free: "available", plus: "planned", education: "planned" },
  library: { free: "available", plus: "planned", education: "planned" },
  structures: { free: "available", plus: "planned", education: "planned" },
  learning: { free: "available", plus: "planned", education: "planned" },
  practice: { free: "available", plus: "planned", education: "planned" },
  guidance: { free: "unavailable", plus: "planned", education: "undecided" },
  progress: { free: "unavailable", plus: "planned", education: "undecided" },
  educators: { free: "unavailable", plus: "otherPlan", education: "planned" },
};

/** Catalogue numbering (01, 02 …): figures read in every script. */
export const planNumber = (index: number) => String(index + 1).padStart(2, "0");
