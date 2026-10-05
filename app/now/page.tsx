import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Eye, Wrench, Database, PenLine, Users, Calendar, ArrowLeft } from "lucide-react";
import { nowContent } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "What I'm Doing Now",
  description:
    "A public snapshot of what Muhammad Saad is focused on right now — senior year engineering coursework, Industrial Vision FYP, edge AI pipelines, and PSX macro observations.",
  canonicalUrl: "https://mohtarmsaad.com/now",
});

const iconMap = {
  "book-open": BookOpen,
  eye: Eye,
  wrench: Wrench,
  database: Database,
  "pen-line": PenLine,
  users: Users,
};

export default function NowPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-3xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b95a8] hover:text-[#00d4aa] transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-xs font-mono mb-4">
            <Calendar size={13} />
            <span>STATUS // NOWNOWNOW.COM</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-4">
            Now
          </h1>
          <p className="text-lg text-[#8b95a8] leading-relaxed">
            A public snapshot of my active priorities, engineering builds, and current focus — inspired by Derek Sivers&apos;{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00d4aa] hover:underline"
            >
              nownownow.com
            </a>{" "}
            movement.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#5a6578]">
            <Calendar size={13} className="text-[#00d4aa]/70" />
            <span>{nowContent.updatedLabel}: {nowContent.lastUpdated}</span>
          </div>
        </header>

        {/* Focus Item Stack */}
        <div className="space-y-4">
          {nowContent.focus.map((item) => {
            const Icon = iconMap[item.icon] || BookOpen;

            return (
              <article
                key={item.title}
                className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[#1a2438] bg-[#0e162a]/60 hover:border-[#00d4aa]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00d4aa]/20 transition-all">
                  <Icon size={22} className="text-[#00d4aa]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#e8eaf0] mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#8b95a8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 rounded-xl border border-[#1a2438] bg-[#0e162a]/30 text-center">
          <PenLine size={28} className="mx-auto mb-2 text-[#5a6578]" aria-hidden="true" />
          <p className="text-sm text-[#8b95a8] mb-2">
            This page is updated periodically as priorities shift across semesters and engineering milestones.
          </p>
          <Link href="/notes" className="text-xs text-[#00d4aa] hover:underline font-mono">
            Explore deeper technical writing in Notes →
          </Link>
        </div>
      </div>
    </div>
  );
}
