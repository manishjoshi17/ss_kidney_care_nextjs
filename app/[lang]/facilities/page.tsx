import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { FACILITIES } from "@/content/facilities";
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
    path: "/facilities",
    title: dict.meta.facilities.title,
    description: dict.meta.facilities.description,
  });
}

export default async function FacilitiesPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.facilities }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.facilities.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.facilities.title}</Heading>
          <Lead className="mt-6">{dict.facilities.lead}</Lead>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" gap={120}>
          {FACILITIES.map((f) => {
            const i = f.i18n[lang];
            return (
              <article key={f.slug} className="flex flex-col rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
                {f.photo && (
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
                    <OptimizedImage
                      src={f.photo}
                      alt={f.photoAlt?.[lang] ?? i.name}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 inline-flex size-10 items-center justify-center rounded-[var(--radius-chip)] bg-on-primary/95 text-primary-deep shadow-[var(--shadow-1)]">
                      <Icon name={f.icon} size={20} weight="duotone" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col p-6">
                  <Heading as={3}>{i.name}</Heading>
                  <p className="text-body text-foreground-muted mt-3">{i.description}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {i.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-small text-foreground">
                        <Icon name="check" size={16} weight="bold" className="mt-0.5 text-primary" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
