import type { NextConfig } from "next";
import { defaultLocale } from "./app/i18n/config";
import { routes } from "./app/lib/routes";

const nextConfig: NextConfig = {
  // Every route lives under /[locale], so `app/[locale]/layout.tsx` is the root
  // layout and nothing is served unprefixed. Bare paths — `/`, `/about`,
  // `/explore`, `/auth/signin` — go to the default language. (Accept-Language
  // negotiation would need middleware, which the Cloudflare/vinext target does
  // not run — the language links cover it.)
  async redirects() {
    return Object.values(routes).map((path) => ({
      source: path || "/",
      destination: `/${defaultLocale}${path}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
