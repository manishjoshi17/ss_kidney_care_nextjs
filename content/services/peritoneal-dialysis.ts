import type { Service } from "@/modules/services/core/types";

export const peritonealDialysis: Service = {
  slug: "peritoneal-dialysis",
  icon: "home",
  category: "dialysis",
  heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A patient and nurse going through peritoneal dialysis training",
    hi: "पेरिटोनियल डायलिसिस प्रशिक्षण के दौरान मरीज़ और नर्स",
    or: "A patient and nurse going through peritoneal dialysis training",
  },
  i18n: {
    en: {
      name: "Peritoneal dialysis (PD)",
      shortDescription: "Dialysis at home, on your own schedule.",
      longDescription: [
        "Peritoneal dialysis uses the lining of your abdomen — the peritoneum — as a natural filter. A soft catheter, placed in a short procedure, lets dialysis fluid flow in and out gently while you go about your day.",
        "Many patients prefer PD because it does not tether them to a centre three times a week. You can dialyse at home, at work, or while you sleep using an automated cycler. Most also retain more of their residual kidney function for longer.",
        "We train you and a family member at the hospital over about a week, then visit and check in until you are entirely confident on your own. The 24×7 nephrology line is always one call away.",
      ],
      highlights: [
        "Home-based — manual exchanges or overnight cycler",
        "Catheter placement and short hospital training",
        "Renal dietitian guidance",
        "Fewer dietary restrictions than hemodialysis for most patients",
        "Better preservation of residual kidney function",
      ],
      quickFacts: [
        { label: "Training", value: "About 1 week with our team" },
        { label: "At-home routine", value: "4 exchanges a day, or overnight cycler" },
        { label: "Each exchange", value: "About 30–40 minutes" },
        { label: "Follow-ups", value: "Weekly for the first month, then monthly" },
      ],
      faqs: [
        { question: "Is PD safe to do at home?", answer: "Yes — with training. Modern PD systems are designed to be safe in a clean room at home. We will teach you sterile technique, signs of infection, and the steps to take if anything looks off." },
        { question: "How long does an exchange take?", answer: "About 30–40 minutes for a manual exchange, four times a day. An overnight automated cycler does the exchanges while you sleep — so your days are mostly free." },
        { question: "What if there's an issue?", answer: "Our 24×7 nephrology line walks you through any problem. We see you weekly for the first month and then monthly. Catheter exit-site checks are part of every visit." },
        { question: "Can I travel on PD?", answer: "Yes. Supplies can be delivered to most cities, and we will help you plan around longer trips." },
      ],
    },
    hi: {
      name: "पेरिटोनियल डायलिसिस (PD)",
      shortDescription: "घर पर, अपने समय पर डायलिसिस।",
      longDescription: [
        "पेरिटोनियल डायलिसिस आपके पेट की झिल्ली (पेरिटोनियम) को प्राकृतिक फ़िल्टर के रूप में उपयोग करता है।",
        "बहुत से मरीज़ इसे पसंद करते हैं क्योंकि उन्हें हफ़्ते में तीन बार सेंटर नहीं आना पड़ता।",
        "हम आपको और एक परिवार के सदस्य को अस्पताल में लगभग एक हफ़्ते का प्रशिक्षण देते हैं, फिर घर पर भी सहयोग जारी रहता है।",
      ],
      highlights: [
        "घर पर — मैनुअल बदलाव या रात्रि साइकलर",
        "कैथेटर प्लेसमेंट और संक्षिप्त अस्पताल प्रशिक्षण",
        "रीनल डायटीशियन का मार्गदर्शन",
        "हेमोडायलिसिस से कम आहार प्रतिबंध",
        "अवशिष्ट किडनी कार्य का बेहतर संरक्षण",
      ],
      quickFacts: [
        { label: "प्रशिक्षण", value: "हमारी टीम के साथ लगभग 1 सप्ताह" },
        { label: "घर पर दिनचर्या", value: "दिन में 4 बार, या रात्रि साइकलर" },
        { label: "प्रत्येक बदलाव", value: "लगभग 30–40 मिनट" },
        { label: "फ़ॉलो-अप", value: "पहले महीने हर हफ़्ते, फिर मासिक" },
      ],
      faqs: [
        { question: "क्या PD घर पर सुरक्षित है?", answer: "हाँ — प्रशिक्षण के साथ।" },
        { question: "एक बदलाव में कितना समय लगता है?", answer: "मैनुअल बदलाव में लगभग 30–40 मिनट।" },
        { question: "अगर कोई समस्या हो?", answer: "हमारी 24×7 लाइन हर समस्या में मार्गदर्शन करती है।" },
        { question: "क्या PD पर यात्रा कर सकते हैं?", answer: "हाँ, बस पहले से योजना बनानी होती है।" },
      ],
    },
    or: {
      name: "Peritoneal dialysis (PD)",
      shortDescription: "Dialysis at home, on your own schedule.",
      longDescription: [
        "Peritoneal dialysis uses the lining of your abdomen as a natural filter.",
        "We train you and a family member at the hospital, then visit you at home until you are confident.",
      ],
      highlights: [
        "Home-based — manual or overnight cycler",
        "Catheter placement and short hospital training",
        "Renal dietitian guidance",
        "Fewer dietary restrictions for most patients",
        "Better preservation of residual kidney function",
      ],
      quickFacts: [
        { label: "Training", value: "About 1 week with our team" },
        { label: "At-home routine", value: "4 exchanges a day, or overnight cycler" },
        { label: "Each exchange", value: "About 30–40 minutes" },
        { label: "Follow-ups", value: "Weekly for the first month, then monthly" },
      ],
      faqs: [
        { question: "Is PD safe?", answer: "Yes, with training." },
        { question: "How long does each exchange take?", answer: "30–40 minutes, four times a day." },
        { question: "Support?", answer: "24×7 nephrology line." },
        { question: "Travel?", answer: "Yes, with some planning." },
      ],
    },
  },
};
