import type { Metadata } from "next";
import { AuthPage } from "../../../components/auth/AuthPage";
import { SignUpForm } from "../../../components/auth/SignUpForm";
import { getLocale } from "../../../i18n/config";
import { getSiteDictionary } from "../../../i18n/site";
import { pageMetadata } from "../../../lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { auth, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "signUp",
    title: auth.meta.signUp.title,
    description: auth.meta.signUp.description,
    imageAlt: common.ogImageAlt,
    index: false,
  });
}

export default async function SignUpPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const site = await getSiteDictionary(code);
  return (
    <AuthPage locale={code} page="signUp" site={site}>
      <SignUpForm locale={code} copy={site.auth} />
    </AuthPage>
  );
}
