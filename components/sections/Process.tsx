"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";

const steps = [
  {
    number: "01", icon: Search, title: "Discovery",
    description: "We map your current operations, identify friction points, and pinpoint where AI delivers the highest ROI.",
    color: "#3ec5c0",
    details: ["Business audit", "Operations review", "Opportunity mapping", "Priority ranking"],
  },
  {
    number: "02", icon: Lightbulb, title: "Strategy",
    description: "We design a tailored AI roadmap — the right tools, the right sequence, the right budget allocation.",
    color: "#7dd4d0",
    details: ["Solution design", "Technology selection", "Timeline planning", "ROI projection"],
  },
  {
    number: "03", icon: Code2, title: "Build",
    description: "We develop and deploy your AI systems, websites, and automations with rigorous testing.",
    color: "#c9a97a",
    details: ["System development", "Integration setup", "QA testing", "Performance tuning"],
  },
  {
    number: "04", icon: Rocket, title: "Scale",
    description: "We monitor results, optimize performance, and systematically expand your automation footprint.",
    color: "#9a8078",
    details: ["Performance monitoring", "Ongoing optimization", "Expansion planning", "Reporting"],
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative"
    >
      <div className="relative flex gap-6 md:gap-8">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
            style={{ background: `${step.color}12`, border: `1px solid ${step.color}35` }}
          >
            <step.icon size={18} style={{ color: step.color }} />
          </motion.div>
          {index < steps.length - 1 && (
            <div className="w-px flex-1 mt-4 min-h-[60px]"
              style={{ background: "linear-gradient(to bottom, rgba(13,39,44,0.1), transparent)" }} />
          )}
        </div>

        <div className="pb-10 flex-1">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-xs font-mono font-bold" style={{ color: step.color }}>{step.number}</span>
            <h3 className="text-xl font-bold" style={{ color: "#0d272c" }}>{step.title}</h3>
          </div>
          <p className="text-sm leading-relaxed mb-5 max-w-md" style={{ color: "rgba(50,45,46,0.65)" }}>
            {step.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {step.details.map((d) => (
              <span
                key={d}
                className="text-xs px-3 py-1 rounded-full"
                style={{ color: step.color, border: `1px solid ${step.color}25`, background: `${step.color}08` }}
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section id="process" className="section-padding relative" style={{ background: "#f9fbf9" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <Badge variant="gold" className="mb-5">How It Works</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-5" style={{ color: "#0d272c" }}>
                From First Call
                <br />
                <span className="gradient-text">To Full Automation.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(50,45,46,0.65)" }}>
                A clear, structured process that turns your business challenges into automated systems — without the typical agency chaos.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
                style={{ border: "1px solid rgba(13,39,44,0.1)", background: "rgba(13,39,44,0.03)" }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3ec5c0" }} />
                <span className="text-sm" style={{ color: "rgba(50,45,46,0.65)" }}>
                  Average first system live in{" "}
                  <strong style={{ color: "#0d272c" }}>2–3 weeks</strong>
                </span>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
