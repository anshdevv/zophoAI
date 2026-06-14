export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  review: string;
  rating: number;
}

// Replace photo paths with actual client photos when available.
// Current paths reference /public/testimonials/ directory.
export const testimonials: Testimonial[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Nova Commerce",
    // REPLACE: /testimonials/sarah-mitchell.jpg with actual photo
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    review:
      "The AI-generated product content dramatically improved our marketing workflow. What previously took weeks now takes days.",
    rating: 5,
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Operations Manager",
    company: "Apex Logistics",
    // REPLACE: /testimonials/david-chen.jpg with actual photo
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    review:
      "The automation systems eliminated repetitive work across our team and significantly improved response times.",
    rating: 5,
  },
  {
    id: "emma-roberts",
    name: "Emma Roberts",
    role: "Founder",
    company: "Bright Dental",
    // REPLACE: /testimonials/emma-roberts.jpg with actual photo
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    review:
      "The voice agent consistently captures leads after business hours. We've stopped missing customer inquiries.",
    rating: 5,
  },
  {
    id: "michael-turner",
    name: "Michael Turner",
    role: "CEO",
    company: "Vertex Solutions",
    // REPLACE: /testimonials/michael-turner.jpg with actual photo
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    review:
      "Our new website performs significantly better than the previous one and generates far more qualified inquiries.",
    rating: 5,
  },
  {
    id: "olivia-hughes",
    name: "Olivia Hughes",
    role: "Growth Lead",
    company: "Momentum Labs",
    // REPLACE: /testimonials/olivia-hughes.jpg with actual photo
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    review:
      "The combination of automation and AI workflows reduced operational overhead almost immediately.",
    rating: 5,
  },
  {
    id: "james-carter",
    name: "James Carter",
    role: "Managing Director",
    company: "Atlas Ventures",
    // REPLACE: /testimonials/james-carter.jpg with actual photo
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    review:
      "Professional execution, strong communication, and systems that genuinely impact business growth.",
    rating: 5,
  },
];
