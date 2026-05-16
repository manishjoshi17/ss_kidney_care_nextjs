import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { ContactInput } from "@/modules/contact/core/schema";

interface ContactNotificationProps extends ContactInput {
  submittedAt: string;
}

const REASON_LABEL: Record<ContactInput["reason"], string> = {
  appointment: "Appointment request",
  second_opinion: "Second opinion",
  general: "General enquiry",
  feedback: "Feedback",
};

export function ContactNotification(props: ContactNotificationProps) {
  const { name, email, phone, reason, message, preferredDoctor, preferredTime, submittedAt } = props;
  return (
    <Html>
      <Head />
      <Preview>
        {`[${REASON_LABEL[reason]}] ${name} — ${phone}`}
      </Preview>
      <Body style={{ backgroundColor: "#FAFBFB", fontFamily: "Helvetica, Arial, sans-serif" }}>
        <Container style={{ maxWidth: "600px", padding: "32px 24px", margin: "0 auto", backgroundColor: "#FFFFFF" }}>
          <Heading as="h1" style={{ fontSize: "22px", color: "#0F1F2E", marginBottom: "4px" }}>
            New {REASON_LABEL[reason]} from the website
          </Heading>
          <Text style={{ fontSize: "13px", color: "#64748B", marginBottom: "24px" }}>
            Received {submittedAt}
          </Text>

          <Section style={{ marginBottom: "16px" }}>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Phone" value={phone} />
            {preferredDoctor && <Row label="Preferred doctor" value={preferredDoctor} />}
            {preferredTime && <Row label="Comfortable time to call" value={preferredTime} />}
            <Row label="Reason" value={REASON_LABEL[reason]} />
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "11px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "4px" }}>
              Message
            </Text>
            <Text style={{ fontSize: "15px", color: "#0F1F2E", lineHeight: 1.55, whiteSpace: "pre-wrap" }}>
              {message}
            </Text>
          </Section>

          <Hr />

          <Text style={{ fontSize: "12px", color: "#94A3B8", marginTop: "16px" }}>
            SS Kidney Care — website contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Text style={{ fontSize: "11px", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.12em", margin: 0 }}>{label}</Text>
      <Text style={{ fontSize: "15px", color: "#0F1F2E", margin: 0 }}>{value}</Text>
    </div>
  );
}
