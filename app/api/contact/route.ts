import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema, serviceLabels } from "@/lib/validations";
import {
  generateLeadEmailHtml,
  generateConfirmationEmailHtml,
} from "@/lib/email-templates";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

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
    const companyName  = process.env.NEXT_PUBLIC_COMPANY_NAME  || "Aelius AI";
    const fromAddress  = process.env.SMTP_USER                 || "";
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || fromAddress;

    if (!receiverEmail) {
      console.error("CONTACT_RECEIVER_EMAIL is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP configuration is incomplete");
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

    const transporter = createTransporter();

    const fromField = `${companyName} <${fromAddress}>`;

    const [leadResult, confirmResult] = await Promise.allSettled([
      transporter.sendMail({
        from: fromField,
        to: receiverEmail,
        subject: `New Lead — ${data.company}`,
        html: generateLeadEmailHtml({ ...data, submittedAt, companyName }),
        replyTo: data.email,
      }),
      transporter.sendMail({
        from: fromField,
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

    if (leadResult.status === "rejected") {
      console.error("Failed to send lead email:", leadResult.reason);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    if (confirmResult.status === "rejected") {
      console.error("Failed to send confirmation email:", confirmResult.reason);
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
