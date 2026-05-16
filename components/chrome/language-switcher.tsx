"use client";

import * as Popover from "@radix-ui/react-popover";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/lib/i18n-provider";
import {
  COOKIE_MAX_AGE_SECONDS,
  PREFERRED_LANGUAGE_COOKIE,
  SUPPORTED_LOCALES,
  type SupportedLocale,
  stripLocaleFromPath,
  urlForLocale,
} from "@/lib/locale";

interface LanguageSwitcherProps {
  currentLocale: SupportedLocale;
  className?: string;
  size?: "default" | "large";
  /** Use when the trigger sits on a dark surface (e.g. the navy footer). */
  tone?: "default" | "onDark";
  align?: "start" | "center" | "end";
  side?: "top" | "bottom";
}

const NATIVE_NAMES: Record<SupportedLocale, string> = {
  en: "English",
  hi: "हिन्दी",
  or: "ଓଡ଼ିଆ",
};

const SHORT_CODES: Record<SupportedLocale, string> = {
  en: "EN",
  hi: "हि",
  or: "ଓ",
};

export function LanguageSwitcher({
  currentLocale,
  className,
  size = "default",
  tone = "default",
  align = "end",
  side = "bottom",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslations();
  const [open, setOpen] = useState(false);

  const handleSwitch = (target: SupportedLocale) => {
    if (target === currentLocale) {
      setOpen(false);
      return;
    }
    const cleanPath = stripLocaleFromPath(pathname);
    const secureFlag = process.env.NODE_ENV === "production" ? "; Secure" : "";
    document.cookie = `${PREFERRED_LANGUAGE_COOKIE}=${target}; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secureFlag}`;
    setOpen(false);
    router.push(urlForLocale(target, cleanPath));
  };

  const isLarge = size === "large";
  const isOnDark = tone === "onDark";

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        aria-label={t("common.language_switcher.label")}
        className={cn(
          "group inline-flex items-center gap-2 rounded-[var(--radius-pill)] font-medium",
          "border transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isLarge ? "h-12 px-4 text-small" : "h-9 px-3 text-tiny",
          isOnDark
            ? cn(
                "border-on-navy/20 text-on-navy",
                "hover:border-on-navy/40 hover:bg-on-navy/10",
                "data-[state=open]:border-on-navy/50 data-[state=open]:bg-on-navy/10",
                "focus-visible:ring-offset-surface-navy",
              )
            : cn(
                "border-border bg-surface text-foreground",
                "hover:border-border-strong hover:bg-muted",
                "data-[state=open]:border-primary data-[state=open]:bg-primary-soft data-[state=open]:text-primary-deep",
              ),
          className,
        )}
      >
        <Icon name="translate" size={isLarge ? 18 : 16} weight="regular" />
        <span className="font-semibold tracking-wide">
          {isLarge ? NATIVE_NAMES[currentLocale] : SHORT_CODES[currentLocale]}
        </span>
        <Icon
          name="caret-down"
          size={isLarge ? 14 : 12}
          className={cn(
            "opacity-70 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
            "group-data-[state=open]:rotate-180",
          )}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side={side}
          align={align}
          sideOffset={10}
          collisionPadding={12}
          className={cn(
            "z-50 w-[--radix-popover-trigger-width] min-w-[14rem]",
            "rounded-[var(--radius-card)] border border-border bg-surface p-1.5",
            "shadow-[var(--shadow-3)]",
            "origin-[var(--radix-popover-content-transform-origin)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1",
          )}
        >
          <div
            role="listbox"
            aria-label={t("common.language_switcher.label")}
            className="flex flex-col gap-0.5"
          >
            {SUPPORTED_LOCALES.map((locale) => {
              const isActive = locale === currentLocale;
              return (
                <button
                  key={locale}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSwitch(locale)}
                  className={cn(
                    "group/row flex items-center gap-3 rounded-[var(--radius-button)] px-3 py-2.5 text-left",
                    "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-primary-soft text-primary-deep"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  <span
                    lang={locale}
                    className={cn(
                      "inline-flex h-9 w-9 flex-none items-center justify-center rounded-[var(--radius-chip)] text-tiny font-semibold uppercase tracking-wide",
                      "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out-snap)]",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground-muted group-hover/row:bg-surface",
                    )}
                  >
                    {SHORT_CODES[locale]}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col leading-tight">
                    <span lang={locale} className="text-small font-semibold">
                      {NATIVE_NAMES[locale]}
                    </span>
                    <span className="text-tiny text-foreground-muted">
                      {t(`common.language_switcher.${locale}`)}
                    </span>
                  </span>

                  <span aria-hidden className="flex-none">
                    {isActive ? (
                      <BeanCurve size={18} variant="solid" className="text-primary" />
                    ) : (
                      <Icon
                        name="arrow-right"
                        size={14}
                        className="opacity-0 -translate-x-1 transition-all duration-[var(--duration-fast)] ease-[var(--ease-out-snap)] group-hover/row:opacity-60 group-hover/row:translate-x-0"
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
