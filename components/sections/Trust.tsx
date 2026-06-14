"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const logos = [
  { name: "Nova Commerce", abbr: "NC" },
  { name: "Apex Logistics", abbr: "AL" },
  { name: "Bright Dental", abbr: "BD" },
  { name: "Vertex Solutions", abbr: "VS" },
  { name: "Momentum Labs", abbr: "ML" },
  { name: "Atlas Ventures", abbr: "AV" },
  { name: "Peak Media", abbr: "PM" },
  { name: "Orbit Digital", abbr: "OD" },
];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-8 h-14">
      <div className="flex items-center gap-2.5 transition-opacity duration-300"
        style={{ opacity: 0.4 }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.4")}
      >
        {/* REPLACE with actual SVG logos from /public/logos/ */}
        <div className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold"
          style={{ background: "rgba(13,39,44,0.08)", color: "#0d272c" }}>
          {abbr}
        </div>
        <span className="text-sm font-semibold whitespace-nowrap tracking-wide" style={{ color: "#322d2e" }}>
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Trust() {
  const doubled = [...logos, ...logos];

  return (
    <section className="relative py-20 overflow-hidden"
      style={{
        background: "#f9fbf9",
        borderTop: "1px solid rgba(13,39,44,0.06)",
        borderBottom: "1px solid rgba(13,39,44,0.06)",
      }}
    >

      <div className="container-custom mb-10">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(95,80,73,0.75)" }}>
            Built for modern businesses
          </p>
        </ScrollReveal>
      </div>

      <div className="marquee-container mb-4">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <LogoItem key={i} name={logo.name} abbr={logo.abbr} />
          ))}
        </div>
      </div>

      <div className="container-custom mt-12">
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {["24/7 Availability", "Results-Driven", "Enterprise Ready", "Fast Delivery", "Dedicated Support"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm" style={{ color: "rgba(50,45,46,0.5)" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#3ec5c0", opacity: 0.7 }} />
                {badge}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
