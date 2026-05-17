import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/media/optimized-image";

import { drSouravShristi } from "@/content/doctors/dr-sourav-shristi";
import { TESTIMONIALS_AGGREGATE } from "@/content/testimonials";
import { site } from "@/content/site";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { telHref, waHref } from "@/lib/utils";

interface DoctorIdentityCardProps {
  locale: SupportedLocale;
  variant: "compact" | "full";
  /** Strings localised by the consumer to avoid coupling to a specific dictionary block. */
  copy: {
    chip_dm: string;
    chip_transplant: string;
    chip_vimsar: string;
    chip_research: string;
    primary_cta: string;
    secondary_cta: string;
    rating_label?: string;
    research_anchor_label?: string;
  };
  /** Pre-filled WhatsApp message. */
  whatsappPrefill?: string;
}

export function DoctorIdentityCard({
  locale,
  variant,
  copy,
  whatsappPrefill = "Hello, I'd like to send my reports for a review.",
}: DoctorIdentityCardProps) {
  const doc = drSouravShristi;
  const i = doc.i18n[locale];

  if (variant === "compact") {
    return (
      <div className="rounded-[var(--radius-card)] border border-border bg-on-primary/95 backdrop-blur p-5 shadow-[var(--shadow-2)]">
        <p className="text-small font-semibold text-foreground">{i.name}</p>
        <p className="text-tiny text-foreground-muted mt-0.5">{doc.qualifications.join(" · ")}</p>
        <p className="text-tiny text-foreground-muted mt-1 leading-snug">{i.title}</p>
        <div className="mt-4 flex flex-col gap-2">
          <Button asChild variant="accent" size="md" className="w-full">
            <a
              href={waHref(site.phoneNumbers.whatsapp, whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={16} weight="fill" />
              {copy.primary_cta}
            </a>
          </Button>
          <Button asChild variant="outline" size="md" className="w-full">
            <a href={telHref(site.phoneNumbers.general)}>
              <Icon name="phone" size={16} />
              {copy.secondary_cta}
            </a>
          </Button>
        </div>
      </div>
    );
  }

  // Full variant — used on About + Meet Dr. Shristi section
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] border border-border bg-primary-soft shadow-[var(--shadow-2)]">
          {doc.photo && (
            <OptimizedImage
              src={doc.photo}
              alt={i.name}
              fill
              sizes="(min-width:1024px) 41vw, 100vw"
              className="object-cover"
            />
          )}
          <BeanCurve size={120} className="absolute -bottom-6 -right-6 text-primary opacity-20 pointer-events-none" />
        </div>
      </div>
      <div className="lg:col-span-7 flex flex-col gap-5">
        <div>
          <p className="text-h2 font-display text-foreground">{i.name}</p>
          <p className="text-small text-foreground-muted mt-1">{doc.qualifications.join(" · ")}</p>
          <p className="text-body text-foreground-muted mt-2">{i.title}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          <Chip>{copy.chip_dm}</Chip>
          <Chip>{copy.chip_transplant}</Chip>
          <Chip>{copy.chip_vimsar}</Chip>
          <a
            href="#research"
            className="inline-flex items-center gap-1 rounded-[var(--radius-chip)] bg-accent/15 px-3 py-1 text-tiny font-semibold uppercase tracking-wide text-accent-deep hover:bg-accent/25 transition-colors"
          >
            {copy.chip_research}
            <Icon name="arrow-right" size={12} />
          </a>
        </ul>

        <div className="prose-content max-w-none">
          {i.bio.map((p, idx) => (
            <p key={idx} className="text-body text-foreground-muted">{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild variant="accent" size="adaptive">
            <a
              href={waHref(site.phoneNumbers.whatsapp, whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} weight="fill" />
              {copy.primary_cta}
            </a>
          </Button>
          <Button asChild variant="outline" size="adaptive">
            <a href={telHref(site.phoneNumbers.general)}>
              <Icon name="phone" size={18} />
              {copy.secondary_cta}
            </a>
          </Button>
        </div>

        {copy.rating_label && (
          <a
            href={TESTIMONIALS_AGGREGATE.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-small text-foreground-muted hover:text-foreground"
          >
            <Icon name="star" size={16} weight="fill" className="text-accent" />
            {copy.rating_label}
            <Icon name="arrow-up-right" size={14} />
          </a>
        )}
        {copy.research_anchor_label && (
          <Link
            href={urlForLocale(locale, "/about#research")}
            className="text-small text-primary-deep hover:underline inline-flex items-center gap-1"
          >
            {copy.research_anchor_label} <Icon name="arrow-right" size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-[var(--radius-chip)] bg-primary-soft px-3 py-1 text-tiny font-semibold uppercase tracking-wide text-primary-deep">
      {children}
    </li>
  );
}
