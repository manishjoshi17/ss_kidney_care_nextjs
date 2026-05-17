import type { Service } from "@/modules/services/core/types";

export const kidneyStones: Service = {
  slug: "kidney-stones",
  icon: "warning",
  category: "acute",
  heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Ultrasound imaging of the kidneys at SS Kidney Care",
    hi: "एसएस किडनी केयर में किडनी का अल्ट्रासाउंड",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରରେ କିଡନୀର ଅଲଟ୍ରାସାଉଣ୍ଡ୍ ଇମେଜିଂ",
  },
  i18n: {
    en: {
      name: "Kidney stones",
      shortDescription: "Working out why the stones keep forming — and stopping them.",
      longDescription: [
        "Kidney stones are common in this region — but a stone that recurs is rarely random. Behind most repeat stones is a treatable underlying cause: low fluid intake, high salt or oxalate in the diet, undiagnosed metabolic abnormalities, or in some cases an issue with how the kidneys handle calcium.",
        "Our approach is two-track. First, we manage the immediate stone — pain control, imaging, and onward referral for urological intervention (lithotripsy, ureteroscopy) if needed. Second, we work up why the stones formed: a 24-hour urine collection, a stone composition analysis, and a metabolic panel guide a focused prevention plan you can actually follow.",
      ],
      highlights: [
        "Acute stone evaluation — pain, imaging, urology referral as needed",
        "24-hour urine stone-risk panel",
        "Stone composition analysis where the stone is retrieved",
        "Diet and fluid plan with our in-house dietitian",
        "Treatable causes addressed — hyperparathyroidism, hypercalciuria, citrate deficiency",
      ],
      quickFacts: [
        { label: "First visit", value: "Imaging review + metabolic work-up planned" },
        { label: "Urine collection", value: "24-hour, at home" },
        { label: "Bring along", value: "All prior imaging, stone analysis if available" },
        { label: "Follow-up", value: "6 weeks for results review, then 6-monthly" },
      ],
      faqs: [
        { question: "I only get stones occasionally. Do I need a work-up?", answer: "If you've had two or more stones, yes. The work-up is usually a urine collection and a blood panel — most patients get a clear answer about what's driving the stones and what to change at home." },
        { question: "Will I need surgery?", answer: "Many stones pass on their own with hydration and pain control. Larger or obstructing stones may need lithotripsy or ureteroscopy — we coordinate with a urologist for these and follow you through afterwards." },
        { question: "Is it really about drinking more water?", answer: "Hydration is the single biggest lever for most patients — but the right amount and timing differs by stone type. We'll set a target you can actually hit and check progress at follow-up." },
      ],
    },
    hi: {
      name: "किडनी की पथरी",
      shortDescription: "यह पता लगाना कि पथरी बार-बार क्यों बनती है — और उसे रोकना।",
      longDescription: [
        "इस क्षेत्र में किडनी की पथरी आम है — लेकिन बार-बार बनने वाली पथरी शायद ही कभी संयोग होती है। अधिकांश दोहराई जाने वाली पथरी के पीछे एक इलाज-योग्य कारण छिपा होता है: कम तरल पदार्थ का सेवन, आहार में अधिक नमक या ऑक्ज़लेट, अनदेखी मेटाबॉलिक असामान्यताएँ, या कुछ मामलों में किडनी के कैल्शियम संभालने के तरीक़े में दिक़्क़त।",
        "हमारा दृष्टिकोण दो-तरफ़ा है। पहला, हम तीव्र पथरी का प्रबंधन करते हैं — दर्द-नियंत्रण, इमेजिंग, और ज़रूरत होने पर यूरोलॉजिकल हस्तक्षेप (लिथोट्रिप्सी, यूरेटरोस्कोपी) के लिए आगे भेजना। दूसरा, हम पथरी क्यों बनी इसकी जाँच करते हैं: 24-घंटे यूरिन संग्रह, पथरी की संरचना का विश्लेषण, और मेटाबॉलिक पैनल — जो एक केंद्रित निवारक योजना बनाते हैं जिसे आप वास्तव में निभा सकें।",
      ],
      highlights: [
        "तीव्र पथरी मूल्यांकन — दर्द, इमेजिंग, ज़रूरत पर यूरोलॉजी रेफ़रल",
        "24-घंटे यूरिन स्टोन-रिस्क पैनल",
        "जहाँ पथरी मिले, उसकी कम्पोज़िशन का विश्लेषण",
        "इन-हाउस डायटीशियन के साथ आहार और पानी की योजना",
        "इलाज-योग्य कारणों का समाधान — हाइपरपैराथायरॉइडिज़्म, हाइपरकैल्श्यूरिया, साइट्रेट की कमी",
      ],
      quickFacts: [
        { label: "पहली मुलाक़ात", value: "इमेजिंग समीक्षा + मेटाबॉलिक वर्कअप योजना" },
        { label: "यूरिन संग्रह", value: "24-घंटे, घर पर" },
        { label: "साथ लाएँ", value: "सभी पिछली इमेजिंग, अगर उपलब्ध हो तो पथरी का विश्लेषण" },
        { label: "फ़ॉलो-अप", value: "6 हफ़्ते में परिणाम समीक्षा, फिर 6-महीने पर" },
      ],
      faqs: [
        { question: "मुझे कभी-कभी ही पथरी होती है। क्या वर्कअप ज़रूरी है?", answer: "अगर आपको दो या अधिक बार पथरी हुई है, तो हाँ। वर्कअप आम तौर पर एक यूरिन संग्रह और रक्त पैनल है — अधिकांश मरीज़ों को साफ़ जवाब मिल जाता है कि पथरी क्या बना रही है और घर पर क्या बदलना है।" },
        { question: "क्या मुझे सर्जरी की ज़रूरत होगी?", answer: "कई पथरियाँ हाइड्रेशन और दर्द-नियंत्रण से अपने आप निकल जाती हैं। बड़ी या रुकावट डालने वाली पथरियों के लिए लिथोट्रिप्सी या यूरेटरोस्कोपी की ज़रूरत हो सकती है — इनके लिए हम यूरोलॉजिस्ट से समन्वय करते हैं और बाद में आपका फ़ॉलो-अप जारी रखते हैं।" },
        { question: "क्या सच में सिर्फ़ ज़्यादा पानी पीना है?", answer: "अधिकांश मरीज़ों के लिए हाइड्रेशन सबसे बड़ा कारक है — लेकिन सही मात्रा और समय पथरी के प्रकार पर निर्भर करता है। हम एक ऐसा लक्ष्य तय करेंगे जो आप वास्तव में हासिल कर सकें, और फ़ॉलो-अप पर प्रगति देखेंगे।" },
      ],
    },
    or: {
      name: "କିଡନୀ ପଥରୀ",
      shortDescription: "ପଥରୀ କାହିଁକି ବାରଂବାର ତିଆରି ହେଉଛି ତାହା ବାହାର କରିବା — ଏବଂ ତାହାକୁ ବନ୍ଦ କରିବା।",
      longDescription: [
        "ଏ ଅଞ୍ଚଳରେ କିଡନୀ ପଥରୀ ସାଧାରଣ — କିନ୍ତୁ ବାରଂବାର ତିଆରି ହେଉଥିବା ପଥରୀ କ୍ୱଚିତ୍ ଆକସ୍ମିକ। ଅଧିକାଂଶ ପୁନରାବୃତ୍ତ ପଥରୀ ପଛରେ ଏକ ଚିକିତ୍ସା-ଯୋଗ୍ୟ କାରଣ ଅଛି: କମ୍ ତରଳ ସେବନ, ଆହାରରେ ଅଧିକ ଲୁଣ କିମ୍ବା ଅକ୍ଜାଲେଟ୍, ଚିହ୍ନଟ ନ ହୋଇଥିବା ମେଟାବୋଲିକ୍ ଅସ୍ୱାଭାବିକତା, କିମ୍ବା କେତେକ କ୍ଷେତ୍ରରେ କିଡନୀ କିପରି କ୍ୟାଲସିୟମ୍ ସମ୍ଭାଳେ ତାହାରେ ସମସ୍ୟା।",
        "ଆମ ଦୃଷ୍ଟିକୋଣ ଦୁଇ-ଟ୍ରାକ୍। ପ୍ରଥମେ, ଆମେ ତୁରନ୍ତ ପଥରୀର ପରିଚାଳନା କରୁ — ଯନ୍ତ୍ରଣା ନିୟନ୍ତ୍ରଣ, ଇମେଜିଂ, ଏବଂ ଆବଶ୍ୟକରେ ୟୁରୋଲୋଜିକାଲ୍ ହସ୍ତକ୍ଷେପ (ଲିଥୋଟ୍ରିପ୍ସି, ୟୁରେଟେରୋସ୍କୋପି) ପାଇଁ ଆଗକୁ ରେଫର୍। ଦ୍ୱିତୀୟ, ପଥରୀ କାହିଁକି ତିଆରି ହେଲା ତାହାର ୱର୍କଅପ୍ କରୁ: ୨୪-ଘଣ୍ଟା ୟୁରିନ୍ ସଂଗ୍ରହ, ପଥରୀର ଗଠନ ବିଶ୍ଳେଷଣ, ଓ ମେଟାବୋଲିକ୍ ପ୍ୟାନେଲ୍ — ଯାହା ଏକ କେନ୍ଦ୍ରୀଭୂତ ନିବାରଣ ଯୋଜନା ତିଆରି କରେ ଯାହାକୁ ଆପଣ ବାସ୍ତବରେ ପାଳନ କରିପାରିବେ।",
      ],
      highlights: [
        "ତୁରନ୍ତ ପଥରୀ ମୂଲ୍ୟାୟନ — ଯନ୍ତ୍ରଣା, ଇମେଜିଂ, ଆବଶ୍ୟକରେ ୟୁରୋଲୋଜି ରେଫର୍",
        "୨୪-ଘଣ୍ଟା ୟୁରିନ୍ ଷ୍ଟୋନ୍-ରିସ୍କ୍ ପ୍ୟାନେଲ୍",
        "ଯେଉଁଠି ପଥରୀ ମିଳେ, ତାହାର ଗଠନ ବିଶ୍ଳେଷଣ",
        "ଆମ ଭିତର ଡାଇଟିସିଆନ୍ ସହ ଆହାର ଓ ତରଳ ଯୋଜନା",
        "ଚିକିତ୍ସା-ଯୋଗ୍ୟ କାରଣର ସମାଧାନ — ହାଇପର୍‌ପାରାଥାଇରଏଡିଜ୍ମ, ହାଇପର୍‌କ୍ୟାଲସିୟୁରିଆ, ସିଟ୍ରେଟ୍ ଅଭାବ",
      ],
      quickFacts: [
        { label: "ପ୍ରଥମ ସାକ୍ଷାତ", value: "ଇମେଜିଂ ସମୀକ୍ଷା + ମେଟାବୋଲିକ୍ ୱର୍କଅପ୍ ଯୋଜନା" },
        { label: "ୟୁରିନ୍ ସଂଗ୍ରହ", value: "୨୪-ଘଣ୍ଟା, ଘରେ" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "ସମସ୍ତ ପୂର୍ବ ଇମେଜିଂ, ଉପଲବ୍ଧ ହେଲେ ପଥରୀ ବିଶ୍ଳେଷଣ" },
        { label: "ଫଲୋ-ଅପ୍", value: "୬ ସପ୍ତାହରେ ଫଳ ସମୀକ୍ଷା, ତା'ପରେ ୬-ମାସରେ" },
      ],
      faqs: [
        { question: "ମୋର କେତେବେଳେ କେତେବେଳେ ପଥରୀ ହୁଏ। ୱର୍କଅପ୍ ଦରକାର କି?", answer: "ଯଦି ଆପଣଙ୍କୁ ଦୁଇ କିମ୍ବା ଅଧିକ ଥର ପଥରୀ ହୋଇଛି, ତାହେଲେ ହଁ। ୱର୍କଅପ୍ ସାଧାରଣତଃ ଏକ ୟୁରିନ୍ ସଂଗ୍ରହ ଓ ବ୍ଲଡ୍ ପ୍ୟାନେଲ୍ — ଅଧିକାଂଶ ରୋଗୀ ସ୍ପଷ୍ଟ ଉତ୍ତର ପାଆନ୍ତି ଯେ ପଥରୀ କ'ଣ ଚଳାଉଛି ଓ ଘରେ କ'ଣ ବଦଳାଇବାକୁ ଅଛି।" },
        { question: "ମୋତେ କ'ଣ ସର୍ଜରୀ ଦରକାର?", answer: "ବହୁ ପଥରୀ ହାଇଡ୍ରେସନ୍ ଓ ଯନ୍ତ୍ରଣା ନିୟନ୍ତ୍ରଣରେ ନିଜେ ବାହାରି ଯାଆନ୍ତି। ବଡ଼ କିମ୍ବା ବାଧା ଦେଉଥିବା ପଥରୀ ପାଇଁ ଲିଥୋଟ୍ରିପ୍ସି କିମ୍ବା ୟୁରେଟେରୋସ୍କୋପି ଆବଶ୍ୟକ ହୋଇପାରେ — ଏସବୁ ପାଇଁ ଆମେ ୟୁରୋଲୋଜିଷ୍ଟଙ୍କ ସହ ସମନ୍ୱୟ କରୁ ଏବଂ ପରେ ଆପଣଙ୍କ ସହ ଫଲୋ-ଅପ୍ ଚାଲୁ ରଖୁ।" },
        { question: "ଏହା କ'ଣ ସତରେ ଅଧିକ ପାଣି ପିଇବାର କଥା?", answer: "ଅଧିକାଂଶ ରୋଗୀଙ୍କ ପାଇଁ ହାଇଡ୍ରେସନ୍ ସବୁଠାରୁ ବଡ଼ ଲିଭର୍ — କିନ୍ତୁ ଠିକ୍ ପରିମାଣ ଓ ସମୟ ପଥରୀର ପ୍ରକାର ଉପରେ ନିର୍ଭର କରେ। ଆମେ ଏକ ଲକ୍ଷ୍ୟ ସ୍ଥିର କରିବୁ ଯାହାକୁ ଆପଣ ବାସ୍ତବରେ ଛୁଇଁପାରିବେ ଏବଂ ଫଲୋ-ଅପ୍‌ରେ ପ୍ରଗତି ଯାଞ୍ଚ କରିବୁ।" },
      ],
    },
  },
};
