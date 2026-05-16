import { DOCTORS } from "@/content/doctors";

export function getDoctorSlugs(): string[] {
  return DOCTORS.map((d) => d.slug);
}
