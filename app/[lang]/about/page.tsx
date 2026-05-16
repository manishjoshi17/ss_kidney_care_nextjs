import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { BeanCurveDivider } from "@/components/motion/bean-curve-divider";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { ACCREDITATIONS } from "@/content/accreditations";
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
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const a = dict.about;

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.about }]} />

        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{a.title}</Heading>
          <Lead className="mt-6">{a.lead}</Lead>
        </Reveal>

        <BeanCurveDivider className="my-section" />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Heading as={2}>{a.mission_title}</Heading>
            <p className="text-body text-foreground-muted mt-4 max-w-[55ch]">{a.mission_body}</p>
          </Reveal>
          <div>
            <Reveal>
              <Heading as={2}>{a.values_title}</Heading>
            </Reveal>
            <Stagger className="mt-6 flex flex-col gap-4" gap={80}>
              {a.values.map((v) => (
                <li key={v.name} className="rounded-[var(--radius-card)] border border-border bg-surface p-5">
                  <p className="text-h4 font-semibold text-foreground">{v.name}</p>
                  <p className="text-body text-foreground-muted mt-1">{v.body}</p>
                </li>
              ))}
            </Stagger>
          </div>
        </div>

        <Reveal className="mt-section">
          <Heading as={2}>{a.accreditations_title}</Heading>
          <ul className="mt-6 flex flex-wrap gap-3">
            {ACCREDITATIONS.map((ac) => (
              <li key={ac.short} className="rounded-[var(--radius-chip)] bg-primary-soft text-primary-deep px-3 py-2 text-small font-medium">
                <span className="font-bold">{ac.short}</span> · {ac.name} <span className="text-foreground-muted">({ac.year})</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
