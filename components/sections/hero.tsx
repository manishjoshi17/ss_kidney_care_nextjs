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

import { site } from "@/content/site";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";

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
              <p className="font-display text-h2 text-primary-deep mt-4 max-w-[24ch]">
                {home.hero.brand_phrase}
              </p>
            </SequenceStep>
            <SequenceStep delay={0.5}>
              <p className="text-lead mt-6 max-w-[50ch]">{home.hero.subhead}</p>
            </SequenceStep>
            <SequenceStep delay={0.7}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic strength={10}>
                  <Button asChild variant="accent" size="adaptive">
                    <Link href={urlForLocale(locale, "/appointment")}>
                      {common.actions.schedule_consultation}
                      <Icon name="arrow-right" size={18} />
                    </Link>
                  </Button>
                </Magnetic>
                <Button asChild variant="outline" size="adaptive">
                  <Link href={urlForLocale(locale, "/services")}>{common.actions.find_care_plan}</Link>
                </Button>
              </div>
            </SequenceStep>
            <SequenceStep delay={0.9}>
              <a
                href={`tel:${site.phoneNumbers.appointment.replace(/[^\d+]/g, "")}`}
                className="mt-8 inline-flex items-center gap-2 text-small text-foreground-muted hover:text-foreground"
              >
                <Icon name="phone" size={16} />
                {common.labels.phone}: <span className="font-semibold text-foreground">{site.phoneNumbers.appointment}</span>
              </a>
            </SequenceStep>
          </div>

          {/* Hero visual — real photo bleed with bean-curve overlay */}
          <div className="lg:col-span-5 relative">
            <SequenceStep delay={0.6} className="relative lg:translate-x-6">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-[var(--radius-section)] bg-surface border border-border shadow-[var(--shadow-3)] overflow-hidden">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85"
                  alt="A consultant nephrologist at SS Kidney Care"
                  fill
                  priority
                  sizes="(min-width:1024px) 42vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/15 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 flex items-center gap-3 rounded-[var(--radius-card)] bg-on-primary/95 backdrop-blur px-4 py-3">
                  <BeanCurve size={28} className="text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-tiny uppercase tracking-wide text-foreground-muted">{home.stats.title}</p>
                    <p className="text-small font-semibold text-foreground truncate">{home.cta_band.phrase}</p>
                  </div>
                </div>
              </div>
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
