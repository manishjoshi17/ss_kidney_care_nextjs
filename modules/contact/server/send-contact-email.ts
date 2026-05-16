import { Resend } from "resend";
import { render } from "@react-email/render";

import { env } from "@/lib/env";
import { ContactNotification } from "@/modules/contact/emails/contact-notification";
import type { ContactInput } from "@/modules/contact/core/schema";

const REASON_SUBJECT: Record<ContactInput["reason"], string> = {
  appointment: "Appointment request",
  second_opinion: "Second opinion",
  general: "General enquiry",
  feedback: "Feedback",
};

export async function sendContactEmail(input: ContactInput) {
  const resend = new Resend(env.RESEND_API_KEY);
  const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const html = await render(ContactNotification({ ...input, submittedAt }));

  return resend.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: input.email,
    subject: `[Website] ${REASON_SUBJECT[input.reason]} — ${input.name}`,
    html,
  });
}
