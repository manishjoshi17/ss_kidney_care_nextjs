import type { SupportedLocale } from "@/lib/locale";

export interface TestimonialI18n {
  quote: string;
  attribution: string;
  condition: string;
}

export interface Testimonial {
  slug: string;
  doctorSlug?: string;
  year: number;
  photo?: string;
  i18n: Record<SupportedLocale, TestimonialI18n>;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "mr-bhattacharya",
    doctorSlug: "dr-suresh-patnaik",
    year: 2024,
    i18n: {
      en: {
        quote: "I came scared after seeing my creatinine. Dr. Patnaik sat with me for thirty minutes and explained what each number meant. I left with a plan I could follow.",
        attribution: "Mr. R. Bhattacharya",
        condition: "CKD stage 3, managed with diet + medication",
      },
      hi: {
        quote: "मैं अपनी क्रिएटिनिन देखकर डर गया था। डॉ. पटनायक ने तीस मिनट बैठकर मुझे हर संख्या का मतलब समझाया।",
        attribution: "श्री आर. भट्टाचार्य",
        condition: "सीकेडी चरण 3",
      },
      or: {
        quote: "Dr. Patnaik explained what each number meant. I left with a plan I could follow.",
        attribution: "Mr. R. Bhattacharya",
        condition: "CKD stage 3",
      },
    },
  },
  {
    slug: "mrs-pradhan",
    doctorSlug: "dr-rakesh-jena",
    year: 2025,
    i18n: {
      en: {
        quote: "My daughter donated. We were anxious for months, but the transplant team made the waiting bearable. Year two and both of us are well.",
        attribution: "Mrs. S. Pradhan",
        condition: "Living-donor kidney transplant, 2024",
      },
      hi: {
        quote: "मेरी बेटी ने दान किया। हम महीनों चिंतित थे, लेकिन ट्रांसप्लांट टीम ने प्रतीक्षा को सहनीय बनाया।",
        attribution: "श्रीमती एस. प्रधान",
        condition: "जीवित-दाता किडनी प्रत्यारोपण, 2024",
      },
      or: {
        quote: "My daughter donated. The transplant team made the waiting bearable.",
        attribution: "Mrs. S. Pradhan",
        condition: "Living-donor transplant, 2024",
      },
    },
  },
];
