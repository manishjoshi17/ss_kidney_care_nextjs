import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icons/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { Breadcrumbs } from "@/components/chrome/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";

import { getDoctorBySlug, getDoctorSlugs, type DayOfWeek } from "@/modules/doctors";
import { TESTIMONIALS } from "@/content/testimonials";
import { site } from "@/content/site";
import { getDictionary } from "@/lib/i18n";
import { asSupportedLocale, urlForLocale, SUPPORTED_LOCALES } from "@/lib/locale";
import { absoluteUrl, baseMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

const DAYS: DayOfWeek[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export function generateStaticParams() {
  const slugs = getDoctorSlugs();
  return SUPPORTED_LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang = asSupportedLocale(rawLang);
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  const i = doctor.i18n[lang];
  return baseMetadata({
    lang,
    path: `/doctors/${slug}`,
    title: `${i.name} — SS Kidney Care`,
    description: `${i.title}. ${doctor.qualifications.join(", ")}.`,
  });
}

export default async function DoctorDetailPage({ params }: PageProps) {
  const { lang: rawLang, slug } = await params;
  const lang = asSupportedLocale(rawLang);
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();
  const i = doctor.i18n[lang];
  const dict = getDictionary(lang);
  const doctorTestimonials = TESTIMONIALS.filter((t) => t.doctorSlug === doctor.slug);

  return (
    <>
      <Section spacing="default">
        <Container>
          <Breadcrumbs
            items={[
              { href: urlForLocale(lang, "/"), label: dict.nav.primary.home },
              { label: i.name },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[var(--radius-card)] bg-primary-soft overflow-hidden border border-border">
                {doctor.photo ? (
                  <OptimizedImage
                    src={doctor.photo}
                    alt={i.name}
                    fill
                    sizes="(min-width:1024px) 41vw, 100vw"
                    priority
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-primary-deep/40">
                    <Icon name="stethoscope" size={120} weight="duotone" />
                  </div>
                )}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <Eyebrow>{dict.doctors.index.eyebrow}</Eyebrow>
              <Heading as={1} variant="display" className="mt-4">{i.name}</Heading>
              <p className="text-lead mt-3 text-foreground-muted">{i.title}</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <StatTile label={dict.doctors.detail.experience}>
                  <CountUp from={0} to={doctor.experienceYears} />
                  <span className="text-h4 ml-1 text-foreground-muted">+ yrs</span>
                </StatTile>
                <StatTile label={dict.doctors.detail.languages}>
                  <span className="text-h3">{doctor.languagesSpoken.length}</span>
                </StatTile>
                <StatTile label={dict.doctors.detail.specialties}>
                  <span className="text-h3">{i.specialties.length}</span>
                </StatTile>
              </div>

              <div className="mt-8">
                <p className="text-eyebrow text-foreground-muted">{dict.doctors.detail.specialties}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {i.specialties.map((s) => <Badge key={s} variant="primary">{s}</Badge>)}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-eyebrow text-foreground-muted">{dict.doctors.detail.availability}</p>
                <ul className="mt-2 grid grid-cols-7 gap-1 max-w-md">
                  {DAYS.map((day) => {
                    const available = doctor.availability.includes(day);
                    return (
                      <li
                        key={day}
                        className={cn(
                          "aspect-square inline-flex flex-col items-center justify-center rounded-[var(--radius-chip)] text-tiny font-medium",
                          available ? "bg-primary text-primary-foreground" : "bg-muted text-foreground-muted",
                        )}
                      >
                        <span>{dict.doctors.detail.day_names[day]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="accent" size="adaptive">
                  <Link href={urlForLocale(lang, "/appointment")}>
                    {dict.common.actions.book_with_doctor.replace("{name}", i.name.replace(/^Dr\.?\s+/, "").split(" ").pop() ?? "")}
                    <Icon name="arrow-right" size={18} />
                  </Link>
                </Button>
              </div>

              <div className="prose-content mt-8">
                {i.bio.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
            </Reveal>
          </div>

          {doctorTestimonials.length > 0 && (
            <div className="mt-section">
              <Heading as={2}>{dict.doctors.detail.patient_stories}</Heading>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {doctorTestimonials.map((t) => {
                  const ti = t.i18n[lang];
                  return (
                    <figure key={t.slug} className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
                      <Icon name="quote" size={28} weight="duotone" className="text-accent" />
                      <blockquote className="text-h4 font-display mt-3">{ti.quote}</blockquote>
                      <figcaption className="mt-4 text-small text-foreground-muted">
                        {ti.attribution} · {ti.condition}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          )}

          {/* "See other doctors" removed per PLAN.md §12.2 — single-physician practice. */}
        </Container>
      </Section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: i.name,
          medicalSpecialty: i.specialties,
          worksFor: { "@type": "Hospital", name: site.name, url: absoluteUrl(lang, "/") },
          knowsLanguage: doctor.languagesSpoken,
          hasCredential: doctor.qualifications.map((q) => ({ "@type": "EducationalOccupationalCredential", name: q })),
        }}
      />
    </>
  );
}

function StatTile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-surface p-4">
      <p className="text-tiny uppercase tracking-wide text-foreground-muted">{label}</p>
      <p className="text-stat-figure text-h2 leading-none mt-1 text-foreground">{children}</p>
    </div>
  );
}
