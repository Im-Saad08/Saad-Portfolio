import Link from "next/link";
import { personalInfo, navItems } from "@/lib/content";
import { theme } from "@/lib/theme";
import { Mail, GitBranch, FileText, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-canvas pt-16 pb-14 text-sm" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          {/* Identity & Premise Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded border border-ink/20 bg-ink text-white font-mono text-xs font-semibold">
                S
              </span>
              <span className="font-semibold text-base tracking-tight text-ink">
                Muhammad Saad
              </span>
              <span className={theme.styles.headingDot}>.</span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed max-w-sm">
              Senior Computer Engineering undergraduate at NUTECH Islamabad (CEN Batch 22). Architecting compute-efficient edge computer vision pipelines, bare-metal microcontroller firmware, and low-level systems concurrency.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-ink-subtle pt-1 font-mono">
              <MapPin size={13} className="text-primary" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Directory Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-ink uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 text-xs" aria-label="Footer directory">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-ink-muted hover:text-ink transition-colors inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct Channels Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-ink uppercase">
              Verified Channels
            </h4>
            <ul className="space-y-2 text-xs text-ink-muted">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-ink transition-colors"
                >
                  <Mail size={13} className="text-ink-subtle" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-ink transition-colors"
                >
                  <GitBranch size={13} className="text-ink-subtle" />
                  <span>github.com/Im-Saad08</span>
                </a>
              </li>
              <li>
                <a
                  href="/Saad_CV.pdf"
                  download="Muhammad_Saad_CV.pdf"
                  className="inline-flex items-center gap-2 hover:text-ink transition-colors"
                >
                  <FileText size={13} className="text-ink-subtle" />
                  <span>Curriculum Vitae (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon & Archival Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink-subtle">
          <p>© {currentYear} Muhammad Saad. Handcrafted with care in Islamabad.</p>
          <p className="font-mono text-[11px]">
            Senior CEN Batch 22 · NUTECH Islamabad
          </p>
        </div>
      </div>
    </footer>
  );
}
