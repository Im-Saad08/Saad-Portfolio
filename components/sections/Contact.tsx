import { Mail, GitBranch, MapPin, FileText, ArrowUpRight, Coffee } from "lucide-react";
import { personalInfo } from "@/lib/content";
import { theme } from "@/lib/theme";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 border-t border-border" aria-labelledby="contact-heading">
      <div className="container max-w-3xl">
        <div className="p-8 sm:p-11 rounded-3xl bg-surface border border-border/80 shadow-[0_4px_24px_rgba(17,22,27,0.04)]">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-primary uppercase tracking-wider mb-2">
            <Coffee size={14} />
            <span>Open for Conversations</span>
          </div>

          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3">
            Let&apos;s Connect &amp; Build
            <span className={theme.styles.headingDot}>.</span>
          </h2>

          <p className={`${theme.styles.bodyLg} mb-4`}>
            Whether you&apos;re curious about edge vision pipelines, low-level systems concurrency, research collaborations, or want to talk engineering over a cup of chai/coffee in Islamabad — I&apos;d love to hear from you.
          </p>

          <p className="text-xs text-ink-subtle font-mono mb-8">
            Fastest response via email · Usually replies within 24 hours
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className={theme.styles.buttonPrimary}
            >
              <Mail size={15} />
              <span>Say Hello via Email</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={theme.styles.buttonSecondary}
            >
              <GitBranch size={15} className="text-ink-subtle" />
              <span>GitHub</span>
              <ArrowUpRight size={13} className="text-ink-subtle" />
            </a>

            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className={theme.styles.buttonSecondary}
            >
              <FileText size={15} className="text-ink-subtle" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-ink-subtle pt-6 border-t border-border-subtle">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-primary flex-shrink-0" />
              <span>{personalInfo.location} · NUTECH Islamabad</span>
            </div>
            <span className="text-[11px] text-ink-subtle">
              CEN Batch 22 Senior
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
