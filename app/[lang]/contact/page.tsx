import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
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
import { telHref } from "@/lib/utils";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  return baseMetadata({
    lang,
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.contact }]} />
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow>{dict.contact.eyebrow}</Eyebrow>
            <Heading as={1} variant="display" className="mt-4">{dict.contact.title}</Heading>
            <Lead className="mt-6">{dict.contact.lead}</Lead>

            <div className="mt-10 grid gap-4">
              <ContactInfoRow icon="map" label={dict.common.labels.address}>
                <address className="not-italic">
                  {site.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                </address>
              </ContactInfoRow>
              <ContactInfoRow icon="phone" label={dict.common.labels.phone}>
                <a href={telHref(site.phoneNumbers.general)} className="hover:underline">{site.phoneNumbers.general}</a>
              </ContactInfoRow>
              <ContactInfoRow icon="email" label={dict.common.labels.email}>
                <a href={`mailto:${site.email.general}`} className="hover:underline">{site.email.general}</a>
              </ContactInfoRow>
              <ContactInfoRow icon="clock" label={dict.common.labels.hours}>
                <p>{site.hours.monday_to_friday}</p>
                <p className="text-small text-foreground-muted">{site.hours.saturday}</p>
                <p className="text-small text-foreground-muted">{site.hours.sunday}</p>
              </ContactInfoRow>
              <div className="rounded-[var(--radius-card)] bg-accent-100 text-accent-700 p-4 flex items-start gap-3">
                <Icon name="warning" size={20} weight="fill" />
                <p className="text-small">{dict.contact.emergency_callout} <a href={telHref(site.phoneNumbers.emergency)} className="font-bold underline">{site.phoneNumbers.emergency}</a></p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[var(--radius-card)] bg-surface-cream border border-border-on-cream p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function ContactInfoRow({ icon, label, children }: { icon: "map" | "phone" | "email" | "clock"; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-4">
      <div className="size-10 inline-flex items-center justify-center rounded-[var(--radius-chip)] bg-primary-soft text-primary-deep">
        <Icon name={icon} size={20} weight="duotone" />
      </div>
      <div className="flex-1">
        <p className="text-eyebrow text-foreground-muted mb-1">{label}</p>
        <div className="text-body text-foreground">{children}</div>
      </div>
    </div>
  );
}
