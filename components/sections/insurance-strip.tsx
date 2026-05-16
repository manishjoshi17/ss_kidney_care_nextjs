import { MarqueeRow } from "@/components/motion/marquee-row";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

import { INSURANCE_PARTNERS } from "@/content/insurance";
import { type Dictionary } from "@/lib/i18n";

interface InsuranceStripProps {
  home: Dictionary["home"];
}

export function InsuranceStrip({ home }: InsuranceStripProps) {
  return (
    <Section surface="sky">
      <Container>
        <Reveal>
          <Eyebrow index="05">{home.insurance_strip.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.insurance_strip.title}</Heading>
          <p className="text-lead mt-3 max-w-[55ch]">{home.insurance_strip.subhead}</p>
        </Reveal>
        <div className="mt-10">
          <MarqueeRow speed={60}>
            {INSURANCE_PARTNERS.map((p) => (
              <div
                key={p.name}
                className="inline-flex items-center gap-3 px-5 h-14 rounded-[var(--radius-pill)] bg-surface border border-border text-foreground text-small font-semibold"
              >
                {p.name}
              </div>
            ))}
          </MarqueeRow>
        </div>
      </Container>
    </Section>
  );
}
