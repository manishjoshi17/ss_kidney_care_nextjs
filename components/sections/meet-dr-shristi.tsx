import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";
import { DoctorIdentityCard } from "@/components/sections/doctor-identity-card";

import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale } from "@/lib/locale";

interface MeetDrShristiProps {
  locale: SupportedLocale;
  home: Dictionary["home"];
  common: Dictionary["common"];
}

export function MeetDrShristi({ locale, home, common }: MeetDrShristiProps) {
  return (
    <Section surface="default">
      <Container>
        <Reveal className="max-w-[60ch]">
          <Eyebrow index="02">{home.meet_dr_shristi.eyebrow}</Eyebrow>
          <Heading as={2} className="mt-3">{home.meet_dr_shristi.title}</Heading>
          <p className="text-lead mt-4">{home.meet_dr_shristi.subhead}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <DoctorIdentityCard
            locale={locale}
            variant="full"
            copy={{
              chip_dm: common.doctor_chips.dm,
              chip_transplant: common.doctor_chips.transplant,
              chip_vimsar: common.doctor_chips.vimsar,
              chip_research: common.doctor_chips.research,
              primary_cta: home.hero.primary_cta,
              secondary_cta: home.hero.secondary_cta,
              research_anchor_label: home.meet_dr_shristi.anchor_cta,
            }}
            whatsappPrefill={home.hero.whatsapp_prefill}
          />
        </Reveal>
      </Container>
    </Section>
  );
}
