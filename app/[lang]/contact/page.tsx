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
import { EmergencyServiceJsonLd } from "@/components/seo/emergency-service-jsonld";

import { site } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale } from "@/lib/locale";
import { baseMetadata } from "@/lib/seo";
import { telHref, waHref } from "@/lib/utils";

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
  const c = dict.contact;
  const burlaDisclaimer = site.consultationPoint.burla.disclaimerFull[lang];

  return (
    <>
      <Section spacing="default">
        <Container>
          <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.contact }]} />

          <Reveal className="mt-8 max-w-3xl">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <Heading as={1} variant="display" className="mt-4">{c.title}</Heading>
            <Lead className="mt-6">{c.lead}</Lead>
          </Reveal>

          <div className="mt-section grid gap-6 lg:grid-cols-3">
            {/* Sambalpur primary */}
            <Reveal className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
              <p className="text-eyebrow text-primary-deep">{c.blocks.primary.label}</p>
              <Heading as={3} className="text-h4 mt-2">{c.blocks.primary.title}</Heading>
              <address className="not-italic text-body text-foreground-muted mt-4 leading-normal">
                {site.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <div className="mt-5 flex flex-col gap-3 text-small">
                <ContactRow icon="phone" label={c.blocks.primary.phone_label}>
                  <a href={telHref(site.phoneNumbers.general)} className="text-foreground hover:underline">{site.phoneNumbers.general}</a>
                </ContactRow>
                <ContactRow icon="whatsapp" label={c.blocks.primary.whatsapp_label}>
                  <a
                    href={waHref(site.phoneNumbers.whatsapp, "Hello, I'd like to send my reports for a review.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    {site.phoneNumbers.whatsapp}
                  </a>
                </ContactRow>
                <ContactRow icon="clock" label={c.blocks.primary.hours_label}>
                  <p className="text-foreground">{site.hours.monday_to_friday}</p>
                  <p className="text-foreground-muted">{site.hours.saturday}</p>
                  <p className="text-foreground-muted">{site.hours.sunday}</p>
                </ContactRow>
              </div>
            </Reveal>

            {/* Burla VIMSAR — secondary with inline full disclaimer */}
            <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-border-on-cream bg-surface-cream p-6">
              <p className="text-eyebrow text-on-cream/65">{c.blocks.burla.label}</p>
              <Heading as={3} className="text-h4 mt-2">{c.blocks.burla.title}</Heading>
              <address className="not-italic text-body text-on-cream mt-4 leading-normal">
                {site.consultationPoint.burla.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <div className="mt-5 text-small">
                <ContactRow icon="phone" label={c.blocks.burla.phone_label} tone="cream">
                  <a href={telHref(site.consultationPoint.burla.phone)} className="text-on-cream hover:underline">{site.consultationPoint.burla.phone}</a>
                </ContactRow>
              </div>
              <p className="text-tiny text-on-cream/70 mt-5 pt-5 border-t border-border-on-cream/60 leading-relaxed">
                {burlaDisclaimer}
              </p>
            </Reveal>

            {/* 24×7 Emergency tertiary — visually distinct */}
            <Reveal delay={0.15} className="rounded-[var(--radius-card)] border-2 border-destructive/30 bg-destructive/10 p-6">
              <p className="text-eyebrow text-destructive">{c.blocks.emergency.label}</p>
              <Heading as={3} className="text-h4 mt-2 text-foreground">{c.blocks.emergency.title}</Heading>
              <div className="mt-5 flex flex-col gap-3 text-small">
                <p className="text-body font-semibold text-foreground">
                  {site.emergencyContact.name}, {site.emergencyContact.qualification}
                </p>
                <a href={telHref(site.emergencyContact.phone)} className="inline-flex items-center gap-2 text-h4 font-display text-destructive hover:underline">
                  <Icon name="phone" size={20} weight="fill" />
                  {site.emergencyContact.phone}
                </a>
              </div>
              <p className="text-tiny text-foreground-muted mt-5 pt-5 border-t border-destructive/20 leading-relaxed">
                {c.blocks.emergency.clarifier}
              </p>
            </Reveal>
          </div>

          {/* Contact form */}
          <Reveal delay={0.2} className="mt-section rounded-[var(--radius-card)] bg-surface-cream border border-border-on-cream p-6 sm:p-8 max-w-3xl">
            <ContactForm />
          </Reveal>
        </Container>
      </Section>

      <EmergencyServiceJsonLd />
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
  tone = "default",
}: {
  icon: "phone" | "whatsapp" | "clock" | "email" | "map";
  label: string;
  children: React.ReactNode;
  tone?: "default" | "cream";
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`size-9 inline-flex shrink-0 items-center justify-center rounded-[var(--radius-chip)] ${tone === "cream" ? "bg-on-cream/10 text-on-cream" : "bg-primary-soft text-primary-deep"}`}>
        <Icon name={icon} size={16} weight="duotone" />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-tiny uppercase tracking-wide ${tone === "cream" ? "text-on-cream/65" : "text-foreground-muted"} mb-0.5`}>{label}</p>
        <div className={`${tone === "cream" ? "text-on-cream" : "text-foreground"}`}>{children}</div>
      </div>
    </div>
  );
}
