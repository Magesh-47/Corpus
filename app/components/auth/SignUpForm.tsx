"use client";

import { PasswordField, TextField } from "../ui/Input";
import { format } from "../../i18n/types";
import { signUp } from "../../lib/auth/client";
import { MIN_PASSWORD_LENGTH, checkConfirmation, checkEmail, checkName, checkNewPassword } from "../../lib/auth/validation";
import { AuthStatus, ErrorSummary, SubmitButton, errorText, type AuthCopy } from "./FormParts";
import { useAuthForm } from "./useAuthForm";

const ORDER = ["name", "email", "password", "confirm"] as const;

export function SignUpForm({ locale, copy }: { locale: string; copy: AuthCopy }) {
  const form = useAuthForm({
    initial: { name: "", email: "", password: "", confirm: "" },
    order: ORDER,
    secrets: ["password", "confirm"],
    validate: (values) => ({
      name: checkName(values.name),
      email: checkEmail(values.email),
      password: checkNewPassword(values.password),
      confirm: checkConfirmation(values.password, values.confirm),
    }),
    submit: (values) => signUp({ name: values.name.trim(), email: values.email.trim(), password: values.password }),
  });

  return (
    <>
      <form className="auth-form" noValidate onSubmit={form.onSubmit} aria-busy={form.busy || undefined}>
        <ErrorSummary copy={copy} show={form.hasErrors} />
        <TextField
          id="signup-name"
          ref={form.register("name")}
          label={copy.fields.name.label}
          name="name"
          autoComplete="name"
          required
          value={form.values.name}
          onChange={form.change("name")}
          error={errorText(copy, form.errors.name)}
          disabled={form.busy}
        />
        <TextField
          id="signup-email"
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
          id="signup-password"
          ref={form.register("password")}
          label={copy.fields.newPassword.label}
          hint={format(copy.fields.newPassword.hint, { min: String(MIN_PASSWORD_LENGTH) })}
          name="new-password"
          autoComplete="new-password"
          required
          value={form.values.password}
          onChange={form.change("password")}
          error={errorText(copy, form.errors.password)}
          toggle={copy.passwordToggle}
          disabled={form.busy}
        />
        <PasswordField
          id="signup-confirm"
          ref={form.register("confirm")}
          label={copy.fields.confirmPassword.label}
          name="confirm-password"
          autoComplete="new-password"
          required
          value={form.values.confirm}
          onChange={form.change("confirm")}
          error={errorText(copy, form.errors.confirm)}
          toggle={copy.passwordToggle}
          disabled={form.busy}
        />
        <div className="auth-form__actions">
          <SubmitButton busy={form.busy} label={copy.signUp.submit} busyLabel={copy.signUp.busy} />
        </div>
      </form>
      <AuthStatus locale={locale} copy={copy} result={form.result} unavailable={copy.signUp.unavailable} ref={form.statusRef} />
    </>
  );
}
