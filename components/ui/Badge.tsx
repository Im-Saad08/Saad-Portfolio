import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "muted" | "subtle";
  className?: string;
}

export function Badge({ children, variant = "accent", className = "" }: BadgeProps) {
  const variantStyles = {
    accent: "bg-[#00d4aa]/10 border-[#00d4aa]/30 text-[#00d4aa]",
    muted: "bg-[#0a0f1d] border-[#1a2438] text-[#8b95a8]",
    subtle: "bg-[#1a2438] border-[#23314a] text-[#e8eaf0]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
