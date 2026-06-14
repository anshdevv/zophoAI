"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Zap, Clock, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";

const floatingCards = [
  {
    icon: Clock,
    label: "Lead Captured",
    value: "2:34 AM",
    sub: "Outside business hours",
    color: "#3ec5c0",
    glow: "rgba(62,197,192,0.12)",
  },
  {
    icon: TrendingUp,
    label: "Response Time",
    value: "<2 sec",
    sub: "AI voice agent active",
    color: "#c9a97a",
    glow: "rgba(201,169,122,0.12)",
  },
  {
    icon: Zap,
    label: "Automation",
    value: "147 Tasks",
    sub: "Completed this week",
    color: "#7dd4d0",
    glow: "rgba(125,212,208,0.12)",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0d272c" }}
    >
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        {/* Teal radial bloom */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: "rgba(62,197,192,0.07)" }} />
        {/* Gold accent */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(201,169,122,0.06)" }} />
        {/* Espresso warmth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "rgba(50,45,46,0.3)" }} />

        {/* Grid */}
        <div className="absolute inset-0 grid-overlay" />

        {/* Vignette */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 35%, #0d272c 72%)" }} />
      </motion.div>

      {/* Floating cards — desktop */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: "easeOut" }}
          className={`hidden lg:block absolute z-10 ${
            i === 0 ? "left-[5%] top-[30%]" :
            i === 1 ? "right-[5%] top-[24%]" :
            "right-[7%] bottom-[24%]"
          }`}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            className="rounded-2xl p-4 w-[200px] backdrop-blur-xl"
            style={{
              background: "rgba(22, 46, 52, 0.8)",
              border: `1px solid ${card.color}20`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${card.color}10`,
            }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: card.glow, border: `1px solid ${card.color}25` }}
              >
                <card.icon size={15} style={{ color: card.color }} />
              </div>
              <span className="text-[11px] font-medium" style={{ color: "rgba(249,251,249,0.45)" }}>{card.label}</span>
            </div>
            <div className="text-lg font-bold" style={{ color: card.color }}>{card.value}</div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(249,251,249,0.3)" }}>{card.sub}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{
            background: "rgba(62,197,192,0.08)",
            border: "1px solid rgba(62,197,192,0.2)",
            color: "#3ec5c0",
          }}
        >
          <Sparkles size={12} />
          AI-Powered Business Growth
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ color: "#f9fbf9" }}
        >
          AI Systems That{" "}
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(135deg, #3ec5c0, #f9fbf9, #c9a97a, #3ec5c0)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Grow Your Business
          </motion.span>
          <br />
          While You Sleep
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: "rgba(249,251,249,0.5)" }}
        >
          We build AI-powered customer experiences, voice agents, websites,
          and automations that help businesses capture more revenue with less manual work.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.54, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="group w-full sm:w-auto"
          >
            Book A Call
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button
            size="lg"
            onClick={() => scrollTo("services")}
            className="w-full sm:w-auto !bg-transparent !text-[#f9fbf9]/70 !border !border-[#5f5049]/35 hover:!text-[#f9fbf9] hover:!border-[#3ec5c0]/40 hover:!bg-[#f9fbf9]/5"
          >
            View Services
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 pt-12"
          style={{ borderTop: "1px solid rgba(95,80,73,0.2)" }}
        >
          {[
            { label: "Lead Capture", value: "24/7" },
            { label: "Faster Response", value: "10x" },
            { label: "Automated Operations", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: "#f9fbf9" }}>{stat.value}</div>
              <div className="text-sm" style={{ color: "rgba(249,251,249,0.35)" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full flex items-start justify-center p-1"
          style={{ border: "1px solid rgba(95,80,73,0.3)" }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full"
            style={{ background: "rgba(249,251,249,0.3)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
