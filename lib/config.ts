export const siteConfig = {
  name:         process.env.NEXT_PUBLIC_COMPANY_NAME    || "Aelius AI",
  tagline:      process.env.NEXT_PUBLIC_COMPANY_TAGLINE || "AI Systems That Grow Your Business",
  url:          process.env.NEXT_PUBLIC_SITE_URL        || "https://aeliusai.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL   || "hello@aeliusai.com",
  logoUrl:      process.env.NEXT_PUBLIC_LOGO_URL        || "",
} as const;

/**
 * Splits a company name into [main, accent] for styled logos.
 * "Aelius AI" → ["Aelius", "AI"]
 * "Nova Solutions Inc" → ["Nova Solutions", "Inc"]
 * "Nova" → ["Nova", ""]
 */
export function splitBrandName(name: string): [string, string] {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return [parts[0], ""];
  const accent = parts.pop()!;
  return [parts.join(" "), accent];
}
