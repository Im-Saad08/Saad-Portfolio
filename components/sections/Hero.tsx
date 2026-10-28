import Image from "next/image";
import Link from "next/link";
import { homeIntro } from "@/lib/content";
import { theme } from "@/lib/theme";
import { ArrowRight, FileText, Activity, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20" aria-labelledby="hero-heading">
      <div className="container max-w-3xl">
        {/* Warm Personal Lockup */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden border-2 border-surface-subtle ring-4 ring-surface-subtle/80 shadow-md flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Muhammad Saad portrait"
              fill
              priority
              sizes="(max-width: 640px) 80px, 96px"
              className="object-cover"
            />
          </div>

          <div className="space-y-1.5">
            <div className={theme.styles.statusPill}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-ink-subtle">Based in Islamabad · Senior CEN @ NUTECH</span>
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight"
            >
              Hi, I&apos;m Saad
              <span className={theme.styles.headingDot}>.</span>
            </h1>

            <p className="text-sm sm:text-base font-medium text-ink-muted">
              Computer Engineering Senior · National University of Technology (NUTECH)
            </p>
          </div>
        </div>

        {/* Lead Thesis */}
        <p className="text-lg sm:text-xl font-medium text-ink leading-relaxed mb-4">
          {homeIntro.tagline}
        </p>

        <p className={`${theme.styles.bodyLg} mb-8`}>
          {homeIntro.intro}
        </p>

        {/* Dynamic & Human Glance Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          <div className="p-3.5 rounded-xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-xs font-mono text-primary font-semibold mb-0.5">
              ~98.5% Live Accuracy
            </div>
            <div className="text-xs text-ink-muted">
              CPU-only ALPR at 18–24 FPS without enterprise GPUs
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-xs font-mono text-primary font-semibold mb-0.5">
              NESCOM Placement
            </div>
            <div className="text-xs text-ink-muted">
              Capstone research supervised by Dr. Inayat Ullah Khan
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface border border-border/80 shadow-2xs">
            <div className="text-xs font-mono text-primary font-semibold mb-0.5">
              39 Student Volunteers
            </div>
            <div className="text-xs text-ink-muted">
              Presidential leadership across JZT &amp; GYFHA advocacy
            </div>
          </div>
        </div>

        {/* Living Focus Strip */}
        <div className="mb-9 p-4 rounded-xl bg-surface border border-border/80 shadow-2xs">
          <div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row text-xs">
            <div className="flex items-center gap-2.5 text-ink">
              <Sparkles size={14} className="text-primary flex-shrink-0" />
              <span className="font-mono text-ink-subtle">
                Currently building:
              </span>
              <span className="font-medium text-ink">
                Industrial Vision FYP &amp; FPGA Verilog RTL at NUTECH
              </span>
            </div>

            <Link
              href="/work/industrial-vision-fyp"
              className="inline-flex items-center gap-1 font-mono text-primary hover:text-primary-hover font-medium transition-colors"
            >
              <Activity size={12} />
              <span>Explore FYP build →</span>
            </Link>
          </div>
        </div>

        {/* Friendly Action CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 pt-1">
          <Link href="/work" className={theme.styles.buttonPrimary}>
            <span>Explore Engineering Builds</span>
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
            About Saad &amp; Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
