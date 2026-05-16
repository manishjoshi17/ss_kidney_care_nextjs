import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Prose } from "@/components/primitives/prose";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";

import { INSURANCE_PARTNERS } from "@/content/insurance";
import { site } from "@/content/site";
import { getServiceBySlug, getServiceSlugs, getAllServices } from "@/modules/services";
import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale, SUPPORTED_LOCALES } from "@/lib/locale";
import { absoluteUrl, baseMetadata } from "@/lib/seo";
import { waHref } from "@/lib/utils";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getServiceSlugs();
  return SUPPORTED_LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = asSupportedLocale(rawLang);
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const i = service.i18n[lang];
  return baseMetadata({
    lang,
    path: `/services/${slug}`,
    title: `${i.name} — SS Kidney Care`,
    description: i.shortDescription,
  });
}

const JOURNEY_KEYS = ["consult", "investigate", "treat", "follow_up"] as const;

export default async function ServiceDetailPage({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = asSupportedLocale(rawLang);
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const i = service.i18n[lang];
  const dict = getDictionary(lang);
  const cashlessPartners = INSURANCE_PARTNERS.filter((p) => p.cashlessSupported).slice(0, 5);
  const otherServices = getAllServices().filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Section spacing="default">
        <Container>
          <Breadcrumbs
            items={[
              { href: urlForLocale(lang, "/"), label: dict.nav.primary.home },
              { href: urlForLocale(lang, "/services"), label: dict.nav.primary.services },
              { label: i.name },
            ]}
          />
          {service.heroImage && (
            <Reveal className="mt-8">
              <div className="relative overflow-hidden rounded-[var(--radius-card)] sm:rounded-[var(--radius-section)] aspect-[4/5] sm:aspect-[16/9] bg-muted">
                <OptimizedImage
                  src={service.heroImage}
                  alt={service.heroImageAltI18n?.[lang] ?? i.name}
                  fill
                  sizes="(min-width:1280px) 1280px, 100vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-foreground/5 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-[var(--radius-chip)] bg-on-primary/95 text-primary-deep">
                    <Icon name={service.icon} size={26} weight="duotone" />
                  </span>
                  <span className="text-on-navy text-eyebrow bg-foreground/40 backdrop-blur px-3 py-1.5 rounded-[var(--radius-chip)]">
                    {service.category}
                  </span>
                </div>
              </div>
            </Reveal>
          )}
          <div className="mt-block grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>{dict.nav.primary.services}</Eyebrow>
              <Heading as={1} variant="display" className="mt-4">{i.name}</Heading>
              <Lead className="mt-6">{i.shortDescription}</Lead>
              <Prose className="mt-8">
                {i.longDescription.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </Prose>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="adaptive">
                  <Link href={urlForLocale(lang, "/appointment")}>
                    {dict.common.actions.schedule_consultation}
                    <Icon name="arrow-right" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="adaptive">
                  <a
                    href={waHref(site.phoneNumbers.whatsapp, `Hello, I'd like to know more about ${i.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="whatsapp" size={18} weight="fill" />
                    {dict.common.actions.chat_whatsapp}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="sticky top-28 flex flex-col gap-4">
                {i.quickFacts.length > 0 && (
                  <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
                    <p className="text-eyebrow text-foreground-muted">{dict.services.detail.quick_facts_label}</p>
                    <dl className="mt-5 flex flex-col gap-4">
                      {i.quickFacts.map((fact) => (
                        <div key={fact.label} className="flex flex-col gap-1">
                          <dt className="text-tiny uppercase tracking-wide text-foreground-muted">{fact.label}</dt>
                          <dd className="text-body font-medium text-foreground">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
                <div className="rounded-[var(--radius-card)] bg-surface-cream border border-border-on-cream p-6">
                  <p className="text-eyebrow text-on-cream/65">{dict.services.detail.talk_to_us_label}</p>
                  <p className="text-body text-on-cream mt-2">{dict.services.detail.talk_to_us_body}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={`tel:${site.phoneNumbers.appointment.replace(/[^\d+]/g, "")}`}
                      className="inline-flex items-center gap-2 text-h4 font-display text-on-cream hover:text-primary-deep transition-colors"
                    >
                      <Icon name="phone" size={20} weight="fill" />
                      {site.phoneNumbers.appointment}
                    </a>
                    <a
                      href={waHref(site.phoneNumbers.whatsapp, `Hello, I have a question about ${i.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-small text-on-cream/80 hover:text-on-cream transition-colors"
                    >
                      <Icon name="whatsapp" size={16} weight="fill" />
                      {dict.common.actions.chat_whatsapp}
                    </a>
                  </div>
                </div>
                {cashlessPartners.length > 0 && (
                  <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
                    <p className="text-eyebrow text-foreground-muted">{dict.services.detail.cashless_with}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {cashlessPartners.map((p) => (
                        <li key={p.name} className="text-tiny font-medium bg-muted text-foreground px-2.5 py-1 rounded-[var(--radius-chip)]">
                          {p.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* "Your journey" 4-step */}
          <div className="mt-section">
            <Reveal>
              <Eyebrow>{dict.services.detail.journey_eyebrow}</Eyebrow>
              <Heading as={2} className="mt-3">{dict.services.detail.journey_label}</Heading>
            </Reveal>
            <Stagger className="mt-8 grid gap-5 grid-cols-2 md:grid-cols-4" gap={90}>
              {JOURNEY_KEYS.map((key, idx) => (
                <li
                  key={key}
                  className="relative flex flex-col gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-5"
                >
                  <span className="absolute -top-3 left-5 inline-flex size-7 items-center justify-center rounded-full bg-accent text-on-accent text-tiny font-bold">
                    {idx + 1}
                  </span>
                  <BeanCurve size={28} className="text-primary" />
                  <p className="text-h4">{dict.services.detail.journey_steps[key]}</p>
                </li>
              ))}
            </Stagger>
          </div>

          {/* Highlights */}
          <div className="mt-section grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Reveal>
                <Eyebrow>{dict.services.detail.overview_eyebrow}</Eyebrow>
                <Heading as={2} className="mt-3">{dict.services.detail.overview_label}</Heading>
              </Reveal>
            </div>
            <Stagger as="ul" className="grid sm:grid-cols-2 gap-3" gap={70}>
              {i.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-4">
                  <Badge variant="primary" className="mt-0.5">
                    <Icon name="check" size={12} weight="bold" />
                  </Badge>
                  <span className="text-body">{h}</span>
                </li>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      <FaqAccordion title={dict.services.detail.faqs_label} items={i.faqs} />

      <CtaBand locale={lang} home={dict.home} common={dict.common} />

      <Section spacing="default" surface="cream">
        <Container>
          <Heading as={2}>{dict.doctors.detail.see_other}</Heading>
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={urlForLocale(lang, `/services/${s.slug}`)}
                className="group flex flex-col gap-2 rounded-[var(--radius-card)] border border-border-on-cream bg-surface p-5 hover:border-primary transition-colors"
              >
                <p className="text-h4">{s.i18n[lang].name}</p>
                <p className="text-small text-foreground-muted">{s.i18n[lang].shortDescription}</p>
                <span className="text-small text-primary-deep mt-2 inline-flex items-center gap-1">
                  {dict.common.actions.read_guide} <Icon name="arrow-right" size={14} />
                </span>
              </Link>
            ))}
          </Stagger>
        </Container>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: i.name,
          description: i.shortDescription,
          url: absoluteUrl(lang, `/services/${slug}`),
          provider: { "@type": "Hospital", name: site.name, url: absoluteUrl(lang, "/") },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: dict.nav.primary.home, item: absoluteUrl(lang, "/") },
            { "@type": "ListItem", position: 2, name: dict.nav.primary.services, item: absoluteUrl(lang, "/services") },
            { "@type": "ListItem", position: 3, name: i.name, item: absoluteUrl(lang, `/services/${slug}`) },
          ],
        }}
      />
    </>
  );
}
