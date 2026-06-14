"use client";

import Image from "next/image";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { siteConfig, splitBrandName } from "@/lib/config";

const footerLinks = {
  Services: [
    { label: "AI Product Photography", href: "#services" },
    { label: "AI Voice Agents", href: "#services" },
    { label: "Website Development", href: "#services" },
    { label: "Business Automation", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#team" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

const [brandMain, brandAccent] = splitBrandName(siteConfig.name);

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative border-t border-[#5f5049]/20 bg-[#0a1f24]">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            {siteConfig.logoUrl ? (
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                width={140}
                height={36}
                className="h-9 w-auto object-contain mb-4 brightness-0 invert"
              />
            ) : (
              <div className="text-2xl font-bold tracking-tight text-[#f9fbf9] mb-4">
                {brandMain}
                {brandAccent && <span className="gradient-text-teal">{brandAccent}</span>}
              </div>
            )}
            <p className="text-sm text-[#f9fbf9]/40 leading-relaxed max-w-[260px]">
              AI systems that help businesses capture more revenue with less manual work.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#f9fbf9]/5 border border-[#5f5049]/30 flex items-center justify-center text-[#f9fbf9]/40 hover:text-[#3ec5c0] hover:bg-[#3ec5c0]/10 hover:border-[#3ec5c0]/30 transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5f5049] mb-4">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-[#f9fbf9]/45 hover:text-[#f9fbf9] transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-[#f9fbf9]/45 hover:text-[#f9fbf9] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#5f5049]/15">
          <p className="text-xs text-[#f9fbf9]/25">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="text-xs text-[#f9fbf9]/20">
            Built with Next.js & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
