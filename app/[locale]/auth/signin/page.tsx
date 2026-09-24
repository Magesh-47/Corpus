import type { Metadata } from "next";
import { AuthPage } from "../../../components/auth/AuthPage";
import { SignInForm } from "../../../components/auth/SignInForm";
import { getLocale } from "../../../i18n/config";
import { getSiteDictionary } from "../../../i18n/site";
import { pageMetadata } from "../../../lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { auth, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "signIn",
    title: auth.meta.signIn.title,
    description: auth.meta.signIn.description,
    imageAlt: common.ogImageAlt,
    index: false,
  });
}

export default async function SignInPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const site = await getSiteDictionary(code);
  return (
    <AuthPage locale={code} page="signIn" site={site}>
      <SignInForm locale={code} copy={site.auth} />
    </AuthPage>
  );
}
