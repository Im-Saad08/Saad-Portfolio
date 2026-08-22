import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Mail, GitBranch, User, MapPin, Send, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export function Contact() {
  const reducedMotion = useReducedMotion();
  const [contactRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const contactMethods = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      description: "Best way to reach me",
    },
    {
      label: "GitHub",
      value: personalInfo.github,
      href: personalInfo.github,
      icon: GitBranch,
      description: "Projects & code",
      external: true,
    },
    {
      label: "LinkedIn",
      value: personalInfo.linkedin,
      href: personalInfo.linkedin,
      icon: User,
      description: "Professional network",
      external: true,
    },
    {
      label: "Location",
      value: personalInfo.location,
      href: null,
      icon: MapPin,
      description: "Based in Islamabad",
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
            className={`grid gap-4 md:grid-cols-2 entrance-wrapper ${
              isVisible ? "animate-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "250ms" }}
            role="list"
            aria-label="Contact methods"
          >
            {contactMethods.map((method, index) => (
              <article
                key={method.label}
                className="group p-6 rounded-2xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                role="listitem"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                    <method.icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-text mb-1">{method.label}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 text-text/80 hover:text-accent transition-colors focus-visible break-all"
                      >
                        <span className="font-mono text-sm">{method.value}</span>
                        {method.external && <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-text/80">{method.value}</span>
                    )}
                    <p className="text-sm text-text-muted mt-1">{method.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className={`mt-12 p-6 rounded-2xl border border-border bg-bg-elevated/50 text-center ${
              isVisible ? "animate-reveal-scale" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "500ms" }}
          >
            <p className="text-text-muted mb-4">
              Prefer a direct message? Feel free to email me.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium rounded-lg hover:bg-accent-dim hover:scale-105 transition-all duration-300 focus-visible"
            >
              <Send size={18} aria-hidden="true" />
              Send Email
            </a>
          </div>

          <p
            className={`mt-10 text-center text-sm text-text-subtle ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "600ms" }}
          >
            Placeholder links — replace with your actual contact information
          </p>
        </div>
      </div>
    </section>
  );
}