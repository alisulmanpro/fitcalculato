import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

/**
 * Resend requires a verified domain to send to addresses other than your account email.
 * Production (domain verified at resend.com/domains):
 *   RESEND_FROM_EMAIL=FitCalculators Contact <info@fitcalculato.com>
 *   CONTACT_RECIPIENT_EMAIL=info@fitcalculato.com
 *
 * Local testing before domain verification:
 *   RESEND_SANDBOX=true
 *   (uses onboarding@resend.dev → your Resend account email)
 */
function getEmailConfig() {
  const isSandbox =
    process.env.RESEND_SANDBOX === "true" ||
    process.env.RESEND_API_KEY?.startsWith("re_test_");

  if (isSandbox) {
    return {
      from:
        process.env.RESEND_FROM_EMAIL ??
        "FitCalculators Contact <onboarding@resend.dev>",
      to:
        process.env.CONTACT_RECIPIENT_EMAIL ??
        process.env.RESEND_ACCOUNT_EMAIL ??
        "fypsolutionstech1470@gmail.com",
    };
  }

  return {
    from:
      process.env.RESEND_FROM_EMAIL ??
      "FitCalculators Contact <info@fitcalculato.com>",
    to: process.env.CONTACT_RECIPIENT_EMAIL ?? "info@fitcalculato.com",
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const resend = getResendClient();
    if (!resend) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const { from, to } = getEmailConfig();

    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message – FitCalculators</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Segoe UI', Arial, sans-serif; }
    .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #1c2333 0%, #2d3a52 100%); padding: 36px 40px; text-align: center; }
    .header-logo { font-size: 13px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #9ed83a; margin-bottom: 10px; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; }
    .header p { margin: 8px 0 0; font-size: 13px; color: #94a3b8; }
    .body { padding: 36px 40px; }
    .section-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9ed83a; margin-bottom: 6px; }
    .field-block { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; margin-bottom: 16px; }
    .field-value { font-size: 15px; color: #1c2333; font-weight: 500; word-break: break-word; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #9ed83a; border-radius: 10px; padding: 20px; margin-top: 8px; }
    .message-text { font-size: 15px; color: #374151; line-height: 1.75; white-space: pre-line; }
    .divider { height: 1px; background: #e2e8f0; margin: 28px 0; }
    .reply-cta { background: #9ed83a; color: #1c2333 !important; display: inline-block; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; }
    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 40px; text-align: center; }
    .footer p { margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.6; }
    .footer a { color: #9ed83a; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="header-logo">FitCalculators</div>
      <h1>New Contact Message</h1>
      <p>Someone reached out via the contact form</p>
    </div>

    <div class="body">
      <div class="section-label">From</div>
      <div class="field-block">
        <div class="field-value"><strong>${safeName}</strong></div>
      </div>

      <div class="section-label">Email Address</div>
      <div class="field-block">
        <div class="field-value"><a href="mailto:${safeEmail}" style="color:#466800; text-decoration:none;">${safeEmail}</a></div>
      </div>

      <div class="section-label">Subject</div>
      <div class="field-block">
        <div class="field-value">${safeSubject}</div>
      </div>

      <div class="section-label">Message</div>
      <div class="message-box">
        <div class="message-text">${safeMessage}</div>
      </div>

      <div class="divider"></div>

      <p style="font-size:14px; color:#475569; margin:0 0 16px;">
        Reply directly to this email to respond to <strong>${safeName}</strong>, or click below:
      </p>
      <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(subject)}" class="reply-cta">
        Reply to ${safeName}
      </a>
    </div>

    <div class="footer">
      <p>This message was sent via the contact form on <a href="https://fitcalculato.com">fitcalculato.com</a></p>
      <p style="margin-top:6px;">© ${new Date().getFullYear()} FitCalculators · All rights reserved</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[FitCalc Contact] ${subject} — from ${name}`,
      html,
    });

    if (error) {
      console.error("[Resend API Error]:", { status: 403, error, path: "/emails" });
      console.error("Resend error:", error);

      const isDomainError =
        error.name === "validation_error" &&
        typeof error.message === "string" &&
        (error.message.includes("verify a domain") ||
          error.message.includes("not verified") ||
          error.message.includes("testing emails"));

      if (isDomainError) {
        console.error(
          "Resend domain not verified. Add fitcalculato.com at https://resend.com/domains " +
            "and set RESEND_FROM_EMAIL to an address on that domain."
        );
      }

      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
