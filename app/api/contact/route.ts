import { NextResponse } from "next/server";

import { isRateLimited } from "@/lib/rate-limit";
import { ContactSchema } from "@/modules/contact/core/schema";
import { sendContactEmail } from "@/modules/contact/server/send-contact-email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid", fields: parsed.error.flatten() }, { status: 400 });
  }

  // Honeypot — silently succeed for bots so they don't retry
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
