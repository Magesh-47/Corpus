import { AuthShell } from "../../components/AuthShell";
import { SignInForm } from "../../components/AuthForms";

export const metadata = {
  title: "Sign in — Corpus",
  description: "Sign in to continue exploring anatomy with Corpus.",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back."
      subtitle="Continue exploring the human body."
      footerText="New to Corpus?"
      footerLink="Create an account"
      footerHref="/auth/signup"
    >
      <SignInForm />
    </AuthShell>
  );
}
