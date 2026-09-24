import { AnatomyApp } from "../components/AnatomyApp";
import { getLocale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";

export const metadata = {
  title: "Explore — Corpus",
  description: "Explore the human body through detailed 3D models, organ comparison, annotations, and active anatomy study.",
};

export default async function ExplorePage() {
  const locale = getLocale("en");
  const dictionary = await getDictionary("en");
  return <AnatomyApp locale={locale} dictionary={dictionary} />;
}
