import Link from "next/link";
import { personalInfo, navItems } from "@/lib/content";
import { Mail, GitBranch, FileText, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[#e6e4dc] bg-[#fbfbf9] pt-16 pb-14 text-sm" role="contentinfo">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#f0eee7]">
          {/* Identity & Premise Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded border border-[#151927]/20 bg-[#151927] text-white font-mono text-xs font-semibold">
                S
              </span>
              <span className="font-semibold text-base tracking-tight text-[#151927]">
                Muhammad Saad
              </span>
              <span className="text-[#c94a2f] font-bold">.</span>
            </div>
            <p className="text-xs text-[#535a6c] leading-relaxed max-w-sm">
              Senior Computer Engineering undergraduate at NUTECH Islamabad (CEN Batch 22). Architecting compute-efficient edge computer vision pipelines, bare-metal microcontroller firmware, and low-level systems concurrency.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#767d8f] pt-1 font-mono">
              <MapPin size={13} className="text-[#c94a2f]" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Directory Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-[#151927] uppercase">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2 text-xs" aria-label="Footer directory">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-[#535a6c] hover:text-[#151927] transition-colors inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct Channels Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold tracking-wider text-[#151927] uppercase">
              Verified Channels
            </h4>
            <ul className="space-y-2 text-xs text-[#535a6c]">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#151927] transition-colors"
                >
                  <Mail size={13} className="text-[#767d8f]" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#151927] transition-colors"
                >
                  <GitBranch size={13} className="text-[#767d8f]" />
                  <span>github.com/Im-Saad08</span>
                </a>
              </li>
              <li>
                <a
                  href="/Saad_CV.pdf"
                  download="Muhammad_Saad_CV.pdf"
                  className="inline-flex items-center gap-2 hover:text-[#151927] transition-colors"
                >
                  <FileText size={13} className="text-[#767d8f]" />
                  <span>Curriculum Vitae (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Colophon & Archival Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#767d8f]">
          <p>© {currentYear} Muhammad Saad. All technical milestones and empirical benchmarks verified.</p>
          <p className="font-mono text-[11px]">
            National University of Technology · Islamabad
          </p>
        </div>
      </div>
    </footer>
  );
}
