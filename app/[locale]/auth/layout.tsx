import { getLocale } from "../../i18n/config";
import { getSiteDictionary } from "../../i18n/site";
import "../../styles/site.css";
import "../../styles/auth.css";

/**
 * Sign in, sign up and password reset: no site navigation, only the split
 * screen each page builds with AuthShell (its plate differs per page).
 */
export default async function AuthLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { code } = getLocale((await params).locale);
  const { navigation } = await getSiteDictionary(code);
  return (
    <div className="site auth">
      <a href="#main" className="ui-skip">
        {navigation.skipToContent}
      </a>
      {children}
    </div>
  );
}
