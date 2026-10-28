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
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-[#e6e4dc] bg-[#f4f3ef] ring-4 ring-[#f4f3ef] flex-shrink-0 shadow-sm">
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
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#767d8f] uppercase tracking-wider">
              <span>Computer Engineering Senior</span>
              <span>·</span>
              <span>CEN Batch 22</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151927] leading-tight"
            >
              Muhammad Saad
              <span className="text-[#c94a2f]">.</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#535a6c] leading-snug">
              National University of Technology (NUTECH), Islamabad
            </p>
          </div>
        </div>

        {/* Lead Thesis */}
        <p className="text-lg sm:text-xl font-medium text-[#151927] leading-relaxed mb-4">
          {homeIntro.tagline}
        </p>

        <p className="text-base sm:text-lg text-[#535a6c] leading-relaxed mb-8 max-w-2xl">
          {homeIntro.intro}
        </p>

        {/* Living Status Strip */}
        <div className="mb-10 p-4 rounded-lg bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]">
          <div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row text-xs">
            <div className="flex items-center gap-2.5 text-[#151927]">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span className="font-mono font-medium text-[#767d8f] uppercase tracking-wider">
                Current Focus:
              </span>
              <span className="font-medium text-[#151927]">
                Industrial Vision FYP &amp; Verilog RTL at NUTECH
              </span>
            </div>

            <Link
              href="/now"
              className="inline-flex items-center gap-1 font-mono text-[#c94a2f] hover:text-[#b33d24] font-medium transition-colors"
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#151927] text-white text-sm font-medium rounded hover:bg-[#252c44] transition-colors shadow-sm"
          >
            <span>Explore Engineering Work</span>
            <ArrowRight size={15} />
          </Link>

          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e6e4dc] bg-[#ffffff] text-[#151927] text-sm font-medium rounded hover:bg-[#f4f3ef] transition-colors"
          >
            <FileText size={15} className="text-[#767d8f]" />
            <span>Download CV (PDF)</span>
          </a>

          <Link
            href="/about"
            className="text-sm font-medium text-[#535a6c] hover:text-[#151927] transition-colors ml-1"
          >
            About &amp; Leadership →
          </Link>
        </div>
      </div>
    </section>
  );
}
