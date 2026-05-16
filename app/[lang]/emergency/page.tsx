import type { Metadata } from "next";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
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
import { telHref } from "@/lib/utils";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  return baseMetadata({
    lang,
    path: "/emergency",
    title: dict.meta.emergency.title,
    description: dict.meta.emergency.description,
  });
}

export default async function EmergencyPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.emergency }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.emergency.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.emergency.title}</Heading>
          <Lead className="mt-6">{dict.emergency.lead}</Lead>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-[var(--radius-card)] bg-accent text-on-accent p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <Icon name="phone" size={64} weight="fill" />
          <div className="flex-1">
            <p className="text-tiny uppercase tracking-wide">{dict.common.actions.call_24x7}</p>
            <p className="text-h1 font-display mt-1">
              <a href={telHref(site.phoneNumbers.emergency)} className="hover:underline">
                {site.phoneNumbers.emergency}
              </a>
            </p>
            <p className="text-body mt-2 opacity-90">A nephrology nurse will answer.</p>
          </div>
          <Button asChild variant="on-dark" size="adaptive">
            <a href={telHref(site.phoneNumbers.emergency)}>{dict.emergency.call_now}</a>
          </Button>
        </Reveal>

        <div className="mt-section grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Heading as={2}>{dict.emergency.ambulance_title}</Heading>
            <p className="text-body text-foreground-muted mt-3 max-w-[55ch]">{dict.emergency.ambulance_body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Heading as={2}>{dict.emergency.before_help_title}</Heading>
            <Stagger as="ul" className="mt-4 flex flex-col gap-3">
              {dict.emergency.before_help.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-4">
                  <span className="size-7 inline-flex items-center justify-center rounded-full bg-primary text-on-primary text-tiny font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
