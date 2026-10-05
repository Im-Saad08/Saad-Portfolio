import { Mail, GitBranch, MapPin, Download, Send, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4"
          >
            Direct Contact & Collaboration
          </h2>
          <p className="text-base sm:text-lg text-[#8b95a8] max-w-2xl mx-auto">
            Interested in technical discussions regarding edge computer vision, embedded systems, or collaborative engineering? Feel free to reach out.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] font-medium rounded-lg hover:bg-[#00d4aa]/20 hover:border-[#00d4aa] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
              aria-label="Send email to Muhammad Saad"
            >
              <Mail size={18} className="transition-transform group-hover:translate-x-0.5" />
              <span>{personalInfo.email}</span>
              <Send size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[#1a2438] text-[#e8eaf0] font-medium rounded-lg hover:bg-[#1a2438] hover:border-[#23314a] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
              aria-label="GitHub Profile"
            >
              <GitBranch size={18} />
              <span>GitHub</span>
              <ExternalLink size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Secondary Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#8b95a8] bg-[#0e162a]/60 border border-[#1a2438] rounded-lg hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/30 hover:text-[#00d4aa] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </a>

            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#8b95a8] bg-[#0e162a]/60 border border-[#1a2438] rounded-lg hover:bg-[#00d4aa]/10 hover:border-[#00d4aa]/30 hover:text-[#00d4aa] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              <Download size={14} />
              <span>Download Official CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
