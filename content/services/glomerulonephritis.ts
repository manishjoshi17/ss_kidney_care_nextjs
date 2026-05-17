import type { Service } from "@/modules/services/core/types";

export const glomerulonephritis: Service = {
  slug: "glomerulonephritis",
  icon: "flask",
  category: "ckd",
  heroImage: "https://images.unsplash.com/photo-1583912267550-d44c9c6dba39?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A pathology laboratory at SS Kidney Care",
    hi: "एसएस किडनी केयर की पैथोलॉजी लैब",
    or: "A pathology laboratory at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Glomerulonephritis",
      shortDescription: "When the kidney's filters themselves are inflamed — diagnosed properly, treated precisely.",
      longDescription: [
        "Glomerulonephritis is inflammation of the tiny filters inside the kidney (the glomeruli). It often shows up as blood or unusual protein in urine, swelling around the eyes or ankles, or sometimes a sudden rise in BP and creatinine.",
        "Because there are many different subtypes — each with its own treatment — the right diagnosis is usually a kidney biopsy. We take the biopsy, send the tissue to a renal pathologist, and put the plan together once we know what we're treating.",
        "Treatment depends on the subtype but typically combines immunosuppression with kidney-protective drugs, careful BP and protein control, and close follow-up while the disease settles.",
      ],
      highlights: [
        "Image-guided kidney biopsy on-site",
        "Renal-pathology partnership for tissue diagnosis",
        "Immunosuppression management — steroids, MMF, rituximab where indicated",
        "ACEi / ARB titration for proteinuria",
        "Close 6–8 week follow-up while disease activity settles",
      ],
      quickFacts: [
        { label: "First sign", value: "Blood or protein in urine, sometimes swelling" },
        { label: "Diagnosis", value: "Kidney biopsy + renal pathology" },
        { label: "Treatment", value: "Subtype-specific; usually multi-month" },
        { label: "Bring along", value: "All urine reports, recent BP log, any auto-immune work-up" },
      ],
      faqs: [
        { question: "Do I really need a biopsy?", answer: "For most glomerular disease, yes. The subtypes look the same on blood and urine tests but are treated very differently — a tissue diagnosis is the only reliable way to get the treatment right." },
        { question: "Is the biopsy safe?", answer: "It is an image-guided procedure done under local anaesthetic; you spend a few hours under observation afterwards. Complications are uncommon and we discuss them with you in detail before the day." },
        { question: "How long is the treatment?", answer: "Most regimens run for several months, sometimes over a year, depending on the subtype and response. We will explain the plan up front and review the response at every visit." },
      ],
    },
    hi: {
      name: "ग्लोमेरुलोनेफ्राइटिस",
      shortDescription: "जब किडनी के फ़िल्टर सूज जाएँ — सही निदान, सटीक इलाज।",
      longDescription: [
        "ग्लोमेरुलोनेफ्राइटिस किडनी के अंदर के नन्हे फ़िल्टरों की सूजन है।",
        "सही निदान के लिए आमतौर पर किडनी बायोप्सी होती है — फिर सबटाइप के अनुसार उपचार।",
      ],
      highlights: [
        "इमेज-गाइडेड किडनी बायोप्सी",
        "रीनल पैथोलॉजी साझेदारी",
        "इम्यूनोसप्रेशन प्रबंधन",
        "ACEi / ARB समायोजन",
        "हर 6–8 सप्ताह में फ़ॉलो-अप",
      ],
      quickFacts: [
        { label: "पहला संकेत", value: "यूरिन में खून या प्रोटीन, कभी सूजन" },
        { label: "निदान", value: "किडनी बायोप्सी + पैथोलॉजी" },
        { label: "उपचार", value: "सबटाइप-विशिष्ट; आम तौर पर कई महीने" },
        { label: "साथ लाएँ", value: "सभी यूरिन रिपोर्ट, BP लॉग, ऑटो-इम्यून जाँच" },
      ],
      faqs: [
        { question: "क्या बायोप्सी ज़रूरी है?", answer: "हाँ — सबटाइप जाने बिना इलाज नहीं हो सकता।" },
        { question: "क्या बायोप्सी सुरक्षित है?", answer: "इमेज-गाइडेड, लोकल एनेस्थीसिया; जटिलताएँ कम।" },
        { question: "इलाज कितना लंबा?", answer: "कई महीने, कभी एक साल से ज़्यादा।" },
      ],
    },
    or: {
      name: "Glomerulonephritis",
      shortDescription: "When the kidney's filters themselves are inflamed — diagnosed properly, treated precisely.",
      longDescription: [
        "Glomerulonephritis is inflammation of the tiny filters inside the kidney.",
        "Diagnosis is usually a kidney biopsy; treatment is subtype-specific.",
      ],
      highlights: [
        "Image-guided kidney biopsy on-site",
        "Renal-pathology partnership",
        "Immunosuppression management",
        "ACEi / ARB titration",
        "Close 6–8 week follow-up",
      ],
      quickFacts: [
        { label: "First sign", value: "Blood or protein in urine" },
        { label: "Diagnosis", value: "Kidney biopsy" },
        { label: "Treatment", value: "Subtype-specific" },
        { label: "Bring along", value: "Urine reports, BP log, auto-immune work-up" },
      ],
      faqs: [
        { question: "Need a biopsy?", answer: "Usually yes — to identify subtype." },
        { question: "Is it safe?", answer: "Image-guided, local anaesthetic, low complication rate." },
        { question: "How long is treatment?", answer: "Several months to over a year, by subtype." },
      ],
    },
  },
};
