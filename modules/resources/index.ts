import { RESOURCES } from "@/content/resources";
import type { Resource } from "./core/types";

export type { Resource, ResourceI18n, ResourceCategory } from "./core/types";

export function getAllResources(): Resource[] {
  return RESOURCES;
}
export function getResourceBySlug(slug: string): Resource | null {
  return RESOURCES.find((r) => r.slug === slug) ?? null;
}
export function getResourceSlugs(): string[] {
  return RESOURCES.map((r) => r.slug);
}
