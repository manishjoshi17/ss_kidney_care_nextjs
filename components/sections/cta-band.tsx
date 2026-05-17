import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

import { site } from "@/content/site";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { telHref } from "@/lib/utils";

interface CtaBandProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
  common: Dictionary["common"];
}

export function CtaBand({ locale, home, common }: CtaBandProps) {
  return (
    <Section surface="default" spacing="default">
      <Container>
        <div className="relative rounded-[var(--radius-section)] bg-gradient-cta overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <Parallax speed={-0.15} className="absolute -right-12 top-4 text-accent-300/30">
              <BeanCurve size={300} />
            </Parallax>
          </div>
          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
            <Reveal>
              <p className="text-eyebrow text-on-forest/65">{home.cta_band.phrase}</p>
              <Heading as={2} variant="h1" className="text-on-forest mt-3">{home.cta_band.title}</Heading>
              <p className="text-lead text-on-forest/85 mt-4 max-w-[50ch]">{home.cta_band.subhead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <Button asChild variant="accent" size="adaptive">
                    <Link href={urlForLocale(locale, "/appointment")}>
                      {common.actions.schedule_consultation}
                      <Icon name="arrow-right" size={18} />
                    </Link>
                  </Button>
                </Magnetic>
                <Button asChild variant="on-dark" size="adaptive">
                  <Link href={urlForLocale(locale, "/contact")}>{common.actions.talk_to_nephrologist}</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="text-on-forest">
              <div className="rounded-[var(--radius-card)] border border-on-forest/15 bg-on-forest/10 p-5">
                <p className="text-tiny uppercase tracking-wide text-on-forest/65 mb-2">{common.actions.call_24x7}</p>
                <a
                  href={telHref(site.phoneNumbers.emergency)}
                  className="text-h3 font-display hover:underline"
                >
                  {site.phoneNumbers.emergency}
                </a>
                <p className="mt-3 text-small text-on-forest/75">
                  Nephrology nurse on the line.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
