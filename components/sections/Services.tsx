"use client";

import { motion } from "framer-motion";
import { Camera, Phone, Globe, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { services } from "@/data/services";

const iconMap = { Camera, Phone, Globe, Zap };

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Camera;

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative rounded-2xl overflow-hidden cursor-default h-full"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(13,39,44,0.07)",
          boxShadow: "0 1px 4px rgba(13,39,44,0.05), 0 4px 16px rgba(13,39,44,0.04)",
        }}
      >
        {/* Hover gradient */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
        />
        {/* Top edge glow on hover */}
        <div
          className="absolute -top-px left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${service.color}50, transparent)` }}
        />

        <div className="relative p-8 lg:p-10">
          <div className="flex items-start justify-between mb-8">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${service.color}12`, border: `1px solid ${service.color}22` }}
            >
              <Icon size={22} style={{ color: service.color }} />
            </div>
            <span className="text-xs font-mono" style={{ color: "rgba(13,39,44,0.2)" }}>
              0{index + 1}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 leading-snug" style={{ color: "#0d272c" }}>
            {service.title}
          </h3>
          <p className="text-sm font-medium mb-4" style={{ color: "rgba(50,45,46,0.55)" }}>
            {service.subtitle}
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(50,45,46,0.65)" }}>
            {service.description}
          </p>

          <ul className="space-y-2.5 mb-8">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(50,45,46,0.7)" }}>
                <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: service.color }} />
                {b}
              </li>
            ))}
          </ul>

          <div
            className="flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
            style={{ color: service.color }}
          >
            Learn more <ArrowRight size={14} />
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative" style={{ background: "#f0f4f3" }}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="teal" className="mb-5">What We Build</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#0d272c" }}>
              Four Services.
              <br />
              <span className="gradient-text">One Strategic Partner.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(50,45,46,0.65)" }}>
              Each service is built to solve a specific growth bottleneck — deployed individually or as an integrated system.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
