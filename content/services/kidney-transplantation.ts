import type { Service } from "@/modules/services/core/types";

export const kidneyTransplantation: Service = {
  slug: "kidney-transplantation",
  icon: "shield-check",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Consultation on transplant workup at SS Kidney Care",
    hi: "एसएस किडनी केयर में ट्रांसप्लांट सलाह",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରରେ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ୱର୍କଅପ୍ ବିଷୟରେ ପରାମର୍ଶ",
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
      shortDescription: "प्री-ट्रांसप्लांट वर्कअप, दाता मूल्यांकन मार्गदर्शन, और दीर्घकालिक पोस्ट-ट्रांसप्लांट देखभाल।",
      longDescription: [
        "एक सफल किडनी प्रत्यारोपण सब कुछ बदल देता है — लेकिन इसके लिए सर्जरी से पहले एक सावधान, गहन वर्कअप, और बाद में जीवनभर की सुव्यवस्थित देखभाल चाहिए। प्रत्यारोपण सर्जरी ख़ुद एक पार्टनर ट्रांसप्लांट केंद्र पर की जाती है; सालों की तैयारी और फ़ॉलो-अप हमारे साथ होती है।",
        "प्री-ट्रांसप्लांट हम पूरा मेडिकल वर्कअप करते हैं: कार्डियक मूल्यांकन, संक्रमण स्क्रीनिंग, टीकाकरण अपडेट, डेंटल क्लीयरेंस, और ऊतक-टाइपिंग समन्वय। आपको और (यदि लागू हो तो) आपके जीवित दाता को हम दाता मूल्यांकन के हर क़दम पर साथ ले चलते हैं। पोस्ट-ट्रांसप्लांट आप इम्यूनोसप्रेशन प्रबंधन, संक्रमण की रोकथाम, किडनी-कार्यक्षमता की ट्रेंडिंग, और काम कर रहे ट्रांसप्लांट के साथ ज़िंदगी की रूटीन के लिए हमारे पास वापस आते हैं।",
      ],
      highlights: [
        "क्लिनिक पर पूरा प्री-ट्रांसप्लांट मेडिकल वर्कअप",
        "परिवार के लिए जीवित-दाता मूल्यांकन मार्गदर्शन",
        "पार्टनर ट्रांसप्लांट केंद्रों के साथ समन्वय",
        "पोस्ट-ट्रांसप्लांट इम्यूनोसप्रेशन प्रबंधन",
        "लंबे समय की संक्रमण और जटिलता निगरानी",
      ],
      quickFacts: [
        { label: "प्री-ट्रांसप्लांट समयरेखा", value: "वर्कअप आम तौर पर 6–12 हफ़्ते" },
        { label: "सर्जरी", value: "पार्टनर ट्रांसप्लांट केंद्र पर" },
        { label: "पोस्ट-ट्रांसप्लांट फ़ॉलो-अप", value: "1 महीना साप्ताहिक, फिर मासिक, फिर हर 3 महीने" },
        { label: "साथ लाएँ", value: "सभी मौजूदा रिपोर्ट, अगर पता हो तो दाता जानकारी" },
      ],
      faqs: [
        { question: "क्या मैं प्रत्यारोपण के लिए योग्य हूँ?", answer: "अधिकांश स्थिर CKD-स्टेज-5 मरीज़ योग्य होते हैं, पर यह आपके समग्र स्वास्थ्य, कार्डियक स्थिति और अन्य अवस्थाओं पर निर्भर है। वर्कअप का डिज़ाइन है सर्जरी से पहले कोई भी मुद्दा पकड़ना — और आपको व व आपके दाता को संभावनाओं की ईमानदार तस्वीर देना।" },
        { question: "सर्जरी कहाँ की जाती है?", answer: "हम साइट पर प्रत्यारोपण नहीं करते। प्री-ट्रांसप्लांट वर्कअप हमारे साथ होता है; सर्जरी ख़ुद एक पार्टनर ट्रांसप्लांट केंद्र पर जिसके साथ हम नज़दीकी समन्वय करते हैं। पोस्ट-ट्रांसप्लांट देखभाल वापस यहीं आती है।" },
        { question: "रिकवरी कैसी होती है?", answer: "अधिकांश ट्रांसप्लांट मरीज़ अस्पताल से 7–10 दिनों में निकल जाते हैं, 6–8 हफ़्तों में ऑफ़िस के काम पर लौटते हैं, और पहले कुछ महीनों के भीतर डायलिसिस की तुलना में अर्थपूर्ण रूप से बेहतर महसूस करते हैं। पहले साल में सावधान निगरानी ज़रूरी है; उसके बाद ज़िंदगी काफ़ी सामान्य लगती है — दवाएँ जारी रहती हैं।" },
      ],
    },
    or: {
      name: "କିଡନୀ ପ୍ରତିରୋପଣ",
      shortDescription: "ପ୍ରି-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ୱର୍କଅପ୍, ଦାତା ମୂଲ୍ୟାୟନ ମାର୍ଗଦର୍ଶନ, ଓ ଦୀର୍ଘକାଳୀନ ପୋଷ୍ଟ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଯତ୍ନ।",
      longDescription: [
        "ଏକ ସଫଳ କିଡନୀ ପ୍ରତିରୋପଣ ସବୁ କିଛି ବଦଳାଇଦିଏ — କିନ୍ତୁ ଏଥିପାଇଁ ସର୍ଜରୀ ପୂର୍ବରୁ ଏକ ସତର୍କ, ବିସ୍ତୃତ ୱର୍କଅପ୍, ଏବଂ ପରେ ଜୀବନଭର ସୁବ୍ୟବସ୍ଥିତ ଯତ୍ନ ଆବଶ୍ୟକ। ପ୍ରତିରୋପଣ ସର୍ଜରୀ ନିଜେ ଏକ ସହଭାଗୀ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ କେନ୍ଦ୍ରରେ କରାଯାଏ; ବର୍ଷ ବର୍ଷର ପ୍ରସ୍ତୁତି ଓ ଫଲୋ-ଅପ୍ ଆମ ସହ ହୁଏ।",
        "ପ୍ରି-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଆମେ ସମ୍ପୂର୍ଣ୍ଣ ମେଡିକାଲ୍ ୱର୍କଅପ୍ କରୁ: କାର୍ଡିଆକ୍ ମୂଲ୍ୟାୟନ, ସଂକ୍ରମଣ ସ୍କ୍ରିନିଂ, ଟୀକାକରଣ ଅଦ୍ୟତନ, ଡେଣ୍ଟାଲ୍ କ୍ଲିଅରେନ୍ସ, ଓ ଟିସୁ-ଟାଇପିଂ ସମନ୍ୱୟ। ଆମେ ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ଜୀବନ୍ତ ଦାତାଙ୍କୁ (ଯଦି ଲାଗୁ) ଦାତା ମୂଲ୍ୟାୟନର ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପରେ ସାଥିରେ ନେଇଯାଇଥାଉ। ପୋଷ୍ଟ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଆପଣ ଇମ୍ୟୁନୋସପ୍ରେସନ୍ ପରିଚାଳନା, ସଂକ୍ରମଣ ନିବାରଣ, କିଡନୀ-କାର୍ଯ୍ୟକ୍ଷମତା ଟ୍ରେଣ୍ଡିଂ, ଓ ସଫଳ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ସହ ଜୀବନ ରୁଟିନ ପାଇଁ ଆମ ପାଖକୁ ଫେରନ୍ତି।",
      ],
      highlights: [
        "କ୍ଲିନିକରେ ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରି-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ମେଡିକାଲ୍ ୱର୍କଅପ୍",
        "ପରିବାର ପାଇଁ ଜୀବନ୍ତ-ଦାତା ମୂଲ୍ୟାୟନ ମାର୍ଗଦର୍ଶନ",
        "ସହଭାଗୀ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ କେନ୍ଦ୍ର ସହ ସମନ୍ୱୟ",
        "ପୋଷ୍ଟ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଇମ୍ୟୁନୋସପ୍ରେସନ୍ ପରିଚାଳନା",
        "ଦୀର୍ଘକାଳୀନ ସଂକ୍ରମଣ ଓ ଜଟିଳତା ନିରୀକ୍ଷଣ",
      ],
      quickFacts: [
        { label: "ପ୍ରି-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ସମୟସୀମା", value: "ୱର୍କଅପ୍ ସାଧାରଣତଃ ୬–୧୨ ସପ୍ତାହ" },
        { label: "ସର୍ଜରୀ", value: "ସହଭାଗୀ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ କେନ୍ଦ୍ରରେ" },
        { label: "ପୋଷ୍ଟ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଫଲୋ-ଅପ୍", value: "୧ ମାସ ସାପ୍ତାହିକ, ତା'ପରେ ମାସିକ, ତା'ପରେ ୩-ମାସିକ" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "ସମସ୍ତ ବର୍ତ୍ତମାନର ରିପୋର୍ଟ, ଜଣାଥିଲେ ଦାତା ସୂଚନା" },
      ],
      faqs: [
        { question: "ମୁଁ କ'ଣ ପ୍ରତିରୋପଣ ପାଇଁ ଯୋଗ୍ୟ?", answer: "ଅଧିକାଂଶ ସ୍ଥିର CKD-ପର୍ଯ୍ୟାୟ-୫ ରୋଗୀ ଯୋଗ୍ୟ, କିନ୍ତୁ ଏହା ଆପଣଙ୍କ ସମଗ୍ର ସ୍ୱାସ୍ଥ୍ୟ, କାର୍ଡିଆକ୍ ସ୍ଥିତି ଓ ଅନ୍ୟ ଅବସ୍ଥା ଉପରେ ନିର୍ଭର କରେ। ୱର୍କଅପ୍ ସର୍ଜରୀ ପୂର୍ବରୁ କୌଣସି ସମସ୍ୟା ଚିହ୍ନଟ କରିବାକୁ ଡିଜାଇନ୍ ହୋଇଛି — ଏବଂ ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ଦାତାଙ୍କୁ ସମ୍ଭାବନାର ସତ୍ୟ ଚିତ୍ର ଦେବାକୁ।" },
        { question: "ସର୍ଜରୀ କେଉଁଠାରେ ହୁଏ?", answer: "ଆମେ ଆମ ଆଠାରେ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ କରୁ ନାହିଁ। ପ୍ରି-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ୱର୍କଅପ୍ ଆମ ସହ ହୁଏ; ସର୍ଜରୀ ନିଜେ ଏକ ସହଭାଗୀ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ କେନ୍ଦ୍ରରେ ଯାହା ସହ ଆମେ ନିକଟ ଭାବେ ସମନ୍ୱୟ କରୁ। ପୋଷ୍ଟ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଯତ୍ନ ଏଠାକୁ ଫେରେ।" },
        { question: "ରିକଭରୀ କିପରି?", answer: "ଅଧିକାଂଶ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ରୋଗୀ ୭–୧୦ ଦିନ ଭିତରେ ହସ୍ପିଟାଲରୁ ବାହାରନ୍ତି, ୬–୮ ସପ୍ତାହରେ ଅଫିସ୍ କାମକୁ ଫେରନ୍ତି, ଏବଂ ପ୍ରଥମ କିଛି ମାସ ଭିତରେ ଡାଇଲିସିସ୍ ସମୟ ତୁଳନାରେ ଅର୍ଥପୂର୍ଣ୍ଣ ଭଲ ଅନୁଭବ କରନ୍ତି। ପ୍ରଥମ ବର୍ଷ ସତର୍କ ନିରୀକ୍ଷଣ ଆବଶ୍ୟକ; ତା'ପରେ ଜୀବନ ଅନେକାଂଶରେ ସ୍ୱାଭାବିକ ଦେଖା ଯାଏ — ଔଷଧ ଚାଲୁ ରୁହେ।" },
      ],
    },
  },
};
