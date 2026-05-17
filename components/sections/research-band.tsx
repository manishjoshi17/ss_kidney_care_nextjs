import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

import { RESEARCH_PAPERS } from "@/content/research";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale } from "@/lib/locale";

interface ResearchBandProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
}

export function ResearchBand({ locale, home }: ResearchBandProps) {
  return (
    <Section surface="mint" id="research">
      <Container>
        <Reveal className="max-w-[70ch]">
          <Eyebrow index="06">{home.research_band.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.research_band.title}</Heading>
          <p className="text-lead mt-4">{home.research_band.subhead}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" gap={80}>
          {RESEARCH_PAPERS.map((paper) => {
            const i = paper.i18n[locale];
            return (
              <article
                key={paper.slug}
                className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-border-on-mint bg-surface p-6"
              >
                <p className="text-eyebrow text-foreground-muted">{paper.date}</p>
                <Heading as={3} className="text-h4 line-clamp-4">{paper.title}</Heading>
                <p className="text-small text-foreground-muted">{i.summary}</p>
                <p className="text-tiny text-foreground-muted/80 italic mt-auto pt-2">{paper.journal}</p>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-small text-primary-deep hover:underline"
                >
                  {i.cta} <Icon name="arrow-up-right" size={14} />
                </a>
              </article>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
