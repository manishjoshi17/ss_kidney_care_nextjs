import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";

import { type Dictionary } from "@/lib/i18n";

interface StatsStripProps {
  home: Dictionary["home"];
}

const STAT_COLORS = ["text-stat-sky", "text-stat-amber", "text-stat-sage", "text-stat-sky"];

export function StatsStrip({ home }: StatsStripProps) {
  const items = [
    { key: "years", value: 16 },
    { key: "patients", value: 12000 },
    { key: "doctors", value: 8 },
    { key: "dialysis", value: 3500 },
  ] as const;

  return (
    <Section surface="navy" spacing="default">
      <Container>
        <Reveal>
          <p className="text-eyebrow text-on-navy/65">{home.stats.title}</p>
        </Reveal>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {items.map((item, idx) => {
            const meta = home.stats.items[item.key];
            return (
              <Reveal key={item.key} delay={idx * 0.08} as="li" className="flex flex-col items-start gap-2">
                <p className={`text-stat-figure text-h1 leading-none ${STAT_COLORS[idx % STAT_COLORS.length]}`}>
                  <CountUp from={0} to={item.value} duration={1.6} />
                  <span className="ml-1 align-top text-h4 text-on-navy/75">{meta.suffix}</span>
                </p>
                <p className="text-small text-on-navy/75 max-w-[22ch]">{meta.label}</p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
