import Link from "next/link";

import { Icon } from "@/components/icons/icon";
import { BeanCurve } from "@/components/icons/bean-curve";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";

import { getDictionary } from "@/lib/i18n";
import { DEFAULT_LOCALE, urlForLocale } from "@/lib/locale";

export default function NotFound() {
  // not-found is invoked without params; default to English copy.
  const dict = getDictionary(DEFAULT_LOCALE);
  const lang = DEFAULT_LOCALE;

  return (
    <section className="bg-gradient-hero with-grain min-h-[70vh] flex items-center">
      <Container className="py-section">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-foreground-muted">404</p>
            <Heading as={1} variant="display" className="mt-4 lowercase">{dict.errors.page.title_404}</Heading>
            <p className="text-lead mt-6 max-w-[55ch]">{dict.errors.page.body_404}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary" size="adaptive">
                <Link href={urlForLocale(lang, "/")}>
                  <Icon name="home" size={18} />
                  {dict.common.actions.back_to_home}
                </Link>
              </Button>
              <Button asChild variant="outline" size="adaptive">
                <Link href={urlForLocale(lang, "/services")}>{dict.nav.primary.services}</Link>
              </Button>
              <Button asChild variant="ghost" size="adaptive">
                <Link href={urlForLocale(lang, "/contact")}>{dict.nav.primary.contact}</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center text-primary-300">
            <BeanCurve size={280} variant="outline" />
          </div>
        </div>
      </Container>
    </section>
  );
}
