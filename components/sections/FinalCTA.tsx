"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "#0d272c" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "rgba(62,197,192,0.07)" }} />
        <div className="absolute top-1/2 left-1/5 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "rgba(201,169,122,0.06)" }} />
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(95,80,73,0.3), transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(95,80,73,0.3), transparent)" }} />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <div className="container-custom relative text-center">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 mx-auto"
            style={{ background: "rgba(62,197,192,0.08)", border: "1px solid rgba(62,197,192,0.2)" }}>
            <Sparkles size={28} style={{ color: "#3ec5c0" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6" style={{ color: "#f9fbf9" }}>
            Ready To
            <br />
            <span style={{
              background: "linear-gradient(135deg, #3ec5c0 0%, #f9fbf9 50%, #c9a97a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Automate Growth?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-10" style={{ color: "rgba(249,251,249,0.45)" }}>
            Let's discuss how AI can improve your customer experience and operations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="group w-full sm:w-auto text-base px-8 h-14"
            >
              Book A Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <p className="text-sm" style={{ color: "rgba(249,251,249,0.28)" }}>
              Free consultation · No commitment
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-8 mt-16 text-xs" style={{ color: "rgba(249,251,249,0.22)" }}>
            {["Responds within 24 hours", "Confidential", "No long-term lock-in"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full" style={{ background: "rgba(62,197,192,0.5)" }} />
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
