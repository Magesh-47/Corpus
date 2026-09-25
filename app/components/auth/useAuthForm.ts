"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import type { AuthResult } from "../../lib/auth/client";
import type { AuthErrorKey } from "../../lib/auth/validation";

type Errors<K extends string> = Partial<Record<K, AuthErrorKey>>;

/**
 * State for one auth form: controlled values, per-field errors, the busy flag
 * and the last result from the auth boundary.
 *
 * - Validation runs on submit; after the first attempt it re-runs as the person
 *   types, so a fixed field clears its own message.
 * - On an invalid submit, focus moves to the first invalid field (in `order`).
 * - Secret fields listed in `secrets` are emptied after every attempt. Values
 *   live only in React state — nothing is written to browser storage.
 */
export function useAuthForm<K extends string>({
  initial,
  order,
  secrets,
  validate,
  submit,
}: {
  initial: Record<K, string>;
  order: readonly K[];
  secrets: readonly K[];
  validate: (values: Record<K, string>) => Errors<K>;
  submit: (values: Record<K, string>) => Promise<AuthResult>;
}) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors<K>>({});
  const [attempted, setAttempted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<AuthResult | null>(null);
  const fields = useRef<Partial<Record<K, HTMLInputElement | null>>>({});

  const change = (key: K) => (event: ChangeEvent<HTMLInputElement>) => {
    const next = { ...values, [key]: event.target.value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  };

  const register = (key: K) => (node: HTMLInputElement | null) => {
    fields.current[key] = node;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy) return;
    setAttempted(true);
    setResult(null);

    const found = validate(values);
    setErrors(found);
    const firstInvalid = order.find((key) => found[key]);
    if (firstInvalid) {
      fields.current[firstInvalid]?.focus();
      return;
    }

    setBusy(true);
    let outcome: AuthResult;
    try {
      outcome = await submit(values);
    } catch {
      outcome = { ok: false, reason: "unavailable" };
    }
    setBusy(false);
    setResult(outcome);

    // Never keep a password around after an attempt.
    setValues((current) => {
      const cleared = { ...current };
      for (const key of secrets) cleared[key] = "";
      return cleared;
    });
    setAttempted(false);
  };

  const hasErrors = order.some((key) => errors[key]);

  return { values, errors, busy, result, hasErrors, change, register, onSubmit };
}
