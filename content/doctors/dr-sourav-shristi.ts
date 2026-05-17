import type { Doctor } from "@/modules/doctors/core/types";

// TODO before launch: confirm IPGMER training (currently rendered as "DM Nephrology" only).
// TODO before launch: confirm experienceYears with the clinic.
// TODO before launch: confirm OPD timings 8–10 AM / 6–9 PM (currently in content/site.ts hours).

export const drSouravShristi: Doctor = {
  slug: "dr-sourav-shristi",
  photo: "/dr-sourav-shristi.png",
  qualifications: ["MBBS", "MD (General Medicine)", "DM Nephrology"],
  experienceYears: 10,
  languagesSpoken: ["English", "Hindi", "Odia"],
  availability: ["mon", "tue", "wed", "thu", "fri", "sat"],
  i18n: {
    en: {
      name: "Dr. Sourav Shristi",
      title: "Consultant Nephrologist, Transplant Physician & Interventional Nephrologist",
      bio: [
        // Paragraph (a) — credential-led per PLAN.md §10.4 item 2
        "Sourav Shristi is one of a small number of DM Nephrology–trained physicians in Odisha and the only one running a full-time private nephrology practice in Sambalpur. He earned his DM in Nephrology and teaches at VIMSAR Burla, where he sees public-hospital cases alongside his clinic practice.",
        // Paragraph (b) — what he treats day-to-day
        "Day to day, he treats chronic kidney disease, diabetic kidney disease, acute kidney injury, glomerulonephritis, hypertension-related kidney problems, and kidney stones. He performs kidney biopsies, places permanent and short-term dialysis catheters, manages hemodialysis on the clinic's six-machine floor, and handles the full pre- and post-transplant workup for patients planning a kidney transplant.",
        // Paragraph (c) — clinical philosophy, drafted from the 6 story themes per PLAN.md §10.4 item 3
        // REFRESH WHEN REAL REVIEWS LAND — replace against verbatim quotes once supplied.
        "His patients keep mentioning the same things in their reviews: a thirty-minute first consult, the diagnosis explained in Odia or Hindi if that's what the family speaks at home, no upselling, and a Wednesday follow-up call about how new medications are settling in.",
      ],
      specialties: [
        "Chronic kidney disease",
        "Diabetic kidney disease",
        "Acute kidney injury",
        "Glomerulonephritis",
        "Hypertension-related kidney care",
        "Kidney biopsy",
        "Hemodialysis",
        "Permanent catheter insertion",
        "Dialysis catheter placement",
        "Kidney stones",
        "Kidney transplantation",
        "Critical care nephrology",
      ],
    },
    hi: {
      name: "डॉ. सौरव श्रीष्टि",
      title: "कंसल्टेंट नेफ्रोलॉजिस्ट, ट्रांसप्लांट फ़िज़िशियन और इंटरवेंशनल नेफ्रोलॉजिस्ट",
      bio: [
        "डॉ. सौरव श्रीष्टि ओडिशा के उन गिने-चुने DM नेफ्रोलॉजी-प्रशिक्षित चिकित्सकों में से एक हैं — और सम्बलपुर में पूर्णकालिक निजी नेफ्रोलॉजी प्रैक्टिस चलाने वाले अकेले। उन्होंने नेफ्रोलॉजी में DM किया है और VIMSAR बुर्ला में पढ़ाते हैं — जहाँ वे अपनी क्लिनिक प्रैक्टिस के साथ-साथ सरकारी अस्पताल के मरीज़ भी देखते हैं।",
        "रोज़मर्रा में वे क्रॉनिक किडनी रोग, डायबेटिक किडनी रोग, तीव्र किडनी विफलता, ग्लोमेरुलोनेफ्राइटिस, उच्च रक्तचाप-जनित किडनी समस्याओं, और किडनी की पथरी का इलाज करते हैं। वे ख़ुद किडनी बायोप्सी करते हैं, स्थायी और अल्पकालिक डायलिसिस कैथेटर लगाते हैं, क्लिनिक के छह-मशीन फ़्लोर पर हेमोडायलिसिस का प्रबंधन करते हैं, और किडनी प्रत्यारोपण की योजना बना रहे मरीज़ों के लिए पूरा प्री- और पोस्ट-ट्रांसप्लांट वर्कअप संभालते हैं।",
        "उनके मरीज़ अपनी समीक्षाओं में बार-बार एक ही बातें कहते हैं: तीस-मिनट का पहला परामर्श, अगर परिवार घर पर ओडिया या हिंदी बोलता है तो उसी भाषा में निदान की व्याख्या, कोई अपसेल नहीं, और नई दवा कैसे रास आ रही है — यह पूछने के लिए बुधवार को फ़ॉलो-अप कॉल।",
      ],
      specialties: [
        "क्रॉनिक किडनी रोग",
        "डायबेटिक किडनी रोग",
        "तीव्र किडनी विफलता",
        "ग्लोमेरुलोनेफ्राइटिस",
        "उच्च रक्तचाप-जनित किडनी देखभाल",
        "किडनी बायोप्सी",
        "हेमोडायलिसिस",
        "स्थायी कैथेटर लगाना",
        "डायलिसिस कैथेटर प्लेसमेंट",
        "किडनी की पथरी",
        "किडनी प्रत्यारोपण",
        "क्रिटिकल केयर नेफ्रोलॉजी",
      ],
    },
    or: {
      name: "ଡ. ସୌରଭ ଶ୍ରୀଷ୍ଟି",
      title: "କନ୍‌ସଲଟାଣ୍ଟ୍ ନେଫ୍ରୋଲୋଜିଷ୍ଟ୍, ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ୍ ଫିଜିସିଆନ୍ ଓ ଇଣ୍ଟରଭେନ୍ସନାଲ୍ ନେଫ୍ରୋଲୋଜିଷ୍ଟ୍",
      bio: [
        "ଡ. ସୌରଭ ଶ୍ରୀଷ୍ଟି ଓଡ଼ିଶାର କେତେଜଣ DM ନେଫ୍ରୋଲୋଜି-ତାଲିମପ୍ରାପ୍ତ ଚିକିତ୍ସକଙ୍କ ମଧ୍ୟରୁ ଜଣେ ଏବଂ ସମ୍ବଲପୁରରେ ପୂର୍ଣ୍ଣକାଳୀନ ବ୍ୟକ୍ତିଗତ ନେଫ୍ରୋଲୋଜି ଅଭ୍ୟାସ ଚଳାଉଥିବା ଏକମାତ୍ର ଚିକିତ୍ସକ। ସେ ନେଫ୍ରୋଲୋଜିରେ DM ସମ୍ପୂର୍ଣ୍ଣ କରିଛନ୍ତି ଏବଂ VIMSAR ବୁର୍ଲାରେ ଶିକ୍ଷା ଦେଉଛନ୍ତି, ଯେଉଁଠାରେ ସେ ସରକାରୀ-ହସ୍ପିଟାଲ ମାମଲା ସହ ତାଙ୍କ କ୍ଲିନିକ ଅଭ୍ୟାସ ମଧ୍ୟ କରନ୍ତି।",
        "ପ୍ରତିଦିନ ସେ କ୍ରୋନିକ୍ କିଡନୀ ରୋଗ, ଡାଇବେଟିକ୍ କିଡନୀ ରୋଗ, ତୀବ୍ର କିଡନୀ କ୍ଷତି, ଗ୍ଲୋମେରୁଲୋନେଫ୍ରାଇଟିସ, ଉଚ୍ଚ ରକ୍ତଚାପ ସମ୍ବନ୍ଧୀୟ କିଡନୀ ସମସ୍ୟା ଓ କିଡନୀ ପଥରର ଚିକିତ୍ସା କରନ୍ତି। ସେ କିଡନୀ ବାୟୋପ୍ସି କରନ୍ତି, ସ୍ଥାୟୀ ଓ ସ୍ୱଳ୍ପକାଳୀନ ଡାୟାଲିସିସ୍ କ୍ୟାଥେଟର ଲଗାନ୍ତି, ଛଅ-ମେସିନ ଫ୍ଲୋରରେ ହିମୋଡାୟାଲିସିସ୍ ପରିଚାଳନା କରନ୍ତି ଏବଂ କିଡନୀ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ ଯୋଜନା କରୁଥିବା ରୋଗୀଙ୍କ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ପୂର୍ବ ଓ ପର-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ ବ୍ୟବସ୍ଥା ସମ୍ଭାଳନ୍ତି।",
        "ତାଙ୍କ ରୋଗୀମାନେ ସମୀକ୍ଷାରେ ସମାନ କଥା ବାରମ୍ବାର ଉଲ୍ଲେଖ କରନ୍ତି: ତିରିଶ ମିନିଟର ପ୍ରଥମ ପରାମର୍ଶ, ଯଦି ପରିବାର ଘରେ ଓଡ଼ିଆ ବା ହିନ୍ଦୀ କୁହନ୍ତି ତେବେ ସେହି ଭାଷାରେ ନିଦାନ ବ୍ୟାଖ୍ୟା, କୌଣସି ଅଧିକ-ବିକ୍ରୀ ନାହିଁ, ଏବଂ ନୂତନ ଔଷଧ କିପରି ସୁହାଉଛି ସେ ବିଷୟରେ ବୁଧବାର ଅନୁସରଣ ଫୋନ।",
      ],
      specialties: [
        "କ୍ରୋନିକ୍ କିଡନୀ ରୋଗ",
        "ଡାଇବେଟିକ୍ କିଡନୀ ରୋଗ",
        "ତୀବ୍ର କିଡନୀ କ୍ଷତି",
        "ଗ୍ଲୋମେରୁଲୋନେଫ୍ରାଇଟିସ",
        "ଉଚ୍ଚ ରକ୍ତଚାପ ସମ୍ବନ୍ଧୀୟ କିଡନୀ ଯତ୍ନ",
        "କିଡନୀ ବାୟୋପ୍ସି",
        "ହିମୋଡାୟାଲିସିସ୍",
        "ସ୍ଥାୟୀ କ୍ୟାଥେଟର ଲଗାଣ",
        "ଡାୟାଲିସିସ୍ କ୍ୟାଥେଟର ଲଗାଣ",
        "କିଡନୀ ପଥର",
        "କିଡନୀ ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟେସନ",
        "କ୍ରିଟିକାଲ୍ କେୟାର ନେଫ୍ରୋଲୋଜି",
      ],
    },
  },
};
