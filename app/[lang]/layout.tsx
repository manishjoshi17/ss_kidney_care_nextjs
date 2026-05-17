import { Noto_Sans, Noto_Sans_Devanagari, Noto_Sans_Oriya, Noto_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "@/app/globals.css";

import { Footer } from "@/components/chrome/footer";
import { Header } from "@/components/chrome/header";
import { StickyQuickActions } from "@/components/chrome/sticky-quick-actions";
import { MotionProvider } from "@/components/motion";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { HospitalJsonLd } from "@/components/seo/hospital-jsonld";
import { getDictionary } from "@/lib/i18n";
import { TranslationsProvider } from "@/lib/i18n-provider";
import { isSupportedLocale, SUPPORTED_LOCALES, type SupportedLocale } from "@/lib/locale";

/**
 * Latin sans — General Sans / Söhne would be ideal (see CLAUDE.md §1)
 * but require licensing. Noto Sans is a reasonable open-source stand-in
 * with full Indic coverage in matching weight/cut. To upgrade later:
 * download woff2 of General Sans Variable into /public/fonts and swap
 * to `localFont`.
 */
const fontSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/**
 * Display serif — Newsreader is a free Production Type face.
 */
const fontDisplay = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-deva",
  display: "swap",
});

const fontOriya = Noto_Sans_Oriya({
  subsets: ["oriya"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oriya",
  display: "swap",
});

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

interface LangLayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang: rawLang } = await params;
  if (!isSupportedLocale(rawLang)) notFound();
  const lang: SupportedLocale = rawLang;
  const dictionary = getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontDevanagari.variable} ${fontOriya.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground">
        <a href="#main" className="skip-link">{dictionary.common.skip_to_content}</a>
        <TranslationsProvider locale={lang} dictionary={dictionary}>
          <MotionProvider>
            <ScrollProgress />
            <Header locale={lang} nav={dictionary.nav} common={dictionary.common} />
            <main id="main" className="flex-1">{children}</main>
            <Footer locale={lang} nav={dictionary.nav} footer={dictionary.footer} common={dictionary.common} />
            <StickyQuickActions />
          </MotionProvider>
        </TranslationsProvider>
        <HospitalJsonLd />
      </body>
    </html>
  );
}
