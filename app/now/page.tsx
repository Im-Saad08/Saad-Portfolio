import type { Metadata } from "next";
import Link from "next/link";
import { nowContent } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
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
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#6e7787] hover:text-[#11161b] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 pb-8 border-b border-[#e5e2d9]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6e7787] uppercase tracking-wider mb-2">
            <span>Living Status</span>
            <span>·</span>
            <span>7th Semester Snapshot</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#11161b] mb-3 leading-tight">
            Now
            <span className="text-[#185a37]">.</span>
          </h1>

          <p className="text-base text-[#4c5562] leading-relaxed mb-4">
            A public log of my current engineering focus, university coursework, and ongoing research — inspired by Derek Sivers&apos;{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#11161b] underline decoration-[#185a37] underline-offset-4 hover:text-[#185a37] transition-colors"
            >
              nownownow.com
            </a>{" "}
            movement.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#ffffff] border border-[#e5e2d9] text-xs font-mono text-[#11161b]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#185a37]" />
            </span>
            <Clock size={12} className="text-[#6e7787]" />
            <span className="text-[#6e7787]">{nowContent.updatedLabel}:</span>
            <span className="font-semibold">{nowContent.lastUpdated}</span>
          </div>
        </header>

        {/* Focus Item List */}
        <div className="space-y-6">
          {nowContent.focus.map((item, idx) => (
            <article
              key={item.title}
              className="p-6 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-[#185a37]">
                  0{idx + 1}.
                </span>
                <span className="text-[11px] font-mono text-[#6e7787] uppercase tracking-wider">
                  Active Priority
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-[#11161b] mb-2">
                {item.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-14 pt-6 border-t border-[#e5e2d9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#6e7787]">
          <p>Updated periodically as priorities shift across semesters.</p>
          <Link href="/work" className="text-[#11161b] hover:text-[#185a37] inline-flex items-center gap-1 font-medium">
            <span>Explore completed builds →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
