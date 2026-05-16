# SS Kidney Care — Voice & Microcopy Guide

This is the source of truth for the words on this site. Every dictionary entry, every CTA, every error message goes through this filter. If you can't reconcile a string with this guide, **change the string, not the guide** (or open a discussion).

The voice should feel like a thoughtful nephrologist who's also good at explaining things to your mother. Warm. Plain-spoken. Never condescending. Never marketing.

---

## 1. Who's speaking, who's listening

- **We** = SS Kidney Care (the hospital, the team, the people).
- **You** = the patient, the caregiver, the visitor. Never "the patient" in third person.
- **Never** "users," "customers," "clients." Patients are patients.

> ✅ "We'll call you within 24 hours."
> ❌ "Users will be contacted within 24 hours."

> ✅ "Bring your previous reports if you have them."
> ❌ "Patients should arrive with prior medical documentation."

---

## 2. Tone

- **Warm**, not cold. Hospital sites default to "cold/clinical/professional" — we trade that for "calm/clear/human." A hospital is intimidating; the website shouldn't add to that.
- **Plain-spoken**, not jargon-first. Lead with the everyday word; the medical term goes in parentheses if it's useful.
  - ✅ "Cleaning your blood when your kidneys can't (hemodialysis)."
  - ❌ "Renal replacement therapy via hemodialysis."
- **Honest about uncertainty.** Don't oversell. Ranges and "depends on the case" are okay.
- **Calm about urgency.** Emergencies get direct, fact-first sentences. No exclamation marks, no "URGENT!"

  > ✅ "Call 1800-XXX-XXXX. Our 24×7 line is staffed by a nephrology nurse."
  > ❌ "Need urgent care? We're here for you 24/7! Don't wait!"

- **Indian-English idioms welcome.** "Revert with the report," "do the needful," "kindly," "consultant," "Sister" (for senior nurses), "OPD/IPD" — all fine; they're how readers speak. Avoid Americanisms ("appointment slot" instead of "appt") and avoid overly British registers ("kindly" once per page is plenty).
- **Respectful of patient knowledge.** Many readers already know more about their condition than a generalist; don't explain CKD to a CKD patient mid-sentence — let them skip if they want.

---

## 3. Banned phrases

If any of these appear in dictionary copy, **replace them**. They are the linguistic equivalent of `bg-gray-500`.

| Banned | Replace with |
|---|---|
| Learn more | Read the guide / See how it works / About this service |
| Click here | (Make the link descriptive — "see all services," "read Dr. {name}'s profile") |
| Get started | Talk to a nephrologist / Schedule a consultation / Begin here |
| Sign up | Subscribe to health tips (if newsletter) — otherwise, remove |
| Discover | See / Explore / Read about |
| Unlock | (Reword — usually points to a marketing-y thought) |
| Elevate | (Reword — same) |
| Streamline | Make simpler / Reduce steps |
| Empower | Help / Support |
| Cutting-edge | Modern / Up-to-date / Backed by current evidence |
| State-of-the-art | (As above — show the equipment instead of describing it) |
| World-class | (Just remove — readers know to discount this) |
| Personalized | (Specific: "fits your day-to-day," "matched to your test results") |
| Holistic | Whole-person / Across nephrology + diet + counselling |
| Synergy / synergize | (Reword — no, never) |
| Game-changer | (Remove) |
| Leverage | Use |
| Utilize | Use |
| Robust | Strong / Reliable |
| Solutions | (Just say what it is) |
| Journey | Care plan / Path / Process — only use "journey" when you mean the patient's life trajectory |
| At the heart of | (Just remove the phrase) |
| Passionate about | (Just say what you do) |

---

## 4. CTA bank — use these, write nothing else generic

Buttons and links should tell readers what happens next, specifically.

| Where | Primary | Secondary |
|---|---|---|
| Home hero | **Talk to a nephrologist** | Find your care plan |
| Services index | **Find your care plan** | See all treatments |
| Service detail | **Schedule a consultation** | Chat on WhatsApp |
| Doctors index | (None — let the cards CTA) | — |
| Doctor detail | **Book with Dr. {last_name}** | See other consultants |
| Resources index | **Read the guide** | See more resources |
| Insurance | **Check if we're empanelled** | Talk to billing |
| Appointment | **Schedule the visit** | (one CTA — no secondary) |
| Contact | **Send the message** | Call our 24×7 line |
| Emergency | **Call our 24×7 line** | Request an ambulance |
| Footer (newsletter, if shipped) | **Subscribe to health tips** | — |

**Rules:**
- Verb-first.
- Specific over generic. "Book with Dr. Mishra" beats "Book now."
- No exclamation marks. No emojis in CTAs.
- If a button would say "Learn more," **the link text should describe the destination instead.** Make the page name itself a CTA when it can be.

---

## 5. Errors and validation

Lead with the **need**, not the problem. Patients are filling forms in waiting rooms, on slow networks, in stress.

| Bad | Good |
|---|---|
| Phone is required | We'll need a phone number to call you on. |
| Email is invalid | That doesn't look like an email — could you double-check? |
| Message must be at least 10 characters | Please add a bit more so we can help — even a sentence or two is fine. |
| Server error 500 | Something on our end went wrong. Could you try again, or call **1800-XXX-XXXX**? |
| Network error | The form couldn't go through. Check your connection and try again. |
| Rate limited | We've received your messages — give us a moment to read them. |

**Where errors appear:**
- Inline, under the relevant field.
- Icon (alert circle, from Phosphor) **and** a token-color **and** text — never color alone.
- On submit, the first invalid field gets focus.

**On success of the contact / appointment form:**
- Form collapses, an `<InPlaceSuccess>` card replaces it.
- Copy: "Thanks, **{first_name}** — we'll call you within {hours}. We've also sent a confirmation to **{email}**."
- Next actions: "Back to home" / "Add to calendar" (if appointment).

---

## 6. Headings, eyebrows, and labels

- **H1**: one per page. State the page's value to the reader in their words, not the brand's. ✅ "Care for your kidneys, on your terms." ❌ "Welcome to SS Kidney Care."
- **H2**: section topics. Short noun phrases. ✅ "How dialysis works." ❌ "Comprehensive Hemodialysis Treatment Solutions."
- **Eyebrows** (the small uppercase labels above H2s): pair a number or category with a noun. "01 — Services" / "Today — Quick checks" / "FAQs." Always sentence-case after the divider.
- **Card titles**: 1–5 words. The body explains; the title doesn't have to.
- **Form labels**: lower-case unless proper noun. "Your name," "Phone number," "How can we help?"

---

## 7. Numbers, dates, currency

- **Phones**: Indian format with country code and spaces. `+91 12345 67890`. Make every phone number a `tel:` link.
- **Dates**: long form on body ("16 May 2026"); ISO inside JSON-LD/metadata.
- **Times**: `9:00 AM – 5:00 PM` (en-dash, AM/PM with space).
- **Currency**: `₹` symbol then number with Indian-style separators: `₹1,20,000`. Always show a range, not a single number, for service costs.
- **Stats / counters**: use **tabular figures** (`<CountUp>` does this automatically). Don't round outrageously — "8,432 patients" beats "10,000+" if it's accurate.

---

## 8. Address, hours, emergency line

Reuse the exact strings from `content/site.ts` everywhere — never re-paste in dictionaries. Hours: "Open today **9 AM – 5 PM**" on the contact page (calculated server-side from current date). Closed days: "Closed for {reason}" not "Sorry, we're closed."

Emergency line is always rendered with `--accent` color + Phosphor `phone` icon + bold. Never grey, never small.

---

## 9. Locales — non-English copy

- **English** is the canonical key set. Hindi and Odia mirror its shape.
- **Hindi** and **Odia** must be reviewed and signed off by a native speaker before launch. Machine-translated copy is a launch blocker.
- Voice carries across locales: warm, plain-spoken, calm. Don't translate idioms literally; find the natural phrasing in the target script.
- Medical terms: use the everyday Hindi/Odia word with the English term in parentheses on first appearance. (e.g., Hindi: "गुर्दे की सफाई (हेमोडायलिसिस)").
- Honorifics: "आप" (Hindi) / "ଆପଣ" (Odia) — always the respectful form when addressing the reader.

---

## 10. Quick smell-test

Before committing a dictionary or copy change, read the sentence out loud. If it would sound out of place in a thoughtful conversation with a worried family member, it's wrong.

If you'd say it on a billboard but not at a kitchen table, rewrite it.

---

## 11. Brand asset rules

The brand kit lives at [/ss-kidney-care-brand-kit/](../ss-kidney-care-brand-kit/) and its working copies in [/public/brand/](../public/brand/). Use them as supplied — never redraw, recolour, rotate, or stylise.

- **Use the SVG, not a re-creation.** All logo placements go through the `<Logo>` component, which loads from `/public/brand/`.
- **Pick the right variant for the surface**:
  - Light surface → `default` (full colour).
  - Dark surface (`--surface-forest`, `--surface-navy`) → `on-dark` (reverse).
  - Square contexts ≤ 120px wide → `mark` (mark-only).
- **Don't add to the lockup.** No icons, no taglines next to it inside its clear-space box (cross, heartbeat, stethoscope, drop, leaf are explicitly forbidden by the brand sheet).
- **Wordmark typography is fixed.** One weight, no italics, no outline, no shadow, no gradient, no tracking gimmicks.
- **`<BeanCurve>` is not the brand mark.** It's a decorative motif used in dividers, success animations, empty states. Never use it in place of the logo.

Reference: [`/ss-kidney-care-brand-kit/ss-kidney-care_brand-sheet.pdf`](../ss-kidney-care-brand-kit/ss-kidney-care_brand-sheet.pdf), pages 1–4.
