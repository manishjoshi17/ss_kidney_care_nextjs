import type { Service } from "@/modules/services/core/types";

export const preventiveKidneyHealth: Service = {
  slug: "preventive-kidney-health",
  icon: "shield-check",
  category: "preventive",
  heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A clinician explaining a kidney health screening report to a patient",
    hi: "एक चिकित्सक मरीज़ को किडनी स्क्रीनिंग रिपोर्ट समझाते हुए",
    or: "A clinician explaining a kidney health screening report to a patient",
  },
  i18n: {
    en: {
      name: "Preventive Kidney Health Programme",
      shortDescription: "Annual screening and lifestyle guidance for people at risk.",
      longDescription: [
        "Most kidney disease is silent in its early years. By the time symptoms appear, function is often already significantly reduced. The aim of our Preventive Kidney Health Programme is simple — catch problems early, when they are easiest to slow.",
        "If you have diabetes, high blood pressure, a family history of kidney disease, or are over 50, a once-a-year check makes sense. Our programme is a focused, low-cost annual review: a short consult, a kidney panel of blood and urine tests, and a clear conversation about what the numbers mean and what to watch.",
        "We also work with schools and community groups on awareness sessions on World Kidney Day each March.",
      ],
      highlights: [
        "Annual screening for high-risk groups",
        "Kidney function panel: serum creatinine, eGFR, urine ACR",
        "Blood-pressure and sugar review",
        "Written report with your nephrologist's notes",
        "Lifestyle and nutrition counselling",
        "School and community awareness sessions",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Diabetes, hypertension, family history, age 50+" },
        { label: "What's included", value: "Consult + kidney panel + written report" },
        { label: "Visit duration", value: "About 30 minutes" },
        { label: "How often", value: "Once a year" },
      ],
      faqs: [
        { question: "Why screen if I feel fine?", answer: "Early CKD has no symptoms. The kidney panel can identify damage years before it would show up clinically — when it is still possible to slow or stop." },
        { question: "I have no diabetes or hypertension. Should I still screen?", answer: "Routine screening of fully healthy adults isn't required. But a family history of kidney disease, or being over 50, is a reasonable reason to check annually." },
        { question: "Do you do community camps?", answer: "Yes. We run a few each year around World Kidney Day and on request from local groups." },
      ],
    },
    hi: {
      name: "निवारक किडनी स्वास्थ्य कार्यक्रम",
      shortDescription: "जोखिम वाले लोगों के लिए वार्षिक स्क्रीनिंग और जीवनशैली मार्गदर्शन।",
      longDescription: [
        "अधिकांश किडनी रोग शुरुआती वर्षों में लक्षणहीन होते हैं।",
        "अगर आपको डायबिटीज़, उच्च रक्तचाप, पारिवारिक इतिहास है, या आप 50 से ऊपर हैं तो वार्षिक जाँच ज़रूरी है।",
        "हम मार्च में विश्व किडनी दिवस पर स्कूलों और समुदायों के साथ जागरूकता सत्र भी करते हैं।",
      ],
      highlights: [
        "उच्च-जोखिम समूहों के लिए वार्षिक स्क्रीनिंग",
        "किडनी पैनल: क्रिएटिनिन, eGFR, यूरिन ACR",
        "रक्तचाप और शुगर समीक्षा",
        "नेफ्रोलॉजिस्ट के नोट्स के साथ लिखित रिपोर्ट",
        "जीवनशैली और पोषण परामर्श",
        "स्कूल और समुदाय जागरूकता सत्र",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "डायबिटीज़, उच्च रक्तचाप, पारिवारिक इतिहास, 50+" },
        { label: "क्या शामिल है", value: "परामर्श + किडनी पैनल + लिखित रिपोर्ट" },
        { label: "मुलाक़ात की अवधि", value: "लगभग 30 मिनट" },
        { label: "कितनी बार", value: "साल में एक बार" },
      ],
      faqs: [
        { question: "अगर ठीक महसूस हो रहा है तो स्क्रीनिंग क्यों?", answer: "शुरुआती CKD में लक्षण नहीं होते।" },
        { question: "क्या मुझे भी स्क्रीनिंग चाहिए?", answer: "पारिवारिक इतिहास या 50+ उम्र पर हाँ।" },
        { question: "क्या आप समुदाय शिविर करते हैं?", answer: "हाँ, साल में कुछ बार।" },
      ],
    },
    or: {
      name: "Preventive Kidney Health Programme",
      shortDescription: "Annual screening and lifestyle guidance for people at risk.",
      longDescription: [
        "Most kidney disease is silent in its early years.",
        "If you have diabetes, hypertension, family history, or are over 50, an annual check makes sense.",
      ],
      highlights: [
        "Annual screening for high-risk groups",
        "Kidney function panel: creatinine, eGFR, urine ACR",
        "Blood-pressure and sugar review",
        "Written report",
        "Lifestyle and nutrition counselling",
        "School and community awareness sessions",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Diabetes, hypertension, family history, 50+" },
        { label: "What's included", value: "Consult + kidney panel + report" },
        { label: "Visit duration", value: "About 30 minutes" },
        { label: "How often", value: "Once a year" },
      ],
      faqs: [
        { question: "Why screen if I feel fine?", answer: "Early CKD has no symptoms." },
        { question: "Do I need it?", answer: "Yes if you have risk factors." },
        { question: "Community camps?", answer: "Yes, a few each year." },
      ],
    },
  },
};
