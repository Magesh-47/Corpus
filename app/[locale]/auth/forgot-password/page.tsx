import type { Metadata } from "next";
import { AuthPage } from "../../../components/auth/AuthPage";
import { ForgotPasswordForm } from "../../../components/auth/ForgotPasswordForm";
import { getLocale } from "../../../i18n/config";
import { getSiteDictionary } from "../../../i18n/site";
import { pageMetadata } from "../../../lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = getLocale((await params).locale);
  const { auth, common } = await getSiteDictionary(code);
  return pageMetadata({
    locale: code,
    route: "forgotPassword",
    title: auth.meta.forgotPassword.title,
    description: auth.meta.forgotPassword.description,
    imageAlt: common.ogImageAlt,
    index: false,
  });
}

export default async function ForgotPasswordPage({ params }: Props) {
  const { code } = getLocale((await params).locale);
  const site = await getSiteDictionary(code);
  return (
    <AuthPage locale={code} page="forgotPassword" site={site}>
      <ForgotPasswordForm locale={code} copy={site.auth} />
    </AuthPage>
  );
}
