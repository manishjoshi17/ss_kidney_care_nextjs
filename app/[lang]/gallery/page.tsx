import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { PhotoGrid } from "@/components/media/photo-grid";

import { GALLERY } from "@/content/gallery";
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
    path: "/gallery",
    title: dict.meta.gallery.title,
    description: dict.meta.gallery.description,
  });
}

export default async function GalleryPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);

  return (
    <Section spacing="default">
      <Container>
        <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.secondary.gallery }]} />
        <Reveal className="mt-8 max-w-3xl">
          <Eyebrow>{dict.gallery.eyebrow}</Eyebrow>
          <Heading as={1} variant="display" className="mt-4">{dict.gallery.title}</Heading>
          <Lead className="mt-6">{dict.gallery.lead}</Lead>
        </Reveal>

        <div className="mt-12">
          <PhotoGrid photos={GALLERY} locale={lang} />
        </div>
      </Container>
    </Section>
  );
}
