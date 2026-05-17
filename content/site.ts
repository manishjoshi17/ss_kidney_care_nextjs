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

export interface SiteConsultationPoint {
  addressLines: string[];
  phone: string;
  /** Disclaimer rendered with the address. Plan §7 short form. */
  disclaimer: TranslatedString;
  /** Disclaimer rendered in the Contact-page secondary block. Plan §7 full form. */
  disclaimerFull: TranslatedString;
}

export interface SiteEmergencyContact {
  name: string;
  qualification: string;
  phone: string;
  /** Short-form description for the site-wide emergency strip + footer line. */
  description: TranslatedString;
}

export const site = {
  name: "SS Kidney Care",
  legalName: "SS Kidney Care",
  taglineI18n: {
    en: "Advanced nephrology — the future of kidney health.",
    hi: "उन्नत नेफ्रोलॉजी — किडनी स्वास्थ्य का भविष्य।",
    or: "Advanced nephrology — the future of kidney health.",
  } satisfies TranslatedString,
  brandPhraseI18n: {
    en: "Care that listens.",
    hi: "सुनने वाली देखभाल।",
    or: "Care that listens.",
  } satisfies TranslatedString,
  established: 2023,
  addressLines: [
    "SRIT Colony, 2nd Left Lane",
    "Near LifeCare Hospital, Budharaja",
    "Sambalpur, Odisha 768004",
    "India",
  ],
  /** Sambalpur, Odisha (approx). */
  latLng: { lat: 21.4669, lng: 83.9812 },
  phoneNumbers: {
    // Sambalpur reception (also doubles as appointment line)
    general: "+91 78490 41483",
    appointment: "+91 78490 41483",
    // 24×7 emergency — independent partner (see emergencyContact below)
    emergency: "+91 86583 88080",
    // Dr. Shristi WhatsApp-only consultation line (do NOT advertise as voice)
    whatsapp: "+91 70086 52465",
  },
  email: {
    // TODO confirm mailbox liveness with client — until confirmed, do not render mailto link on Contact
    general: "help@drsouravshristi.com",
    appointment: "help@drsouravshristi.com",
    billing: "help@drsouravshristi.com",
    hr: "help@drsouravshristi.com",
    international: "help@drsouravshristi.com",
  },
  // OPD timings per brochure — TODO confirm with client before JSON-LD openingHours ships uncommented
  hours: {
    monday_to_friday: "8:00 AM – 10:00 AM · 6:00 PM – 9:00 PM",
    saturday: "8:00 AM – 10:00 AM",
    sunday: "Emergency only — 24×7 line",
  } satisfies SiteHours,
  socials: {
    facebook: "https://facebook.com/sskidneycare",
    instagram: "https://instagram.com/sskidneycare",
    linkedin: "https://in.linkedin.com/in/sourav-shristi-8a447b20",
  } satisfies SiteSocials,
  accreditations: [
    { name: "Indian Medical Association — registered facility", short: "IMA" },
    { name: "VIMSAR Department of Nephrology affiliation (Asst. Professor)", short: "VIMSAR" },
    { name: "ISO 9001:2015 Quality Management (in progress)", short: "ISO 9001" },
  ] satisfies SiteAccreditation[],
  languagesSpokenAtHospital: ["English", "Hindi", "Odia"],
  international: {
    visaSupport: false,
    languagesForCoordination: ["English", "Hindi", "Odia"],
  },
  /**
   * Burla VIMSAR consultation point — NOT a branch of SS Kidney Care.
   * Dr. Shristi consults here in his capacity as Asst. Professor, Department of Nephrology, VIMSAR.
   * The Burla phone is the VIMSAR-side number, not an SS Kidney Care number.
   */
  consultationPoint: {
    burla: {
      addressLines: [
        "Sri Ram Vihar",
        "Near St. Luke School, Burla",
        "Sambalpur district, Odisha",
      ],
      phone: "+91 79787 69447",
      disclaimer: {
        en: "Burla listing reflects Dr. Shristi's VIMSAR consultation hours and is not an SS Kidney Care branch.",
        hi: "बुर्ला सूची डॉ. श्रीस्टी के VIMSAR परामर्श घंटों को दर्शाती है और यह SS Kidney Care की शाखा नहीं है।",
        or: "ବୁର୍ଲା ତାଲିକା ଡ. ଶ୍ରୀଷ୍ଟିଙ୍କ VIMSAR ପରାମର୍ଶ ଘଣ୍ଟାକୁ ପ୍ରତିଫଳିତ କରେ ଏବଂ ଏହା SS Kidney Care ର ଶାଖା ନୁହେଁ।",
      } satisfies TranslatedString,
      disclaimerFull: {
        en: "Dr. Sourav Shristi additionally consults at Burla in his capacity as Assistant Professor, Department of Nephrology, VIMSAR (a government medical college hospital). The Burla address listed is the VIMSAR consultation point and is not a branch of SS Kidney Care. For SS Kidney Care services, please visit our Sambalpur clinic.",
        hi: "डॉ. सौरव श्रीस्टी VIMSAR (एक सरकारी मेडिकल कॉलेज अस्पताल) के नेफ्रोलॉजी विभाग में सहायक प्रोफेसर के रूप में बुर्ला में भी परामर्श करते हैं। बुर्ला का पता VIMSAR परामर्श बिंदु है और SS Kidney Care की शाखा नहीं है। SS Kidney Care की सेवाओं के लिए, कृपया हमारे सम्बलपुर क्लिनिक पर आएँ।",
        or: "ଡ. ସୌରଭ ଶ୍ରୀଷ୍ଟି VIMSAR (ଏକ ସରକାରୀ ମେଡିକାଲ୍ କଲେଜ ହସ୍ପିଟାଲ) ର ନେଫ୍ରୋଲୋଜି ବିଭାଗରେ ସହାୟକ ପ୍ରଫେସର ଭାବେ ବୁର୍ଲାରେ ମଧ୍ୟ ପରାମର୍ଶ କରନ୍ତି। ବୁର୍ଲା ଠିକଣା VIMSAR ପରାମର୍ଶ ସ୍ଥାନ ଏବଂ SS Kidney Care ର ଶାଖା ନୁହେଁ। SS Kidney Care ସେବା ପାଇଁ ଆମର ସମ୍ବଲପୁର କ୍ଲିନିକକୁ ଆସନ୍ତୁ।",
      } satisfies TranslatedString,
    },
  } satisfies Record<string, SiteConsultationPoint>,
  /**
   * 24×7 emergency line — staffed by an INDEPENDENT partner physician.
   * Dr. Basanta Pradhan is NOT a co-physician of SS Kidney Care. He provides after-hours
   * emergency triage when Dr. Shristi is unavailable. Render only in: site-wide emergency strip,
   * Contact page 24×7 block, footer emergency line, Emergency page. NEVER in "team" sections,
   * Physician JSON-LD, or MedicalClinic employee graph.
   */
  emergencyContact: {
    name: "Dr. Basanta Pradhan",
    qualification: "MD (Medicine)",
    phone: "+91 86583 88080",
    description: {
      en: "Independent 24/7 emergency partner physician — not a co-physician of SS Kidney Care.",
      hi: "स्वतंत्र 24/7 आपातकालीन साथी चिकित्सक — SS Kidney Care के सह-चिकित्सक नहीं।",
      or: "ସ୍ୱାଧୀନ 24/7 ଜରୁରୀକାଳୀନ ସହଭାଗୀ ଚିକିତ୍ସକ — SS Kidney Care ର ସହ-ଚିକିତ୍ସକ ନୁହଁନ୍ତି।",
    } satisfies TranslatedString,
  } satisfies SiteEmergencyContact,
} as const;
