import type { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: ReactNode;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`mb-16 ${alignment} max-w-3xl ${className}`}>
      {badge && <div className="mb-4">{badge}</div>}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#8b95a8] leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
