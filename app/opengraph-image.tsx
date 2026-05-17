import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { site } from "@/content/site";

export const alt = "SS Kidney Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadBrandLogoDataUrl(): Promise<string | null> {
  try {
    const buf = await readFile(join(process.cwd(), "public/brand/logo-horizontal.svg"));
    return `data:image/svg+xml;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OG() {
  const logoSrc = await loadBrandLogoDataUrl();

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
          background: "linear-gradient(135deg, #CFE5EC 0%, #E9F2F6 100%)",
          color: "#0E3A5C",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoSrc} width={300} height={68} alt="" />
          ) : (
            <span style={{ fontSize: 36, fontWeight: 600, color: "#0E3A5C" }}>{site.name}</span>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p
            style={{
              fontSize: 24,
              color: "#0E3A5C",
              margin: 0,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            Specialist nephrology · Sambalpur · since 2023
          </p>
          <h1
            style={{
              fontSize: 76,
              lineHeight: 1.02,
              margin: 0,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              maxWidth: 1000,
              color: "#0E3A5C",
            }}
          >
            Dr. Sourav Shristi
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "#0E3A5C",
              margin: 0,
              fontWeight: 500,
              opacity: 0.85,
              maxWidth: 1000,
            }}
          >
            Consultant Nephrologist, Transplant Physician & Interventional Nephrologist
          </p>
          <p
            style={{
              fontSize: 24,
              color: "#0E3A5C",
              margin: 0,
              opacity: 0.7,
              fontStyle: "italic",
            }}
          >
            DM Nephrology · Asst. Professor, VIMSAR Burla · ★ 4.9 on JustDial
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, color: "#0E3A5C" }}>SS Kidney Care · Sambalpur</span>
          <span style={{ fontSize: 22, color: "#0E3A5C", fontWeight: 600 }}>{site.phoneNumbers.general}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
