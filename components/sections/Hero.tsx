import Image from "next/image";
import Link from "next/link";
import { homeIntro } from "@/lib/content";
import { ArrowRight, FileText, Activity } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20" aria-labelledby="hero-heading">
      <div className="container max-w-3xl">
        {/* Profile Lockup */}
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-[#e5e2d9] bg-[#f2f0e8] ring-4 ring-[#f2f0e8] flex-shrink-0 shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Muhammad Saad portrait"
              fill
              priority
              sizes="(max-width: 640px) 112px, 128px"
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#6e7787] uppercase tracking-wider">
              <span>Computer Engineering Senior</span>
              <span>·</span>
              <span>CEN Batch 22</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#11161b] leading-tight"
            >
              Muhammad Saad
              <span className="text-[#185a37]">.</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#4c5562] leading-snug">
              National University of Technology (NUTECH), Islamabad
            </p>
          </div>
        </div>

        {/* Lead Thesis */}
        <p className="text-lg sm:text-xl font-medium text-[#11161b] leading-relaxed mb-4">
          {homeIntro.tagline}
        </p>

        <p className="text-base sm:text-lg text-[#4c5562] leading-relaxed mb-8 max-w-2xl">
          {homeIntro.intro}
        </p>

        {/* Living Status Strip */}
        <div className="mb-10 p-4 rounded-lg bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]">
          <div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row text-xs">
            <div className="flex items-center gap-2.5 text-[#11161b]">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#185a37]" />
              </span>
              <span className="font-mono font-medium text-[#6e7787] uppercase tracking-wider">
                Current Focus:
              </span>
              <span className="font-medium text-[#11161b]">
                Industrial Vision FYP &amp; Verilog RTL at NUTECH
              </span>
            </div>

            <Link
              href="/now"
              className="inline-flex items-center gap-1 font-mono text-[#185a37] hover:text-[#103f27] font-medium transition-colors"
            >
              <Activity size={12} />
              <span>Full status (/now) →</span>
            </Link>
          </div>
        </div>

        {/* Action CTAs: Single Primary + Subordinate Secondary */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#185a37] text-white text-sm font-medium rounded hover:bg-[#103f27] transition-colors shadow-sm"
          >
            <span>Explore Engineering Work</span>
            <ArrowRight size={15} />
          </Link>

          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] text-sm font-medium rounded hover:bg-[#f2f0e8] hover:border-[#cfccc2] transition-colors"
          >
            <FileText size={15} className="text-[#6e7787]" />
            <span>Download CV (PDF)</span>
          </a>

          <Link
            href="/about"
            className="text-sm font-medium text-[#4c5562] hover:text-[#185a37] transition-colors ml-1"
          >
            About &amp; Leadership →
          </Link>
        </div>
      </div>
    </section>
  );
}
