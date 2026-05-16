import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

import { TESTIMONIALS } from "@/content/testimonials";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale } from "@/lib/locale";

interface TestimonialsStripProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
}

export function TestimonialsStrip({ locale, home }: TestimonialsStripProps) {
  return (
    <Section surface="cream">
      <Container>
        <Reveal>
          <Eyebrow index="04">{home.testimonials_strip.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.testimonials_strip.title}</Heading>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => {
            const i = t.i18n[locale];
            return (
              <figure
                key={t.slug}
                className="relative flex flex-col gap-5 p-6 sm:p-8 rounded-[var(--radius-card)] bg-surface border border-border-on-cream"
              >
                <Icon name="quote" size={36} weight="duotone" className="text-accent" />
                <blockquote className="text-h4 text-foreground font-display max-w-[40ch]">
                  {i.quote}
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-border-on-cream/60">
                  <p className="text-small font-semibold text-foreground">{i.attribution}</p>
                  <p className="text-small text-foreground-muted mt-0.5">{i.condition}</p>
                  <p className="text-tiny text-foreground-muted/60 mt-0.5">{t.year}</p>
                </figcaption>
                <BeanCurve size={20} className="absolute bottom-4 right-4 text-accent-300 opacity-50" />
              </figure>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
