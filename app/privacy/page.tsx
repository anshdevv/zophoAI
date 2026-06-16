import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
};

const EFFECTIVE_DATE = "June 17, 2025";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#0d272c", minHeight: "100vh", color: "#f9fbf9" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(249,251,249,0.5)", textDecoration: "none", marginBottom: 48 }}>
          ← Back to home
        </Link>

        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3ec5c0", marginBottom: 12 }}>Legal</p>
        <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 8px" }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: "rgba(249,251,249,0.4)", marginBottom: 64 }}>Effective date: {EFFECTIVE_DATE}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <section>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(249,251,249,0.7)" }}>
              {siteConfig.name} ("<strong style={{ color: "#f9fbf9" }}>we</strong>," "<strong style={{ color: "#f9fbf9" }}>us</strong>," or "<strong style={{ color: "#f9fbf9" }}>our</strong>") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an inquiry through our contact form. It applies to users in the United States and Canada, and complies with applicable privacy laws including the California Consumer Privacy Act (CCPA), Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), and Quebec's Law 25.
            </p>
          </section>

          <Section title="1. Information We Collect">
            <p>We collect personal information you voluntarily provide when contacting us through our website. This includes:</p>
            <ul>
              <li><strong>Contact details:</strong> full name, business email address, phone number (optional)</li>
              <li><strong>Business details:</strong> company or organization name, service of interest, project description</li>
              <li><strong>Technical data:</strong> IP address, browser type, pages visited, and time spent on our site (collected automatically via server logs or analytics)</li>
            </ul>
            <p>We do <strong>not</strong> collect payment information, government-issued ID, or sensitive personal data.</p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide the services you request</li>
              <li>Send a confirmation email acknowledging receipt of your contact form submission</li>
              <li>Communicate with you about proposals, project timelines, and updates</li>
              <li>Improve our website and understand how visitors interact with it</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
          </Section>

          <Section title="3. Legal Basis for Processing (Canada — PIPEDA)">
            <p>Under PIPEDA, we collect, use, and disclose your personal information only with your knowledge and consent, or as permitted or required by law. By submitting a contact form on our website, you expressly consent to the collection and use of your information as described in this policy. You may withdraw consent at any time by contacting us at <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "#3ec5c0" }}>{siteConfig.contactEmail}</a>, subject to legal and contractual restrictions.</p>
          </Section>

          <Section title="4. Sharing of Information">
            <p>We may share your personal information only in the following circumstances:</p>
            <ul>
              <li><strong>Email delivery providers:</strong> We use SMTP-based email services to send and receive messages. These providers process your email address and message content solely to deliver communications.</li>
              <li><strong>Service providers:</strong> Third-party vendors who assist us in operating our website or business, bound by confidentiality obligations and prohibited from using your data for their own purposes.</li>
              <li><strong>Legal requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </Section>

          <Section title="5. Cookies and Tracking">
            <p>Our website may use cookies and similar tracking technologies to enhance your experience. These include:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Used to understand how visitors interact with the site (aggregated, non-personal data)</li>
            </ul>
            <p>You may disable cookies through your browser settings. Note that disabling cookies may affect certain website functionality.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to <strong>24 months</strong> unless you request deletion earlier. You may request deletion of your data at any time (see Section 8).</p>
          </Section>

          <Section title="7. Data Security">
            <p>We implement reasonable technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="8. Your Rights">
            <p><strong>California residents (CCPA):</strong> You have the right to:</p>
            <ul>
              <li>Know what personal information we have collected, used, disclosed, or sold</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of personal information (we do not sell personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p><strong>Canadian residents (PIPEDA / Law 25):</strong> You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw consent and request deletion, subject to legal obligations</li>
              <li>File a complaint with the Office of the Privacy Commissioner of Canada or your provincial authority</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "#3ec5c0" }}>{siteConfig.contactEmail}</a>. We will respond within <strong>30 days</strong>.</p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, contact us immediately and we will delete it.</p>
          </Section>

          <Section title="10. International Data Transfers">
            <p>Your information may be processed and stored in the United States or Canada. If you are located outside these countries, be aware that your data may be transferred to and processed in jurisdictions that may not provide the same level of data protection as your home country.</p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Your continued use of our website after changes are posted constitutes your acceptance of the revised policy.</p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
            <div style={{ marginTop: 16, padding: "20px 24px", background: "rgba(249,251,249,0.04)", border: "1px solid rgba(249,251,249,0.08)", borderRadius: 10 }}>
              <p style={{ margin: 0, fontWeight: 600, color: "#f9fbf9" }}>{siteConfig.name}</p>
              <p style={{ margin: "4px 0 0", color: "rgba(249,251,249,0.5)", fontSize: 14 }}>
                <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "#3ec5c0" }}>{siteConfig.contactEmail}</a>
              </p>
            </div>
          </Section>

        </div>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(249,251,249,0.08)", display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link href="/terms" style={{ fontSize: 14, color: "#3ec5c0", textDecoration: "none" }}>Terms of Service →</Link>
          <Link href="/" style={{ fontSize: 14, color: "rgba(249,251,249,0.4)", textDecoration: "none" }}>← Back to home</Link>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "#f9fbf9", marginBottom: 16 }}>{title}</h2>
      <div style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(249,251,249,0.65)", display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}
