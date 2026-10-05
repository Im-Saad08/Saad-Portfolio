import { Mail, GitBranch, MapPin, Download } from "lucide-react";
import { personalInfo } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-gray-200" aria-labelledby="contact-heading">
      <div className="container max-w-3xl">
        <h2 id="contact-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
          Get in Touch
        </h2>
        <p className="text-base text-gray-600 mb-8">
          Interested in technical discussions regarding edge computer vision, embedded systems, or collaborative engineering? Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
          >
            <Mail size={16} />
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
          >
            <GitBranch size={16} />
            <span>GitHub Profile</span>
          </a>

          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
          >
            <Download size={16} />
            <span>CV (PDF)</span>
          </a>

          <a
            href={personalInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors ml-auto"
          >
            <MapPin size={14} />
            <span>{personalInfo.location}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
