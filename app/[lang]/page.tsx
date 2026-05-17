import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { ServicesStrip } from "@/components/sections/services-strip";
import { StatsStrip } from "@/components/sections/stats-strip";
import { MeetDrShristi } from "@/components/sections/meet-dr-shristi";
import { PatientStories } from "@/components/sections/patient-stories";
import { SpecialtySpotlight } from "@/components/sections/specialty-spotlight";
import { ResearchBand } from "@/components/sections/research-band";
import { InsuranceStrip } from "@/components/sections/insurance-strip";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";

import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale } from "@/lib/locale";
import { baseMetadata } from "@/lib/seo";

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

  return (
    <>
      <Hero locale={lang} home={dict.home} common={dict.common} />
      <MeetDrShristi locale={lang} home={dict.home} common={dict.common} />
      <PatientStories
        locale={lang}
        eyebrowIndex="03"
        copy={{
          eyebrow: dict.home.patient_stories.eyebrow,
          title: dict.home.patient_stories.title,
          aggregate_label: dict.home.patient_stories.aggregate_label,
          aggregate_count_label: dict.home.patient_stories.aggregate_count_label,
          aggregate_cta: dict.home.patient_stories.aggregate_cta,
        }}
        limit={3}
      />
      <ServicesStrip locale={lang} home={dict.home} common={dict.common} />
      <SpecialtySpotlight locale={lang} home={dict.home} />
      <StatsStrip home={dict.home} />
      <ResearchBand locale={lang} home={dict.home} />
      <InsuranceStrip home={dict.home} />
      <CtaBand locale={lang} home={dict.home} common={dict.common} />
      <FaqAccordion
        eyebrow={dict.home.faq.eyebrow}
        index="09"
        title={dict.home.faq.title}
        lead={dict.home.faq.lead}
        items={dict.home.faq.items}
        callout={dict.home.faq.callout}
      />
    </>
  );
}
