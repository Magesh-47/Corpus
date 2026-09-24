import { AuthShell } from "../../components/AuthShell";
import { ForgotPasswordForm } from "../../components/AuthForms";

export const metadata = {
  title: "Reset password — Corpus",
  description: "Request a reset link for your Corpus account.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password."
      subtitle="Enter the email tied to your account and we will prepare a reset link."
      footerText="Remember your password?"
      footerLink="Sign in"
      footerHref="/auth/signin"
    >
      <ForgotPasswordForm />
    </AuthShell>
  );
}
