import type { OrganId } from "../../../lib/anatomy-data";
import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";

/** The page's copy, and the organs (structure joined with the active locale's
 *  prose) its figures are drawn from. */
export type HowCopy = SiteDictionary["howItWorks"];
export type StepKey = keyof HowCopy["steps"];
export type Organs = Record<OrganId, Organ>;
export type Status = SiteDictionary["common"]["status"];

/** The order of the method. Also the order of the hero's contents list. */
export const stepKeys: StepKey[] = ["see", "explore", "understand", "practice", "remember"];

/** "01" … "05". Numerals stay Western Arabic in every locale, like plate numbers. */
export const stepNumber = (index: number) => String(index + 1).padStart(2, "0");
