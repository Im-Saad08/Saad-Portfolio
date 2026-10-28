import Image from "next/image";
import Link from "next/link";
import { homeIntro } from "@/lib/content";
import { theme } from "@/lib/theme";
import { ArrowRight, FileText, Activity } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20" aria-labelledby="hero-heading">
      <div className="container max-w-3xl">
        {/* Profile Lockup */}
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-border bg-surface-subtle ring-4 ring-surface-subtle flex-shrink-0 shadow-xs">
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
            <div className={theme.styles.kicker}>
              <span>Computer Engineering Senior</span>
              <span>·</span>
              <span>CEN Batch 22</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight"
            >
              Muhammad Saad
              <span className={theme.styles.headingDot}>.</span>
            </h1>

            <p className="text-base sm:text-lg font-medium text-ink-muted leading-snug">
              National University of Technology (NUTECH), Islamabad
            </p>
          </div>
        </div>

        {/* Lead Thesis */}
        <p className="text-lg sm:text-xl font-medium text-ink leading-relaxed mb-4">
          {homeIntro.tagline}
        </p>

        <p className={theme.styles.bodyLg}>
          {homeIntro.intro}
        </p>

        {/* Living Status Strip */}
        <div className="my-10 p-4 rounded-lg bg-surface border border-border shadow-xs">
          <div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row text-xs">
            <div className="flex items-center gap-2.5 text-ink">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <span className="font-mono font-medium text-ink-subtle uppercase tracking-wider">
                Current Focus:
              </span>
              <span className="font-medium text-ink">
                Industrial Vision FYP &amp; Verilog RTL at NUTECH
              </span>
            </div>

            <Link
              href="/now"
              className="inline-flex items-center gap-1 font-mono text-primary hover:text-primary-hover font-medium transition-colors"
            >
              <Activity size={12} />
              <span>Full status (/now) →</span>
            </Link>
          </div>
        </div>

        {/* Action CTAs: Single Primary + Subordinate Secondary */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link href="/work" className={theme.styles.buttonPrimary}>
            <span>Explore Engineering Work</span>
            <ArrowRight size={15} />
          </Link>

          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className={theme.styles.buttonSecondary}
          >
            <FileText size={15} className="text-ink-subtle" />
            <span>Download CV (PDF)</span>
          </a>

          <Link href="/about" className={theme.styles.buttonGhost}>
            About &amp; Leadership →
          </Link>
        </div>
      </div>
    </section>
  );
}
