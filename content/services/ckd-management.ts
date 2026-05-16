import type { Service } from "@/modules/services/core/types";

export const ckdManagement: Service = {
  slug: "ckd-management",
  icon: "stethoscope",
  category: "ckd",
  heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A consultant nephrologist reviewing patient reports at SS Kidney Care",
    hi: "एसएस किडनी केयर में मरीज़ की रिपोर्ट देखते हुए नेफ्रोलॉजिस्ट",
    or: "A consultant nephrologist reviewing patient reports at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Chronic Kidney Disease (CKD) management",
      shortDescription: "Slowing kidney decline with steady, well-paced care.",
      longDescription: [
        "Chronic kidney disease is a slow loss of kidney function — often without symptoms in its earlier stages. With careful management, most patients can stay well for years before any need for dialysis.",
        "At SS Kidney Care we take CKD seriously from stage 1. Each visit involves a review of your reports, blood pressure and sugar control, medication adjustments, and a conversation about diet and daily habits. We will explain what we see, what we are watching, and what you can do at home.",
        "Where useful, we coordinate with cardiology, endocrinology, and our renal dietitian so the plan stays joined-up — not handed off.",
      ],
      highlights: [
        "Staged management from CKD 1 through CKD 5",
        "Plain-language explanation of every test result",
        "Renal-specific diet plans with our in-house dietitian",
        "Blood-pressure, sugar and anaemia management",
        "Vaccination and bone-health review",
      ],
      quickFacts: [
        { label: "Visit frequency", value: "Every 3 months when stable" },
        { label: "Each visit", value: "Reports reviewed, plan adjusted" },
        { label: "Diet", value: "Built with our renal dietitian" },
        { label: "Cross-team", value: "Cardiology + endocrinology when needed" },
      ],
      faqs: [
        { question: "Can CKD be reversed?", answer: "Some causes can be addressed — for example, well-controlled blood pressure and sugar will often stabilise early CKD. For most patients with established CKD, the goal is to slow progression and protect what kidney function remains. We will be honest with you about what is and isn't possible." },
        { question: "How often will I need to come in?", answer: "Stable patients are seen every three months. If your numbers are shifting or we are adjusting medication, we will see you more often." },
        { question: "Do I really need a special diet?", answer: "A renal diet is not about restriction for its own sake — it is matched to your stage and your blood-work. Our dietitian builds a plan you can actually follow, with foods you already eat." },
      ],
    },
    hi: {
      name: "क्रॉनिक किडनी रोग (CKD) प्रबंधन",
      shortDescription: "धीमी, लेकिन निरंतर देखभाल से किडनी की कार्यक्षमता को सुरक्षित रखना।",
      longDescription: [
        "क्रॉनिक किडनी रोग धीरे-धीरे किडनी की कार्यक्षमता को कम करता है — अक्सर शुरुआती चरणों में बिना लक्षण के।",
        "हर मुलाक़ात में हम आपकी रिपोर्ट देखते हैं, रक्तचाप और शुगर की जाँच करते हैं, और आहार व जीवनशैली पर बात करते हैं।",
        "ज़रूरत होने पर हम कार्डियोलॉजी, एंडोक्राइनोलॉजी और रीनल डायटीशियन से समन्वय करते हैं।",
      ],
      highlights: [
        "CKD स्टेज 1 से 5 तक चरणबद्ध प्रबंधन",
        "हर जाँच परिणाम की सरल भाषा में व्याख्या",
        "रीनल-विशिष्ट आहार योजना",
        "रक्तचाप, शुगर और एनीमिया प्रबंधन",
        "टीकाकरण और हड्डी स्वास्थ्य की समीक्षा",
      ],
      quickFacts: [
        { label: "मुलाक़ात की आवृत्ति", value: "स्थिर रहने पर हर 3 महीने" },
        { label: "हर मुलाक़ात में", value: "रिपोर्ट की समीक्षा, योजना समायोजन" },
        { label: "आहार", value: "हमारी रीनल डायटीशियन के साथ" },
        { label: "क्रॉस-टीम", value: "ज़रूरत पर कार्डियो + एंडोक्राइन" },
      ],
      faqs: [
        { question: "क्या CKD ठीक हो सकती है?", answer: "अधिकांश मरीज़ों के लिए लक्ष्य प्रगति को धीमा करना और शेष कार्यक्षमता की रक्षा करना है।" },
        { question: "मुझे कितनी बार आना होगा?", answer: "स्थिर मरीज़ों के लिए हर 3 महीने। अगर संख्याएँ बदल रही हैं तो अधिक बार।" },
        { question: "क्या मुझे विशेष आहार की ज़रूरत है?", answer: "हमारी डायटीशियन आपके चरण और रक्त-जाँच के अनुसार योजना बनाती हैं।" },
      ],
    },
    or: {
      name: "Chronic Kidney Disease (CKD) management",
      shortDescription: "Slowing kidney decline with steady, well-paced care.",
      longDescription: [
        "Chronic kidney disease is a slow loss of kidney function.",
        "We see you regularly, watch the trends, and explain each test.",
      ],
      highlights: [
        "Staged management from CKD 1 through CKD 5",
        "Plain-language explanation of every test result",
        "Renal-specific diet plans with our in-house dietitian",
        "Blood-pressure, sugar and anaemia management",
        "Vaccination and bone-health review",
      ],
      quickFacts: [
        { label: "Visit frequency", value: "Every 3 months when stable" },
        { label: "Each visit", value: "Reports reviewed, plan adjusted" },
        { label: "Diet", value: "Built with our renal dietitian" },
        { label: "Cross-team", value: "Cardiology + endocrinology when needed" },
      ],
      faqs: [
        { question: "Can CKD be reversed?", answer: "For most patients, the goal is to slow progression." },
        { question: "How often will I need to come in?", answer: "Every 3 months for stable patients." },
        { question: "Diet?", answer: "Matched to your stage and reports." },
      ],
    },
  },
};
