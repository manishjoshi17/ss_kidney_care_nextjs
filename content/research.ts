import type { SupportedLocale } from "@/lib/locale";

export type TranslatedString = Record<SupportedLocale, string>;

export interface ResearchPaperI18n {
  /** Plain-English summary used in the Research band card body. */
  summary: string;
  /** "Read the paper" outbound CTA label. */
  cta: string;
}

export interface ResearchPaper {
  slug: string;
  title: string;
  journal: string;
  /** Publication date in human form (e.g., "January 2025"). */
  date: string;
  doi?: string;
  href: string;
  i18n: Record<SupportedLocale, ResearchPaperI18n>;
}

/**
 * Three peer-reviewed papers shipped on the Research & Regional Insight band.
 * All authored or co-authored by Dr. Sourav Shristi (VIMSAR Department of Nephrology).
 * All directly relevant to western Odisha kidney health — see PLAN.md §10.2 (Dunford canvas).
 */
export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    slug: "hirakud-environmental-toxicants",
    title:
      "Prevalence of chronic kidney disease and anemia in Hirakud Command Area, Odisha, India: unveiling the role of environmental toxicants",
    journal: "Journal of Nephrology (Springer)",
    date: "January 2025",
    doi: "10.1007/s40620-024-02169-2",
    href: "https://pubmed.ncbi.nlm.nih.gov/39799544/",
    i18n: {
      en: {
        summary:
          "Across villages in the Hirakud agricultural belt, soil and water samples carried nephrotoxic pesticide residues; cadmium and arsenic exceeded permissible limits. CKD and anaemia were correspondingly higher than the national baseline.",
        cta: "Read the paper",
      },
      hi: {
        summary:
          "हीराकुड कृषि क्षेत्र के गाँवों में मिट्टी और पानी के नमूनों में किडनी के लिए हानिकारक कीटनाशक अवशेष पाए गए; कैडमियम और आर्सेनिक अनुमेय सीमा से अधिक थे। CKD और एनीमिया राष्ट्रीय आधार रेखा से अधिक पाए गए।",
        cta: "पेपर पढ़ें",
      },
      or: {
        summary:
          "ହିରାକୁଦ କୃଷି ଅଞ୍ଚଳର ଗ୍ରାମଗୁଡ଼ିକରେ ମାଟି ଓ ପାଣି ନମୁନାରେ କିଡନୀ ପାଇଁ କ୍ଷତିକାରକ କୀଟନାଶକ ଅବଶିଷ୍ଟ ମିଳିଲା; କ୍ୟାଡମିଅମ ଓ ଆର୍ସେନିକ ଅନୁମୋଦିତ ସୀମା ଅତିକ୍ରମ କଲା। CKD ଓ ଆନେମିଆ ଜାତୀୟ ମାନଠାରୁ ଅଧିକ ଥିଲା।",
        cta: "ପେପର ପଢ଼ନ୍ତୁ",
      },
    },
  },
  {
    slug: "bargarh-ckdu-anemia",
    title:
      "Prevalence of Anemia among Chronic Kidney Disease and Chronic Kidney Disease of unknown Etiology Patients of Bargarh District Odisha",
    journal: "Journal of Clinical Nephrology",
    date: "April 2025",
    doi: "10.29328/journal.jcn.1001155",
    href: "https://www.clinnephrologyjournal.com/journals/jcn/jcn-aid1155.php",
    i18n: {
      en: {
        summary:
          "In Bargarh district — another agricultural community where the source of CKD is often unclear — 89% of CKD-unknown-etiology patients and 86% of CKD patients were anaemic, with microcytic anaemia more common in the unexplained group.",
        cta: "Read the paper",
      },
      hi: {
        summary:
          "बारगढ़ ज़िले में — एक और कृषि समुदाय जहाँ CKD का स्रोत अक्सर अस्पष्ट होता है — 89% CKDu रोगियों और 86% CKD रोगियों में एनीमिया पाया गया।",
        cta: "पेपर पढ़ें",
      },
      or: {
        summary:
          "ବାରଗଡ଼ ଜିଲ୍ଲାରେ — ଆଉ ଏକ କୃଷି ସମ୍ପ୍ରଦାୟ ଯେଉଁଠାରେ CKD ର ଉତ୍ସ ପ୍ରାୟ ସ୍ପଷ୍ଟ ନୁହେଁ — 89% CKDu ରୋଗୀ ଓ 86% CKD ରୋଗୀଙ୍କଠାରେ ଆନେମିଆ ମିଳିଲା।",
        cta: "ପେପର ପଢ଼ନ୍ତୁ",
      },
    },
  },
  {
    slug: "early-diagnosis-ckd-outcomes",
    title:
      "Impact of Early Diagnosis and Management Strategies on Long-Term Outcomes in Chronic Kidney Disease Patients",
    journal: "SSR Institute of International Journal of Life Sciences",
    date: "March 2025",
    href: "https://iijls.com/",
    i18n: {
      en: {
        summary:
          "Early CKD detection plus timely intervention substantially improves kidney and cardiovascular outcomes, and reduces long-term cost-of-care — particularly when paired with structured follow-up.",
        cta: "Read the paper",
      },
      hi: {
        summary:
          "प्रारंभिक CKD पहचान और समय पर हस्तक्षेप किडनी और हृदय-संबंधी परिणामों में पर्याप्त सुधार लाता है, और लंबे समय में देखभाल लागत को कम करता है।",
        cta: "पेपर पढ़ें",
      },
      or: {
        summary:
          "ପ୍ରାରମ୍ଭିକ CKD ଚିହ୍ନଟ ଏବଂ ସମୟାନୁବର୍ତ୍ତୀ ହସ୍ତକ୍ଷେପ କିଡନୀ ଏବଂ ହୃଦ୍-ସମ୍ବନ୍ଧୀୟ ଫଳାଫଳକୁ ଯଥେଷ୍ଟ ଉନ୍ନତ କରେ ଏବଂ ଦୀର୍ଘମିଆଦୀ ଯତ୍ନ ବ୍ୟୟକୁ କମାଏ।",
        cta: "ପେପର ପଢ଼ନ୍ତୁ",
      },
    },
  },
];
