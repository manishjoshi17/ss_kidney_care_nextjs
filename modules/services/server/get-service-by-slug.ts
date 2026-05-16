import { SERVICES } from "@/content/services";
import type { Service } from "../core/types";

export function getServiceBySlug(slug: string): Service | null {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}
