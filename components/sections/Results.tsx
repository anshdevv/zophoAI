"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import Badge from "@/components/ui/Badge";

// SAMPLE STATISTICS — replace with actual client data before launch
const metrics = [
  {
    value: 24, suffix: "/7", label: "Lead Coverage",
    description: "Never miss a potential customer, day or night.",
    color: "#3ec5c0",
  },
  {
    value: 95, suffix: "%", label: "Response Consistency",
    description: "AI systems deliver reliable responses every time.",
    color: "#7dd4d0",
  },
  {
    value: 3, suffix: "x", label: "Faster Workflows",
    description: "Average speed improvement across automated operations.",
    color: "#c9a97a",
  },
  {
    value: 100, suffix: "+", label: "Automated Processes",
    description: "Repetitive tasks removed from client operations.",
    color: "#9a8078",
  },
];

export default function Results() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#0d272c" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(62,197,192,0.06)" }} />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <ScrollReveal>
            <Badge variant="teal" className="mb-5">Real Impact</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: "#f9fbf9" }}>
              Businesses Don't Need More Tools.
              <br />
              <span style={{
                background: "linear-gradient(135deg, #3ec5c0 0%, #f9fbf9 50%, #c9a97a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>They Need Systems.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg mt-5 max-w-xl mx-auto" style={{ color: "rgba(249,251,249,0.45)" }}>
              We replace patchwork solutions with cohesive AI infrastructure that compounds over time.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="relative group rounded-2xl p-6 md:p-8 text-center overflow-hidden"
                style={{ background: "#162e34", border: "1px solid rgba(95,80,73,0.22)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at center, ${metric.color}08 0%, transparent 70%)` }}
                />
                <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums" style={{ color: metric.color }}>
                  {metric.suffix === "/7" ? (
                    <span>24/7</span>
                  ) : metric.suffix === "+" && metric.value === 100 ? (
                    <span>100+</span>
                  ) : (
                    <AnimatedCounter end={metric.value} suffix={metric.suffix} duration={2000} />
                  )}
                </div>
                <div className="text-sm font-semibold mb-2" style={{ color: "#f9fbf9" }}>{metric.label}</div>
                <p className="text-xs leading-relaxed hidden md:block" style={{ color: "rgba(249,251,249,0.3)" }}>
                  {metric.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 p-6 md:p-8 rounded-2xl text-center max-w-2xl mx-auto"
            style={{ border: "1px solid rgba(95,80,73,0.15)", background: "rgba(249,251,249,0.02)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(249,251,249,0.45)" }}>
              <span style={{ color: "#f9fbf9", fontWeight: 500 }}>Results vary by business and implementation.</span>{" "}
              These metrics represent sample outcomes from typical client engagements.
              We'll share realistic projections based on your specific situation on our strategy call.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
