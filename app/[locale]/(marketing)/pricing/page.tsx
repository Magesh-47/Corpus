import type { Metadata } from "next";
import { FreeCollection } from "../../../components/marketing/pricing/FreeCollection";
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
  });
}

/**
 * A presentation page only: no checkout, no billing, no prices. What Free
 * contains is derived from the anatomy data, so it cannot drift from Explore.
 */
export default async function PricingPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const [site, dictionary] = await Promise.all([getSiteDictionary(code), getDictionary(code)]);
  const organs = buildOrgans(dictionary.organs);

  return (
    <>
      <PricingHero locale={code} site={site} />
      <PlanLedger locale={code} site={site} organCount={organs.length} languageCount={locales.length} />
      <FreeCollection locale={code} site={site} organs={organs} />
      <PricingFaq site={site} />
      <PricingClosing locale={code} site={site} organ={indexOrgans(organs).heart} />
    </>
  );
}
