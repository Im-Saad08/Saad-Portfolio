import type { Metadata } from "next";
import Link from "next/link";
import { nowContent } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { theme } from "@/lib/theme";
import { ArrowLeft, Clock } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "What I'm Doing Now",
  description:
    "A public snapshot of what Muhammad Saad is focused on right now — senior year engineering coursework, Industrial Vision FYP, edge AI pipelines, and PSX macro observations.",
  canonicalUrl: "https://mohtarmsaad.com/now",
});

export default function NowPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-2xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-subtle hover:text-ink transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-border">
          <div className={`${theme.styles.kicker} mb-2`}>
            <span>Living Status · 7th Semester Snapshot</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
            Now
            <span className={theme.styles.headingDot}>.</span>
          </h1>

          <p className="text-base text-ink-muted leading-relaxed mb-4">
            A public log of my current engineering focus, university coursework, and ongoing research — inspired by Derek Sivers&apos;{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
            >
              nownownow.com
            </a>{" "}
            movement.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs font-mono text-ink">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <Clock size={12} className="text-ink-subtle" />
            <span className="text-ink-subtle">{nowContent.updatedLabel}:</span>
            <span className="font-semibold">{nowContent.lastUpdated}</span>
          </div>
        </header>

        {/* Focus Item List */}
        <div className="space-y-6">
          {nowContent.focus.map((item, idx) => (
            <article
              key={item.title}
              className={theme.styles.cardStatic}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-primary">
                  0{idx + 1}.
                </span>
                <span className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider">
                  Active Priority
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-ink mb-2">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-ink-subtle">
          <p>Updated periodically as priorities shift across semesters.</p>
          <Link href="/work" className="text-ink hover:text-primary inline-flex items-center gap-1 font-medium transition-colors">
            <span>Explore completed builds →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
