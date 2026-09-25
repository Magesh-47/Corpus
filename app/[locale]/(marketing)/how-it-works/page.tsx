import type { Metadata } from "next";
import { HowClosing } from "../../../components/marketing/how-it-works/HowClosing";
import { HowHero } from "../../../components/marketing/how-it-works/HowHero";
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
    absoluteTitle: true,
  });
}

/**
 * How it works — one sequence, told in five numbered steps: see, explore,
 * understand, practice, remember. Organ facts, structure labels and Latin
 * terms on this page are read from the anatomy data, never retyped.
 */
export default async function HowItWorksPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const [{ howItWorks: copy, common }, { organs: prose }] = await Promise.all([getSiteDictionary(code), getDictionary(code)]);
  const organs = indexOrgans(buildOrgans(prose));

  return (
    <div className="how">
      <HowHero copy={copy} />
      <HowSteps locale={code} copy={copy} organs={organs} status={common.status} />
      <HowClosing locale={code} copy={copy} organs={organs} />
    </div>
  );
}
