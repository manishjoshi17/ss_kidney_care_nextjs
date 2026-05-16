# SS Kidney Care — CLAUDE.md

This file is the contract for everyone (humans and AI agents) working on this codebase. Read it in full before making any change. When in doubt, re-read it.

## 0. North star

A static, multilingual, SSR/SEO-ready marketing site for SS Kidney Care — a kidney-care hospital. The site is small in *size* and ambitious in *taste*. It should look like something a senior designer would screenshot for inspiration, not like a Vercel-template demo. Three languages: **English (default), Hindi, Odia** — all locale-prefixed under `/[lang]`. No database, no auth, no admin panel. The only write path is the Contact form → Resend.

If you ever feel the urge to add complexity that doesn't directly support this north star, **stop and ask**.

## 1. Stack (canon)

- Next.js 16 (App Router, React Server Components, static export friendly)
- React 19
- Tailwind CSS v4 — **CSS-first**, no `tailwind.config.ts`. Tokens live in `app/globals.css` under `@theme inline`.
- shadcn/ui (`style: "new-york"`, `baseColor: "neutral"`) — generated locally into `components/ui/`. **NOT** imported from a workspace package.
- TypeScript strict (`tsconfig.json` extends nothing; `paths: { "@/*": ["./*"] }`).
- Forms: react-hook-form + zod + @hookform/resolvers.
- Email: resend + @react-email/components.
- Motion: framer-motion (v12 / `motion`) with `LazyMotion` + `domAnimation`.
- Carousel: embla-carousel-react.
- Gallery virtualization: react-virtuoso.
- Drawer: vaul.
- Icons: **@phosphor-icons/react** (Regular + Bold). **lucide-react is banned** — see §3.
- Site search: cmdk (shadcn `command`).
- Dynamic OG: @vercel/og.
- Fonts: **General Sans + Newsreader** (Latin), **Noto Sans Devanagari** (Hindi), **Noto Sans Oriya** (Odia). Loaded as local `next/font/local` files in `public/fonts/`.

**Banned (and why):**
- Supabase, any DB. We're static.
- TanStack Query, Zustand, Redux. The site has no client state worth caching.
- next-themes for v1 (light-only). Tokens are dark-ready; the toggle is a v1.1 feature.
- MDX runtime. Content is typed TS modules under `content/`.
- Turnstile/reCAPTCHA. Honeypot is enough for v1.
- GSAP / Lottie / ScrollTrigger. framer-motion covers us at a fraction of the bundle.
- **lucide-react** — overused, default to shadcn demo. Phosphor + commissioned set instead.
- **Inter** and **Fraunces** — the Vercel-2023 default pairing. Use General Sans + Newsreader.
- `bg-gray-500`, `text-slate-700`, any Tailwind color literal. **Tokens only** — see §3.

## 2. Folder structure (canon)

```
app/
  [lang]/                       # Locale segment (en, hi, or). generateStaticParams covers all.
    layout.tsx                  # Fonts, providers, header, footer, skip link, root JSON-LD
    page.tsx                    # Home
    error.tsx
    not-found.tsx               # Designed 404, see §10
    about/, services/, doctors/, facilities/, gallery/, testimonials/,
    resources/, insurance/, international-patients/, appointment/,
    contact/, emergency/, careers/, (legal)/{privacy,terms,disclaimer}/
    _design-system/page.tsx     # Env-gated; only when NODE_ENV !== "production"
    services/[slug]/opengraph-image.tsx   # Dynamic OG per route
    doctors/[slug]/opengraph-image.tsx
    resources/[slug]/opengraph-image.tsx
  api/
    contact/route.ts            # POST → Resend
  opengraph-image.tsx           # Home OG (1200×630)
  twitter-image.tsx             # 1200×600
  robots.ts
  sitemap.ts
  globals.css                   # Tailwind v4 import + @theme tokens

components/
  ui/                           # shadcn — patched with state matrix + control sizing
  primitives/                   # Container, Section, Heading, Prose, Eyebrow, Icon
  chrome/                       # Header, Footer, MobileMenu, LanguageSwitcher, Breadcrumbs,
                                # StickyQuickActions, NavigationProgress, MegaMenu
  sections/                     # Hero, ServicesStrip, DoctorsStrip, StatsStrip, ...
  motion/                       # MotionProvider + Reveal, Stagger, Parallax, Float, Magnetic,
                                # CountUp, TextReveal, TiltCard, MarqueeRow, ScrollProgress,
                                # Sequence (hero timeline), KidneyCurveDivider
  media/                        # MediaPreviewDialog, PhotoGrid, PhotoCarousel, OptimizedImage
  icons/                        # <Icon> primitive (Phosphor + commissioned medical SVGs)
  feedback/                     # EmptyState, ErrorState, InPlaceSuccess, HeroSkeleton, ...
  search/                       # SearchCommand
  nav/                          # MegaMenu, OnThisPage
  og/                           # OG template helpers (shared layout)
  seo/                          # JsonLd

modules/
  services/                     # core/types.ts, server/, components/, index.ts (barrel)
  doctors/, resources/, contact/   # Same shape
  contact/
    core/schema.ts              # ContactSchema (zod)
    components/contact-form.tsx
    server/send-contact-email.ts
    emails/contact-notification.tsx  # @react-email template

content/
  site.ts                       # Hospital info: name, phones {general, appointment, emergency},
                                # email, hours, socials, latLng, accreditations
  services/{slug}.ts            # One file per service. i18n: { en, hi, or }
  doctors/{slug}.ts
  resources/{slug}.ts
  facilities.ts, insurance.ts, testimonials.ts, gallery.ts,
  careers.ts, accreditations.ts

dictionaries/
  {en,hi,or}/
    common.json, nav.json, meta.json, errors.json,
    home.json, about.json, services.json, doctors.json,
    facilities.json, gallery.json, testimonials.json, resources.json,
    insurance.json, international.json, appointment.json,
    contact.json, emergency.json, careers.json, legal.json, footer.json
    index.ts                    # Barrel + Dictionary type (inferred from en, canonical)

lib/
  locale.ts                     # SUPPORTED_LOCALES, asSupportedLocale,
                                # stripLocaleFromPath, urlForLocale
  i18n.ts                       # getDictionary(locale)
  i18n-provider.tsx             # TranslationsProvider + useTranslations
  seo.ts                        # absoluteUrl, buildAlternates, baseMetadata, ogLocaleFor
  resend.ts                     # Resend client
  env.ts                        # zod-validated process.env
  utils.ts                      # cn(), formatPhone(), …

public/
  fonts/                        # GeneralSans, Newsreader, NotoSans-Devanagari, -Oriya (variable woff2)
  images/                       # Hero, services, doctors, facilities photos
  icons/medical/                # Commissioned SVGs: kidney, nephron, dialysis, …

docs/
  VOICE.md                      # Tone, banned phrases, CTA bank
```

`components/ui/_control-variants.ts` is the single source for size CVA shared by Button / Input / Textarea / Select. Default size: `adaptive`.

## 3. Token discipline (hard rules)

**1. No hardcoded colors.** `#hex`, `rgb()`, `rgba()`, `hsl()`, `oklch()` are allowed in **`app/globals.css` only**. Components use `bg-primary`, `text-foreground`, `border-border-warm`, etc. CI grep:
```
rg -nE '#[0-9a-fA-F]{3,6}|\boklch\(|\brgb(a)?\(|\bhsl(a)?\(' components/ modules/ app/[lang]/
```
Zero results outside `globals.css`. Hard fail otherwise.

**2. No Tailwind grayscale.** `gray-*`, `slate-*`, `zinc-*`, `neutral-*`, `stone-*` color utilities are banned. Use `--foreground`, `--muted`, `--muted-foreground`, `--border`, `--border-strong`.

**3. No literal durations/easings.** No `duration-300`, `ease-in-out`, `transition-all 200ms`. Use `--duration-quick/fast/base/slow/emphatic` and `--ease-out-soft/snap/in-out-pause/spring-gentle`. Grep:
```
rg -nE '\bduration-[0-9]+\b|\bease-(in|out|linear)\b' components/ modules/ app/[lang]/
```
Zero matches.

**4. No literal radius/shadow.** Use `--radius-*` and `--shadow-*` tokens.

**5. No lucide imports.** Phosphor + commissioned SVGs only. Grep:
```
rg -n 'lucide-react' .
```
Zero matches outside `package.json` (and even there, lucide-react should not appear).

**6. No Inter/Fraunces.** Local fonts as listed in §1. Grep:
```
rg -niE "'inter'|'fraunces'" .
```
Zero matches.

**7. No untokenized spacing on sections.** Section vertical padding uses `--space-section-y`; block-to-block uses `--space-block-y`; component-to-component `--space-component-y`. No `py-12 md:py-16 lg:py-24` in component files (that math lives in the token).

## 4. Architecture principles

- **Server-first.** Every page is a Server Component until interactivity forces otherwise. Client components are leaf islands wrapped around the smallest possible scope. Pages stay static.
- **Modules own features.** A `modules/<feature>/` folder is the only place feature-specific business logic lives. Each module has:
  - `core/types.ts` (and optionally `core/constants.ts`, `core/schemas.ts`)
  - `server/` (data fetchers, even if synchronous; one function per file)
  - `components/` (feature-specific UI)
  - `client/` (only if a `"use client"` wrapper is needed)
  - `index.ts` (public barrel — the only allowed import surface for outsiders)
- **`components/` is shared, atomic, reusable.** Anything used by ≥ 2 features goes here. Subfolders are functional (primitives, chrome, sections, motion, media, feedback, search, nav, og, seo, ui) — not atomic-design (no atoms/molecules/organisms).
- **`content/` is hand-edited typed data.** No CMS. Adding a service = drop a TS file in `content/services/` + import in `content/services/index.ts`. TypeScript enforces shape; missing locale keys are a build error.
- **`lib/` is pure utility.** No React, no JSX in `lib/`. (Exception: `lib/i18n-provider.tsx` — it's a thin client component.)
- **No `@workspace/*` imports**, no `transpilePackages`. This is a single Next.js app, not a monorepo.
- **Atomic components** — one component per file; one concern per component; composition over configuration. If a component grows past ~120 lines, it's probably two components.
- **Separation of concerns:**
  - Data: `content/` (truth) → `modules/*/server/` (access) → `app/[lang]/` (render).
  - Translation: `dictionaries/` (strings) → `lib/i18n.ts` (load) → `TranslationsProvider` (distribute) → `useTranslations()` (consume).
  - Style: `app/globals.css` (tokens) → `components/ui/` (atoms) → `components/primitives/` (semantic wrappers) → `components/sections/` (compositions).
- **Naming:** kebab-case for files, PascalCase for components, camelCase for functions. Type imports use `type` keyword.

## 5. i18n rules

- `SUPPORTED_LOCALES = ["en", "hi", "or"] as const`, `DEFAULT_LOCALE = "en"`. All locales are prefixed in URLs. Root `/` redirects to `/en`.
- The `Dictionary` type is **inferred from the English barrel**. Hindi and Odia files must mirror the key shape exactly — TS fails the build if they drift.
- Server components import `getDictionary(lang)` directly. Client components call `useTranslations()` (context-distributed dictionary).
- The language switcher uses `stripLocaleFromPath(pathname) + urlForLocale(target, cleanPath)` to swap the prefix while preserving the page; persists `preferred-language` cookie (year-long, `SameSite=Lax`, `Secure` in prod).
- **Hindi and Odia must be reviewed by a native speaker before launch.** Machine-translated copy is a launch blocker.
- Indic line-height bumps: `[lang="hi"]` and `[lang="or"]` set a `--leading-multiplier` that components multiply.

## 6. Routing & rendering

- App Router. RSC by default. Each page exports `generateMetadata` and (where it has dynamic segments) `generateStaticParams`. Pages are static.
- `app/page.tsx` → `redirect("/en")`. No middleware.
- 404: `app/[lang]/not-found.tsx` — designed (§10).
- 500: `app/[lang]/error.tsx` — designed (§10).
- Streaming Suspense allowed only when a section's data is genuinely slow (rare — none in v1).

## 7. Forms & Resend

- All forms use react-hook-form + zodResolver. Schema lives next to the form in `modules/<feature>/core/schema.ts`.
- **`/api/contact`** is the only API route. It validates with the same zod schema (defense-in-depth), checks the honeypot (`website` field must be empty), in-memory rate-limits to 5 req/min/IP, then calls `sendContactEmail` (Resend + @react-email render).
- `lib/env.ts` validates `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL` at build time.
- Appointment page reuses the Contact form with `reasonKey` locked to `"appointment"`.
- On success, the form collapses and renders `<InPlaceSuccess>` (with kidney-curve check animation). **No toast for primary form submits.**
- Errors render inline (`aria-invalid="true"` + icon + token-colored message). Color is **never the only** error indicator.

## 8. Motion & visual language

- Wrap the app in `<MotionProvider>` (`LazyMotion features={domAnimation}` + `MotionConfig reducedMotion="user"`).
- 11 motion primitives live in `components/motion/`; every consumer of motion uses them, not raw framer-motion (the primitives encapsulate reduced-motion fallbacks and timing-token reads).
- Timing/easing **only** via tokens (`--duration-*`, `--ease-*`). Never inline.
- Hero entry follows the plan §6 "First 3 seconds" timeline byte-for-byte (0ms → 2400ms).
- Page transitions: directional slide + masked text reveal (clip-path), 360ms total. Chrome stays anchored (logo + primary CTA never move).
- Below-the-fold: `<Reveal>` / `<Stagger>` with `viewport={{ once: true, amount: 0.2 }}`.
- `prefers-reduced-motion: reduce` collapses every primitive to opacity-only or no-op. Verified per primitive.
- LCP element renders un-animated (opacity 0.4 → 1.0 in 250ms after paint), so LCP measurement isn't gamed.

## 9. Responsive — feels like a mobile app

Three rules, no exceptions:
1. **Recompose grids, don't collapse to one column.** 4-col → 2×2 (never 1×4). Doctors become horizontal scroll-snap at `<sm`. Footer 5→3→2 (never 1).
2. **Fluid typography via `clamp()`.** Type scale tokens already use clamp; never write `text-[28px]` inline.
3. **Adaptive components.** Default Button/Input/Textarea/Select size is `adaptive` (h-12 mobile / h-14 desktop). Cards use `rounded-card-mobile sm:rounded-card`. Section padding uses `--space-section-y`.

Mobile drawer (vaul) is **full-screen**, with `text-lg` (18px) nav labels, 48px row height, `gap-4` icon-to-text, SENbrook-style section dividers. Active row uses `bg-primary-soft` + bold + heavier icon stroke.

Tap targets ≥ 44×44 everywhere. Form inputs **never below 16px** font-size (iOS zoom prevention).

Sticky bottom-anchored CTA bar on Service/Doctor detail pages at `<lg` only (safe-area inset).

## 10. The details that separate considered from generic

- **404**: kidney-curve illustration, lower-case warm copy ("Looks like that page wandered off."), search palette, 3 suggested links. Background uses `--gradient-hero`. Memorable.
- **500**: same shell, different copy ("Our servers had a hiccup."), prominent emergency phone callout.
- **`::selection`**: `background: oklch(var(--accent-500) / 0.25); color: var(--foreground);`. Never browser default blue.
- **Scrollbar**: track transparent, thumb primary-tinted at low chroma; `scrollbar-gutter: stable both-edges`.
- **Focus ring**: 2px solid `--ring` + `--shadow-glow` halo. Designed for dark surfaces (`--accent-300` ring on `--surface-forest`/`--surface-navy`). Never browser default.
- **Toast** (`sonner`): top-right desktop, top-center mobile (just below header), `--shadow-3`, 12px radius, brand iconography for success (kidney-curve check), error, info.
- **Empty states**: bespoke illustration + 1-sentence reason + 1 CTA. No "No data" labels.
- **Loading skeletons**: geometry matches the destination content. 1.4s left-to-right `oklch` mask shimmer.
- **`<InPlaceSuccess>`**: form collapses on success and renders this card in place. Kidney-curve checkmark animation (0.6s SVG path-draw). Copy + next-action.
- **Cursor**: `cursor: pointer` + 1.2× scale on `:hover` (CSS only, disabled under reduced-motion).
- **Print stylesheet**: strips nav/footer/gradients, expands accordions, monochrome, adds hospital address + phone to every page header. Insurance pre-auth friendly.
- **NavigationProgress**: 2px primary bar at the top during route transitions (pattern from tldio_v2).

## 11. SEO checklist (every page)

- `generateMetadata` returns: `title`, `description`, `metadataBase`, `alternates.canonical`, `alternates.languages` (all three locales + `x-default → en`), `openGraph` (with locale, type, siteName), `twitter: { card: "summary_large_image" }`.
- Dynamic OG via `opengraph-image.tsx` per route (home, service, doctor, resource) + `twitter-image.tsx`. Templates rendered with @vercel/og using project fonts; consistent type + color treatment across all.
- JSON-LD via `<JsonLd>`:
  - Root layout: `Hospital` (org, address, geo, phone, hours, `medicalSpecialty: ["Nephrology"]`, accreditations).
  - Service detail: `MedicalProcedure`.
  - Doctor detail: `Physician`.
  - FAQ-bearing pages: `FAQPage`.
  - Every nested page: `BreadcrumbList`.
- `robots.ts`: prod allows `/`, disallows `/api/` + `/[lang]/_design-system`. Non-prod disallows all.
- `sitemap.ts`: every static path × 3 locales + dynamic service/doctor/resource slugs × 3 locales. Each entry includes `alternates.languages`.

## 12. Accessibility (designed, not just compliant)

- Semantic landmarks: `<header>`, `<nav aria-label="...">`, `<main id="main">`, `<footer>`. Skip-to-content link visible on focus.
- Focus-visible only — never `:focus` (no ring on click).
- Color is never the sole signal: error states get icon + color + label. Selected states get bg + border + bold + aria.
- Color contrast WCAG AA verified for every token pair. Designer-grade contrast on dark surfaces uses `--accent-300` ring not `--primary`.
- Forms: explicit `<Label htmlFor>`, `aria-describedby` for hints/errors, `aria-invalid` on error, `autoComplete` set sensibly (`name`, `tel`, `email`).
- `prefers-reduced-motion: reduce` honored at every motion primitive (§8).
- Hindi/Odia line-height multiplier ensures matra-stack legibility.

## 13. Voice & microcopy (see `docs/VOICE.md` for full guide)

- **Person**: hospital is *we*; patient is *you*.
- **Tone**: warm, plain-spoken, never patronizing, never medical-jargon-first. Indian-English idioms welcome.
- **Banned phrases**: "Learn more," "Click here," "Get started," "Sign up," "Discover," "Unlock," "Elevate," "Streamline," "Empower." If you see them, replace.
- **CTA bank** (use these, not generics): Talk to a nephrologist · Schedule a consultation · Find your care plan · Book with Dr. {last_name} · Read the guide · Check if we're empanelled · Call our 24×7 line.
- **Errors** lead with the need, not the problem. "We'll need a phone number to call you on." not "Phone is required."
- All dictionary keys go through this filter.

## 14. The brand — logo, motif, phrase

### Brand logo (approved assets only)

The approved logo lives in [/public/brand/](public/brand/) and is consumed through the [`<Logo>`](components/chrome/logo.tsx) component. The asset variants:

- `logo-horizontal.svg` — full colour wordmark + mark (default).
- `logo-horizontal-reverse.svg` — for dark surfaces (footer, stats band).
- `logo-horizontal-mono.svg` — single-colour variants.
- `logo-stacked.svg` / `logo-stacked-reverse.svg` — square / avatar contexts.
- `logo-mark.svg` / `logo-mark-reverse.svg` / `logo-mark-mono.svg` — favicon and any context narrower than ~120px wide.

**Hard rules (from the brand usage sheet at `/ss-kidney-care-brand-kit/`):**

1. Never redraw, recolour, rotate, or stylise the mark or wordmark.
2. Never add a cross, heartbeat line, stethoscope, drop, or leaf to the lockup.
3. Never place the wordmark inside the kidney negative space, or skew it.
4. Minimum horizontal lockup ≈ 120px wide → below that, use a `mark*` variant.
5. The wordmark uses one weight, no italics, no outline, no shadow, no gradient, no tracking gimmicks.

**Brand colours** (exposed as tokens, *not* hardcoded anywhere outside `globals.css`):
- `--brand-navy` ≈ `#0E3A5C` — drives `--surface-navy`; used in OG image and footer.
- `--brand-teal` — drives the focus ring on `--surface-forest` / `--surface-navy`. Used **only** in chrome / focus / logo contexts. The wider UI continues on `--primary-*` (teal) and `--accent-*` (clay).

### Decorative bean-curve motif (NOT the logo)

[`<BeanCurve>` / `<BeanCurvePath>`](components/icons/bean-curve.tsx) and [`<BeanCurveDivider>`](components/motion/bean-curve-divider.tsx) are decorative — a single-stroke curve used in section dividers, success animations, empty states, the FAQ watermark, and the 404 illustration. They are **not** the brand logomark and must never be substituted for it.

### Brand phrase

One short phrase appears once at hero (regular weight, `font-display`, `text-primary-deep`, **never italic**) and once in the footer above the bottom strip in `font-display`, `text-on-navy/65`, also non-italic.

Current English: *"Advanced nephrology. The future of kidney health."* (hero) and *"Care that listens."* (footer accent).

## 15. Verification (what proves a change is correct)

Before any PR is considered done, run **all** of these. Treat each as a launch blocker.

```
npm run typecheck     # 0 errors
npm run lint          # 0 errors
npm run build         # All routes prerender (look for ● markers)

# Token / banned-default audits
rg -nE '#[0-9a-fA-F]{3,6}|\boklch\(|\brgb(a)?\(|\bhsl(a)?\(' components/ modules/ app/[lang]/
rg -nE '\bduration-[0-9]+\b|\bease-(in|out|linear)\b' components/ modules/ app/[lang]/
rg -n 'lucide-react' .
rg -niE "'inter'|'fraunces'" .
rg -niE 'learn more|click here|get started|sign up|discover' app/ dictionaries/
```

Then walk the §13 verification table in the plan file (33+ rows): hreflang, sitemap, JSON-LD, contact happy/honeypot/rate-limit, Lighthouse ≥ 95 mobile *with motion on*, responsive grid recomposition, fluid typography, mobile drawer text size, sticky mobile CTA, footer richness, gallery+lightbox, embla snap, iPhone-13 sweep, typography discipline, Indic rendering, 8-state matrix, brand-motif consistency, CTA copy audit, native-speaker translation sign-off, dynamic OG, designed states, selection/scrollbar/focus, 404/500 design, WhatsApp + cost transparency, site search, print stylesheet, designed asymmetry, section transition motif, motion bundle size, reduced-motion respected, hero choreography, no scroll re-trigger, no layout-thrash animations.

## 16. What to do when something isn't covered

1. Re-read this file in full.
2. Check the plan at `/Users/amcipher/.claude/plans/we-need-to-create-glimmering-deer.md`.
3. Look for a precedent in the codebase (`rg` for similar patterns).
4. If still unclear, **ask the user** with a concrete proposal (2–3 options + recommendation). Don't guess on visual or architectural choices — they accumulate and break the system's coherence.

## 17. What success looks like

The site:
- Loads fast (Lighthouse mobile perf ≥ 95 *with* motion on).
- Reads correctly in English, Hindi, Odia, on phone and desktop.
- Doesn't have a single hardcoded color, duration, easing, or banned font / icon set.
- Surfaces clear actions (Talk to a nephrologist, Chat on WhatsApp, Call 24×7) within one tap on mobile.
- Feels like a *hospital that listens*, not a SaaS landing page.
- Could be shown to a senior designer as inspiration, not as an "AI-built site."

Keep that bar.
