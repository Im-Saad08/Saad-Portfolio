import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { BookOpen, Eye, Wrench, Database, PenLine, Users, Calendar } from "lucide-react";
import { nowContent } from "../data/portfolio";

const iconMap = {
  "book-open": BookOpen,
  eye: Eye,
  wrench: Wrench,
  database: Database,
  "pen-line": PenLine,
  users: Users,
};

export function Now() {
  const reducedMotion = useReducedMotion();
  const [nowRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section
      id="now"
      ref={nowRef}
      className="py-20 md:py-28"
      aria-labelledby="now-heading"
    >
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="now-heading"
            className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Now
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            A snapshot of what I'm focused on right now — inspired by <a href="https://nownownow.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">nownownow.com</a>
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="mb-12 flex items-center gap-2 text-sm text-text-subtle" aria-live="polite">
            <Calendar size={16} className="text-accent/70" aria-hidden="true" />
            <span>{nowContent.updatedLabel}: {nowContent.lastUpdated}</span>
          </div>

          <div
            className={`space-y-6 entrance-wrapper ${isVisible ? "animate-in" : "opacity-0"}`}
            style={{ animationDelay: reducedMotion ? "0ms" : "200ms" }}
          >
            {nowContent.focus.map((item, index) => {
              const Icon = iconMap[item.icon] || BookOpen;
              return (
                <article
                  key={item.title}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300"
                  role="listitem"
                  style={{ animationDelay: reducedMotion ? "0ms" : `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-accent/20 transition-all duration-300">
                    <Icon size={22} className="text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-text mb-1">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className={`mt-12 p-6 rounded-xl border border-border bg-bg-elevated/30 text-center ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "600ms" }}
          >
            <PenLine size={32} className="mx-auto mb-3 text-text-subtle" aria-hidden="true" />
            <p className="text-text-muted mb-3">
              This page changes as my focus shifts. Check back later — or browse the{" "}
              <a href="#notes" className="text-accent hover:underline">Notes</a>{" "}
              section for more detailed writing.
            </p>
            <p className="text-sm text-text-subtle">
              Last updated: {nowContent.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}