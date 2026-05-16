import type { SupportedLocale } from "@/lib/locale";

export type DayOfWeek = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface DoctorI18n {
  name: string;
  title: string;
  bio: string[];
  specialties: string[];
}

export interface Doctor {
  slug: string;
  photo?: string;
  qualifications: string[];
  experienceYears: number;
  languagesSpoken: string[];
  availability: DayOfWeek[];
  i18n: Record<SupportedLocale, DoctorI18n>;
}
