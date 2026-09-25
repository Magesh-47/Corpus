import type { Metadata } from "next";
import { AboutAtelier } from "../../../components/marketing/about/AboutAtelier";
import { AboutClosing } from "../../../components/marketing/about/AboutClosing";
import { AboutDepth } from "../../../components/marketing/about/AboutDepth";
import { AboutHero } from "../../../components/marketing/about/AboutHero";
import { AboutPrinciples } from "../../../components/marketing/about/AboutPrinciples";
import { AboutWorld } from "../../../components/marketing/about/AboutWorld";
import { getLocale, locales } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";
import { buildOrgans, indexOrgans } from "../../../i18n/merge";
import { getSiteDictionary } from "../../../i18n/site";
import { format } from "../../../i18n/types";
import { pageMetadata } from "../../../lib/seo";
import "../../../styles/about.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { about, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "about",
    title: about.meta.title,
    description: format(about.meta.description, { count: String(locales.length) }),
    imageAlt: common.ogImageAlt,
    absoluteTitle: true,
  });
}

/**
 * About — an editorial manifesto: an opening plate, four numbered chapters
 * (depth, the atelier, principles, languages) and a closing invitation.
 * Organ names, structure labels and Latin terms come from the anatomy data.
 */
export default async function AboutPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const [{ about }, dictionary] = await Promise.all([getSiteDictionary(code), getDictionary(code)]);
  const organs = indexOrgans(buildOrgans(dictionary.organs));

  // The heart as Explore names it in every shipped language.
  const heartNames = await Promise.all(
    locales.map(async (entry) => ({
      code: entry.code,
      nativeName: entry.nativeName,
      dir: entry.dir,
      name: (await getDictionary(entry.code)).organs.heart.name,
    })),
  );

  return (
    <article className="about">
      <AboutHero copy={about} organ={organs.brain} />
      <AboutDepth copy={about} organ={organs.lungs} />
      <AboutAtelier copy={about} sketch={organs.heart} specimen={organs.kidneys} />
      <AboutPrinciples copy={about} />
      <AboutWorld copy={about} names={heartNames} latin={organs.heart.scientificName} />
      <AboutClosing copy={about.closing} locale={code} />
    </article>
  );
}
