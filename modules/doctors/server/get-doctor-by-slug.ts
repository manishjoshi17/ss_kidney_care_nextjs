import { DOCTORS } from "@/content/doctors";
import type { Doctor } from "../core/types";

export function getDoctorBySlug(slug: string): Doctor | null {
  return DOCTORS.find((d) => d.slug === slug) ?? null;
}
