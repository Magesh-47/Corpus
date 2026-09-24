"use client";

import { useState, type InputHTMLAttributes, type Ref } from "react";
import { CircleAlert } from "lucide-react";

/*
 * Form fields for Corpus: a visible label above a hairline field, an optional
 * hint, and an error that is tied to the input with aria-describedby and
 * marked with aria-invalid — so the state is never carried by colour alone.
 * Styles live in app/styles/auth.css (auth-field*), the only forms today.
 */

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className" | "aria-invalid" | "aria-describedby">;

function describedBy(id: string, hint?: string, error?: string) {
  const ids = [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

function FieldFrame({
  id,
  label,
  hint,
  error,
  className,
  children,
}: Pick<FieldProps, "id" | "label" | "hint" | "error" | "className"> & { children: React.ReactNode }) {
  return (
    <div className={["auth-field", error && "auth-field--invalid", className].filter(Boolean).join(" ")}>
      <label className="auth-field__label" htmlFor={id}>
        {label}
      </label>
      {children}
      {hint && (
        <p className="auth-field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="auth-field__error" id={`${id}-error`}>
          <CircleAlert size={15} strokeWidth={1.75} aria-hidden />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export function TextField({ id, label, hint, error, className, ref, type = "text", ...input }: FieldProps) {
  return (
    <FieldFrame id={id} label={label} hint={hint} error={error} className={className}>
      <input
        ref={ref}
        id={id}
        type={type}
        className="auth-field__input"
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        {...input}
      />
    </FieldFrame>
  );
}

type PasswordFieldProps = Omit<FieldProps, "type"> & {
  /** Visible toggle text and its fuller accessible names, from the caller's copy. */
  toggle: { show: string; hide: string; showLabel: string; hideLabel: string };
};

/**
 * A password field with a show/hide control. The toggle is type="button" so it
 * never submits the form, and its accessible name says what pressing it does.
 */
export function PasswordField({ id, label, hint, error, className, ref, toggle, ...input }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  return (
    <FieldFrame id={id} label={label} hint={hint} error={error} className={className}>
      <div className="auth-field__control">
        <input
          ref={ref}
          id={id}
          type={visible ? "text" : "password"}
          className="auth-field__input auth-field__input--password"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, hint, error)}
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          {...input}
        />
        <button
          type="button"
          className="auth-field__toggle"
          aria-controls={id}
          aria-label={visible ? toggle.hideLabel : toggle.showLabel}
          onClick={() => setVisible((value) => !value)}
          disabled={input.disabled}
        >
          {visible ? toggle.hide : toggle.show}
        </button>
      </div>
    </FieldFrame>
  );
}
