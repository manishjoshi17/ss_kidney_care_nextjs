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
      name: "डॉ. सौरव श्रीस्टी",
      title: "Consultant Nephrologist, Transplant Physician & Interventional Nephrologist",
      bio: [
        "Sourav Shristi is one of a small number of DM Nephrology–trained physicians in Odisha and the only one running a full-time private nephrology practice in Sambalpur. He earned his DM in Nephrology and teaches at VIMSAR Burla, where he sees public-hospital cases alongside his clinic practice.",
        "Day to day, he treats chronic kidney disease, diabetic kidney disease, acute kidney injury, glomerulonephritis, hypertension-related kidney problems, and kidney stones. He performs kidney biopsies, places permanent and short-term dialysis catheters, manages hemodialysis on the clinic's six-machine floor, and handles the full pre- and post-transplant workup for patients planning a kidney transplant.",
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
    or: {
      name: "ଡ. ସୌରଭ ଶ୍ରୀଷ୍ଟି",
      title: "Consultant Nephrologist, Transplant Physician & Interventional Nephrologist",
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
