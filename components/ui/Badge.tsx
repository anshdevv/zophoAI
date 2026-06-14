import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "teal" | "gold" | "mocha" | "cream";
}

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-[#f9fbf9]/5 text-[#f9fbf9]/50 border-[#5f5049]/30",
    teal:
      "bg-[#3ec5c0]/10 text-[#3ec5c0] border-[#3ec5c0]/20",
    gold:
      "bg-[#c9a97a]/10 text-[#c9a97a] border-[#c9a97a]/20",
    mocha:
      "bg-[#5f5049]/20 text-[#9a8078] border-[#5f5049]/30",
    cream:
      "bg-[#f9fbf9]/8 text-[#f9fbf9]/70 border-[#f9fbf9]/15",
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide uppercase",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
