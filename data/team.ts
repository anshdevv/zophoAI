export interface TeamMember {
  id: string;
  name: string;
  role: string;
  // REPLACE: photo paths with actual team photos in /public/team/
  photo: string;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "Alex Morgan",
    role: "Founder & CEO",
    // REPLACE: with /team/founder.jpg
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    isFounder: true,
  },
  {
    id: "team-1",
    name: "Priya Sharma",
    role: "Head of AI Systems",
    // REPLACE: with /team/team-1.jpg
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "team-2",
    name: "Marcus Reid",
    role: "Lead Developer",
    // REPLACE: with /team/team-2.jpg
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: "team-3",
    name: "Zoe Patel",
    role: "Creative Director",
    // REPLACE: with /team/team-3.jpg
    photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
  },
];

export const companyPhilosophy =
  "We focus on practical AI systems that solve business problems, increase efficiency, and create measurable outcomes.";
