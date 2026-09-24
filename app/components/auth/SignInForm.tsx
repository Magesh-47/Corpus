"use client";

import Link from "next/link";
import { PasswordField, TextField } from "../ui/Input";
import { signIn } from "../../lib/auth/client";
import { checkCurrentPassword, checkEmail } from "../../lib/auth/validation";
import { localeHref } from "../../lib/routes";
import { AuthStatus, ErrorSummary, SubmitButton, errorText, type AuthCopy } from "./FormParts";
import { useAuthForm } from "./useAuthForm";

const ORDER = ["email", "password"] as const;

export function SignInForm({ locale, copy }: { locale: string; copy: AuthCopy }) {
  const form = useAuthForm({
    initial: { email: "", password: "" },
    order: ORDER,
    secrets: ["password"],
    validate: (values) => ({ email: checkEmail(values.email), password: checkCurrentPassword(values.password) }),
    submit: (values) => signIn({ email: values.email.trim(), password: values.password }),
  });

  return (
    <>
      <form className="auth-form" noValidate onSubmit={form.onSubmit} aria-busy={form.busy || undefined}>
        <ErrorSummary copy={copy} show={form.hasErrors} />
        <TextField
          id="signin-email"
          ref={form.register("email")}
          label={copy.fields.email.label}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          required
          value={form.values.email}
          onChange={form.change("email")}
          error={errorText(copy, form.errors.email)}
          disabled={form.busy}
        />
        <PasswordField
          id="signin-password"
          ref={form.register("password")}
          label={copy.fields.password.label}
          name="password"
          autoComplete="current-password"
          required
          value={form.values.password}
          onChange={form.change("password")}
          error={errorText(copy, form.errors.password)}
          toggle={copy.passwordToggle}
          disabled={form.busy}
        />
        <div className="auth-form__actions">
          <SubmitButton busy={form.busy} label={copy.signIn.submit} busyLabel={copy.signIn.busy} />
          <Link className="auth-link" href={localeHref(locale, "forgotPassword")}>
            {copy.signIn.forgot}
          </Link>
        </div>
      </form>
      <AuthStatus locale={locale} copy={copy} result={form.result} unavailable={copy.signIn.unavailable} ref={form.statusRef} />
    </>
  );
}
