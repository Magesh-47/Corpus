/**
 * Every destination that exists today, relative to the locale prefix. Future
 * areas (AI, progress, favorites, history, settings) join this table only once
 * they are real pages — nothing links to a route that is not listed here.
 */
export const routes = {
  home: "",
  explore: "/explore",
  howItWorks: "/how-it-works",
  about: "/about",
  pricing: "/pricing",
  help: "/help",
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  forgotPassword: "/auth/forgot-password",
} as const;

export type RouteKey = keyof typeof routes;

export function localeHref(locale: string, route: RouteKey, query?: Record<string, string>): string {
  const path = `/${locale}${routes[route]}`;
  return query ? `${path}?${new URLSearchParams(query)}` : path;
}
