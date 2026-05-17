import type { Service } from "@/modules/services/core/types";

export const permanentCatheterInsertion: Service = {
  slug: "permanent-catheter-insertion",
  icon: "plus-circle",
  category: "advanced",
  heroImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "Procedural suite for dialysis access at SS Kidney Care",
    hi: "एसएस किडनी केयर का डायलिसिस एक्सेस प्रक्रिया कक्ष",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରର ଡାଇଲିସିସ୍ ଆକ୍ସେସ୍ ପ୍ରୋସିଜର୍ ସୁଇଟ୍",
  },
  i18n: {
    en: {
      name: "Permanent catheter insertion",
      shortDescription: "Tunneled catheter placement for patients who need reliable long-term dialysis access.",
      longDescription: [
        "A tunneled (permanent) catheter is a soft tube that lies under the skin and emerges at the chest, used for dialysis when an AV fistula is not yet ready or not possible. The catheter is designed for months-to-years of use, with a cuff that anchors it under the skin and reduces infection risk.",
        "We place these in our procedure room under local anaesthetic and ultrasound guidance. Most patients can use the catheter for dialysis on the same day. We see you for a wound check at one week, then again at four weeks, and we will train you and your family on how to care for the exit site at home.",
      ],
      highlights: [
        "Ultrasound-guided insertion, performed by the consultant",
        "Tunnel and cuff design — months-to-years of use",
        "Same-day dialysis where clinically appropriate",
        "Structured exit-site care training for the family",
        "1-week and 4-week wound reviews built in",
      ],
      quickFacts: [
        { label: "Anaesthetic", value: "Local + light sedation if needed" },
        { label: "Time in the room", value: "About 45 minutes" },
        { label: "Recovery", value: "Same-day discharge for most" },
        { label: "Replace every", value: "Months to years, depending on use" },
      ],
      faqs: [
        { question: "Is this the same as a temporary catheter?", answer: "No. A temporary catheter is used for a few days at most. A tunneled catheter is designed for long-term use — its tunnel and cuff make it much safer for extended dialysis." },
        { question: "Can I shower with it?", answer: "Yes, after the first two weeks of healing. We provide a waterproof cover and teach you and your family how to dry and dress the exit site." },
        { question: "Will it interfere with sleep?", answer: "Most patients adjust quickly. We position it on the side you prefer; the dressing is low-profile and the catheter clipped against the skin so it doesn't pull." },
      ],
    },
    hi: {
      name: "स्थायी कैथेटर लगाना",
      shortDescription: "जिन्हें लंबे समय तक भरोसेमंद डायलिसिस एक्सेस चाहिए — उनके लिए टनलेड कैथेटर।",
      longDescription: [
        "टनलेड (स्थायी) कैथेटर एक नरम ट्यूब है जो त्वचा के नीचे चलती है और सीने पर बाहर निकलती है — इसका उपयोग डायलिसिस के लिए तब होता है जब AV फ़िस्टुला अभी तैयार नहीं है या संभव नहीं। यह कैथेटर महीनों से सालों के उपयोग के लिए बनाया गया है, और इसमें एक कफ़ है जो इसे त्वचा के नीचे टिकाए रखती है और संक्रमण का जोखिम कम करती है।",
        "हम इन्हें अपने प्रक्रिया कक्ष में लोकल एनेस्थीसिया और अल्ट्रासाउंड गाइडेंस में लगाते हैं। अधिकांश मरीज़ कैथेटर का उपयोग उसी दिन डायलिसिस के लिए कर सकते हैं। हम आपको एक हफ़्ते में घाव-जाँच के लिए देखते हैं, फिर चार हफ़्तों में दोबारा, और आपको व आपके परिवार को घर पर एक्ज़िट साइट की देखभाल का प्रशिक्षण देते हैं।",
      ],
      highlights: [
        "अल्ट्रासाउंड-गाइडेड इन्सर्शन, कंसल्टेंट द्वारा",
        "टनल और कफ़ डिज़ाइन — महीनों से सालों के उपयोग के लिए",
        "जहाँ नैदानिक रूप से उपयुक्त हो, उसी दिन डायलिसिस",
        "परिवार के लिए व्यवस्थित एक्ज़िट-साइट देखभाल प्रशिक्षण",
        "1-सप्ताह और 4-सप्ताह में घाव की समीक्षा शामिल",
      ],
      quickFacts: [
        { label: "एनेस्थीसिया", value: "लोकल + ज़रूरत पर हल्की सिडेशन" },
        { label: "कमरे में बिताया समय", value: "लगभग 45 मिनट" },
        { label: "रिकवरी", value: "अधिकांश के लिए उसी दिन डिस्चार्ज" },
        { label: "हर कितने समय बाद बदलाव", value: "उपयोग पर निर्भर, महीनों से सालों" },
      ],
      faqs: [
        { question: "क्या यह अस्थायी कैथेटर जैसा है?", answer: "नहीं। एक अस्थायी कैथेटर अधिकतम कुछ दिनों के लिए होता है। टनलेड कैथेटर दीर्घकालिक उपयोग के लिए डिज़ाइन है — इसका टनल और कफ़ लंबे समय की डायलिसिस के लिए इसे कहीं अधिक सुरक्षित बनाते हैं।" },
        { question: "क्या मैं इसके साथ नहा सकता हूँ?", answer: "हाँ, घाव भरने के पहले दो हफ़्तों के बाद। हम एक वाटरप्रूफ कवर देते हैं और आपको व आपके परिवार को सिखाते हैं कि एक्ज़िट साइट को कैसे सुखाना और ड्रेसिंग करना है।" },
        { question: "क्या यह नींद में दख़ल देगा?", answer: "अधिकांश मरीज़ जल्दी अभ्यस्त हो जाते हैं। हम इसे उस तरफ़ लगाते हैं जो आपको पसंद हो; ड्रेसिंग पतली होती है और कैथेटर त्वचा से क्लिप किया जाता है ताकि वह खींचे नहीं।" },
      ],
    },
    or: {
      name: "ସ୍ଥାୟୀ କ୍ୟାଥିଟର୍ ସ୍ଥାପନ",
      shortDescription: "ଯେଉଁମାନଙ୍କୁ ଦୀର୍ଘକାଳୀନ ବିଶ୍ୱାସଯୋଗ୍ୟ ଡାଇଲିସିସ୍ ଆକ୍ସେସ୍ ଆବଶ୍ୟକ — ସେମାନଙ୍କ ପାଇଁ ଟନେଲ୍ଡ୍ କ୍ୟାଥିଟର୍।",
      longDescription: [
        "ଟନେଲ୍ଡ୍ (ସ୍ଥାୟୀ) କ୍ୟାଥିଟର୍ ଏକ କୋମଳ ଟ୍ୟୁବ୍ ଯାହା ଚର୍ମ ତଳେ ଚାଲେ ଓ ଛାତିରେ ବାହାରେ — ଡାଇଲିସିସ୍ ପାଇଁ ବ୍ୟବହାର କରାଯାଏ ଯେତେବେଳେ AV ଫିଷ୍ଟୁଲା ଅଦ୍ୟାବଧି ପ୍ରସ୍ତୁତ ନୁହେଁ କିମ୍ବା ସମ୍ଭବ ନୁହେଁ। ଏହି କ୍ୟାଥିଟର୍ ମାସ ମାସରୁ ବର୍ଷ ବର୍ଷ ବ୍ୟବହାର ପାଇଁ ତିଆରି, ଏବଂ ଏଥିରେ ଏକ କଫ୍ ଅଛି ଯାହା ଏହାକୁ ଚର୍ମ ତଳେ ଅଟକାଇ ରଖେ ଓ ସଂକ୍ରମଣ ବିପଦ କମାଏ।",
        "ଆମେ ଏସବୁକୁ ଆମ ପ୍ରୋସିଜର୍ ରୁମ୍‌ରେ ଲୋକାଲ୍ ଏନେସ୍‌ଥେସିଆ ଓ ଅଲଟ୍ରାସାଉଣ୍ଡ୍ ଗାଇଡେନ୍ସରେ ସ୍ଥାପନ କରୁ। ଅଧିକାଂଶ ରୋଗୀ କ୍ୟାଥିଟର୍‌କୁ ସେହି ଦିନ ଡାଇଲିସିସ୍ ପାଇଁ ବ୍ୟବହାର କରିପାରନ୍ତି। ଆମେ ଆପଣଙ୍କୁ ଏକ ସପ୍ତାହରେ କ୍ଷତ-ଯାଞ୍ଚ ପାଇଁ ଦେଖୁ, ତା'ପରେ ଚାରି ସପ୍ତାହରେ ପୁଣି, ଏବଂ ଘରେ ଏକ୍ଜିଟ୍ ସାଇଟର ଯତ୍ନ ବିଷୟରେ ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ତାଲିମ୍ ଦେଉ।",
      ],
      highlights: [
        "ଅଲଟ୍ରାସାଉଣ୍ଡ୍-ଗାଇଡେଡ୍ ସ୍ଥାପନ, କନ୍‌ସଲଟାଣ୍ଟ୍ ଦ୍ୱାରା ଆୟୋଜିତ",
        "ଟନେଲ୍ ଓ କଫ୍ ଡିଜାଇନ୍ — ମାସ ମାସରୁ ବର୍ଷ ବର୍ଷ ବ୍ୟବହାର",
        "ଯେଉଁଠି କ୍ଲିନିକାଲ୍ ଭାବେ ଉପଯୁକ୍ତ, ସେହି ଦିନ ଡାଇଲିସିସ୍",
        "ପରିବାର ପାଇଁ ସଂରଚିତ ଏକ୍ଜିଟ୍-ସାଇଟ୍ ଯତ୍ନ ତାଲିମ୍",
        "୧-ସପ୍ତାହ ଓ ୪-ସପ୍ତାହର କ୍ଷତ ସମୀକ୍ଷା ସାମିଲ୍",
      ],
      quickFacts: [
        { label: "ଏନେସ୍‌ଥେସିଆ", value: "ଲୋକାଲ୍ + ଆବଶ୍ୟକରେ ହାଲୁକା ସେଡେସନ୍" },
        { label: "କୋଠରୀରେ ସମୟ", value: "ପ୍ରାୟ ୪୫ ମିନିଟ୍" },
        { label: "ରିକଭରୀ", value: "ଅଧିକାଂଶଙ୍କ ପାଇଁ ସେହି ଦିନ ଡିସ୍‌ଚାର୍ଜ" },
        { label: "କେତେ ସମୟରେ ବଦଳ", value: "ବ୍ୟବହାର ଅନୁସାରେ, ମାସ ମାସରୁ ବର୍ଷ ବର୍ଷ" },
      ],
      faqs: [
        { question: "ଏହା କ'ଣ ଅସ୍ଥାୟୀ କ୍ୟାଥିଟର୍ ସମାନ?", answer: "ନୁହେଁ। ଏକ ଅସ୍ଥାୟୀ କ୍ୟାଥିଟର୍ ସର୍ବାଧିକ କିଛି ଦିନ ପାଇଁ ବ୍ୟବହାର କରାଯାଏ। ଟନେଲ୍ଡ୍ କ୍ୟାଥିଟର୍ ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ପାଇଁ ଡିଜାଇନ୍ — ଏହାର ଟନେଲ୍ ଓ କଫ୍ ବର୍ଦ୍ଧିତ ଡାଇଲିସିସ୍ ପାଇଁ ଏହାକୁ ବହୁ ସୁରକ୍ଷିତ କରେ।" },
        { question: "ମୁଁ କ'ଣ ଏଥି ସହ ଗାଧୋଇପାରିବି?", answer: "ହଁ, ସୁସ୍ଥତାର ପ୍ରଥମ ଦୁଇ ସପ୍ତାହ ପରେ। ଆମେ ଏକ ୱାଟର୍‌ପ୍ରୁଫ୍ କଭର୍ ଦେଉ ଏବଂ ଆପଣ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଶିଖାଉ କିପରି ଏକ୍ଜିଟ୍ ସାଇଟ୍‌କୁ ଶୁଖାଇବାକୁ ଓ ଡ୍ରେସିଂ କରିବାକୁ ହୁଏ।" },
        { question: "ଏହା କ'ଣ ନିଦରେ ବାଧା ଦେବ?", answer: "ଅଧିକାଂଶ ରୋଗୀ ଶୀଘ୍ର ଅଭ୍ୟସ୍ତ ହୋଇଯାନ୍ତି। ଆମେ ଏହାକୁ ଆପଣ ପସନ୍ଦ କରୁଥିବା ପଟରେ ଲଗାଉ; ଡ୍ରେସିଂ ପତଳା ଏବଂ କ୍ୟାଥିଟର୍ ଚର୍ମରେ କ୍ଲିପ୍ ହୋଇଥାଏ ଯାହାଦ୍ୱାରା ତାହା ଟାଣି ହୁଏ ନାହିଁ।" },
      ],
    },
  },
};
