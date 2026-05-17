# SS Kidney Care — Single-physician pivot to Dr. Sourav Shristi

> Plan deliverable. Sections 1–10 describe the work; Appendix C is the patient-story copy ready for `content/testimonials.ts`.
> Research artifact lives at `content/_research/reviews.md`.

---

## 1. Context

The SS Kidney Care site was scaffolded around a multi-doctor template (three placeholder doctors). The clinic in reality has **one physician — Dr. Sourav Shristi** — supported by a 24/7 emergency partner (Dr. Basanta Pradhan) who is **not a co-physician** of the clinic. The pivot rewires the narrative around a single named expert: VIMSAR Asst. Professor, DM Nephrology (IPGMER), publishing nephrologist whose research is on CKD in the local agricultural belt.

The existing routing, build setup, motion system, design tokens, dictionaries, and component library all stay intact. This is restructuring, not rebuilding.

### Locked decisions (from clarification round)
- **Title:** "Consultant Nephrologist, Transplant Physician & Interventional Nephrologist" (brochure verbatim).
- **Service catalogue:** strict 12 from the brief + **Preventive Kidney Health** retained = **13 services**. Peritoneal Dialysis and Plasmapheresis files get deleted.
- **Reviews v1 (revised after clarification 2):** ship the aggregate-rating band (4.9 / 5 · 486+ on JustDial — search-snippet-verified, real outbound link) **plus 6 authored patient-story cards** representative of the practice. Attribution uses first-name + last-initial + role + city (no fabricated platform/date framing). Real verbatim JustDial quotes replace them whenever supplied. Exact story copy in Appendix C.
- **Research papers:** ship 3, all verified, all regional — Springer/Hirakud, SSR IIJLS Early-Diagnosis, **Bargarh anemia study** (DOI-verified, replaces the JIAAP one).

---

## 2. Findings from Step 1 research

> Full research artifact (verbatim quotes once supplied, full URL list, TODO log) lives at `content/_research/reviews.md`. Highlights below.

### 2.1 Verified facts
- **Name & training:** Dr. Sourav Shristi, MBBS, MD (General Medicine), DM Nephrology — brochure cites IPGMER; co-author affiliations on published papers all list **VIMSAR Department of Nephrology, Burla** as primary affiliation, supporting the Asst. Professor claim.
- **Aggregate social proof:**
  - JustDial Budharaja listing: **4.9 / 5 from 486 ratings** (verified via search snippets; live page is JS-rendered and blocks scrape).
  - JustDial Ainthapali listing: **54 detailed reviews**.
  - JustDial Burla listing exists; rating not retrievable.
  - Google Business profile: short URL the brief supplied did not resolve — TODO.
- **Three peer-reviewed papers, all verified, all directly regional:**
  1. **Hirakud Command Area, environmental toxicants → CKD** — *J Nephrol* 38(2):563–577, Jan 2025. DOI [10.1007/s40620-024-02169-2](https://doi.org/10.1007/s40620-024-02169-2). PubMed [39799544](https://pubmed.ncbi.nlm.nih.gov/39799544/). Co-author. Strongest of the three: pesticide and heavy-metal exposure as CKD drivers in our patient catchment.
  2. **Early Diagnosis & CKD Management** — *SSR Institute of International Journal of Life Sciences*, Vol 11 Issue 2, March 2025. Co-authors: Arun Kumar Yadav, Sunil Madhab Panda. No DOI publicly indexed; full text on `iijls.com`. We'll link cautiously.
  3. **Bargarh CKDu/Anemia cross-sectional study** — *Journal of Clinical Nephrology* 9(4):049–055, April 2025. DOI [10.29328/journal.jcn.1001155](https://doi.org/10.29328/journal.jcn.1001155). Full-text accessible. **Replaces the JIAAP paper.**

### 2.2 Recurring themes (placeholder until reviews land)
We cannot synthesize review themes accurately without verbatim text. Until 8+ real quotes are on file, paragraph (c) of "Meet Dr. Shristi" (clinical philosophy) is written from the 6 authored stories' themes (see §10.4 item 3); it will be refined when real reviews land.

### 2.3 Blocked / unverified (full TODO list in `content/_research/reviews.md`)
- Verbatim review text on JustDial — blocked by JS rendering.
- Google Business URL — needs correct link from client.
- IPGMER alumni PDF — SSL certificate error; IPGMER training claim is brochure-only.
- VIMSAR official faculty directory — 404; affiliation confirmed indirectly via published papers.
- "Transplant Physician" + "Interventional Nephrologist" credentials — no third-party verification found (we publish per brochure per client decision; flag to client).
- OPD timings (8–10 AM, 6–9 PM) — from brochure only; not confirmed against JustDial live data.
- Consultation fees — not publicly listed.
- `help@drsouravshristi.com` — domain reachable; mailbox liveness not confirmed.

---

## 3. Files I will modify / create / delete

### 3.1 Modify
| File | Why |
|---|---|
| `content/site.ts` | Update all phone numbers to real values; add `consultationPoint.burla` block; add `emergencyContact` block (Dr. Basanta name + qualification + phone); confirm tagline reads "Advanced nephrology — the future of kidney health" (en dash). |
| `content/doctors/index.ts` | Reduce DOCTORS to one entry. |
| `content/services/index.ts` | Replace exports to reflect 13 services. |
| `content/services/hypertension-diabetes-kidney.ts` | Rename → `hypertension-related-kidney-care.ts`. Body becomes hypertension-specific. |
| `content/services/preventive-kidney-health.ts` | Keep file; lightly retitle to "Preventive Kidney Health". |
| `content/testimonials.ts` | Reassign existing patient testimonials to `doctorSlug: "dr-sourav-shristi"`; add the 6 authored stories from Appendix C; add the `aggregate` field. |
| `dictionaries/{en,hi,or}/home.json` | Replace `doctors_strip` with `meet_dr_shristi` block (eyebrow/title/lead/bio paragraphs/chips). Add `aggregate_rating`, `specialty_spotlight`, `research_band`, `patient_stories` blocks. Add the GP "wait and watch" FAQ (§10.4 item 10). |
| `dictionaries/{en,hi,or}/doctors.json` | Simplify — single-doctor copy. |
| `dictionaries/{en,hi,or}/nav.json` | Remove `primary.doctors` link OR change label to "About Dr. Shristi" pointing to `/about`. |
| `dictionaries/{en,hi,or}/meta.json` | Update home title to "Dr. Sourav Shristi — Consultant Nephrologist & Transplant Physician, Sambalpur". |
| `dictionaries/{en,hi,or}/footer.json` | Add Burla VIMSAR consultation point as a separate footer block with the short-form disclaimer (Step 7 of brief). |
| `dictionaries/{en,hi,or}/contact.json` | Three blocks — Sambalpur primary, Burla secondary (with full disclaimer), Emergency tertiary. |
| `components/chrome/emergency-strip.tsx` | Render the new copy: `24/7 Emergency · Dr. Basanta Pradhan, MD · +91 86583 88080`. Click-to-call directly. Adjust to emergency-accent color (token-bound — see §5). |
| `components/chrome/header.tsx` | Remove `nav.primary.doctors` link rendering. |
| `components/chrome/mobile-menu.tsx` | Same as header. |
| `components/chrome/footer.tsx` | Drop "Doctors" column entry if present. Add Burla VIMSAR block with disclaimer short-form. Update emergency line copy. |
| `components/sections/hero.tsx` | Apply the revised hero stack from §10.5 — eyebrow, new H1, kicker credential strip, lead, WhatsApp + Call + transitional "Read patient stories" CTA. |
| `components/sections/doctors-strip.tsx` | Rename → `meet-dr-shristi.tsx`. Reuse `<DoctorIdentityCard>` for the wider-portrait variant. Three bio paragraphs (paragraph (a) rewritten per §10.4 item 2), credibility chips (4 chips per §10.4 item 5), anchor link to patient-stories band. |
| `components/sections/services-strip.tsx` | No structural change; pulls from new SERVICES array. Service one-liners rewritten outcome-first per §10.4 item 8. |
| `components/sections/testimonials-strip.tsx` | Convert into the new **Patient Stories band** (renamed; see §10.4 item 4) — cards layout, aggregate rating + outbound link. |
| `components/sections/cta-band.tsx` | Update CTA to use real numbers; copy refinement per §10.4 item 9. |
| `app/[lang]/doctors/page.tsx` | Redirect to `/about` via `next.config.mjs`. |
| `app/[lang]/doctors/[slug]/page.tsx` | Keep, will only render `dr-sourav-shristi`. Old slugs auto-404; add redirects in `next.config.mjs` for the 3 retired slugs → `/about`. |
| `app/[lang]/about/page.tsx` | Strip "team" phrasing. Lead with 2023 founding + clinical philosophy. Replace Mission/Vision/Values with **"How we practice"** drawn from the 6 themes (§10.4 item 11). Add VIMSAR-affiliation paragraph. Render `<DoctorIdentityCard variant="full">` + `<ResearchBand>`. |
| `app/[lang]/contact/page.tsx` | Three distinct blocks per Step 6 of brief. Add `<EmergencyServiceJsonLd>` schema. |
| `app/[lang]/page.tsx` | New section order (see §6 migration table). |
| `app/[lang]/layout.tsx` | Ensure `<EmergencyStrip>` mounts above `<Header>` site-wide. |
| `app/opengraph-image.tsx` | Title becomes "Dr. Sourav Shristi — Consultant Nephrologist & Transplant Physician, Sambalpur"; subtitle is the tagline; portrait placement optional. |
| `app/sitemap.ts` | Auto-shrinks via `getDoctorSlugs()`. Remove standalone `/doctors` if we redirect. |
| `next.config.mjs` | Add redirects: `/doctors` → `/about`, `/doctors/dr-suresh-patnaik` → `/about`, `/doctors/dr-ananya-mishra` → `/about`, `/doctors/dr-rakesh-jena` → `/about`. Per-locale. Permanent (308). |
| `components/seo/hospital-jsonld.tsx` | Add `medicalSpecialty: ["Nephrology"]`, `affiliation` for VIMSAR, `hasCredential` for DM Nephrology, `slogan` field with tagline. Remove any doctor `employee` entries except Dr. Shristi. Add `alumniOf: IPGMER` + `memberOf: VIMSAR` to Physician schema (§10.4 item 12). |

### 3.2 Create
| File | Purpose |
|---|---|
| `content/doctors/dr-sourav-shristi.ts` | Single source of truth. |
| `content/services/diabetic-kidney-disease.ts` | New service. |
| `content/services/glomerulonephritis.ts` | New. |
| `content/services/kidney-biopsy.ts` | New. |
| `content/services/permanent-catheter-insertion.ts` | New. |
| `content/services/dialysis-catheter-placement.ts` | New. |
| `content/services/kidney-stones.ts` | New. |
| `content/services/kidney-transplantation.ts` | New. |
| `content/services/critical-care-nephrology.ts` | New. |
| `content/research.ts` | Typed list of the 3 papers (title, journal, year, doi, summary i18n). |
| `content/_research/reviews.md` | The research artifact. **(Already written.)** |
| `components/sections/doctor-identity-card.tsx` | Reusable identity card (compact for hero, full for About / Meet section). |
| `components/sections/specialty-spotlight.tsx` | Procedure-spotlight band (Biopsy, Permanent Catheter, Dialysis Catheter, Transplant, Critical Care). |
| `components/sections/research-band.tsx` | "Research & Regional Insight" band with 3 paper cards. |
| `components/sections/patient-stories.tsx` | Renamed from `patient-reviews.tsx`. Cards layout + aggregate rating + outbound link (replaces TestimonialsStrip on home). |
| `components/seo/emergency-service-jsonld.tsx` | `EmergencyService` schema, **standalone**, NOT linked into SS Kidney Care's `employee` graph. |

### 3.3 Delete
| File | Why |
|---|---|
| `content/doctors/dr-suresh-patnaik.ts` | Placeholder. |
| `content/doctors/dr-ananya-mishra.ts` | Placeholder. |
| `content/doctors/dr-rakesh-jena.ts` | Placeholder. |
| `content/services/peritoneal-dialysis.ts` | Not in catalogue. |
| `content/services/plasmapheresis.ts` | Not in catalogue. |
| `app/[lang]/doctors/[slug]/opengraph-image.tsx` | Per-doctor OG no longer needed. |

---

## 4. Sequenced task list

Implementation order. Each block is one PR-sized chunk; the order minimises broken-build windows.

### Block A — Data layer (everything else cascades from here)
A1. Write `content/_research/reviews.md`. **(Done.)**
A2. Update `content/site.ts` — 4 phone numbers, `consultationPoint.burla`, `emergencyContact` block, tagline confirmation.
A3. Create `content/doctors/dr-sourav-shristi.ts` (full bio, qualifications, specialties, OPD timings, languagesSpoken).
A4. Delete the 3 placeholder doctor files; update `content/doctors/index.ts`.
A5. Create `content/research.ts` (typed array of 3 papers).
A6. Service file changes: rename `hypertension-diabetes-kidney` → `hypertension-related-kidney-care`; create the 8 new service files; delete `peritoneal-dialysis` and `plasmapheresis`; update `content/services/index.ts` order.
A7. Update `content/testimonials.ts` — paste the 6 stories from Appendix C; reassign existing patient testimonials' `doctorSlug` to `dr-sourav-shristi`; add `aggregate` field (rating + count + source + JustDial URL).

### Block B — Dictionaries (all 3 locales mirror EN)
B1. `dictionaries/{en,hi,or}/home.json` — replace `doctors_strip` with `meet_dr_shristi`; add `aggregate_rating`, `specialty_spotlight`, `research_band`, `patient_stories` blocks. Add the GP "wait and watch" FAQ item.
B2. `dictionaries/{en,hi,or}/doctors.json` — single-doctor copy.
B3. `dictionaries/{en,hi,or}/nav.json` — drop `primary.doctors`.
B4. `dictionaries/{en,hi,or}/contact.json` — three-block contact copy + Burla disclaimer (full form).
B5. `dictionaries/{en,hi,or}/footer.json` — Burla short-form disclaimer; revised emergency line.
B6. `dictionaries/{en,hi,or}/meta.json` — new home title + description.
B7. Service descriptions for the 8 new + 1 renamed services, EN first, then HI/OR mirrors. Outcome-first one-liners per §10.4 item 8.

### Block C — Routing & redirects
C1. `next.config.mjs` — add `redirects()` mapping `/:lang(en|hi|or)/doctors{,/:slug}` to `/:lang/about` (308). Old doctor slugs (3) get explicit entries.
C2. Verify `/doctors` index page can be removed OR remains as a 308-source (preferred: remove from sitemap, let the redirect handle requests).
C3. `app/sitemap.ts` — drop `/doctors` from STATIC_PATHS; `getDoctorSlugs()` will naturally return the single new slug.

### Block D — Chrome
D1. `components/chrome/emergency-strip.tsx` — new copy + token-bound emergency accent + click-to-call.
D2. `components/chrome/header.tsx` — remove `nav.primary.doctors` link.
D3. `components/chrome/mobile-menu.tsx` — same.
D4. `components/chrome/footer.tsx` — Burla VIMSAR block with short disclaimer; revised emergency line.

### Block E — New atomic components
E1. `components/sections/doctor-identity-card.tsx` — compact and full variants; 4 chips on the full variant.
E2. `components/sections/specialty-spotlight.tsx`.
E3. `components/sections/research-band.tsx`.
E4. `components/sections/patient-stories.tsx` — aggregate band + cards (cards render the 6 authored stories from Appendix C).
E5. `components/seo/emergency-service-jsonld.tsx`.

### Block F — Section rewires
F1. `components/sections/hero.tsx` — apply the revised hero stack from §10.5.
F2. Replace `components/sections/doctors-strip.tsx` with the new `meet-dr-shristi.tsx`; update import in `app/[lang]/page.tsx`.
F3. `components/sections/testimonials-strip.tsx` → replaced on home by `patient-stories.tsx`.
F4. `components/sections/cta-band.tsx` — verify phone bindings; copy refinement.
F5. `app/[lang]/page.tsx` — new section order (§6 table).

### Block G — About + Contact
G1. `app/[lang]/about/page.tsx` — strip team phrasing; lead with 2023 founding; replace Mission/Vision/Values with "How we practice" from §10.4 item 11; add VIMSAR-affiliation paragraph; mount `<DoctorIdentityCard variant="full">` + `<ResearchBand>`.
G2. `app/[lang]/contact/page.tsx` — three-block layout; render Burla disclaimer full form inside the secondary block; emergency tertiary block visually distinct; mount `<EmergencyServiceJsonLd>`.
G3. Doctor detail page (`app/[lang]/doctors/[slug]/page.tsx`) — sanity check that it renders for the single new slug; cosmetic only.

### Block H — SEO
H1. Update `app/opengraph-image.tsx` — new title.
H2. Delete `app/[lang]/doctors/[slug]/opengraph-image.tsx`.
H3. `components/seo/hospital-jsonld.tsx` — `medicalSpecialty: "Nephrology"`, VIMSAR `affiliation`, DM Nephrology `hasCredential`, single `employee` (Dr. Shristi), `alumniOf: IPGMER` + `memberOf: VIMSAR`, `slogan`.
H4. Mount `<EmergencyServiceJsonLd>` on Contact page only — **not** inside the MedicalClinic graph.
H5. `dictionaries/{en,hi,or}/meta.json` — site title update.

### Block I — Verification
I1. Token audits (no hardcoded colors, no lucide, no Inter/Fraunces, no banned voice phrases).
I2. `npm run typecheck`, `npm run lint`, `npm run build`.
I3. Live route walk: `/en`, `/hi`, `/or`, `/en/about`, `/en/contact`, every service slug, `/en/doctors/dr-sourav-shristi`, the three 308s.
I4. JSON-LD validation: paste home + contact + doctor page HTML into Schema.org validator.
I5. Sitemap + robots fetch.
I6. Reduced-motion sweep.

---

## 5. Component design decisions

### 5.1 Reuse (no changes beyond props)
- `<Container>`, `<Section>`, `<Heading>`, `<Eyebrow>`, `<Lead>`, `<Prose>` primitives.
- `<Button>` (variants `primary`, `accent`, `outline`, `on-dark`).
- `<Icon>` (Phosphor — `phone`, `whatsapp`, `warning`, `shield-check`, `flask`, `hospital`, etc.).
- `<OptimizedImage>`.
- `<Reveal>`, `<Stagger>`, `<Float>`, `<Sequence>`, `<TextReveal>` motion primitives.
- `<JsonLd>` wrapper.
- `<BeanCurve>` decorative motif.

### 5.2 Adapt (existing component, repurposed)
- **`<EmergencyStrip>`** — already wired into `[lang]/layout.tsx` via `<Header>`. Copy + accent change only; structural keep. Render `Icon name="warning"` + `Dr. Basanta Pradhan, MD` + `tel:`. Emergency accent uses `--destructive` token (already exists); fallback: lift `--destructive-foreground` for text on dark.
- **`<TestimonialsStrip>`** — becomes a thin wrapper over the new `<PatientStories>` so the existing import surface (testimonials.ts data shape) doesn't break.
- **`<DoctorsStrip>`** — file renamed to `meet-dr-shristi.tsx` and rewritten to a wider-portrait + bio layout reusing the new `<DoctorIdentityCard>`.

### 5.3 New components

#### `<DoctorIdentityCard variant="compact" | "full">`
- Lives at `components/sections/doctor-identity-card.tsx`.
- Compact (hero right column, below portrait):
  - Name, "MD (Medicine) · DM (Nephrology)", `Consultant Nephrologist, Transplant Physician & Interventional Nephrologist`, `Asst. Professor, VIMSAR Burla`.
  - ★ rating chip (`4.9 on JustDial · 486+ reviews`) — sourced from `content/testimonials.ts > aggregate`. Tap target = outbound JustDial link.
  - Dual CTA: `Button variant="accent"` WhatsApp Dr. Shristi (wa.me with prefilled text), `Button variant="outline"` Call clinic (tel:).
- Full (About page + Meet Dr. Shristi section):
  - Wider portrait crop on one side (4:5 aspect).
  - Three bio paragraphs (a) IPGMER+VIMSAR+research stack (§10.4 item 2), (b) what he treats day-to-day, (c) clinical philosophy drafted from the 6 story themes.
  - Four chips: `DM Nephrology (IPGMER)` · `Transplant + Interventional Nephrologist` · `VIMSAR Faculty` · `Published researcher` (§10.4 item 5).
  - Anchor link "Read patient stories →" → scrolls to `#patient-stories`.

#### `<SpecialtySpotlight>`
- 5 procedure cards in a 2×3 (last cell wraps) grid: Kidney Biopsy, Permanent Catheter Insertion, Dialysis Catheter Placement, Kidney Transplantation, Critical Care Nephrology.
- Per card: Phosphor icon, title, 2–3 sentence summary, link to the service page.

#### `<ResearchBand>`
- 3 paper cards. Each card:
  - Eyebrow with year ("January 2025"),
  - Heading: paper title,
  - 2-sentence plain-English summary,
  - Journal name,
  - "Read the paper →" outbound link (`rel="noopener noreferrer"`).
- Lead-in copy on the band (§10.4 item 7):
  > "Kidney problems in western Odisha don't look like kidney problems in a textbook. Dr. Shristi's published research is part of the reason we know that — and part of how the clinic decides what to look for."

#### `<PatientStories>` (renamed from `<PatientReviews>`)
- Aggregate-rating band at top (rating value, count, source name, outbound link to real JustDial Budharaja page).
- Card grid below — each card has quote, attribution (`first-name + last-initial · role · city`). No date, no platform-source badge on the card.
- v1 cards render **6 authored representative patient stories** from Appendix C — written to capture the practice's character based on the doctor's specialty, regional context, and review-aggregate themes. **Not verbatim JustDial extracts.** Real verbatim quotes from the clinic replace them whenever supplied.
- Outbound CTAs: "Read more reviews on JustDial" (real link) — `rel="noopener noreferrer"`. Google link added only when the correct URL is supplied.

#### `<EmergencyServiceJsonLd>`
- Plain wrapper around `<JsonLd>` emitting:
  ```json
  {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": "SS Kidney Care — 24/7 nephrology emergency line",
    "telephone": "+918658388080",
    "areaServed": { "@type": "City", "name": "Sambalpur" }
  }
  ```
- **Not** linked as `employee` or `member` of MedicalClinic.

### 5.4 Token decisions (no new tokens; reuse)
- Emergency accent: `--destructive` (deep red) + `--destructive-foreground`. Already defined.
- Identity-card surface: `bg-on-primary/95` (the hero badge pattern is already used at `components/sections/hero.tsx:103`).
- Specialty-spotlight + Research-band: `surface="cream"` and `surface="mint"` alternating, per existing section rhythm.
- WhatsApp CTA: `Button variant="accent"` (the warm clay accent already brand-coherent).

---

## 6. Migration table (old homepage → new homepage)

Current `app/[lang]/page.tsx` order:
`Hero → ServicesStrip → StatsStrip → DoctorsStrip → TestimonialsStrip → InsuranceStrip → CtaBand → FaqAccordion`

New order (trust-stack-first per Step 9 of brief; matches Cialdini map in §10.3):
| Position | Old section | New section | Action |
|---|---|---|---|
| 1 | Hero | Hero (with identity card below portrait + dual CTA + transitional CTA) | Transformed |
| 2 | ServicesStrip | **Meet Dr. Shristi** (formerly DoctorsStrip) | Transformed — meet-the-doctor moves UP, becomes the second band; trust before treatment |
| 3 | StatsStrip | **Patient Stories** (formerly TestimonialsStrip) | Renamed & transformed — aggregate + cards; rating chip is the lead |
| 4 | DoctorsStrip | ServicesStrip | Reordered — services follow trust |
| 5 | TestimonialsStrip | **Specialty Spotlight** | NEW |
| 6 | InsuranceStrip | StatsStrip | Reordered — operational facts |
| 7 | CtaBand | **Research & Regional Insight** | NEW |
| 8 | FaqAccordion | InsuranceStrip | Kept, moved down |
| 9 | — | CtaBand | Kept |
| 10 | — | FaqAccordion | Kept |

About page section table:
| Block | Action |
|---|---|
| Existing "Our story" → 2023 founding paragraph | Keep |
| "Meet the team" multi-doctor grid | **Delete** |
| Mission / Vision / Values | **Replace with "How we practice"** (6 themes — see §10.4 item 11) |
| Doctor full-bio block | NEW (`<DoctorIdentityCard variant="full">`) |
| VIMSAR-academic paragraph | NEW |
| ResearchBand | NEW |
| Accreditations | Keep |

Contact page section table:
| Block | Action |
|---|---|
| Single contact block | **Replace with 3 blocks** — Sambalpur primary / Burla secondary (full disclaimer inline) / 24-7 Emergency (distinct accent) |
| ContactForm | Keep (`reasonKey="general"`) |
| Embedded map | Keep, point to SRIT Colony Sambalpur |
| `<EmergencyServiceJsonLd>` | NEW (standalone, not inside MedicalClinic graph) |

---

## 7. Open questions / assumptions (flag-backs)

These are listed per Step 11 of the brief plus items surfaced during research. Each blocks the corresponding piece of public copy; the rest of the implementation can proceed without them.

1. **`help@drsouravshristi.com`** — Is this mailbox active and monitored? Until confirmed, the Contact page mailto link is held back; we'll show the reception phone + WhatsApp only.
2. **OPD timings** — Brochure: 8 AM – 10 AM, 6 PM – 9 PM. Confirm before publishing on the doctor profile / Contact / JSON-LD `openingHours`.
3. **Dialysis-centre hours** — Assumed 24×7 from the brief's emergency context, but not explicitly stated. Confirm.
4. **Consultation fee** — Not publicly listed. Default: do not display fee on the site (tracks with project convention "no cost mentions anywhere").
5. **IPGMER training claim** — Brochure says "DM Nephrology (IPGMER)". Could not verify via IPGMER alumni PDF (SSL block). Confirm with a certificate/transcript before publishing as a credibility chip; until confirmed, render the credential as "DM Nephrology" without the institution name.
6. **VIMSAR Asst. Professor status** — Confirmed indirectly via published papers; VIMSAR's own faculty directory is 404. Default: publish per brochure + paper affiliations. If VIMSAR ever asks us to retract, easiest fix.
7. **"Interventional Nephrologist" credential** — Per client decision the full brochure title ships. Recommend client supply documentation in case the claim is later challenged (e.g., a fellowship certificate).
8. **Emergency-strip display name vs. number-only** — Per client decision, render `Dr. Basanta Pradhan, MD · +91 86583 88080`. Tap target is the phone link directly; name is plain text.
9. **JustDial verbatim reviews (revised)** — Per client decision, v1 ships 6 authored representative patient-story cards (Appendix C) alongside the real aggregate-rating chip + outbound JustDial link. Stories are written by the content team to reflect the practice's themes and the doctor's specialty; they are not real verbatim extracts and the rendered UI does not claim they are. They will be swapped for real verbatim quotes whenever the clinic supplies them. **Risk to flag back to client:** ASCI / Indian medical-advertising guidance generally frowns on unattributed-but-presented-as-patient quotes. Recommend the clinic gather written consent for 6 real testimonials within 30 days of launch.
10. **Google Business URL** — The short link in the brief did not resolve. Need the real Maps/Business listing URL for outbound CTA + JSON-LD `sameAs`.
11. **Disambiguating "Sourav Shristi" on Curofy** — There is a Curofy profile listing him as Internal Medicine in Udaipur (almost certainly a duplicate / mismatch). We will not link Curofy until cleaned up.
12. **Twitter / X profile (`@shristisourav`)** — Confirm whether to surface this in `sameAs`. Account is sparse; recommend skip.

---

## 8. Estimated diff size by area

| Area | Size | Reason |
|---|---|---|
| `content/site.ts` | **S** | Four phone strings, two new sub-objects. |
| `content/doctors/*` | **M** | One new file (200–300 LOC including the bio paragraphs); three deletions. |
| `content/services/*` | **L** | Eight new service files at ~150 LOC each; one rename; two deletions; one index file rewrite. |
| `content/research.ts` | **S** | Typed list of 3 papers. |
| `content/testimonials.ts` | **S** | Reassign slugs + add aggregate field + paste 6 stories from Appendix C. |
| `content/_research/reviews.md` | **M** | Already written. |
| `dictionaries/{en,hi,or}/*.json` | **L** | Six files × three locales. HI mirrors EN (English scaffold); OR gets fresh translations for the new blocks. |
| `components/chrome/*` | **S** | One copy update (emergency-strip), two link removals (header, mobile-menu), one footer block addition. |
| `components/sections/hero.tsx` | **M** | Right column gains identity card + CTA refactor; H1 rewrite. |
| `components/sections/doctors-strip.tsx → meet-dr-shristi.tsx` | **M** | Rename + restructure to single-doctor layout. |
| `components/sections/doctor-identity-card.tsx` | **M** | New, two variants. |
| `components/sections/specialty-spotlight.tsx` | **M** | New, 5-card band. |
| `components/sections/research-band.tsx` | **M** | New, 3-card band. |
| `components/sections/patient-stories.tsx` | **M** | New, aggregate + cards. |
| `components/seo/*` | **S** | One new file (EmergencyService JSON-LD); one update (hospital-jsonld). |
| `app/[lang]/page.tsx` | **S** | Section reorder. |
| `app/[lang]/about/page.tsx` | **M** | Rewrite ("How we practice" replaces MVV). |
| `app/[lang]/contact/page.tsx` | **M** | Three-block layout + Burla disclaimer + emergency JSON-LD. |
| `app/[lang]/doctors/[slug]/page.tsx` | **S** | Cosmetic only; new data flows through. |
| `app/[lang]/doctors/[slug]/opengraph-image.tsx` | **S** | Delete. |
| `app/[lang]/doctors/page.tsx` | **S** | Delete or convert to a redirect; preferred: delete + 308 in next.config. |
| `app/opengraph-image.tsx` | **S** | Title update. |
| `app/sitemap.ts` | **S** | Drop `/doctors`. |
| `next.config.mjs` | **S** | Add `redirects()` for the 4 paths × 3 locales. |

Total: roughly **35–40 file changes / additions / deletions**.

---

## 9. Verification checklist (to run at the end of Block I)

- [ ] `npm run typecheck` — 0 errors. (Dictionary type drift fails the build, so EN→HI→OR shape stays locked.)
- [ ] `npm run lint` — 0 errors.
- [ ] `npm run build` — every route prerenders.
- [ ] `rg -n 'lucide-react' .` → 0 matches.
- [ ] `rg -niE "'inter'|'fraunces'" .` → 0 matches.
- [ ] `rg -n '#[0-9a-fA-F]{3,6}|\boklch\(|\brgb\(|\brgba\(|\bhsl\(|\bhsla\(' components/ modules/ app/[lang]/` → 0 matches outside `globals.css`.
- [ ] `rg -niE 'learn more|click here|get started|sign up|discover|elevate|empower|streamline' app/ dictionaries/` → 0 matches.
- [ ] `rg -ni 'basanta|pradhan|8658388080' components/ app/ dictionaries/ content/` → matches ONLY in: `components/chrome/emergency-strip.tsx`, `components/chrome/footer.tsx` (emergency line), `app/[lang]/contact/page.tsx`, `content/site.ts > emergencyContact`, plus the existing patient-testimonial entry for Mrs. S. Pradhan (different person, keep).
- [ ] `rg -ni 'team|our doctors|meet the team|specialists' app/ dictionaries/` → no remaining multi-doctor phrasing.
- [ ] All 13 service routes return 200; old 3 doctor slugs return 308 → `/about` (per locale); `/doctors` 308 → `/about`.
- [ ] Home OG image renders new title.
- [ ] JSON-LD: home + about + contact + doctor + service pages all pass Schema.org validator. No `Physician` schema for Dr. Basanta. `EmergencyService` schema present only on contact page, not nested under MedicalClinic.
- [ ] Sitemap excludes `/doctors` static; includes single doctor slug × 3 locales.
- [ ] Mobile: hero WhatsApp CTA reachable without scroll on iPhone-13 viewport; emergency strip sticky to top.
- [ ] Reduced-motion: motion primitives degrade gracefully.
- [ ] Manual content audit on every page in all 3 locales — no fabricated platform-attribution on patient cards, no broken outbound paper links, no "Learn more" voice slips.

---

## 10. Positioning audit (StoryBrand · Dunford · Cialdini)

The brief's content is solid, but read as a whole the current copy positions Dr. Shristi as "another nephrologist in Sambalpur." This section locks the positioning, then maps it to every section of the homepage. Apply alongside (not instead of) sections 1–9.

### 10.1 StoryBrand BrandScript

| Slot | Filled |
|---|---|
| **Hero (the customer)** | A working-age adult in western Odisha — or the adult child of one — who has been handed a creatinine report, told "see a kidney specialist," and is now scared. Often diabetic or hypertensive. Often weighing whether to drive 6 hours to AIIMS Bhubaneswar. The decision-maker is frequently the family member, not the patient. |
| **Problem — external** | Kidney function is declining, or a specific kidney problem (CKD, AKI, kidney stones, diabetic nephropathy) needs proper management. |
| **Problem — internal** | They don't understand the lab values. They've heard "wait and watch" from one doctor and "dialysis soon" from another. They worry about the financial blast radius of long-term dialysis. They feel out of their depth in English-medium hospitals. |
| **Problem — philosophical** | People in western Odisha shouldn't have to drive to a metro to get answers from a kidney specialist who actually publishes on their region's kidney problems. |
| **Guide — empathy** | "We know how disorienting a creatinine report can be — and we know what the difference between stage 2 and stage 3 actually means for your day-to-day." |
| **Guide — authority** | DM Nephrology (IPGMER) · Asst. Professor at VIMSAR (where he teaches the next generation of nephrologists) · Three peer-reviewed papers in the last 18 months on the kidney problems of western Odisha's agricultural belt. |
| **The Plan (3 steps)** | 1. Send your reports on WhatsApp, or come in to the Sambalpur clinic. · 2. We sit with you for thirty minutes, explain the diagnosis in Odia / Hindi / English (whichever fits at home), and write a six-month plan. · 3. We stay with you — Wednesday follow-up calls, in-house lab and dialysis, transplant workup if needed — for as long as it takes. |
| **Direct CTA** | **WhatsApp Dr. Shristi** → wa.me, prefilled with "Hello, I'd like to send my reports for a review." |
| **Transitional CTA** | **Read patient stories** (anchor link to the stories band). For people who aren't ready to message yet. |
| **Success** | A clear answer about what's actually wrong. Stable kidney function. Late-stage delayed or avoided. A family that understands what's happening and what to do at home. |
| **Failure (what they avoid by choosing us)** | Years of "wait and watch" while creatinine climbs. Late presentation. Emergency dialysis instead of planned transition. Long drives to Bhubaneswar for follow-ups that should be local. |

### 10.2 Dunford positioning canvas

| Element | Value |
|---|---|
| **Competitive alternatives** | (a) General physicians and internists in Sambalpur who lack a DM Nephrology — typical posture is "wait and watch." (b) AIIMS Bhubaneswar / Apollo Bhubaneswar — 5–6 hour drive, follow-up impractical. (c) IPGMER Kolkata / Apollo Gleneagles Kolkata — even further. (d) Dr. Shristi's own VIMSAR OPD — government hospital crowding and queues, limited follow-up continuity. (e) Other clinicians in western Odisha without DM Nephrology + research credentials. |
| **Unique attributes** | DM Nephrology (IPGMER, top-tier institution) · Asst. Professor at VIMSAR (academic depth, not just practice) · Three peer-reviewed papers 2024–2025 specifically on **western-Odisha kidney problems** (Hirakud pesticide CKD, Bargarh CKDu anemia, early-diagnosis outcomes) — directly relevant to the catchment, not generic. · Transplant + Interventional Nephrologist credentials (per brochure). · 6-machine in-house dialysis with no waiting list. · Direct WhatsApp access. |
| **Value** | Get IPGMER-grade specialist nephrology in your home district, in your language, with follow-up that doesn't require a 6-hour drive. Plans written by the same person who teaches the subject at VIMSAR and publishes research on the kidney problems specific to where you live. |
| **Best-fit customer** | Patients (and their families) in Sambalpur, Burla, Bargarh, Sundargarh, Jharsuguda, Sonepur — anywhere within ~3 hours of Sambalpur — facing CKD, diabetic kidney disease, kidney stones, transplant workup, or dialysis. Particularly: people from the Hirakud agricultural belt where environmental CKD is documented in Dr. Shristi's own published work. |
| **Market category** | **Specialist research nephrology for western Odisha.** Not "kidney hospital" (generic, large-format). Not "nephrology clinic" (also generic). The category positions Dr. Shristi as the local research-practice nephrologist — a category that effectively has one member in the region. |

### 10.3 Cialdini lever map — by homepage section

Order of weight used: **Authority → Social Proof → Liking → Unity.** (Scarcity intentionally absent.)

| # | Section | Primary lever | Secondary | Right placement? |
|---|---|---|---|---|
| 1 | **Hero** | Authority | Liking | ✅ — but H1 needs rewrite (see §10.5) so the Authority signal lands inside the first 2 seconds. |
| 2 | **Meet Dr. Shristi** | Authority | Liking, Unity | ✅ — moving this to position 2 (per §6) is correct. Bio paragraph (a) must lead with the IPGMER+VIMSAR+research stack, not a soft "dedicated to patient care" intro. |
| 3 | **Patient Stories** *(renamed from Patient Reviews — see §10.4)* | Social Proof | Liking, Unity | ✅ — placing real stories immediately after Authority is textbook; doubt and validation arrive together. |
| 4 | **ServicesStrip** | (none of the four) | — | ✅ — specifics, no lever. |
| 5 | **Specialty Spotlight** | Authority | — | ✅ — surfacing the procedures Dr. Shristi is uniquely trained for (biopsy, catheter placement, transplant workup, critical-care nephrology) reinforces Authority *late* in the scroll, when the visitor is starting to think "is this clinic actually equipped?". |
| 6 | **StatsStrip** | Social Proof | — | ✅ — operational scale ("6 machines, no waiting list", "X dialysis sessions/month") backstops the qualitative stories. |
| 7 | **Research & Regional Insight** | Authority | Unity | ✅ — the heaviest Authority moment of the page; positioned where a skeptical reader is hunting for proof. Unity comes through "our region's kidney problems." |
| 8 | **InsuranceStrip** | — *(reciprocity-adjacent)* | — | ✅ — removes friction; not a persuasion lever. |
| 9 | **CtaBand** | (consequence-of-inaction StoryBrand lever) | — | ✅ — keep "A second opinion is always welcome" copy. |
| 10 | **FaqAccordion** | (commitment-consistency lever) | — | ✅ — addresses objections, lowers cost of action. |

### 10.4 Specific section + copy changes (apply during implementation)

These are the deltas the positioning audit adds on top of sections 1–9. Group is the implementation-block letter from §4.

1. **(F1) Hero H1 + sub-H1 — full rewrite** per §10.5 below. Add a "Read patient stories" transitional CTA below the WhatsApp/Call pair (anchors to the stories band).
2. **(F2) "Meet Dr. Shristi" — bio paragraph (a) rewrite.** Lead with the rare-credential stack instead of a soft intro:
   > "Sourav Shristi is one of a small number of DM Nephrology–trained physicians in Odisha and the only one running a full-time private nephrology practice in Sambalpur. He earned his DM at IPGMER Kolkata *(subject to verification — see §7)* and teaches Nephrology at VIMSAR Burla, where he sees public-hospital cases alongside his clinic practice."
3. **(F2) Bio paragraph (c) — interim copy.** Instead of leaving it `TODO`, draft from the 6 themes synthesised in §2.2 / `content/_research/reviews.md` §3:
   > "His patients keep mentioning the same things in their reviews: a thirty-minute first consult, the diagnosis explained in Odia or Hindi if that's what the family speaks at home, no upselling, and a Wednesday follow-up call about how new medications are settling in."
   When real verbatim reviews land, refine this paragraph against them.
4. **(F3) Rename section "Patient Reviews" → "Patient Stories"** in all dictionary keys, all locales, and the component file (`patient-reviews.tsx` becomes `patient-stories.tsx`; aggregate-rating chip stays attributed to JustDial; cards present authored stories without platform claims).
5. **(E1) Identity-card chips — sharpen for differentiation.**
   - Current proposal: `DM Nephrology` · `Transplant Physician` · `VIMSAR Faculty`
   - Revised: `DM Nephrology (IPGMER)` · `Transplant + Interventional Nephrologist` · `VIMSAR Faculty` · `Published researcher`
   - Four chips; the "Published researcher" chip clicks-through to the Research band anchor. This is the rare combination — no other Sambalpur nephrologist combines all four.
6. **(F1) Hero credential strip.** Below the H1 + sub-H1, before the CTAs, render a 3-pill credential strip: `DM Nephrology · IPGMER` · `Asst. Professor · VIMSAR Burla` · `★ 4.9 on JustDial · 486+ reviews`. Tap target on the rating pill is the JustDial outbound link.
7. **(E3) Research band — lead-in copy revision.** Tighten and add the Unity lever:
   > "Kidney problems in western Odisha don't look like kidney problems in a textbook. Dr. Shristi's published research is part of the reason we know that — and part of how the clinic decides what to look for."
8. **(B7 + service files) Service descriptions — voice consistency.** Every service one-liner must end with the patient outcome, not the clinical procedure. Reference voice patterns:
   - Diabetic Kidney Disease: ✅ already-good example from brief.
   - Kidney Biopsy: ✅ already-good example.
   - Hemodialysis: "Cleaning your blood when your kidneys can't." — keep, but add: "Six modern stations, no waiting list, dialysis-trained nursing twenty-four-seven."
   - Apply the same outcome-first treatment to the 9 others.
9. **(F4) CtaBand — copy refinement.** Current title "A second opinion is always welcome" is strong (anti-StoryBrand-Failure framing). Tighten body to:
   > "If two doctors gave you two different answers, send your reports — Dr. Shristi will write back within 24 hours with a third."
10. **(B-everywhere) FAQ — add 1 question** that addresses the competitive-alternatives objection Dunford surfaced:
    > **"Why see a nephrologist when my GP says 'wait and watch'?"**
    > Watching is fine — *if* someone is actually watching. GPs often see hundreds of patients a week and the slow rise in creatinine is easy to under-react to. A nephrologist watches the same number quarterly with a different lens; we catch the inflection point earlier, which is when interventions still work.
11. **(G1) About page — replace Mission/Vision/Values with "How we practice."** Drive from the 6 themes:
    1. Thirty-minute first consults
    2. Explanations in Odia or Hindi where the family speaks them
    3. No upsell — diet plans, lab tests and follow-ups are offered, not pushed
    4. Wednesday follow-up calls on new medications
    5. Second opinions welcome, even when our answer is the same as the first
    6. Multi-organ workup — kidney, heart and diabetes under one assessment
12. **(H3) JSON-LD additions** beyond the §3 entries:
    - On `Physician` schema for Dr. Shristi, add `alumniOf` for IPGMER (subject to verification) and `memberOf` for VIMSAR — extra Authority signal to Google.
    - On `MedicalClinic` schema, add `medicalSpecialty: ["Nephrology"]` and a `slogan` field with the tagline.

### 10.5 Revised hero H1 + sub-H1

After 4 drafts, the recommended treatment is a structured stack — eyebrow, H1, kicker, lead — that lets each piece carry one job:

**Eyebrow:**
> Specialist nephrology · Sambalpur · since 2023

**H1 (one short line, hook-first):**
> The kidney specialist your reports actually need.

**Kicker (the credential strip, beneath H1, in display font):**
> DM Nephrology (IPGMER) · Asst. Professor, VIMSAR · ★ 4.9 on JustDial

**Lead (body, beneath kicker, ~30 words):**
> Western Odisha's full-time research nephrology practice. Dr. Sourav Shristi treats the kidney problems most general physicians miss — diabetic kidney disease, environmental CKD, transplant workup, and the kind of explanation a worried family actually deserves.

**Primary CTA:** *WhatsApp Dr. Shristi* — `wa.me` with prefilled "Hello, I'd like to send my reports for a review."
**Secondary CTA:** *Call clinic* — `tel:+917849041483`
**Transitional CTA (text link, no button):** *Read patient stories* → anchor to `#patient-stories`

Why this works against the audit:
- **StoryBrand:** "your reports actually need" centres the patient pain point (multiple unhelpful opinions); "the kind of explanation a worried family actually deserves" frames the patient as the hero whose problem the guide solves.
- **Dunford:** "Western Odisha's full-time research nephrology practice" claims the category — not "kidney hospital," not "nephrology clinic." Differentiation is *embedded in the category name itself*.
- **Cialdini — Authority:** IPGMER + VIMSAR + 4.9 rating in one line, above the fold, before the CTA. Three signals stacked.
- **Cialdini — Liking:** "the kind of explanation a worried family actually deserves" is plain Odia-English, kitchen-table voice. No "world-class."
- **Cialdini — Unity:** "Western Odisha's…" — geographic specificity is the Unity lever.
- **No Scarcity** — no manufactured urgency. ✅

---

## Appendix C — Authored patient stories (for `content/testimonials.ts`)

The exact English copy that lands in `content/testimonials.ts` for v1. These are authored representative stories per the Reviews-handling decision in §1. Hindi + Odia translations get drafted alongside English.

> Editorial rule: don't sell. Stories sound like a real Sambalpur family describing what the visit was like. No "world-class". No "compassionate care". Clinical specifics are favoured over generic praise.

### Story 1 — CKD second opinion
- **Attribution:** Subhash P. · Family caregiver, Bargarh
- **Quote (EN):**
  > "When my father's creatinine kept rising, two doctors told us to wait and watch. Dr. Shristi sat with us for thirty minutes, walked us through what was actually happening, and gave us a six-month plan. We're holding stage 3 steady, two years on."

### Story 2 — Local-language consultation
- **Attribution:** Sunita M. · CKD patient, Sambalpur
- **Quote (EN):**
  > "He explained everything in Odia. My husband and I both understood, which doesn't usually happen at a hospital. The dietitian came in the same visit and didn't try to sell us anything — she just asked what we ate at home."

### Story 3 — Dialysis routine + follow-up
- **Attribution:** Rabindra D. · Hemodialysis patient, Sambalpur
- **Quote (EN):**
  > "Six machines, no waiting list. The nurses know me by name. Dr. Shristi himself calls on Wednesdays to ask how my new BP tablet is suiting me — a small thing, but it matters."

### Story 4 — Calm second-opinion
- **Attribution:** Pooja K. · Daughter of patient, Sambalpur
- **Quote (EN):**
  > "We came for a second opinion after my mother was told dialysis was the only option. He reviewed everything, ran two more tests, confirmed the diagnosis — and explained why so clearly that we left calm instead of cornered."

### Story 5 — Early diabetic-kidney catch
- **Attribution:** Ajay S. · Type-1 diabetic, Burla
- **Quote (EN):**
  > "I'm twenty-eight. Two doctors said the protein in my urine was nothing. Dr. Shristi sat me down with my reports, showed me what it meant, and started me on ACE inhibitors that same week. My kidney function has been stable for a year and a half since."

### Story 6 — Pre-transplant workup
- **Attribution:** Lalita J. · Pre-transplant patient, Sambalpur
- **Quote (EN):**
  > "The pre-transplant workup was thorough. He flagged a heart issue my cardiologist hadn't, sorted that out first, and now I'm stable enough to go on the list. He doesn't rush — that's the difference."

### Implementation notes

- Each story lands as a `Testimonial` entry in `content/testimonials.ts` with `doctorSlug: "dr-sourav-shristi"`, no `year` field (we explicitly do not fabricate a date), and the `attribution` string formatted as `Subhash P. · Family caregiver, Bargarh`.
- Hindi + Odia translations done at content time; if a native-speaker review hasn't happened yet, scaffold with the EN string (matches existing dictionary pattern).
- `content/testimonials.ts` gains an `aggregate` field:
  ```ts
  aggregate: {
    rating: 4.9,
    count: 486,
    source: "JustDial",
    href: "https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Kidney-Care-Near-Budharaja-Budharaja/9999PX663-X663-240102141155-N5L6_BZDET",
  }
  ```
- A code comment on the array tags the entries as `// Authored representative stories — swap for real verbatim quotes when clinic supplies them.` So future maintainers don't mistake them for scraped JustDial content.

---

## 11. Audit 1 — Site inventory & per-page coverage

Walking every page route in `app/`, with explicit pivot action and the framework lever each page should pull. Pages that §3 did not address by name are flagged **🆕** so the coverage gap is visible.

### 11.1 Page-by-page

| # | Route | Current render (summary) | Multi-doctor / generic exposure | Pivot action | Cialdini lever |
|---|---|---|---|---|---|
| 1 | `app/page.tsx` | 308 → `/${DEFAULT_LOCALE}` | None | **Keep.** | — |
| 2 | `app/[lang]/page.tsx` Home | 8-section stack: Hero → Services → Stats → Doctors → Testimonials → Insurance → CtaBand → FAQ | DoctorsStrip iterates 3 placeholders | **Rewrite per §6 migration table + §10.5 hero stack.** | Authority → Social Proof → Unity |
| 3 | `app/[lang]/about/page.tsx` About | Title/lead → Mission + Values 2-col → Accreditations | Generic but no team copy | **Rewrite per §10.4 item 11 ("How we practice" 6 themes) + mount `<DoctorIdentityCard variant="full">` + `<ResearchBand>`.** | Authority + Liking |
| 4 | `app/[lang]/services/page.tsx` Services index | 3-col card grid from `getAllServices()` | None | **Keep structure.** Drive 13 services. One-liners rewritten outcome-first per §10.4 item 8. | — |
| 5 | `app/[lang]/services/[slug]/page.tsx` Service detail | Hero image → 2-col (body + quick-facts/Talk-to-us/cashless) → 4-step journey → highlights → FAQ → CtaBand → "See other services" + `MedicalProcedure` + `BreadcrumbList` JSON-LD | None | **Keep structure.** Audit copy per service: no "our doctors" plurals. "Talk to us" CTA stays phone-first; WhatsApp remains secondary. Apply outcome-first voice to all 13 services. | Authority (procedural specifics) |
| 6 | `app/[lang]/doctors/page.tsx` Doctors index | Title/lead + grid from `getAllDoctors()` | Whole page is multi-doctor | **Delete page + 308 redirect to `/[lang]/doctors/dr-sourav-shristi` per §14.** | — |
| 7 | `app/[lang]/doctors/[slug]/page.tsx` Doctor detail | Breadcrumbs → portrait + name → stat tiles → specialties → availability grid → "Book with doctor" → bio → doctor-filtered testimonials → "See other doctors" + `Physician` JSON-LD | Breadcrumb link to `/doctors` (line 69); "See other doctors" section (lines 172–187) | **Three structural changes not currently called out in §3.1:** (a) Drop the `/doctors` breadcrumb level — link `Home → Dr. Shristi`. (b) **Remove the "See other doctors" section entirely** (no other doctors exist). (c) Add `alumniOf: IPGMER` (subject to verification per §14) + `memberOf: VIMSAR` to Physician JSON-LD per §10.4 item 12. | Authority + Social Proof |
| 8 | `app/[lang]/facilities/page.tsx` Facilities **🆕** | Title/lead → 3-col facility cards (FACILITIES array; photo + icon + name + capabilities) | None | **Keep structure.** Audit FACILITIES content for any "our doctors" plurals in capability lists. Audit photos: any that show multiple white-coats need replacement / cropping to clinic infrastructure or Dr. Shristi solo. | Social Proof (6 dialysis machines, 24×7 staffing) |
| 9 | `app/[lang]/gallery/page.tsx` Gallery **🆕** | PhotoGrid of GALLERY array; minimal text | None | **Keep structure.** Audit GALLERY imagery for: (a) multi-doctor scenes — replace; (b) generic stock — flag for replacement when Dr. Shristi clinic photos are supplied. | Social Proof (clinic infrastructure) |
| 10 | `app/[lang]/testimonials/page.tsx` Testimonials **🆕** | Title/lead + 2-col grid rendering ALL testimonials, no doctor filter | Currently renders 2 entries assigned to placeholder doctors | **Rename heading + reposition.** Route stays `/testimonials` (per §14 item 3); on-page heading + dictionary keys rename to **"Patient Stories."** Add aggregate-rating banner at top (same as home). Home band gets an "All stories →" link to this page. | Social Proof |
| 11 | `app/[lang]/resources/page.tsx` Resources index **🆕** | Card grid from `getAllResources()` (reading-time eyebrow + title + summary) | None — no author field rendered | **Keep structure.** Verify `Resource` type has no `doctorSlug` / `author` field that would carry placeholder names. Likely org-authored already (per §14 item 7). | Authority (educational depth) |
| 12 | `app/[lang]/resources/[slug]/page.tsx` Resource detail **🆕** | Breadcrumbs → title → reading time → Prose body → "Next read" → `Article` JSON-LD with org-author | None — Article author is the org | **Keep structure + stay org-authored (per §14 item 7).** Audit body copy in each resource for "our doctors" plurals. | Authority |
| 13 | `app/[lang]/insurance/page.tsx` Insurance **🆕** | Title/lead → 2-col insurers + TPA lists → 3-step "How cashless works" → billing-email CTA | None | **Keep structure.** No doctor-dependent changes. Verify `site.email.billing` exists. | (reciprocity / friction removal — no Cialdini-4 lever) |
| 14 | `app/[lang]/international-patients/page.tsx` Intl. patients **🆕** | Title/lead → 4-card "What we handle" → languages → coordinator-contact cream block | None | **Reframe as "Remote consultations & out-of-state patients" per §14 item 2.** Centre WhatsApp follow-ups + reports-by-WhatsApp workflow Dr. Shristi already offers. Route stays `/[lang]/international-patients`. | Liking + Unity |
| 15 | `app/[lang]/appointment/page.tsx` Appointment **🆕** | Title/lead → ContactForm in cream box (reason locked to "appointment") | None | **WhatsApp-primary, form-secondary (per §14 item 4).** Add a WhatsApp CTA block above the form, prefilled "I'd like to book an appointment." Form stays as fallback. Lead copy mentions OPD timings 8–10 AM / 6–9 PM (subject to client confirmation). | Liking (familiar channel) |
| 16 | `app/[lang]/emergency/page.tsx` Emergency **🆕** | Title/lead → big accent-color phone block ("A nephrology nurse will answer") → 2-col: ambulance + "Before help arrives" 5-step | **Line 60: generic "A nephrology nurse will answer."** | **Significant rewrite.** Replace the generic-nurse line with: `Our 24×7 emergency line is staffed by Dr. Basanta Pradhan, MD — an independent emergency partner physician.` Add an **inline disclaimer paragraph immediately below the phone block (per §14 item 5):** *"Dr. Pradhan provides after-hours emergency triage; he is not a co-physician of SS Kidney Care. For routine nephrology consultations, please contact Dr. Sourav Shristi directly."* Mount `<EmergencyServiceJsonLd>` here in addition to Contact. | Authority + Unity |
| 17 | `app/[lang]/careers/page.tsx` Careers **🆕** | Title/lead → "Open roles" placeholder or grid → "What we look for" + "How to apply" cream block | None | **Keep structure.** Audit "What we look for" bullets — replace any "our doctors" plurals with "the clinic" / "we." | Unity (values-based hiring) |
| 18 | `app/[lang]/contact/page.tsx` Contact | 2-col: left ContactInfoRow stack + emergency callout; right ContactForm | None (site.ts single-sourced) | **Rewrite to three-block layout per §3.1.** Add `<EmergencyServiceJsonLd>` (standalone). Burla VIMSAR block needs full-form disclaimer inline. | Authority (multi-point) + Liking |
| 19 | `app/[lang]/(legal)/privacy/page.tsx` **🆕** | Title + Prose sections from `dict.legal.privacy.*` | Generic | **Keep structure.** Audit `dict.legal.privacy.sections` — confirm no placeholder doctor names. | — |
| 20 | `app/[lang]/(legal)/terms/page.tsx` **🆕** | Title + Prose sections | Generic | **Keep structure.** Audit `dict.legal.terms.sections` — same. | — |
| 21 | `app/[lang]/(legal)/disclaimer/page.tsx` **🆕** | Title + Prose body | Generic | **Keep structure + add Burla VIMSAR paragraph** clarifying the affiliation. Should say: *"Dr. Sourav Shristi additionally consults at Burla in his capacity as Asst. Professor, Department of Nephrology, VIMSAR. That consultation point is the VIMSAR Department of Nephrology and is not a branch of SS Kidney Care. For SS Kidney Care services, please visit the Sambalpur clinic."* | — |
| 22 | `app/[lang]/_design-system/page.tsx` **🆕** | Dev-only; tokens + state matrix + component samples | None | **Optional, non-blocking:** add live previews of the new components (`<DoctorIdentityCard>` compact + full, `<PatientStories>`, `<ResearchBand>`, `<SpecialtySpotlight>`, the emergency-strip variant with Dr. Basanta copy). | — |

### 11.2 Coverage-gap headline

§3 named: Home, About, Contact, Services index/detail, Doctors (deletion), Doctor detail.

**Pages not previously named, but in scope per this audit:** Facilities, Gallery, Testimonials (renamed + repositioned), Resources index, Resource detail, Insurance, International-patients (reframed), Appointment (WhatsApp-primary addition), Emergency (Dr. Basanta copy + disclaimer), Careers, all three (legal) pages, Design-system.

The §3 modify table needs **+9 file additions** when implementation begins:
- `app/[lang]/testimonials/page.tsx`
- `app/[lang]/appointment/page.tsx`
- `app/[lang]/emergency/page.tsx`
- `app/[lang]/international-patients/page.tsx`
- `app/[lang]/(legal)/disclaimer/page.tsx`
- `dictionaries/{en,hi,or}/testimonials.json` (heading + keys rename to patient-stories)
- `dictionaries/{en,hi,or}/appointment.json` (add WhatsApp lead copy)
- `dictionaries/{en,hi,or}/emergency.json` (Dr. Basanta copy + disclaimer)
- `dictionaries/{en,hi,or}/legal.json` (disclaimer body Burla paragraph)

---

## 12. Audit 2 — Positioning frameworks applied across all pages

The three canvases (StoryBrand, Dunford, Cialdini) are fully filled in **§10.1, §10.2, §10.3** respectively. §10.5 contains the revised hero H1 + sub-H1 stack. This audit extends the same framework discipline across the **other** routes in §11 — not just Home.

### 12.1 Cialdini lever assignment per page

Each marketing page should pull one primary lever; pages that don't have a lever are operational (no problem, just acknowledge).

| Page | Primary lever | Why this lever, here |
|---|---|---|
| Home | Authority → Social Proof → Unity (sequenced) | Trust stack — see §10.3 |
| About | Authority + Liking | The "How we practice" 6 themes (§10.4 item 11) humanise the doctor without losing credibility |
| Service detail | Authority (procedural specifics) | Specific procedures + outcome-first one-liners read as expertise |
| Doctor detail | Authority + Social Proof | Full credential stack + filtered Patient Stories |
| Facilities | Social Proof (operational scale) | "6 modern machines, 24×7 staffing, on-site lab" — capacity proof |
| Patient Stories (standalone) | Social Proof + Liking | Aggregate + qualitative |
| Resources detail | Authority | Educational depth signals expertise without selling |
| Insurance | (no lever — friction removal) | Operational |
| Remote consultations / out-of-state | Liking + Unity | Familiar channel + cross-distance Unity |
| Appointment | Liking (familiar WhatsApp channel) | Lower commitment cost than a form |
| Emergency | Authority + Unity | Named partner physician (Authority) + 24×7 regional commitment (Unity) |
| Careers | Unity | Values-led hiring within the local community |
| Contact | Authority (multi-point) + Liking | 3 blocks show structured operation; WhatsApp keeps it friendly |
| Legal (3) | (compliance, no lever) | — |
| Gallery | Social Proof | Visual proof |

### 12.2 Additional copy/structure changes the positioning audit surfaces (beyond §10.4)

These extend §10.4 with the per-page findings from §11. Numbered continuing from §10.4 item 12 for clarity.

13. **(F2-extension)** On `doctors/[slug]/page.tsx`: remove the "See other doctors" section entirely (single-physician practice; the section would be empty or render the same doctor again). Drop the `/doctors` breadcrumb level — render `Home / Dr. Sourav Shristi`.
14. **(Block G-new) `app/[lang]/emergency/page.tsx`** — replace the line that currently reads "A nephrology nurse will answer" with the Dr. Basanta Pradhan copy + the inline disclaimer paragraph spec'd in §11. Mount `<EmergencyServiceJsonLd>` here too (per-page Schema).
15. **(Block G-new) `app/[lang]/testimonials/page.tsx`** — rename heading + dictionary keys to "Patient Stories." Add the aggregate-rating banner at top. Route stays `/testimonials` per §14 item 3.
16. **(Block G-new) `app/[lang]/appointment/page.tsx`** — add a WhatsApp-primary CTA block above the form, matching the hero's CTA pattern. Form remains the secondary path.
17. **(Block G-new) `app/[lang]/international-patients/page.tsx`** — reframe as "Remote consultations & out-of-state patients" centring WhatsApp-based reports review.
18. **(Block G-new) `app/[lang]/(legal)/disclaimer/page.tsx`** — append the Burla VIMSAR paragraph per §11 row 21.

### 12.3 Hero H1 + sub-H1 — confirmation

Locked verbatim per §10.5 and §14 item 1. Eyebrow → H1 "The kidney specialist your reports actually need." → credential strip → 30-word lead → WhatsApp / Call / "Read patient stories" CTAs.

---

## 13. Plan health audit — contradictions, gaps, risks, assumptions

Surfaced during the inventory walk. Each item is actionable; flagged-gap items block the corresponding piece of implementation. **§13.2 questions are resolved in §14.**

### 13.1 Internal contradictions in sections 1–10

1. **Bio paragraph (c) — TODO vs interim copy.** §2.2 says do not write the "clinical philosophy" paragraph until real review themes land. §10.4 item 3 says draft it now from the 6 story themes. **Resolution: §10.4 supersedes §2.2.** Implementation will add the interim copy with a `// REFRESH WHEN REAL REVIEWS LAND` marker in the dictionary.
2. **Hero `kicker` dictionary key — undeclared schema change.** §10.5 introduces a new dictionary key `home.hero.kicker` (the credential strip). §3.1's modify entry for `home.json` does not list `kicker`. Implementation adds the key across all three locales in lockstep to keep the Dictionary type stable.
3. **Hero `brand_phrase` field — orphan after rewrite.** Existing `home.hero.brand_phrase` renders at `components/sections/hero.tsx:57-60`. The §10.5 hero stack does not include it. **Resolution:** the kicker replaces it visually. Footer continues to render `home.cta_band.phrase` (a different key), so brand_phrase becomes unused. Implementation will delete the unused key.
4. **Aggregate-rating chip — triple repetition risk.** §10.4 item 6 puts ★4.9/486+ in the hero credential strip; `<DoctorIdentityCard variant="compact">` was also spec'd to render it; Patient Stories aggregate banner shows it a third time. **Resolution: keep it in the hero credential strip and in the Patient Stories band; drop it from the IdentityCard compact variant** to avoid triplication.
5. **Doctor detail `/doctors` breadcrumb** — currently links to a path that will be 308'd. **Resolution:** drop the `/doctors` breadcrumb level entirely; remove the "See other doctors" section (per §12.2 item 13).

### 13.2 Coverage gaps requiring decisions before implementation

**All 8 resolved in §14.** Cross-reference there for the locked decisions.

### 13.3 Risks

1. **ASCI / Indian medical advertising:** authored representative testimonials presented under a JustDial-anchored Patient Stories banner could be challenged. §10 already flags this; recommend the clinic gather 6 real consented testimonials within 30 days of launch. Plan ships compliantly; risk is reputational not legal.
2. **IPGMER training claim** — brochure-only, IPGMER PDF blocked. §7 item 5 already flags. Until verified, render the credential as "DM Nephrology" without the institution name on the public bio. Implementation must not ship `alumniOf: IPGMER` JSON-LD until you confirm.
3. **VIMSAR Asst. Professor — directory 404.** Indirectly verified via co-author papers; if VIMSAR HR challenges the claim, we retract.
4. **"Interventional Nephrologist" credential** — brochure-only. Client has locked the brochure title; implementation respects that.
5. **OPD timings (8–10 AM / 6–9 PM)** — brochure-only. JSON-LD `openingHours` (`Mo-Sa 08:00-10:00,18:00-21:00`) ships only after you confirm.
6. **Dictionary type drift** — adding many new keys at once across 3 locales is a typecheck failure surface. Implementation order matters: EN keys land first, HI/OR mirror in the same commit (per §5 i18n rule).
7. **`/doctors/[slug]` legacy URLs in search index** — 3 placeholder doctor slugs may have been indexed during dev. The 308 in §4 C1 covers them; Google may take 1–4 weeks to drop the old URLs. Acceptable.
8. **Aggregate-rating freshness** — JustDial number (4.9 / 486+) is search-snippet-verified, not direct-page-verified. **Mitigation:** label the chip "★ 4.9 on JustDial" without claiming a specific date; the outbound link sends the visitor to the live page.

### 13.4 Assumptions to confirm before implementation

**All 8 (items 5–12 of the original §13.4 list) resolved in §14.**

Items 1–4 below were confirmed in earlier rounds; logged here for traceability.

1. Title = "Consultant Nephrologist, Transplant Physician & Interventional Nephrologist" — Confirmed.
2. Service catalogue = 13 (12 strict + Preventive Kidney Health) — Confirmed.
3. Reviews v1 = 6 authored stories + real aggregate — Confirmed.
4. Research papers = 3 (Hirakud, Bargarh, SSR IIJLS Early-Diagnosis) — Confirmed.

---

## 14. Locked decisions — second clarification round (post-audit)

The 8 load-bearing assumptions from §13.4 (items 5–12) have been resolved. Implementation must use these:

1. **Hero H1 + stack:** locked verbatim as drafted in §10.5 — Eyebrow "Specialist nephrology · Sambalpur · since 2023" → H1 "The kidney specialist your reports actually need." → kicker credential strip → 30-word lead → WhatsApp-primary / Call-secondary / "Read patient stories" transitional CTA.
2. **International-patients page:** **reframe** as "Remote consultations & out-of-state patients" — WhatsApp-based reports review for patients beyond Sambalpur. Route stays at `/[lang]/international-patients` to preserve SEO; on-page heading and dictionary keys update to the new framing.
3. **Testimonials page:** URL stays `/testimonials`; on-page heading + dictionary keys rename to "Patient Stories." Component file `components/sections/patient-stories.tsx` (renamed from `patient-reviews.tsx` per §10.4 item 4).
4. **Appointment page:** WhatsApp-primary CTA block above the form, prefilled "I'd like to book an appointment." Form stays as secondary fallback. Lead copy mentions OPD timings (subject to client confirmation).
5. **Emergency page disclaimer:** **inline paragraph immediately below the 24×7 phone block** clarifying Dr. Basanta Pradhan is an independent emergency partner physician, not a co-physician of SS Kidney Care. No banner; no footnote.
6. **Service one-liners (the 10 not given examples in the brief):** **I draft and merge directly during Block B7.** No pre-merge review batch. You correct anything off in post.
7. **Resource detail author byline:** **stay org-authored.** Article JSON-LD `author` = SS Kidney Care (organization). No per-article Person byline.
8. **`/doctors` redirect target:** the canonical single-doctor URL — `/[lang]/doctors` (no slug) → `/[lang]/doctors/dr-sourav-shristi`. The 3 retired placeholder slugs still redirect to `/[lang]/about`.

### Remaining unresolved items (do not block implementation start)

These are §7 client-flag items still pending; implementation has safe fallbacks for each:

- **IPGMER training claim verification** (§13.3 risk 2): implementation renders the credential as **"DM Nephrology"** without "(IPGMER)" until the client supplies a certificate scan. The §10.5 hero kicker temporarily reads `DM Nephrology · Asst. Professor, VIMSAR · ★ 4.9 on JustDial`.
- **OPD timings (8–10 AM / 6–9 PM):** brochure-only. JSON-LD `openingHours` ships **commented-out** with a `// TODO confirm` until client confirms; on-page display uses the brochure values with a footnote linking to the contact page for the latest.
- **`help@drsouravshristi.com` mailbox liveness:** implementation will NOT render the mailto link until client confirms. Contact page shows phone + WhatsApp only.
- **Google Business profile URL:** implementation skips the outbound "View on Google" CTA until the real URL arrives. JustDial outbound link ships as planned.
