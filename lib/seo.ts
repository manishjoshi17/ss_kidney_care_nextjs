import type { Metadata } from "next";

import { env } from "@/lib/env";
import { type SupportedLocale, ogLocaleFor, urlForLocale, SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

export function absoluteUrl(locale: SupportedLocale, path: string): string {
  const base = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  return `${base}${urlForLocale(locale, path)}`;
}

export function buildAlternates(path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = absoluteUrl(locale, path);
  }
  languages["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);
  return { canonical: absoluteUrl(DEFAULT_LOCALE, path), languages };
}

interface BaseMetadataArgs {
  lang: SupportedLocale;
  path: string;
  title: string;
  description: string;
  siteName?: string;
  ogImagePath?: string;
}

const DEFAULT_SITE_NAME = "SS Kidney Care";

export function baseMetadata({ lang, path, title, description, siteName = DEFAULT_SITE_NAME, ogImagePath }: BaseMetadataArgs): Metadata {
  const url = absoluteUrl(lang, path);
  const ogImage = ogImagePath ? `${env.NEXT_PUBLIC_SITE_URL}${ogImagePath}` : undefined;
  return {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      type: "website",
      url,
      siteName,
      title,
      description,
      locale: ogLocaleFor(lang),
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
