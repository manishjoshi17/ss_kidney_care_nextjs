"use client";

import { Icon } from "@/components/icons/icon";
import { site } from "@/content/site";
import { useTranslations } from "@/lib/i18n-provider";
import { telHref, waHref } from "@/lib/utils";

/**
 * Bottom-right floating quick-actions on mobile. Hidden on lg+.
 * Phone, WhatsApp, map — three pinned circles above safe-area inset.
 */
export function StickyQuickActions() {
  const { t } = useTranslations();
  const mapHref = `https://maps.google.com/?q=${site.latLng.lat},${site.latLng.lng}`;
  const items = [
    {
      label: t("common.actions.chat_whatsapp"),
      href: waHref(site.phoneNumbers.whatsapp),
      icon: "whatsapp" as const,
      className: "bg-success text-on-primary",
    },
    {
      label: t("common.actions.call_24x7"),
      href: telHref(site.phoneNumbers.emergency),
      icon: "phone" as const,
      className: "bg-accent text-on-accent",
    },
    {
      label: t("common.labels.address"),
      href: mapHref,
      icon: "map" as const,
      className: "bg-primary text-on-primary",
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-4 right-4 z-30 flex flex-col gap-2" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      {items.map((item) => (
        <a
          key={item.icon}
          href={item.href}
          aria-label={item.label}
          target={item.icon === "map" ? "_blank" : undefined}
          rel={item.icon === "map" ? "noopener noreferrer" : undefined}
          className={`size-12 inline-flex items-center justify-center rounded-full shadow-[var(--shadow-2)] transition-transform hover:scale-105 ${item.className}`}
        >
          <Icon name={item.icon} size={22} weight="fill" />
        </a>
      ))}
    </div>
  );
}
