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
import { TiltCard } from "@/components/motion/tilt-card";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { getAllServices } from "@/modules/services";
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
    path: "/services",
    title: dict.meta.services.index.title,
    description: dict.meta.services.index.description,
  });
}

export default async function ServicesIndexPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const services = getAllServices();

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.services }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.services.index.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.services.index.title}</Heading>
          <Lead className="mt-6">{dict.services.index.lead}</Lead>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" gap={100}>
          {services.map((s) => {
            const i = s.i18n[lang];
            return (
              <TiltCard key={s.slug} maxTilt={4}>
                <Link
                  href={urlForLocale(lang, `/services/${s.slug}`)}
                  className="group flex h-full flex-col p-6 sm:p-7 rounded-[var(--radius-card)] border border-border bg-surface hover:border-primary hover:shadow-[var(--shadow-2)] transition-[border-color,box-shadow]"
                >
                  <div className="size-12 rounded-[var(--radius-chip)] bg-primary-soft text-primary-deep inline-flex items-center justify-center mb-5">
                    <Icon name={s.icon} size={24} weight="duotone" />
                  </div>
                  <Heading as={3}>{i.name}</Heading>
                  <p className="text-body text-foreground-muted mt-3">{i.shortDescription}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-small font-medium text-primary-deep">
                    {dict.common.actions.read_guide}
                    <Icon name="arrow-right" size={16} />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
