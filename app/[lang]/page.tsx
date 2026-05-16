import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { ServicesStrip } from "@/components/sections/services-strip";
import { StatsStrip } from "@/components/sections/stats-strip";
import { DoctorsStrip } from "@/components/sections/doctors-strip";
import { TestimonialsStrip } from "@/components/sections/testimonials-strip";
import { InsuranceStrip } from "@/components/sections/insurance-strip";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";

import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale } from "@/lib/locale";
import { baseMetadata } from "@/lib/seo";
import { getAllServices } from "@/modules/services";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  return baseMetadata({
    lang,
    path: "/",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  // Build FAQ from the first service for the home page accordion.
  const firstService = getAllServices()[0];
  const faqItems = firstService?.i18n[lang].faqs ?? [];

  return (
    <>
      <Hero locale={lang} home={dict.home} common={dict.common} />
      <ServicesStrip locale={lang} home={dict.home} common={dict.common} />
      <StatsStrip home={dict.home} />
      <DoctorsStrip locale={lang} home={dict.home} common={dict.common} />
      <TestimonialsStrip locale={lang} home={dict.home} />
      <InsuranceStrip home={dict.home} />
      <CtaBand locale={lang} home={dict.home} common={dict.common} />
      <FaqAccordion
        eyebrow={dict.home.faq.eyebrow}
        index="06"
        title={dict.home.faq.title}
        items={faqItems}
      />
    </>
  );
}
