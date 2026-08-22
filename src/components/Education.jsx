import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { GraduationCap, BookOpen, Target, Award, Users } from "lucide-react";
import { education, leadership } from "../data/portfolio";

export function Education() {
  const reducedMotion = useReducedMotion();
  const [eduRef, isVisible] = useIntersectionObserver({ triggerOnce: true });
  const [leadershipRef, leadershipVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <>
      <section
        id="education"
        ref={eduRef}
        className="py-20 md:py-28"
        aria-labelledby="education-heading"
      >
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="education-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
                isVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Education & Learning
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                isVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              Formal education combined with self-directed project-based learning
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <article
              className={`p-6 md:p-8 rounded-2xl border border-border bg-bg-elevated/50 ${
                isVisible ? "animate-reveal-scale" : "opacity-0"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                  <GraduationCap size={28} className="text-accent" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-text mb-1">{education.degree}</h3>
                  <p className="text-lg text-accent font-medium mb-1">{education.university}</p>
                  <p className="text-text-muted">{education.location}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-lg font-medium text-text mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-accent" aria-hidden="true" />
                  Focus Areas & Coursework
                </h4>
                <div className={`flex flex-wrap gap-2 entrance-wrapper ${isVisible ? "animate-in" : ""}`} role="list" aria-label="Focus areas">
                  {education.focusAreas.map((area, index) => (
                    <span
                      key={area}
                      className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-300 hover:scale-105 hover:border-accent ${
                        index % 3 === 0
                          ? "bg-accent-bg border-accent-border text-accent"
                          : index % 3 === 1
                          ? "bg-bg border-border text-text"
                          : "bg-bg-elevated border-border text-text-muted"
                      }`}
                      role="listitem"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div
              className={`mt-12 grid md:grid-cols-3 gap-4 entrance-wrapper ${
                isVisible ? "animate-in" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "300ms" }}
            >
              <div className="p-5 rounded-xl border border-border bg-bg-elevated/50 text-center group hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <Target size={24} className="text-accent" aria-hidden="true" />
                </div>
                <h4 className="font-medium text-text mb-1">Engineering Fundamentals</h4>
                <p className="text-sm text-text-muted">Digital systems, signals, networks, probability</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-bg-elevated/50 text-center group hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <BookOpen size={24} className="text-accent" aria-hidden="true" />
                </div>
                <h4 className="font-medium text-text mb-1">Project-Based Learning</h4>
                <p className="text-sm text-text-muted">ALPR, ECG processing, embedded Linux, digital logic</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-bg-elevated/50 text-center group hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <Award size={24} className="text-accent" aria-hidden="true" />
                </div>
                <h4 className="font-medium text-text mb-1">Continuous Growth</h4>
                <p className="text-sm text-text-muted">AI/ML, computer vision, systems engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={leadershipRef}
        className="py-20 md:py-28 border-t border-border"
        aria-labelledby="leadership-heading"
      >
        <div className="container">
          <header className="text-center mb-12">
            <h2
              id="leadership-heading"
              className={`text-2xl md:text-3xl font-semibold tracking-tight text-text mb-4 ${
                leadershipVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Leadership & Activities
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                leadershipVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              Student organization involvement and community initiatives at NUTECH
            </p>
          </header>

          <div className="max-w-2xl mx-auto entrance-wrapper">
            {leadership.map((item, index) => (
              <article
                key={item.role}
                className={`p-6 rounded-2xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300 ${
                  leadershipVisible ? "animate-card-entrance" : "opacity-0"
                }`}
                style={{ animationDelay: reducedMotion ? "0ms" : `${index * 180}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <Users size={24} className="text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-text mb-1">{item.role}</h3>
                    <p className="text-text-muted mb-3">{item.organization}</p>
                    <p className="text-text/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}