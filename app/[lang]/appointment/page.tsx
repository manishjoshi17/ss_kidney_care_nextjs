import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { ContactForm } from "@/modules/contact";

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
    path: "/appointment",
    title: dict.meta.appointment.title,
    description: dict.meta.appointment.description,
  });
}

export default async function AppointmentPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container size="narrow">
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.appointment }]} />
        <Reveal className="mt-8">
          <Eyebrow>{dict.appointment.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.appointment.title}</Heading>
          <Lead className="mt-6">{dict.appointment.lead}</Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-[var(--radius-card)] bg-surface-cream border border-border-on-cream p-6 sm:p-8">
          <ContactForm variant="appointment" defaultReason="appointment" lockReason />
        </Reveal>
      </Container>
    </Section>
  );
}
