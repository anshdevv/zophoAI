import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Terms of Service — ${siteConfig.name}`,
};

const EFFECTIVE_DATE = "June 17, 2025";

export default function TermsOfService() {
  return (
    <div style={{ background: "#0d272c", minHeight: "100vh", color: "#f9fbf9" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(249,251,249,0.5)", textDecoration: "none", marginBottom: 48 }}>
          ← Back to home
        </Link>

        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#3ec5c0", marginBottom: 12 }}>Legal</p>
        <h1 style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 8px" }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: "rgba(249,251,249,0.4)", marginBottom: 64 }}>Effective date: {EFFECTIVE_DATE}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>

          <section>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(249,251,249,0.7)" }}>
              Please read these Terms of Service ("<strong style={{ color: "#f9fbf9" }}>Terms</strong>") carefully before using the website operated by {siteConfig.name} ("<strong style={{ color: "#f9fbf9" }}>we</strong>," "<strong style={{ color: "#f9fbf9" }}>us</strong>," or "<strong style={{ color: "#f9fbf9" }}>our</strong>"). By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website.
            </p>
          </section>

          <Section title="1. Acceptance of Terms">
            <p>By accessing our website at <strong style={{ color: "#f9fbf9" }}>{siteConfig.url}</strong>, submitting a contact form, or engaging with our services, you confirm that you are at least 18 years of age and have the legal authority to enter into this agreement. If you are accessing the website on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.</p>
          </Section>

          <Section title="2. Services">
            <p>{siteConfig.name} provides AI-powered business services including, but not limited to: AI product photography, AI voice agents, website development, and business automation solutions. Our website serves as an informational and contact platform. Specific service terms, deliverables, pricing, and timelines are governed by separate written agreements or proposals issued on a per-project basis.</p>
          </Section>

          <Section title="3. Use of the Website">
            <p>You agree to use our website only for lawful purposes. You must not:</p>
            <ul>
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations in the United States or Canada</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
              <li>Attempt to gain unauthorized access to any part of the website or its related systems</li>
              <li>Introduce viruses, trojans, worms, or other malicious code</li>
              <li>Scrape, crawl, or harvest content or data from the website without our express written consent</li>
              <li>Impersonate any person or misrepresent your affiliation with any person or entity</li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All content on this website — including text, graphics, logos, images, animations, and software — is the property of {siteConfig.name} or its licensors and is protected by applicable US and Canadian intellectual property laws.</p>
            <p>You are granted a limited, non-exclusive, non-transferable license to access and view the website for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works from, or commercially exploit any content without our prior written consent.</p>
          </Section>

          <Section title="5. Contact Form and Communications">
            <p>When you submit a contact form on our website, you consent to receive communications from us related to your inquiry. We will not use your contact information to send unsolicited commercial messages in violation of Canada's Anti-Spam Legislation (CASL) or the US CAN-SPAM Act. You may opt out of future communications at any time by contacting us at <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "#3ec5c0" }}>{siteConfig.contactEmail}</a>.</p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>The website and its content are provided on an "<strong style={{ color: "#f9fbf9" }}>as is</strong>" and "<strong style={{ color: "#f9fbf9" }}>as available</strong>" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p>We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to modify, suspend, or discontinue the website at any time without notice.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>To the fullest extent permitted by applicable law in the United States and Canada, {siteConfig.name} and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of (or inability to use) the website or its content, even if we have been advised of the possibility of such damages.</p>
            <p>Our total cumulative liability to you for any claims arising from these Terms or your use of the website shall not exceed <strong style={{ color: "#f9fbf9" }}>CAD $100 / USD $100</strong>.</p>
          </Section>

          <Section title="8. Indemnification">
            <p>You agree to indemnify, defend, and hold harmless {siteConfig.name} and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or related to your violation of these Terms or your use of the website.</p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>Our website may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. Visiting any linked third-party website is at your own risk.</p>
          </Section>

          <Section title="10. Governing Law and Jurisdiction">
            <p>These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein (for Canadian users), and the laws of the State of Delaware (for US users), without regard to conflict of law principles.</p>
            <p>Any disputes arising from these Terms or your use of the website that cannot be resolved informally shall be submitted to binding arbitration in accordance with applicable rules, except that either party may seek injunctive or other equitable relief in a court of competent jurisdiction.</p>
          </Section>

          <Section title="11. Dispute Resolution">
            <p>Before initiating any formal legal proceeding, you agree to first contact us at <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "#3ec5c0" }}>{siteConfig.contactEmail}</a> to attempt to resolve the dispute informally. We will make reasonable efforts to resolve any dispute within <strong style={{ color: "#f9fbf9" }}>30 days</strong> of receiving notice.</p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>We reserve the right to update or modify these Terms at any time. We will indicate the effective date of any changes at the top of this page. Your continued use of our website after any modifications constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
          </Section>

          <Section title="13. Severability">
            <p>If any provision of these Terms is found to be unenforceable or invalid under applicable law, such provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.</p>
          </Section>

          <Section title="14. Entire Agreement">
            <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and {siteConfig.name} regarding your use of the website and supersede all prior communications, representations, or agreements.</p>
          </Section>

          <Section title="15. Contact Us">
            <p>If you have questions about these Terms, please contact us at:</p>
            <div style={{ marginTop: 16, padding: "20px 24px", background: "rgba(249,251,249,0.04)", border: "1px solid rgba(249,251,249,0.08)", borderRadius: 10 }}>
              <p style={{ margin: 0, fontWeight: 600, color: "#f9fbf9" }}>{siteConfig.name}</p>
              <p style={{ margin: "4px 0 0", color: "rgba(249,251,249,0.5)", fontSize: 14 }}>
                <a href={`mailto:${siteConfig.contactEmail}`} style={{ color: "#3ec5c0" }}>{siteConfig.contactEmail}</a>
              </p>
            </div>
          </Section>

        </div>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(249,251,249,0.08)", display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link href="/privacy" style={{ fontSize: 14, color: "#3ec5c0", textDecoration: "none" }}>Privacy Policy →</Link>
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
