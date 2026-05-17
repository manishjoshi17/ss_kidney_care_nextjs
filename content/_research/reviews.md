# SS Kidney Care — Research notes for the Dr. Sourav Shristi pivot

> Source-of-truth for everything we publish about Dr. Shristi.
> No verbatim review text in this document is fabricated. Quotes are extracted from real platforms or marked `// TODO`.
> Update timestamps every time a section is refreshed.

Last updated: 2026-05-17 (initial research pass, plan phase).

---

## 1. Verified facts (safe to publish)

### Identity
- **Name:** Dr. Sourav Shristi
- **Qualifications (per brochure):** MBBS · MD (General Medicine) · DM Nephrology (IPGMER)  *[IPGMER institution unverified — see §5 TODOs]*
- **Title (per brochure, locked by client):** Consultant Nephrologist, Transplant Physician & Interventional Nephrologist
- **Academic affiliation (confirmed via co-author lists on the verified papers):** Assistant Professor, Department of Nephrology, VIMSAR (Veer Surendra Sai Institute of Medical Sciences and Research), Burla, Odisha — 768019
- **Portrait asset:** `public/dr-sourav-shristi.png` (already in repo)

### Clinic
- **SS Kidney Care** — SRIT Colony, 2nd Left Lane, Near LifeCare Hospital, Budharaja, Sambalpur — 768004
- Founded 2023
- Reception: +91 78490 41483
- WhatsApp (Dr. Shristi, consultation only — not voice): +91 70086 52465
- Email: `help@drsouravshristi.com`  *[mailbox liveness TODO — §5]*
- Dialysis: 6 hemodialysis machines

### Burla VIMSAR consultation point (NOT a branch)
- Sri Ram Vihar, Near ST. Luke School, Burla
- +91 79787 69447
- Disclaimer (full + short forms in Step 7 of the brief; ship both)

### 24/7 emergency contact (NOT a co-physician)
- Dr. Basanta Pradhan, MD (Medicine) — +91 86583 88080
- On-call for after-hours / acute emergencies when Dr. Shristi is unavailable
- Renders only in: site-wide emergency strip, Contact page 24/7 block, footer emergency line
- Excluded from: any "team" / "meet the doctors" section, Physician JSON-LD, MedicalClinic `employee` graph

### Aggregate social proof (verified via search snippets — JustDial live pages are JS-rendered)
- **JustDial Budharaja:** 4.9 / 5 from 486 ratings — https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Kidney-Care-Near-Budharaja-Budharaja/9999PX663-X663-240102141155-N5L6_BZDET
- **JustDial Ainthapali:** 54 detailed reviews — https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Beside-Urban-Tadka-Restarurant-Ainthapali/9999PX663-X663-231118004923-G7J9_BZDET/reviews
- **JustDial Burla listing exists** — https://www.justdial.com/Sambalpur/Kidney-Care-By-Dr-Sourav-Shristi-Burla/9999PX663-X663-250620154607-Q8H1_BZDET (count not retrievable)
- **Google Business profile:** URL the brief provided (`https://share.google/ESTgwkw1blwof7FBt`) did not resolve — TODO

### Published research (the three papers shipped on the site)

1. **Prevalence of chronic kidney disease and anemia in Hirakud Command Area, Odisha, India: unveiling the role of environmental toxicants**
   - Journal of Nephrology (Springer) · Vol 38, Issue 2, pages 563–577 · January 2025
   - Authors: Pralaya Biswas, Ashish Kumar Sahu, Sawan Kumar Sahoo, Syed Nikhat Ahmed, **Sourav Shristi**, Pradeep Kumar Naik, Iswar Baitharu
   - DOI: 10.1007/s40620-024-02169-2
   - PubMed: 39799544
   - Public URL (open access via PubMed): https://pubmed.ncbi.nlm.nih.gov/39799544/
   - Plain-English summary for the site: *"Across villages in the Hirakud agricultural belt, soil and water samples carried nephrotoxic pesticide residues; cadmium and arsenic exceeded permissible limits. CKD and anaemia were correspondingly higher than the national baseline."*
   - Why it leads: this is the kidney problem of our patient catchment.

2. **Prevalence of Anemia among Chronic Kidney Disease and Chronic Kidney Disease of unknown Etiology Patients of Bargarh District Odisha: A Cross Sectional Study**
   - Journal of Clinical Nephrology · Vol 9, Issue 4, pages 049–055 · 16 April 2025
   - Authors: **Shristi S**, Mohanty S, Nayak S, Biswas P, Sahu AK, Naik PK, Baitharu I
   - DOI: 10.29328/journal.jcn.1001155
   - Public URL (full text): https://www.clinnephrologyjournal.com/journals/jcn/jcn-aid1155.php
   - Plain-English summary: *"In Bargarh district — another agricultural community where the source of CKD is often unclear — 89% of CKD-unknown-etiology patients and 86% of CKD patients were anaemic, with microcytic anaemia more common in the unexplained group."*

3. **Impact of Early Diagnosis and Management Strategies on Long-Term Outcomes in Chronic Kidney Disease Patients**
   - SSR Institute of International Journal of Life Sciences · Vol 11, Issue 2 · March 2025
   - Authors: **Sourav Shristi**, Arun Kumar Yadav, Sunil Madhab Panda
   - DOI: Not publicly indexed — full text on `iijls.com`
   - Plain-English summary: *"Early CKD detection plus timely intervention substantially improves kidney and cardiovascular outcomes, and reduces long-term cost-of-care."*
   - Caveat: link cautiously until the journal supplies a DOI.

### Other public profiles (for `sameAs` JSON-LD; not necessarily for outbound links)
- LinkedIn (private): https://in.linkedin.com/in/sourav-shristi-8a447b20
- ResearchGate: https://www.researchgate.net/scientific-contributions/Sourav-Shristi-2281271895
- X / Twitter (sparse): https://x.com/shristisourav  *(skip per §5 decision)*
- Curofy (mislabelled): https://curofy.com/doctor/dr-sourav-shristi-internal-medicine-drsouravshusti  *(skip)*

---

## 2. Patient reviews — what ships

JustDial blocks fetching the actual review text. Per client decision, v1 ships **two layers**:

### Layer 1 — Real aggregate (verifiable, outbound-linked)
- **★ 4.9 / 5 · 486+ ratings on JustDial** — sourced from JustDial Budharaja listing, search-snippet-verified.
- Outbound CTA "Read more reviews on JustDial" → https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Kidney-Care-Near-Budharaja-Budharaja/9999PX663-X663-240102141155-N5L6_BZDET

### Layer 2 — 6 authored representative patient-story cards
- Written by the content team to reflect the practice's themes — bedside manner, local-language consultation, follow-up calls, fee transparency, time spent per patient, regional clinical specialties (CKD from environmental causes, diabetic kidney, transplant workup).
- Attribution format: `first-name + last-initial · role · city` (no fabricated month/year, no JustDial/Google source badge).
- **Not** scraped, **not** verbatim, **not** presented to the visitor as scraped content from any specific external listing.
- Story copy lives in Appendix C of `PLAN.md` and is the source for `content/testimonials.ts > i18n.{en,hi,or}.quote / attribution`.
- **Swap-in policy:** whenever the clinic supplies real verbatim quotes (with patient consent), they replace these one-for-one. Authoring them is an interim measure.

## 3. Recurring themes the stories reflect

The 6 authored stories collectively reflect these themes — each story foregrounds 1–2:

1. **Time spent on first consult** — the doctor explains what the reports actually mean, in plain language.
2. **Local-language consultation** — explanations in Odia and Hindi, not English-only.
3. **No upsell** — dietitian/follow-up plan offered without trying to sell supplements or extras.
4. **Follow-up calls** — proactive Wednesday-morning calls about new medications.
5. **Second-opinion welcome** — patients told "dialysis only" by other doctors get a thorough re-look; sometimes the answer is the same, but always explained.
6. **Pre-transplant rigour** — multi-organ workup, not just kidney-focussed.

These themes drive:
- Paragraph (c) of `<DoctorIdentityCard variant="full">` bio (clinical philosophy).
- Mission / Vision / Values copy on the About page.

---

## 4. OPD timings & fees

- **OPD timings (brochure):** 8 AM – 10 AM, 6 PM – 9 PM
- **Status:** Unverified against JustDial live data. Confirm with clinic before publishing into Contact + Doctor + `openingHours` JSON-LD.
- **Consultation fee:** Not publicly listed. **Default: do not display on site** (matches the project-wide no-cost convention).

---

## 5. Blocked / unverified — TODO log

| Item | Source | Blocker | Action |
|---|---|---|---|
| Verbatim JustDial reviews | https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Kidney-Care-Near-Budharaja-Budharaja/9999PX663-X663-240102141155-N5L6_BZDET | JS-rendered content; HTML body empty | Client paste, or Selenium scrape |
| Verbatim JustDial reviews (Ainthapali) | https://www.justdial.com/Sambalpur/Dr-Sourav-Shristi-Beside-Urban-Tadka-Restarurant-Ainthapali/9999PX663-X663-231118004923-G7J9_BZDET/reviews | Same | Same |
| Google Business profile URL | https://share.google/ESTgwkw1blwof7FBt | Short URL did not resolve | Client supply correct Maps URL |
| IPGMER training verification | https://www.ipgmer.gov.in/pdf/departments/Nephrology.pdf | SSL certificate (TLS_CERT_ALTNAME_INVALID) | Client supply DM Nephrology certificate scan |
| VIMSAR faculty-directory listing | https://vimsar.ac.in/faculties.php | HTTP 404 | Client confirm current employment status |
| "Transplant Physician" credential | Brochure only | No third-party verification | Client supply fellowship/credential certificate (decision: ship per brochure) |
| "Interventional Nephrologist" credential | Brochure only | No third-party verification | Same |
| SSR IIJLS paper DOI | https://iijls.com/ | PDF binary, no DOI indexed | Email journal for canonical DOI |
| OPD timings 8–10 AM / 6–9 PM | Brochure | Not on live JustDial | Client confirm |
| `help@drsouravshristi.com` mailbox liveness | Domain | Reachable; mailbox unclear | Client confirm + monitored |
| Dialysis-centre hours | — | Brief implies 24×7; not explicit | Client confirm |

---

## 6. Sources consulted (this pass)

- JustDial listings (3 — see URLs above)
- PubMed 39799544 — Hirakud paper
- Springer link — paywalled redirect
- Journal of Clinical Nephrology — Bargarh paper full text
- ResearchGate profile
- LinkedIn (private)
- VIMSAR official site (404)
- IPGMER official site (SSL block)
- IIJLS publisher site
- Web search snippets for aggregate rating numbers
