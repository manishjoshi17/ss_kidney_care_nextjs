import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { BeanCurveDivider } from "@/components/motion/bean-curve-divider";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { TiltCard } from "@/components/motion/tilt-card";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";
import { Button } from "@/components/ui/button";

import { getAllServices } from "@/modules/services";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface ServicesStripProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
  common: Dictionary["common"];
}

export function ServicesStrip({ locale, home, common }: ServicesStripProps) {
  const services = getAllServices();

  return (
    <Section surface="surface">
      <Container>
        <Reveal>
          <Eyebrow index="01">{home.services_strip.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.services_strip.title}</Heading>
          <p className="text-lead mt-3 max-w-[55ch]">{home.services_strip.subhead}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" gap={120}>
          {services.slice(0, 3).map((service, idx) => {
            const i18n = service.i18n[locale];
            const isMiddle = idx === 1;
            return (
              <TiltCard key={service.slug} maxTilt={5} className="h-full">
                <Link
                  href={urlForLocale(locale, `/services/${service.slug}`)}
                  className={cn(
                    "group relative flex flex-col h-full p-6 sm:p-7 rounded-[var(--radius-card-mobile)] sm:rounded-[var(--radius-card)]",
                    "border border-border bg-surface hover:border-primary",
                    "transition-[border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-out-soft)]",
                    "hover:shadow-[var(--shadow-2)]",
                    isMiddle && "lg:row-span-1 lg:scale-[1.02] lg:shadow-[var(--shadow-1)]",
                  )}
                >
                  <div className="size-12 rounded-[var(--radius-chip)] bg-primary-soft text-primary-deep inline-flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform duration-[var(--duration-base)]">
                    <Icon name={service.icon} size={24} weight="duotone" />
                  </div>
                  <Heading as={3} className="text-h3">{i18n.name}</Heading>
                  <p className="text-body text-foreground-muted mt-3 line-clamp-3">{i18n.shortDescription}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 text-small font-medium text-primary-deep">
                    {common.actions.read_guide}
                    <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="ghost" size="md">
            <Link href={urlForLocale(locale, "/services")}>
              {common.actions.view_all}
              <Icon name="arrow-right" size={16} />
            </Link>
          </Button>
        </div>
      </Container>
      <BeanCurveDivider shape="shallow" className="mt-16" />
    </Section>
  );
}
