"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig, splitBrandName } from "@/lib/config";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#case-studies" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

const [brandMain, brandAccent] = splitBrandName(siteConfig.name);

function Logo({ dark }: { dark: boolean }) {
  if (siteConfig.logoUrl) {
    return (
      <Image
        src={siteConfig.logoUrl}
        alt={siteConfig.name}
        width={200}
        height={96}
        className="h-[6rem] w-auto object-contain"
      />
    );
  }
  return (
    <span className={cn("text-xl font-bold tracking-tight transition-colors duration-300", dark ? "text-[#0d272c]" : "text-[#f9fbf9]")}>
      {brandMain}
      {brandAccent && <span className="gradient-text-teal">{brandAccent}</span>}
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#f9fbf9]/95 backdrop-blur-xl border-b border-[#5f5049]/12 shadow-[0_1px_20px_rgba(13,39,44,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 lg:h-[68px]">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <Logo dark={scrolled} />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "px-4 py-2 text-sm transition-colors duration-200 rounded-lg",
                    scrolled
                      ? "text-[#322d2e]/65 hover:text-[#0d272c] hover:bg-[#0d272c]/5"
                      : "text-[#f9fbf9]/55 hover:text-[#f9fbf9] hover:bg-[#f9fbf9]/5"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className={cn(
                  "text-sm transition-colors",
                  scrolled ? "text-[#322d2e]/65 hover:text-[#0d272c]" : "text-[#f9fbf9]/55 hover:text-[#f9fbf9]"
                )}
              >
                Contact
              </button>
              <Button size="sm" onClick={() => scrollTo("#contact")}>
                Book A Call
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className={cn(
                "md:hidden p-2 transition-colors",
                scrolled ? "text-[#322d2e]/70 hover:text-[#0d272c]" : "text-[#f9fbf9]/60 hover:text-[#f9fbf9]"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#0d272c]/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0f2b31] border-l border-[#5f5049]/20 flex flex-col pt-20 pb-8 px-6"
            >
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-lg font-medium text-[#f9fbf9]/70 hover:text-[#f9fbf9] py-3 px-4 rounded-xl hover:bg-[#f9fbf9]/5 transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="space-y-3">
                <Button variant="secondary" className="w-full !bg-[#f9fbf9]/8 !text-[#f9fbf9] !border-[#5f5049]/30 hover:!bg-[#f9fbf9]/12" onClick={() => scrollTo("#contact")}>Contact</Button>
                <Button className="w-full" onClick={() => scrollTo("#contact")}>Book A Call</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
