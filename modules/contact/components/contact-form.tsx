"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InPlaceSuccess } from "@/components/feedback/in-place-success";
import { Icon } from "@/components/icons/icon";

import { ContactSchema, type ContactInput, REASONS } from "@/modules/contact/core/schema";
import { useTranslations } from "@/lib/i18n-provider";

interface ContactFormProps {
  defaultReason?: ContactInput["reason"];
  /** When true (Appointment page) the reason field is locked. */
  lockReason?: boolean;
  /** Use the appointment dictionary keys instead of contact. */
  variant?: "contact" | "appointment";
}

export function ContactForm({ defaultReason = "general", lockReason = false, variant = "contact" }: ContactFormProps) {
  const { t, dictionary } = useTranslations();
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: defaultReason,
      preferredDoctor: "",
      preferredTime: "",
      message: "",
      website: "",
    },
  });

  const isAppointment = variant === "appointment";
  const labels = isAppointment ? dictionary.appointment.form : dictionary.contact.form;
  const success = isAppointment ? dictionary.appointment.success : dictionary.contact.success;

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 429) {
          setSubmitError(t("errors.rate_limited"));
        } else if (data.error === "invalid" && data.fields) {
          setSubmitError(t("errors.form.unknown"));
        } else {
          setSubmitError(t("errors.form.unknown"));
        }
        return;
      }
      setSubmitted({ name: values.name.split(" ")[0], email: values.email });
      form.reset();
    } catch {
      setSubmitError(t("errors.network"));
    }
  });

  if (submitted) {
    return (
      <InPlaceSuccess
        title={success.title.replace("{name}", submitted.name)}
        description={success.body.replace("{email}", submitted.email)}
        action={
          <a
            href={isAppointment ? "/en" : "/en"}
            className="inline-flex items-center gap-2 text-small text-primary-deep hover:underline"
          >
            <Icon name="arrow-right" size={14} className="rotate-180" />
            {success.next_action}
          </a>
        }
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans */}
      <div className="sr-only" aria-hidden>
        <label>
          Don't fill this:
          <input type="text" tabIndex={-1} autoComplete="off" {...form.register("website")} />
        </label>
      </div>

      <Field
        label={labels.name_label}
        required
        error={form.formState.errors.name && t("errors.form.name_required")}
      >
        <Input
          autoComplete="name"
          placeholder={labels.name_placeholder}
          aria-invalid={!!form.formState.errors.name}
          {...form.register("name")}
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label={labels.email_label}
          required
          error={form.formState.errors.email && t("errors.form.email_invalid")}
        >
          <Input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={labels.email_placeholder}
            aria-invalid={!!form.formState.errors.email}
            {...form.register("email")}
          />
        </Field>
        <Field
          label={labels.phone_label}
          required
          error={form.formState.errors.phone && t("errors.form.phone_required")}
        >
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={labels.phone_placeholder}
            aria-invalid={!!form.formState.errors.phone}
            {...form.register("phone")}
          />
        </Field>
      </div>

      {!lockReason && (
        <Field label={dictionary.contact.form.reason_label} required>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {REASONS.map((r) => {
              const id = `reason-${r}`;
              return (
                <label
                  key={r}
                  htmlFor={id}
                  className="flex items-center justify-center text-small font-medium rounded-[var(--radius-input)] border border-input bg-surface text-foreground cursor-pointer transition-colors hover:border-primary has-[:checked]:bg-primary-soft has-[:checked]:border-primary has-[:checked]:text-primary-deep py-3 px-3"
                >
                  <input
                    id={id}
                    type="radio"
                    value={r}
                    className="sr-only"
                    {...form.register("reason")}
                  />
                  {dictionary.contact.form.reason_options[r]}
                </label>
              );
            })}
          </div>
        </Field>
      )}

      {isAppointment && (
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={dictionary.appointment.form.preferred_doctor_label}>
            <Input
              placeholder={dictionary.appointment.form.preferred_doctor_placeholder}
              {...form.register("preferredDoctor")}
            />
          </Field>
          <Field label={dictionary.appointment.form.preferred_time_label}>
            <Input
              placeholder={dictionary.appointment.form.preferred_time_placeholder}
              {...form.register("preferredTime")}
            />
          </Field>
        </div>
      )}

      <Field
        label={labels.message_label}
        required
        error={form.formState.errors.message && t("errors.form.message_too_short")}
      >
        <Textarea
          rows={5}
          placeholder={labels.message_placeholder}
          aria-invalid={!!form.formState.errors.message}
          {...form.register("message")}
        />
      </Field>

      {submitError && (
        <p role="alert" className="flex items-center gap-2 text-small text-destructive">
          <Icon name="alert-circle" size={16} weight="fill" />
          {submitError}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button type="submit" variant="accent" size="adaptive" loading={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? labels.submitting : labels.submit}
          {!form.formState.isSubmitting && <Icon name="arrow-right" size={18} />}
        </Button>
      </div>
    </form>
  );
}
