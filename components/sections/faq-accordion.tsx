import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  eyebrow?: string;
  index?: string;
  title: string;
  items: FaqItem[];
}

export function FaqAccordion({ eyebrow, index, title, items }: FaqAccordionProps) {
  return (
    <Section surface="default" spacing="default">
      <Container>
        <Reveal>
          {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
          <Heading as={2} className="mt-3">{title}</Heading>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible defaultValue="0">
            {items.map((item, idx) => (
              <AccordionItem key={`${item.question}-${idx}`} value={String(idx)}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  );
}
