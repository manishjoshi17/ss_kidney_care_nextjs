import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { getAllDoctors } from "@/modules/doctors";
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
    path: "/doctors",
    title: dict.meta.doctors.index.title,
    description: dict.meta.doctors.index.description,
  });
}

export default async function DoctorsIndexPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const doctors = getAllDoctors();

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.doctors }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.doctors.index.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.doctors.index.title}</Heading>
          <Lead className="mt-6">{dict.doctors.index.lead}</Lead>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" gap={100}>
          {doctors.map((d) => {
            const i = d.i18n[lang];
            return (
              <Link
                key={d.slug}
                href={urlForLocale(lang, `/doctors/${d.slug}`)}
                className="group flex flex-col rounded-[var(--radius-card)] border border-border bg-surface p-6 hover:border-primary transition-colors"
              >
                <div className="relative aspect-[4/5] rounded-[var(--radius-image)] bg-primary-soft overflow-hidden">
                  {d.photo ? (
                    <OptimizedImage
                      src={d.photo}
                      alt={i.name}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)] group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary-deep/40">
                      <Icon name="stethoscope" size={64} weight="duotone" />
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-900/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-base)]" />
                </div>
                <Heading as={3} className="mt-5">{i.name}</Heading>
                <p className="text-small text-foreground-muted mt-1">{i.title}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {i.specialties.map((s) => (
                    <Badge key={s} variant="primary">{s}</Badge>
                  ))}
                </div>
              </Link>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
