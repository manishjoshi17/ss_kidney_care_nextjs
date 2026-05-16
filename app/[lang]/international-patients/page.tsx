import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";

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
    path: "/international-patients",
    title: dict.meta.international_patients.title,
    description: dict.meta.international_patients.description,
  });
}

export default async function InternationalPatientsPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.international }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.international.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.international.title}</Heading>
          <Lead className="mt-6">{dict.international.lead}</Lead>
        </Reveal>

        <div className="mt-section">
          <Heading as={2}>{dict.international.what_we_handle_title}</Heading>
          <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.international.what_we_handle.map((item) => (
              <article key={item.name} className="flex flex-col gap-3 p-5 rounded-[var(--radius-card)] border border-border bg-surface">
                <Icon name="translate" size={28} weight="duotone" className="text-primary" />
                <Heading as={3} className="text-h4">{item.name}</Heading>
                <p className="text-small text-foreground-muted">{item.body}</p>
              </article>
            ))}
          </Stagger>
        </div>

        <div className="mt-section grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <Heading as={2}>{dict.international.languages_title}</Heading>
            <div className="mt-4 flex flex-wrap gap-2">
              {site.international.languagesForCoordination.map((l) => (
                <Badge key={l} variant="primary">{l}</Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-border bg-surface-cream p-6">
            <p className="text-eyebrow text-on-cream/65 mb-3">{dict.common.actions.talk_to_nephrologist}</p>
            <Button asChild variant="primary" size="adaptive">
              <a href={`mailto:${site.email.international}`}>
                {dict.international.contact_coordinator}
                <Icon name="arrow-right" size={18} />
              </a>
            </Button>
            <p className="text-small text-on-cream/85 mt-3">{site.email.international}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
