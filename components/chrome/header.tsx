"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/chrome/logo";
import { LanguageSwitcher } from "@/components/chrome/language-switcher";
import { MobileMenu } from "@/components/chrome/mobile-menu";
import { EmergencyStrip } from "@/components/chrome/emergency-strip";
import { site } from "@/content/site";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { cn, telHref } from "@/lib/utils";

interface HeaderProps {
  locale: SupportedLocale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
}

export function Header({ locale, nav, common }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: urlForLocale(locale, "/services"), label: nav.primary.services },
    { href: urlForLocale(locale, "/about"), label: nav.primary.about },
    { href: urlForLocale(locale, "/facilities"), label: nav.primary.facilities },
    { href: urlForLocale(locale, "/resources"), label: nav.primary.resources },
    { href: urlForLocale(locale, "/contact"), label: nav.primary.contact },
  ];

  return (
    <div className="sticky top-0 z-40">
      <EmergencyStrip locale={locale} nav={nav} />
      <header
        className={cn(
          "border-b transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-border"
            : "bg-background border-transparent",
        )}
      >
        <div className="container-default flex h-16 lg:h-20 items-center gap-4">
          <Logo locale={locale} />

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1 ml-4">
            {navItems.map((item) => {
              const active = pathname === item.href || (pathname?.startsWith(item.href + "/") ?? false);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "px-3 py-2 rounded-[var(--radius-chip)] text-small font-medium transition-colors",
                    active
                      ? "bg-primary-soft text-primary-deep"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <a
              href={telHref(site.phoneNumbers.appointment)}
              className="hidden lg:inline-flex items-center gap-2 rounded-[var(--radius-chip)] px-3 py-2 text-small font-medium text-foreground-muted hover:text-foreground hover:bg-muted"
            >
              <Icon name="phone" size={16} />
              {site.phoneNumbers.appointment}
            </a>
            <LanguageSwitcher currentLocale={locale} className="hidden sm:flex" />
            <Button asChild variant="accent" size="md" className="hidden sm:inline-flex">
              <Link href={urlForLocale(locale, "/appointment")}>
                {common.actions.schedule_consultation}
              </Link>
            </Button>
            <LanguageSwitcher
              currentLocale={locale}
              variant="bare"
              className="sm:hidden"
              align="end"
            />
            <MobileMenu locale={locale} nav={nav} common={common} />
          </div>
        </div>
      </header>
    </div>
  );
}
