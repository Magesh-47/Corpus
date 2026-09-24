import { isLocale } from "./config";

/**
 * The same document in another language: swaps the leading locale segment and
 * keeps the rest of the path, so switching language never drops the reader
 * back on the home page.
 */
export function swapLocale(pathname: string, code: string): string {
  const segments = pathname.split("/");
  if (segments[1] && isLocale(segments[1])) segments[1] = code;
  else segments.splice(1, 0, code);
  return segments.join("/") || `/${code}`;
}
