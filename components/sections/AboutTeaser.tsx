import Link from "next/link";
import { theme } from "@/lib/theme";
import { ArrowRight, HeartHandshake, Wrench } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-24 border-t border-border" aria-labelledby="about-teaser-heading">
      <div className="container max-w-4xl">
        <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-border/80 shadow-[0_2px_16px_rgba(17,22,27,0.03)]">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono font-medium text-ink-subtle uppercase tracking-wider mb-1">
              Personal Narrative &amp; Leadership
            </div>
            <h2 id="about-teaser-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              The Human Behind the Engineering
              <span className={theme.styles.headingDot}>.</span>
            </h2>
            <p className="text-sm sm:text-base text-ink-muted mt-2 leading-relaxed">
              A blend of low-level technical discipline and active student humanitarian leadership in Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">
            {/* Engineering Philosophy */}
            <div className="p-6 rounded-2xl bg-surface-subtle/70 border border-border/70 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary mb-3.5 shadow-2xs">
                  <Wrench size={17} />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">
                  Respect the Hardware
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  I believe the most satisfying engineering happens when you understand registers, cache lines, and memory constraints. Rather than spinning up costly cloud instances, my work focuses on squeezing maximum throughput out of commodity, edge-grade hardware.
                </p>
              </div>
            </div>

            {/* Civic & Volunteer Leadership */}
            <div className="p-6 rounded-2xl bg-surface-subtle/70 border border-border/70 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-primary mb-3.5 shadow-2xs">
                  <HeartHandshake size={17} />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">
                  Civic Action &amp; Student Service
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Outside of code, I served as President of JZT NUTECH and GYFHA Local Council, mobilizing 39 student volunteers across campus blood donation campaigns and nationwide Thalassemia awareness alongside the Higher Education Commission and Ministry of Health.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-ink-subtle font-mono">
              Senior Computer Engineering Undergraduate · NUTECH Islamabad (CEN Batch 22)
            </p>

            <Link
              href="/about"
              className={theme.styles.linkText}
            >
              <span>Read complete story, coursework &amp; leadership</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
