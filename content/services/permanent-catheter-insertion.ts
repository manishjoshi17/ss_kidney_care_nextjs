import type { Service } from "@/modules/services/core/types";

export const permanentCatheterInsertion: Service = {
  slug: "permanent-catheter-insertion",
  icon: "plus-circle",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Procedural suite for dialysis access at SS Kidney Care",
    hi: "एसएस किडनी केयर का डायलिसिस एक्सेस प्रक्रिया कक्ष",
    or: "Procedural suite for dialysis access at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Permanent catheter insertion",
      shortDescription: "Tunneled catheter placement for patients who need reliable long-term dialysis access.",
      longDescription: [
        "A tunneled (permanent) catheter is a soft tube that lies under the skin and emerges at the chest, used for dialysis when an AV fistula is not yet ready or not possible. The catheter is designed for months-to-years of use, with a cuff that anchors it under the skin and reduces infection risk.",
        "We place these in our procedure room under local anaesthetic and ultrasound guidance. Most patients can use the catheter for dialysis on the same day. We see you for a wound check at one week, then again at four weeks, and we will train you and your family on how to care for the exit site at home.",
      ],
      highlights: [
        "Ultrasound-guided insertion, performed by the consultant",
        "Tunnel and cuff design — months-to-years of use",
        "Same-day dialysis where clinically appropriate",
        "Structured exit-site care training for the family",
        "1-week and 4-week wound reviews built in",
      ],
      quickFacts: [
        { label: "Anaesthetic", value: "Local + light sedation if needed" },
        { label: "Time in the room", value: "About 45 minutes" },
        { label: "Recovery", value: "Same-day discharge for most" },
        { label: "Replace every", value: "Months to years, depending on use" },
      ],
      faqs: [
        { question: "Is this the same as a temporary catheter?", answer: "No. A temporary catheter is used for a few days at most. A tunneled catheter is designed for long-term use — its tunnel and cuff make it much safer for extended dialysis." },
        { question: "Can I shower with it?", answer: "Yes, after the first two weeks of healing. We provide a waterproof cover and teach you and your family how to dry and dress the exit site." },
        { question: "Will it interfere with sleep?", answer: "Most patients adjust quickly. We position it on the side you prefer; the dressing is low-profile and the catheter clipped against the skin so it doesn't pull." },
      ],
    },
    hi: {
      name: "स्थायी कैथेटर लगाना",
      shortDescription: "जिन्हें लंबे समय तक भरोसेमंद डायलिसिस एक्सेस चाहिए — उनके लिए टनलेड कैथेटर।",
      longDescription: [
        "टनलेड कैथेटर एक नरम ट्यूब है जो त्वचा के नीचे चलकर सीने पर निकलती है।",
        "हम इसे लोकल एनेस्थीसिया और अल्ट्रासाउंड गाइडेंस में लगाते हैं।",
      ],
      highlights: [
        "अल्ट्रासाउंड-गाइडेड",
        "महीनों-सालों तक उपयोग",
        "उसी दिन डायलिसिस संभव",
        "परिवार को साइट देखभाल का प्रशिक्षण",
        "1 और 4 सप्ताह में जाँच",
      ],
      quickFacts: [
        { label: "एनेस्थीसिया", value: "लोकल + हल्की सिडेशन" },
        { label: "समय", value: "लगभग 45 मिनट" },
        { label: "रिकवरी", value: "अधिकांश के लिए उसी दिन डिस्चार्ज" },
        { label: "बदलाव", value: "उपयोग पर निर्भर, महीनों-सालों में" },
      ],
      faqs: [
        { question: "क्या यह अस्थायी कैथेटर जैसा है?", answer: "नहीं — टनलेड लंबे समय के लिए डिज़ाइन है।" },
        { question: "क्या नहा सकते हैं?", answer: "दो हफ़्ते बाद, वाटरप्रूफ कवर के साथ।" },
        { question: "क्या नींद में दिक़्क़त होगी?", answer: "अधिकांश जल्दी अभ्यस्त हो जाते हैं।" },
      ],
    },
    or: {
      name: "Permanent catheter insertion",
      shortDescription: "Tunneled catheter placement for patients who need reliable long-term dialysis access.",
      longDescription: [
        "A tunneled catheter is a soft tube under the skin used for dialysis.",
        "Placed under local anaesthetic and ultrasound guidance.",
      ],
      highlights: [
        "Ultrasound-guided insertion",
        "Months-to-years of use",
        "Same-day dialysis where appropriate",
        "Family exit-site care training",
        "1-week and 4-week reviews",
      ],
      quickFacts: [
        { label: "Anaesthetic", value: "Local + light sedation if needed" },
        { label: "Time", value: "About 45 minutes" },
        { label: "Recovery", value: "Same-day discharge for most" },
        { label: "Replace every", value: "Months to years" },
      ],
      faqs: [
        { question: "Same as temporary?", answer: "No — tunneled is for long-term." },
        { question: "Shower?", answer: "After two weeks of healing." },
        { question: "Sleep?", answer: "Most adjust quickly." },
      ],
    },
  },
};
