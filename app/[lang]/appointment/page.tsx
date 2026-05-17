import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { ContactForm } from "@/modules/contact";

import { site } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale } from "@/lib/locale";
import { baseMetadata } from "@/lib/seo";
import { waHref } from "@/lib/utils";

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

        {/* WhatsApp-primary block per PLAN.md §14 item 4 — brand logo as the headline mark */}
        <Reveal delay={0.1} className="mt-10 rounded-[var(--radius-card)] bg-gradient-cta text-on-forest p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/companies/whatsapp-logo.svg"
            alt="WhatsApp"
            className="block size-14 shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-h3 font-display">{dict.appointment.whatsapp_block.title}</p>
            <p className="text-body mt-2 opacity-90">{dict.appointment.whatsapp_block.body}</p>
          </div>
          <Button asChild variant="on-dark" size="adaptive">
            <a
              href={waHref(site.phoneNumbers.whatsapp, dict.appointment.whatsapp_block.prefill)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.appointment.whatsapp_block.cta}
              <Icon name="arrow-up-right" size={18} />
            </a>
          </Button>
        </Reveal>

        <p className="mt-4 text-small text-foreground-muted">{dict.appointment.opd_timings_note}</p>

        <Reveal delay={0.2} className="mt-10">
          <p className="text-eyebrow text-foreground-muted mb-4">{dict.appointment.or_use_form}</p>
          <div className="rounded-[var(--radius-card)] bg-surface-cream border border-border-on-cream p-6 sm:p-8">
            <ContactForm variant="appointment" defaultReason="appointment" lockReason />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
