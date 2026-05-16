import type { SupportedLocale } from "@/lib/locale";

export type ResourceCategory = "diet" | "prevention" | "dialysis" | "transplant" | "insurance";

export interface ResourceI18n {
  title: string;
  summary: string;
  body: string[];
  sections: { heading: string; body: string }[];
}

export interface Resource {
  slug: string;
  category: ResourceCategory;
  estimatedReadMinutes: number;
  publishedDate: string;
  updatedDate?: string;
  i18n: Record<SupportedLocale, ResourceI18n>;
}
