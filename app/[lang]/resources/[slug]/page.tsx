import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Prose } from "@/components/primitives/prose";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";

import { getResourceBySlug, getResourceSlugs, getAllResources } from "@/modules/resources";
import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale, SUPPORTED_LOCALES } from "@/lib/locale";
import { absoluteUrl, baseMetadata } from "@/lib/seo";
import Link from "next/link";
import { Icon } from "@/components/icons/icon";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export function generateStaticParams() {
  const slugs = getResourceSlugs();
  return SUPPORTED_LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = asSupportedLocale(rawLang);
  const r = getResourceBySlug(slug);
  if (!r) return {};
  const i = r.i18n[lang];
  return baseMetadata({
    lang,
    path: `/resources/${slug}`,
    title: `${i.title} — SS Kidney Care`,
    description: i.summary,
  });
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = asSupportedLocale(rawLang);
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();
  const i = resource.i18n[lang];
  const dict = getDictionary(lang);
  const others = getAllResources().filter((r) => r.slug !== slug).slice(0, 2);

  return (
    <>
      <Section spacing="default">
        <Container size="narrow">
          <Breadcrumbs
            items={[
              { href: urlForLocale(lang, "/"), label: dict.nav.primary.home },
              { href: urlForLocale(lang, "/resources"), label: dict.nav.primary.resources },
              { label: i.title },
            ]}
          />

          <Reveal className="mt-8">
            <Eyebrow>{resource.category}</Eyebrow>
            <Heading as={1} variant="display" className="mt-4">{i.title}</Heading>
            <Lead className="mt-6">{i.summary}</Lead>
            <p className="text-small text-foreground-muted mt-4">
              {dict.resources.detail.reading_time.replace("{minutes}", String(resource.estimatedReadMinutes))}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Prose className="mt-10">
              {i.body.map((p, idx) => <p key={idx}>{p}</p>)}
              {i.sections.map((s, idx) => (
                <section key={idx}>
                  <h2>{s.heading}</h2>
                  <p>{s.body}</p>
                </section>
              ))}
            </Prose>
          </Reveal>

          {others.length > 0 && (
            <div className="mt-section">
              <Heading as={2} className="text-h3">{dict.resources.detail.next_read}</Heading>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {others.map((r) => {
                  const oi = r.i18n[lang];
                  return (
                    <Link
                      key={r.slug}
                      href={urlForLocale(lang, `/resources/${r.slug}`)}
                      className="group flex flex-col p-5 rounded-[var(--radius-card)] border border-border bg-surface hover:border-primary transition-colors"
                    >
                      <p className="text-h4">{oi.title}</p>
                      <p className="text-small text-foreground-muted mt-2 line-clamp-2">{oi.summary}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-small text-primary-deep">
                        {dict.common.actions.read_guide} <Icon name="arrow-right" size={14} />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: i.title,
          description: i.summary,
          datePublished: resource.publishedDate,
          dateModified: resource.updatedDate ?? resource.publishedDate,
          author: { "@type": "Organization", name: "SS Kidney Care" },
          publisher: { "@type": "Organization", name: "SS Kidney Care", url: absoluteUrl(lang, "/") },
        }}
      />
    </>
  );
}
