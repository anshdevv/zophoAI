"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { caseStudies } from "@/data/caseStudies";

const paletteColors = ["#3ec5c0", "#c9a97a", "#7dd4d0"];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const color = paletteColors[index] ?? study.color;

  return (
    <ScrollReveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative rounded-2xl overflow-hidden cursor-default h-full flex flex-col"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(13,39,44,0.07)",
          boxShadow: "0 1px 4px rgba(13,39,44,0.05), 0 4px 16px rgba(13,39,44,0.04)",
        }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }} />

          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
            style={{ background: `${color}15`, border: `1px solid ${color}35`, color }}
          >
            {study.category}
          </div>
        </div>

        <div className="p-7 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-4 leading-snug" style={{ color: "#0d272c" }}>
            {study.title}
          </h3>

          <div className="space-y-3 mb-6 flex-1">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(95,80,73,0.75)" }}>
                Challenge
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(50,45,46,0.65)" }}>{study.challenge}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(95,80,73,0.75)" }}>
                Solution
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(50,45,46,0.65)" }}>{study.solution}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-5" style={{ borderTop: "1px solid rgba(13,39,44,0.07)" }}>
            {study.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-xl font-bold tabular-nums" style={{ color }}>{m.value}</div>
                <div className="text-[10px] mt-0.5" style={{ color: "rgba(50,45,46,0.45)" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative" style={{ background: "#f0f4f3" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="gold" className="mb-5">Case Studies</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#0d272c" }}>
              Real Results.
              <br />
              <span className="gradient-text">Real Businesses.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(50,45,46,0.65)" }}>
              A sample of what we've built and the outcomes it generated.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-sm" style={{ color: "rgba(50,45,46,0.45)" }}>
              Every project is unique. Let's discuss what's possible for your business.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
