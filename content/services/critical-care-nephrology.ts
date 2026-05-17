import type { Service } from "@/modules/services/core/types";

export const criticalCareNephrology: Service = {
  slug: "critical-care-nephrology",
  icon: "warning",
  category: "emergency",
  heroImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Renal ICU at SS Kidney Care",
    hi: "एसएस किडनी केयर का रीनल आईसीयू",
    or: "Renal ICU at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Critical care nephrology",
      shortDescription: "Renal-ICU care for patients whose kidneys have failed inside a bigger picture of illness.",
      longDescription: [
        "When kidney failure happens alongside severe infection, surgery, heart failure or multi-organ illness, the care has to be different. The kidney is one organ in a system that's struggling, and the dialysis prescription, fluid management and drug dosing all need to be tuned to the full picture.",
        "Our renal ICU runs continuous monitoring, in-house biochemistry, and a dialysis cover team that can deliver bedside hemodialysis or SLED (sustained low-efficiency dialysis) — the gentler form often used in ICU patients who cannot tolerate a standard four-hour run.",
      ],
      highlights: [
        "Renal ICU with continuous monitoring",
        "Bedside hemodialysis and SLED (gentler than standard)",
        "Multi-organ-aware drug dose review",
        "Direct admission from the 24×7 emergency line",
        "Daily family update built into the ICU routine",
      ],
      quickFacts: [
        { label: "Admission", value: "Direct from the 24×7 emergency line" },
        { label: "Modes available", value: "Hemodialysis, SLED, bedside as needed" },
        { label: "Average stay", value: "5–14 days, case-dependent" },
        { label: "Where", value: "Renal ICU, in-house lab" },
      ],
      faqs: [
        { question: "How is this different from regular dialysis?", answer: "In ICU, the patient is usually unstable — blood pressure can drop, fluid balance is delicate, and a standard four-hour dialysis run can be too aggressive. SLED runs slower over 8–10 hours and is gentler on the circulation; we choose the right mode for each patient, sometimes changing it across the stay." },
        { question: "Can family stay nearby?", answer: "Yes. The renal ICU has a dedicated waiting area and we schedule a daily update with whichever family member you nominate as the point of contact. You can also reach the duty nurse-in-charge directly through the front desk." },
        { question: "What happens after discharge?", answer: "We see you in OPD within a week of discharge. Many ICU-AKI patients go on to recover most of their kidney function; some need a few weeks of outpatient dialysis until the kidneys settle. We follow up either way." },
      ],
    },
    hi: {
      name: "क्रिटिकल केयर नेफ्रोलॉजी",
      shortDescription: "जब किडनी विफलता बड़े-तस्वीर वाले रोग के साथ हो — रीनल आईसीयू देखभाल।",
      longDescription: [
        "जब किडनी विफलता गंभीर संक्रमण, सर्जरी या बहु-अंग रोग के साथ हो, देखभाल अलग होनी चाहिए।",
        "हमारा रीनल आईसीयू निरंतर निगरानी, बेडसाइड डायलिसिस और SLED करता है।",
      ],
      highlights: [
        "निरंतर निगरानी वाला रीनल आईसीयू",
        "बेडसाइड हेमोडायलिसिस और SLED",
        "बहु-अंग समीक्षा सहित दवा-डोज़ निरीक्षण",
        "24×7 इमरजेंसी लाइन से सीधे भर्ती",
        "रोज़ाना परिवार-अपडेट",
      ],
      quickFacts: [
        { label: "भर्ती", value: "24×7 इमरजेंसी लाइन से" },
        { label: "उपलब्ध मोड", value: "हेमोडायलिसिस, SLED, बेडसाइड" },
        { label: "औसत ठहराव", value: "5–14 दिन" },
        { label: "स्थान", value: "रीनल आईसीयू, इन-हाउस लैब" },
      ],
      faqs: [
        { question: "नियमित डायलिसिस से कैसे अलग?", answer: "ICU में SLED जैसी धीमी विधि कम-स्थिर रोगियों के लिए कोमल होती है।" },
        { question: "क्या परिवार पास रह सकता है?", answer: "हाँ, समर्पित प्रतीक्षा क्षेत्र और रोज़ाना अपडेट।" },
        { question: "डिस्चार्ज के बाद?", answer: "एक हफ़्ते में OPD फ़ॉलो-अप।" },
      ],
    },
    or: {
      name: "Critical care nephrology",
      shortDescription: "Renal-ICU care for patients whose kidneys have failed inside a bigger picture of illness.",
      longDescription: [
        "Renal-ICU care for kidney failure with severe infection, surgery, or multi-organ illness.",
        "Continuous monitoring, bedside hemodialysis and SLED available.",
      ],
      highlights: [
        "Renal ICU with continuous monitoring",
        "Bedside hemodialysis and SLED",
        "Multi-organ-aware dose review",
        "Direct admission from 24×7 line",
        "Daily family update",
      ],
      quickFacts: [
        { label: "Admission", value: "24×7 emergency line" },
        { label: "Modes available", value: "Hemodialysis, SLED, bedside" },
        { label: "Average stay", value: "5–14 days" },
        { label: "Where", value: "Renal ICU, in-house lab" },
      ],
      faqs: [
        { question: "How different from regular dialysis?", answer: "Gentler modes (SLED) for unstable ICU patients." },
        { question: "Can family stay nearby?", answer: "Yes, with daily updates." },
        { question: "After discharge?", answer: "OPD follow-up within a week." },
      ],
    },
  },
};
