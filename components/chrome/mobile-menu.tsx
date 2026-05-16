"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Icon } from "@/components/icons/icon";
import { Logo } from "@/components/chrome/logo";
import { LanguageSwitcher } from "@/components/chrome/language-switcher";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { cn, telHref, waHref } from "@/lib/utils";

interface MobileMenuProps {
  locale: SupportedLocale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
}

/**
 * Mobile drawer with SENbrook-style large-text nav rows.
 * Full-screen, text-lg labels, 48px row height.
 */
export function MobileMenu({ locale, nav, common }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const groups: { label: string; items: { href: string; label: string; icon: Parameters<typeof Icon>[0]["name"] }[] }[] = [
    {
      label: nav.mobile_groups.main,
      items: [
        { href: urlForLocale(locale, "/"), label: nav.primary.home, icon: "home" },
        { href: urlForLocale(locale, "/services"), label: nav.primary.services, icon: "compass" },
        { href: urlForLocale(locale, "/doctors"), label: nav.primary.doctors, icon: "star" },
        { href: urlForLocale(locale, "/about"), label: nav.primary.about, icon: "quote" },
      ],
    },
    {
      label: nav.mobile_groups.for_patients,
      items: [
        { href: urlForLocale(locale, "/appointment"), label: nav.secondary.appointment, icon: "clock" },
        { href: urlForLocale(locale, "/resources"), label: nav.primary.resources, icon: "question" },
        { href: urlForLocale(locale, "/insurance"), label: nav.secondary.insurance, icon: "check" },
        { href: urlForLocale(locale, "/international-patients"), label: nav.secondary.international, icon: "translate" },
      ],
    },
    {
      label: nav.mobile_groups.hospital,
      items: [
        { href: urlForLocale(locale, "/facilities"), label: nav.primary.facilities, icon: "compass" },
        { href: urlForLocale(locale, "/gallery"), label: nav.secondary.gallery, icon: "compass" },
        { href: urlForLocale(locale, "/testimonials"), label: nav.secondary.testimonials, icon: "quote" },
        { href: urlForLocale(locale, "/careers"), label: nav.secondary.careers, icon: "arrow-up-right" },
      ],
    },
    {
      label: nav.mobile_groups.legal,
      items: [
        { href: urlForLocale(locale, "/privacy"), label: nav.legal.privacy, icon: "question" },
        { href: urlForLocale(locale, "/terms"), label: nav.legal.terms, icon: "question" },
        { href: urlForLocale(locale, "/disclaimer"), label: nav.legal.disclaimer, icon: "question" },
      ],
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label={common.labels.open_menu}
          className="md:hidden inline-flex size-11 items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors"
        >
          <Icon name="menu" size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background w-full max-w-full" hideClose>
        <SheetTitle>Menu</SheetTitle>
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-b border-border-hairline px-6 py-4">
            <Logo locale={locale} />
            <button
              onClick={() => setOpen(false)}
              aria-label={common.labels.close_menu}
              className="inline-flex size-11 items-center justify-center rounded-full hover:bg-muted transition-colors"
            >
              <Icon name="close" size={22} />
            </button>
          </header>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            {groups.map((group) => (
              <div key={group.label} className="mb-6">
                <p className="px-3 mb-2 text-eyebrow text-foreground-muted/70">{group.label}</p>
                <ul>
                  {group.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center gap-4 h-12 px-3 rounded-[var(--radius-button)] transition-colors",
                            active
                              ? "bg-primary-soft text-primary-deep font-bold"
                              : "text-foreground hover:bg-muted",
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          <Icon
                            name={item.icon}
                            size={22}
                            weight={active ? "bold" : "regular"}
                          />
                          <span className="text-lg">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          <footer className="border-t border-border-hairline px-6 py-4 flex flex-col gap-3">
            <Button asChild size="adaptive" variant="accent" className="w-full">
              <Link href={urlForLocale(locale, "/appointment")} onClick={() => setOpen(false)}>
                <Icon name="clock" size={18} />
                {common.actions.schedule_consultation}
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <a
                href={telHref(site.phoneNumbers.general)}
                className="inline-flex flex-1 items-center justify-center gap-2 h-12 rounded-[var(--radius-button)] border border-border-strong text-foreground"
              >
                <Icon name="phone" size={18} />
                <span className="text-small font-semibold">{site.phoneNumbers.general}</span>
              </a>
              <a
                href={waHref(site.phoneNumbers.whatsapp)}
                className="inline-flex size-12 items-center justify-center rounded-full bg-success/15 text-success"
                aria-label={common.actions.chat_whatsapp}
              >
                <Icon name="whatsapp" size={22} weight="fill" />
              </a>
            </div>
            <div className="flex justify-center pt-2">
              <LanguageSwitcher currentLocale={locale} size="large" side="top" align="center" />
            </div>
          </footer>
        </div>
      </SheetContent>
    </Sheet>
  );
}
