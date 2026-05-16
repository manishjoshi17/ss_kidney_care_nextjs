import { z } from "zod";

const Schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  RESEND_API_KEY: z.string().min(1).default("re_dev_placeholder"),
  CONTACT_FROM_EMAIL: z.string().email().default("no-reply@sskidneycare.com"),
  CONTACT_TO_EMAIL: z.string().email().default("contact@sskidneycare.com"),
});

const parsed = Schema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3010",
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
});

if (!parsed.success) {
  throw new Error(`Invalid environment variables: ${parsed.error.message}`);
}

export const env = parsed.data;
