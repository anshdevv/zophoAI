import { ContactFormData, serviceLabels } from "./validations";

interface LeadEmailData extends ContactFormData {
  submittedAt: string;
  companyName: string;
}

export function generateLeadEmailHtml(data: LeadEmailData): string {
  const serviceName = serviceLabels[data.service] ?? data.service;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Lead — ${data.company}</title>
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #080808; color: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px 12px 0 0; padding: 32px; border: 1px solid rgba(255,255,255,0.08); border-bottom: none; }
    .badge { display: inline-block; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); color: #a78bfa; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
    .title { font-size: 24px; font-weight: 700; color: #ffffff; margin: 0 0 4px; }
    .subtitle { font-size: 14px; color: rgba(255,255,255,0.5); margin: 0; }
    .body { background: #0f0f0f; border: 1px solid rgba(255,255,255,0.08); border-top: none; border-radius: 0 0 12px 12px; padding: 32px; }
    .field { margin-bottom: 24px; }
    .field-label { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 6px; }
    .field-value { font-size: 15px; color: #f5f5f5; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px 14px; }
    .field-value a { color: #a78bfa; text-decoration: none; }
    .divider { height: 1px; background: rgba(255,255,255,0.08); margin: 24px 0; }
    .project-details { white-space: pre-wrap; line-height: 1.6; }
    .footer { margin-top: 32px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.3); }
    .service-badge { display: inline-block; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.2); color: #60a5fa; font-size: 12px; font-weight: 500; padding: 4px 10px; border-radius: 6px; }
    .cta-btn { display: inline-block; background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #fff; font-weight: 600; font-size: 14px; padding: 12px 28px; border-radius: 8px; text-decoration: none; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="badge">New Lead</div>
      <h1 class="title">New inquiry from ${data.company}</h1>
      <p class="subtitle">Received ${data.submittedAt}</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Contact Name</div>
        <div class="field-value">${data.name}</div>
      </div>
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${data.company}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>` : ""}
      <div class="field">
        <div class="field-label">Service Interested In</div>
        <div class="field-value"><span class="service-badge">${serviceName}</span></div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <div class="field-label">Project Details</div>
        <div class="field-value project-details">${data.projectDetails}</div>
      </div>
      <div style="text-align: center; padding-top: 16px;">
        <a href="mailto:${data.email}?subject=Re: Your inquiry at ${data.companyName}" class="cta-btn">Reply to ${data.name}</a>
      </div>
    </div>
    <div class="footer">
      <p>${data.companyName} — Lead Notification</p>
    </div>
  </div>
</body>
</html>`;
}

export function generateConfirmationEmailHtml(data: {
  name: string;
  company: string;
  service: string;
  companyName: string;
  contactEmail: string;
}): string {
  const serviceName = serviceLabels[data.service as ContactFormData["service"]] ?? data.service;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message — ${data.companyName}</title>
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #080808; color: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 12px 12px 0 0; padding: 40px 32px; text-align: center; border: 1px solid rgba(255,255,255,0.08); border-bottom: none; }
    .logo { font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #fff; margin-bottom: 24px; }
    .logo span { color: #a78bfa; }
    .icon { font-size: 48px; margin-bottom: 16px; }
    .title { font-size: 26px; font-weight: 700; color: #ffffff; margin: 0 0 8px; }
    .subtitle { font-size: 15px; color: rgba(255,255,255,0.6); margin: 0; line-height: 1.5; }
    .body { background: #0f0f0f; border: 1px solid rgba(255,255,255,0.08); border-top: none; border-radius: 0 0 12px 12px; padding: 40px 32px; }
    .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 20px; margin-bottom: 24px; }
    .card-title { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
    .card-value { font-size: 15px; color: #f5f5f5; }
    .highlight { color: #a78bfa; font-weight: 600; }
    .divider { height: 1px; background: rgba(255,255,255,0.08); margin: 28px 0; }
    .steps { list-style: none; padding: 0; margin: 0; }
    .steps li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.5; }
    .step-num { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); color: #a78bfa; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
    .cta { text-align: center; padding-top: 8px; }
    .cta p { font-size: 14px; color: rgba(255,255,255,0.5); margin-bottom: 16px; }
    .footer { margin-top: 32px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">${data.companyName}</div>
      <div class="icon">✓</div>
      <h1 class="title">Message received, ${data.name}.</h1>
      <p class="subtitle">We'll review your inquiry and be in touch within one business day.</p>
    </div>
    <div class="body">
      <div class="card">
        <div class="card-title">Your inquiry</div>
        <div class="card-value"><span class="highlight">${data.company}</span> — ${serviceName}</div>
      </div>
      <div class="divider"></div>
      <p style="font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 16px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">What happens next</p>
      <ul class="steps">
        <li>
          <span class="step-num">1</span>
          <span>Our team reviews your project details and researches your business context.</span>
        </li>
        <li>
          <span class="step-num">2</span>
          <span>We reach out to schedule a strategy call at a time that works for you.</span>
        </li>
        <li>
          <span class="step-num">3</span>
          <span>On the call we'll outline a tailored AI solution and answer all your questions.</span>
        </li>
      </ul>
      <div class="divider"></div>
      <div class="cta">
        <p>In a hurry? Reach us directly at <a href="mailto:${data.contactEmail}" style="color: #a78bfa;">${data.contactEmail}</a></p>
      </div>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} ${data.companyName}. All rights reserved.</p>
      <p style="margin-top: 4px;">You received this because you submitted a contact form on our website.</p>
    </div>
  </div>
</body>
</html>`;
}
