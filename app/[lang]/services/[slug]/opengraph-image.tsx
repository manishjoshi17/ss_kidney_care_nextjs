import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { getServiceBySlug, getServiceSlugs } from "@/modules/services";
import { asSupportedLocale, SUPPORTED_LOCALES } from "@/lib/locale";

export const alt = "SS Kidney Care service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OGProps {
  params: { lang: string; slug: string };
}

export function generateStaticParams() {
  const slugs = getServiceSlugs();
  return SUPPORTED_LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export default async function OG({ params }: OGProps) {
  const lang = asSupportedLocale(params.lang);
  const service = getServiceBySlug(params.slug);
  if (!service) return new ImageResponse(<div />, { ...size });
  const i = service.i18n[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#FFFFFF",
          color: "#0F1F2E",
          fontFamily: "system-ui, sans-serif",
          borderTop: "10px solid #0E3A38",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <p style={{ fontSize: 22, color: "#64748B", letterSpacing: "0.16em", textTransform: "uppercase", margin: 0 }}>
            Treatment · {site.name}
          </p>
          <h1 style={{ fontSize: 80, margin: 0, lineHeight: 1.0, fontWeight: 500, letterSpacing: "-0.025em", color: "#0F1F2E", maxWidth: 1050 }}>
            {i.name}
          </h1>
          <p style={{ fontSize: 30, color: "#42526E", lineHeight: 1.3, marginTop: 18, maxWidth: 1000 }}>{i.shortDescription}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, color: "#0E3A38" }}>sskidneycare.com</span>
          <span style={{ fontSize: 22, color: "#0E3A38" }}>{site.phoneNumbers.general}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
