"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { teamMembers, companyPhilosophy } from "@/data/team";

export default function Team() {
  const founder = teamMembers.find((m) => m.isFounder);
  const members = teamMembers.filter((m) => !m.isFounder);

  return (
    <section id="team" className="section-padding relative" style={{ background: "#f9fbf9" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <Badge variant="teal" className="mb-5">Our Team</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "#0d272c" }}>
                The People
                <br />
                <span className="gradient-text">Behind the Systems</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(50,45,46,0.65)" }}>
                {companyPhilosophy}
              </p>
            </ScrollReveal>

            {founder && (
              <ScrollReveal delay={0.3}>
                <div className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{
                    border: "1px solid rgba(13,39,44,0.08)",
                    background: "#ffffff",
                    boxShadow: "0 1px 4px rgba(13,39,44,0.05)",
                  }}>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                    style={{ border: "1px solid rgba(13,39,44,0.1)" }}>
                    <Image src={founder.photo} alt={founder.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <div className="font-bold" style={{ color: "#0d272c" }}>{founder.name}</div>
                    <div className="text-sm" style={{ color: "rgba(50,45,46,0.55)" }}>{founder.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {members.map((member, i) => (
              <ScrollReveal key={member.id} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(13,39,44,0.07)",
                    background: "#ffffff",
                    boxShadow: "0 1px 4px rgba(13,39,44,0.05)",
                  }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 33vw, 200px"
                    />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 55%)" }} />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold leading-tight" style={{ color: "#0d272c" }}>{member.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(50,45,46,0.55)" }}>{member.role}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
