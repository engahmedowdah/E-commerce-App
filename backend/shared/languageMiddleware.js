import { requestContext } from "./requestContext.js";

/**
 * Parses the first language tag from an Accept-Language header value.
 * e.g. "ar-EG,ar;q=0.9,en;q=0.8" → "ar"
 */
const parseAcceptLanguage = (header) => {
  if (!header) return null;
  const first = header.split(",")[0].trim();        // "ar-EG" or "ar;q=0.9"
  const tag   = first.split(";")[0].trim();         // "ar-EG"
  return tag.split("-")[0].toLowerCase();           // "ar"
};

/**
 * Normalises any language token to a two-letter lower-case code.
 * "ar-EG" → "ar", "EN" → "en", "ar" → "ar"
 */
const normaliseLang = (raw) => {
  if (!raw) return null;
  return raw.split("-")[0].toLowerCase();
};

/**
 * Express middleware that detects the requested language from:
 *   1. ?lang=<code>           (query parameter — highest priority)
 *   2. lang: <code>           (custom request header)
 *   3. Accept-Language: <...> (standard HTTP header — lowest priority)
 *
 * Stores the resolved lang in AsyncLocalStorage so that any Mongoose
 * query executed during the same request automatically picks it up.
 */
export const languageMiddleware = (req, res, next) => {
  const raw =
    req.query?.lang ||
    req.headers?.lang ||
    parseAcceptLanguage(req.headers?.["accept-language"]);

  const lang = normaliseLang(raw) || "en";

  requestContext.run({ lang }, next);
};
