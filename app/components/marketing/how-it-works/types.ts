import type { OrganId } from "../../../lib/anatomy-data";
import type { SiteDictionary } from "../../../i18n/site";
import type { Organ } from "../../../i18n/merge";

/** What every How-it-works section receives: locale, its copy, and the organs
 *  (structure joined with the active locale's prose) it may illustrate with. */
export type HowCopy = SiteDictionary["howItWorks"];

export type HowSectionProps = {
  locale: string;
  copy: HowCopy;
  organs: Record<OrganId, Organ>;
};
