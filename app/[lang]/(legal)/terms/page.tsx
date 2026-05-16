import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Prose } from "@/components/primitives/prose";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale } from "@/lib/locale";
import { baseMetadata } from "@/lib/seo";

interface PageProps { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  return baseMetadata({ lang, path: "/terms", title: dict.meta.terms.title, description: dict.meta.terms.description });
}

export default async function TermsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const t = dict.legal.terms;

  return (
    <Section spacing="default">
      <Container size="narrow">
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.legal.terms }]} />
        <Reveal className="mt-8">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{t.title}</Heading>
          <p className="text-small text-foreground-muted mt-3">
            {t.last_updated_label}: {t.last_updated}
          </p>
        </Reveal>
        <Prose className="mt-10">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </Prose>
      </Container>
    </Section>
  );
}
