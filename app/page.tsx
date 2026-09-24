import { LandingPage } from "./components/LandingPage";
import { getLocale } from "./i18n/config";
import { getDictionary } from "./i18n/dictionaries";

export const metadata = {
  title: "Corpus — Learn anatomy like an artist",
  description: "Explore human anatomy through detailed 3D models, visual learning, and interactive exploration with Corpus.",
};

export default async function HomePage() {
  const locale = getLocale("en");
  const dictionary = await getDictionary("en");
  return <LandingPage locale={locale} dictionary={dictionary} exploreHref="/explore" />;
}
