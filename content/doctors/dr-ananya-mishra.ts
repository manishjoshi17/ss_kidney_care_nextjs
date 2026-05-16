import type { Doctor } from "@/modules/doctors/core/types";

export const drAnanyaMishra: Doctor = {
  slug: "dr-ananya-mishra",
  photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  qualifications: ["MBBS", "MD (Medicine)", "DNB (Nephrology)"],
  experienceYears: 12,
  languagesSpoken: ["English", "Hindi", "Odia", "Bengali"],
  availability: ["mon", "wed", "fri", "sat"],
  i18n: {
    en: {
      name: "Dr. Ananya Mishra",
      title: "Consultant nephrologist",
      bio: [
        "Dr. Mishra leads our peritoneal-dialysis programme and the CKD clinic. She believes the best care starts with the longest conversation.",
        "She trained at PGI Chandigarh and joined us in 2017.",
      ],
      specialties: ["Peritoneal dialysis", "CKD management", "Diabetic kidney disease"],
    },
    hi: {
      name: "डॉ. अनन्या मिश्रा",
      title: "कंसल्टेंट नेफ्रोलॉजिस्ट",
      bio: [
        "डॉ. मिश्रा हमारे पेरिटोनियल डायलिसिस कार्यक्रम और सीकेडी क्लिनिक का नेतृत्व करती हैं।",
        "उन्होंने पीजीआई चंडीगढ़ में प्रशिक्षण लिया है।",
      ],
      specialties: ["पेरिटोनियल डायलिसिस", "सीकेडी प्रबंधन", "डायबिटिक किडनी रोग"],
    },
    or: {
      name: "Dr. Ananya Mishra",
      title: "Consultant nephrologist",
      bio: [
        "Dr. Mishra leads our peritoneal-dialysis programme and the CKD clinic.",
        "She trained at PGI Chandigarh and joined us in 2017.",
      ],
      specialties: ["Peritoneal dialysis", "CKD management", "Diabetic kidney disease"],
    },
  },
};
