import type { Service } from "@/modules/services/core/types";

export const hemodialysis: Service = {
  slug: "hemodialysis",
  icon: "drop",
  category: "dialysis",
  heroImage: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A hemodialysis machine on the dialysis floor at SS Kidney Care",
    hi: "एसएस किडनी केयर के डायलिसिस फ़्लोर पर हेमोडायलिसिस मशीन",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରର ଡାଇଲିସିସ୍ ଫ୍ଲୋର୍‌ରେ ହେମୋଡାଇଲିସିସ୍ ମେସିନ୍",
  },
  i18n: {
    en: {
      name: "Hemodialysis",
      shortDescription: "Cleaning your blood when your kidneys can't.",
      longDescription: [
        "Hemodialysis filters your blood outside the body, removing waste and excess fluid through a high-precision filter (the dialyzer) and returning the cleaned blood to you. For patients with end-stage kidney disease or severe AKI, it is the most established way to replace the work the kidneys can no longer do on their own.",
        "Our dialysis floor runs six modern machines, with separate areas for hepatitis-positive patients and full single-use dialyzers for every session. Most patients come in three times a week for around four hours — long enough that we have built the space around comfort: reclining chairs, screens, Wi-Fi, tea, and a senior dialysis nurse who knows you by name.",
      ],
      highlights: [
        "6 modern machines on a dedicated dialysis floor",
        "Hepatitis-isolated machines and protocols",
        "Single-use dialyzers, every session",
        "Vascular-access management — fistula, graft, catheter",
        "Online HDF available where clinically indicated",
        "Wi-Fi, screens, tea — because four hours is long",
      ],
      quickFacts: [
        { label: "Session length", value: "About 4 hours" },
        { label: "Typical frequency", value: "3 sessions a week" },
        { label: "Where", value: "Dedicated dialysis floor, 6 stations" },
        { label: "Bring along", value: "Recent reports, hep B/C status, current medications" },
      ],
      faqs: [
        { question: "How often will I need dialysis?", answer: "Most patients come three times a week for about four hours per session. Your nephrologist will set the prescription — duration, flow rates and fluid removal — based on your reports and how you feel between sessions." },
        { question: "Will I feel okay during the session?", answer: "Some patients feel tired toward the end, particularly if more fluid needs to be removed. Tell our nurses how you're feeling — they will adjust in real time. Cramping, low blood pressure or unusual symptoms are addressed immediately." },
        { question: "Can I eat during dialysis?", answer: "Yes — a light meal or snack is encouraged. We provide tea and biscuits; you can bring your own meal too. We share dietary guidance for both dialysis days and non-dialysis days." },
        { question: "What about vascular access?", answer: "An AV fistula is the preferred long-term access. If you need to start dialysis urgently, we can use a temporary catheter while a fistula matures. We work with vascular surgeons for placement and follow-up." },
      ],
    },
    hi: {
      name: "हेमोडायलिसिस",
      shortDescription: "जब आपकी किडनी ख़ुद रक्त साफ़ नहीं कर पाती, तब उसका विकल्प।",
      longDescription: [
        "हेमोडायलिसिस आपके रक्त को शरीर के बाहर एक उच्च-परिशुद्धता फ़िल्टर (डायलाइज़र) से छानता है — कचरा और अतिरिक्त तरल हटाता है और साफ़ रक्त आपको वापस लौटाता है। एंड-स्टेज किडनी रोग या गंभीर AKI वाले मरीज़ों के लिए, यह उस काम को बदलने का सबसे स्थापित तरीक़ा है जो किडनी अब अपने आप नहीं कर सकती।",
        "हमारा डायलिसिस फ़्लोर छह आधुनिक मशीनें चलाता है, हेपेटाइटिस-पॉज़िटिव मरीज़ों के लिए अलग क्षेत्र, और हर सत्र में पूरी तरह सिंगल-यूज़ डायलाइज़र। अधिकांश मरीज़ हफ़्ते में तीन बार लगभग चार घंटे के लिए आते हैं — काफ़ी लंबा समय कि हमने जगह को आराम के इर्द-गिर्द बनाया है: रिक्लाइनिंग कुर्सियाँ, स्क्रीन, वाई-फ़ाई, चाय, और एक वरिष्ठ डायलिसिस नर्स जो आपको नाम से जानती है।",
      ],
      highlights: [
        "समर्पित डायलिसिस फ़्लोर पर 6 आधुनिक मशीनें",
        "हेपेटाइटिस-पृथक मशीनें और प्रोटोकॉल",
        "हर सत्र में सिंगल-यूज़ डायलाइज़र",
        "वैस्कुलर-एक्सेस प्रबंधन — फ़िस्टुला, ग्राफ़्ट, कैथेटर",
        "नैदानिक रूप से ज़रूरी होने पर ऑनलाइन HDF",
        "वाई-फ़ाई, स्क्रीन, चाय — क्योंकि चार घंटे लंबे होते हैं",
      ],
      quickFacts: [
        { label: "सत्र की अवधि", value: "लगभग 4 घंटे" },
        { label: "आम तौर पर आवृत्ति", value: "हफ़्ते में 3 सत्र" },
        { label: "कहाँ", value: "समर्पित डायलिसिस फ़्लोर, 6 स्टेशन" },
        { label: "साथ लाएँ", value: "हाल की रिपोर्ट, हेप B/C स्थिति, चालू दवाएँ" },
      ],
      faqs: [
        { question: "मुझे कितनी बार डायलिसिस की ज़रूरत होगी?", answer: "अधिकांश मरीज़ हफ़्ते में तीन बार लगभग चार घंटे के लिए आते हैं। आपके नेफ्रोलॉजिस्ट प्रिस्क्रिप्शन तय करेंगे — अवधि, फ़्लो रेट और तरल पदार्थ हटाना — आपकी रिपोर्ट और सत्रों के बीच आप कैसा महसूस करते हैं उसके आधार पर।" },
        { question: "क्या सत्र के दौरान मुझे ठीक लगेगा?", answer: "कुछ मरीज़ों को अंत की ओर थकान महसूस होती है, ख़ासकर अगर ज़्यादा तरल हटाना पड़े। हमारी नर्सों को बताते रहिए आप कैसा महसूस कर रहे हैं — वे तुरंत समायोजित कर देंगी। ऐंठन, निम्न रक्तचाप या किसी असामान्य लक्षण को तत्काल देखा जाता है।" },
        { question: "क्या मैं डायलिसिस के दौरान खा सकता हूँ?", answer: "हाँ — हल्का खाना या नाश्ता प्रोत्साहित है। हम चाय और बिस्किट देते हैं; आप अपना खाना भी ला सकते हैं। डायलिसिस वाले दिन और अन्य दिनों, दोनों के लिए आहार सलाह देते हैं।" },
        { question: "वैस्कुलर एक्सेस के बारे में क्या?", answer: "AV फ़िस्टुला लंबे समय के लिए सबसे उपयुक्त एक्सेस है। अगर आपको तत्काल डायलिसिस शुरू करनी है तो हम फ़िस्टुला परिपक्व होने तक अस्थायी कैथेटर का उपयोग कर सकते हैं। प्लेसमेंट और फ़ॉलो-अप के लिए हम वैस्कुलर सर्जन के साथ काम करते हैं।" },
      ],
    },
    or: {
      name: "ହେମୋଡାଇଲିସିସ୍",
      shortDescription: "ଯେତେବେଳେ ଆପଣଙ୍କ କିଡନୀ ରକ୍ତ ସଫା କରିପାରୁ ନଥାଏ, ସେତେବେଳର ବିକଳ୍ପ।",
      longDescription: [
        "ହେମୋଡାଇଲିସିସ୍ ଆପଣଙ୍କ ରକ୍ତକୁ ଶରୀର ବାହାରେ ଏକ ଉଚ୍ଚ-ସଠିକତା ଫିଲ୍ଟର୍ (ଡାଇଲାଇଜର୍) ମାଧ୍ୟମରେ ଛାଣେ — ବର୍ଜ୍ୟ ଓ ଅତିରିକ୍ତ ତରଳ ବାହାର କରେ ଏବଂ ସଫା ରକ୍ତକୁ ଆପଣଙ୍କୁ ଫେରାଇ ଦିଏ। ଏଣ୍ଡ-ଷ୍ଟେଜ୍ କିଡନୀ ରୋଗ କିମ୍ବା ଗମ୍ଭୀର AKI ଥିବା ରୋଗୀଙ୍କ ପାଇଁ, ଏହା ସେହି କାର୍ଯ୍ୟକୁ ବଦଳାଇବାର ସର୍ବାଧିକ ସ୍ଥାପିତ ଉପାୟ ଯାହା କିଡନୀ ଆଉ ନିଜେ କରିପାରୁ ନଥାଏ।",
        "ଆମ ଡାଇଲିସିସ୍ ଫ୍ଲୋର୍‌ରେ ୬ଟି ଆଧୁନିକ ମେସିନ୍ ଚାଲେ, ହେପାଟାଇଟିସ୍-ପଜିଟିଭ୍ ରୋଗୀଙ୍କ ପାଇଁ ଅଲଗା ସ୍ଥାନ, ଏବଂ ପ୍ରତ୍ୟେକ ସେସନ୍ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ସିଙ୍ଗଲ୍-ୟୁଜ୍ ଡାଇଲାଇଜର୍। ଅଧିକାଂଶ ରୋଗୀ ସପ୍ତାହକୁ ତିନି ଥର ପ୍ରାୟ ଚାରି ଘଣ୍ଟା ପାଇଁ ଆସନ୍ତି — ଏତେ ଲମ୍ବା ଯେ ଆମେ ସ୍ଥାନକୁ ସ୍ୱାଚ୍ଛନ୍ଦ୍ୟ ଉପରେ ତିଆରି କରିଛୁ: ରିକ୍ଲାଇନିଂ ଚେୟାର୍, ସ୍କ୍ରିନ୍, ୱାଇ-ଫାଇ, ଚା, ଏବଂ ଜଣେ ବରିଷ୍ଠ ଡାଇଲିସିସ୍ ନର୍ସ ଯିଏ ଆପଣଙ୍କୁ ନାମରୁ ଚିହ୍ନନ୍ତି।",
      ],
      highlights: [
        "ସମର୍ପିତ ଡାଇଲିସିସ୍ ଫ୍ଲୋର୍‌ରେ ୬ଟି ଆଧୁନିକ ମେସିନ୍",
        "ହେପାଟାଇଟିସ୍-ଅଲଗା ମେସିନ୍ ଓ ପ୍ରୋଟୋକଲ୍",
        "ପ୍ରତ୍ୟେକ ସେସନ୍‌ରେ ସିଙ୍ଗଲ୍-ୟୁଜ୍ ଡାଇଲାଇଜର୍",
        "ଭାସ୍କୁଲାର୍-ଆକ୍ସେସ୍ ପରିଚାଳନା — ଫିଷ୍ଟୁଲା, ଗ୍ରାଫ୍ଟ, କ୍ୟାଥିଟର୍",
        "କ୍ଲିନିକାଲ୍ ଆବଶ୍ୟକତା ସୂଚନା ଥିଲେ ଅନଲାଇନ୍ HDF",
        "ୱାଇ-ଫାଇ, ସ୍କ୍ରିନ୍, ଚା — କାରଣ ଚାରି ଘଣ୍ଟା ଲମ୍ବା",
      ],
      quickFacts: [
        { label: "ସେସନ୍ ଅବଧି", value: "ପ୍ରାୟ ୪ ଘଣ୍ଟା" },
        { label: "ସାଧାରଣ ବାରଂବାରତା", value: "ସପ୍ତାହକୁ ୩ ସେସନ୍" },
        { label: "କେଉଁଠାରେ", value: "ସମର୍ପିତ ଡାଇଲିସିସ୍ ଫ୍ଲୋର୍, ୬ ଷ୍ଟେସନ୍" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "ସମ୍ପ୍ରତି ରିପୋର୍ଟ, ହେପ୍ B/C ସ୍ଥିତି, ଚାଲୁଥିବା ଔଷଧ" },
      ],
      faqs: [
        { question: "ମୋତେ କେତେ ଥର ଡାଇଲିସିସ୍ ଦରକାର?", answer: "ଅଧିକାଂଶ ରୋଗୀ ସପ୍ତାହକୁ ତିନି ଥର ପ୍ରତି ସେସନ୍ ପ୍ରାୟ ଚାରି ଘଣ୍ଟା ଆସନ୍ତି। ଆପଣଙ୍କ ନେଫ୍ରୋଲୋଜିଷ୍ଟ ପ୍ରେସ୍କ୍ରିପ୍ସନ୍ ସ୍ଥିର କରିବେ — ଅବଧି, ଫ୍ଲୋ ରେଟ୍ ଓ ତରଳ ବାହାର — ଆପଣଙ୍କ ରିପୋର୍ଟ ଓ ସେସନ୍ ମଧ୍ୟରେ ଆପଣ କିପରି ଅନୁଭବ କରୁଛନ୍ତି ତାହା ଅନୁସାରେ।" },
        { question: "ସେସନ୍ ସମୟରେ ମୁଁ ଠିକ୍ ଲାଗିବି କି?", answer: "କେତେକ ରୋଗୀ ଶେଷଆଡ଼କୁ ଥକ୍କା ଅନୁଭବ କରନ୍ତି, ବିଶେଷତଃ ଯଦି ଅଧିକ ତରଳ ବାହାର କରିବାକୁ ପଡ଼େ। ଆମ ନର୍ସମାନଙ୍କୁ ଜଣାନ୍ତୁ ଆପଣ କିପରି ଅନୁଭବ କରୁଛନ୍ତି — ସେମାନେ ତୁରନ୍ତ ସମନ୍ୱୟ କରିବେ। କ୍ରାମ୍ପ, ନିମ୍ନ ରକ୍ତଚାପ କିମ୍ବା ଅସ୍ୱାଭାବିକ ଲକ୍ଷଣକୁ ତୁରନ୍ତ ଦେଖାଯାଏ।" },
        { question: "ଡାଇଲିସିସ୍ ସମୟରେ ମୁଁ କିଛି ଖାଇପାରିବି କି?", answer: "ହଁ — ହାଲୁକା ଖାଦ୍ୟ କିମ୍ବା ସ୍ନାକ୍ସ ପ୍ରୋତ୍ସାହିତ। ଆମେ ଚା ଓ ବିସ୍କୁଟ୍ ଯୋଗାଉ; ଆପଣ ନିଜର ଖାଦ୍ୟ ବି ଆଣିପାରନ୍ତି। ଡାଇଲିସିସ୍ ଦିନ ଓ ଅଣ-ଡାଇଲିସିସ୍ ଦିନ ଉଭୟ ପାଇଁ ଆହାର ସୂଚନା ବାଣ୍ଟୁ।" },
        { question: "ଭାସ୍କୁଲାର୍ ଆକ୍ସେସ୍ ବିଷୟରେ?", answer: "AV ଫିଷ୍ଟୁଲା ଦୀର୍ଘକାଳୀନ ପସନ୍ଦୀଦା ଆକ୍ସେସ୍। ଯଦି ଆପଣଙ୍କୁ ତୁରନ୍ତ ଡାଇଲିସିସ୍ ଆରମ୍ଭ କରିବାକୁ ପଡ଼େ, ଆମେ ଫିଷ୍ଟୁଲା ପରିପକ୍ୱ ହେବା ପର୍ଯ୍ୟନ୍ତ ଅସ୍ଥାୟୀ କ୍ୟାଥିଟର୍ ବ୍ୟବହାର କରିପାରୁ। ସ୍ଥାପନ ଓ ଫଲୋ-ଅପ୍ ପାଇଁ ଆମେ ଭାସ୍କୁଲାର୍ ସର୍ଜନ୍‌ଙ୍କ ସହ କାମ କରୁ।" },
      ],
    },
  },
};
