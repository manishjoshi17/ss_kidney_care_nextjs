import type { Doctor } from "@/modules/doctors/core/types";

export const drRakeshJena: Doctor = {
  slug: "dr-rakesh-jena",
  photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
  qualifications: ["MBBS", "MD (Internal Medicine)", "DNB (Nephrology)"],
  experienceYears: 11,
  languagesSpoken: ["English", "Hindi", "Odia"],
  availability: ["tue", "thu", "sat"],
  i18n: {
    en: {
      name: "Dr. Rakesh Jena",
      title: "Consultant nephrologist — critical care & advanced therapies",
      bio: [
        "Dr. Jena leads our AKI and advanced-therapies programme — plasmapheresis, CRRT, and acute renal replacement in the ICU.",
        "He believes the right decision in the first 24 hours of acute kidney injury sets the course for everything that follows, and is on-call for our renal ICU around the clock.",
      ],
      specialties: ["Acute kidney injury", "CRRT / SLED", "Plasmapheresis", "Renal critical care"],
    },
    hi: {
      name: "डॉ. राकेश जेना",
      title: "कंसल्टेंट नेफ्रोलॉजिस्ट — क्रिटिकल केयर और एडवांस्ड थेरेपी",
      bio: [
        "डॉ. जेना हमारे AKI और एडवांस्ड थेरेपी कार्यक्रम का नेतृत्व करते हैं।",
        "वह मानते हैं कि तीव्र किडनी विफलता के पहले 24 घंटों में सही निर्णय आगे की पूरी राह तय करता है।",
      ],
      specialties: ["तीव्र किडनी विफलता", "CRRT / SLED", "प्लाज़्मफ़ेरेसिस", "रीनल क्रिटिकल केयर"],
    },
    or: {
      name: "Dr. Rakesh Jena",
      title: "Consultant nephrologist — critical care & advanced therapies",
      bio: [
        "Dr. Jena leads our AKI and advanced-therapies programme.",
        "He is on-call for our renal ICU around the clock.",
      ],
      specialties: ["Acute kidney injury", "CRRT / SLED", "Plasmapheresis", "Renal critical care"],
    },
  },
};
