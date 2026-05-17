import type { Service } from "@/modules/services/core/types";

export const hypertensionRelatedKidneyCare: Service = {
  slug: "hypertension-related-kidney-care",
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
      name: "Hypertension-related kidney care",
      shortDescription: "Lowering the blood pressure that's quietly damaging your kidneys.",
      longDescription: [
        "High blood pressure is one of the two largest drivers of chronic kidney disease in India. The damage is gradual and silent — usually the first sign on the lab report is a faint trace of protein in urine, or a creatinine that's slowly drifted upward over a few years.",
        "Our hypertension-and-kidney clinic reviews your home BP log, your urine, your kidney function and the medications doing the work — every visit. We adjust your prescription to a kidney-protective combination wherever the evidence supports it (ACE inhibitors, ARBs, and now SGLT2 inhibitors).",
        "We will explain what the targets are, what to watch on a daily basis, and what we expect to see at the next visit.",
      ],
      highlights: [
        "Home blood-pressure monitoring guidance and protocol",
        "Kidney-protective prescription review (ACEi / ARB / SGLT2)",
        "Urine albumin / creatinine trended over time",
        "Plain-language explanation of every result",
        "Coordination with cardiology when needed",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Hypertension with any urine albumin or rising creatinine" },
        { label: "Visit frequency", value: "Every 3 months when stable" },
        { label: "First visit duration", value: "About 45 minutes" },
        { label: "Bring along", value: "Home BP log, recent urine and blood reports" },
      ],
      faqs: [
        { question: "I take BP tablets — do I need a nephrologist?", answer: "If your urine has even a small amount of albumin, or your creatinine has crept up over the years, yes. Early nephrology input is the single biggest reason kidneys stay well in hypertension." },
        { question: "What's a good blood-pressure target?", answer: "For most patients with kidney involvement, under 130/80 mmHg, measured at home. We set your personal target based on your age and other conditions." },
        { question: "Will my tablets change?", answer: "Possibly. We aim for a kidney-protective combination — that often means an ACE inhibitor or ARB at the core. We will explain any change before it's made." },
      ],
    },
    hi: {
      name: "उच्च रक्तचाप-जनित किडनी देखभाल",
      shortDescription: "किडनी को चुपचाप नुक़सान पहुँचा रहे रक्तचाप को कम करना।",
      longDescription: [
        "उच्च रक्तचाप भारत में किडनी रोग के दो सबसे बड़े कारणों में से एक है। नुक़सान धीरे-धीरे और चुपके से होता है।",
        "हमारा क्लिनिक हर मुलाक़ात में आपका BP, यूरिन प्रोटीन और दवाओं की समीक्षा करता है।",
      ],
      highlights: [
        "घर पर रक्तचाप माप का प्रोटोकॉल",
        "किडनी-सुरक्षात्मक दवा संयोजन (ACEi / ARB / SGLT2)",
        "समय के साथ यूरिन एल्ब्यूमिन ट्रैकिंग",
        "हर परिणाम की सरल भाषा में व्याख्या",
        "ज़रूरत होने पर कार्डियोलॉजी समन्वय",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "उच्च रक्तचाप + यूरिन एल्ब्यूमिन या क्रिएटिनिन बढ़ रहा हो" },
        { label: "मुलाक़ात की आवृत्ति", value: "स्थिर रहने पर हर 3 महीने" },
        { label: "पहली मुलाक़ात", value: "लगभग 45 मिनट" },
        { label: "साथ लाएँ", value: "BP लॉग, हाल की यूरिन और रक्त रिपोर्ट" },
      ],
      faqs: [
        { question: "मैं BP की गोली लेता हूँ — क्या नेफ्रोलॉजिस्ट चाहिए?", answer: "अगर यूरिन में एल्ब्यूमिन है या क्रिएटिनिन बढ़ रहा है, तो हाँ।" },
        { question: "अच्छा रक्तचाप लक्ष्य क्या है?", answer: "अधिकांश के लिए घर पर 130/80 mmHg से कम।" },
        { question: "क्या मेरी गोलियाँ बदलेंगी?", answer: "संभवतः — किडनी-सुरक्षात्मक संयोजन की ओर।" },
      ],
    },
    or: {
      name: "Hypertension-related kidney care",
      shortDescription: "Lowering the blood pressure that's quietly damaging your kidneys.",
      longDescription: [
        "High blood pressure is one of the largest drivers of kidney disease in India.",
        "We review BP, urine, kidney function and medication at every visit.",
      ],
      highlights: [
        "Home BP monitoring protocol",
        "Kidney-protective prescription (ACEi / ARB / SGLT2)",
        "Urine albumin trended over time",
        "Plain-language explanation",
        "Cardiology coordination when needed",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Hypertension with urine albumin or rising creatinine" },
        { label: "Visit frequency", value: "Every 3 months" },
        { label: "First visit duration", value: "About 45 minutes" },
        { label: "Bring along", value: "BP log, recent urine and blood reports" },
      ],
      faqs: [
        { question: "Need a nephrologist?", answer: "If urine albumin or rising creatinine, yes." },
        { question: "BP target?", answer: "Under 130/80 mmHg for most." },
        { question: "Tablets changing?", answer: "Towards a kidney-protective combination." },
      ],
    },
  },
};
