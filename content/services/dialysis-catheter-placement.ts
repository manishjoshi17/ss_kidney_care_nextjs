import type { Service } from "@/modules/services/core/types";

export const dialysisCatheterPlacement: Service = {
  slug: "dialysis-catheter-placement",
  icon: "first-aid",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Bedside catheter placement before urgent dialysis",
    hi: "तत्काल डायलिसिस से पहले बेडसाइड कैथेटर लगाना",
    or: "ତୁରନ୍ତ ଡାଇଲିସିସ୍ ପୂର୍ବରୁ ବେଡ୍‌ସାଇଡ୍ କ୍ୟାଥିଟର୍ ସ୍ଥାପନ",
  },
  i18n: {
    en: {
      name: "Dialysis catheter placement",
      shortDescription: "Short-term central catheter placement for urgent or new-start dialysis.",
      longDescription: [
        "A non-tunneled (short-term) dialysis catheter is used when dialysis is needed urgently — usually for AKI, severe electrolyte imbalance, or a new dialysis start while an AV fistula matures. The catheter is placed in a large vein (internal jugular, femoral, or rarely subclavian) under ultrasound guidance and is intended for short-term use, typically days to a few weeks.",
        "We place these at the bedside or in the procedure room, often the same day a patient presents. Once you no longer need it — either because your kidneys recover or your tunneled catheter / fistula is ready — we remove it.",
      ],
      highlights: [
        "Ultrasound-guided, bedside or procedure-room",
        "Internal jugular preferred (lowest infection rate)",
        "Same-day placement for urgent dialysis",
        "Daily review for line care and signs of infection",
        "Removed as soon as a definitive access is ready",
      ],
      quickFacts: [
        { label: "Anaesthetic", value: "Local" },
        { label: "Time in the room", value: "About 20–30 minutes" },
        { label: "Use duration", value: "Days to a few weeks" },
        { label: "Replaced by", value: "Tunneled catheter or AV fistula" },
      ],
      faqs: [
        { question: "Why a short-term and a long-term version?", answer: "Different jobs. Short-term catheters are quick to place when dialysis cannot wait — they're not designed for months of use because the infection risk rises over time. A tunneled catheter or fistula takes longer to set up but is much safer long-term." },
        { question: "Is the procedure done in the operation theatre?", answer: "Usually no — it is a bedside or procedure-room insertion under local anaesthetic and ultrasound. Most patients are dialyzed within an hour or two of the catheter being placed." },
        { question: "Can I move around with it?", answer: "Yes, with care. We position the line so it doesn't restrict you, and the nursing team checks the dressing every shift." },
      ],
    },
    hi: {
      name: "डायलिसिस कैथेटर लगाना",
      shortDescription: "तत्काल या नई-शुरुआत डायलिसिस के लिए अल्पकालिक केंद्रीय कैथेटर।",
      longDescription: [
        "गैर-टनलेड (अल्पकालिक) डायलिसिस कैथेटर का उपयोग तब किया जाता है जब डायलिसिस तुरंत चाहिए — आम तौर पर AKI, गंभीर इलेक्ट्रोलाइट असंतुलन, या नई डायलिसिस शुरुआत के लिए जब तक AV फ़िस्टुला परिपक्व न हो। यह कैथेटर एक बड़ी नस (आंतरिक जुग्युलर, फ़ीमोरल, या कभी-कभी सबक्लेवियन) में अल्ट्रासाउंड गाइडेंस से डाला जाता है और अल्पकालिक उपयोग — आम तौर पर कुछ दिनों से कुछ हफ़्तों — के लिए होता है।",
        "हम इसे बेडसाइड पर या प्रक्रिया कक्ष में लगाते हैं, अक्सर उसी दिन जब मरीज़ आते हैं। जब आपको इसकी ज़रूरत नहीं रहती — या तो किडनी ठीक हो जाने पर, या टनलेड कैथेटर / फ़िस्टुला तैयार होने पर — हम इसे हटा देते हैं।",
      ],
      highlights: [
        "अल्ट्रासाउंड-गाइडेड, बेडसाइड या प्रक्रिया कक्ष में",
        "आंतरिक जुग्युलर पसंदीदा (सबसे कम संक्रमण-दर)",
        "तत्काल डायलिसिस के लिए उसी दिन प्लेसमेंट",
        "लाइन-केयर और संक्रमण के संकेतों की रोज़ाना समीक्षा",
        "स्थायी एक्सेस तैयार होते ही हटा दिया जाता है",
      ],
      quickFacts: [
        { label: "एनेस्थीसिया", value: "लोकल" },
        { label: "कमरे में बिताया समय", value: "लगभग 20–30 मिनट" },
        { label: "उपयोग अवधि", value: "दिनों से कुछ हफ़्ते" },
        { label: "किससे बदला जाता है", value: "टनलेड कैथेटर या AV फ़िस्टुला" },
      ],
      faqs: [
        { question: "अल्पकालिक और दीर्घकालिक — दोनों क्यों?", answer: "अलग-अलग काम। अल्पकालिक कैथेटर तब लगते हैं जब डायलिसिस इंतज़ार नहीं कर सकती — वे महीनों के उपयोग के लिए डिज़ाइन नहीं किए गए, क्योंकि समय के साथ संक्रमण का जोखिम बढ़ता है। टनलेड कैथेटर या फ़िस्टुला तैयार होने में अधिक समय लेता है पर लंबे समय में कहीं अधिक सुरक्षित होता है।" },
        { question: "क्या यह प्रक्रिया ऑपरेशन थिएटर में होती है?", answer: "आम तौर पर नहीं — यह बेडसाइड या प्रक्रिया-कक्ष में लोकल एनेस्थीसिया और अल्ट्रासाउंड के तहत होती है। अधिकांश मरीज़ों की डायलिसिस कैथेटर लगने के एक-दो घंटे के भीतर शुरू हो जाती है।" },
        { question: "क्या मैं इसके साथ चल-फिर सकता हूँ?", answer: "हाँ, सावधानी से। हम लाइन को इस तरह लगाते हैं कि वह आपको बाँधे नहीं, और नर्सिंग टीम हर शिफ़्ट में ड्रेसिंग जाँचती है।" },
      ],
    },
    or: {
      name: "ଡାଇଲିସିସ୍ କ୍ୟାଥିଟର୍ ସ୍ଥାପନ",
      shortDescription: "ତୁରନ୍ତ କିମ୍ବା ନୂତନ-ଆରମ୍ଭ ଡାଇଲିସିସ୍ ପାଇଁ ସ୍ୱଳ୍ପକାଳୀନ କେନ୍ଦ୍ରୀୟ କ୍ୟାଥିଟର୍।",
      longDescription: [
        "ଅଣ-ଟନେଲ୍ଡ୍ (ସ୍ୱଳ୍ପକାଳୀନ) ଡାଇଲିସିସ୍ କ୍ୟାଥିଟର୍ ବ୍ୟବହାର କରାଯାଏ ଯେତେବେଳେ ଡାଇଲିସିସ୍ ତୁରନ୍ତ ଆବଶ୍ୟକ — ସାଧାରଣତଃ AKI, ଗମ୍ଭୀର ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ଅସନ୍ତୁଳନ, କିମ୍ବା AV ଫିଷ୍ଟୁଲା ପରିପକ୍ୱ ହେବା ପର୍ଯ୍ୟନ୍ତ ନୂତନ ଡାଇଲିସିସ୍ ଆରମ୍ଭ ପାଇଁ। କ୍ୟାଥିଟର୍‌ଟି ଅଲଟ୍ରାସାଉଣ୍ଡ୍ ଗାଇଡେନ୍ସ ସହ ଏକ ବଡ଼ ଶିରାରେ (ଆଭ୍ୟନ୍ତରୀଣ ଜୁଗ୍ୟୁଲାର୍, ଫିମୋରାଲ୍, କିମ୍ବା କେତେବେଳେ ସବ୍‌କ୍ଲାଭିଆନ୍) ଭର୍ତ୍ତି କରାଯାଏ ଏବଂ ସ୍ୱଳ୍ପକାଳୀନ ବ୍ୟବହାର — ସାଧାରଣତଃ କେତେ ଦିନରୁ କେତେ ସପ୍ତାହ — ପାଇଁ ଉଦ୍ଦିଷ୍ଟ।",
        "ଆମେ ଏହାକୁ ବେଡ୍‌ସାଇଡ୍ କିମ୍ବା ପ୍ରୋସିଜର୍ ରୁମ୍‌ରେ ସ୍ଥାପନ କରୁ, ଅନେକ ସମୟରେ ସେହି ଦିନ ଯେତେବେଳେ ରୋଗୀ ଆସନ୍ତି। ଯେତେବେଳେ ଆପଣ ଆଉ ଏହାର ଆବଶ୍ୟକତା ନ ରଖନ୍ତି — ଯଦି କିଡନୀ ସୁସ୍ଥ ହୁଏ କିମ୍ବା ଆପଣଙ୍କ ଟନେଲ୍ଡ୍ କ୍ୟାଥିଟର୍ / ଫିଷ୍ଟୁଲା ପ୍ରସ୍ତୁତ ହୋଇଯାଏ — ଆମେ ଏହାକୁ ବାହାର କରିଦେଉ।",
      ],
      highlights: [
        "ଅଲଟ୍ରାସାଉଣ୍ଡ୍-ଗାଇଡେଡ୍, ବେଡ୍‌ସାଇଡ୍ କିମ୍ବା ପ୍ରୋସିଜର୍-ରୁମ୍",
        "ଆଭ୍ୟନ୍ତରୀଣ ଜୁଗ୍ୟୁଲାର୍ ପସନ୍ଦ (ସର୍ବନିମ୍ନ ସଂକ୍ରମଣ ହାର)",
        "ତୁରନ୍ତ ଡାଇଲିସିସ୍ ପାଇଁ ସେହି ଦିନ ସ୍ଥାପନ",
        "ଲାଇନ୍-କେୟାର ଓ ସଂକ୍ରମଣ ସଙ୍କେତର ଦୈନିକ ସମୀକ୍ଷା",
        "ସ୍ଥାୟୀ ଆକ୍ସେସ୍ ପ୍ରସ୍ତୁତ ହେବାମାତ୍ରେ ବାହାର କରାଯାଏ",
      ],
      quickFacts: [
        { label: "ଏନେସ୍‌ଥେସିଆ", value: "ଲୋକାଲ୍" },
        { label: "କୋଠରୀରେ ସମୟ", value: "ପ୍ରାୟ ୨୦–୩୦ ମିନିଟ୍" },
        { label: "ବ୍ୟବହାର ଅବଧି", value: "ଦିନରୁ କେତେ ସପ୍ତାହ" },
        { label: "କେଉଁଥିରେ ବଦଳ", value: "ଟନେଲ୍ଡ୍ କ୍ୟାଥିଟର୍ କିମ୍ବା AV ଫିଷ୍ଟୁଲା" },
      ],
      faqs: [
        { question: "ସ୍ୱଳ୍ପକାଳୀନ ଓ ଦୀର୍ଘକାଳୀନ — ଦୁଇଟି କାହିଁକି?", answer: "ଭିନ୍ନ କାମ। ସ୍ୱଳ୍ପକାଳୀନ କ୍ୟାଥିଟର୍ ଶୀଘ୍ର ଲାଗେ ଯେତେବେଳେ ଡାଇଲିସିସ୍ ଅପେକ୍ଷା କରିପାରେନା — ସେମାନେ ମାସ ମାସ ବ୍ୟବହାର ପାଇଁ ଡିଜାଇନ୍ ହୋଇନଥାନ୍ତି କାରଣ ସମୟ ସହିତ ସଂକ୍ରମଣ ବିପଦ ବଢ଼େ। ଟନେଲ୍ଡ୍ କ୍ୟାଥିଟର୍ କିମ୍ବା ଫିଷ୍ଟୁଲା ସ୍ଥାପନ ପାଇଁ ଅଧିକ ସମୟ ଲାଗେ କିନ୍ତୁ ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ପାଇଁ ବହୁ ସୁରକ୍ଷିତ।" },
        { question: "ଏହି ପ୍ରୋସିଜର୍ କ'ଣ ଅପରେସନ୍ ଥିଏଟରରେ ହୁଏ?", answer: "ସାଧାରଣତଃ ନୁହେଁ — ଏହା ବେଡ୍‌ସାଇଡ୍ କିମ୍ବା ପ୍ରୋସିଜର୍-ରୁମ୍ ସ୍ଥାପନ ଯାହା ଲୋକାଲ୍ ଏନେସ୍‌ଥେସିଆ ଓ ଅଲଟ୍ରାସାଉଣ୍ଡ୍ ତଳେ ହୁଏ। ଅଧିକାଂଶ ରୋଗୀଙ୍କୁ କ୍ୟାଥିଟର୍ ସ୍ଥାପନର ଏକ-ଦୁଇ ଘଣ୍ଟା ଭିତରେ ଡାଇଲିସିସ୍ ଦିଆଯାଏ।" },
        { question: "ଏହା ସହ ମୁଁ ଚାଲିପାରିବି କି?", answer: "ହଁ, ଯତ୍ନ ସହ। ଆମେ ଲାଇନକୁ ଏପରି ସ୍ଥାନରେ ଲଗାଉ ଯାହାଦ୍ୱାରା ଏହା ଆପଣଙ୍କୁ ବାନ୍ଧି ନ ରଖେ, ଏବଂ ନର୍ସିଂ ଟିମ୍ ପ୍ରତି ଶିଫ୍ଟରେ ଡ୍ରେସିଂ ଯାଞ୍ଚ କରନ୍ତି।" },
      ],
    },
  },
};
