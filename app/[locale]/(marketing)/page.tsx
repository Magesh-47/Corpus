import type { Metadata } from "next";
import { AIPreview } from "../../components/marketing/home/AIPreview";
import { Audience } from "../../components/marketing/home/Audience";
import { Closing } from "../../components/marketing/home/Closing";
import { ExplorePromo } from "../../components/marketing/home/ExplorePromo";
import { HomeHero } from "../../components/marketing/home/HomeHero";
import { LanguageSection } from "../../components/marketing/home/LanguageSection";
import { FEATURED, OrganShowcase } from "../../components/marketing/home/OrganShowcase";
import { Philosophy } from "../../components/marketing/home/Philosophy";
import { Practice } from "../../components/marketing/home/Practice";
import { Rigour } from "../../components/marketing/home/Rigour";
import { SystemStory } from "../../components/marketing/home/SystemStory";
import { ViewerFeatures } from "../../components/marketing/home/ViewerFeatures";
import { getLocale } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";
import { buildOrgans, indexOrgans } from "../../i18n/merge";
import { getSiteDictionary } from "../../i18n/site";
import { pageMetadata } from "../../lib/seo";
import "../../styles/home.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { marketing, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "home",
    title: marketing.meta.title,
    description: marketing.meta.description,
    imageAlt: common.ogImageAlt,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: Props) {
  const locale = getLocale((await params).locale);
  const { code } = locale;
  const [{ marketing, common }, { ui, organs: organContent }] = await Promise.all([
    getSiteDictionary(code),
    getDictionary(code),
  ]);
  const organs = buildOrgans(organContent);
  const byId = indexOrgans(organs);
  const featured = FEATURED.map((id) => byId[id]);
  const others = organs.filter((organ) => !FEATURED.includes(organ.id as (typeof FEATURED)[number]));

  return (
    <>
      <HomeHero locale={code} copy={marketing} />
      <Philosophy
        copy={marketing.philosophy}
        stillLabel={marketing.explore.still}
        brain={byId.brain}
        lungs={byId.lungs}
        intl={locale.intl}
      />
      <OrganShowcase locale={code} intl={locale.intl} copy={marketing.collection} organs={featured} others={others} />
      <ExplorePromo locale={code} copy={marketing.explore} status={common.status} ui={ui} heart={byId.heart} />
      <ViewerFeatures copy={marketing.features} />
      <SystemStory copy={marketing.story} heart={byId.heart} lungs={byId.lungs} />
      <Practice locale={code} copy={marketing.practice} status={common.status} ui={ui} brain={byId.brain} />
      <AIPreview copy={marketing.ai} />
      <LanguageSection current={code} copy={marketing.languages} latinNames={featured.map((organ) => organ.scientificName)} />
      <Rigour copy={marketing.rigor} heart={byId.heart} />
      <Audience locale={code} copy={marketing.audience} />
      <Closing locale={code} copy={marketing.closing} />
    </>
  );
}
