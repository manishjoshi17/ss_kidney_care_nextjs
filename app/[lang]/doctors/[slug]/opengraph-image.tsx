import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { getDoctorBySlug, getDoctorSlugs } from "@/modules/doctors";
import { asSupportedLocale, SUPPORTED_LOCALES } from "@/lib/locale";

export const alt = "SS Kidney Care consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface OGProps { params: { lang: string; slug: string } }

export function generateStaticParams() {
  const slugs = getDoctorSlugs();
  return SUPPORTED_LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export default async function OG({ params }: OGProps) {
  const lang = asSupportedLocale(params.lang);
  const doctor = getDoctorBySlug(params.slug);
  if (!doctor) return new ImageResponse(<div />, { ...size });
  const i = doctor.i18n[lang];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "0",
          background: "#FFFFFF",
          color: "#0F1F2E",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ flex: "1.6", padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <p style={{ fontSize: 22, color: "#64748B", letterSpacing: "0.16em", textTransform: "uppercase", margin: 0 }}>
            Consultant · {site.name}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h1 style={{ fontSize: 80, margin: 0, lineHeight: 1.0, fontWeight: 500, letterSpacing: "-0.02em" }}>{i.name}</h1>
            <p style={{ fontSize: 30, color: "#42526E", margin: 0 }}>{i.title}</p>
            <p style={{ fontSize: 24, color: "#0E3A38", margin: 0 }}>{doctor.qualifications.join(" · ")}</p>
          </div>
          <span style={{ fontSize: 22, color: "#0E3A38" }}>sskidneycare.com</span>
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #CFE5EC 0%, #E9F2F6 100%)",
          }}
        >
          <span style={{ fontSize: 200, color: "#0E3A38", opacity: 0.18 }}>★</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
