import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ProjectHeaderProps {
  category: string;
  title: string;
  description: string;
  metric?: string;
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
}

export function ProjectHeader({
  category,
  title,
  description,
  metric,
  breadcrumbLabel = "Back to engineering projects",
  breadcrumbHref = "/work",
}: ProjectHeaderProps) {
  return (
    <header className="mb-10">
      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          href={breadcrumbHref}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#767d8f] hover:text-[#151927] transition-colors"
        >
          <ArrowLeft size={13} />
          <span>{breadcrumbLabel}</span>
        </Link>
      </div>

      {/* Category Kicker */}
      <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#767d8f] uppercase tracking-wider mb-2">
        <span>{category}</span>
        <span>·</span>
        <span>Technical Case Study</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151927] mb-4 leading-tight">
        {title}
        <span className="text-[#c94a2f]">.</span>
      </h1>

      {metric && (
        <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]">
          <CheckCircle2 size={16} className="text-[#c94a2f] flex-shrink-0" />
          <div className="text-xs font-mono">
            <span className="text-[#767d8f]">Empirical Benchmark: </span>
            <span className="font-semibold text-[#151927]">{metric}</span>
          </div>
        </div>
      )}

      <p className="text-base sm:text-lg text-[#535a6c] leading-relaxed max-w-3xl">
        {description}
      </p>
    </header>
  );
}
