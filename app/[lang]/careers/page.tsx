import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

import { CAREERS } from "@/content/careers";
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
    path: "/careers",
    title: dict.meta.careers.title,
    description: dict.meta.careers.description,
  });
}

export default async function CareersPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.careers }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.careers.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.careers.title}</Heading>
          <Lead className="mt-6">{dict.careers.lead}</Lead>
        </Reveal>

        <div className="mt-section">
          <Heading as={2}>{dict.careers.open_roles_title}</Heading>
          {CAREERS.length === 0 ? (
            <p className="mt-4 text-body text-foreground-muted">{dict.careers.no_open_roles}</p>
          ) : (
            <Stagger className="mt-6 grid gap-4 sm:grid-cols-2" gap={100}>
              {CAREERS.map((c) => {
                const i = c.i18n[lang];
                return (
                  <article key={c.slug} className="flex flex-col gap-3 p-6 rounded-[var(--radius-card)] border border-border bg-surface">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="primary">{i.team}</Badge>
                      <Badge variant="outline">{c.type}</Badge>
                      <Badge variant="outline">{c.location}</Badge>
                    </div>
                    <Heading as={3} className="text-h4">{i.title}</Heading>
                    <p className="text-small text-foreground-muted">{i.summary}</p>
                  </article>
                );
              })}
            </Stagger>
          )}
        </div>

        <div className="mt-section grid gap-10 md:grid-cols-2">
          <Reveal>
            <Heading as={2}>{dict.careers.what_we_look_for_title}</Heading>
            <ul className="mt-6 flex flex-col gap-3">
              {dict.careers.what_we_look_for.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-body">
                  <Icon name="check" size={20} weight="bold" className="text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[var(--radius-card)] bg-surface-cream border border-border-on-cream p-6 sm:p-8">
            <Heading as={2}>{dict.careers.how_to_apply_title}</Heading>
            <p className="text-body text-on-cream mt-4">
              {dict.careers.how_to_apply_body.replace("{email}", site.email.hr)}
            </p>
            <Button asChild variant="primary" size="md" className="mt-6">
              <a href={`mailto:${site.email.hr}`}>{site.email.hr}</a>
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
