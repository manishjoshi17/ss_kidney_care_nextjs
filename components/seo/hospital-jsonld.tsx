import { JsonLd } from "./json-ld";
import { site } from "@/content/site";
import { ACCREDITATIONS } from "@/content/accreditations";
import { drSouravShristi } from "@/content/doctors/dr-sourav-shristi";
import { env } from "@/lib/env";

export function HospitalJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    legalName: site.legalName,
    url: env.NEXT_PUBLIC_SITE_URL,
    telephone: site.phoneNumbers.general.replace(/\s/g, ""),
    email: site.email.general,
    foundingDate: String(site.established),
    slogan: site.taglineI18n.en,
    medicalSpecialty: ["Nephrology"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLines.slice(0, 2).join(", "),
      addressLocality: "Sambalpur",
      addressRegion: "Odisha",
      postalCode: "768004",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.latLng.lat,
      longitude: site.latLng.lng,
    },
    // OPD timings from brochure — TODO confirm before launch (PLAN.md §14 fallbacks).
    // Until confirmed, openingHours is intentionally omitted from the schema.
    availableService: [
      { "@type": "MedicalProcedure", name: "Hemodialysis" },
      { "@type": "MedicalProcedure", name: "Kidney biopsy" },
      { "@type": "MedicalProcedure", name: "Permanent catheter insertion" },
      { "@type": "MedicalProcedure", name: "Dialysis catheter placement" },
      { "@type": "MedicalProcedure", name: "Kidney transplantation workup" },
      { "@type": "MedicalTherapy", name: "Chronic kidney disease management" },
      { "@type": "MedicalTherapy", name: "Diabetic kidney disease management" },
      { "@type": "MedicalTherapy", name: "Critical care nephrology" },
    ],
    employee: [
      {
        "@type": "Physician",
        name: drSouravShristi.i18n.en.name,
        jobTitle: drSouravShristi.i18n.en.title,
        knowsLanguage: drSouravShristi.languagesSpoken,
        memberOf: {
          "@type": "MedicalOrganization",
          name: "Veer Surendra Sai Institute of Medical Sciences and Research (VIMSAR), Burla — Department of Nephrology",
        },
        hasCredential: drSouravShristi.qualifications.map((q) => ({
          "@type": "EducationalOccupationalCredential",
          name: q,
        })),
        // alumniOf: IPGMER — held back per PLAN.md §14 fallback (training claim unverified).
      },
    ],
    hasCredential: ACCREDITATIONS.map((a) => ({
      "@type": "EducationalOccupationalCredential",
      name: a.name,
      credentialCategory: a.short,
    })),
  };
  return <JsonLd data={data} />;
}
