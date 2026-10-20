import { pathToFileURL } from "node:url";
import { resolve as resolvePath } from "node:path";

const stubUrl = pathToFileURL(resolvePath(process.cwd(), "scripts", "cloudflare-workers-stub.mjs")).href;

export async function resolve(specifier, context, defaultResolve) {
  if (specifier === "cloudflare:workers") {
    return {
      shortCircuit: true,
      url: stubUrl,
    };
  }

  return defaultResolve(specifier, context, defaultResolve);
}
