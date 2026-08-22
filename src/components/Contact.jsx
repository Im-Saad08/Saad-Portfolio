import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Mail, GitBranch, MapPin, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [contactRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const contactButtons = [
    {
      label: "Email",
      icon: Mail,
      action: () => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, "_blank", "noopener,noreferrer"),
      ariaLabel: "Send email via Gmail",
    },
    {
      label: "GitHub",
      icon: GitBranch,
      action: () => window.open(personalInfo.github, "_blank", "noopener,noreferrer"),
      ariaLabel: "View GitHub profile",
    },
    {
      label: "Location",
      icon: MapPin,
      action: () => window.open(personalInfo.mapsUrl, "_blank", "noopener,noreferrer"),
      ariaLabel: "View location on Google Maps",
    },
    {
      label: "Download CV",
      icon: Download,
      action: () => {
        const link = document.createElement('a');
        link.href = '/Saad_CV.pdf';
        link.download = 'Saad_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
      ariaLabel: "Download CV",
    },
  ];

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
            Get In Touch
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
            className={`flex flex-wrap justify-center gap-3 entrance-wrapper ${
              isVisible ? "animate-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "250ms" }}
            role="list"
            aria-label="Contact actions"
          >
            {contactButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-accent bg-accent-bg border border-accent-border rounded-lg hover:bg-accent/20 hover:scale-105 transition-all duration-300 focus-visible"
                aria-label={btn.ariaLabel}
                role="listitem"
              >
                <btn.icon size={14} aria-hidden="true" />
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}