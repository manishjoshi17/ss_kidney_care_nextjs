import type { SupportedLocale } from "@/lib/locale";

export type TranslatedString = Record<SupportedLocale, string>;

export interface SiteHours {
  monday_to_friday: string;
  saturday: string;
  sunday: string;
}

export interface SiteSocials {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface SiteAccreditation {
  name: string;
  short: string;
}

export const site = {
  name: "SS Kidney Care",
  legalName: "SS Kidney Care",
  taglineI18n: {
    en: "Advanced nephrology. The future of kidney health.",
    hi: "उन्नत नेफ्रोलॉजी। किडनी स्वास्थ्य का भविष्य।",
    or: "Advanced nephrology. The future of kidney health.",
  } satisfies TranslatedString,
  brandPhraseI18n: {
    en: "Care that listens.",
    hi: "सुनने वाली देखभाल।",
    or: "Care that listens.",
  } satisfies TranslatedString,
  established: 2023,
  addressLines: [
    "Life Care, Hospital Lane",
    "S.R.I.T. Colony, Budharaja",
    "Sambalpur, Odisha 768004",
    "India",
  ],
  /** Sambalpur, Odisha (approx) — refine with surveyed coordinates. */
  latLng: { lat: 21.4669, lng: 83.9812 },
  phoneNumbers: {
    general: "+91 70080 12345",
    appointment: "+91 70080 12346",
    emergency: "+91 70080 11111",
    whatsapp: "+91 70080 12345",
  },
  email: {
    general: "contact@sskidneycare.in",
    appointment: "appointments@sskidneycare.in",
    billing: "billing@sskidneycare.in",
    hr: "careers@sskidneycare.in",
    international: "international@sskidneycare.in",
  },
  hours: {
    monday_to_friday: "9:00 AM – 7:00 PM",
    saturday: "9:00 AM – 4:00 PM",
    sunday: "Closed (Emergency line open 24×7)",
  } satisfies SiteHours,
  socials: {
    facebook: "https://facebook.com/sskidneycare",
    instagram: "https://instagram.com/sskidneycare",
    linkedin: "https://linkedin.com/company/sskidneycare",
  } satisfies SiteSocials,
  accreditations: [
    { name: "ISO 9001:2015 Quality Management", short: "ISO 9001" },
    { name: "Indian Medical Association — registered facility", short: "IMA" },
    { name: "Working towards NABH certification", short: "NABH (in progress)" },
  ] satisfies SiteAccreditation[],
  languagesSpokenAtHospital: ["English", "Hindi", "Odia", "Bengali"],
  international: {
    visaSupport: true,
    languagesForCoordination: ["English", "Hindi", "Bengali"],
  },
} as const;
