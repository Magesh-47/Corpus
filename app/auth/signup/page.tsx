import { AuthShell } from "../../components/AuthShell";
import { SignUpForm } from "../../components/AuthForms";

export const metadata = {
  title: "Create account — Corpus",
  description: "Create an account to begin exploring anatomy with Corpus.",
};

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account."
      subtitle="Build a study habit around the body, one structure at a time."
      footerText="Already have an account?"
      footerLink="Sign in"
      footerHref="/auth/signin"
    >
      <SignUpForm />
    </AuthShell>
  );
}
