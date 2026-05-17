import type { Service } from "@/modules/services/core/types";

export const kidneyTransplantation: Service = {
  slug: "kidney-transplantation",
  icon: "shield-check",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Consultation on transplant workup at SS Kidney Care",
    hi: "एसएस किडनी केयर में ट्रांसप्लांट सलाह",
    or: "Consultation on transplant workup at SS Kidney Care",
  },
  i18n: {
    en: {
      name: "Kidney transplantation",
      shortDescription: "Pre-transplant workup, donor evaluation guidance, and long-term post-transplant care.",
      longDescription: [
        "A successful kidney transplant changes everything — but it takes a careful, thorough workup before the surgery and lifelong, well-organised care after. The transplant surgery itself is performed at a partner transplant centre; the years of preparation and follow-up are done with us.",
        "Pre-transplant, we run the full medical workup: cardiac assessment, infection screening, vaccination updates, dental clearance, and tissue typing coordination. We also walk you and your living donor (if applicable) through the donor evaluation step-by-step. Post-transplant, you come back to us for immunosuppression management, infection prevention, kidney-function trending, and the routine of life on a working transplant.",
      ],
      highlights: [
        "Full pre-transplant medical workup at the clinic",
        "Living-donor evaluation guidance for the family",
        "Coordination with partner transplant centres",
        "Post-transplant immunosuppression management",
        "Long-term infection and complication watch",
      ],
      quickFacts: [
        { label: "Pre-transplant timeline", value: "Workup usually 6–12 weeks" },
        { label: "Surgery", value: "At partner transplant centre" },
        { label: "Post-transplant follow-up", value: "Weekly for 1 month, then monthly, then 3-monthly" },
        { label: "Bring along", value: "All current reports, donor info if known" },
      ],
      faqs: [
        { question: "Do I qualify for a transplant?", answer: "Most stable CKD-stage-5 patients qualify, but it depends on your overall health, cardiac status, and other conditions. The workup is designed to find any issue before surgery — and to give you and your donor an honest picture of the odds." },
        { question: "Where is the surgery done?", answer: "We don't perform transplants on-site. The pre-transplant workup is done with us; the surgery itself is at a partner transplant centre we coordinate with closely. Post-transplant care comes back here." },
        { question: "What's the recovery like?", answer: "Most transplant patients leave the hospital within 7–10 days, return to office work in 6–8 weeks, and feel meaningfully better than they did on dialysis within the first few months. The first year requires careful monitoring; after that, life looks largely normal — with medications continuing." },
      ],
    },
    hi: {
      name: "किडनी प्रत्यारोपण",
      shortDescription: "प्री-ट्रांसप्लांट जाँच, दाता मूल्यांकन मार्गदर्शन और दीर्घकालिक देखभाल।",
      longDescription: [
        "एक सफल किडनी प्रत्यारोपण सब कुछ बदल देता है — पर इसके लिए सावधानीपूर्वक तैयारी और जीवनभर की देखभाल चाहिए।",
        "सर्जरी पार्टनर ट्रांसप्लांट केंद्र में होती है; तैयारी और बाद की देखभाल हमारे साथ।",
      ],
      highlights: [
        "पूर्ण प्री-ट्रांसप्लांट मेडिकल वर्कअप",
        "जीवित-दाता मूल्यांकन मार्गदर्शन",
        "पार्टनर केंद्रों के साथ समन्वय",
        "इम्यूनोसप्रेशन प्रबंधन",
        "लंबे समय की निगरानी",
      ],
      quickFacts: [
        { label: "प्री-ट्रांसप्लांट", value: "6–12 हफ़्ते का वर्कअप" },
        { label: "सर्जरी", value: "पार्टनर केंद्र पर" },
        { label: "पोस्ट फ़ॉलो-अप", value: "1 महीना साप्ताहिक, फिर मासिक, फिर त्रैमासिक" },
        { label: "साथ लाएँ", value: "सभी रिपोर्ट, दाता जानकारी" },
      ],
      faqs: [
        { question: "क्या मैं योग्य हूँ?", answer: "अधिकांश स्थिर CKD-5 रोगी योग्य हैं; वर्कअप यह तय करता है।" },
        { question: "सर्जरी कहाँ?", answer: "पार्टनर ट्रांसप्लांट केंद्र पर।" },
        { question: "रिकवरी कैसी?", answer: "7–10 दिन में डिस्चार्ज, 6–8 हफ़्ते में काम पर।" },
      ],
    },
    or: {
      name: "Kidney transplantation",
      shortDescription: "Pre-transplant workup, donor evaluation guidance, and long-term post-transplant care.",
      longDescription: [
        "Pre-transplant workup and post-transplant care are done here.",
        "The surgery itself is at a partner transplant centre.",
      ],
      highlights: [
        "Full pre-transplant workup",
        "Living-donor evaluation guidance",
        "Coordination with partner transplant centres",
        "Post-transplant immunosuppression management",
        "Long-term infection watch",
      ],
      quickFacts: [
        { label: "Pre-transplant", value: "Workup 6–12 weeks" },
        { label: "Surgery", value: "Partner transplant centre" },
        { label: "Post-transplant follow-up", value: "Weekly for 1 month, then monthly, then 3-monthly" },
        { label: "Bring along", value: "All current reports, donor info" },
      ],
      faqs: [
        { question: "Do I qualify?", answer: "Most stable CKD-5 patients; workup confirms." },
        { question: "Where is surgery?", answer: "Partner transplant centre." },
        { question: "Recovery?", answer: "Discharge 7–10 days; office in 6–8 weeks." },
      ],
    },
  },
};
