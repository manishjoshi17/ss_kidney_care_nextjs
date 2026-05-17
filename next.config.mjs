/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: { dynamic: 60, static: 300 },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    const locales = ["en", "hi", "or"];
    // Three retired placeholder doctor slugs — redirect to About.
    const retiredSlugs = ["dr-suresh-patnaik", "dr-ananya-mishra", "dr-rakesh-jena"];
    const out = [];
    for (const lang of locales) {
      // /doctors (index) → canonical single-doctor URL
      out.push({
        source: `/${lang}/doctors`,
        destination: `/${lang}/doctors/dr-sourav-shristi`,
        permanent: true,
      });
      // Retired slugs → /about (per PLAN.md §14 item 8)
      for (const slug of retiredSlugs) {
        out.push({
          source: `/${lang}/doctors/${slug}`,
          destination: `/${lang}/about`,
          permanent: true,
        });
      }
    }
    return out;
  },
};

export default nextConfig;
