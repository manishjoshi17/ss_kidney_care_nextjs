import type { Service } from "@/modules/services/core/types";

export const diabeticKidneyDisease: Service = {
  slug: "diabetic-kidney-disease",
  icon: "drop",
  category: "ckd",
  heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A clinician reviewing a patient's diabetes and kidney reports",
    hi: "डायबिटीज़ और किडनी रिपोर्ट की समीक्षा करते हुए चिकित्सक",
    or: "A clinician reviewing a patient's diabetes and kidney reports",
  },
  i18n: {
    en: {
      name: "Diabetic kidney disease",
      shortDescription: "Long-term diabetes silently damages the kidneys. We track and treat it before dialysis becomes necessary.",
      longDescription: [
        "Diabetic kidney disease is the single largest cause of dialysis in India. The kidney damage is silent for years — by the time you feel something, the disease is usually well-advanced.",
        "The good news: caught early, it's one of the most treatable causes of kidney disease. A urine albumin test, a yearly creatinine, and well-controlled sugar and BP can hold the disease in place for decades.",
        "Our clinic combines nephrology, an in-house dietitian, and (when useful) an endocrinology opinion — so the plan stays joined-up rather than handed off between specialists.",
      ],
      highlights: [
        "Annual urine albumin / creatinine screening",
        "Kidney-protective drug choice (SGLT2, ACEi / ARB)",
        "HbA1c-aware medication review at each visit",
        "Dietitian-led plate and snack planning",
        "Eye and foot review reminders within the visit",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Anyone diabetic for 5+ years, or diabetic with rising creatinine" },
        { label: "First test", value: "Urine albumin–creatinine ratio" },
        { label: "Visit frequency", value: "Every 3 months when stable" },
        { label: "Bring along", value: "HbA1c, fasting + post-meal sugars, BP log, medications list" },
      ],
      faqs: [
        { question: "I have diabetes but feel fine. Do I need this clinic?", answer: "If you've had diabetes for five years or more, yes. The earliest signs of diabetic kidney damage show on a urine albumin test long before you feel anything different." },
        { question: "Will I need to stop my diabetes medicine?", answer: "Usually not. We'll review whether your current regimen is kidney-friendly, and we may add or swap a medication (such as an SGLT2 inhibitor) that actively protects the kidneys." },
        { question: "Can the damage be reversed?", answer: "Early-stage damage often stabilises with tight sugar and BP control. Later stages can't be reversed, but with the right plan we can usually delay dialysis by years." },
      ],
    },
    hi: {
      name: "डायबेटिक किडनी रोग",
      shortDescription: "लंबे समय की डायबिटीज़ चुपके से किडनी को नुक़सान पहुँचाती है। डायलिसिस की ज़रूरत से पहले हम इसे ट्रैक और इलाज करते हैं।",
      longDescription: [
        "भारत में डायलिसिस का सबसे बड़ा कारण डायबेटिक किडनी रोग है।",
        "जल्दी पकड़ी जाए तो यह सबसे इलाज-योग्य कारणों में से एक है।",
      ],
      highlights: [
        "वार्षिक यूरिन एल्ब्यूमिन स्क्रीनिंग",
        "किडनी-सुरक्षात्मक दवा चयन (SGLT2, ACEi)",
        "HbA1c-आधारित दवा समीक्षा",
        "डायटीशियन की भोजन योजना",
        "आँख व पैर की जाँच के रिमाइंडर",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "5+ साल से डायबिटीज़ या क्रिएटिनिन बढ़ रहा हो" },
        { label: "पहली जाँच", value: "यूरिन एल्ब्यूमिन-क्रिएटिनिन अनुपात" },
        { label: "मुलाक़ात", value: "स्थिर रहने पर हर 3 महीने" },
        { label: "साथ लाएँ", value: "HbA1c, शुगर रिपोर्ट, BP लॉग, दवाएँ" },
      ],
      faqs: [
        { question: "मुझे ठीक लगता है — क्या यह क्लिनिक चाहिए?", answer: "5+ साल से डायबिटीज़ है तो हाँ। शुरुआती संकेत यूरिन में दिखते हैं।" },
        { question: "क्या दवाएँ बंद होंगी?", answer: "आम तौर पर नहीं। किडनी-सुरक्षात्मक दवा जोड़ी जा सकती है।" },
        { question: "क्या नुक़सान ठीक हो सकता है?", answer: "शुरुआती में स्थिर हो सकता है। डायलिसिस को सालों तक टाला जा सकता है।" },
      ],
    },
    or: {
      name: "Diabetic kidney disease",
      shortDescription: "Long-term diabetes silently damages the kidneys. We track and treat it before dialysis becomes necessary.",
      longDescription: [
        "Diabetic kidney disease is the single largest cause of dialysis in India.",
        "Caught early, it is one of the most treatable causes of kidney disease.",
      ],
      highlights: [
        "Annual urine albumin screening",
        "Kidney-protective drug choice (SGLT2, ACEi)",
        "HbA1c-aware review",
        "Dietitian-led planning",
        "Eye and foot review reminders",
      ],
      quickFacts: [
        { label: "Who it's for", value: "5+ years diabetic, or diabetic with rising creatinine" },
        { label: "First test", value: "Urine albumin–creatinine ratio" },
        { label: "Visit frequency", value: "Every 3 months" },
        { label: "Bring along", value: "HbA1c, sugars, BP log, medications" },
      ],
      faqs: [
        { question: "I feel fine. Do I need this?", answer: "If diabetic for 5+ years, yes." },
        { question: "Will medicines stop?", answer: "Usually not — kidney-protective ones may be added." },
        { question: "Reversible?", answer: "Early-stage often stabilises; later stages can be delayed by years." },
      ],
    },
  },
};
