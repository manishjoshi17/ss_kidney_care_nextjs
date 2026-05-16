"use client";

import { useEffect } from "react";

import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";

import { site } from "@/content/site";
import { telHref } from "@/lib/utils";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[error-boundary]", error);
  }, [error]);

  return (
    <section className="bg-gradient-hero with-grain min-h-[70vh] flex items-center">
      <Container className="py-section">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-destructive">500</p>
          <Heading as={1} variant="display" className="mt-4">Our servers had a hiccup.</Heading>
          <p className="text-lead mt-6">Try again in a moment. If it's urgent, please call our 24×7 emergency line.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={reset} variant="primary" size="adaptive">Try again</Button>
            <Button asChild variant="accent" size="adaptive">
              <a href={telHref(site.phoneNumbers.emergency)}>
                <Icon name="phone" size={18} weight="fill" />
                {site.phoneNumbers.emergency}
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
