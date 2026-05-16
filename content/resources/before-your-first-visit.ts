import type { Resource } from "@/modules/resources/core/types";

export const beforeYourFirstVisit: Resource = {
  slug: "before-your-first-visit",
  category: "prevention",
  estimatedReadMinutes: 4,
  publishedDate: "2026-02-12",
  i18n: {
    en: {
      title: "Before your first visit",
      summary: "What to bring, what to expect, and how to make the most of your time with the nephrologist.",
      body: [
        "Your first consultation sets the tone for everything that follows. We'd like you to leave with a clear sense of what's going on and what comes next.",
      ],
      sections: [
        {
          heading: "What to bring",
          body: "Any previous reports — blood tests, ultrasounds, biopsies, hospital discharge summaries. Even older ones can be useful. Bring a list of all medications you take, including supplements.",
        },
        {
          heading: "What to expect",
          body: "Allow about 45 minutes for the first consult. The nephrologist will read through your reports, examine you, and explain what they think is going on. We'll write down the plan so you can share it with family.",
        },
        {
          heading: "Bring someone if you can",
          body: "A second pair of ears helps. Many patients find it easier to remember what was said when a family member is in the room.",
        },
        {
          heading: "Questions are welcome",
          body: "If something isn't clear, ask. There are no bad questions — only ones we haven't yet answered.",
        },
      ],
    },
    hi: {
      title: "आपकी पहली विज़िट से पहले",
      summary: "क्या लाएँ, क्या उम्मीद करें, और नेफ्रोलॉजिस्ट के साथ अपने समय का अधिकतम उपयोग कैसे करें।",
      body: ["आपका पहला परामर्श आगे की हर चीज़ का आधार बनाता है।"],
      sections: [
        { heading: "क्या लाएँ", body: "पिछली कोई भी रिपोर्ट — रक्त परीक्षण, अल्ट्रासाउंड, बायोप्सी।" },
        { heading: "क्या उम्मीद करें", body: "पहले परामर्श के लिए लगभग 45 मिनट का समय रखें।" },
        { heading: "यदि संभव हो तो किसी को साथ लाएँ", body: "दूसरे कान सहायक होते हैं।" },
        { heading: "प्रश्न का स्वागत है", body: "अगर कुछ स्पष्ट नहीं है, तो पूछें।" },
      ],
    },
    or: {
      title: "Before your first visit",
      summary: "What to bring, what to expect.",
      body: ["Your first consultation sets the tone for everything that follows."],
      sections: [
        { heading: "What to bring", body: "Any previous reports and a list of current medications." },
        { heading: "What to expect", body: "Allow about 45 minutes for the first consult." },
        { heading: "Bring someone", body: "A second pair of ears helps." },
        { heading: "Questions", body: "There are no bad questions." },
      ],
    },
  },
};
