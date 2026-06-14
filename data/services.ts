export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  color: string;
  gradient: string;
}

export const services: Service[] = [
  {
    id: "product-photography",
    icon: "Camera",
    title: "AI Product Shoots & Commercials",
    subtitle: "Studio quality. Fraction of the cost.",
    description:
      "Transform ordinary product photos into studio-quality marketing assets using AI-assisted production workflows.",
    benefits: [
      "Product photography",
      "Commercial generation",
      "Social media creatives",
      "Campaign assets",
      "Faster turnaround",
    ],
    color: "#3ec5c0",
    gradient: "from-[#3ec5c0]/8 to-[#3ec5c0]/3",
  },
  {
    id: "voice-agents",
    icon: "Phone",
    title: "AI Voice Agents",
    subtitle: "Never lose a lead again.",
    description:
      "Never lose customers outside business hours. AI voice agents handle calls, qualify leads, and book appointments around the clock.",
    benefits: [
      "24/7 answering",
      "Lead qualification",
      "Appointment booking",
      "Call routing",
      "Customer support",
    ],
    color: "#7dd4d0",
    gradient: "from-[#7dd4d0]/8 to-[#7dd4d0]/3",
  },
  {
    id: "website-development",
    icon: "Globe",
    title: "Website Development",
    subtitle: "Built to convert visitors into customers.",
    description:
      "High-performance websites designed to convert visitors into customers. Fast, modern, and built for growth.",
    benefits: [
      "Modern design",
      "Fast performance",
      "Mobile optimization",
      "SEO-ready",
      "Conversion focused",
    ],
    color: "#c9a97a",
    gradient: "from-[#c9a97a]/8 to-[#c9a97a]/3",
  },
  {
    id: "automation",
    icon: "Zap",
    title: "Custom Automation",
    subtitle: "Eliminate repetitive work at scale.",
    description:
      "Automate repetitive work and connect the tools your business already uses. From CRM to reporting.",
    benefits: [
      "CRM automation",
      "Lead pipelines",
      "AI workflows",
      "Internal operations",
      "Reporting systems",
    ],
    color: "#9a8078",
    gradient: "from-[#9a8078]/8 to-[#9a8078]/3",
  },
];
