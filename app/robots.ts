import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NODE_ENV === "production";
  return {
    rules: isProd
      ? [{ userAgent: "*", allow: "/", disallow: ["/api/", "/*/_design-system"] }]
      : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
