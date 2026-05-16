import type { Doctor } from "@/modules/doctors/core/types";

export const drSureshPatnaik: Doctor = {
  slug: "dr-suresh-patnaik",
  photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  qualifications: ["MBBS", "MD (Medicine)", "DM (Nephrology)"],
  experienceYears: 18,
  languagesSpoken: ["English", "Hindi", "Odia"],
  availability: ["mon", "tue", "wed", "thu", "fri"],
  i18n: {
    en: {
      name: "Dr. Suresh Patnaik",
      title: "Senior consultant nephrologist & founding director",
      bio: [
        "Dr. Patnaik trained at AIIMS and has spent over two decades in nephrology — first at SCB, then leading SS Kidney Care since 2008.",
        "He's published in transplant immunology and runs the hospital's living-donor programme.",
      ],
      specialties: ["Transplant nephrology", "Glomerular disease", "Hypertension management"],
    },
    hi: {
      name: "डॉ. सुरेश पटनायक",
      title: "वरिष्ठ कंसल्टेंट नेफ्रोलॉजिस्ट और संस्थापक निदेशक",
      bio: [
        "डॉ. पटनायक ने एम्स में प्रशिक्षण लिया है और नेफ्रोलॉजी में दो दशकों से अधिक का अनुभव रखते हैं।",
        "उन्होंने ट्रांसप्लांट इम्यूनोलॉजी में शोध प्रकाशित किया है।",
      ],
      specialties: ["प्रत्यारोपण नेफ्रोलॉजी", "ग्लोमेरुलर रोग", "उच्च रक्तचाप प्रबंधन"],
    },
    or: {
      name: "Dr. Suresh Patnaik",
      title: "Senior consultant nephrologist & founding director",
      bio: [
        "Dr. Patnaik trained at AIIMS and has spent over two decades in nephrology.",
        "He runs the hospital's living-donor programme.",
      ],
      specialties: ["Transplant nephrology", "Glomerular disease", "Hypertension management"],
    },
  },
};
