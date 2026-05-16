import type { SupportedLocale } from "@/lib/locale";
import type { IconName } from "@/components/icons/icon";

export interface FacilityI18n {
  name: string;
  description: string;
  capabilities: string[];
}

export interface Facility {
  slug: string;
  icon: IconName;
  photo?: string;
  photoAlt?: Record<SupportedLocale, string>;
  i18n: Record<SupportedLocale, FacilityI18n>;
}

export const FACILITIES: Facility[] = [
  {
    slug: "dialysis-floor",
    icon: "drop",
    photo: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    photoAlt: {
      en: "The dialysis floor at SS Kidney Care with reclining chairs and monitors",
      hi: "एसएस किडनी केयर का डायलिसिस फ़्लोर",
      or: "The dialysis floor at SS Kidney Care",
    },
    i18n: {
      en: {
        name: "Dialysis Centre",
        description: "Six modern hemodialysis stations across a single dedicated floor, designed for comfort over a four-hour session — and for safety with hepatitis-isolated machines.",
        capabilities: [
          "6 modern hemodialysis machines",
          "Hepatitis B & C isolated areas",
          "Online HDF where clinically indicated",
          "Single-use dialyzers, every session",
          "Reclining chairs, Wi-Fi, screens",
          "Senior dialysis-trained nurses on every shift",
        ],
      },
      hi: {
        name: "डायलिसिस केंद्र",
        description: "एक समर्पित मंज़िल पर छह आधुनिक हेमोडायलिसिस स्टेशन।",
        capabilities: [
          "6 आधुनिक हेमोडायलिसिस मशीनें",
          "हेपेटाइटिस B और C के लिए अलग क्षेत्र",
          "नैदानिक रूप से उपयुक्त होने पर ऑनलाइन HDF",
          "हर सत्र में नया डायलाइज़र",
          "आरामदायक कुर्सियाँ, वाई-फ़ाई, स्क्रीन",
          "हर शिफ़्ट में अनुभवी डायलिसिस नर्स",
        ],
      },
      or: {
        name: "Dialysis Centre",
        description: "Six modern hemodialysis stations on a dedicated floor.",
        capabilities: [
          "6 modern hemodialysis machines",
          "Hepatitis B & C isolated areas",
          "Online HDF when indicated",
          "Single-use dialyzers, every session",
          "Reclining chairs, Wi-Fi, screens",
          "Senior dialysis-trained nurses",
        ],
      },
    },
  },
  {
    slug: "renal-icu",
    icon: "heartbeat",
    photo: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
    photoAlt: {
      en: "Renal ICU equipment at SS Kidney Care",
      hi: "एसएस किडनी केयर में रीनल आईसीयू उपकरण",
      or: "Renal ICU equipment at SS Kidney Care",
    },
    i18n: {
      en: {
        name: "Renal ICU",
        description: "A dedicated kidney-care ICU for acute kidney injury, severe electrolyte disturbance, and patients needing advanced therapies — with continuous monitoring and bedside dialysis capability.",
        capabilities: [
          "Continuous patient monitoring",
          "Bedside hemodialysis and SLED",
          "CRRT for hemodynamically unstable patients",
          "Plasmapheresis on-site",
          "Renal-specific drug dosing protocols",
        ],
      },
      hi: {
        name: "रीनल आईसीयू",
        description: "तीव्र किडनी विफलता और उन्नत उपचार के लिए समर्पित आईसीयू।",
        capabilities: [
          "निरंतर मरीज़ निगरानी",
          "बेडसाइड हेमोडायलिसिस और SLED",
          "अस्थिर मरीज़ों के लिए CRRT",
          "ऑन-साइट प्लाज़्मफ़ेरेसिस",
          "रीनल-विशिष्ट दवा खुराक प्रोटोकॉल",
        ],
      },
      or: {
        name: "Renal ICU",
        description: "A dedicated kidney-care ICU.",
        capabilities: [
          "Continuous patient monitoring",
          "Bedside hemodialysis and SLED",
          "CRRT",
          "Plasmapheresis on-site",
          "Renal-specific drug dosing protocols",
        ],
      },
    },
  },
  {
    slug: "in-house-lab",
    icon: "flask",
    photo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    photoAlt: {
      en: "In-house renal biochemistry lab",
      hi: "इन-हाउस रीनल बायोकेमिस्ट्री लैब",
      or: "In-house renal biochemistry lab",
    },
    i18n: {
      en: {
        name: "In-house biochemistry lab",
        description: "Same-day reporting for the kidney panels and electrolytes that drive day-to-day decisions — open early so dialysis-day blood-work is ready before your slot.",
        capabilities: [
          "Serum creatinine, urea, electrolytes — same day",
          "Urine ACR and routine analysis",
          "Hep B / C, HIV pre-dialysis screening",
          "ABG (arterial blood gas) at the bedside",
          "Open from 7 AM on dialysis days",
        ],
      },
      hi: {
        name: "इन-हाउस बायोकेमिस्ट्री लैब",
        description: "किडनी पैनल और इलेक्ट्रोलाइट के लिए उसी दिन रिपोर्टिंग।",
        capabilities: [
          "क्रिएटिनिन, यूरिया, इलेक्ट्रोलाइट — उसी दिन",
          "यूरिन ACR और रूटीन विश्लेषण",
          "हेप B / C, HIV स्क्रीनिंग",
          "बेडसाइड पर ABG",
          "डायलिसिस के दिनों में सुबह 7 बजे से खुली",
        ],
      },
      or: {
        name: "In-house biochemistry lab",
        description: "Same-day reporting for the kidney panels and electrolytes.",
        capabilities: [
          "Creatinine, urea, electrolytes — same day",
          "Urine ACR and routine analysis",
          "Hep B / C, HIV screening",
          "ABG at the bedside",
          "Open early on dialysis days",
        ],
      },
    },
  },
  {
    slug: "ambulance",
    icon: "first-aid",
    photo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
    photoAlt: {
      en: "Ambulance service available 24×7",
      hi: "24×7 उपलब्ध एम्बुलेंस सेवा",
      or: "Ambulance service available 24×7",
    },
    i18n: {
      en: {
        name: "Ambulance service",
        description: "A 24×7 ambulance service for transfers and for patients in renal emergency. Trained paramedic in attendance; coordination with our nephrology line throughout the journey.",
        capabilities: [
          "24×7 availability",
          "Trained paramedic on board",
          "Basic life support equipment",
          "Inter-facility transfer support",
          "Coordination with the on-call nephrologist",
        ],
      },
      hi: {
        name: "एम्बुलेंस सेवा",
        description: "ट्रांसफ़र और रीनल इमरजेंसी के लिए 24×7 एम्बुलेंस सेवा।",
        capabilities: [
          "24×7 उपलब्धता",
          "प्रशिक्षित पैरामेडिक",
          "बेसिक लाइफ़ सपोर्ट उपकरण",
          "इंटर-फ़ेसिलिटी ट्रांसफ़र",
          "ऑन-कॉल नेफ्रोलॉजिस्ट से समन्वय",
        ],
      },
      or: {
        name: "Ambulance service",
        description: "A 24×7 ambulance service for emergencies and transfers.",
        capabilities: [
          "24×7 availability",
          "Trained paramedic on board",
          "Basic life support equipment",
          "Inter-facility transfer",
          "Coordination with on-call nephrologist",
        ],
      },
    },
  },
];
