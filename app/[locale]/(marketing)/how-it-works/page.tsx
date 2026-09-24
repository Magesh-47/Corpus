import type { Metadata } from "next";
import { HowCta } from "../../../components/marketing/how-it-works/HowCta";
import { HowHero } from "../../../components/marketing/how-it-works/HowHero";
import { HowDifferent, HowRecall, HowWhy3d } from "../../../components/marketing/how-it-works/HowPrinciples";
import { HowSteps } from "../../../components/marketing/how-it-works/HowSteps";
import { getLocale } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";
import { buildOrgans, indexOrgans } from "../../../i18n/merge";
import { getSiteDictionary } from "../../../i18n/site";
import { pageMetadata } from "../../../lib/seo";
import "../../../styles/how-it-works.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { howItWorks, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "howItWorks",
    title: howItWorks.meta.title,
    description: howItWorks.meta.description,
    imageAlt: common.ogImageAlt,
  });
}

/**
 * How it works — the Corpus learning philosophy, told as one sequence:
 * see, explore, understand, practise, remember. Every organ fact, name and
 * Latin term on this page is read from the anatomy data, never retyped.
 */
export default async function HowItWorksPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const [{ howItWorks: copy, common }, { organs: prose }] = await Promise.all([getSiteDictionary(code), getDictionary(code)]);
  const organs = indexOrgans(buildOrgans(prose));
  const shared = { locale: code, copy, organs };
  const status = { available: common.status.availableNow, comingSoon: common.status.comingSoon, example: common.status.example };

  return (
    <div className="how">
      <HowHero {...shared} exploreLabel={common.actions.exploreBody} />
      <HowSteps {...shared} status={status} />
      <HowWhy3d copy={copy} organs={organs} />
      <HowRecall copy={copy} />
      <HowDifferent copy={copy} organs={organs} />
      <HowCta {...shared} exploreLabel={common.actions.exploreBody} />
    </div>
  );
}
