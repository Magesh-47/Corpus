/**
 * The authentication boundary — the only place the auth forms talk to.
 *
 * Corpus has no account system yet, so every call resolves to
 * `{ ok: false, reason: "unavailable" }` and the forms say so honestly. When a
 * provider is chosen, it plugs in behind these three functions; the forms,
 * their validation and their copy do not need to change.
 *
 * Rules this boundary keeps, today and after a provider arrives:
 * - Never report success that did not happen.
 * - Never persist credentials in the browser (no localStorage, sessionStorage,
 *   IndexedDB or cookies written from here). Sessions belong to the provider.
 * - Resolve as soon as the provider answers — no artificial delays.
 *
 * Candidate provider: `app/chatgpt-auth.ts` holds header-based "Sign in with
 * ChatGPT" helpers for the OpenAI Sites hosting platform. The platform runs the
 * OAuth flow at `/signin-with-chatgpt` and exposes the user through request
 * headers. It works only on that platform (not on localhost or other hosts) and
 * has no email/password flow, so it is not wired up here: linking to it
 * elsewhere would be a broken link.
 */

export type AuthFailureReason = "unavailable";

export type AuthResult = { ok: true } | { ok: false; reason: AuthFailureReason };

export type SignInInput = { email: string; password: string };
export type SignUpInput = { name: string; email: string; password: string };
export type PasswordResetInput = { email: string };

const unavailable: AuthResult = { ok: false, reason: "unavailable" };

// The inputs are part of the contract even though nothing reads them yet.
/* eslint-disable @typescript-eslint/no-unused-vars */

export async function signIn(input: SignInInput): Promise<AuthResult> {
  // TODO(auth): call the real provider's sign-in here.
  return unavailable;
}

export async function signUp(input: SignUpInput): Promise<AuthResult> {
  // TODO(auth): call the real provider's account creation here.
  return unavailable;
}

export async function requestPasswordReset(input: PasswordResetInput): Promise<AuthResult> {
  // TODO(auth): call the real provider's password-reset request here.
  return unavailable;
}

/* eslint-enable @typescript-eslint/no-unused-vars */
