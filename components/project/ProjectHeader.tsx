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
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#6e7787] hover:text-[#11161b] transition-colors"
        >
          <ArrowLeft size={13} />
          <span>{breadcrumbLabel}</span>
        </Link>
      </div>

      {/* Category Kicker */}
      <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#6e7787] uppercase tracking-wider mb-2">
        <span>{category}</span>
        <span>·</span>
        <span>Technical Case Study</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#11161b] mb-4 leading-tight">
        {title}
        <span className="text-[#185a37]">.</span>
      </h1>

      {metric && (
        <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]">
          <CheckCircle2 size={16} className="text-[#185a37] flex-shrink-0" />
          <div className="text-xs font-mono">
            <span className="text-[#6e7787]">Empirical Benchmark: </span>
            <span className="font-semibold text-[#11161b]">{metric}</span>
          </div>
        </div>
      )}

      <p className="text-base sm:text-lg text-[#4c5562] leading-relaxed max-w-3xl">
        {description}
      </p>
    </header>
  );
}
