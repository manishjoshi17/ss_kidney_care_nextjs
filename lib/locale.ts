export const SUPPORTED_LOCALES = ["en", "hi", "or"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "en";

export const PREFERRED_LANGUAGE_COOKIE = "preferred-language";
export const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

const LOCALE_LABELS: Record<SupportedLocale, string> = {
  en: "English",
  hi: "हिन्दी",
  or: "ଓଡ଼ିଆ",
};

const OG_LOCALE_MAP: Record<SupportedLocale, string> = {
  en: "en_IN",
  hi: "hi_IN",
  or: "or_IN",
};

export function localeLabel(locale: SupportedLocale): string {
  return LOCALE_LABELS[locale];
}

export function ogLocaleFor(locale: SupportedLocale): string {
  return OG_LOCALE_MAP[locale];
}

export function isSupportedLocale(value: string): value is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function asSupportedLocale(value: string | undefined): SupportedLocale {
  return value && isSupportedLocale(value) ? value : DEFAULT_LOCALE;
}

/** Removes the leading locale segment from a pathname. `/en/about` → `/about`. */
export function stripLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/([a-z]{2})(\/.*|$)/);
  if (match && isSupportedLocale(match[1])) {
    return match[2] || "/";
  }
  return pathname;
}

/** Builds a URL for a given locale + path. `urlForLocale("hi", "/about")` → `/hi/about`. */
export function urlForLocale(locale: SupportedLocale, path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath === "/") return `/${locale}`;
  return `/${locale}${cleanPath}`;
}
