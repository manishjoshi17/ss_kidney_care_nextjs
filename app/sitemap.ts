import type { MetadataRoute } from "next";

import { getDoctorSlugs } from "@/modules/doctors";
import { getServiceSlugs } from "@/modules/services";
import { getAllResources } from "@/modules/resources";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/locale";
import { absoluteUrl } from "@/lib/seo";

const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/doctors", priority: 0.9, changeFrequency: "weekly" },
  { path: "/facilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
  { path: "/insurance", priority: 0.7, changeFrequency: "monthly" },
  { path: "/international-patients", priority: 0.7, changeFrequency: "monthly" },
  { path: "/appointment", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/emergency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
];

function buildEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) languages[locale] = absoluteUrl(locale, path);
  languages["x-default"] = absoluteUrl(DEFAULT_LOCALE, path);
  return {
    url: absoluteUrl(DEFAULT_LOCALE, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = STATIC_PATHS.map((s) => buildEntry(s.path, s.priority, s.changeFrequency));

  for (const slug of getServiceSlugs()) {
    entries.push(buildEntry(`/services/${slug}`, 0.7, "monthly"));
  }
  for (const slug of getDoctorSlugs()) {
    entries.push(buildEntry(`/doctors/${slug}`, 0.7, "monthly"));
  }
  for (const r of getAllResources()) {
    entries.push(buildEntry(`/resources/${r.slug}`, 0.6, "monthly"));
  }

  return entries;
}
