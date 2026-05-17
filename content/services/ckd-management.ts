import type { Service } from "@/modules/services/core/types";

export const ckdManagement: Service = {
  slug: "ckd-management",
  icon: "stethoscope",
  category: "ckd",
  heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A consultant nephrologist reviewing patient reports at SS Kidney Care",
    hi: "एसएस किडनी केयर में मरीज़ की रिपोर्ट देखते हुए नेफ्रोलॉजिस्ट",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରରେ ରୋଗୀର ରିପୋର୍ଟ ସମୀକ୍ଷା କରୁଥିବା ନେଫ୍ରୋଲୋଜିଷ୍ଟ",
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
        "क्रॉनिक किडनी रोग किडनी की कार्यक्षमता का धीमा-धीमा नुक़सान है — अक्सर शुरुआती चरणों में बिना किसी लक्षण के। सावधान देखभाल से अधिकांश मरीज़ डायलिसिस की ज़रूरत आने से पहले सालों तक ठीक रह सकते हैं।",
        "एसएस किडनी केयर में हम CKD को स्टेज 1 से ही गंभीरता से लेते हैं। हर मुलाक़ात में आपकी रिपोर्ट की समीक्षा, रक्तचाप और शुगर का नियंत्रण, दवाओं का समायोजन, और आहार व रोज़मर्रा की आदतों पर बातचीत होती है। हम आपको बताएँगे कि हम क्या देख रहे हैं, क्या निगरानी में रख रहे हैं, और घर पर आप क्या कर सकते हैं।",
        "जहाँ उपयोगी हो, हम कार्डियोलॉजी, एंडोक्राइनोलॉजी और अपनी रीनल डायटीशियन से समन्वय करते हैं — ताकि योजना जुड़ी रहे, बँटी हुई नहीं।",
      ],
      highlights: [
        "CKD स्टेज 1 से 5 तक चरणबद्ध प्रबंधन",
        "हर जाँच परिणाम की सरल भाषा में व्याख्या",
        "इन-हाउस रीनल डायटीशियन के साथ रीनल-विशिष्ट आहार योजना",
        "रक्तचाप, शुगर और एनीमिया का प्रबंधन",
        "टीकाकरण और हड्डी-स्वास्थ्य की समीक्षा",
      ],
      quickFacts: [
        { label: "मुलाक़ात की आवृत्ति", value: "स्थिर रहने पर हर 3 महीने" },
        { label: "हर मुलाक़ात में", value: "रिपोर्ट की समीक्षा, योजना का समायोजन" },
        { label: "आहार", value: "हमारी रीनल डायटीशियन के साथ बनाया गया" },
        { label: "क्रॉस-टीम", value: "ज़रूरत पर कार्डियोलॉजी + एंडोक्राइनोलॉजी" },
      ],
      faqs: [
        { question: "क्या CKD ठीक हो सकती है?", answer: "कुछ कारणों का समाधान किया जा सकता है — उदाहरण के लिए, अच्छी तरह नियंत्रित रक्तचाप और शुगर शुरुआती CKD को अक्सर स्थिर कर देते हैं। स्थापित CKD वाले अधिकांश मरीज़ों के लिए लक्ष्य प्रगति को धीमा करना और जो किडनी कार्यक्षमता बची है उसकी रक्षा करना है। हम आपको ईमानदारी से बताएँगे कि क्या संभव है और क्या नहीं।" },
        { question: "मुझे कितनी बार आना होगा?", answer: "स्थिर मरीज़ों को हर तीन महीने में देखा जाता है। अगर आपके आँकड़े बदल रहे हैं या हम दवा समायोजित कर रहे हैं तो ज़्यादा बार।" },
        { question: "क्या मुझे सच में विशेष आहार की ज़रूरत है?", answer: "रीनल आहार सिर्फ़ रोक-टोक का नाम नहीं — यह आपके चरण और रक्त-जाँच के अनुरूप बनाया जाता है। हमारी डायटीशियन ऐसी योजना बनाती हैं जो आप वास्तव में निभा सकें, और जिनमें वही चीज़ें हों जो आप पहले से खाते हैं।" },
      ],
    },
    or: {
      name: "କ୍ରନିକ୍ କିଡନୀ ରୋଗ (CKD) ପରିଚାଳନା",
      shortDescription: "ସ୍ଥିର, ସମନ୍ୱିତ ଯତ୍ନରେ କିଡନୀ କ୍ଷୟକୁ ମନ୍ଥର କରିବା।",
      longDescription: [
        "କ୍ରନିକ୍ କିଡନୀ ରୋଗ ହେଉଛି କିଡନୀ କାର୍ଯ୍ୟକ୍ଷମତାର ଧୀର-ଧୀର କ୍ଷୟ — ପ୍ରାୟତଃ ଆରମ୍ଭିକ ପର୍ଯ୍ୟାୟରେ କୌଣସି ଲକ୍ଷଣ ବିନା। ସାବଧାନ ପରିଚାଳନା ସହ ଅଧିକାଂଶ ରୋଗୀ ଡାଇଲିସିସ୍ ଆବଶ୍ୟକ ହେବା ପୂର୍ବରୁ ବର୍ଷ ବର୍ଷ ଭଲ ରହି ପାରନ୍ତି।",
        "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରରେ ଆମେ CKD କୁ ପର୍ଯ୍ୟାୟ ୧ ରୁ ଗମ୍ଭୀରତାର ସହ ନେଉ। ପ୍ରତ୍ୟେକ ସାକ୍ଷାତରେ ଆପଣଙ୍କ ରିପୋର୍ଟର ସମୀକ୍ଷା, ରକ୍ତଚାପ ଓ ସୁଗାର ନିୟନ୍ତ୍ରଣ, ଔଷଧ ସମନ୍ୱୟ, ଏବଂ ଆହାର ଓ ଦୈନନ୍ଦିନ ଅଭ୍ୟାସ ଉପରେ ଆଲୋଚନା ହୁଏ। ଆମେ କ'ଣ ଦେଖୁଛୁ, କ'ଣ ନିରୀକ୍ଷଣ କରୁଛୁ, ଏବଂ ଆପଣ ଘରେ କ'ଣ କରିପାରିବେ — ସବୁ ବୁଝାଇଦେବୁ।",
        "ଯେଉଁଠି ଉପଯୋଗୀ ସେଠି ଆମେ କାର୍ଡିଓଲୋଜି, ଏଣ୍ଡୋକ୍ରାଇନୋଲୋଜି ଓ ଆମ ରେନାଲ୍ ଡାଇଟିସିଆନ୍‌ଙ୍କ ସହ ସମନ୍ୱୟ କରୁ — ଯାହାଦ୍ୱାରା ଯୋଜନା ଖଣ୍ଡ ଖଣ୍ଡ ନୋହି ଯୁକ୍ତ ରୁହେ।",
      ],
      highlights: [
        "CKD ପର୍ଯ୍ୟାୟ ୧ ରୁ ୫ ପର୍ଯ୍ୟନ୍ତ ପର୍ଯ୍ୟାୟବଦ୍ଧ ପରିଚାଳନା",
        "ପ୍ରତ୍ୟେକ ପରୀକ୍ଷା ଫଳର ସରଳ ଭାଷାରେ ବ୍ୟାଖ୍ୟା",
        "ଆମ ଭିତର ରେନାଲ୍ ଡାଇଟିସିଆନ୍‌ଙ୍କ ସହ ରେନାଲ୍-ବିଶିଷ୍ଟ ଆହାର ଯୋଜନା",
        "ରକ୍ତଚାପ, ସୁଗାର ଓ ଏନିମିଆ ପରିଚାଳନା",
        "ଟୀକାକରଣ ଓ ହାଡ଼-ସ୍ୱାସ୍ଥ୍ୟ ସମୀକ୍ଷା",
      ],
      quickFacts: [
        { label: "ସାକ୍ଷାତ ବାରଂବାରତା", value: "ସ୍ଥିର ଥିଲେ ପ୍ରତି ୩ ମାସ" },
        { label: "ପ୍ରତ୍ୟେକ ସାକ୍ଷାତରେ", value: "ରିପୋର୍ଟ ସମୀକ୍ଷା, ଯୋଜନା ସମନ୍ୱୟ" },
        { label: "ଆହାର", value: "ଆମ ରେନାଲ୍ ଡାଇଟିସିଆନ୍‌ଙ୍କ ସହ ତିଆରି" },
        { label: "କ୍ରସ୍-ଟିମ୍", value: "ଆବଶ୍ୟକରେ କାର୍ଡିଓଲୋଜି + ଏଣ୍ଡୋକ୍ରାଇନ୍" },
      ],
      faqs: [
        { question: "CKD ଭଲ ହୋଇ ପାରେ କି?", answer: "କେତେକ କାରଣର ସମାଧାନ ସମ୍ଭବ — ଯଥା ଭଲଭାବେ ନିୟନ୍ତ୍ରିତ ରକ୍ତଚାପ ଓ ସୁଗାର ପ୍ରାୟତଃ ଆରମ୍ଭିକ CKD କୁ ସ୍ଥିର କରିଦିଏ। ସ୍ଥାପିତ CKD ଥିବା ଅଧିକାଂଶ ରୋଗୀଙ୍କ ପାଇଁ ଲକ୍ଷ୍ୟ ହେଉଛି ପ୍ରଗତିକୁ ମନ୍ଥର କରିବା ଓ ଅବଶିଷ୍ଟ କିଡନୀ କାର୍ଯ୍ୟକ୍ଷମତାକୁ ସୁରକ୍ଷିତ ରଖିବା। ଆମେ କ'ଣ ସମ୍ଭବ ଓ କ'ଣ ସମ୍ଭବ ନୁହେଁ ସେ ବିଷୟରେ ଆପଣଙ୍କ ସହ ସତ୍ୟବାଦୀ ରହିବୁ।" },
        { question: "ମୋତେ କେତେ ଥର ଆସିବାକୁ ପଡ଼ିବ?", answer: "ସ୍ଥିର ରୋଗୀଙ୍କୁ ପ୍ରତି ତିନି ମାସରେ ଦେଖାଯାଏ। ଯଦି ଆପଣଙ୍କର ଆଙ୍କା-ବାଙ୍କା ଯାଉଛି କିମ୍ବା ଆମେ ଔଷଧ ସମନ୍ୱୟ କରୁଛୁ, ଅଧିକ ବାରଂବାର।" },
        { question: "ମୋତେ କ'ଣ ବିଶେଷ ଆହାର ଆବଶ୍ୟକ?", answer: "ରେନାଲ୍ ଆହାର ଶୁଦ୍ଧ ବନ୍ଦ କରିବାର ନାମ ନୁହେଁ — ଏହା ଆପଣଙ୍କ ପର୍ଯ୍ୟାୟ ଓ ବ୍ଲଡ୍-ଓ୍ୱାର୍କ ସହ ମେଳ ଖାଏ। ଆମ ଡାଇଟିସିଆନ୍ ଏକ ଯୋଜନା ତିଆରି କରନ୍ତି ଯାହାକୁ ଆପଣ ବାସ୍ତବରେ ପାଳନ କରିପାରିବେ, ଏବଂ ଯେଉଁଠାରେ ଆପଣ ଅଗରୁ ଖାଉଥିବା ଖାଦ୍ୟ ରହିବ।" },
      ],
    },
  },
};
