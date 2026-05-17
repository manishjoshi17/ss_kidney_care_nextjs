import type { Service } from "@/modules/services/core/types";

export const criticalCareNephrology: Service = {
  slug: "critical-care-nephrology",
  icon: "warning",
  category: "emergency",
  heroImage: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Renal ICU at SS Kidney Care",
    hi: "एसएस किडनी केयर का रीनल आईसीयू",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରର ରେନାଲ୍ ଆଇସିୟୁ",
  },
  i18n: {
    en: {
      name: "Critical care nephrology",
      shortDescription: "Renal-ICU care for patients whose kidneys have failed inside a bigger picture of illness.",
      longDescription: [
        "When kidney failure happens alongside severe infection, surgery, heart failure or multi-organ illness, the care has to be different. The kidney is one organ in a system that's struggling, and the dialysis prescription, fluid management and drug dosing all need to be tuned to the full picture.",
        "Our renal ICU runs continuous monitoring, in-house biochemistry, and a dialysis cover team that can deliver bedside hemodialysis or SLED (sustained low-efficiency dialysis) — the gentler form often used in ICU patients who cannot tolerate a standard four-hour run.",
      ],
      highlights: [
        "Renal ICU with continuous monitoring",
        "Bedside hemodialysis and SLED (gentler than standard)",
        "Multi-organ-aware drug dose review",
        "Direct admission from the 24×7 emergency line",
        "Daily family update built into the ICU routine",
      ],
      quickFacts: [
        { label: "Admission", value: "Direct from the 24×7 emergency line" },
        { label: "Modes available", value: "Hemodialysis, SLED, bedside as needed" },
        { label: "Average stay", value: "5–14 days, case-dependent" },
        { label: "Where", value: "Renal ICU, in-house lab" },
      ],
      faqs: [
        { question: "How is this different from regular dialysis?", answer: "In ICU, the patient is usually unstable — blood pressure can drop, fluid balance is delicate, and a standard four-hour dialysis run can be too aggressive. SLED runs slower over 8–10 hours and is gentler on the circulation; we choose the right mode for each patient, sometimes changing it across the stay." },
        { question: "Can family stay nearby?", answer: "Yes. The renal ICU has a dedicated waiting area and we schedule a daily update with whichever family member you nominate as the point of contact. You can also reach the duty nurse-in-charge directly through the front desk." },
        { question: "What happens after discharge?", answer: "We see you in OPD within a week of discharge. Many ICU-AKI patients go on to recover most of their kidney function; some need a few weeks of outpatient dialysis until the kidneys settle. We follow up either way." },
      ],
    },
    hi: {
      name: "क्रिटिकल केयर नेफ्रोलॉजी",
      shortDescription: "जब किडनी विफलता बीमारी की बड़ी तस्वीर के साथ आए — रीनल आईसीयू देखभाल।",
      longDescription: [
        "जब किडनी विफलता गंभीर संक्रमण, सर्जरी, हृदय विफलता या बहु-अंग बीमारी के साथ हो, तब देखभाल अलग होनी चाहिए। किडनी एक ऐसे तंत्र का अंग बन जाती है जो संघर्ष में है — और डायलिसिस का प्रिस्क्रिप्शन, फ्लूइड प्रबंधन और दवाओं की मात्रा सबको पूरी तस्वीर के अनुसार समायोजित करना होता है।",
        "हमारा रीनल आईसीयू निरंतर निगरानी, इन-हाउस बायोकेमिस्ट्री, और एक डायलिसिस-कवर टीम के साथ चलता है — जो बेडसाइड हेमोडायलिसिस या SLED (सस्टेन्ड लो-एफिशिएंसी डायलिसिस) कर सकती है — यह कोमल विधि उन ICU मरीज़ों के लिए है जो मानक चार-घंटे की डायलिसिस को सहन नहीं कर पाते।",
      ],
      highlights: [
        "निरंतर निगरानी वाला रीनल आईसीयू",
        "बेडसाइड हेमोडायलिसिस और SLED (मानक से अधिक कोमल)",
        "बहु-अंग संदर्भ में दवा-डोज़ की समीक्षा",
        "24×7 इमरजेंसी लाइन से सीधे भर्ती",
        "ICU रूटीन में शामिल — रोज़ाना परिवार-अपडेट",
      ],
      quickFacts: [
        { label: "भर्ती", value: "24×7 इमरजेंसी लाइन से सीधे" },
        { label: "उपलब्ध मोड", value: "हेमोडायलिसिस, SLED, ज़रूरत पर बेडसाइड" },
        { label: "औसत ठहराव", value: "5–14 दिन, मामले के अनुसार" },
        { label: "कहाँ", value: "रीनल आईसीयू, इन-हाउस लैब" },
      ],
      faqs: [
        { question: "यह नियमित डायलिसिस से कैसे अलग है?", answer: "ICU में मरीज़ आम तौर पर अस्थिर होता है — रक्तचाप गिर सकता है, फ्लूइड बैलेंस नाज़ुक होता है, और मानक चार-घंटे की डायलिसिस बहुत तीव्र हो सकती है। SLED 8–10 घंटे में धीरे चलती है और रक्त-संचार पर कोमल होती है; हम हर मरीज़ के लिए सही मोड चुनते हैं, कभी-कभी ठहराव के दौरान बदल भी देते हैं।" },
        { question: "क्या परिवार पास रह सकता है?", answer: "हाँ। रीनल आईसीयू में एक समर्पित प्रतीक्षा क्षेत्र है और जिस परिवार के सदस्य को आप संपर्क-व्यक्ति बनाएँगे, उन्हें हम रोज़ाना अपडेट देते हैं। आप फ्रंट डेस्क के माध्यम से ड्यूटी पर मौजूद इंचार्ज नर्स तक भी पहुँच सकते हैं।" },
        { question: "डिस्चार्ज के बाद क्या होता है?", answer: "हम आपको डिस्चार्ज के एक सप्ताह के भीतर OPD में देखते हैं। कई ICU-AKI मरीज़ अपनी अधिकांश किडनी कार्यक्षमता वापस पा लेते हैं; कुछ को किडनी स्थिर होने तक कुछ हफ़्तों की आउटपेशेंट डायलिसिस लगती है। किसी भी स्थिति में हम साथ रहते हैं।" },
      ],
    },
    or: {
      name: "କ୍ରିଟିକାଲ୍ କେୟାର ନେଫ୍ରୋଲୋଜି",
      shortDescription: "ଯେତେବେଳେ କିଡନୀ ବିଫଳତା ବୃହତ୍ତର ରୋଗ-ଚିତ୍ର ସହ ଆସେ — ରେନାଲ୍ ଆଇସିୟୁ ଯତ୍ନ।",
      longDescription: [
        "ଯେତେବେଳେ କିଡନୀ ବିଫଳତା ଗମ୍ଭୀର ସଂକ୍ରମଣ, ସର୍ଜରୀ, ହୃଦୟ ବିଫଳତା କିମ୍ବା ବହୁ-ଅଙ୍ଗ ରୋଗ ସହ ଆସେ, ସେତେବେଳେ ଯତ୍ନ ଭିନ୍ନ ହେବା ଆବଶ୍ୟକ। କିଡନୀ ଏକ ସଂଘର୍ଷରତ ତନ୍ତ୍ରର ଅଙ୍ଗ ହୋଇଯାଏ — ଡାଇଲିସିସ୍ ପ୍ରେସ୍କ୍ରିପ୍ସନ୍, ତରଳ ପରିଚାଳନା ଓ ଔଷଧ ମାତ୍ରା ସବୁ ସମଗ୍ର ଚିତ୍ର ଅନୁସାରେ ସମନ୍ୱୟ କରିବାକୁ ପଡ଼େ।",
        "ଆମ ରେନାଲ୍ ଆଇସିୟୁରେ ନିରନ୍ତର ନିରୀକ୍ଷଣ, ଭିତର ବାୟୋକେମିଷ୍ଟ୍ରୀ ଓ ଏକ ଡାଇଲିସିସ୍-କଭର ଟିମ୍ ରହିଛି — ଯିଏ ବେଡ୍‌ସାଇଡ୍ ହେମୋଡାଇଲିସିସ୍ କିମ୍ବା SLED (ସ୍ଥାୟୀ କମ୍-ଦକ୍ଷତା ଡାଇଲିସିସ୍) ଦେଇପାରେ — ଯାହା ସେହି ICU ରୋଗୀଙ୍କ ପାଇଁ କୋମଳ ବିକଳ୍ପ ଯିଏ ମାନକ ଚାରି-ଘଣ୍ଟା ଡାଇଲିସିସ୍ ସହ୍ୟ କରିପାରୁ ନାହାନ୍ତି।",
      ],
      highlights: [
        "ନିରନ୍ତର ନିରୀକ୍ଷଣ ସହ ରେନାଲ୍ ଆଇସିୟୁ",
        "ବେଡ୍‌ସାଇଡ୍ ହେମୋଡାଇଲିସିସ୍ ଓ SLED (ମାନକ ଠାରୁ କୋମଳ)",
        "ବହୁ-ଅଙ୍ଗ ସଚେତନ ଔଷଧ ମାତ୍ରା ସମୀକ୍ଷା",
        "୨୪×୭ ଜରୁରୀ ଲାଇନ୍ ମାଧ୍ୟମରେ ସିଧାସଳଖ ଭର୍ତ୍ତି",
        "ICU ରୁଟିନରେ ସାମିଲ୍ — ଦୈନିକ ପରିବାର ଅପଡେଟ୍",
      ],
      quickFacts: [
        { label: "ଭର୍ତ୍ତି", value: "୨୪×୭ ଜରୁରୀ ଲାଇନ୍ ମାଧ୍ୟମରେ ସିଧାସଳଖ" },
        { label: "ଉପଲବ୍ଧ ମୋଡ୍", value: "ହେମୋଡାଇଲିସିସ୍, SLED, ଆବଶ୍ୟକରେ ବେଡ୍‌ସାଇଡ୍" },
        { label: "ହାରାହାରି ରହିବା", value: "୫–୧୪ ଦିନ, କ୍ଷେତ୍ର ଅନୁସାରେ" },
        { label: "କେଉଁଠାରେ", value: "ରେନାଲ୍ ଆଇସିୟୁ, ଭିତର ଲ୍ୟାବ୍" },
      ],
      faqs: [
        { question: "ଏହା ସାଧାରଣ ଡାଇଲିସିସ୍ ଠାରୁ କିପରି ଭିନ୍ନ?", answer: "ICU ରେ ରୋଗୀ ସାଧାରଣତଃ ଅସ୍ଥିର — ରକ୍ତଚାପ ଖସିପାରେ, ତରଳ ସନ୍ତୁଳନ ସୂକ୍ଷ୍ମ, ଏବଂ ମାନକ ଚାରି-ଘଣ୍ଟା ଡାଇଲିସିସ୍ ବହୁତ ତୀବ୍ର ହୋଇପାରେ। SLED ୮–୧୦ ଘଣ୍ଟାରେ ଧୀରେ ଚାଲେ ଏବଂ ରକ୍ତ-ସଞ୍ଚାର ପ୍ରତି କୋମଳ; ଆମେ ପ୍ରତ୍ୟେକ ରୋଗୀଙ୍କ ପାଇଁ ସଠିକ୍ ମୋଡ୍ ବାଛୁ, କେତେବେଳେ ଭର୍ତ୍ତି ସମୟରେ ବି ବଦଳାଇଥାଉ।" },
        { question: "ପରିବାର ପାଖରେ ରହି ପାରିବେ କି?", answer: "ହଁ। ରେନାଲ୍ ଆଇସିୟୁରେ ଏକ ସମର୍ପିତ ଅପେକ୍ଷା ସ୍ଥାନ ରହିଛି ଏବଂ ଆପଣ ଯେଉଁ ପରିବାର ସଦସ୍ୟଙ୍କୁ ସମ୍ପର୍କ-ବ୍ୟକ୍ତି ବାଛନ୍ତି ତାଙ୍କୁ ଆମେ ଦୈନିକ ଅପଡେଟ୍ ଦେଉ। ଆପଣ ଫ୍ରଣ୍ଟ ଡେସ୍କ୍ ମାଧ୍ୟମରେ ଡ୍ୟୁଟି-ଇନ୍-ଚାର୍ଜ ନର୍ସଙ୍କୁ ସିଧାସଳଖ ଯୋଗାଯୋଗ କରିପାରନ୍ତି।" },
        { question: "ଡିସ୍‌ଚାର୍ଜ ପରେ କ'ଣ ହୁଏ?", answer: "ଡିସ୍‌ଚାର୍ଜ ପରେ ଏକ ସପ୍ତାହ ଭିତରେ ଆମେ ଆପଣଙ୍କୁ OPD ରେ ଦେଖୁ। ବହୁ ICU-AKI ରୋଗୀ ସେମାନଙ୍କ ଅଧିକାଂଶ କିଡନୀ କାର୍ଯ୍ୟକ୍ଷମତା ଫେରି ପାଇଯାନ୍ତି; କେତେକଙ୍କୁ କିଡନୀ ସ୍ଥିର ହେବା ପର୍ଯ୍ୟନ୍ତ କେତେ ସପ୍ତାହ ଆଉଟ୍‌ପେସେଣ୍ଟ୍ ଡାଇଲିସିସ୍ ଲାଗେ। ଯେକୌଣସି ସ୍ଥିତିରେ ଆମେ ସାଥିରେ ରହୁ।" },
      ],
    },
  },
};
