import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { GitBranch, User, Mail, Heart, Code2 } from "lucide-react";
import { personalInfo, navItems } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [footerRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <footer
      ref={footerRef}
      className={`border-t border-border py-12 ${
        isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      role="contentinfo"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <Code2 size={16} className="text-accent" aria-hidden="true" />
            <span className="font-medium text-text">Saad</span>
            <span className="hidden sm:inline">— Computer Engineering Student</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {navItems.slice(1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-text-muted hover:text-text transition-colors focus-visible"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-border transition-colors focus-visible"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-border transition-colors focus-visible"
              aria-label="GitHub"
            >
              <GitBranch size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-border transition-colors focus-visible"
              aria-label="LinkedIn"
            >
              <User size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-subtle text-center md:text-left">
            © {currentYear} Saad. Built with React, Vite & Tailwind CSS.
          </p>
          <p className="text-sm text-text-subtle text-center md:text-right flex items-center justify-center md:justify-end gap-1.5">
            Crafted with
            <Heart size={14} className="text-red-500" aria-hidden="true" />
            &nbsp;for engineering
          </p>
        </div>
      </div>
    </footer>
  );
}