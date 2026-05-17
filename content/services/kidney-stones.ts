import type { Service } from "@/modules/services/core/types";

export const kidneyStones: Service = {
  slug: "kidney-stones",
  icon: "warning",
  category: "acute",
  heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Ultrasound imaging of the kidneys at SS Kidney Care",
    hi: "एसएस किडनी केयर में किडनी का अल्ट्रासाउंड",
    or: "Ultrasound imaging of the kidneys at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Kidney stones",
      shortDescription: "Working out why the stones keep forming — and stopping them.",
      longDescription: [
        "Kidney stones are common in this region — but a stone that recurs is rarely random. Behind most repeat stones is a treatable underlying cause: low fluid intake, high salt or oxalate in the diet, undiagnosed metabolic abnormalities, or in some cases an issue with how the kidneys handle calcium.",
        "Our approach is two-track. First, we manage the immediate stone — pain control, imaging, and onward referral for urological intervention (lithotripsy, ureteroscopy) if needed. Second, we work up why the stones formed: a 24-hour urine collection, a stone composition analysis, and a metabolic panel guide a focused prevention plan you can actually follow.",
      ],
      highlights: [
        "Acute stone evaluation — pain, imaging, urology referral as needed",
        "24-hour urine stone-risk panel",
        "Stone composition analysis where the stone is retrieved",
        "Diet and fluid plan with our in-house dietitian",
        "Treatable causes addressed — hyperparathyroidism, hypercalciuria, citrate deficiency",
      ],
      quickFacts: [
        { label: "First visit", value: "Imaging review + metabolic work-up planned" },
        { label: "Urine collection", value: "24-hour, at home" },
        { label: "Bring along", value: "All prior imaging, stone analysis if available" },
        { label: "Follow-up", value: "6 weeks for results review, then 6-monthly" },
      ],
      faqs: [
        { question: "I only get stones occasionally. Do I need a work-up?", answer: "If you've had two or more stones, yes. The work-up is usually a urine collection and a blood panel — most patients get a clear answer about what's driving the stones and what to change at home." },
        { question: "Will I need surgery?", answer: "Many stones pass on their own with hydration and pain control. Larger or obstructing stones may need lithotripsy or ureteroscopy — we coordinate with a urologist for these and follow you through afterwards." },
        { question: "Is it really about drinking more water?", answer: "Hydration is the single biggest lever for most patients — but the right amount and timing differs by stone type. We'll set a target you can actually hit and check progress at follow-up." },
      ],
    },
    hi: {
      name: "किडनी की पथरी",
      shortDescription: "पथरी क्यों बार-बार बनती है — और कैसे रुकेगी।",
      longDescription: [
        "इस क्षेत्र में पथरी आम है — लेकिन बार-बार बनने वाली पथरी के पीछे आम तौर पर एक इलाज-योग्य कारण होता है।",
        "हम तीव्र पथरी का प्रबंधन करते हैं और कारण की जाँच के लिए 24-घंटे का यूरिन और मेटाबॉलिक पैनल करते हैं।",
      ],
      highlights: [
        "तीव्र पथरी मूल्यांकन और इमेजिंग",
        "24-घंटे यूरिन रिस्क पैनल",
        "स्टोन कम्पोज़िशन विश्लेषण",
        "डायटीशियन के साथ आहार-पानी योजना",
        "इलाज-योग्य कारणों का समाधान",
      ],
      quickFacts: [
        { label: "पहली मुलाक़ात", value: "इमेजिंग समीक्षा + मेटाबॉलिक जाँच" },
        { label: "यूरिन संग्रह", value: "24-घंटे, घर पर" },
        { label: "साथ लाएँ", value: "पूर्व इमेजिंग, स्टोन विश्लेषण" },
        { label: "फ़ॉलो-अप", value: "6 हफ़्ते, फिर 6-महीने" },
      ],
      faqs: [
        { question: "कभी-कभी ही होती है — क्या जाँच चाहिए?", answer: "दो या अधिक बार हुई हो तो हाँ।" },
        { question: "क्या सर्जरी चाहिए?", answer: "बहुत सी पथरी पानी और दर्द-निवारक से निकल जाती है।" },
        { question: "क्या सिर्फ़ पानी पीना है?", answer: "हाइड्रेशन सबसे बड़ा कारक है, पर मात्रा और समय पथरी के प्रकार पर निर्भर है।" },
      ],
    },
    or: {
      name: "Kidney stones",
      shortDescription: "Working out why the stones keep forming — and stopping them.",
      longDescription: [
        "Kidney stones are common in this region.",
        "Repeat stones usually have a treatable underlying cause we work up.",
      ],
      highlights: [
        "Acute stone evaluation and imaging",
        "24-hour urine stone-risk panel",
        "Stone composition analysis",
        "Diet and fluid plan",
        "Treatable causes addressed",
      ],
      quickFacts: [
        { label: "First visit", value: "Imaging + metabolic work-up planned" },
        { label: "Urine collection", value: "24-hour, at home" },
        { label: "Bring along", value: "Prior imaging, stone analysis if available" },
        { label: "Follow-up", value: "6 weeks for results, then 6-monthly" },
      ],
      faqs: [
        { question: "Need a work-up?", answer: "If 2+ stones, yes." },
        { question: "Surgery?", answer: "Many pass with hydration and pain control." },
        { question: "Just more water?", answer: "Hydration is biggest; amount depends on stone type." },
      ],
    },
  },
};
