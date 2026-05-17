import type { SupportedLocale } from "@/lib/locale";

export interface TestimonialI18n {
  quote: string;
  attribution: string;
  condition: string;
}

export interface Testimonial {
  slug: string;
  doctorSlug?: string;
  /** Optional — authored representative stories do not carry a fabricated year. */
  year?: number;
  photo?: string;
  i18n: Record<SupportedLocale, TestimonialI18n>;
}

/**
 * Aggregate rating shown alongside the patient-stories band.
 * This number is REAL (search-snippet-verified from JustDial Budharaja listing).
 * The story cards below are AUTHORED representative content (see comment on TESTIMONIALS below).
 */
export const TESTIMONIALS_AGGREGATE = {
  rating: 4.9,
  count: 486,
  source: "JustDial",
  href: "https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Kidney-Care-Near-Budharaja-Budharaja/9999PX663-X663-240102141155-N5L6_BZDET",
  logoSrc: "/companies/justdial-logo.svg",
} as const;

export interface ReviewSource {
  source: string;
  href: string;
  rating?: number;
  count?: number;
  /** Optional SVG wordmark in /public/companies/. Renders inline in place of the source name. */
  logoSrc?: string;
}

/**
 * Additional review platforms surfaced as secondary links on the Patient Stories band.
 * Rating / count are optional — surface them when you have a verifiable number (per
 * PLAN.md §13.3 risk 8, do not fabricate). Until then, the chip renders the source
 * name + outbound arrow only.
 */
export const ADDITIONAL_REVIEW_SOURCES: ReviewSource[] = [
  {
    source: "Google",
    href: "https://share.google/nONHv9wqhvOoxT8n2",
    rating: 4.9,
    count: 558,
    logoSrc: "/companies/google-logo.svg",
  },
];

/**
 * Authored representative stories — not verbatim JustDial extracts.
 * Written by the content team to reflect the practice's themes based on the doctor's specialty
 * and the regional patient catchment (Sambalpur, Burla, Bargarh — Hirakud belt).
 * Swap one-for-one with real verbatim quotes whenever the clinic supplies them.
 * Attribution format: first-name + last-initial · role · city. No fabricated month/year.
 * See PLAN.md Appendix C for the source copy.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "subhash-p-ckd-second-opinion",
    doctorSlug: "dr-sourav-shristi",
    i18n: {
      en: {
        quote:
          "When my father's creatinine kept rising, two doctors told us to wait and watch. Dr. Shristi sat with us for thirty minutes, walked us through what was actually happening, and gave us a six-month plan. We're holding stage 3 steady, two years on.",
        attribution: "Subhash P. · Family caregiver, Bargarh",
        condition: "Father's CKD, stage 3 stable",
      },
      hi: {
        quote:
          "जब मेरे पिता का क्रिएटिनिन बढ़ता गया, तो दो डॉक्टरों ने कहा कि देखो और प्रतीक्षा करो। डॉ. श्रीस्टी ने हमारे साथ तीस मिनट बैठकर समझाया कि असल में क्या हो रहा है, और छह महीने की योजना दी। दो साल बाद हम चरण 3 पर स्थिर हैं।",
        attribution: "Subhash P. · परिवार देखभालकर्ता, बारगढ़",
        condition: "पिता की CKD, चरण 3 स्थिर",
      },
      or: {
        quote:
          "ଯେତେବେଳେ ମୋ ବାପାଙ୍କ କ୍ରିଏଟିନିନ ବଢ଼ୁଥିଲା, ଦୁଇଜଣ ଡାକ୍ତର ଆମକୁ କହିଲେ ଅପେକ୍ଷା କରନ୍ତୁ ଏବଂ ଦେଖନ୍ତୁ। ଡ. ଶ୍ରୀଷ୍ଟି ଆମ ସହ ତିରିଶ ମିନିଟ ବସିଲେ, ପ୍ରକୃତରେ କ’ଣ ହେଉଛି ତାହା ବୁଝାଇଲେ, ଏବଂ ଛଅ-ମାସର ଯୋଜନା ଦେଲେ। ଦୁଇ ବର୍ଷ ପରେ ଆମେ ସ୍ତର 3ରେ ସ୍ଥିର ଅଛୁ।",
        attribution: "Subhash P. · ପରିବାର ଯତ୍ନକାରୀ, ବାରଗଡ଼",
        condition: "ବାପାଙ୍କ CKD, ସ୍ତର 3 ସ୍ଥିର",
      },
    },
  },
  {
    slug: "sunita-m-local-language",
    doctorSlug: "dr-sourav-shristi",
    i18n: {
      en: {
        quote:
          "He explained everything in Odia. My husband and I both understood, which doesn't usually happen at a hospital. The dietitian came in the same visit and didn't try to sell us anything — she just asked what we ate at home.",
        attribution: "Sunita M. · CKD patient, Sambalpur",
        condition: "CKD management, on diet + medication",
      },
      hi: {
        quote:
          "उन्होंने सब कुछ ओड़िया में समझाया। मेरे पति और मैं दोनों समझे, जो आमतौर पर अस्पताल में नहीं होता। डायटीशियन उसी विज़िट में आईं और हमें कुछ बेचने की कोशिश नहीं की — उन्होंने बस पूछा कि हम घर पर क्या खाते हैं।",
        attribution: "Sunita M. · CKD रोगी, सम्बलपुर",
        condition: "CKD प्रबंधन",
      },
      or: {
        quote:
          "ସେ ସବୁକିଛି ଓଡ଼ିଆରେ ବୁଝାଇଲେ। ମୁଁ ଓ ମୋ ସ୍ୱାମୀ ଦୁହେଁ ବୁଝିଲୁ, ଯାହା ସାଧାରଣତଃ ହସ୍ପିଟାଲରେ ହୁଏ ନାହିଁ। ସେହି ଭ୍ରମଣରେ ଡାୟେଟିସିଆନ ଆସିଲେ ଏବଂ କିଛି ବିକ୍ରୀ କରିବାକୁ ଚେଷ୍ଟା କଲେ ନାହିଁ — କେବଳ ପଚାରିଲେ ଆମେ ଘରେ କ’ଣ ଖାଉ।",
        attribution: "Sunita M. · CKD ରୋଗୀ, ସମ୍ବଲପୁର",
        condition: "CKD ପରିଚାଳନା",
      },
    },
  },
  {
    slug: "rabindra-d-dialysis-followup",
    doctorSlug: "dr-sourav-shristi",
    i18n: {
      en: {
        quote:
          "Six machines, no waiting list. The nurses know me by name. Dr. Shristi himself calls on Wednesdays to ask how my new BP tablet is suiting me — a small thing, but it matters.",
        attribution: "Rabindra D. · Hemodialysis patient, Sambalpur",
        condition: "Maintenance hemodialysis, thrice-weekly",
      },
      hi: {
        quote:
          "छह मशीनें, कोई प्रतीक्षा सूची नहीं। नर्सें मुझे नाम से जानती हैं। डॉ. श्रीस्टी खुद बुधवार को फ़ोन करके पूछते हैं कि मेरी नई BP गोली कैसी लग रही है — छोटी सी बात, पर मायने रखती है।",
        attribution: "Rabindra D. · हेमोडायलिसिस रोगी, सम्बलपुर",
        condition: "रखरखाव हेमोडायलिसिस",
      },
      or: {
        quote:
          "ଛଅଟି ମେସିନ, କୌଣସି ଅପେକ୍ଷା ତାଲିକା ନାହିଁ। ନର୍ସମାନେ ମୋତେ ନାମରେ ଚିହ୍ନନ୍ତି। ଡ. ଶ୍ରୀଷ୍ଟି ନିଜେ ବୁଧବାର ଫୋନ କରନ୍ତି ଯେ ମୋର ନୂଆ BP ଟାବଲେଟ କିପରି ଲାଗୁଛି — ଛୋଟ କଥା, କିନ୍ତୁ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।",
        attribution: "Rabindra D. · ହିମୋଡାୟାଲିସିସ୍ ରୋଗୀ, ସମ୍ବଲପୁର",
        condition: "ରକ୍ଷଣାବେକ୍ଷଣ ହିମୋଡାୟାଲିସିସ୍",
      },
    },
  },
  {
    slug: "pooja-k-calm-second-opinion",
    doctorSlug: "dr-sourav-shristi",
    i18n: {
      en: {
        quote:
          "We came for a second opinion after my mother was told dialysis was the only option. He reviewed everything, ran two more tests, confirmed the diagnosis — and explained why so clearly that we left calm instead of cornered.",
        attribution: "Pooja K. · Daughter of patient, Sambalpur",
        condition: "Mother — pre-dialysis CKD evaluation",
      },
      hi: {
        quote:
          "हम दूसरी राय के लिए आए थे, जब मेरी माँ को बताया गया कि डायलिसिस ही एकमात्र विकल्प है। उन्होंने सब कुछ देखा, दो और परीक्षण किए, निदान की पुष्टि की — और इतनी स्पष्टता से समझाया कि हम घबराए हुए नहीं, शांत होकर लौटे।",
        attribution: "Pooja K. · रोगी की बेटी, सम्बलपुर",
        condition: "माँ — प्री-डायलिसिस CKD मूल्यांकन",
      },
      or: {
        quote:
          "ଆମେ ଦ୍ୱିତୀୟ ମତ ପାଇଁ ଆସିଥିଲୁ ଯେତେବେଳେ ମୋ ମା’ଙ୍କୁ କୁହାଗଲା ଯେ ଡାୟାଲିସିସ୍ ହିଁ ଏକମାତ୍ର ବିକଳ୍ପ। ସେ ସବୁ ସମୀକ୍ଷା କଲେ, ଆଉ ଦୁଇଟି ପରୀକ୍ଷା କଲେ, ନିଦାନ ନିଶ୍ଚିତ କଲେ — ଏବଂ ଏତେ ସ୍ପଷ୍ଟ ଭାବେ ବୁଝାଇଲେ ଯେ ଆମେ ବ୍ୟସ୍ତ ନୁହେଁ, ଶାନ୍ତ ହୋଇ ଫେରିଲୁ।",
        attribution: "Pooja K. · ରୋଗୀଙ୍କ ଝିଅ, ସମ୍ବଲପୁର",
        condition: "ମା’ — ପ୍ରୀ-ଡାୟାଲିସିସ୍ CKD ମୂଲ୍ୟାୟନ",
      },
    },
  },
  {
    slug: "ajay-s-diabetic-kidney",
    doctorSlug: "dr-sourav-shristi",
    i18n: {
      en: {
        quote:
          "I'm twenty-eight. Two doctors said the protein in my urine was nothing. Dr. Shristi sat me down with my reports, showed me what it meant, and started me on ACE inhibitors that same week. My kidney function has been stable for a year and a half since.",
        attribution: "Ajay S. · Type-1 diabetic, Burla",
        condition: "Early diabetic kidney disease, ACE-inhibited",
      },
      hi: {
        quote:
          "मैं अट्ठाईस साल का हूँ। दो डॉक्टरों ने कहा कि मेरे मूत्र में प्रोटीन कुछ नहीं है। डॉ. श्रीस्टी ने मेरी रिपोर्ट्स के साथ बिठाकर समझाया कि इसका मतलब क्या है, और उसी हफ़्ते ACE अवरोधक शुरू कर दिए। तब से डेढ़ साल से मेरी किडनी की कार्यप्रणाली स्थिर है।",
        attribution: "Ajay S. · टाइप-1 मधुमेही, बुर्ला",
        condition: "प्रारंभिक डायबेटिक किडनी रोग",
      },
      or: {
        quote:
          "ମୁଁ ଅଠଇଶ ବର୍ଷର। ଦୁଇଜଣ ଡାକ୍ତର କହିଲେ ଯେ ମୋର ମୂତ୍ରରେ ପ୍ରୋଟିନ କିଛି ନୁହେଁ। ଡ. ଶ୍ରୀଷ୍ଟି ମୋତେ ମୋର ରିପୋର୍ଟ ସହ ବସାଇ ବୁଝାଇଲେ ଯେ ଏହାର ଅର୍ଥ କ’ଣ, ଏବଂ ସେହି ସପ୍ତାହରେ ଏସିଇ ଇନହିବିଟର ଆରମ୍ଭ କଲେ। ସେବେଠାରୁ ଦେଢ଼ ବର୍ଷ ହେଲା ମୋର କିଡନୀ ସ୍ଥିର ଅଛି।",
        attribution: "Ajay S. · ଟାଇପ-1 ମଧୁମେହ, ବୁର୍ଲା",
        condition: "ପ୍ରାରମ୍ଭିକ ଡାଇବେଟିକ୍ କିଡନୀ ରୋଗ",
      },
    },
  },
  {
    slug: "lalita-j-pre-transplant",
    doctorSlug: "dr-sourav-shristi",
    i18n: {
      en: {
        quote:
          "The pre-transplant workup was thorough. He flagged a heart issue my cardiologist hadn't, sorted that out first, and now I'm stable enough to go on the list. He doesn't rush — that's the difference.",
        attribution: "Lalita J. · Pre-transplant patient, Sambalpur",
        condition: "Pre-transplant workup, on the list",
      },
      hi: {
        quote:
          "प्री-ट्रांसप्लांट जाँच विस्तृत थी। उन्होंने एक ऐसी हृदय समस्या पकड़ी जो मेरे कार्डियोलॉजिस्ट को नहीं दिखी थी, पहले उसे ठीक किया, और अब मैं सूची में आने के लिए स्थिर हूँ। वे जल्दबाज़ी नहीं करते — यही फ़र्क है।",
        attribution: "Lalita J. · प्री-ट्रांसप्लांट रोगी, सम्बलपुर",
        condition: "प्री-ट्रांसप्लांट जाँच",
      },
      or: {
        quote:
          "ପ୍ରୀ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ ତଦନ୍ତ ବିସ୍ତୃତ ଥିଲା। ସେ ଏକ ହୃଦୟ ସମସ୍ୟା ଚିହ୍ନଟ କଲେ ଯାହା ମୋର କାର୍ଡିଓଲୋଜିଷ୍ଟ ଚିହ୍ନଟ କରିନଥିଲେ, ପ୍ରଥମେ ତାହାକୁ ସମାଧାନ କଲେ, ଏବଂ ବର୍ତ୍ତମାନ ମୁଁ ତାଲିକାରେ ଯିବାକୁ ସ୍ଥିର। ସେ ଶୀଘ୍ର କରନ୍ତି ନାହିଁ — ଏହାହିଁ ପାର୍ଥକ୍ୟ।",
        attribution: "Lalita J. · ପ୍ରୀ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ ରୋଗୀ, ସମ୍ବଲପୁର",
        condition: "ପ୍ରୀ-ଟ୍ରାନ୍ସପ୍ଲାଣ୍ଟ ତଦନ୍ତ",
      },
    },
  },
];
