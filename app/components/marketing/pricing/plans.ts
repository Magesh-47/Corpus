import type { SiteDictionary } from "../../../i18n/site";

export type PlanKey = keyof SiteDictionary["pricing"]["plans"]["items"];

/** Presentation order — the one plan that exists today comes first. */
export const planOrder: PlanKey[] = ["free", "plus", "education"];

export const planAnchor = (key: PlanKey) => `pricing-plan-${key}`;

/** Catalogue numbering (01, 02 …): figures read in every script. */
export const planNumber = (index: number) => String(index + 1).padStart(2, "0");
