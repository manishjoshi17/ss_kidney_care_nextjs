import Link from "next/link";

import { BeanCurve } from "@/components/icons/bean-curve";
import { Icon } from "@/components/icons/icon";
import { LanguageSwitcher } from "@/components/chrome/language-switcher";
import { Logo } from "@/components/chrome/logo";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/primitives/container";
import { Section } from "@/components/primitives/section";

import { site } from "@/content/site";
import { ACCREDITATIONS } from "@/content/accreditations";
import { getAllServices } from "@/modules/services";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { telHref } from "@/lib/utils";

interface FooterProps {
  locale: SupportedLocale;
  nav: Dictionary["nav"];
  footer: Dictionary["footer"];
  common: Dictionary["common"];
}

export function Footer({ locale, nav, footer, common }: FooterProps) {
  const services = getAllServices().slice(0, 6);
  const year = new Date().getFullYear();

  return (
    <Section as="div" surface="navy" spacing="none" className="mt-section">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 flex flex-col gap-5">
            <Logo locale={locale} variant="on-dark" />
            <p className="text-body text-on-navy/80 max-w-[36ch]">{footer.columns.brand.tagline}</p>
            <ul className="flex flex-wrap gap-2">
              {ACCREDITATIONS.map((a) => (
                <li
                  key={a.short}
                  className="text-tiny font-semibold uppercase tracking-wide bg-on-navy/10 text-on-navy px-2.5 py-1 rounded-[var(--radius-chip)]"
                >
                  {a.short}
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-2">
            <FooterColumnTitle>{footer.columns.services}</FooterColumnTitle>
            <ul className="space-y-2">
              {services.map((s) => (
                <FooterLink key={s.slug} href={urlForLocale(locale, `/services/${s.slug}`)}>
                  {s.i18n[locale].name}
                </FooterLink>
              ))}
              <FooterLink href={urlForLocale(locale, "/services")} muted>
                {nav.primary.services} →
              </FooterLink>
            </ul>
          </div>

          {/* For Patients column */}
          <div className="lg:col-span-2">
            <FooterColumnTitle>{footer.columns.for_patients}</FooterColumnTitle>
            <ul className="space-y-2">
              <FooterLink href={urlForLocale(locale, "/appointment")}>{nav.secondary.appointment}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/insurance")}>{nav.secondary.insurance}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/international-patients")}>{nav.secondary.international}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/resources")}>{nav.primary.resources}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/emergency")}>{nav.secondary.emergency}</FooterLink>
            </ul>
          </div>

          {/* Hospital column */}
          <div className="lg:col-span-2">
            <FooterColumnTitle>{footer.columns.hospital}</FooterColumnTitle>
            <ul className="space-y-2">
              <FooterLink href={urlForLocale(locale, "/about")}>{nav.primary.about}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/doctors/dr-sourav-shristi")}>Dr. Sourav Shristi</FooterLink>
              <FooterLink href={urlForLocale(locale, "/facilities")}>{nav.primary.facilities}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/gallery")}>{nav.secondary.gallery}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/testimonials")}>{nav.secondary.testimonials}</FooterLink>
              <FooterLink href={urlForLocale(locale, "/careers")}>{nav.secondary.careers}</FooterLink>
            </ul>
          </div>

          {/* Get in touch column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <FooterColumnTitle>{footer.columns.get_in_touch}</FooterColumnTitle>
            <ul className="space-y-3 text-small">
              <li>
                <p className="text-on-navy/60 text-tiny uppercase tracking-wide mb-1">{footer.get_in_touch.address_label}</p>
                <address className="not-italic text-on-navy/90 leading-normal">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-tiny font-medium text-on-navy/85 hover:text-on-navy hover:underline"
                >
                  <Icon name="map" size={14} weight="fill" />
                  {common.actions.find_on_map}
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </li>
              <li>
                <p className="text-on-navy/60 text-tiny uppercase tracking-wide mb-1">{footer.get_in_touch.phone_label}</p>
                <a href={telHref(site.phoneNumbers.general)} className="text-on-navy hover:underline">
                  {site.phoneNumbers.general}
                </a>
              </li>
              <li>
                <p className="text-on-navy/60 text-tiny uppercase tracking-wide mb-1">{footer.get_in_touch.email_label}</p>
                <a href={`mailto:${site.email.general}`} className="text-on-navy hover:underline">
                  {site.email.general}
                </a>
              </li>
              <li>
                <p className="text-on-navy/60 text-tiny uppercase tracking-wide mb-1">{footer.get_in_touch.hours_label}</p>
                <p className="text-on-navy/90">{site.hours.monday_to_friday}</p>
                <p className="text-on-navy/70 text-tiny">{site.hours.saturday}</p>
              </li>
              <li className="flex items-start gap-2 mt-3 p-2 rounded-[var(--radius-chip)] bg-destructive/15 text-on-navy">
                <Icon name="warning" size={16} weight="fill" className="text-destructive mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-tiny font-medium">{footer.get_in_touch.emergency_label}</p>
                  <p className="text-small text-on-navy/85 truncate">{site.emergencyContact.name}, {site.emergencyContact.qualification}</p>
                  <a href={telHref(site.emergencyContact.phone)} className="text-small font-bold text-on-navy hover:underline">
                    {site.emergencyContact.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Burla VIMSAR consultation point — separate block per PLAN.md §11 row 21 */}
        <div className="mt-10 rounded-[var(--radius-card)] border border-on-navy/15 bg-on-navy/[0.04] p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="flex-1 min-w-0">
              <p className="text-tiny uppercase tracking-wide text-on-navy/60">{footer.burla.label}</p>
              <p className="text-small font-semibold text-on-navy mt-1">{footer.burla.title}</p>
              <address className="not-italic text-small text-on-navy/85 mt-1 leading-normal">
                {site.consultationPoint.burla.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={telHref(site.consultationPoint.burla.phone)}
                  className="text-small text-on-navy/85 hover:text-on-navy hover:underline"
                >
                  {site.consultationPoint.burla.phone}
                </a>
                <a
                  href={site.consultationPoint.burla.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-tiny font-medium text-on-navy/85 hover:text-on-navy hover:underline"
                >
                  <Icon name="map" size={14} weight="fill" />
                  {common.actions.find_on_map}
                  <Icon name="arrow-up-right" size={12} />
                </a>
              </div>
            </div>
            <p className="text-tiny text-on-navy/65 max-w-[42ch]">
              {footer.burla.disclaimer_short}
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-on-navy/15" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-small text-on-navy/70">
            {footer.bottom_strip.copyright.replace("{year}", String(year))}
          </p>
          <ul className="flex flex-wrap items-center gap-4 text-small">
            <li><Link href={urlForLocale(locale, "/privacy")} className="text-on-navy/80 hover:text-on-navy">{nav.legal.privacy}</Link></li>
            <li><Link href={urlForLocale(locale, "/terms")} className="text-on-navy/80 hover:text-on-navy">{nav.legal.terms}</Link></li>
            <li><Link href={urlForLocale(locale, "/disclaimer")} className="text-on-navy/80 hover:text-on-navy">{nav.legal.disclaimer}</Link></li>
            <li><LanguageSwitcher currentLocale={locale} size="large" tone="onDark" side="top" /></li>
          </ul>
        </div>

        <div className="mt-10 flex items-center gap-3 text-on-navy/65">
          <BeanCurve size={20} className="text-brand-teal" />
          <span className="text-small font-display">{footer.brand_phrase}</span>
        </div>
      </Container>
    </Section>
  );
}

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return <p className="text-eyebrow text-on-navy/60 mb-4">{children}</p>;
}

function FooterLink({ href, children, muted }: { href: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <li>
      <Link
        href={href}
        className={muted ? "text-small text-on-navy/55 hover:text-on-navy" : "text-small text-on-navy/85 hover:text-on-navy"}
      >
        {children}
      </Link>
    </li>
  );
}
