import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Icon } from "@/components/icons/icon";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";

import { site } from "@/content/site";
import { telHref, waHref } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCallout {
  title: string;
  body: string;
  phone_label: string;
  whatsapp_label: string;
  whatsapp_prefill?: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  index?: string;
  title: string;
  lead?: string;
  items: FaqItem[];
  callout?: FaqCallout;
}

export function FaqAccordion({ eyebrow, index, title, lead, items, callout }: FaqAccordionProps) {
  return (
    <Section surface="default" spacing="default" className="overflow-hidden">
      {/* Background watermark — bean-curve at very low opacity */}
      <BeanCurve
        size={620}
        className="pointer-events-none absolute -right-32 -top-16 hidden text-primary/[0.045] sm:block"
      />
      <BeanCurve
        size={320}
        className="pointer-events-none absolute -left-24 bottom-12 hidden text-accent/[0.05] lg:block"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left editorial column */}
          <div className="lg:col-span-5">
            <Reveal>
              {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
              <Heading as={2} className="mt-3">{title}</Heading>
              {lead && <Lead className="mt-5">{lead}</Lead>}
            </Reveal>

            {callout && (
              <Reveal delay={0.15}>
                <FaqCalloutCard callout={callout} />
              </Reveal>
            )}
          </div>

          {/* Right accordion column */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <Stagger
              as="div"
              className="rounded-[var(--radius-card)] border border-border bg-surface px-5 sm:px-7 shadow-[var(--shadow-1)]"
              gap={60}
            >
              <Accordion type="single" collapsible defaultValue="0">
                {items.map((item, idx) => (
                  <AccordionItem
                    key={`${item.question}-${idx}`}
                    value={String(idx)}
                    className="border-b border-border last:border-b-0"
                  >
                    <AccordionTrigger className="py-6 gap-6">
                      <span
                        aria-hidden
                        className="shrink-0 text-eyebrow tabular-nums text-foreground-muted transition-colors group-hover:text-primary-deep group-data-[state=open]:text-accent"
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-[3.25rem]">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stagger>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function FaqCalloutCard({ callout }: { callout: FaqCallout }) {
  const phoneTel = telHref(site.phoneNumbers.appointment);
  const whatsappLink = waHref(
    site.phoneNumbers.whatsapp,
    callout.whatsapp_prefill ?? "Hello, I have a question for the SS Kidney Care team.",
  );

  return (
    <div className="relative mt-10 overflow-hidden rounded-[var(--radius-card)] border border-border-on-cream bg-surface-cream p-6 sm:p-7">
      <BeanCurve
        size={120}
        className="pointer-events-none absolute -right-6 -top-6 text-primary/15"
      />
      <p className="relative text-eyebrow text-on-cream/65">{callout.title}</p>
      <p className="relative mt-3 text-body text-on-cream">{callout.body}</p>

      <div className="relative mt-6 flex flex-col gap-4">
        <a
          href={phoneTel}
          className="group/phone inline-flex items-center gap-3 text-on-cream transition-colors hover:text-primary-deep"
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-deep transition-colors group-hover/phone:bg-primary/20">
            <Icon name="phone" size={18} weight="fill" />
          </span>
          <span className="flex flex-col">
            <span className="text-tiny uppercase tracking-wide text-on-cream/60">{callout.phone_label}</span>
            <span className="text-h4 font-display text-on-cream tabular-nums">{site.phoneNumbers.appointment}</span>
          </span>
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group/wa inline-flex items-center gap-3 text-on-cream/80 transition-colors hover:text-on-cream"
        >
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-success/10 text-success transition-colors group-hover/wa:bg-success/20">
            <Icon name="whatsapp" size={18} weight="fill" />
          </span>
          <span className="text-small">{callout.whatsapp_label}</span>
        </a>
      </div>
    </div>
  );
}
