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
  return baseMetadata({ lang, path: "/disclaimer", title: dict.meta.disclaimer.title, description: dict.meta.disclaimer.description });
}

export default async function DisclaimerPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const d = dict.legal.disclaimer;

  return (
    <Section spacing="default">
      <Container size="narrow">
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.legal.disclaimer }]} />
        <Reveal className="mt-8">
          <Eyebrow>{d.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{d.title}</Heading>
        </Reveal>
        <Prose className="mt-10">
          <p>{d.body}</p>
        </Prose>
      </Container>
    </Section>
  );
}
