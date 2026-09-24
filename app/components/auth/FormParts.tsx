"use client";

import Link from "next/link";
import type { Ref } from "react";
import { ArrowRight } from "lucide-react";
import type { SiteDictionary } from "../../i18n/site";
import { format } from "../../i18n/types";
import type { AuthResult } from "../../lib/auth/client";
import { localeHref } from "../../lib/routes";
import { MIN_PASSWORD_LENGTH, type AuthErrorKey } from "../../lib/auth/validation";

export type AuthCopy = SiteDictionary["auth"];

/** Resolves an error key to its message, filling in the password minimum. */
export function errorText(copy: AuthCopy, key: AuthErrorKey | undefined) {
  return key ? format(copy.errors[key], { min: String(MIN_PASSWORD_LENGTH) }) : undefined;
}

/** Announced as soon as it appears; focus has already moved to the first invalid field. */
export function ErrorSummary({ copy, show }: { copy: AuthCopy; show: boolean }) {
  return (
    <div className="auth-summary-slot">
      {show && (
        <p className="auth-summary" role="alert">
          {copy.errors.summary}
        </p>
      )}
    </div>
  );
}

export function SubmitButton({ busy, label, busyLabel }: { busy: boolean; label: string; busyLabel: string }) {
  return (
    <button type="submit" className="ui-button ui-button--primary auth-submit" disabled={busy} aria-busy={busy || undefined}>
      {busy && <span className="auth-submit__spinner" aria-hidden />}
      {busy ? busyLabel : label}
    </button>
  );
}

/**
 * The honest outcome of an attempt. The live region is always mounted so the
 * message is announced when it arrives; today the only outcome is "not
 * available yet", and nothing here ever claims a success that did not happen.
 */
export function AuthStatus({
  locale,
  copy,
  result,
  unavailable,
  ref,
}: {
  locale: string;
  copy: AuthCopy;
  result: AuthResult | null;
  unavailable: { title: string; body: string };
  ref: Ref<HTMLDivElement>;
}) {
  return (
    <div className="auth-status-slot" aria-live="polite">
      {result && !result.ok && (
        <div className="auth-status" ref={ref} tabIndex={-1}>
          <p className="auth-status__title">{unavailable.title}</p>
          <p className="auth-status__body">{unavailable.body}</p>
          <Link className="ui-button ui-button--text auth-status__link" href={localeHref(locale, "explore")}>
            {copy.status.exploreAction}
            <ArrowRight className="ui-arrow" size={16} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      )}
    </div>
  );
}
