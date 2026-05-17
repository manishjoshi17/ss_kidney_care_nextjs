import type { Metadata } from "next";

import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { BeanCurveDivider } from "@/components/motion/bean-curve-divider";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { DoctorIdentityCard } from "@/components/sections/doctor-identity-card";
import { ResearchBand } from "@/components/sections/research-band";
import { Icon, type IconName } from "@/components/icons/icon";

// One icon per "How we practice" theme, indexed to the dictionary array.
// Phosphor's `duotone` weight gives the two-tone (multicolor) look the site uses elsewhere.
const HOW_WE_PRACTICE_ICONS: IconName[] = [
  "clock",          // Thirty-minute first consults
  "translate",      // Plain Odia or Hindi at home
  "shield-check",   // No upsell
  "phone",          // Wednesday follow-up calls
  "chat",           // Second opinions welcome
  "heartbeat",      // Multi-organ workup
];

import { ACCREDITATIONS } from "@/content/accreditations";
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
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asSupportedLocale(rawLang);
  const dict = getDictionary(lang);
  const a = dict.about;

  return (
    <>
      <Section spacing="default">
        <Container>
          <Breadcrumbs items={[{ href: urlForLocale(lang, "/"), label: dict.nav.primary.home }, { label: dict.nav.primary.about }]} />

          <Reveal className="mt-8 max-w-3xl">
            <Eyebrow>{a.eyebrow}</Eyebrow>
            <Heading as={1} variant="display" className="mt-4">{a.title}</Heading>
            <Lead className="mt-6">{a.lead}</Lead>
          </Reveal>

          <BeanCurveDivider className="my-section" />

          {/* Doctor identity — moves the trust signal up */}
          <Reveal>
            <DoctorIdentityCard
              locale={lang}
              variant="full"
              copy={{
                chip_dm: "DM Nephrology",
                chip_transplant: "Transplant + Interventional",
                chip_vimsar: "VIMSAR Faculty",
                chip_research: "Published researcher",
                primary_cta: dict.home.hero.primary_cta,
                secondary_cta: dict.home.hero.secondary_cta,
              }}
              whatsappPrefill={dict.home.hero.whatsapp_prefill}
            />
          </Reveal>

          <Reveal className="mt-section max-w-[65ch]">
            <p className="text-body text-foreground-muted">{a.vimsar_paragraph}</p>
          </Reveal>

          <div className="mt-section">
            <Reveal>
              <Heading as={2}>{a.how_we_practice_title}</Heading>
            </Reveal>
            <Stagger as="ul" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0" gap={80}>
              {a.how_we_practice.map((v, idx) => (
                <li key={v.name} className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-border bg-surface p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-[var(--radius-chip)] bg-primary/10 text-primary-deep">
                    <Icon name={HOW_WE_PRACTICE_ICONS[idx] ?? "shield-check"} size={22} weight="duotone" />
                  </span>
                  <div>
                    <p className="text-h4 font-semibold text-foreground">{v.name}</p>
                    <p className="text-body text-foreground-muted mt-2">{v.body}</p>
                  </div>
                </li>
              ))}
            </Stagger>
          </div>

          <Reveal className="mt-section">
            <Heading as={2}>{a.accreditations_title}</Heading>
            <ul className="mt-6 flex flex-wrap gap-3">
              {ACCREDITATIONS.map((ac) => (
                <li key={ac.short} className="rounded-[var(--radius-chip)] bg-primary-soft text-primary-deep px-3 py-2 text-small font-medium">
                  <span className="font-bold">{ac.short}</span> · {ac.name} <span className="text-foreground-muted">({ac.year})</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <ResearchBand locale={lang} home={dict.home} />
    </>
  );
}
