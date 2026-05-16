import type { Resource } from "@/modules/resources/core/types";

export const ckdDietBasics: Resource = {
  slug: "ckd-diet-basics",
  category: "diet",
  estimatedReadMinutes: 6,
  publishedDate: "2026-03-10",
  i18n: {
    en: {
      title: "Eating well with CKD",
      summary: "A practical, non-restrictive guide to diet for chronic kidney disease — by stage, not generic.",
      body: [
        "There is no single 'CKD diet'. Your plan depends on your stage, blood-work, and what's already on your plate every day.",
      ],
      sections: [
        { heading: "Sodium, in plain words", body: "Most of us eat too much salt — restaurant food, packaged snacks, and pickles add up. Aim for under 2,000 mg per day. We'll check your readings and tighten this only if needed." },
        { heading: "Potassium", body: "If your potassium runs high, your dietitian will help you cut down on bananas, coconut water, tomatoes, and certain dals. If it's normal, no need to restrict." },
        { heading: "Phosphorus", body: "Phosphorus rises in later stages. Limit processed foods, colas, and most packet snacks. Milk and dairy are nuanced — we'll guide you based on your levels." },
        { heading: "Protein", body: "Too little is as bad as too much. Your dietitian will calculate the right amount per kg of body weight — usually 0.6 to 0.8 g/kg in CKD stages 3–5, higher if you're on dialysis." },
      ],
    },
    hi: {
      title: "सीकेडी के साथ अच्छा खाना",
      summary: "क्रॉनिक किडनी रोग के लिए आहार पर एक व्यावहारिक मार्गदर्शिका।",
      body: ["कोई एकल 'सीकेडी आहार' नहीं है।"],
      sections: [
        { heading: "नमक", body: "अधिकांश लोग बहुत अधिक नमक खाते हैं।" },
        { heading: "पोटेशियम", body: "अगर पोटेशियम अधिक है तो डायटीशियन मार्गदर्शन देंगे।" },
        { heading: "फास्फोरस", body: "बाद के चरणों में फास्फोरस बढ़ता है।" },
        { heading: "प्रोटीन", body: "बहुत कम भी उतना ही ख़राब है जितना बहुत अधिक।" },
      ],
    },
    or: {
      title: "Eating well with CKD",
      summary: "A practical guide to diet by stage.",
      body: ["There is no single 'CKD diet'."],
      sections: [
        { heading: "Sodium", body: "Aim for under 2,000 mg per day." },
        { heading: "Potassium", body: "Restrict only if your levels run high." },
        { heading: "Phosphorus", body: "Limit processed foods in later stages." },
        { heading: "Protein", body: "Right amount per kg of body weight." },
      ],
    },
  },
};
