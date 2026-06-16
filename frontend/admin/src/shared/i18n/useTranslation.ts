import { useMemo } from "react";
import translations, { type Lang } from "./translations";
import { getDefaultLang } from "../utils/listDefaults";

type TranslationLeaf<T> = {
  en: T;
  ar: T;
};

type ResolvedTranslation<T> = {
  [K in keyof T]:
    T[K] extends TranslationLeaf<infer Value>
      ? Value
      : T[K] extends object
      ? ResolvedTranslation<T[K]>
      : never;
};

function resolveTranslations<T>(
  section: T,
  lang: Lang
): ResolvedTranslation<T> {
  const result: Record<string, unknown> = {};

  for (const key in section) {
    const value = section[key];

    if (
      value &&
      typeof value === "object" &&
      "en" in value &&
      "ar" in value
    ) {
      result[key] = lang === "ar"
        ? value.ar
        : value.en;
    } else {
      result[key] = resolveTranslations(
        value,
        lang
      );
    }
  }

  return result as ResolvedTranslation<T>;
}

export function useTranslation() {
  const lang = getDefaultLang() as Lang;

  return useMemo(() => ({
    nav: resolveTranslations(
      translations.nav,
      lang
    ),

    pages: resolveTranslations(
      translations.pages,
      lang
    ),

    stats: resolveTranslations(
      translations.stats,
      lang
    ),

    sort: resolveTranslations(
      translations.sort,
      lang
    ),

    list: resolveTranslations(
      translations.list,
      lang
    ),

    pagination: {
      showing:
        translations.pagination.showing[
          lang
        ],

      limit:
        translations.pagination.limit[
          lang
        ],
    },

    footer: {
      copyright:
        translations.footer.copyright[
          lang
        ],
    },

    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    isAr: lang === "ar",
  }), [lang]);
}

export default useTranslation;