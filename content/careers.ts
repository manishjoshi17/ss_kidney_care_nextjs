import type { SupportedLocale } from "@/lib/locale";

export interface CareerOpeningI18n {
  title: string;
  team: string;
  summary: string;
}

export interface CareerOpening {
  slug: string;
  location: string;
  type: "full-time" | "part-time" | "locum";
  i18n: Record<SupportedLocale, CareerOpeningI18n>;
}

export const CAREERS: CareerOpening[] = [
  {
    slug: "dialysis-nurse",
    location: "Bhubaneswar",
    type: "full-time",
    i18n: {
      en: {
        title: "Dialysis nurse",
        team: "Dialysis floor",
        summary: "Experienced HD/HDF nurse. Patient-first, comfortable with overnight shifts.",
      },
      hi: {
        title: "डायलिसिस नर्स",
        team: "डायलिसिस फ्लोर",
        summary: "अनुभवी HD/HDF नर्स।",
      },
      or: {
        title: "Dialysis nurse",
        team: "Dialysis floor",
        summary: "Experienced HD/HDF nurse.",
      },
    },
  },
  {
    slug: "renal-dietitian",
    location: "Bhubaneswar",
    type: "full-time",
    i18n: {
      en: {
        title: "Renal dietitian",
        team: "OPD clinic",
        summary: "Build per-patient diet plans. Calm under pressure, fluent in Odia and Hindi.",
      },
      hi: {
        title: "रीनल डायटीशियन",
        team: "OPD क्लिनिक",
        summary: "प्रति-मरीज़ आहार योजना बनाएँ।",
      },
      or: {
        title: "Renal dietitian",
        team: "OPD clinic",
        summary: "Build per-patient diet plans.",
      },
    },
  },
];
