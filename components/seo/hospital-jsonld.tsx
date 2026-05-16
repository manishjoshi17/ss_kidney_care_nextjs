import { JsonLd } from "./json-ld";
import { site } from "@/content/site";
import { ACCREDITATIONS } from "@/content/accreditations";
import { env } from "@/lib/env";

export function HospitalJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: site.name,
    legalName: site.legalName,
    url: env.NEXT_PUBLIC_SITE_URL,
    telephone: site.phoneNumbers.general,
    email: site.email.general,
    foundingDate: String(site.established),
    medicalSpecialty: ["Nephrology", "Kidney transplantation", "Dialysis"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLines[0],
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751012",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.latLng.lat,
      longitude: site.latLng.lng,
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"],
    availableService: [
      { "@type": "MedicalProcedure", name: "Hemodialysis" },
      { "@type": "MedicalProcedure", name: "Peritoneal dialysis" },
      { "@type": "MedicalProcedure", name: "Kidney transplantation" },
      { "@type": "MedicalTherapy", name: "Chronic kidney disease management" },
    ],
    hasCredential: ACCREDITATIONS.map((a) => ({
      "@type": "EducationalOccupationalCredential",
      name: a.name,
      credentialCategory: a.short,
    })),
  };
  return <JsonLd data={data} />;
}
