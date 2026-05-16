import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { INSURANCE_PARTNERS } from "@/content/insurance";
import { site } from "@/content/site";
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
    path: "/insurance",
    title: dict.meta.insurance.title,
    description: dict.meta.insurance.description,
  });
}

export default async function InsurancePage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const insurers = INSURANCE_PARTNERS.filter((p) => p.type === "insurer");
  const tpas = INSURANCE_PARTNERS.filter((p) => p.type === "tpa");

  return (
    <Section spacing="default" surface="sky">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.insurance }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.insurance.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.insurance.title}</Heading>
          <Lead className="mt-6">{dict.insurance.lead}</Lead>
        </Reveal>

        <div className="mt-section grid gap-10 md:grid-cols-2">
          <div>
            <Heading as={2}>{dict.insurance.insurers_title}</Heading>
            <Stagger as="ul" className="mt-4 flex flex-wrap gap-2">
              {insurers.map((p) => (
                <li
                  key={p.name}
                  className="px-3 py-2 rounded-[var(--radius-chip)] bg-surface border border-border text-small font-medium"
                >
                  {p.name}
                  {p.cashlessSupported && (
                    <span className="ml-2 inline-flex items-center gap-1 text-tiny text-success">
                      <Icon name="check" size={12} weight="bold" /> Cashless
                    </span>
                  )}
                </li>
              ))}
            </Stagger>
          </div>
          <div>
            <Heading as={2}>{dict.insurance.tpa_title}</Heading>
            <Stagger as="ul" className="mt-4 flex flex-wrap gap-2">
              {tpas.map((p) => (
                <li
                  key={p.name}
                  className="px-3 py-2 rounded-[var(--radius-chip)] bg-surface border border-border text-small font-medium"
                >
                  {p.name}
                </li>
              ))}
            </Stagger>
          </div>
        </div>

        <Reveal className="mt-section rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
          <Heading as={2}>{dict.insurance.cashless_strip.title}</Heading>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {dict.insurance.cashless_strip.steps.map((step, idx) => (
              <li key={idx} className="flex flex-col gap-3 rounded-[var(--radius-card)] bg-surface-cream p-5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary text-on-primary text-small font-bold">
                  {idx + 1}
                </span>
                <p className="text-small text-on-cream">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Button asChild variant="primary" size="md">
              <a href={`mailto:${site.email.billing}`}>{dict.insurance.contact_billing}</a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
