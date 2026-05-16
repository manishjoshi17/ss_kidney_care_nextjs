import { notFound } from "next/navigation";

import { Icon, type IconName } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/primitives/container";
import { Eyebrow } from "@/components/primitives/eyebrow";
import { Heading } from "@/components/primitives/heading";
import { Lead } from "@/components/primitives/lead";
import { Section } from "@/components/primitives/section";
import { EmptyState } from "@/components/feedback/empty-state";
import { ErrorState } from "@/components/feedback/error-state";
import { CardSkeleton, HeroSkeleton } from "@/components/feedback/skeletons";

/**
 * Env-gated design system page. Only renders in non-production builds.
 * Used during design review to verify tokens + state matrix.
 */
export default function DesignSystemPage() {
  if (process.env.NODE_ENV === "production") notFound();

  const COLOR_TOKENS = [
    "background", "surface", "surface-cream", "surface-mint", "surface-sky",
    "surface-forest", "surface-navy",
    "primary", "primary-deep", "primary-soft",
    "accent", "accent-deep",
    "foreground", "foreground-muted", "muted", "muted-foreground",
    "border", "border-strong", "border-hairline",
    "success", "warning", "destructive",
    "stat-sky", "stat-amber", "stat-sage",
  ];

  const PRIMARY_SCALE = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
  const ACCENT_SCALE = ["100", "200", "300", "400", "500", "600", "700"];
  const ICONS: IconName[] = ["home", "phone", "email", "whatsapp", "warning", "check", "menu", "search", "translate", "compass", "map", "star", "clock", "chat", "spinner"];

  return (
    <Section spacing="default">
      <Container>
        <Heading as={1} variant="display">Design system</Heading>
        <Lead className="mt-4">Token preview + component states. Visible only in non-production builds.</Lead>

        <section className="mt-section">
          <Heading as={2}>Color tokens</Heading>
          <div className="mt-6 grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {COLOR_TOKENS.map((t) => (
              <div key={t} className="rounded-[var(--radius-card)] overflow-hidden border border-border">
                <div className="h-24" style={{ backgroundColor: `var(--${t})` }} />
                <div className="p-3 bg-surface">
                  <p className="text-tiny font-medium">--{t}</p>
                </div>
              </div>
            ))}
          </div>

          <Heading as={3} className="mt-10">Primary scale</Heading>
          <div className="mt-3 grid grid-cols-11 rounded-[var(--radius-card)] overflow-hidden">
            {PRIMARY_SCALE.map((s) => (
              <div key={s} className="h-16 flex items-end p-1 text-[10px]" style={{ backgroundColor: `var(--primary-${s})`, color: Number(s) >= 500 ? "white" : "var(--foreground)" }}>
                {s}
              </div>
            ))}
          </div>

          <Heading as={3} className="mt-6">Accent scale</Heading>
          <div className="mt-3 grid grid-cols-7 rounded-[var(--radius-card)] overflow-hidden">
            {ACCENT_SCALE.map((s) => (
              <div key={s} className="h-16 flex items-end p-1 text-[10px]" style={{ backgroundColor: `var(--accent-${s})`, color: Number(s) >= 500 ? "white" : "var(--foreground)" }}>
                {s}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Typography</Heading>
          <div className="mt-6 space-y-4">
            <p className="text-display">Display — Care that listens.</p>
            <p className="text-h1">H1 — A second opinion is always welcome.</p>
            <p className="text-h2">H2 — Build around the patients we serve.</p>
            <p className="text-h3">H3 — Living-donor and deceased-donor pathways supported</p>
            <p className="text-h4">H4 — Plain-language explanation of each test result</p>
            <p className="text-lead">Lead — Plain-spoken consultations with consultants who know your name and your reports.</p>
            <p className="text-body">Body — Many patients prefer it because it doesn't tether you to a centre three times a week. We train you at the hospital, then visit weekly until you're confident.</p>
            <p className="text-eyebrow">Eyebrow — 01 / Treatments</p>
            <p className="text-small">Small text — for hints, captions.</p>
            <p className="text-tiny">Tiny — labels, helper text.</p>
            <p className="text-stat-figure text-h1">12,345</p>
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Button — 8 states</Heading>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StateGrid label="Primary">
              <Button variant="primary" size="md">Default</Button>
              <Button variant="primary" size="md" data-hover>Hover (visual)</Button>
              <Button variant="primary" size="md" autoFocus>Focus</Button>
              <Button variant="primary" size="md" disabled>Disabled</Button>
              <Button variant="primary" size="md" loading>Loading</Button>
            </StateGrid>
            <StateGrid label="Accent">
              <Button variant="accent" size="md">Default</Button>
              <Button variant="accent" size="md" loading>Loading</Button>
              <Button variant="accent" size="md" disabled>Disabled</Button>
            </StateGrid>
            <StateGrid label="Outline">
              <Button variant="outline" size="md">Default</Button>
              <Button variant="outline" size="md" disabled>Disabled</Button>
            </StateGrid>
            <StateGrid label="Sizes">
              <Button variant="primary" size="sm">sm</Button>
              <Button variant="primary" size="md">md</Button>
              <Button variant="primary" size="lg">lg</Button>
              <Button variant="primary" size="adaptive">adaptive</Button>
            </StateGrid>
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Inputs</Heading>
          <div className="mt-6 grid gap-4 max-w-xl">
            <Input placeholder="Default" />
            <Input placeholder="Focus on me" autoFocus />
            <Input placeholder="Disabled" disabled />
            <Input placeholder="With error" aria-invalid />
            <Textarea placeholder="Multi-line input. Padding scales with breakpoints." rows={3} />
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Icons (Phosphor only — no lucide)</Heading>
          <ul className="mt-6 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
            {ICONS.map((name) => (
              <li key={name} className="flex flex-col items-center gap-2 rounded-[var(--radius-card)] border border-border bg-surface p-3">
                <Icon name={name} size={24} weight="duotone" />
                <span className="text-tiny text-foreground-muted">{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-section">
          <Heading as={2}>Brand motif — bean curve</Heading>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-primary">
            <BeanCurve size={40} />
            <BeanCurve size={72} variant="outline" />
            <BeanCurve size={120} variant="solid" className="text-accent" />
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Badges</Heading>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>default</Badge>
            <Badge variant="primary">primary</Badge>
            <Badge variant="accent">accent</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge variant="success">success</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="destructive">destructive</Badge>
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Feedback states</Heading>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <EmptyState
              title="Nothing matches that."
              description="Try clearing filters."
              action={<Button variant="primary" size="md">Clear filters</Button>}
            />
            <ErrorState
              title="Our servers had a hiccup."
              description="Try again in a moment."
              action={<Button variant="primary" size="md">Try again</Button>}
            />
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Skeletons</Heading>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <HeroSkeleton />
            <div className="grid gap-4 sm:grid-cols-2">
              <CardSkeleton />
              <CardSkeleton />
            </div>
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Card</Heading>
          <div className="mt-6 max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Hemodialysis</CardTitle>
                <CardDescription>Cleaning your blood when your kidneys can't.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-foreground-muted">Most patients come in three times a week.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mt-section">
          <Heading as={2}>Eyebrow with hanging index</Heading>
          <Eyebrow index="01">Treatments</Eyebrow>
          <Eyebrow index="02">Our consultants</Eyebrow>
          <Eyebrow index="03">Inside the hospital</Eyebrow>
        </section>
      </Container>
    </Section>
  );
}

function StateGrid({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-surface p-4">
      <p className="text-eyebrow text-foreground-muted mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
