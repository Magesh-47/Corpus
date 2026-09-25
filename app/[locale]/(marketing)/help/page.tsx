import type { Metadata } from "next";
import { AccountGuide } from "../../../components/marketing/help/AccountGuide";
import { ExploringGuide } from "../../../components/marketing/help/ExploringGuide";
import { GettingStarted } from "../../../components/marketing/help/GettingStarted";
import { HelpCategories } from "../../../components/marketing/help/HelpCategories";
import { HelpContact } from "../../../components/marketing/help/HelpContact";
import { HelpFaq } from "../../../components/marketing/help/HelpFaq";
import { HelpHero } from "../../../components/marketing/help/HelpHero";
import { LanguagesGuide } from "../../../components/marketing/help/LanguagesGuide";
import { PracticeGuide } from "../../../components/marketing/help/PracticeGuide";
import { buildSearchIndex } from "../../../components/marketing/help/searchIndex";
import { numberFormatter, type HelpContext } from "../../../components/marketing/help/shared";
import { ViewerGuide } from "../../../components/marketing/help/ViewerGuide";
import { getLocale } from "../../../i18n/config";
import { getDictionary } from "../../../i18n/dictionaries";
import { buildOrgans } from "../../../i18n/merge";
import { getSiteDictionary } from "../../../i18n/site";
import { pageMetadata } from "../../../lib/seo";
import "../../../styles/help.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { help, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "help",
    title: help.meta.title,
    description: help.meta.description,
    imageAlt: common.ogImageAlt,
    absoluteTitle: true,
  });
}

export default async function HelpPage({ params }: Props) {
  const locale = getLocale((await params).locale);
  // The app dictionary supplies the live labels (tools, quiz) and organ prose,
  // so the guide names every control exactly as Explore shows it.
  const [site, app] = await Promise.all([getSiteDictionary(locale.code), getDictionary(locale.code)]);
  const ctx: HelpContext = {
    locale,
    help: site.help,
    site,
    ui: app.ui,
    organs: buildOrgans(app.organs),
    num: numberFormatter(locale.code),
  };

  return (
    <>
      <HelpHero ctx={ctx} entries={buildSearchIndex(ctx)} />
      <HelpCategories ctx={ctx} />
      <GettingStarted ctx={ctx} />
      <ViewerGuide ctx={ctx} />
      <ExploringGuide ctx={ctx} />
      <PracticeGuide ctx={ctx} />
      <LanguagesGuide ctx={ctx} />
      <AccountGuide ctx={ctx} />
      <HelpFaq ctx={ctx} />
      <HelpContact ctx={ctx} />
    </>
  );
}
