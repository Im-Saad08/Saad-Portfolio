import { Mail, GitBranch, MapPin, FileText, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 border-t border-[#e5e2d9]" aria-labelledby="contact-heading">
      <div className="container max-w-3xl">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.02)]">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-2">
            Direct Communication &amp; Inquiries
          </p>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#11161b] mb-3">
            Get in Touch
            <span className="text-[#185a37]">.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4c5562] leading-relaxed mb-8 max-w-xl">
            Interested in technical discussions regarding edge computer vision pipelines, embedded hardware interfacing, or engineering roles? Let&apos;s connect directly.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#185a37] text-white text-sm font-medium rounded hover:bg-[#103f27] transition-colors shadow-sm"
            >
              <Mail size={15} />
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] text-sm font-medium rounded hover:bg-[#f2f0e8] hover:border-[#cfccc2] transition-colors"
            >
              <GitBranch size={15} className="text-[#6e7787]" />
              <span>GitHub</span>
              <ArrowUpRight size={13} className="text-[#6e7787]" />
            </a>

            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] text-sm font-medium rounded hover:bg-[#f2f0e8] hover:border-[#cfccc2] transition-colors"
            >
              <FileText size={15} className="text-[#6e7787]" />
              <span>CV (PDF)</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#6e7787] pt-4 border-t border-[#efece5]">
            <MapPin size={13} className="text-[#185a37]" />
            <span>{personalInfo.location} · Available for engineering collaborations &amp; research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
