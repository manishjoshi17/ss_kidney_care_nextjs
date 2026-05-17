import type { Service } from "@/modules/services/core/types";

export const hypertensionRelatedKidneyCare: Service = {
  slug: "hypertension-related-kidney-care",
  icon: "heartbeat",
  category: "lifestyle",
  heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Checking blood pressure during a routine nephrology consultation",
    hi: "नियमित नेफ्रोलॉजी परामर्श में रक्तचाप जाँच",
    or: "ନିୟମିତ ନେଫ୍ରୋଲୋଜି ପରାମର୍ଶ ସମୟରେ ରକ୍ତଚାପ ଯାଞ୍ଚ",
  },
  i18n: {
    en: {
      name: "Hypertension-related kidney care",
      shortDescription: "Lowering the blood pressure that's quietly damaging your kidneys.",
      longDescription: [
        "High blood pressure is one of the two largest drivers of chronic kidney disease in India. The damage is gradual and silent — usually the first sign on the lab report is a faint trace of protein in urine, or a creatinine that's slowly drifted upward over a few years.",
        "Our hypertension-and-kidney clinic reviews your home BP log, your urine, your kidney function and the medications doing the work — every visit. We adjust your prescription to a kidney-protective combination wherever the evidence supports it (ACE inhibitors, ARBs, and now SGLT2 inhibitors).",
        "We will explain what the targets are, what to watch on a daily basis, and what we expect to see at the next visit.",
      ],
      highlights: [
        "Home blood-pressure monitoring guidance and protocol",
        "Kidney-protective prescription review (ACEi / ARB / SGLT2)",
        "Urine albumin / creatinine trended over time",
        "Plain-language explanation of every result",
        "Coordination with cardiology when needed",
      ],
      quickFacts: [
        { label: "Who it's for", value: "Hypertension with any urine albumin or rising creatinine" },
        { label: "Visit frequency", value: "Every 3 months when stable" },
        { label: "First visit duration", value: "About 45 minutes" },
        { label: "Bring along", value: "Home BP log, recent urine and blood reports" },
      ],
      faqs: [
        { question: "I take BP tablets — do I need a nephrologist?", answer: "If your urine has even a small amount of albumin, or your creatinine has crept up over the years, yes. Early nephrology input is the single biggest reason kidneys stay well in hypertension." },
        { question: "What's a good blood-pressure target?", answer: "For most patients with kidney involvement, under 130/80 mmHg, measured at home. We set your personal target based on your age and other conditions." },
        { question: "Will my tablets change?", answer: "Possibly. We aim for a kidney-protective combination — that often means an ACE inhibitor or ARB at the core. We will explain any change before it's made." },
      ],
    },
    hi: {
      name: "उच्च रक्तचाप-जनित किडनी देखभाल",
      shortDescription: "किडनी को चुपचाप नुक़सान पहुँचा रहे रक्तचाप को कम करना।",
      longDescription: [
        "उच्च रक्तचाप भारत में क्रॉनिक किडनी रोग के दो सबसे बड़े कारणों में से एक है। नुक़सान धीरे-धीरे और चुपचाप होता है — आम तौर पर लैब रिपोर्ट पर पहला संकेत यूरिन में प्रोटीन की हल्की मात्रा होती है, या कुछ सालों में धीरे-धीरे बढ़ता हुआ क्रिएटिनिन।",
        "हमारा हाइपरटेंशन-एंड-किडनी क्लिनिक हर मुलाक़ात पर आपका घरेलू BP लॉग, यूरिन, किडनी कार्यक्षमता और काम कर रही दवाओं की समीक्षा करता है। जहाँ साक्ष्य समर्थन करता है, हम आपकी दवा को किडनी-सुरक्षात्मक संयोजन में समायोजित करते हैं (ACE इन्हिबिटर्स, ARBs, और अब SGLT2 इन्हिबिटर्स)।",
        "हम बताएँगे लक्ष्य क्या हैं, रोज़ क्या देखना है, और अगली मुलाक़ात पर हम क्या उम्मीद करते हैं।",
      ],
      highlights: [
        "घर पर रक्तचाप माप का मार्गदर्शन और प्रोटोकॉल",
        "किडनी-सुरक्षात्मक दवा-समीक्षा (ACEi / ARB / SGLT2)",
        "समय के साथ यूरिन एल्ब्यूमिन / क्रिएटिनिन ट्रैकिंग",
        "हर परिणाम की सरल भाषा में व्याख्या",
        "ज़रूरत होने पर कार्डियोलॉजी समन्वय",
      ],
      quickFacts: [
        { label: "किनके लिए", value: "उच्च रक्तचाप के साथ कोई भी यूरिन एल्ब्यूमिन या बढ़ता क्रिएटिनिन" },
        { label: "मुलाक़ात की आवृत्ति", value: "स्थिर रहने पर हर 3 महीने" },
        { label: "पहली मुलाक़ात की अवधि", value: "लगभग 45 मिनट" },
        { label: "साथ लाएँ", value: "घर का BP लॉग, हाल की यूरिन और रक्त रिपोर्ट" },
      ],
      faqs: [
        { question: "मैं BP की गोली लेता हूँ — क्या मुझे नेफ्रोलॉजिस्ट चाहिए?", answer: "अगर आपके यूरिन में थोड़ी सी भी एल्ब्यूमिन है, या आपका क्रिएटिनिन सालों में धीरे-धीरे बढ़ा है — तो हाँ। उच्च रक्तचाप में किडनी स्वस्थ रहने का सबसे बड़ा एकल कारण है शुरुआती नेफ्रोलॉजी इनपुट।" },
        { question: "अच्छा रक्तचाप लक्ष्य क्या है?", answer: "किडनी-संबंधित अधिकांश मरीज़ों के लिए, घर पर मापे गए 130/80 mmHg से कम। आपकी उम्र और अन्य स्थितियों के आधार पर हम आपका व्यक्तिगत लक्ष्य तय करते हैं।" },
        { question: "क्या मेरी गोलियाँ बदलेंगी?", answer: "संभवतः। हम किडनी-सुरक्षात्मक संयोजन की ओर बढ़ते हैं — जिसमें अक्सर ACE इन्हिबिटर या ARB मूल में होता है। कोई भी बदलाव करने से पहले हम आपको समझाएँगे।" },
      ],
    },
    or: {
      name: "ଉଚ୍ଚ ରକ୍ତଚାପ-ଜନିତ କିଡନୀ ଯତ୍ନ",
      shortDescription: "ଆପଣଙ୍କ କିଡନୀକୁ ନୀରବେ କ୍ଷତି ଦେଉଥିବା ରକ୍ତଚାପକୁ ନିୟନ୍ତ୍ରଣ କରିବା।",
      longDescription: [
        "ଉଚ୍ଚ ରକ୍ତଚାପ ଭାରତରେ କ୍ରନିକ୍ କିଡନୀ ରୋଗର ଦୁଇଟି ସବୁଠାରୁ ବଡ଼ କାରଣ ମଧ୍ୟରେ ଗୋଟିଏ। କ୍ଷତି ଧୀର ଓ ନୀରବ — ସାଧାରଣତଃ ଲ୍ୟାବ୍ ରିପୋର୍ଟରେ ପ୍ରଥମ ସଙ୍କେତ ୟୁରିନ୍‌ରେ ପ୍ରୋଟିନର ସାମାନ୍ୟ ଚିହ୍ନ, କିମ୍ବା ବର୍ଷ କିଛିରେ ଧୀରେ ଧୀରେ ବଢ଼ିଯାଇଥିବା କ୍ରିଏଟିନିନ୍।",
        "ଆମ ହାଇପର୍‌ଟେନ୍‌ସନ୍-ଏବଂ-କିଡନୀ କ୍ଲିନିକ୍ ପ୍ରତ୍ୟେକ ସାକ୍ଷାତରେ ଆପଣଙ୍କ ଘର BP ଲଗ୍, ୟୁରିନ୍, କିଡନୀ କାର୍ଯ୍ୟକ୍ଷମତା ଓ କାମ କରୁଥିବା ଔଷଧର ସମୀକ୍ଷା କରେ। ଯେଉଁଠି ପ୍ରମାଣ ସମର୍ଥନ କରେ, ଆମେ ଆପଣଙ୍କ ପ୍ରେସ୍କ୍ରିପ୍ସନ୍‌କୁ କିଡନୀ-ସୁରକ୍ଷାକାରୀ ସଂଯୋଗରେ ସମନ୍ୱୟ କରୁ (ACE ଇନ୍ହିବିଟର୍, ARB, ଏବଂ ବର୍ତ୍ତମାନ SGLT2 ଇନ୍ହିବିଟର୍)।",
        "ଲକ୍ଷ୍ୟ କ'ଣ, ଦୈନନ୍ଦିନ କ'ଣ ଦେଖିବାକୁ ଅଛି, ଏବଂ ପରବର୍ତ୍ତୀ ସାକ୍ଷାତରେ ଆମେ କ'ଣ ଆଶା କରୁ — ସବୁ ବୁଝାଇଦେବୁ।",
      ],
      highlights: [
        "ଘର ରକ୍ତଚାପ ନିରୀକ୍ଷଣ ମାର୍ଗଦର୍ଶନ ଓ ପ୍ରୋଟୋକଲ୍",
        "କିଡନୀ-ସୁରକ୍ଷାକାରୀ ପ୍ରେସ୍କ୍ରିପ୍ସନ୍ ସମୀକ୍ଷା (ACEi / ARB / SGLT2)",
        "ସମୟ ସହ ୟୁରିନ୍ ଏଲ୍‌ବ୍ୟୁମିନ୍ / କ୍ରିଏଟିନିନ୍ ଟ୍ରେଣ୍ଡ୍",
        "ପ୍ରତ୍ୟେକ ଫଳର ସରଳ ଭାଷାରେ ବ୍ୟାଖ୍ୟା",
        "ଆବଶ୍ୟକରେ କାର୍ଡିଓଲୋଜି ସମନ୍ୱୟ",
      ],
      quickFacts: [
        { label: "କେଉଁମାନଙ୍କ ପାଇଁ", value: "ଯେକୌଣସି ୟୁରିନ୍ ଏଲ୍‌ବ୍ୟୁମିନ୍ କିମ୍ବା ବଢ଼ୁଥିବା କ୍ରିଏଟିନିନ୍ ସହ ଉଚ୍ଚ ରକ୍ତଚାପ" },
        { label: "ସାକ୍ଷାତ ବାରଂବାରତା", value: "ସ୍ଥିର ଥିଲେ ପ୍ରତି ୩ ମାସ" },
        { label: "ପ୍ରଥମ ସାକ୍ଷାତର ଅବଧି", value: "ପ୍ରାୟ ୪୫ ମିନିଟ୍" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "ଘର BP ଲଗ୍, ସମ୍ପ୍ରତି ୟୁରିନ୍ ଓ ବ୍ଲଡ୍ ରିପୋର୍ଟ" },
      ],
      faqs: [
        { question: "ମୁଁ BP ର ଟାବଲେଟ୍ ନେଉଛି — ମୋତେ ନେଫ୍ରୋଲୋଜିଷ୍ଟ ଦରକାର କି?", answer: "ଯଦି ଆପଣଙ୍କ ୟୁରିନ୍‌ରେ ସାମାନ୍ୟ ଏଲ୍‌ବ୍ୟୁମିନ୍ ବି ଅଛି, କିମ୍ବା ଆପଣଙ୍କ କ୍ରିଏଟିନିନ୍ ବର୍ଷଗୁଡ଼ିକରେ ଧୀରେ ଧୀରେ ବଢ଼ିଛି, ତାହେଲେ ହଁ। ଉଚ୍ଚ ରକ୍ତଚାପରେ କିଡନୀ ସୁସ୍ଥ ରଖିବାର ସବୁଠାରୁ ବଡ଼ ଏକକ କାରଣ ହେଉଛି ଆଗରୁ ନେଫ୍ରୋଲୋଜି ଇନ୍‌ପୁଟ୍।" },
        { question: "ଭଲ ରକ୍ତଚାପ ଲକ୍ଷ୍ୟ କ'ଣ?", answer: "କିଡନୀ-ସମ୍ବନ୍ଧୀୟ ଅଧିକାଂଶ ରୋଗୀଙ୍କ ପାଇଁ, ଘରେ ମପା ୧୩୦/୮୦ mmHg ରୁ କମ୍। ଆପଣଙ୍କ ବୟସ ଓ ଅନ୍ୟ ଅବସ୍ଥା ଅନୁସାରେ ଆମେ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ଲକ୍ଷ୍ୟ ସ୍ଥିର କରୁ।" },
        { question: "ମୋ ଟାବଲେଟ୍ ବଦଳିବ କି?", answer: "ସମ୍ଭବତଃ। ଆମେ କିଡନୀ-ସୁରକ୍ଷାକାରୀ ସଂଯୋଗ ଆଡ଼କୁ ଯାଉ — ଯାହାର କେନ୍ଦ୍ରରେ ପ୍ରାୟତଃ ACE ଇନ୍ହିବିଟର୍ କିମ୍ବା ARB ରୁହେ। କୌଣସି ବଦଳ କରିବା ପୂର୍ବରୁ ଆମେ ଆପଣଙ୍କୁ ବୁଝାଇଦେବୁ।" },
      ],
    },
  },
};
