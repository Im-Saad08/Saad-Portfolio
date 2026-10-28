import { Mail, GitBranch, MapPin, FileText, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/content";
import { theme } from "@/lib/theme";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 border-t border-border" aria-labelledby="contact-heading">
      <div className="container max-w-3xl">
        <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-border shadow-xs">
          <p className={theme.styles.kicker}>
            Direct Communication &amp; Inquiries
          </p>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3 mt-1">
            Get in Touch
            <span className={theme.styles.headingDot}>.</span>
          </h2>
          <p className={theme.styles.bodyLg}>
            Interested in technical discussions regarding edge computer vision pipelines, embedded hardware interfacing, or engineering roles? Let&apos;s connect directly.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 my-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className={theme.styles.buttonPrimary}
            >
              <Mail size={15} />
              <span>{personalInfo.email}</span>
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
              <span>CV (PDF)</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle pt-4 border-t border-border-subtle">
            <MapPin size={13} className="text-primary" />
            <span>{personalInfo.location} · Available for engineering collaborations &amp; research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
