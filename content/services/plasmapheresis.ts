import type { Service } from "@/modules/services/core/types";

export const plasmapheresis: Service = {
  slug: "plasmapheresis-advanced-therapies",
  icon: "flask",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Apheresis equipment in the advanced therapies unit at SS Kidney Care",
    hi: "एसएस किडनी केयर में एडवांस्ड थेरेपी यूनिट के उपकरण",
    or: "Apheresis equipment in the advanced therapies unit at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Plasmapheresis & advanced therapies",
      shortDescription: "Specialised blood-purification for autoimmune and critical-care kidney conditions.",
      longDescription: [
        "Some renal conditions need more than dialysis. In autoimmune disease — such as anti-GBM disease, ANCA-associated vasculitis, or thrombotic microangiopathy — circulating antibodies and immune complexes do the damage. Plasmapheresis removes them from the bloodstream, replacing the plasma with albumin or fresh frozen plasma.",
        "We also offer specialised dialysis modes for the critically ill: sustained low-efficiency dialysis (SLED), continuous renal replacement therapy (CRRT) in the ICU, and hemoperfusion for selected drug overdoses and intoxications.",
        "These are technically demanding treatments. Our team runs them in close coordination with intensive care, immunology and haematology — every case discussed before, during and after.",
      ],
      highlights: [
        "Plasmapheresis (TPE) for autoimmune renal disease",
        "SLED — sustained low-efficiency dialysis",
        "CRRT in the renal ICU for hemodynamically unstable patients",
        "Hemoperfusion for selected intoxications",
        "Coordination with immunology and haematology",
      ],
      quickFacts: [
        { label: "Common indications", value: "ANCA vasculitis, anti-GBM, TMA, severe AKI on inotropes" },
        { label: "Session length", value: "2–4 hours for TPE; 12–24 h for CRRT" },
        { label: "Where", value: "Renal ICU" },
        { label: "Referrals", value: "We accept referrals from other centres" },
      ],
      faqs: [
        { question: "How is plasmapheresis different from dialysis?", answer: "Dialysis filters waste and excess fluid from the blood. Plasmapheresis removes plasma — and the disease-causing antibodies in it — and replaces it. The two can be used together when needed." },
        { question: "How many sessions will I need?", answer: "Most protocols are 5–7 sessions on alternate days, but this is decided case-by-case based on your antibody titres and clinical response." },
        { question: "Are these therapies safe?", answer: "All have side-effects which we will discuss in detail. The team is experienced in managing reactions, electrolyte shifts and access issues throughout the session." },
      ],
    },
    hi: {
      name: "प्लाज़्मफ़ेरेसिस और उन्नत थेरेपी",
      shortDescription: "ऑटोइम्यून और गंभीर देखभाल किडनी स्थितियों के लिए विशेष रक्त-शुद्धिकरण।",
      longDescription: [
        "कुछ रीनल स्थितियों में डायलिसिस से अधिक की ज़रूरत होती है।",
        "हम गंभीर रूप से बीमार मरीज़ों के लिए विशेष डायलिसिस मोड भी प्रदान करते हैं: SLED, CRRT और हीमोपरफ़्यूज़न।",
      ],
      highlights: [
        "ऑटोइम्यून रीनल रोग के लिए प्लाज़्मफ़ेरेसिस (TPE)",
        "SLED — सस्टेन्ड लो-एफ़िशियेंसी डायलिसिस",
        "रीनल आईसीयू में CRRT",
        "चुनिंदा विषाक्तता के लिए हीमोपरफ़्यूज़न",
        "इम्यूनोलॉजी और हेमेटोलॉजी से समन्वय",
      ],
      quickFacts: [
        { label: "सामान्य संकेत", value: "ANCA, anti-GBM, TMA, गंभीर AKI" },
        { label: "सत्र अवधि", value: "TPE: 2–4 घंटे; CRRT: 12–24 घंटे" },
        { label: "स्थान", value: "रीनल आईसीयू" },
        { label: "रेफ़रल", value: "अन्य केंद्रों से रेफ़रल स्वीकार" },
      ],
      faqs: [
        { question: "प्लाज़्मफ़ेरेसिस और डायलिसिस में अंतर?", answer: "डायलिसिस अपशिष्ट निकालता है; प्लाज़्मफ़ेरेसिस प्लाज़्मा बदलता है।" },
        { question: "कितने सत्र चाहिए?", answer: "अधिकांश प्रोटोकॉल 5–7 सत्र हैं।" },
        { question: "क्या यह सुरक्षित है?", answer: "सभी के साइड-इफ़ेक्ट हैं जिन पर हम विस्तार से चर्चा करते हैं।" },
      ],
    },
    or: {
      name: "Plasmapheresis & advanced therapies",
      shortDescription: "Specialised blood-purification for autoimmune and critical-care kidney conditions.",
      longDescription: [
        "Some renal conditions need more than dialysis.",
        "We offer plasmapheresis, SLED, CRRT, and hemoperfusion as part of our advanced therapies.",
      ],
      highlights: [
        "Plasmapheresis (TPE) for autoimmune renal disease",
        "SLED",
        "CRRT in the renal ICU",
        "Hemoperfusion for selected intoxications",
        "Coordination with immunology and haematology",
      ],
      quickFacts: [
        { label: "Common indications", value: "ANCA vasculitis, anti-GBM, TMA, severe AKI" },
        { label: "Session length", value: "TPE 2–4 h, CRRT 12–24 h" },
        { label: "Where", value: "Renal ICU" },
        { label: "Referrals", value: "Accepted from other centres" },
      ],
      faqs: [
        { question: "Plasmapheresis vs dialysis?", answer: "Plasmapheresis replaces plasma; dialysis filters waste." },
        { question: "Sessions?", answer: "Most protocols are 5–7." },
        { question: "Safety?", answer: "Side-effects discussed before starting." },
      ],
    },
  },
};
