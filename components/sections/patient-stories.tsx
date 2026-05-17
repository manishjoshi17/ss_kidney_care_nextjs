import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Section } from "@/components/primitives/section";
import { StarRating } from "@/components/sections/star-rating";

import { ADDITIONAL_REVIEW_SOURCES, TESTIMONIALS, TESTIMONIALS_AGGREGATE } from "@/content/testimonials";
import { type SupportedLocale } from "@/lib/locale";

/**
 * Patient Stories band — used on the homepage AND as the standalone /testimonials page.
 * The home variant truncates the cards to `limit`; the standalone page shows all.
 * Aggregate-rating chip is real (JustDial); story cards are authored representative content
 * per PLAN.md §14 item — never claimed to be scraped from any specific platform.
 */
interface PatientStoriesProps {
  locale: SupportedLocale;
  eyebrowIndex?: string;
  copy: {
    eyebrow: string;
    title: string;
    aggregate_label: string;
    aggregate_count_label: string;
    aggregate_cta: string;
    lead?: string;
  };
  /** Optional card limit (home band uses 3; standalone testimonials page omits to show all). */
  limit?: number;
  /** Optional surface override; default is `cream`. */
  surface?: "cream" | "mint" | "default";
}

export function PatientStories({
  locale,
  eyebrowIndex,
  copy,
  limit,
  surface = "cream",
}: PatientStoriesProps) {
  const stories = typeof limit === "number" ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  // Cards render the rating + count + cta from per-source data with i18n-template substitution.
  const renderCountLabel = (count: number) =>
    copy.aggregate_count_label.replace("{count}", String(count));
  const renderCta = (source: string) =>
    copy.aggregate_cta.replace("{source}", source);

  const allSources = [TESTIMONIALS_AGGREGATE, ...ADDITIONAL_REVIEW_SOURCES];

  return (
    <Section surface={surface} id="patient-stories">
      <Container>
        <Reveal>
          {eyebrowIndex ? <Eyebrow index={eyebrowIndex}>{copy.eyebrow}</Eyebrow> : <Eyebrow>{copy.eyebrow}</Eyebrow>}
          <Heading as={2} className="mt-3">{copy.title}</Heading>
          {copy.lead && <p className="text-lead mt-4 max-w-[65ch]">{copy.lead}</p>}
        </Reveal>

        {/* Aggregate-rating cards — one per source, grid on desktop, stacked on mobile */}
        <Reveal delay={0.1} className="mt-8">
          <ul className="grid gap-4 sm:grid-cols-2 max-w-3xl list-none p-0 m-0">
            {allSources.map((src) => {
              const hasRating = typeof src.rating === "number";
              return (
                <li key={src.source}>
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-5 rounded-[var(--radius-card)] border border-border-on-cream bg-surface p-6 shadow-[var(--shadow-1)] hover:border-primary hover:shadow-[var(--shadow-2)] transition-all"
                  >
                    {/* Logo (top) — falls back to source name */}
                    <div className="flex items-center justify-between gap-3">
                      {src.logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={src.logoSrc}
                          alt={src.source}
                          className="block h-7 sm:h-8 w-auto shrink-0"
                        />
                      ) : (
                        <span className="text-h4 font-display text-foreground">{src.source}</span>
                      )}
                      <Icon
                        name="arrow-up-right"
                        size={20}
                        className="text-foreground-muted shrink-0 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out-snap)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-deep"
                      />
                    </div>

                    {/* Stars + rating number */}
                    {hasRating && (
                      <div className="flex flex-col gap-2">
                        <StarRating value={src.rating as number} size={22} />
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="text-h2 font-display tabular-nums leading-none text-foreground">
                            {src.rating}
                          </span>
                          {typeof src.count === "number" && (
                            <span className="text-small text-foreground-muted">
                              {renderCountLabel(src.count)}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA — pushes to bottom via mt-auto */}
                    <span className="mt-auto pt-4 border-t border-border-on-cream/60 inline-flex items-center gap-1 text-small font-medium text-primary-deep group-hover:underline">
                      {renderCta(src.source)}
                      <Icon name="arrow-right" size={14} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" gap={80}>
          {stories.map((t) => {
            const i = t.i18n[locale];
            return (
              <figure
                key={t.slug}
                className="relative flex flex-col gap-4 p-6 rounded-[var(--radius-card)] bg-surface border border-border-on-cream"
              >
                <Icon name="quote" size={28} weight="duotone" className="text-accent" />
                <blockquote className="text-body text-foreground font-display leading-snug">
                  {i.quote}
                </blockquote>
                <figcaption className="mt-auto pt-3 border-t border-border-on-cream/60">
                  <p className="text-small font-semibold text-foreground">{i.attribution}</p>
                  <p className="text-tiny text-foreground-muted mt-0.5">{i.condition}</p>
                </figcaption>
                <BeanCurve size={20} className="absolute bottom-4 right-4 text-accent-300 opacity-50 pointer-events-none" />
              </figure>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
