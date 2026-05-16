import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { getAllResources } from "@/modules/resources";
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
    path: "/resources",
    title: dict.meta.resources.index.title,
    description: dict.meta.resources.index.description,
  });
}

export default async function ResourcesIndexPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const resources = getAllResources();

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.resources }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.resources.index.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.resources.index.title}</Heading>
          <Lead className="mt-6">{dict.resources.index.lead}</Lead>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2" gap={100}>
          {resources.map((r) => {
            const i = r.i18n[lang];
            return (
              <Link
                key={r.slug}
                href={urlForLocale(lang, `/resources/${r.slug}`)}
                className="group flex flex-col p-7 rounded-[var(--radius-card)] border border-border bg-surface hover:border-primary transition-colors"
              >
                <p className="text-eyebrow text-foreground-muted">
                  {dict.resources.detail.reading_time.replace("{minutes}", String(r.estimatedReadMinutes))}
                </p>
                <Heading as={3} className="mt-3">{i.title}</Heading>
                <p className="text-body text-foreground-muted mt-3">{i.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-small font-medium text-primary-deep">
                  {dict.common.actions.read_guide}
                  <Icon name="arrow-right" size={14} />
                </span>
              </Link>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
