import type { Service } from "@/modules/services/core/types";

export const preventiveKidneyHealth: Service = {
  slug: "preventive-kidney-health",
  icon: "shield-check",
  category: "preventive",
  heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A clinician explaining a kidney health screening report to a patient",
    hi: "एक चिकित्सक मरीज़ को किडनी स्क्रीनिंग रिपोर्ट समझाते हुए",
    or: "ରୋଗୀଙ୍କୁ କିଡନୀ-ସ୍ୱାସ୍ଥ୍ୟ ସ୍କ୍ରିନିଂ ରିପୋର୍ଟ ବୁଝାଉଥିବା ଚିକିତ୍ସକ",
  },
  i18n: {
    en: {
      name: "Preventive Kidney Health Programme",
      shortDescription: "Annual screening and lifestyle guidance for people at risk.",
      longDescription: [
        "Most kidney disease is silent in its early years. By the time symptoms appear, function is often already significantly reduced. The aim of our Preventive Kidney Health Programme is simple — catch problems early, when they are easiest to slow.",
        "If you have diabetes, high blood pressure, a family history of kidney disease, or are over 50, a once-a-year check makes sense. Our programme is a focused, low-cost annual review: a short consult, a kidney panel of blood and urine tests, and a clear conversation about what the numbers mean and what to watch.",
        "We also work with schools and community groups on awareness sessions on World Kidney Day each March.",
      ],
      highlights: [
        "Annual screening for high-risk groups",
        "Kidney function panel: serum creatinine, eGFR, urine ACR",
        "Blood-pressure and sugar review",
        "Written report with your nephrologist's notes",
        "Lifestyle and nutrition counselling",
        "School and community awareness sessions",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Diabetes, hypertension, family history, age 50+" },
        { label: "What's included", value: "Consult + kidney panel + written report" },
        { label: "Visit duration", value: "About 30 minutes" },
        { label: "How often", value: "Once a year" },
      ],
      faqs: [
        { question: "Why screen if I feel fine?", answer: "Early CKD has no symptoms. The kidney panel can identify damage years before it would show up clinically — when it is still possible to slow or stop." },
        { question: "I have no diabetes or hypertension. Should I still screen?", answer: "Routine screening of fully healthy adults isn't required. But a family history of kidney disease, or being over 50, is a reasonable reason to check annually." },
        { question: "Do you do community camps?", answer: "Yes. We run a few each year around World Kidney Day and on request from local groups." },
      ],
    },
    hi: {
      name: "निवारक किडनी स्वास्थ्य कार्यक्रम",
      shortDescription: "जोखिम वाले लोगों के लिए वार्षिक स्क्रीनिंग और जीवनशैली मार्गदर्शन।",
      longDescription: [
        "अधिकांश किडनी रोग अपने शुरुआती सालों में चुप रहते हैं। जब तक लक्षण सामने आते हैं, कार्यक्षमता पहले ही काफ़ी कम हो चुकी होती है। हमारे निवारक किडनी स्वास्थ्य कार्यक्रम का उद्देश्य सरल है — समस्याओं को जल्दी पकड़ना, जब उन्हें धीमा करना सबसे आसान है।",
        "अगर आपको डायबिटीज़, उच्च रक्तचाप, किडनी रोग का पारिवारिक इतिहास है, या आपकी उम्र 50 से ऊपर है — तो साल में एक बार जाँच समझदारी है। हमारा कार्यक्रम एक केंद्रित, किफ़ायती वार्षिक समीक्षा है: एक छोटा परामर्श, ब्लड और यूरिन की किडनी पैनल जाँचें, और इस बारे में स्पष्ट बातचीत कि संख्याओं का क्या मतलब है और क्या ध्यान रखना है।",
        "हम मार्च में हर साल विश्व किडनी दिवस पर स्कूलों और समुदाय समूहों के साथ जागरूकता सत्र भी करते हैं।",
      ],
      highlights: [
        "उच्च-जोखिम समूहों के लिए वार्षिक स्क्रीनिंग",
        "किडनी कार्य पैनल: सीरम क्रिएटिनिन, eGFR, यूरिन ACR",
        "रक्तचाप और शुगर समीक्षा",
        "आपके नेफ्रोलॉजिस्ट के नोट्स के साथ लिखित रिपोर्ट",
        "जीवनशैली और पोषण परामर्श",
        "स्कूल और समुदाय जागरूकता सत्र",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "डायबिटीज़, उच्च रक्तचाप, पारिवारिक इतिहास, उम्र 50+" },
        { label: "क्या शामिल है", value: "परामर्श + किडनी पैनल + लिखित रिपोर्ट" },
        { label: "मुलाक़ात की अवधि", value: "लगभग 30 मिनट" },
        { label: "कितनी बार", value: "साल में एक बार" },
      ],
      faqs: [
        { question: "अगर मुझे ठीक लग रहा है तो स्क्रीनिंग क्यों?", answer: "शुरुआती CKD के कोई लक्षण नहीं होते। किडनी पैनल नैदानिक रूप से प्रकट होने से सालों पहले नुक़सान की पहचान कर सकता है — जब इसे धीमा करना या रोकना अभी भी संभव है।" },
        { question: "मुझे न डायबिटीज़ है न उच्च रक्तचाप। क्या मुझे भी स्क्रीनिंग करवानी चाहिए?", answer: "पूरी तरह स्वस्थ वयस्कों की नियमित स्क्रीनिंग ज़रूरी नहीं। लेकिन किडनी रोग का पारिवारिक इतिहास हो, या आप 50 से ऊपर हों — तो साल में एक बार जाँच कराने का अच्छा कारण है।" },
        { question: "क्या आप समुदाय शिविर करते हैं?", answer: "हाँ। हम विश्व किडनी दिवस के आसपास हर साल कुछ शिविर करते हैं और स्थानीय समूहों के अनुरोध पर भी।" },
      ],
    },
    or: {
      name: "ନିବାରକ କିଡନୀ ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକ୍ରମ",
      shortDescription: "ବିପଦରେ ଥିବା ଲୋକଙ୍କ ପାଇଁ ବାର୍ଷିକ ସ୍କ୍ରିନିଂ ଓ ଜୀବନଶୈଳୀ ମାର୍ଗଦର୍ଶନ।",
      longDescription: [
        "ଅଧିକାଂଶ କିଡନୀ ରୋଗ ଆରମ୍ଭିକ ବର୍ଷଗୁଡ଼ିକରେ ନୀରବ ରୁହେ। ଯେତେବେଳକୁ ଲକ୍ଷଣ ଦେଖା ଯାଏ, କାର୍ଯ୍ୟକ୍ଷମତା ପ୍ରାୟତଃ ବେଶ୍ କମିଯାଇଥାଏ। ଆମ ନିବାରକ କିଡନୀ ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକ୍ରମର ଲକ୍ଷ୍ୟ ସରଳ — ସମସ୍ୟାକୁ ଶୀଘ୍ର ଚିହ୍ନଟ କରିବା, ଯେତେବେଳେ ତାହାକୁ ମନ୍ଥର କରିବା ସବୁଠାରୁ ସହଜ।",
        "ଯଦି ଆପଣଙ୍କୁ ଡାଇବେଟିସ୍, ଉଚ୍ଚ ରକ୍ତଚାପ, କିଡନୀ ରୋଗର ପାରିବାରିକ ଇତିହାସ ଅଛି, କିମ୍ବା ଆପଣ ୫୦ ବର୍ଷରୁ ଅଧିକ ବୟସର — ବର୍ଷକୁ ଥରେ ଯାଞ୍ଚ କରିବା ବୁଦ୍ଧିମାନୀ। ଆମ କାର୍ଯ୍ୟକ୍ରମ ଏକ କେନ୍ଦ୍ରୀଭୂତ, କମ୍-ଖର୍ଚ୍ଚ ବାର୍ଷିକ ସମୀକ୍ଷା: ଏକ ସଂକ୍ଷିପ୍ତ ପରାମର୍ଶ, ବ୍ଲଡ୍ ଓ ୟୁରିନର ଏକ କିଡନୀ ପ୍ୟାନେଲ୍ ପରୀକ୍ଷା, ଏବଂ ଏ ବିଷୟରେ ସ୍ପଷ୍ଟ ଆଲୋଚନା ଯେ ଆଙ୍କଗୁଡ଼ିକର ଅର୍ଥ କ'ଣ ଓ କ'ଣ ଲକ୍ଷ୍ୟ ରଖିବାକୁ ଅଛି।",
        "ଆମେ ମାର୍ଚ୍ଚ ମାସରେ ବିଶ୍ୱ କିଡନୀ ଦିବସ ସମୟରେ ସ୍କୁଲ ଓ ସମ୍ପ୍ରଦାୟ ଗୋଷ୍ଠୀ ସହ ସଚେତନତା ସେସନ୍ ବି କରୁ।",
      ],
      highlights: [
        "ଉଚ୍ଚ-ବିପଦ ଗୋଷ୍ଠୀ ପାଇଁ ବାର୍ଷିକ ସ୍କ୍ରିନିଂ",
        "କିଡନୀ କାର୍ଯ୍ୟ ପ୍ୟାନେଲ୍: ସିରମ୍ କ୍ରିଏଟିନିନ୍, eGFR, ୟୁରିନ୍ ACR",
        "ରକ୍ତଚାପ ଓ ସୁଗାର ସମୀକ୍ଷା",
        "ଆପଣଙ୍କ ନେଫ୍ରୋଲୋଜିଷ୍ଟଙ୍କ ଟିପ୍ପଣୀ ସହ ଲିଖିତ ରିପୋର୍ଟ",
        "ଜୀବନଶୈଳୀ ଓ ପୋଷଣ ପରାମର୍ଶ",
        "ସ୍କୁଲ ଓ ସମ୍ପ୍ରଦାୟ ସଚେତନତା ସେସନ୍",
      ],
      quickFacts: [
        { label: "କେଉଁମାନଙ୍କ ପାଇଁ", value: "ଡାଇବେଟିସ୍, ଉଚ୍ଚ ରକ୍ତଚାପ, ପାରିବାରିକ ଇତିହାସ, ବୟସ ୫୦+" },
        { label: "କ'ଣ ସାମିଲ୍", value: "ପରାମର୍ଶ + କିଡନୀ ପ୍ୟାନେଲ୍ + ଲିଖିତ ରିପୋର୍ଟ" },
        { label: "ସାକ୍ଷାତ ଅବଧି", value: "ପ୍ରାୟ ୩୦ ମିନିଟ୍" },
        { label: "କେତେ ଥର", value: "ବର୍ଷକୁ ଥରେ" },
      ],
      faqs: [
        { question: "ମୋତେ ଠିକ୍ ଲାଗୁଛି ତାହେଲେ ସ୍କ୍ରିନିଂ କାହିଁକି?", answer: "ଆରମ୍ଭିକ CKD ର କୌଣସି ଲକ୍ଷଣ ନଥାଏ। କିଡନୀ ପ୍ୟାନେଲ୍ କ୍ଷତିକୁ କ୍ଲିନିକାଲ୍ ଭାବେ ପ୍ରକାଶ ହେବାର ବର୍ଷ ବର୍ଷ ପୂର୍ବରୁ ଚିହ୍ନଟ କରିପାରେ — ଯେତେବେଳେ ଏହାକୁ ମନ୍ଥର କରିବା କିମ୍ବା ବନ୍ଦ କରିବା ଏବେ ସମ୍ଭବ।" },
        { question: "ମୋର ଡାଇବେଟିସ୍ କିମ୍ବା ଉଚ୍ଚ ରକ୍ତଚାପ ନାହିଁ। ତାହାହେଲେ କ'ଣ ସ୍କ୍ରିନିଂ କରିବି?", answer: "ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱସ୍ଥ ବୟସ୍କଙ୍କର ନିୟମିତ ସ୍କ୍ରିନିଂ ଆବଶ୍ୟକ ନୁହେଁ। କିନ୍ତୁ କିଡନୀ ରୋଗର ପାରିବାରିକ ଇତିହାସ, କିମ୍ବା ୫୦ ବର୍ଷରୁ ଅଧିକ ବୟସ ଥିଲେ ବାର୍ଷିକ ଯାଞ୍ଚ କରିବାର ଭଲ କାରଣ ଅଛି।" },
        { question: "ଆପଣ କ'ଣ ସମ୍ପ୍ରଦାୟ ଶିବିର କରନ୍ତି?", answer: "ହଁ। ଆମେ ବିଶ୍ୱ କିଡନୀ ଦିବସ ସମୟରେ ବର୍ଷକୁ କିଛି ଶିବିର କରୁ ଏବଂ ସ୍ଥାନୀୟ ଗୋଷ୍ଠୀଙ୍କ ଅନୁରୋଧରେ ମଧ୍ୟ।" },
      ],
    },
  },
};
