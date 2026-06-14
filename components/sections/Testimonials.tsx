"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12}
          style={{ color: i < rating ? "#c9a97a" : "rgba(95,80,73,0.3)",
            fill: i < rating ? "#c9a97a" : "transparent" }} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="relative rounded-2xl p-7 md:p-8 h-full flex flex-col"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(13,39,44,0.07)",
        boxShadow: "0 1px 4px rgba(13,39,44,0.05), 0 4px 16px rgba(13,39,44,0.04)",
      }}>
      <Quote size={28} className="mb-5 flex-shrink-0" style={{ color: "rgba(62,197,192,0.3)" }} />

      <p className="text-base md:text-lg leading-relaxed flex-1 mb-7" style={{ color: "rgba(50,45,46,0.8)" }}>
        "{t.review}"
      </p>

      <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(13,39,44,0.07)" }}>
        <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
          style={{ border: "1px solid rgba(13,39,44,0.1)" }}>
          <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="44px" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold truncate" style={{ color: "#0d272c" }}>{t.name}</div>
          <div className="text-xs truncate" style={{ color: "rgba(50,45,46,0.55)" }}>
            {t.role}, {t.company}
          </div>
        </div>
        <StarRating rating={t.rating} />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#f9fbf9" }}>
      <div className="container-custom">
        <div className="text-center mb-14">
          <ScrollReveal>
            <Badge variant="teal" className="mb-5">Client Success</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#0d272c" }}>
              What Our Clients
              <br />
              <span className="gradient-text">Are Saying</span>
            </h2>
          </ScrollReveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
          >
            {visible.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ border: "1px solid rgba(13,39,44,0.15)", color: "rgba(50,45,46,0.55)" }}
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{ width: i === page ? 24 : 6, background: i === page ? "#3ec5c0" : "rgba(13,39,44,0.2)" }}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ border: "1px solid rgba(13,39,44,0.15)", color: "rgba(50,45,46,0.55)" }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
