import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

import { getServiceBySlug } from "@/modules/services";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";

/**
 * The procedures where Dr. Shristi's training is the actual differentiator
 * (per PLAN.md §10.3 Cialdini map — Authority lever placed late in the scroll).
 */
const SPOTLIGHT_SLUGS = [
  "kidney-biopsy",
  "permanent-catheter-insertion",
  "dialysis-catheter-placement",
  "hemodialysis",
  "kidney-transplantation",
  "critical-care-nephrology",
] as const;

interface SpecialtySpotlightProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
}

export function SpecialtySpotlight({ locale, home }: SpecialtySpotlightProps) {
  const items = SPOTLIGHT_SLUGS.map((slug) => getServiceBySlug(slug)).filter(
    (s): s is NonNullable<ReturnType<typeof getServiceBySlug>> => Boolean(s),
  );

  return (
    <Section surface="cream">
      <Container>
        <Reveal className="max-w-[60ch]">
          <Eyebrow index="04">{home.specialty_spotlight.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.specialty_spotlight.title}</Heading>
          <p className="text-lead mt-4">{home.specialty_spotlight.subhead}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={80}>
          {items.map((service) => {
            const i = service.i18n[locale];
            return (
              <Link
                key={service.slug}
                href={urlForLocale(locale, `/services/${service.slug}`)}
                className="group flex flex-col gap-3 rounded-[var(--radius-card)] border border-border-on-cream bg-surface p-6 hover:border-primary transition-colors"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-[var(--radius-chip)] bg-primary/10 text-primary-deep">
                  <Icon name={service.icon} size={22} weight="duotone" />
                </span>
                <Heading as={3} className="text-h4">{i.name}</Heading>
                <p className="text-small text-foreground-muted">{i.shortDescription}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-small text-primary-deep group-hover:underline">
                  Read more <Icon name="arrow-right" size={14} />
                </span>
              </Link>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
