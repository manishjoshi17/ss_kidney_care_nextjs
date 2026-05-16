import type { SupportedLocale } from "@/lib/locale";

export type GalleryCategory = "facility" | "staff" | "events" | "equipment";

export interface GalleryPhoto {
  src: string;
  alt: Record<SupportedLocale, string>;
  category: GalleryCategory;
  width: number;
  height: number;
}

/**
 * Replace these with your own photography. Current entries are licensed
 * Unsplash photos used as placeholders that fit the medical / hospital theme.
 */
export const GALLERY: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "Dialysis floor with reclining chairs and machines",
      hi: "आरामदायक कुर्सियों के साथ डायलिसिस फ़्लोर",
      or: "Dialysis floor",
    },
    category: "facility",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "OPD waiting area with daylight from large windows",
      hi: "बड़ी खिड़कियों से रोशनी आता हुआ OPD प्रतीक्षा क्षेत्र",
      or: "OPD waiting area",
    },
    category: "facility",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "Consultation room",
      hi: "परामर्श कक्ष",
      or: "Consultation room",
    },
    category: "facility",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "A nephrologist with a patient during a routine review",
      hi: "नियमित समीक्षा के दौरान नेफ्रोलॉजिस्ट और मरीज़",
      or: "A nephrologist with a patient",
    },
    category: "staff",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "Medical equipment in use",
      hi: "उपयोग में चिकित्सा उपकरण",
      or: "Medical equipment in use",
    },
    category: "equipment",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "In-house biochemistry lab",
      hi: "इन-हाउस बायोकेमिस्ट्री लैब",
      or: "In-house biochemistry lab",
    },
    category: "equipment",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "World Kidney Day awareness session",
      hi: "विश्व किडनी दिवस जागरूकता कार्यक्रम",
      or: "World Kidney Day awareness session",
    },
    category: "events",
    width: 1500,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1500&q=80",
    alt: {
      en: "Consultant nephrologist with a patient's family",
      hi: "मरीज़ के परिवार के साथ नेफ्रोलॉजिस्ट",
      or: "Consultant nephrologist with a patient's family",
    },
    category: "staff",
    width: 1500,
    height: 1000,
  },
];
