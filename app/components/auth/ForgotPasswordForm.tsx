"use client";

import { TextField } from "../ui/Input";
import { requestPasswordReset } from "../../lib/auth/client";
import { checkEmail } from "../../lib/auth/validation";
import { AuthStatus, ErrorSummary, SubmitButton, errorText, type AuthCopy } from "./FormParts";
import { useAuthForm } from "./useAuthForm";

const ORDER = ["email"] as const;

export function ForgotPasswordForm({ locale, copy }: { locale: string; copy: AuthCopy }) {
  const form = useAuthForm({
    initial: { email: "" },
    order: ORDER,
    secrets: [],
    validate: (values) => ({ email: checkEmail(values.email) }),
    submit: (values) => requestPasswordReset({ email: values.email.trim() }),
  });

  return (
    <>
      <form className="auth-form" noValidate onSubmit={form.onSubmit} aria-busy={form.busy || undefined}>
        <ErrorSummary copy={copy} show={form.hasErrors} />
        <TextField
          id="reset-email"
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
        <div className="auth-form__actions">
          <SubmitButton busy={form.busy} label={copy.forgotPassword.submit} busyLabel={copy.forgotPassword.busy} />
        </div>
      </form>
      <AuthStatus
        locale={locale}
        copy={copy}
        result={form.result}
        unavailable={copy.forgotPassword.unavailable}
      />
    </>
  );
}
