import type { Service } from "@/modules/services/core/types";

export const glomerulonephritis: Service = {
  slug: "glomerulonephritis",
  icon: "flask",
  category: "ckd",
  heroImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1600&q=80",
  heroImageAltI18n: {
    en: "A pathology laboratory at SS Kidney Care",
    hi: "एसएस किडनी केयर की पैथोलॉजी लैब",
    or: "ଏସ୍.ଏସ୍. କିଡନୀ କେୟାରର ପ୍ୟାଥୋଲୋଜି ଲ୍ୟାବୋରେଟୋରୀ",
  },
  i18n: {
    en: {
      name: "Glomerulonephritis",
      shortDescription: "When the kidney's filters themselves are inflamed — diagnosed properly, treated precisely.",
      longDescription: [
        "Glomerulonephritis is inflammation of the tiny filters inside the kidney (the glomeruli). It often shows up as blood or unusual protein in urine, swelling around the eyes or ankles, or sometimes a sudden rise in BP and creatinine.",
        "Because there are many different subtypes — each with its own treatment — the right diagnosis is usually a kidney biopsy. We take the biopsy, send the tissue to a renal pathologist, and put the plan together once we know what we're treating.",
        "Treatment depends on the subtype but typically combines immunosuppression with kidney-protective drugs, careful BP and protein control, and close follow-up while the disease settles.",
      ],
      highlights: [
        "Image-guided kidney biopsy on-site",
        "Renal-pathology partnership for tissue diagnosis",
        "Immunosuppression management — steroids, MMF, rituximab where indicated",
        "ACEi / ARB titration for proteinuria",
        "Close 6–8 week follow-up while disease activity settles",
      ],
      quickFacts: [
        { label: "First sign", value: "Blood or protein in urine, sometimes swelling" },
        { label: "Diagnosis", value: "Kidney biopsy + renal pathology" },
        { label: "Treatment", value: "Subtype-specific; usually multi-month" },
        { label: "Bring along", value: "All urine reports, recent BP log, any auto-immune work-up" },
      ],
      faqs: [
        { question: "Do I really need a biopsy?", answer: "For most glomerular disease, yes. The subtypes look the same on blood and urine tests but are treated very differently — a tissue diagnosis is the only reliable way to get the treatment right." },
        { question: "Is the biopsy safe?", answer: "It is an image-guided procedure done under local anaesthetic; you spend a few hours under observation afterwards. Complications are uncommon and we discuss them with you in detail before the day." },
        { question: "How long is the treatment?", answer: "Most regimens run for several months, sometimes over a year, depending on the subtype and response. We will explain the plan up front and review the response at every visit." },
      ],
    },
    hi: {
      name: "ग्लोमेरुलोनेफ्राइटिस",
      shortDescription: "जब किडनी के फ़िल्टर ही सूज जाएँ — सही निदान, सटीक इलाज।",
      longDescription: [
        "ग्लोमेरुलोनेफ्राइटिस किडनी के अंदर के नन्हे फ़िल्टरों (ग्लोमेरुलाई) की सूजन है। यह अक्सर यूरिन में खून या असामान्य प्रोटीन, आँखों या टखनों के आसपास सूजन, या कभी-कभी BP और क्रिएटिनिन में अचानक वृद्धि के रूप में सामने आती है।",
        "क्योंकि इसके कई अलग-अलग सबटाइप होते हैं — हर एक का अपना इलाज — सही निदान आम तौर पर किडनी बायोप्सी से होता है। हम बायोप्सी लेते हैं, ऊतक को रीनल पैथोलॉजिस्ट के पास भेजते हैं, और जब पता चलता है कि हम क्या इलाज कर रहे हैं तब योजना बनाते हैं।",
        "इलाज सबटाइप पर निर्भर है लेकिन आम तौर पर इम्यूनोसप्रेशन को किडनी-सुरक्षात्मक दवाओं, सावधान BP और प्रोटीन नियंत्रण, और बीमारी के शांत होने तक नज़दीकी फ़ॉलो-अप के साथ जोड़ता है।",
      ],
      highlights: [
        "इन-हाउस इमेज-गाइडेड किडनी बायोप्सी",
        "ऊतक निदान के लिए रीनल-पैथोलॉजी साझेदारी",
        "इम्यूनोसप्रेशन प्रबंधन — स्टेरॉयड, MMF, ज़रूरत पर रिटुक्सिमैब",
        "प्रोटीनूरिया के लिए ACEi / ARB समायोजन",
        "बीमारी की सक्रियता शांत होने तक हर 6–8 सप्ताह फ़ॉलो-अप",
      ],
      quickFacts: [
        { label: "पहला संकेत", value: "यूरिन में खून या प्रोटीन, कभी सूजन" },
        { label: "निदान", value: "किडनी बायोप्सी + रीनल पैथोलॉजी" },
        { label: "इलाज", value: "सबटाइप-विशिष्ट; आम तौर पर कई महीने" },
        { label: "साथ लाएँ", value: "सभी यूरिन रिपोर्ट, हाल का BP लॉग, ऑटो-इम्यून वर्कअप" },
      ],
      faqs: [
        { question: "क्या मुझे सच में बायोप्सी की ज़रूरत है?", answer: "अधिकांश ग्लोमेरुलर रोगों के लिए हाँ। सबटाइप ब्लड और यूरिन जाँच में एक जैसे दिखते हैं लेकिन उनका इलाज बहुत अलग होता है — इलाज सही पाने का एकमात्र भरोसेमंद तरीक़ा ऊतक का निदान है।" },
        { question: "क्या बायोप्सी सुरक्षित है?", answer: "यह लोकल एनेस्थीसिया में होने वाली इमेज-गाइडेड प्रक्रिया है; बाद में आप कुछ घंटे निगरानी में रहते हैं। जटिलताएँ असामान्य हैं और हम उन्हें प्रक्रिया के दिन से पहले विस्तार से समझाते हैं।" },
        { question: "इलाज कितना लंबा है?", answer: "अधिकांश रेजिमेन कई महीने चलते हैं, कभी एक साल से अधिक — सबटाइप और प्रतिक्रिया पर निर्भर। हम पहले से योजना समझाएँगे और हर मुलाक़ात में प्रतिक्रिया की समीक्षा करेंगे।" },
      ],
    },
    or: {
      name: "ଗ୍ଲୋମେରୁଲୋନେଫ୍ରାଇଟିସ୍",
      shortDescription: "ଯେତେବେଳେ କିଡନୀର ଫିଲ୍ଟର୍ ନିଜେ ସୂଜା ହୁଅନ୍ତି — ସଠିକ୍ ନିର୍ଣ୍ଣୟ, ସଠିକ୍ ଚିକିତ୍ସା।",
      longDescription: [
        "ଗ୍ଲୋମେରୁଲୋନେଫ୍ରାଇଟିସ୍ ହେଉଛି କିଡନୀର ଭିତରର ସୂକ୍ଷ୍ମ ଫିଲ୍ଟର (ଗ୍ଲୋମେରୁଲାଇ) ର ସୂଜା। ଏହା ପ୍ରାୟତଃ ୟୁରିନ୍‌ରେ ରକ୍ତ କିମ୍ବା ଅସ୍ୱାଭାବିକ ପ୍ରୋଟିନ୍, ଆଖି କିମ୍ବା ଗୋଡ଼-ଗଣ୍ଠି ଚାରିପଟେ ସୂଜା, କିମ୍ବା କେତେବେଳେ BP ଓ କ୍ରିଏଟିନିନ୍‌ର ହଠାତ୍ ବୃଦ୍ଧି ଭାବେ ଦେଖା ଯାଏ।",
        "ଏହାର ବହୁ ଭିନ୍ନ ଭିନ୍ନ ସବ୍‌ଟାଇପ୍ ଅଛି — ପ୍ରତ୍ୟେକର ନିଜସ୍ୱ ଚିକିତ୍ସା — ତେଣୁ ସଠିକ୍ ନିର୍ଣ୍ଣୟ ସାଧାରଣତଃ କିଡନୀ ବାୟୋପ୍ସି ଦ୍ୱାରା ହୁଏ। ଆମେ ବାୟୋପ୍ସି ନେଉ, ଟିସୁକୁ ରେନାଲ୍ ପ୍ୟାଥୋଲୋଜିଷ୍ଟଙ୍କୁ ପଠାଉ, ଏବଂ ଯେତେବେଳେ ଆମେ ଜାଣୁ କ'ଣ ଚିକିତ୍ସା କରୁଛୁ ସେତେବେଳେ ଯୋଜନା ତିଆରି କରୁ।",
        "ଚିକିତ୍ସା ସବ୍‌ଟାଇପ୍ ଅନୁସାରେ ଭିନ୍ନ କିନ୍ତୁ ସାଧାରଣତଃ ଇମ୍ୟୁନୋସପ୍ରେସନ୍‌କୁ କିଡନୀ-ସୁରକ୍ଷାକାରୀ ଔଷଧ, ସତର୍କ BP ଓ ପ୍ରୋଟିନ୍ ନିୟନ୍ତ୍ରଣ, ଏବଂ ରୋଗ ଶାନ୍ତ ହେବା ପର୍ଯ୍ୟନ୍ତ ନିକଟ ଫଲୋ-ଅପ୍ ସହ ଯୋଡ଼େ।",
      ],
      highlights: [
        "ସ୍ଥାନରେ ଇମେଜ୍-ଗାଇଡେଡ୍ କିଡନୀ ବାୟୋପ୍ସି",
        "ଟିସୁ ନିର୍ଣ୍ଣୟ ପାଇଁ ରେନାଲ୍-ପ୍ୟାଥୋଲୋଜି ସହଭାଗିତା",
        "ଇମ୍ୟୁନୋସପ୍ରେସନ୍ ପରିଚାଳନା — ଷ୍ଟେରଏଡ୍, MMF, ଆବଶ୍ୟକରେ ରିଟୁକ୍ସିମ୍ୟାବ୍",
        "ପ୍ରୋଟିନ୍‌ୟୁରିଆ ପାଇଁ ACEi / ARB ସମନ୍ୱୟ",
        "ରୋଗ ସକ୍ରିୟତା ଶାନ୍ତ ହେବା ପର୍ଯ୍ୟନ୍ତ ୬–୮ ସପ୍ତାହର ନିକଟ ଫଲୋ-ଅପ୍",
      ],
      quickFacts: [
        { label: "ପ୍ରଥମ ସଙ୍କେତ", value: "ୟୁରିନ୍‌ରେ ରକ୍ତ କିମ୍ବା ପ୍ରୋଟିନ୍, କେତେବେଳେ ସୂଜା" },
        { label: "ନିର୍ଣ୍ଣୟ", value: "କିଡନୀ ବାୟୋପ୍ସି + ରେନାଲ୍ ପ୍ୟାଥୋଲୋଜି" },
        { label: "ଚିକିତ୍ସା", value: "ସବ୍‌ଟାଇପ୍-ବିଶିଷ୍ଟ; ସାଧାରଣତଃ ବହୁ ମାସ" },
        { label: "ସାଥିରେ ଆଣନ୍ତୁ", value: "ସମସ୍ତ ୟୁରିନ୍ ରିପୋର୍ଟ, ସମ୍ପ୍ରତି BP ଲଗ୍, ଅଟୋ-ଇମ୍ୟୁନ୍ ୱର୍କଅପ୍" },
      ],
      faqs: [
        { question: "ମୋତେ କ'ଣ ବାୟୋପ୍ସିର ଆବଶ୍ୟକତା ଅଛି?", answer: "ଅଧିକାଂଶ ଗ୍ଲୋମେରୁଲାର୍ ରୋଗ ପାଇଁ ହଁ। ସବ୍‌ଟାଇପ୍ ବ୍ଲଡ୍ ଓ ୟୁରିନ୍ ପରୀକ୍ଷାରେ ସମାନ ଦେଖାଯାଆନ୍ତି କିନ୍ତୁ ସେମାନଙ୍କ ଚିକିତ୍ସା ବହୁତ ଭିନ୍ନ — ଚିକିତ୍ସା ସଠିକ୍ କରିବାର ଏକମାତ୍ର ବିଶ୍ୱାସଯୋଗ୍ୟ ଉପାୟ ଟିସୁ ନିର୍ଣ୍ଣୟ।" },
        { question: "ବାୟୋପ୍ସି କ'ଣ ସୁରକ୍ଷିତ?", answer: "ଏହା ଲୋକାଲ୍ ଏନେସ୍‌ଥେସିଆରେ କରାଯିବା ଇମେଜ୍-ଗାଇଡେଡ୍ ପ୍ରୋସିଜର୍; ପରେ ଆପଣ କିଛି ଘଣ୍ଟା ନିରୀକ୍ଷଣ ତଳେ ଥାଆନ୍ତି। ଜଟିଳତା କମ୍ ଏବଂ ଆମେ ଦିନ ପୂର୍ବରୁ ଆପଣଙ୍କ ସହ ବିସ୍ତୃତ ଆଲୋଚନା କରୁ।" },
        { question: "ଚିକିତ୍ସା କେତେ ଲମ୍ବା?", answer: "ଅଧିକାଂଶ ରେଜିମେନ୍ ବହୁ ମାସ ଚାଲେ, କେତେବେଳେ ଏକ ବର୍ଷରୁ ଅଧିକ — ସବ୍‌ଟାଇପ୍ ଓ ପ୍ରତିକ୍ରିୟା ଅନୁସାରେ। ଆମେ ଆଗରୁ ଯୋଜନା ବୁଝାଇଦେବୁ ଏବଂ ପ୍ରତ୍ୟେକ ସାକ୍ଷାତରେ ପ୍ରତିକ୍ରିୟାର ସମୀକ୍ଷା କରିବୁ।" },
      ],
    },
  },
};
