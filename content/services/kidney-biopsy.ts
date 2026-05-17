import type { Service } from "@/modules/services/core/types";

export const kidneyBiopsy: Service = {
  slug: "kidney-biopsy",
  icon: "test-tube",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Image-guided procedure suite at SS Kidney Care",
    hi: "एसएस किडनी केयर का इमेज-गाइडेड प्रक्रिया कक्ष",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରର ଇମେଜ୍-ଗାଇଡେଡ୍ ପ୍ରୋସିଜର୍ ସ୍ୟୁଟ୍",
  },
  i18n: {
    en: {
      name: "Kidney biopsy",
      shortDescription: "A precise, image-guided sampling procedure used when blood and urine tests cannot fully explain what is wrong.",
      longDescription: [
        "A kidney biopsy is a thin needle sample of kidney tissue, taken under ultrasound guidance and sent to a renal pathologist. It is the gold standard for diagnosing glomerular disease, unexplained protein in urine, sudden drops in kidney function, and rejection in transplanted kidneys.",
        "The procedure is done under local anaesthetic, usually as a half-day stay. We discuss every step in advance — what to eat the morning of, which medicines to pause, what the recovery looks like, and what the report will say once it returns.",
      ],
      highlights: [
        "Ultrasound-guided, performed by the consultant nephrologist",
        "Renal-pathology reporting (light, immunofluorescence and electron microscopy as needed)",
        "Same-day discharge for most patients",
        "Written report explained in plain language at the follow-up visit",
        "Pre-biopsy review of medications (blood thinners paused as needed)",
      ],
      quickFacts: [
        { label: "Duration", value: "The biopsy itself takes about 20 minutes" },
        { label: "Anaesthetic", value: "Local (no general anaesthesia)" },
        { label: "Recovery", value: "About 4–6 hours observed, then home" },
        { label: "Report", value: "Usually within 7–10 days" },
      ],
      faqs: [
        { question: "Is it painful?", answer: "Most patients describe a brief pressure rather than pain. The local anaesthetic numbs the entry point; you'll feel the doctor working but should not feel sharp pain. Tell us at any point if you do." },
        { question: "What are the risks?", answer: "The main risks are bleeding (usually small and self-limiting) and very rarely the need for a transfusion. We screen your clotting status before the procedure and observe you afterwards." },
        { question: "When can I go back to work?", answer: "Most people resume light office work the next day. Heavy lifting and exercise are paused for a week so the biopsy site can heal cleanly." },
      ],
    },
    hi: {
      name: "किडनी बायोप्सी",
      shortDescription: "जब रक्त और यूरिन की जाँच पूरी कहानी न बताए — एक सटीक, इमेज-गाइडेड नमूना।",
      longDescription: [
        "किडनी बायोप्सी किडनी के ऊतक का एक पतला सुई-नमूना है, जो अल्ट्रासाउंड गाइडेंस में लिया जाता है और रीनल पैथोलॉजिस्ट को भेजा जाता है। यह ग्लोमेरुलर रोग, अस्पष्ट यूरिन प्रोटीन, किडनी कार्यक्षमता में अचानक गिरावट, और प्रत्यारोपित किडनी में अस्वीकार का निदान करने का स्वर्ण-मानक है।",
        "प्रक्रिया लोकल एनेस्थीसिया में होती है, आम तौर पर आधे-दिन की अवस्था में। हम पहले से हर क़दम पर बात करते हैं — उस सुबह क्या खाना है, कौन-सी दवाएँ रोकनी हैं, रिकवरी कैसी होगी, और रिपोर्ट आने पर वह क्या कहेगी।",
      ],
      highlights: [
        "अल्ट्रासाउंड-गाइडेड, कंसल्टेंट नेफ्रोलॉजिस्ट द्वारा",
        "रीनल-पैथोलॉजी रिपोर्टिंग (ज़रूरत पर लाइट, इम्यूनोफ्लोरेसेंस और इलेक्ट्रॉन माइक्रोस्कोपी)",
        "अधिकांश मरीज़ों के लिए उसी दिन डिस्चार्ज",
        "फ़ॉलो-अप मुलाक़ात पर सरल भाषा में लिखित रिपोर्ट की व्याख्या",
        "बायोप्सी से पहले दवा-समीक्षा (ज़रूरत पर रक्त-पतला करने वाली दवाएँ रोकी जाती हैं)",
      ],
      quickFacts: [
        { label: "अवधि", value: "बायोप्सी ख़ुद लगभग 20 मिनट" },
        { label: "एनेस्थीसिया", value: "लोकल (कोई जनरल एनेस्थीसिया नहीं)" },
        { label: "रिकवरी", value: "लगभग 4–6 घंटे निगरानी, फिर घर" },
        { label: "रिपोर्ट", value: "आम तौर पर 7–10 दिनों में" },
      ],
      faqs: [
        { question: "क्या यह दर्दनाक है?", answer: "अधिकांश मरीज़ इसे संक्षिप्त दबाव बताते हैं, दर्द नहीं। लोकल एनेस्थीसिया प्रवेश-बिंदु को सुन्न करता है; आप डॉक्टर को काम करते हुए महसूस करेंगे लेकिन तेज़ दर्द नहीं होना चाहिए। कभी हो तो हमें तुरंत बताइए।" },
        { question: "जोखिम क्या हैं?", answer: "मुख्य जोखिम रक्तस्राव है (आम तौर पर थोड़ा और अपने आप रुक जाने वाला) और बहुत कम मामलों में ट्रांसफ़्यूज़न की ज़रूरत। हम प्रक्रिया से पहले आपकी क्लॉटिंग स्थिति की जाँच करते हैं और बाद में आपकी निगरानी रखते हैं।" },
        { question: "मैं काम पर कब लौट सकता हूँ?", answer: "अधिकांश लोग अगले दिन हल्का ऑफ़िस-काम शुरू कर देते हैं। भारी सामान उठाना और व्यायाम एक सप्ताह तक रोका जाता है ताकि बायोप्सी का स्थान साफ़-सुथरा भर सके।" },
      ],
    },
    or: {
      name: "କିଡନୀ ବାୟୋପ୍ସି",
      shortDescription: "ଯେତେବେଳେ ବ୍ଲଡ୍ ଓ ୟୁରିନ୍ ପରୀକ୍ଷା ସମ୍ପୂର୍ଣ୍ଣ କାହାଣୀ ବୁଝାଇ ପାରେନା — ଏକ ସଠିକ୍, ଇମେଜ୍-ଗାଇଡେଡ୍ ନମୁନା।",
      longDescription: [
        "କିଡନୀ ବାୟୋପ୍ସି ହେଉଛି ଅଲଟ୍ରାସାଉଣ୍ଡ୍ ଗାଇଡେନ୍ସରେ ନିଆଯାଇଥିବା କିଡନୀ ଟିସୁର ଏକ ପତଳା ଛୁଞ୍ଚି-ନମୁନା, ଯାହାକୁ ରେନାଲ୍ ପ୍ୟାଥୋଲୋଜିଷ୍ଟଙ୍କୁ ପଠାଯାଏ। ଏହା ଗ୍ଲୋମେରୁଲାର୍ ରୋଗ, ଅସ୍ପଷ୍ଟ ୟୁରିନ୍ ପ୍ରୋଟିନ୍, କିଡନୀ କାର୍ଯ୍ୟକ୍ଷମତାରେ ହଠାତ୍ ହ୍ରାସ, ଏବଂ ପ୍ରତିରୋପିତ କିଡନୀରେ ପ୍ରତ୍ୟାଖ୍ୟାନ ନିର୍ଣ୍ଣୟର ସ୍ୱର୍ଣ୍ଣ-ମାନକ।",
        "ପ୍ରୋସିଜର୍ ଲୋକାଲ୍ ଏନେସ୍‌ଥେସିଆରେ ହୁଏ, ସାଧାରଣତଃ ଅଧା-ଦିନର ରହିବା। ଆମେ ପ୍ରତ୍ୟେକ ପଦକ୍ଷେପ ବିଷୟରେ ଆଗରୁ ଆଲୋଚନା କରୁ — ସେହି ସକାଳ କ'ଣ ଖାଇବାକୁ ଅଛି, କେଉଁ ଔଷଧ ବନ୍ଦ କରିବାକୁ ଅଛି, ରିକଭରୀ କିପରି ଦେଖା ଯିବ, ଏବଂ ରିପୋର୍ଟ ଫେରିଲେ ତାହା କ'ଣ କହିବ।",
      ],
      highlights: [
        "ଅଲଟ୍ରାସାଉଣ୍ଡ୍-ଗାଇଡେଡ୍, କନ୍‌ସଲଟାଣ୍ଟ୍ ନେଫ୍ରୋଲୋଜିଷ୍ଟ ଦ୍ୱାରା ଆୟୋଜିତ",
        "ରେନାଲ୍-ପ୍ୟାଥୋଲୋଜି ରିପୋର୍ଟିଂ (ଆବଶ୍ୟକରେ ଲାଇଟ୍, ଇମ୍ୟୁନୋଫ୍ଲୋରେସେନ୍ସ ଓ ଇଲେକ୍ଟ୍ରନ୍ ମାଇକ୍ରୋସ୍କୋପି)",
        "ଅଧିକାଂଶ ରୋଗୀଙ୍କ ପାଇଁ ସେହି ଦିନ ଡିସ୍‌ଚାର୍ଜ",
        "ଫଲୋ-ଅପ୍ ସାକ୍ଷାତରେ ସରଳ ଭାଷାରେ ଲିଖିତ ରିପୋର୍ଟର ବ୍ୟାଖ୍ୟା",
        "ବାୟୋପ୍ସି ପୂର୍ବରୁ ଔଷଧ ସମୀକ୍ଷା (ଆବଶ୍ୟକରେ ରକ୍ତ-ପତଳା ଔଷଧ ବନ୍ଦ)",
      ],
      quickFacts: [
        { label: "ଅବଧି", value: "ବାୟୋପ୍ସି ନିଜେ ପ୍ରାୟ ୨୦ ମିନିଟ୍" },
        { label: "ଏନେସ୍‌ଥେସିଆ", value: "ଲୋକାଲ୍ (କୌଣସି ଜେନେରାଲ୍ ଏନେସ୍‌ଥେସିଆ ନୁହେଁ)" },
        { label: "ରିକଭରୀ", value: "ପ୍ରାୟ ୪–୬ ଘଣ୍ଟା ନିରୀକ୍ଷଣ, ତା'ପରେ ଘର" },
        { label: "ରିପୋର୍ଟ", value: "ସାଧାରଣତଃ ୭–୧୦ ଦିନ ଭିତରେ" },
      ],
      faqs: [
        { question: "ଏହା କ'ଣ ଯନ୍ତ୍ରଣାଦାୟକ?", answer: "ଅଧିକାଂଶ ରୋଗୀ ଏହାକୁ ସଂକ୍ଷିପ୍ତ ଚାପ ଭାବେ ବର୍ଣ୍ଣନା କରନ୍ତି, ଯନ୍ତ୍ରଣା ନୁହେଁ। ଲୋକାଲ୍ ଏନେସ୍‌ଥେସିଆ ପ୍ରବେଶ-ବିନ୍ଦୁକୁ ସୁନ୍ନ କରେ; ଆପଣ ଡାକ୍ତରଙ୍କୁ କାମ କରୁଥିବାର ଅନୁଭବ କରିବେ କିନ୍ତୁ ତୀକ୍ଷ୍ଣ ଯନ୍ତ୍ରଣା ଅନୁଭବ କରିବେ ନାହିଁ। ଯଦି କେତେବେଳେ ହୁଏ, ଆମକୁ ତୁରନ୍ତ ଜଣାନ୍ତୁ।" },
        { question: "ବିପଦଗୁଡ଼ିକ କ'ଣ?", answer: "ମୁଖ୍ୟ ବିପଦ ହେଉଛି ରକ୍ତସ୍ରାବ (ସାଧାରଣତଃ ସାମାନ୍ୟ ଓ ନିଜେ ବନ୍ଦ ହୋଇଯିବାର) ଏବଂ ବହୁତ କମ୍ କ୍ଷେତ୍ରରେ ଟ୍ରାନ୍ସଫ୍ୟୁଜନ୍ ଆବଶ୍ୟକ। ପ୍ରୋସିଜର୍ ପୂର୍ବରୁ ଆମେ ଆପଣଙ୍କ କ୍ଲଟିଂ ସ୍ଥିତି ଯାଞ୍ଚ କରୁ ଏବଂ ପରେ ଆପଣଙ୍କୁ ନିରୀକ୍ଷଣରେ ରଖୁ।" },
        { question: "ମୁଁ କେତେବେଳେ କାମକୁ ଫେରିପାରିବି?", answer: "ଅଧିକାଂଶ ଲୋକ ପରଦିନ ହାଲୁକା ଅଫିସ୍ କାମ ଆରମ୍ଭ କରନ୍ତି। ଭାରୀ ଉଠାଣ ଓ ବ୍ୟାୟାମ ଏକ ସପ୍ତାହ ପର୍ଯ୍ୟନ୍ତ ବନ୍ଦ ରଖାଯାଏ ଯାହାଦ୍ୱାରା ବାୟୋପ୍ସି ସ୍ଥାନ ଭଲଭାବେ ସୁସ୍ଥ ହୋଇପାରେ।" },
      ],
    },
  },
};
