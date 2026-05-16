import { SERVICES } from "@/content/services";

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
