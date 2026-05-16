import { z } from "zod";

export const REASONS = ["appointment", "second_opinion", "general", "feedback"] as const;
export type ContactReason = (typeof REASONS)[number];

export const ContactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[\d +\-()]+$/, "Phone must be digits, spaces, +, -, ()."),
  reason: z.enum(REASONS),
  preferredDoctor: z.string().trim().max(80).optional(),
  preferredTime: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10).max(2000),
  // Honeypot — bots fill all inputs, humans don't. Empty = pass.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;
