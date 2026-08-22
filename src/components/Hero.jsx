import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { ArrowRight, GitBranch, Mail, User, Download } from "lucide-react";
import { HeroBackground } from "./BackgroundEffects";
import { personalInfo } from "../data/portfolio";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [heroRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Profile Picture */}
          <div
            className={`mb-8 ${
              isVisible ? "animate-image-zoom-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "100ms" }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden border-4 border-accent/30 bg-gradient-to-br from-accent/20 to-accent/5 shadow-2xl group">
              <img
                src="/profile.jpg"
                alt="Saad - Computer Engineering Student"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              <div className="absolute inset-0 border-2 border-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" aria-hidden="true" />
            </div>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-8 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "250ms" }}
          >
            <span className="text-xs font-medium text-accent uppercase tracking-wider">
              Computer Engineering Student
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/50" />
            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
              NUTECH, Islamabad
            </span>
          </div>

          <h1
            id="hero-heading"
            className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-text mb-6 leading-tight ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "350ms" }}
          >
            Hi, I'm <span className="font-semibold text-accent">Saad</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-text-muted font-light mb-10 max-w-3xl mx-auto leading-relaxed ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "450ms" }}
          >
            Computer Engineering Student | AI & Computer Vision Enthusiast
          </p>

          <p
            className={`text-lg md:text-xl text-text/70 mb-12 max-w-2xl mx-auto leading-relaxed ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "550ms" }}
          >
            I build practical software and engineering systems at the intersection of
            programming, artificial intelligence, computer vision, data, and embedded
            technology.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
              isVisible ? "animate-stagger-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "650ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-bg font-medium rounded-lg hover:bg-accent-dim transition-colors focus-visible"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-text font-medium rounded-lg hover:bg-border transition-colors focus-visible"
            >
              About Me
            </a>
            <a
              href="/Saad_CV.pdf"
              download="Saad_CV.pdf"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent-bg border border-accent-border text-accent font-medium rounded-lg hover:bg-accent/20 hover:border-accent transition-colors focus-visible"
            >
              <Download size={18} className="transition-transform group-hover:translate-x-1" />
              Download CV
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 border border-border text-text-muted font-medium rounded-lg hover:text-text hover:border-border-hover transition-colors focus-visible"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
          </div>

          <div
            className={`mt-16 flex items-center justify-center gap-8 text-text-muted ${
              isVisible ? "animate-stagger-in" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "800ms" }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm hover:text-text transition-colors focus-visible"
              aria-label="Email"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-text transition-colors focus-visible"
              aria-label="GitHub"
            >
              <GitBranch size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-text transition-colors focus-visible"
              aria-label="LinkedIn"
            >
              <User size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{
          animation: reducedMotion ? "none" : "bounce 2s infinite",
        }}
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-text-muted/50"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}