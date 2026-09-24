import { AuthShell } from "../../components/auth/AuthShell";
import { getLocale } from "../../i18n/config";
import { getSiteDictionary } from "../../i18n/site";
import "../../styles/site.css";
import "../../styles/auth.css";

/** Sign in, sign up and password reset share one quiet shell — no site navigation. */
export default async function AuthLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { code } = getLocale((await params).locale);
  const site = await getSiteDictionary(code);
  return (
    <AuthShell locale={code} site={site}>
      {children}
    </AuthShell>
  );
}
