import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { theme } from "@/lib/theme";

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
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-subtle hover:text-ink transition-colors"
        >
          <ArrowLeft size={13} />
          <span>{breadcrumbLabel}</span>
        </Link>
      </div>

      {/* Category Kicker */}
      <div className={theme.styles.kicker}>
        <span>{category}</span>
        <span>·</span>
        <span>Technical Case Study</span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-4 leading-tight mt-2">
        {title}
        <span className={theme.styles.headingDot}>.</span>
      </h1>

      {metric && (
        <div className={`mb-6 inline-flex ${theme.styles.benchmarkCallout}`}>
          <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
          <div className="text-xs font-mono">
            <span className="text-ink-subtle">Empirical Benchmark: </span>
            <span className="font-semibold text-ink">{metric}</span>
          </div>
        </div>
      )}

      <p className={theme.styles.bodyLg}>
        {description}
      </p>
    </header>
  );
}
