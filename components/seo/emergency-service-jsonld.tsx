import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/content/site";

/**
 * Standalone EmergencyService schema for Dr. Basanta Pradhan's 24/7 line.
 * IMPORTANT (PLAN.md §3): this is NOT nested under MedicalClinic's employee graph.
 * Dr. Pradhan is an independent emergency partner physician, not a co-physician of SS Kidney Care.
 */
export function EmergencyServiceJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EmergencyService",
        name: `${site.name} — 24/7 nephrology emergency line`,
        telephone: site.emergencyContact.phone.replace(/\s/g, ""),
        provider: {
          "@type": "Physician",
          name: site.emergencyContact.name,
        },
        areaServed: { "@type": "City", name: "Sambalpur" },
      }}
    />
  );
}
