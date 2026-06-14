"use client";

import { motion } from "framer-motion";
import { Zap, Target, Puzzle, TrendingUp, Cpu, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/config";

const reasons = [
  {
    icon: Zap, title: "Fast Delivery",
    description: "First systems live in 2–3 weeks. We move quickly without sacrificing quality.",
    color: "#c9a97a",
  },
  {
    icon: Target, title: "Business-Focused",
    description: "Every decision is tied to revenue, efficiency, or growth — never vanity metrics.",
    color: "#3ec5c0",
  },
  {
    icon: Puzzle, title: "Custom Implementations",
    description: "No templates. Every system is built specifically for how your business operates.",
    color: "#7dd4d0",
  },
  {
    icon: TrendingUp, title: "Long-Term Scalability",
    description: "We build for where you're going, not just where you are today.",
    color: "#c9a97a",
  },
  {
    icon: Cpu, title: "Modern Technology",
    description: "Cutting-edge AI tools and frameworks — deployed with enterprise-grade reliability.",
    color: "#3ec5c0",
  },
  {
    icon: HeartHandshake, title: "Dedicated Support",
    description: "A real team that responds, optimizes, and grows with your business over time.",
    color: "#9a8078",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="section-padding relative" style={{ background: "#f0f4f3" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="mocha" className="mb-5">Why {siteConfig.name}</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#0d272c" }}>
              Built Different.
              <br />
              <span className="gradient-text">Built to Last.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-lg mx-auto" style={{ color: "rgba(50,45,46,0.65)" }}>
              We're not a generic agency. We're specialists in AI systems that generate real business outcomes.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-2xl p-7 overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(13,39,44,0.07)",
                  boxShadow: "0 1px 4px rgba(13,39,44,0.05), 0 4px 16px rgba(13,39,44,0.04)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${r.color}06 0%, transparent 60%)` }}
                />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${r.color}12`, border: `1px solid ${r.color}25` }}>
                  <r.icon size={18} style={{ color: r.color }} />
                </div>
                <h3 className="text-base font-bold mb-2.5" style={{ color: "#0d272c" }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(50,45,46,0.65)" }}>{r.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
