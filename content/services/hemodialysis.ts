import type { Service } from "@/modules/services/core/types";

export const hemodialysis: Service = {
  slug: "hemodialysis",
  icon: "drop",
  category: "dialysis",
  heroImage: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A hemodialysis machine on the dialysis floor at SS Kidney Care",
    hi: "एसएस किडनी केयर के डायलिसिस फ़्लोर पर हेमोडायलिसिस मशीन",
    or: "A hemodialysis machine on the dialysis floor at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Hemodialysis",
      shortDescription: "Cleaning your blood when your kidneys can't.",
      longDescription: [
        "Hemodialysis filters your blood outside the body, removing waste and excess fluid through a high-precision filter (the dialyzer) and returning the cleaned blood to you. For patients with end-stage kidney disease or severe AKI, it is the most established way to replace the work the kidneys can no longer do on their own.",
        "Our dialysis floor runs six modern machines, with separate areas for hepatitis-positive patients and full single-use dialyzers for every session. Most patients come in three times a week for around four hours — long enough that we have built the space around comfort: reclining chairs, screens, Wi-Fi, tea, and a senior dialysis nurse who knows you by name.",
      ],
      highlights: [
        "6 modern machines on a dedicated dialysis floor",
        "Hepatitis-isolated machines and protocols",
        "Single-use dialyzers, every session",
        "Vascular-access management — fistula, graft, catheter",
        "Online HDF available where clinically indicated",
        "Wi-Fi, screens, tea — because four hours is long",
      ],
      quickFacts: [
        { label: "Session length", value: "About 4 hours" },
        { label: "Typical frequency", value: "3 sessions a week" },
        { label: "Where", value: "Dedicated dialysis floor, 6 stations" },
        { label: "Bring along", value: "Recent reports, hep B/C status, current medications" },
      ],
      faqs: [
        { question: "How often will I need dialysis?", answer: "Most patients come three times a week for about four hours per session. Your nephrologist will set the prescription — duration, flow rates and fluid removal — based on your reports and how you feel between sessions." },
        { question: "Will I feel okay during the session?", answer: "Some patients feel tired toward the end, particularly if more fluid needs to be removed. Tell our nurses how you're feeling — they will adjust in real time. Cramping, low blood pressure or unusual symptoms are addressed immediately." },
        { question: "Can I eat during dialysis?", answer: "Yes — a light meal or snack is encouraged. We provide tea and biscuits; you can bring your own meal too. We share dietary guidance for both dialysis days and non-dialysis days." },
        { question: "What about vascular access?", answer: "An AV fistula is the preferred long-term access. If you need to start dialysis urgently, we can use a temporary catheter while a fistula matures. We work with vascular surgeons for placement and follow-up." },
      ],
    },
    hi: {
      name: "हेमोडायलिसिस",
      shortDescription: "जब आपकी किडनी रक्त शुद्ध नहीं कर पाती, तब उसका विकल्प।",
      longDescription: [
        "हेमोडायलिसिस आपके रक्त को शरीर के बाहर एक उच्च-परिशुद्धता फ़िल्टर (डायलाइज़र) से साफ़ करता है।",
        "अधिकांश मरीज़ हफ़्ते में तीन बार लगभग चार घंटे के लिए आते हैं। हमारा डायलिसिस फ़्लोर आराम के लिए बनाया गया है।",
      ],
      highlights: [
        "समर्पित डायलिसिस फ़्लोर पर 6 आधुनिक मशीनें",
        "हेपेटाइटिस के लिए अलग मशीनें और प्रोटोकॉल",
        "हर सत्र में नया डायलाइज़र",
        "वैस्कुलर एक्सेस प्रबंधन — फ़िस्टुला, ग्राफ़्ट, कैथेटर",
        "नैदानिक रूप से आवश्यक होने पर ऑनलाइन HDF",
        "वाई-फ़ाई, स्क्रीन, चाय — क्योंकि चार घंटे लंबे होते हैं",
      ],
      quickFacts: [
        { label: "सत्र की अवधि", value: "लगभग 4 घंटे" },
        { label: "आम तौर पर", value: "हफ़्ते में 3 सत्र" },
        { label: "स्थान", value: "समर्पित डायलिसिस फ़्लोर, 6 स्टेशन" },
        { label: "साथ लाएँ", value: "हाल की रिपोर्ट, हेप B/C स्थिति, दवाएँ" },
      ],
      faqs: [
        { question: "मुझे कितनी बार डायलिसिस की ज़रूरत होगी?", answer: "अधिकांश मरीज़ हफ़्ते में तीन बार लगभग चार घंटे के लिए आते हैं।" },
        { question: "क्या मैं सत्र के दौरान ठीक रहूँगा?", answer: "हम फ़्लूइड हटाने को आपके आराम के हिसाब से समायोजित कर सकते हैं।" },
        { question: "क्या मैं डायलिसिस के दौरान खा सकता हूँ?", answer: "हाँ — हल्का खाना या नाश्ता आपका स्वागत है।" },
        { question: "वैस्कुलर एक्सेस के बारे में?", answer: "लंबे समय के लिए AV फ़िस्टुला सबसे उपयुक्त है।" },
      ],
    },
    or: {
      name: "Hemodialysis",
      shortDescription: "Cleaning your blood when your kidneys can't.",
      longDescription: [
        "Hemodialysis filters your blood outside the body using a high-precision filter.",
        "Most patients come three times a week for sessions of about four hours.",
      ],
      highlights: [
        "6 modern machines on a dedicated dialysis floor",
        "Hepatitis-isolated machines and protocols",
        "Single-use dialyzers, every session",
        "Vascular-access management",
        "Online HDF when clinically indicated",
        "Wi-Fi, screens, tea",
      ],
      quickFacts: [
        { label: "Session length", value: "About 4 hours" },
        { label: "Typical frequency", value: "3 sessions a week" },
        { label: "Where", value: "Dedicated dialysis floor, 6 stations" },
        { label: "Bring along", value: "Recent reports, hep B/C status, current medications" },
      ],
      faqs: [
        { question: "How often will I need dialysis?", answer: "Most patients come three times a week." },
        { question: "Will I feel okay?", answer: "We adjust fluid removal to keep you comfortable." },
        { question: "Can I eat during dialysis?", answer: "Yes — a light meal is encouraged." },
        { question: "Vascular access?", answer: "AV fistula is preferred for long term." },
      ],
    },
  },
};
