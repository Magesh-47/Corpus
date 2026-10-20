import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type RuntimeEnv = { DB?: D1Database };

function getRuntimeEnv(): RuntimeEnv {
  const scope = globalThis as typeof globalThis & {
    env?: RuntimeEnv;
    __env__?: RuntimeEnv;
    __vinext_env__?: RuntimeEnv;
  };

  return scope.env ?? scope.__env__ ?? scope.__vinext_env__ ?? {};
}

export function getDb() {
  const bindings = getRuntimeEnv();
  if (!bindings.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(bindings.DB, { schema });
}
