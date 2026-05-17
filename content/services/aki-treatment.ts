import type { Service } from "@/modules/services/core/types";

export const akiTreatment: Service = {
  slug: "acute-kidney-injury",
  icon: "lightning",
  category: "acute",
  heroImage: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Critical-care monitoring in the renal ICU at SS Kidney Care",
    hi: "एसएस किडनी केयर के रीनल आईसीयू में क्रिटिकल-केयर निगरानी",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରର ରେନାଲ୍ ଆଇସିୟୁରେ କ୍ରିଟିକାଲ୍-କେୟାର ନିରୀକ୍ଷଣ",
  },
  i18n: {
    en: {
      name: "Acute Kidney Injury (AKI) treatment",
      shortDescription: "Fast, focused care when kidneys fail suddenly.",
      longDescription: [
        "Acute kidney injury is a sudden drop in kidney function — often over hours or days. It can follow severe infection, dehydration, certain medications, or a drop in blood supply to the kidneys. Caught early, AKI is frequently reversible.",
        "At SS Kidney Care we are set up to admit, investigate and treat AKI around the clock. The renal ICU has continuous monitoring, in-house biochemistry and dedicated dialysis cover. The aim is the same in every case: find the cause, support the kidneys while they recover, and bring you home as soon as you are safe to leave.",
      ],
      highlights: [
        "24×7 nephrology admissions through the emergency line",
        "Renal ICU with continuous monitoring",
        "Same-day biochemistry, urine analysis and imaging",
        "Bedside hemodialysis and SLED (sustained low-efficiency dialysis)",
        "Electrolyte and fluid correction",
        "Drug-dose review for the patient's complete prescription",
      ],
      quickFacts: [
        { label: "Admission", value: "Direct from the 24×7 emergency line" },
        { label: "Average stay", value: "3–10 days, case-dependent" },
        { label: "Where", value: "Renal ICU, in-house lab" },
        { label: "Bring along", value: "All current medications and discharge summaries" },
      ],
      faqs: [
        { question: "How is AKI diagnosed?", answer: "A small rise in serum creatinine, a drop in urine output, or both. We confirm with a focused panel of blood and urine tests, and look for a cause — infection, dehydration, obstruction, drug effect, or low blood pressure." },
        { question: "Will I need dialysis?", answer: "Many AKI patients do not. Dialysis becomes necessary when fluid, potassium or acidosis cannot be safely corrected medically. If it is needed, it is usually short-term and stops once your kidneys recover." },
        { question: "Can AKI be reversed?", answer: "Often, yes — particularly when the cause is treated early. Some patients are left with mild chronic kidney disease afterwards, which we then manage in our CKD clinic." },
        { question: "What can I do at home to prevent AKI?", answer: "Keep hydrated in heat, avoid combinations of painkillers and antibiotics without a doctor's review, and tell us about every supplement and herbal remedy you take." },
      ],
    },
    hi: {
      name: "तीव्र किडनी विफलता (AKI) का उपचार",
      shortDescription: "जब किडनी अचानक काम करना बंद कर दे — त्वरित, केंद्रित देखभाल।",
      longDescription: [
        "तीव्र किडनी विफलता (AKI) किडनी के कार्य में अचानक — अक्सर कुछ घंटों या दिनों के भीतर — आई गिरावट है। यह गंभीर संक्रमण, पानी की कमी, कुछ दवाओं, या किडनी तक रक्त-प्रवाह कम होने के बाद हो सकती है। शुरुआत में ही पहचान ली जाए तो AKI अक्सर पूरी तरह ठीक हो जाती है।",
        "एसएस किडनी केयर में हम AKI मरीज़ों को चौबीसों घंटे भर्ती, जाँच और इलाज के लिए तैयार रहते हैं। हमारे रीनल आईसीयू में निरंतर निगरानी, इन-हाउस बायोकेमिस्ट्री और समर्पित डायलिसिस कवर है। हर मामले में लक्ष्य एक ही होता है — कारण ढूँढना, ठीक होने तक किडनी को सहारा देना, और जैसे ही आप सुरक्षित हों, आपको घर भेजना।",
      ],
      highlights: [
        "इमरजेंसी लाइन से 24×7 नेफ्रोलॉजी भर्ती",
        "निरंतर निगरानी के साथ रीनल आईसीयू",
        "उसी दिन बायोकेमिस्ट्री, यूरिन जाँच और इमेजिंग",
        "बेडसाइड हेमोडायलिसिस और SLED (सस्टेन्ड लो-एफिशिएंसी डायलिसिस)",
        "इलेक्ट्रोलाइट और तरल पदार्थ का सुधार",
        "मरीज़ की पूरी दवा-सूची की समीक्षा",
      ],
      quickFacts: [
        { label: "भर्ती", value: "24×7 इमरजेंसी लाइन से सीधे" },
        { label: "औसत ठहराव", value: "3–10 दिन, मामले के अनुसार" },
        { label: "कहाँ", value: "रीनल आईसीयू, इन-हाउस लैब" },
        { label: "साथ लाएँ", value: "सभी मौजूदा दवाएँ और पुराने डिस्चार्ज सारांश" },
      ],
      faqs: [
        { question: "AKI का निदान कैसे होता है?", answer: "सीरम क्रिएटिनिन में थोड़ी वृद्धि, यूरिन आउटपुट में कमी, या दोनों से। हम एक केंद्रित ब्लड और यूरिन जाँच पैनल से पुष्टि करते हैं और कारण ढूँढते हैं — संक्रमण, पानी की कमी, रुकावट, दवा का असर, या निम्न रक्तचाप।" },
        { question: "क्या मुझे डायलिसिस की ज़रूरत होगी?", answer: "कई AKI मरीज़ों को नहीं होती। डायलिसिस तब ज़रूरी होता है जब तरल पदार्थ, पोटैशियम या एसिडोसिस को दवाओं से सुरक्षित ढंग से नियंत्रित नहीं किया जा सकता। ज़रूरत होने पर भी यह आम तौर पर अल्पकालिक होता है और किडनी ठीक होते ही बंद कर दिया जाता है।" },
        { question: "क्या AKI ठीक हो सकती है?", answer: "अक्सर हाँ — विशेषकर जब कारण का जल्दी इलाज हो जाए। कुछ मरीज़ों को बाद में हल्की क्रॉनिक किडनी डिज़ीज़ रह जाती है, जिसे हम अपने CKD क्लिनिक में संभालते हैं।" },
        { question: "घर पर AKI से बचने के लिए क्या करें?", answer: "गर्मी में हाइड्रेटेड रहें, बिना डॉक्टर की सलाह दर्द-निवारक और एंटीबायोटिक्स एक साथ न लें, और हर सप्लीमेंट तथा जड़ी-बूटी उपचार के बारे में हमें बताएँ।" },
      ],
    },
    or: {
      name: "ତୀବ୍ର କିଡନୀ ବିଫଳତା (AKI) ର ଚିକିତ୍ସା",
      shortDescription: "ଯେତେବେଳେ କିଡନୀ ହଠାତ୍ କାମ କରିବା ବନ୍ଦ କରେ — ତ୍ୱରିତ, କେନ୍ଦ୍ରୀଭୂତ ଯତ୍ନ।",
      longDescription: [
        "ତୀବ୍ର କିଡନୀ ବିଫଳତା ହେଉଛି କିଡନୀର କାର୍ଯ୍ୟକ୍ଷମତାରେ ହଠାତ୍ ହ୍ରାସ — ପ୍ରାୟତଃ କିଛି ଘଣ୍ଟା କିମ୍ବା ଦିନ ମଧ୍ୟରେ। ଏହା ଗମ୍ଭୀର ସଂକ୍ରମଣ, ଶରୀରରେ ପାଣି ଅଭାବ, କେତେକ ଔଷଧ, କିମ୍ବା କିଡନୀ ପର୍ଯ୍ୟନ୍ତ ରକ୍ତ ସରବରାହ କମି ଯିବା ପରେ ହୋଇପାରେ। ଆଗରୁ ଚିହ୍ନଟ ହେଲେ AKI ପ୍ରାୟତଃ ସମ୍ପୂର୍ଣ୍ଣ ସୁସ୍ଥ ହୋଇଯାଏ।",
        "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରରେ ଆମେ AKI ରୋଗୀଙ୍କୁ ୨୪ ଘଣ୍ଟା ଭିତରେ ଭର୍ତ୍ତି, ପରୀକ୍ଷା ଓ ଚିକିତ୍ସା ଦେବାକୁ ପ୍ରସ୍ତୁତ ଅଛୁ। ଆମ ରେନାଲ୍ ଆଇସିୟୁରେ ନିରନ୍ତର ନିରୀକ୍ଷଣ, ଭିତରେ ବାୟୋକେମିଷ୍ଟ୍ରୀ ଲ୍ୟାବ୍ ଓ ସମର୍ପିତ ଡାଇଲିସିସ୍ ସୁବିଧା ରହିଛି। ପ୍ରତ୍ୟେକ କ୍ଷେତ୍ରରେ ଆମ ଲକ୍ଷ୍ୟ ସମାନ — କାରଣ ଖୋଜିବା, କିଡନୀ ସୁସ୍ଥ ହେବା ପର୍ଯ୍ୟନ୍ତ ତାହାକୁ ସମର୍ଥନ କରିବା, ଏବଂ ଆପଣ ସୁରକ୍ଷିତ ଭାବେ ଯିବାକୁ ସକ୍ଷମ ହେବାମାତ୍ରେ ଆପଣଙ୍କୁ ଘରକୁ ପଠାଇବା।",
      ],
      highlights: [
        "ଜରୁରୀ ଲାଇନ୍ ମାଧ୍ୟମରେ ୨୪×୭ ନେଫ୍ରୋଲୋଜି ଭର୍ତ୍ତି",
        "ନିରନ୍ତର ନିରୀକ୍ଷଣ ସହ ରେନାଲ୍ ଆଇସିୟୁ",
        "ସେହି ଦିନରେ ବାୟୋକେମିଷ୍ଟ୍ରୀ, ୟୁରିନ୍ ପରୀକ୍ଷା ଓ ଇମେଜିଂ",
        "ବେଡ୍‌ସାଇଡ୍ ହେମୋଡାଇଲିସିସ୍ ଓ SLED (ସ୍ଥାୟୀ କମ୍-ଦକ୍ଷତା ଡାଇଲିସିସ୍)",
        "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ଓ ତରଳ ସଂଶୋଧନ",
        "ରୋଗୀଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ଔଷଧ ତାଲିକାର ସମୀକ୍ଷା",
      ],
      quickFacts: [
        { label: "ଭର୍ତ୍ତି", value: "୨୪×୭ ଜରୁରୀ ଲାଇନ୍ ମାଧ୍ୟମରେ ସିଧାସଳଖ" },
        { label: "ହାରାହାରି ରହିବା", value: "୩–୧୦ ଦିନ, କ୍ଷେତ୍ର ଅନୁସାରେ" },
        { label: "କେଉଁଠାରେ", value: "ରେନାଲ୍ ଆଇସିୟୁ, ଭିତରେ ଲ୍ୟାବ୍" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "ସମସ୍ତ ଚାଲୁଥିବା ଔଷଧ ଓ ପୂର୍ବ ଡିସ୍‌ଚାର୍ଜ ସାରାଂଶ" },
      ],
      faqs: [
        { question: "AKI କିପରି ନିର୍ଣ୍ଣୟ କରାଯାଏ?", answer: "ସିରମ୍ କ୍ରିଏଟିନିନ୍‌ରେ ସାମାନ୍ୟ ବୃଦ୍ଧି, ୟୁରିନ୍ ଆଉଟ୍‌ପୁଟ୍‌ରେ ହ୍ରାସ, କିମ୍ବା ଉଭୟରୁ। ଆମେ ଏକ କେନ୍ଦ୍ରୀଭୂତ ବ୍ଲଡ୍ ଓ ୟୁରିନ୍ ପରୀକ୍ଷା ପ୍ୟାନେଲ୍ ସହ ଏହାକୁ ନିଶ୍ଚିତ କରୁ, ଏବଂ କାରଣ ଖୋଜୁ — ସଂକ୍ରମଣ, ପାଣି ଅଭାବ, ଅବରୋଧ, ଔଷଧର ପ୍ରଭାବ, କିମ୍ବା ନିମ୍ନ ରକ୍ତଚାପ।" },
        { question: "ମୋତେ କ'ଣ ଡାଇଲିସିସ୍ ଦରକାର?", answer: "ଅଧିକାଂଶ AKI ରୋଗୀଙ୍କୁ ଆବଶ୍ୟକ ହୁଏ ନାହିଁ। ଯେତେବେଳେ ତରଳ, ପୋଟାସିୟମ୍ କିମ୍ବା ଏସିଡୋସିସ୍‌କୁ ସୁରକ୍ଷିତ ଭାବେ ଔଷଧରେ ସଂଶୋଧନ କରାଯାଇ ପାରେନା, ସେତେବେଳେ ଡାଇଲିସିସ୍ ଆବଶ୍ୟକ ହୁଏ। ଆବଶ୍ୟକ ହେଲେ ବି ଏହା ସାଧାରଣତଃ ସ୍ୱଳ୍ପକାଳୀନ ଓ କିଡନୀ ସୁସ୍ଥ ହେବାମାତ୍ରେ ବନ୍ଦ ହୋଇଯାଏ।" },
        { question: "AKI ଭଲ ହୋଇ ପାରେ କି?", answer: "ବହୁ କ୍ଷେତ୍ରରେ ହଁ — ବିଶେଷତଃ ଯେତେବେଳେ କାରଣର ଶୀଘ୍ର ଚିକିତ୍ସା ହୁଏ। କେତେକ ରୋଗୀଙ୍କୁ ପରେ ହାଲୁକା କ୍ରନିକ୍ କିଡନୀ ଡିଜିଜ୍ ରହିଯାଏ, ଯାହାକୁ ଆମେ ଆମର CKD କ୍ଲିନିକରେ ସମ୍ଭାଳୁ।" },
        { question: "ଘରେ AKI ରୋକିବାକୁ କ'ଣ କରିବି?", answer: "ଗରମରେ ହାଇଡ୍ରେଟେଡ୍ ରୁହନ୍ତୁ, ଡାକ୍ତରଙ୍କ ସମୀକ୍ଷା ବିନା ବ୍ୟଥାନାଶକ ଓ ଆଣ୍ଟିବାୟୋଟିକ୍‌ର ମିଶ୍ରଣ ଏଡାନ୍ତୁ, ଏବଂ ଆପଣ ନେଉଥିବା ପ୍ରତ୍ୟେକ ସପ୍ଲିମେଣ୍ଟ ଓ ଆୟୁର୍ବେଦିକ୍ ଔଷଧ ବିଷୟରେ ଆମକୁ ଜଣାନ୍ତୁ।" },
      ],
    },
  },
};
