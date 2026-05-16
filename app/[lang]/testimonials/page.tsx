import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { TESTIMONIALS } from "@/content/testimonials";
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
    <Section spacing="default" surface="cream">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.testimonials }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.testimonials.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.testimonials.title}</Heading>
          <Lead className="mt-6">{dict.testimonials.lead}</Lead>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => {
            const i = t.i18n[lang];
            return (
              <figure key={t.slug} className="relative flex flex-col gap-4 p-7 rounded-[var(--radius-card)] bg-surface border border-border-on-cream">
                <Icon name="quote" size={36} weight="duotone" className="text-accent" />
                <blockquote className="text-h3 font-display text-foreground max-w-[42ch]">{i.quote}</blockquote>
                <figcaption className="mt-auto pt-4 border-t border-border-on-cream/60">
                  <p className="text-small font-semibold text-foreground">{i.attribution}</p>
                  <p className="text-small text-foreground-muted">{i.condition} · {t.year}</p>
                </figcaption>
              </figure>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
