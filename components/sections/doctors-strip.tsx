import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

import { getAllDoctors } from "@/modules/doctors";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";

interface DoctorsStripProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
  common: Dictionary["common"];
}

export function DoctorsStrip({ locale, home, common }: DoctorsStripProps) {
  const doctors = getAllDoctors();
  void common;

  return (
    <Section surface="mint">
      <Container>
        <Reveal>
          <Eyebrow index="02">{home.doctors_strip.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.doctors_strip.title}</Heading>
          <p className="text-lead mt-3 max-w-[55ch]">{home.doctors_strip.subhead}</p>
        </Reveal>

        {/* Mobile: horizontal scroll-snap. Desktop: grid. */}
        <Stagger
          className="mt-12 flex sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible"
          gap={100}
        >
          {doctors.map((doctor) => {
            const i = doctor.i18n[locale];
            return (
              <Link
                key={doctor.slug}
                href={urlForLocale(locale, `/doctors/${doctor.slug}`)}
                className="group min-w-[78vw] sm:min-w-0 snap-start flex flex-col p-6 rounded-[var(--radius-card)] bg-surface border border-border-on-mint hover:border-primary transition-colors"
              >
                <div className="relative aspect-[4/5] rounded-[var(--radius-image)] bg-primary-soft overflow-hidden mb-5">
                  {doctor.photo ? (
                    <OptimizedImage
                      src={doctor.photo}
                      alt={i.name}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 78vw"
                      className="object-cover transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary-deep/40">
                      <Icon name="stethoscope" size={64} weight="duotone" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-[var(--duration-base)]" />
                </div>
                <Heading as={3} className="text-h4">{i.name}</Heading>
                <p className="text-small text-foreground-muted mt-1">{i.title}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {i.specialties.slice(0, 2).map((s) => (
                    <Badge key={s} variant="primary">{s}</Badge>
                  ))}
                </div>
                <p className="mt-5 inline-flex items-center gap-1 text-small text-primary-deep group-hover:underline">
                  See profile <Icon name="arrow-right" size={14} />
                </p>
              </Link>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
