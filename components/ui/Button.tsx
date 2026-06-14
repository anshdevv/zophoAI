"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading = false, disabled, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3ec5c0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9fbf9] disabled:pointer-events-none disabled:opacity-50 select-none";

    const variants = {
      primary:
        "bg-[#3ec5c0] text-[#0d272c] hover:bg-[#3ec5c0]/90 active:scale-[0.98] shadow-[0_1px_0_0_rgba(62,197,192,0.3)_inset]",
      secondary:
        "bg-[#0d272c]/6 text-[#0d272c] border border-[#5f5049]/25 hover:bg-[#0d272c]/10 hover:border-[#5f5049]/40 active:scale-[0.98]",
      ghost:
        "bg-transparent text-[#322d2e]/60 hover:text-[#322d2e] hover:bg-[#0d272c]/5 active:scale-[0.98]",
      outline:
        "bg-transparent text-[#322d2e] border border-[#5f5049]/35 hover:border-[#3ec5c0]/50 hover:bg-[#3ec5c0]/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "h-8 px-4 text-sm",
      md: "h-10 px-5 text-sm",
      lg: "h-12 px-7 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
