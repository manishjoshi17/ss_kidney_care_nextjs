import type { Service } from "@/modules/services/core/types";

export const diabeticKidneyDisease: Service = {
  slug: "diabetic-kidney-disease",
  icon: "drop",
  category: "ckd",
  heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A clinician reviewing a patient's diabetes and kidney reports",
    hi: "डायबिटीज़ और किडनी रिपोर्ट की समीक्षा करते हुए चिकित्सक",
    or: "ରୋଗୀଙ୍କ ଡାଇବେଟିସ୍ ଓ କିଡନୀ ରିପୋର୍ଟ ସମୀକ୍ଷା କରୁଥିବା ଚିକିତ୍ସକ",
  },
  i18n: {
    en: {
      name: "Diabetic kidney disease",
      shortDescription: "Long-term diabetes silently damages the kidneys. We track and treat it before dialysis becomes necessary.",
      longDescription: [
        "Diabetic kidney disease is the single largest cause of dialysis in India. The kidney damage is silent for years — by the time you feel something, the disease is usually well-advanced.",
        "The good news: caught early, it's one of the most treatable causes of kidney disease. A urine albumin test, a yearly creatinine, and well-controlled sugar and BP can hold the disease in place for decades.",
        "Our clinic combines nephrology, an in-house dietitian, and (when useful) an endocrinology opinion — so the plan stays joined-up rather than handed off between specialists.",
      ],
      highlights: [
        "Annual urine albumin / creatinine screening",
        "Kidney-protective drug choice (SGLT2, ACEi / ARB)",
        "HbA1c-aware medication review at each visit",
        "Dietitian-led plate and snack planning",
        "Eye and foot review reminders within the visit",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Anyone diabetic for 5+ years, or diabetic with rising creatinine" },
        { label: "First test", value: "Urine albumin–creatinine ratio" },
        { label: "Visit frequency", value: "Every 3 months when stable" },
        { label: "Bring along", value: "HbA1c, fasting + post-meal sugars, BP log, medications list" },
      ],
      faqs: [
        { question: "I have diabetes but feel fine. Do I need this clinic?", answer: "If you've had diabetes for five years or more, yes. The earliest signs of diabetic kidney damage show on a urine albumin test long before you feel anything different." },
        { question: "Will I need to stop my diabetes medicine?", answer: "Usually not. We'll review whether your current regimen is kidney-friendly, and we may add or swap a medication (such as an SGLT2 inhibitor) that actively protects the kidneys." },
        { question: "Can the damage be reversed?", answer: "Early-stage damage often stabilises with tight sugar and BP control. Later stages can't be reversed, but with the right plan we can usually delay dialysis by years." },
      ],
    },
    hi: {
      name: "डायबेटिक किडनी रोग",
      shortDescription: "लंबे समय की डायबिटीज़ चुपके से किडनी को नुक़सान पहुँचाती है। डायलिसिस की नौबत आने से पहले हम इसे ट्रैक और इलाज करते हैं।",
      longDescription: [
        "भारत में डायलिसिस का सबसे बड़ा एकल कारण डायबेटिक किडनी रोग है। यह नुक़सान सालों तक चुपचाप होता है — जब तक आपको कुछ महसूस होता है, बीमारी अक्सर अच्छी-ख़ासी आगे बढ़ चुकी होती है।",
        "अच्छी ख़बर: अगर जल्दी पकड़ी जाए तो यह किडनी रोग के सबसे इलाज-योग्य कारणों में से एक है। एक यूरिन एल्ब्यूमिन जाँच, साल में एक बार क्रिएटिनिन, और अच्छी तरह नियंत्रित शुगर व रक्तचाप — ये बीमारी को दशकों तक रोक सकते हैं।",
        "हमारा क्लिनिक नेफ्रोलॉजी, इन-हाउस डायटीशियन और (जहाँ उपयोगी हो) एंडोक्राइनोलॉजी राय को जोड़ता है — ताकि योजना विशेषज्ञों के बीच बँटी हुई न रहे, बल्कि एकसाथ चले।",
      ],
      highlights: [
        "वार्षिक यूरिन एल्ब्यूमिन / क्रिएटिनिन स्क्रीनिंग",
        "किडनी-सुरक्षात्मक दवा का चुनाव (SGLT2, ACEi / ARB)",
        "हर मुलाक़ात में HbA1c-आधारित दवा समीक्षा",
        "डायटीशियन द्वारा थाली और नाश्ते की योजना",
        "मुलाक़ात के भीतर आँख और पैर की जाँच के रिमाइंडर",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "5+ साल से डायबिटीज़, या डायबिटीज़ के साथ क्रिएटिनिन बढ़ रहा हो" },
        { label: "पहली जाँच", value: "यूरिन एल्ब्यूमिन–क्रिएटिनिन अनुपात" },
        { label: "मुलाक़ात की आवृत्ति", value: "स्थिर रहने पर हर 3 महीने" },
        { label: "साथ लाएँ", value: "HbA1c, ख़ाली पेट + भोजन के बाद की शुगर, BP लॉग, दवाओं की सूची" },
      ],
      faqs: [
        { question: "मुझे डायबिटीज़ है लेकिन ठीक महसूस होता है — क्या मुझे यह क्लिनिक चाहिए?", answer: "अगर आपको पाँच साल या ज़्यादा से डायबिटीज़ है, तो हाँ। डायबेटिक किडनी नुक़सान के सबसे शुरुआती संकेत यूरिन एल्ब्यूमिन जाँच में दिखते हैं — आपको कुछ अलग महसूस होने से बहुत पहले।" },
        { question: "क्या मुझे अपनी डायबिटीज़ की दवा बंद करनी होगी?", answer: "आम तौर पर नहीं। हम देखेंगे कि आपकी मौजूदा दवा-व्यवस्था किडनी के लिए अनुकूल है या नहीं, और हो सकता है हम कोई दवा (जैसे SGLT2 इन्हिबिटर) जोड़ें या बदलें जो किडनी की सक्रिय रूप से रक्षा करती हो।" },
        { question: "क्या नुक़सान वापस ठीक हो सकता है?", answer: "शुरुआती चरण का नुक़सान कड़े शुगर और BP नियंत्रण से अक्सर स्थिर हो जाता है। बाद के चरणों को पलटा नहीं जा सकता, लेकिन सही योजना से हम आम तौर पर डायलिसिस को सालों तक टाल देते हैं।" },
      ],
    },
    or: {
      name: "ଡାଇବେଟିକ୍ କିଡନୀ ରୋଗ",
      shortDescription: "ଦୀର୍ଘ ଡାଇବେଟିସ୍ ନୀରବେ କିଡନୀକୁ କ୍ଷତି ଦେଇଥାଏ। ଡାଇଲିସିସ୍ ଆବଶ୍ୟକ ହେବା ପୂର୍ବରୁ ଆମେ ଏହାକୁ ଚିହ୍ନଟ ଓ ଚିକିତ୍ସା କରୁ।",
      longDescription: [
        "ଭାରତରେ ଡାଇଲିସିସ୍‌ର ସବୁଠାରୁ ବଡ଼ ଏକକ କାରଣ ହେଉଛି ଡାଇବେଟିକ୍ କିଡନୀ ରୋଗ। ଏହି କ୍ଷତି ବର୍ଷ ବର୍ଷ ନୀରବ ରୁହେ — ଯେତେବେଳକୁ ଆପଣ କିଛି ଅନୁଭବ କରନ୍ତି, ରୋଗ ସାଧାରଣତଃ ବେଶ୍ ଆଗକୁ ବଢ଼ିଯାଇଥାଏ।",
        "ଭଲ ଖବର: ଆଗରୁ ଚିହ୍ନଟ ହେଲେ ଏହା କିଡନୀ ରୋଗର ସବୁଠାରୁ ଚିକିତ୍ସା-ଯୋଗ୍ୟ କାରଣ ମଧ୍ୟରୁ ଗୋଟିଏ। ଏକ ୟୁରିନ୍ ଏଲ୍‌ବ୍ୟୁମିନ୍ ପରୀକ୍ଷା, ବାର୍ଷିକ କ୍ରିଏଟିନିନ୍, ଏବଂ ଭଲଭାବେ ନିୟନ୍ତ୍ରିତ ସୁଗାର ଓ BP — ଏସବୁ ରୋଗକୁ ଦଶକ ଦଶକ ସ୍ଥିର ରଖି ପାରେ।",
        "ଆମ କ୍ଲିନିକ୍ ନେଫ୍ରୋଲୋଜି, ଭିତର ଡାଇଟିସିଆନ୍, ଏବଂ (ଯେଉଁଠି ଉପଯୋଗୀ) ଏଣ୍ଡୋକ୍ରାଇନୋଲୋଜି ମତାମତକୁ ଯୋଡ଼େ — ଯାହାଦ୍ୱାରା ଯୋଜନା ବିଶେଷଜ୍ଞଙ୍କ ମଧ୍ୟରେ ଖଣ୍ଡ ଖଣ୍ଡ ନୋହି, ଏକ ସୂତ୍ରରେ ରୁହେ।",
      ],
      highlights: [
        "ବାର୍ଷିକ ୟୁରିନ୍ ଏଲ୍‌ବ୍ୟୁମିନ୍ / କ୍ରିଏଟିନିନ୍ ସ୍କ୍ରିନିଂ",
        "କିଡନୀ-ସୁରକ୍ଷାକାରୀ ଔଷଧ ବାଛିବା (SGLT2, ACEi / ARB)",
        "ପ୍ରତ୍ୟେକ ସାକ୍ଷାତରେ HbA1c-ସଚେତନ ଔଷଧ ସମୀକ୍ଷା",
        "ଡାଇଟିସିଆନ୍-ନେତୃତ୍ୱାଧୀନ ଖାଦ୍ୟ ଓ ସ୍ନାକ୍ସ ଯୋଜନା",
        "ସାକ୍ଷାତ ଭିତରେ ଆଖି ଓ ପାଦ ପରୀକ୍ଷା ରିମାଇଣ୍ଡର୍",
      ],
      quickFacts: [
        { label: "କେଉଁମାନଙ୍କ ପାଇଁ", value: "୫+ ବର୍ଷ ଡାଇବେଟିସ୍, କିମ୍ବା ଡାଇବେଟିସ୍ ସହ କ୍ରିଏଟିନିନ୍ ବଢ଼ୁଛି" },
        { label: "ପ୍ରଥମ ପରୀକ୍ଷା", value: "ୟୁରିନ୍ ଏଲ୍‌ବ୍ୟୁମିନ୍–କ୍ରିଏଟିନିନ୍ ଅନୁପାତ" },
        { label: "ସାକ୍ଷାତ ବାରଂବାରତା", value: "ସ୍ଥିର ଥିଲେ ପ୍ରତି ୩ ମାସ" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "HbA1c, ଖାଲିପେଟ + ଖାଇବା ପରର ସୁଗାର, BP ଲଗ୍, ଔଷଧ ତାଲିକା" },
      ],
      faqs: [
        { question: "ମୋର ଡାଇବେଟିସ୍ ଅଛି କିନ୍ତୁ ଠିକ୍ ଲାଗୁଛି। ଏ କ୍ଲିନିକ୍ ଦରକାର କି?", answer: "ଯଦି ଆପଣଙ୍କୁ ପାଞ୍ଚ ବର୍ଷ କିମ୍ବା ଅଧିକ ଡାଇବେଟିସ୍ ହୋଇଛି, ତାହେଲେ ହଁ। ଡାଇବେଟିକ୍ କିଡନୀ କ୍ଷତିର ସବୁଠାରୁ ଆଗ ସଙ୍କେତ ୟୁରିନ୍ ଏଲ୍‌ବ୍ୟୁମିନ୍ ପରୀକ୍ଷାରେ ଦେଖା ଯାଏ — ଆପଣ କିଛି ଭିନ୍ନ ଅନୁଭବ କରିବାର ବହୁତ ପୂର୍ବରୁ।" },
        { question: "ମୋତେ କ'ଣ ମୋର ଡାଇବେଟିସ୍ ଔଷଧ ବନ୍ଦ କରିବାକୁ ପଡ଼ିବ?", answer: "ସାଧାରଣତଃ ନୁହେଁ। ଆମେ ଦେଖିବୁ ଯେ ଆପଣଙ୍କ ଚାଲୁଥିବା ଔଷଧ କିଡନୀ ପାଇଁ ଉପଯୁକ୍ତ କି ନୁହେଁ, ଏବଂ ସମ୍ଭବତଃ ଏକ ଔଷଧ (ଯଥା SGLT2 ଇନ୍ହିବିଟର୍) ଯୋଡ଼ିବୁ କିମ୍ବା ବଦଳାଇବୁ ଯିଏ କିଡନୀକୁ ସକ୍ରିୟ ଭାବେ ସୁରକ୍ଷା ଦିଏ।" },
        { question: "କ୍ଷତି ଫେରି ଠିକ୍ ହୋଇ ପାରେ କି?", answer: "ଆରମ୍ଭିକ ପର୍ଯ୍ୟାୟର କ୍ଷତି କଡ଼ା ସୁଗାର ଓ BP ନିୟନ୍ତ୍ରଣରେ ପ୍ରାୟତଃ ସ୍ଥିର ହୁଏ। ପରବର୍ତ୍ତୀ ପର୍ଯ୍ୟାୟ ଫେରାଇବା ସମ୍ଭବ ନୁହେଁ, କିନ୍ତୁ ଠିକ୍ ଯୋଜନା ସହ ଆମେ ସାଧାରଣତଃ ଡାଇଲିସିସ୍‌କୁ ବର୍ଷ ବର୍ଷ ବିଳମ୍ବିତ କରିପାରୁ।" },
      ],
    },
  },
};
