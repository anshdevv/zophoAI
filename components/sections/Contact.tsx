"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Building2, Mail, Phone, ChevronDown, FileText,
  CheckCircle2, AlertCircle, ArrowRight, Send, Clock, MessageSquare, Shield,
} from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { siteConfig } from "@/lib/config";

const serviceOptions: { value: ContactFormData["service"]; label: string }[] = [
  { value: "ai-photography",      label: "AI Product Photography & Commercials" },
  { value: "voice-agents",        label: "AI Voice Agents" },
  { value: "website-development", label: "Website Development" },
  { value: "automation",          label: "Business Process Automation" },
  { value: "multiple",            label: "Multiple Services" },
  { value: "not-sure",            label: "Not Sure Yet — Need Guidance" },
];

const infoCards = [
  { icon: Clock,         title: "Response Time",  description: "Within one business day",       color: "#3ec5c0" },
  { icon: MessageSquare, title: "Strategy Call",  description: "30-minute focused consultation", color: "#c9a97a" },
  { icon: Shield,        title: "Confidential",   description: "Your details are never shared",  color: "#7dd4d0" },
];

function Field({ label, error, required, children }: {
  label: string; error?: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium" style={{ color: "rgba(249,251,249,0.65)" }}>
        {label}
        {required && <span style={{ color: "#3ec5c0" }} className="ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "#e87070" }}
          >
            <AlertCircle size={12} />{error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  "w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none";
const inputStyle = {
  background: "rgba(249,251,249,0.03)",
  border: "1px solid rgba(95,80,73,0.3)",
  color: "#f9fbf9",
};
const inputFocusStyle = {
  borderColor: "rgba(62,197,192,0.4)",
  background: "rgba(249,251,249,0.05)",
};

function StyledInput({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      className={`${inputBase} ${className}`}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}), color: "#f9fbf9" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Failed to send message");
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const fieldProps = (name: keyof ContactFormData) => register(name);

  return (
    <section id="contact" className="section-padding relative" style={{ background: "#0d272c" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal>
              <Badge variant="teal" className="mb-5">Get In Touch</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "#f9fbf9" }}>
                Let's Build
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #3ec5c0 0%, #f9fbf9 50%, #c9a97a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>Something Together</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(249,251,249,0.45)" }}>
                Tell us about your business and what you're trying to achieve. We'll respond within one business day.
              </p>
            </ScrollReveal>

            <div className="space-y-3">
              {infoCards.map((item, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.08}>
                  <div className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ border: "1px solid rgba(95,80,73,0.2)", background: "rgba(249,251,249,0.02)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}>
                      <item.icon size={15} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium" style={{ color: "#f9fbf9" }}>{item.title}</div>
                      <div className="text-xs" style={{ color: "rgba(249,251,249,0.38)" }}>{item.description}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.6}>
              <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(95,80,73,0.15)" }}>
                <p className="text-xs mb-1" style={{ color: "rgba(249,251,249,0.28)" }}>Prefer email?</p>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-sm transition-colors"
                  style={{ color: "#3ec5c0" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#7dd4d0")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#3ec5c0")}
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={0.15} direction="right">
            <div className="relative">
              {/* Success */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center rounded-2xl p-10"
                    style={{ border: "1px solid rgba(62,197,192,0.2)", background: "#162e34" }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{ background: "rgba(62,197,192,0.1)", border: "1px solid rgba(62,197,192,0.25)" }}
                    >
                      <CheckCircle2 size={32} style={{ color: "#3ec5c0" }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "#f9fbf9" }}>Message Sent</h3>
                    <p className="text-sm leading-relaxed max-w-xs mb-8" style={{ color: "rgba(249,251,249,0.45)" }}>
                      We've received your inquiry and sent a confirmation to your email. We'll be in touch within one business day.
                    </p>
                    <Button
                      className="!bg-transparent !text-[#f9fbf9]/70 !border !border-[#5f5049]/40 hover:!text-[#f9fbf9] hover:!border-[#3ec5c0]/40"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form card */}
              <div
                className={`rounded-2xl p-7 md:p-8 transition-opacity duration-300 ${status === "success" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                style={{ border: "1px solid rgba(95,80,73,0.22)", background: "#162e34" }}
              >
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name" error={errors.name?.message} required>
                      <div className="relative">
                        <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "rgba(95,80,73,0.6)" }} />
                        <StyledInput {...fieldProps("name")} type="text" placeholder="Alex Johnson" autoComplete="name" className="pl-9" />
                      </div>
                    </Field>
                    <Field label="Company" error={errors.company?.message} required>
                      <div className="relative">
                        <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "rgba(95,80,73,0.6)" }} />
                        <StyledInput {...fieldProps("company")} type="text" placeholder="Acme Corp" autoComplete="organization" className="pl-9" />
                      </div>
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email" error={errors.email?.message} required>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "rgba(95,80,73,0.6)" }} />
                        <StyledInput {...fieldProps("email")} type="email" placeholder="alex@company.com" autoComplete="email" className="pl-9" />
                      </div>
                    </Field>
                    <Field label="Phone" error={errors.phone?.message}>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: "rgba(95,80,73,0.6)" }} />
                        <StyledInput {...fieldProps("phone")} type="tel" placeholder="+1 555 000 0000" autoComplete="tel" className="pl-9" />
                      </div>
                    </Field>
                  </div>

                  <Field label="Service Needed" error={errors.service?.message} required>
                    <div className="relative">
                      <select
                        {...fieldProps("service")}
                        defaultValue=""
                        className={`${inputBase} appearance-none pr-10 cursor-pointer`}
                        style={inputStyle}
                      >
                        <option value="" disabled style={{ background: "#162e34" }}>Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} style={{ background: "#162e34" }}>{opt.label}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ color: "rgba(95,80,73,0.6)" }} />
                    </div>
                  </Field>

                  <Field label="Project Details" error={errors.projectDetails?.message} required>
                    <div className="relative">
                      <FileText size={14} className="absolute left-3.5 top-3.5 pointer-events-none"
                        style={{ color: "rgba(95,80,73,0.6)" }} />
                      <textarea
                        {...fieldProps("projectDetails")}
                        rows={5}
                        placeholder="Tell us about your business, what you're trying to solve, and any relevant context..."
                        className={`${inputBase} pl-9 resize-none leading-relaxed`}
                        style={inputStyle}
                      />
                    </div>
                  </Field>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-3 p-4 rounded-xl text-sm"
                        style={{ background: "rgba(232,112,112,0.08)", border: "1px solid rgba(232,112,112,0.2)", color: "#e87070" }}
                      >
                        <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button type="submit" size="lg" loading={status === "loading"} className="w-full group">
                    {status === "loading" ? "Sending..." : "Send Message"}
                    {status !== "loading" && (
                      <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    )}
                  </Button>

                  <p className="text-[11px] text-center leading-relaxed" style={{ color: "rgba(249,251,249,0.22)" }}>
                    By submitting you agree to our{" "}
                    <a href="/privacy" className="underline" style={{ color: "rgba(249,251,249,0.35)" }}>Privacy Policy</a>.
                    We never share your information.
                  </p>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
