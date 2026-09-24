import { SiteFooter } from "../../components/marketing/SiteFooter";
import { SiteHeader } from "../../components/marketing/SiteHeader";
import { MotionObserver } from "../../components/ui/MotionObserver";
import { getLocale } from "../../i18n/config";
import { getSiteDictionary } from "../../i18n/site";
import "../../styles/site.css";

/** The public website: one navigation, one footer, one design system. */
export default async function MarketingLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  const { code } = getLocale(locale);
  const site = await getSiteDictionary(code);

  return (
    <div className="site">
      <a href="#main" className="ui-skip">
        {site.navigation.skipToContent}
      </a>
      <SiteHeader locale={code} nav={site.navigation} />
      <main id="main" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={code} site={site} />
      <MotionObserver />
    </div>
  );
}
