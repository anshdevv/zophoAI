import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, serviceLabels } from "@/lib/validations";
import {
  generateLeadEmailHtml,
  generateConfirmationEmailHtml,
} from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Instantiate lazily so missing key only fails at runtime, not build time
    const resend = new Resend(process.env.RESEND_API_KEY ?? "");

    // Server-side validation
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const companyName   = process.env.NEXT_PUBLIC_COMPANY_NAME   ?? "Aelius AI";
    const fromNoreply   = process.env.EMAIL_FROM_NOREPLY          ?? `noreply@aeliusai.com`;
    const fromHello     = process.env.EMAIL_FROM_HELLO            ?? `hello@aeliusai.com`;
    const contactEmail  = process.env.NEXT_PUBLIC_CONTACT_EMAIL   ?? fromHello;

    if (!receiverEmail) {
      console.error("CONTACT_RECEIVER_EMAIL environment variable is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "UTC",
      dateStyle: "long",
      timeStyle: "short",
    }) + " UTC";

    const serviceName = serviceLabels[data.service] ?? data.service;

    // Send both emails in parallel
    const [leadEmailResult, confirmEmailResult] = await Promise.allSettled([
      // Lead notification to agency
      resend.emails.send({
        from: `${companyName} <${fromNoreply}>`,
        to: receiverEmail,
        subject: `New Agency Lead — ${data.company}`,
        html: generateLeadEmailHtml({ ...data, submittedAt, companyName }),
        replyTo: data.email,
      }),
      // Confirmation email to lead
      resend.emails.send({
        from: `${companyName} <${fromHello}>`,
        to: data.email,
        subject: `We received your message — ${companyName}`,
        html: generateConfirmationEmailHtml({
          name: data.name,
          company: data.company,
          service: data.service,
          companyName,
          contactEmail,
        }),
      }),
    ]);

    // Resend SDK fulfills promises even on API errors — must check both .status and .value.error
    if (leadEmailResult.status === "rejected") {
      console.error("Lead email network error:", leadEmailResult.reason);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }
    if (leadEmailResult.value.error) {
      console.error("Lead email Resend error:", leadEmailResult.value.error);
      return NextResponse.json(
        { success: false, error: `Failed to send message: ${leadEmailResult.value.error.message}` },
        { status: 500 }
      );
    }

    if (confirmEmailResult.status === "rejected") {
      console.error("Confirmation email network error:", confirmEmailResult.reason);
    } else if (confirmEmailResult.value.error) {
      // Non-critical: lead was captured but confirmation failed
      console.error("Confirmation email Resend error:", confirmEmailResult.value.error);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
