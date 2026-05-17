import type { Service } from "@/modules/services/core/types";

export const kidneyBiopsy: Service = {
  slug: "kidney-biopsy",
  icon: "test-tube",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Image-guided procedure suite at SS Kidney Care",
    hi: "एसएस किडनी केयर का इमेज-गाइडेड प्रक्रिया कक्ष",
    or: "Image-guided procedure suite at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Kidney biopsy",
      shortDescription: "A precise, image-guided sampling procedure used when blood and urine tests cannot fully explain what is wrong.",
      longDescription: [
        "A kidney biopsy is a thin needle sample of kidney tissue, taken under ultrasound guidance and sent to a renal pathologist. It is the gold standard for diagnosing glomerular disease, unexplained protein in urine, sudden drops in kidney function, and rejection in transplanted kidneys.",
        "The procedure is done under local anaesthetic, usually as a half-day stay. We discuss every step in advance — what to eat the morning of, which medicines to pause, what the recovery looks like, and what the report will say once it returns.",
      ],
      highlights: [
        "Ultrasound-guided, performed by the consultant nephrologist",
        "Renal-pathology reporting (light, immunofluorescence and electron microscopy as needed)",
        "Same-day discharge for most patients",
        "Written report explained in plain language at the follow-up visit",
        "Pre-biopsy review of medications (blood thinners paused as needed)",
      ],
      quickFacts: [
        { label: "Duration", value: "The biopsy itself takes about 20 minutes" },
        { label: "Anaesthetic", value: "Local (no general anaesthesia)" },
        { label: "Recovery", value: "About 4–6 hours observed, then home" },
        { label: "Report", value: "Usually within 7–10 days" },
      ],
      faqs: [
        { question: "Is it painful?", answer: "Most patients describe a brief pressure rather than pain. The local anaesthetic numbs the entry point; you'll feel the doctor working but should not feel sharp pain. Tell us at any point if you do." },
        { question: "What are the risks?", answer: "The main risks are bleeding (usually small and self-limiting) and very rarely the need for a transfusion. We screen your clotting status before the procedure and observe you afterwards." },
        { question: "When can I go back to work?", answer: "Most people resume light office work the next day. Heavy lifting and exercise are paused for a week so the biopsy site can heal cleanly." },
      ],
    },
    hi: {
      name: "किडनी बायोप्सी",
      shortDescription: "जब रक्त और यूरिन की जाँच पूरी कहानी न बताए — इमेज-गाइडेड सटीक नमूना।",
      longDescription: [
        "किडनी बायोप्सी अल्ट्रासाउंड गाइडेंस में लिया गया एक पतला सुई-नमूना है।",
        "स्थानीय एनेस्थीसिया में होती है, आम तौर पर आधे-दिन की अवस्था।",
      ],
      highlights: [
        "अल्ट्रासाउंड-गाइडेड, कंसल्टेंट द्वारा",
        "रीनल पैथोलॉजी रिपोर्टिंग",
        "अधिकांश के लिए उसी दिन डिस्चार्ज",
        "रिपोर्ट की सरल भाषा में व्याख्या",
        "दवा समीक्षा पहले से",
      ],
      quickFacts: [
        { label: "अवधि", value: "बायोप्सी लगभग 20 मिनट" },
        { label: "एनेस्थीसिया", value: "लोकल (जनरल नहीं)" },
        { label: "रिकवरी", value: "4–6 घंटे की निगरानी, फिर घर" },
        { label: "रिपोर्ट", value: "आम तौर पर 7–10 दिनों में" },
      ],
      faqs: [
        { question: "क्या दर्द होता है?", answer: "अधिकांश को दबाव लगता है, तेज़ दर्द नहीं।" },
        { question: "जोखिम क्या हैं?", answer: "मुख्य रूप से थोड़ा रक्तस्राव, कभी ट्रांसफ़्यूज़न की ज़रूरत।" },
        { question: "काम पर कब लौटूँ?", answer: "हल्का कार्य अगले दिन; भारी सामान एक सप्ताह बाद।" },
      ],
    },
    or: {
      name: "Kidney biopsy",
      shortDescription: "A precise, image-guided sampling procedure used when blood and urine tests cannot fully explain what is wrong.",
      longDescription: [
        "A kidney biopsy is a thin needle sample taken under ultrasound guidance.",
        "Local anaesthetic, usually a half-day stay.",
      ],
      highlights: [
        "Ultrasound-guided, by the consultant",
        "Renal pathology reporting",
        "Same-day discharge for most",
        "Report explained in plain language",
        "Pre-biopsy medication review",
      ],
      quickFacts: [
        { label: "Duration", value: "About 20 minutes" },
        { label: "Anaesthetic", value: "Local" },
        { label: "Recovery", value: "4–6 hours observed" },
        { label: "Report", value: "7–10 days" },
      ],
      faqs: [
        { question: "Is it painful?", answer: "Most feel pressure, not sharp pain." },
        { question: "Risks?", answer: "Mainly small bleeding; rarely a transfusion." },
        { question: "Back to work?", answer: "Light work next day; heavy lifting a week off." },
      ],
    },
  },
};
