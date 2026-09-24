/**
 * Client-side checks for the auth forms. They return copy keys, never
 * sentences, so the messages stay in the i18n namespace. These checks help the
 * person filling the form; a real provider must validate again on its side.
 */

export const MIN_PASSWORD_LENGTH = 8;

export type AuthErrorKey =
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "passwordRequired"
  | "passwordTooShort"
  | "confirmRequired"
  | "confirmMismatch";

// Deliberately permissive: one "@", something either side, a dot in the domain.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function checkName(value: string): AuthErrorKey | undefined {
  return value.trim() ? undefined : "nameRequired";
}

export function checkEmail(value: string): AuthErrorKey | undefined {
  const email = value.trim();
  if (!email) return "emailRequired";
  return EMAIL_PATTERN.test(email) ? undefined : "emailInvalid";
}

/** Sign-in only needs a password to be present; length rules apply to new ones. */
export function checkCurrentPassword(value: string): AuthErrorKey | undefined {
  return value ? undefined : "passwordRequired";
}

export function checkNewPassword(value: string): AuthErrorKey | undefined {
  if (!value) return "passwordRequired";
  return value.length >= MIN_PASSWORD_LENGTH ? undefined : "passwordTooShort";
}

export function checkConfirmation(password: string, confirmation: string): AuthErrorKey | undefined {
  if (!confirmation) return "confirmRequired";
  return confirmation === password ? undefined : "confirmMismatch";
}
