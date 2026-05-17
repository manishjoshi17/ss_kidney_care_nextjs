"use client";

import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Float } from "@/components/motion/float";
import { Magnetic } from "@/components/motion/magnetic";
import { Sequence, SequenceStep } from "@/components/motion/sequence";
import { TextReveal } from "@/components/motion/text-reveal";
import { DoctorIdentityCard } from "@/components/sections/doctor-identity-card";
import { StarRating } from "@/components/sections/star-rating";

import { drSouravShristi } from "@/content/doctors/dr-sourav-shristi";
import { site } from "@/content/site";
import { TESTIMONIALS_AGGREGATE } from "@/content/testimonials";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { telHref, waHref } from "@/lib/utils";

interface HeroProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
  common: Dictionary["common"];
}

export function Hero({ locale, home, common }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-hero with-grain"
      aria-labelledby="hero-title"
    >
      {/* Decorative floating bean curves */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Float amplitude={14} duration={9} className="absolute -left-12 top-12 text-primary-200/60">
          <BeanCurve size={180} />
        </Float>
        <Float amplitude={10} duration={11} delay={1.2} className="absolute right-8 top-32 text-accent-200/60">
          <BeanCurve size={140} />
        </Float>
        <Float amplitude={18} duration={13} delay={0.6} className="absolute -right-16 bottom-16 text-primary-300/40">
          <BeanCurve size={240} />
        </Float>
      </div>

      <Container className="relative py-section">
        <Sequence className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SequenceStep>
              <Eyebrow index="01">{home.hero.eyebrow}</Eyebrow>
            </SequenceStep>
            <SequenceStep>
              <h1 id="hero-title" className="text-display mt-5 max-w-[20ch]">
                <TextReveal as="span" text={home.hero.title} mode="words" delay={0.2} />
              </h1>
            </SequenceStep>
            <SequenceStep delay={0.4}>
              <p className="font-display text-h3 text-primary-deep mt-4 max-w-[40ch]">
                {home.hero.kicker}
              </p>
            </SequenceStep>
            <SequenceStep delay={0.5}>
              <p className="text-lead mt-6 max-w-[50ch]">{home.hero.lead}</p>
            </SequenceStep>
            <SequenceStep delay={0.7}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic strength={10}>
                  <Button asChild variant="accent" size="adaptive">
                    <a
                      href={waHref(site.phoneNumbers.whatsapp, home.hero.whatsapp_prefill)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="whatsapp" size={18} weight="fill" />
                      {home.hero.primary_cta}
                    </a>
                  </Button>
                </Magnetic>
                <Button asChild variant="outline" size="adaptive">
                  <a href={telHref(site.phoneNumbers.general)}>
                    <Icon name="phone" size={18} />
                    {home.hero.secondary_cta}
                  </a>
                </Button>
                <Link
                  href="#patient-stories"
                  className="text-small text-primary-deep hover:underline inline-flex items-center gap-1 ml-1"
                >
                  {home.hero.transitional_cta} <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </SequenceStep>
            <SequenceStep delay={0.9}>
              <a
                href={TESTIMONIALS_AGGREGATE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-2 max-w-full text-small text-foreground-muted hover:text-foreground leading-none"
              >
                <StarRating value={TESTIMONIALS_AGGREGATE.rating} size={16} />
                <span className="font-semibold text-foreground">{TESTIMONIALS_AGGREGATE.rating}</span>
                <span>on</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TESTIMONIALS_AGGREGATE.logoSrc}
                  alt={TESTIMONIALS_AGGREGATE.source}
                  className="block h-5 w-auto shrink-0"
                />
                <span>· {TESTIMONIALS_AGGREGATE.count}+ reviews</span>
                <Icon name="arrow-up-right" size={14} />
              </a>
            </SequenceStep>
          </div>

          {/* Hero visual — portrait + identity card */}
          <div className="lg:col-span-5 relative">
            <SequenceStep delay={0.6} className="relative lg:translate-x-6 flex flex-col gap-5">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[var(--radius-section)] bg-surface border border-border shadow-[var(--shadow-3)] overflow-hidden">
                {drSouravShristi.photo && (
                  <OptimizedImage
                    src={drSouravShristi.photo}
                    alt={drSouravShristi.i18n[locale].name}
                    fill
                    priority
                    sizes="(min-width:1024px) 42vw, 100vw"
                    className="object-cover object-center"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/15 to-transparent pointer-events-none" />
              </div>
              <DoctorIdentityCard
                locale={locale}
                variant="compact"
                copy={{
                  chip_dm: common.doctor_chips.dm,
                  chip_transplant: common.doctor_chips.transplant,
                  chip_vimsar: common.doctor_chips.vimsar,
                  chip_research: common.doctor_chips.research,
                  primary_cta: home.hero.primary_cta,
                  secondary_cta: home.hero.secondary_cta,
                }}
                whatsappPrefill={home.hero.whatsapp_prefill}
              />
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 size-32 rounded-full bg-accent/20 blur-3xl pointer-events-none"
              />
            </SequenceStep>
          </div>
        </Sequence>
      </Container>

      {/* Scroll cue */}
      <div className="relative pb-8 flex justify-center motion-reduce:hidden">
        <div
          aria-hidden
          className="text-foreground-muted animate-bounce"
          style={{ animationDuration: "2.4s" }}
        >
          <Icon name="caret-down" size={22} />
        </div>
      </div>
    </section>
  );
}
