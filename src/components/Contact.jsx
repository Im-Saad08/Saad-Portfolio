import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Mail, GitBranch, MapPin, Download, Send, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [contactRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Contact
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            Interested in collaborating, have a question, or just want to say hi?
            I'd love to hear from you.
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 entrance-wrapper ${
              isVisible ? "animate-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "250ms" }}
            role="list"
            aria-label="Contact links"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent-bg border border-accent-border text-accent font-medium rounded-lg hover:bg-accent/20 hover:border-accent hover:scale-105 transition-all duration-300 focus-visible"
              aria-label="Send email"
              role="listitem"
            >
              <Mail size={18} className="transition-transform group-hover:translate-x-1" />
              <span>Email</span>
              <Send size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 border border-border text-text font-medium rounded-lg hover:bg-border hover:scale-105 transition-all duration-300 focus-visible"
              aria-label="View GitHub profile"
              role="listitem"
            >
              <GitBranch size={18} />
              <span>GitHub</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Secondary actions */}
          <div
            className={`mt-8 flex flex-wrap justify-center gap-3 entrance-wrapper ${
              isVisible ? "animate-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "400ms" }}
            role="list"
            aria-label="Additional contact actions"
          >
            <a
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-muted bg-bg-elevated/50 border border-border rounded-lg hover:bg-accent-bg hover:border-accent-border hover:text-accent transition-all duration-300 focus-visible"
              aria-label="View location on Google Maps"
              role="listitem"
            >
              <MapPin size={14} />
              <span className="hidden sm:inline">Location</span>
            </a>
            <a
              href="/Saad_CV.pdf"
              download="Saad_CV.pdf"
              className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-muted bg-bg-elevated/50 border border-border rounded-lg hover:bg-accent-bg hover:border-accent-border hover:text-accent transition-all duration-300 focus-visible"
              aria-label="Download CV"
              role="listitem"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download CV</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}