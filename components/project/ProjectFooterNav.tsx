import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectFooterNavProps {
  backLabel?: string;
  backHref?: string;
  nextLabel?: string;
  nextHref?: string;
}

export function ProjectFooterNav({
  backLabel = "Return to engineering builds",
  backHref = "/work",
  nextLabel = "Read writing & heuristics",
  nextHref = "/notes",
}: ProjectFooterNavProps) {
  return (
    <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-primary transition-colors"
      >
        <ArrowLeft size={13} />
        <span>{backLabel}</span>
      </Link>
      <Link
        href={nextHref}
        className="inline-flex items-center gap-1.5 font-medium text-ink-muted hover:text-ink transition-colors"
      >
        <span>{nextLabel}</span>
        <ArrowRight size={13} />
      </Link>
    </div>
  );
}
