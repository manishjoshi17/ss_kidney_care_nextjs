import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { site } from "@/content/site";
import { type Dictionary } from "@/lib/i18n";
import { type SupportedLocale, urlForLocale } from "@/lib/locale";
import { telHref } from "@/lib/utils";

interface EmergencyStripProps {
  locale: SupportedLocale;
  nav: Dictionary["nav"];
}

export function EmergencyStrip({ locale, nav }: EmergencyStripProps) {
  return (
    <div className="bg-accent-100 text-accent-700">
      <div className="container-default flex h-9 items-center justify-between gap-4 text-tiny font-medium">
        <div className="flex items-center gap-2">
          <Icon name="warning" size={14} weight="fill" />
          <span className="hidden sm:inline">{nav.emergency_strip.label}</span>
          <a
            href={telHref(site.phoneNumbers.emergency)}
            className="font-semibold hover:underline"
          >
            {site.phoneNumbers.emergency}
          </a>
        </div>
        <Link
          href={urlForLocale(locale, "/emergency")}
          className="inline-flex items-center gap-1 hover:underline"
        >
          {nav.emergency_strip.call_text}
          <Icon name="arrow-right" size={12} />
        </Link>
      </div>
    </div>
  );
}
