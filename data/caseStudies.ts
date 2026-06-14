export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  // REPLACE: image paths with actual case study images in /public/media/case-studies/
  image: string;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "voice-agent",
    category: "AI Voice Agent",
    title: "24/7 Lead Capture for Dental Practice",
    challenge: "Missing 40% of inbound calls outside office hours.",
    solution:
      "Deployed an AI voice agent that answers calls, qualifies leads, and books appointments automatically.",
    outcome: "Zero missed after-hours calls. Appointment bookings increased significantly within 30 days.",
    metrics: [
      { label: "Calls Answered", value: "100%" },
      { label: "Leads Captured", value: "+40%" },
      { label: "After-Hours Booking", value: "24/7" },
    ],
    // REPLACE: with /media/case-studies/voice-agent-case.jpg
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    color: "#60a5fa",
  },
  {
    id: "product-commercial",
    category: "AI Product Commercials",
    title: "E-Commerce Brand Cuts Production Time by 80%",
    challenge:
      "Expensive studio shoots for each product launch delayed campaigns by weeks.",
    solution:
      "AI-assisted product photography and commercial generation pipeline for rapid asset creation.",
    outcome: "Campaign assets delivered in days, not weeks. Cost reduced by 75%.",
    metrics: [
      { label: "Production Speed", value: "10x" },
      { label: "Cost Reduction", value: "75%" },
      { label: "Assets Per Month", value: "200+" },
    ],
    // REPLACE: with /media/case-studies/ecommerce-case.jpg
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=500&fit=crop",
    color: "#a78bfa",
  },
  {
    id: "business-automation",
    category: "Business Automation",
    title: "Logistics Firm Automates Reporting & CRM",
    challenge:
      "Team spending 15+ hours per week on manual data entry and report generation.",
    solution:
      "Custom automation pipeline connecting CRM, reporting tools, and email workflows.",
    outcome: "Eliminated manual work. Team reallocated to high-value client activities.",
    metrics: [
      { label: "Hours Saved/Week", value: "15+" },
      { label: "Error Reduction", value: "99%" },
      { label: "ROI", value: "6x" },
    ],
    // REPLACE: with /media/case-studies/automation-case.jpg
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    color: "#34d399",
  },
];
