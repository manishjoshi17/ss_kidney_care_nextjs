import type { Service } from "@/modules/services/core/types";

export const akiTreatment: Service = {
  slug: "acute-kidney-injury",
  icon: "lightning",
  category: "acute",
  heroImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Critical-care monitoring in the renal ICU at SS Kidney Care",
    hi: "एसएस किडनी केयर के रीनल आईसीयू में निगरानी",
    or: "Critical-care monitoring in the renal ICU at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Acute Kidney Injury (AKI) treatment",
      shortDescription: "Fast, focused care when kidneys fail suddenly.",
      longDescription: [
        "Acute kidney injury is a sudden drop in kidney function — often over hours or days. It can follow severe infection, dehydration, certain medications, or a drop in blood supply to the kidneys. Caught early, AKI is frequently reversible.",
        "At SS Kidney Care we are set up to admit, investigate and treat AKI around the clock. The renal ICU has continuous monitoring, in-house biochemistry and dedicated dialysis cover. The aim is the same in every case: find the cause, support the kidneys while they recover, and bring you home as soon as you are safe to leave.",
      ],
      highlights: [
        "24×7 nephrology admissions through the emergency line",
        "Renal ICU with continuous monitoring",
        "Same-day biochemistry, urine analysis and imaging",
        "Bedside hemodialysis and SLED (sustained low-efficiency dialysis)",
        "Electrolyte and fluid correction",
        "Drug-dose review for the patient's complete prescription",
      ],
      quickFacts: [
        { label: "Admission", value: "Direct from the 24×7 emergency line" },
        { label: "Average stay", value: "3–10 days, case-dependent" },
        { label: "Where", value: "Renal ICU, in-house lab" },
        { label: "Bring along", value: "All current medications and discharge summaries" },
      ],
      faqs: [
        { question: "How is AKI diagnosed?", answer: "A small rise in serum creatinine, a drop in urine output, or both. We confirm with a focused panel of blood and urine tests, and look for a cause — infection, dehydration, obstruction, drug effect, or low blood pressure." },
        { question: "Will I need dialysis?", answer: "Many AKI patients do not. Dialysis becomes necessary when fluid, potassium or acidosis cannot be safely corrected medically. If it is needed, it is usually short-term and stops once your kidneys recover." },
        { question: "Can AKI be reversed?", answer: "Often, yes — particularly when the cause is treated early. Some patients are left with mild chronic kidney disease afterwards, which we then manage in our CKD clinic." },
        { question: "What can I do at home to prevent AKI?", answer: "Keep hydrated in heat, avoid combinations of painkillers and antibiotics without a doctor's review, and tell us about every supplement and herbal remedy you take." },
      ],
    },
    hi: {
      name: "तीव्र किडनी विफलता (AKI) उपचार",
      shortDescription: "जब किडनी अचानक काम करना बंद कर दे — त्वरित, केंद्रित देखभाल।",
      longDescription: [
        "तीव्र किडनी विफलता घंटों या दिनों में किडनी की कार्यक्षमता में अचानक गिरावट है।",
        "हमारा रीनल आईसीयू 24×7 निगरानी, इन-हाउस बायोकेमिस्ट्री और समर्पित डायलिसिस कवर के साथ तैयार है।",
      ],
      highlights: [
        "इमरजेंसी लाइन से 24×7 भर्ती",
        "निरंतर निगरानी के साथ रीनल आईसीयू",
        "उसी दिन बायोकेमिस्ट्री और इमेजिंग",
        "बेडसाइड हेमोडायलिसिस और SLED",
        "इलेक्ट्रोलाइट और फ्लूइड सुधार",
        "पूरी दवा-सूची की समीक्षा",
      ],
      quickFacts: [
        { label: "भर्ती", value: "24×7 इमरजेंसी लाइन से सीधे" },
        { label: "औसत ठहराव", value: "3–10 दिन, मामले के अनुसार" },
        { label: "स्थान", value: "रीनल आईसीयू, इन-हाउस लैब" },
        { label: "साथ लाएँ", value: "सभी वर्तमान दवाएँ और डिस्चार्ज सारांश" },
      ],
      faqs: [
        { question: "AKI का निदान कैसे होता है?", answer: "क्रिएटिनिन में वृद्धि या यूरिन आउटपुट में कमी से।" },
        { question: "क्या डायलिसिस की ज़रूरत होगी?", answer: "अधिकांश को नहीं। ज़रूरत होने पर यह आम तौर पर अल्पकालिक है।" },
        { question: "क्या AKI ठीक हो सकती है?", answer: "अक्सर हाँ, जब कारण का समय पर इलाज हो।" },
        { question: "घर पर रोकथाम के लिए क्या करें?", answer: "हाइड्रेटेड रहें, बिना सलाह दवाएँ न मिलाएँ।" },
      ],
    },
    or: {
      name: "Acute Kidney Injury (AKI) treatment",
      shortDescription: "Fast, focused care when kidneys fail suddenly.",
      longDescription: [
        "Acute kidney injury is a sudden drop in kidney function, often over hours or days.",
        "Our renal ICU has continuous monitoring, in-house biochemistry, and dedicated dialysis cover.",
      ],
      highlights: [
        "24×7 nephrology admissions",
        "Renal ICU with continuous monitoring",
        "Same-day biochemistry and imaging",
        "Bedside hemodialysis and SLED",
        "Electrolyte and fluid correction",
        "Full prescription review",
      ],
      quickFacts: [
        { label: "Admission", value: "Direct from the 24×7 emergency line" },
        { label: "Average stay", value: "3–10 days, case-dependent" },
        { label: "Where", value: "Renal ICU, in-house lab" },
        { label: "Bring along", value: "All current medications and discharge summaries" },
      ],
      faqs: [
        { question: "Diagnosis?", answer: "Rise in creatinine or drop in urine output." },
        { question: "Will I need dialysis?", answer: "Often no — and when needed, usually short-term." },
        { question: "Can AKI be reversed?", answer: "Often, with early treatment." },
        { question: "Prevention at home?", answer: "Stay hydrated, avoid risky drug combinations." },
      ],
    },
  },
};
