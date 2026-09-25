import type { Metadata } from "next";
import { FreeCollection } from "../../../components/marketing/pricing/FreeCollection";
import { PlanComparison } from "../../../components/marketing/pricing/PlanComparison";
import { PlanLedger } from "../../../components/marketing/pricing/PlanLedger";
import { PricingClosing } from "../../../components/marketing/pricing/PricingClosing";
import { PricingFaq } from "../../../components/marketing/pricing/PricingFaq";
import { PricingHero } from "../../../components/marketing/pricing/PricingHero";
import { getLocale, locales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";
import { buildOrgans, indexOrgans } from "../../../i18n/merge";
import { getSiteDictionary } from "../../../i18n/site";
import { pageMetadata } from "../../../lib/seo";
import "../../../styles/pricing.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { pricing, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "pricing",
    title: pricing.meta.title,
    description: pricing.meta.description,
    imageAlt: common.ogImageAlt,
    absoluteTitle: true,
  });
}

/**
 * A presentation page only: no checkout, no billing, no prices. Every number
 * Free claims (organs, structures, languages) is counted from the anatomy data
 * and locale table, so the page cannot drift from what Explore really ships.
 */
export default async function PricingPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const [site, dictionary] = await Promise.all([getSiteDictionary(code), getDictionary(code)]);
  const organs = buildOrgans(dictionary.organs);
  const byId = indexOrgans(organs);
  const number = new Intl.NumberFormat(code);
  const counts = {
    organCount: number.format(organs.length),
    structureCount: number.format(organs.reduce((sum, organ) => sum + organ.hotspots.length, 0)),
    languageCount: number.format(locales.length),
  };

  return (
    <>
      <PricingHero locale={code} site={site} skin={byId.skin} />
      <PlanLedger locale={code} site={site} counts={counts} />
      <PlanComparison site={site} counts={counts} />
      <FreeCollection locale={code} site={site} organs={organs} />
      <PricingFaq site={site} />
      <PricingClosing locale={code} site={site} organ={byId.skin} />
    </>
  );
}
