import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { PatientStories } from "@/components/sections/patient-stories";

import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale } from "@/lib/locale";
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
    path: "/testimonials",
    title: dict.meta.testimonials.title,
    description: dict.meta.testimonials.description,
  });
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <>
      <Section spacing="default">
        <Container>
          <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.testimonials }]} />
        </Container>
      </Section>
      <PatientStories
        locale={lang}
        copy={{
          eyebrow: dict.testimonials.eyebrow,
          title: dict.testimonials.title,
          lead: dict.testimonials.lead,
          aggregate_label: dict.home.patient_stories.aggregate_label,
          aggregate_count_label: dict.home.patient_stories.aggregate_count_label,
          aggregate_cta: dict.home.patient_stories.aggregate_cta,
        }}
        surface="cream"
      />
    </>
  );
}
