import type { Service } from "@/modules/services/core/types";

export const hypertensionDiabetesKidney: Service = {
  slug: "hypertension-diabetes-kidney-care",
  icon: "heartbeat",
  category: "lifestyle",
  heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Checking blood pressure during a routine nephrology consultation",
    hi: "नियमित नेफ्रोलॉजी परामर्श में रक्तचाप जाँच",
    or: "Checking blood pressure during a routine nephrology consultation",
  },
  i18n: {
    en: {
      name: "Hypertension & diabetes-related kidney care",
      shortDescription: "Catching kidney damage before it shows on the reports.",
      longDescription: [
        "Diabetes and high blood pressure are the two largest causes of kidney disease in India. The good news: both are manageable, and well-managed, they will often keep your kidneys safe for decades.",
        "Our combined hypertension-and-diabetes clinic brings together the kidney specialist, the renal dietitian, and — where useful — an endocrinology or cardiology opinion. Every visit reviews your blood pressure log, sugar control, urine protein, and the medicines doing the work.",
        "We will explain what is on track and what we are watching, in plain words. If anything is drifting, we will catch it early and adjust the plan with you.",
      ],
      highlights: [
        "Combined nephrology + diabetes review at each visit",
        "Home blood-pressure monitoring guidance",
        "ACEi / ARB and SGLT2 inhibitor optimisation",
        "Urine albumin / creatinine tracking over time",
        "Diet and exercise plans built with you",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Diabetes or hypertension with any urine albumin or rising creatinine" },
        { label: "Visit frequency", value: "Every 3 months" },
        { label: "First visit duration", value: "About 45 minutes" },
        { label: "Bring along", value: "BP log, HbA1c, recent urine and blood reports" },
      ],
      faqs: [
        { question: "I have diabetes — do I need a nephrologist?", answer: "If your urine has even small amounts of albumin, or your creatinine has started to climb, yes. Early nephrology input is the single biggest reason kidneys stay well in diabetes." },
        { question: "What's a good blood-pressure target?", answer: "For most patients with kidney disease, under 130/80 mmHg, measured at home. We will set your personal target based on your age and other conditions." },
        { question: "Are newer diabetes medicines kidney-friendly?", answer: "Several are — and one class (SGLT2 inhibitors) actively protects the kidneys. We review whether they are right for you, beyond just sugar control." },
      ],
    },
    hi: {
      name: "उच्च रक्तचाप और डायबिटीज़-जनित किडनी देखभाल",
      shortDescription: "रिपोर्ट पर दिखाई देने से पहले किडनी की क्षति पकड़ना।",
      longDescription: [
        "भारत में किडनी रोग के दो सबसे बड़े कारण डायबिटीज़ और उच्च रक्तचाप हैं।",
        "हमारा संयुक्त क्लिनिक हर मुलाक़ात में रक्तचाप, शुगर, यूरिन प्रोटीन और दवाओं की समीक्षा करता है।",
      ],
      highlights: [
        "हर मुलाक़ात में संयुक्त नेफ्रोलॉजी + डायबिटीज़ समीक्षा",
        "घर पर रक्तचाप माप मार्गदर्शन",
        "ACEi / ARB और SGLT2 अवरोधक अनुकूलन",
        "समय के साथ यूरिन एल्ब्यूमिन / क्रिएटिनिन ट्रैकिंग",
        "आपके साथ बनाई गई आहार व व्यायाम योजना",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "डायबिटीज़ या उच्च रक्तचाप के साथ यूरिन एल्ब्यूमिन" },
        { label: "मुलाक़ात की आवृत्ति", value: "हर 3 महीने" },
        { label: "पहली मुलाक़ात", value: "लगभग 45 मिनट" },
        { label: "साथ लाएँ", value: "BP लॉग, HbA1c, हाल की यूरिन और रक्त रिपोर्ट" },
      ],
      faqs: [
        { question: "मुझे डायबिटीज़ है — क्या नेफ्रोलॉजिस्ट चाहिए?", answer: "अगर यूरिन में एल्ब्यूमिन है या क्रिएटिनिन बढ़ रहा है तो हाँ।" },
        { question: "अच्छा रक्तचाप लक्ष्य क्या है?", answer: "अधिकांश मरीज़ों के लिए 130/80 mmHg से कम।" },
        { question: "क्या नई डायबिटीज़ दवाएँ किडनी के लिए सुरक्षित हैं?", answer: "कुछ तो किडनी की रक्षा भी करती हैं।" },
      ],
    },
    or: {
      name: "Hypertension & diabetes-related kidney care",
      shortDescription: "Catching kidney damage before it shows on the reports.",
      longDescription: [
        "Diabetes and high blood pressure are the two largest causes of kidney disease in India.",
        "Our combined clinic reviews blood pressure, sugar, urine protein, and medicines at every visit.",
      ],
      highlights: [
        "Combined nephrology + diabetes review",
        "Home BP monitoring guidance",
        "ACEi / ARB and SGLT2 inhibitor optimisation",
        "Urine albumin / creatinine tracking",
        "Diet and exercise plans",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Diabetes or hypertension with urine albumin or rising creatinine" },
        { label: "Visit frequency", value: "Every 3 months" },
        { label: "First visit duration", value: "About 45 minutes" },
        { label: "Bring along", value: "BP log, HbA1c, recent urine and blood reports" },
      ],
      faqs: [
        { question: "Diabetes — need a nephrologist?", answer: "If urine albumin or rising creatinine, yes." },
        { question: "BP target?", answer: "Under 130/80 mmHg for most." },
        { question: "Newer diabetes meds?", answer: "Several actively protect the kidneys." },
      ],
    },
  },
};
