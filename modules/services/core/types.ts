import type { IconName } from "@/components/icons/icon";
import type { SupportedLocale } from "@/lib/locale";

export type ServiceCategory =
  | "dialysis"
  | "ckd"
  | "acute"
  | "preventive"
  | "advanced"
  | "lifestyle"
  | "emergency";

export interface ServiceQuickFact {
  label: string;
  value: string;
}

export interface ServiceI18n {
  name: string;
  shortDescription: string;
  longDescription: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  /** Practical, at-a-glance facts displayed in the sidebar of the detail page. */
  quickFacts: ServiceQuickFact[];
}

export interface Service {
  slug: string;
  icon: IconName;
  category: ServiceCategory;
  /** Hero image — relative path under /public or an https URL whose host is in next.config images.remotePatterns. */
  heroImage?: string;
  /** Alt text for the hero image, applied per-locale. */
  heroImageAltI18n?: Record<SupportedLocale, string>;
  i18n: Record<SupportedLocale, ServiceI18n>;
}
