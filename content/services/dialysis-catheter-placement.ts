import type { Service } from "@/modules/services/core/types";

export const dialysisCatheterPlacement: Service = {
  slug: "dialysis-catheter-placement",
  icon: "first-aid",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Bedside catheter placement before urgent dialysis",
    hi: "तत्काल डायलिसिस से पहले बेडसाइड कैथेटर लगाना",
    or: "Bedside catheter placement before urgent dialysis",
  },
  i18n: {
    en: {
      name: "Dialysis catheter placement",
      shortDescription: "Short-term central catheter placement for urgent or new-start dialysis.",
      longDescription: [
        "A non-tunneled (short-term) dialysis catheter is used when dialysis is needed urgently — usually for AKI, severe electrolyte imbalance, or a new dialysis start while an AV fistula matures. The catheter is placed in a large vein (internal jugular, femoral, or rarely subclavian) under ultrasound guidance and is intended for short-term use, typically days to a few weeks.",
        "We place these at the bedside or in the procedure room, often the same day a patient presents. Once you no longer need it — either because your kidneys recover or your tunneled catheter / fistula is ready — we remove it.",
      ],
      highlights: [
        "Ultrasound-guided, bedside or procedure-room",
        "Internal jugular preferred (lowest infection rate)",
        "Same-day placement for urgent dialysis",
        "Daily review for line care and signs of infection",
        "Removed as soon as a definitive access is ready",
      ],
      quickFacts: [
        { label: "Anaesthetic", value: "Local" },
        { label: "Time in the room", value: "About 20–30 minutes" },
        { label: "Use duration", value: "Days to a few weeks" },
        { label: "Replaced by", value: "Tunneled catheter or AV fistula" },
      ],
      faqs: [
        { question: "Why a short-term and a long-term version?", answer: "Different jobs. Short-term catheters are quick to place when dialysis cannot wait — they're not designed for months of use because the infection risk rises over time. A tunneled catheter or fistula takes longer to set up but is much safer long-term." },
        { question: "Is the procedure done in the operation theatre?", answer: "Usually no — it is a bedside or procedure-room insertion under local anaesthetic and ultrasound. Most patients are dialyzed within an hour or two of the catheter being placed." },
        { question: "Can I move around with it?", answer: "Yes, with care. We position the line so it doesn't restrict you, and the nursing team checks the dressing every shift." },
      ],
    },
    hi: {
      name: "डायलिसिस कैथेटर लगाना",
      shortDescription: "तत्काल या नई-शुरुआत डायलिसिस के लिए अल्पकालिक केंद्रीय कैथेटर।",
      longDescription: [
        "गैर-टनलेड (अल्पकालिक) डायलिसिस कैथेटर का उपयोग तब किया जाता है जब डायलिसिस तुरंत चाहिए।",
        "हम इसे बेडसाइड पर या प्रक्रिया कक्ष में लगाते हैं।",
      ],
      highlights: [
        "अल्ट्रासाउंड-गाइडेड",
        "इंटरनल जुग्युलर पसंदीदा",
        "उसी दिन प्लेसमेंट",
        "रोज़ाना संक्रमण की निगरानी",
        "स्थायी एक्सेस तैयार होते ही हटाया जाता है",
      ],
      quickFacts: [
        { label: "एनेस्थीसिया", value: "लोकल" },
        { label: "समय", value: "20–30 मिनट" },
        { label: "उपयोग अवधि", value: "दिनों से कुछ हफ़्ते" },
        { label: "बदला जाता है", value: "टनलेड कैथेटर या फ़िस्टुला से" },
      ],
      faqs: [
        { question: "दो प्रकार क्यों?", answer: "अलग-अलग काम — अल्पकालिक तेज़ी से, स्थायी लंबे समय के लिए सुरक्षित।" },
        { question: "क्या OT में होता है?", answer: "आम तौर पर नहीं — बेडसाइड लोकल एनेस्थीसिया में।" },
        { question: "क्या चल-फिर सकते हैं?", answer: "हाँ, सावधानी से।" },
      ],
    },
    or: {
      name: "Dialysis catheter placement",
      shortDescription: "Short-term central catheter placement for urgent or new-start dialysis.",
      longDescription: [
        "A non-tunneled dialysis catheter is used when dialysis is needed urgently.",
        "Bedside or procedure-room insertion under ultrasound.",
      ],
      highlights: [
        "Ultrasound-guided",
        "Internal jugular preferred",
        "Same-day placement",
        "Daily line-care review",
        "Removed once definitive access ready",
      ],
      quickFacts: [
        { label: "Anaesthetic", value: "Local" },
        { label: "Time", value: "20–30 minutes" },
        { label: "Use duration", value: "Days to a few weeks" },
        { label: "Replaced by", value: "Tunneled catheter or AV fistula" },
      ],
      faqs: [
        { question: "Why two types?", answer: "Different jobs — short-term is fast, long-term is safer over time." },
        { question: "OT?", answer: "Usually bedside under local." },
        { question: "Mobility?", answer: "Yes, carefully." },
      ],
    },
  },
};
