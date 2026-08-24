import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Code, Brain, BookOpen, GraduationCap, Users, Heart, Zap, Layers, HardDrive, Server, Microscope, Cpu } from "lucide-react";
import { timeline, timelineCategories } from "../data/portfolio";

const categoryIcons = {
  Engineering: Cpu,
  Projects: Layers,
  Learning: BookOpen,
  University: GraduationCap,
  Leadership: Users,
  Personal: Heart,
};

const categoryColors = {
  Engineering: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  Projects: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Learning: "text-green-400 border-green-400/30 bg-green-400/10",
  University: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  Leadership: "text-red-400 border-red-400/30 bg-red-400/10",
  Personal: "text-pink-400 border-pink-400/30 bg-pink-400/10",
};

export function Timeline() {
  const reducedMotion = useReducedMotion();
  const [timelineRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  // Sort timeline by date (newest first) - placeholder for when real dates exist
  const sortedTimeline = [...timeline].sort((a, b) => {
    if (a.date && b.date) return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <section
      id="timeline"
      ref={timelineRef}
      className="py-20 md:py-28"
      aria-labelledby="timeline-heading"
    >
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="timeline-heading"
            className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Journey
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            Milestones across engineering, projects, learning, university, leadership, and
            personal growth — designed to grow over years.
          </p>
        </header>

        {/* Category filters */}
        <div
          className={`mb-12 flex flex-wrap justify-center gap-2 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: reducedMotion ? "0ms" : "200ms" }}
          role="tablist"
          aria-label="Timeline categories"
        >
          {timelineCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                categoryColors[cat]
              }`}
              role="tab"
              aria-selected={false}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {sortedTimeline.length > 0 ? (
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

            <div className="space-y-10">
              {sortedTimeline.map((entry, index) => {
                const CategoryIcon = categoryIcons[entry.category] || Code;
                const colorClass = categoryColors[entry.category] || categoryColors.Engineering;

                return (
                  <article
                    key={entry.id || index}
                    className={`relative pl-14 md:pl-16 ${
                      isVisible ? "animate-reveal-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: reducedMotion ? "0ms" : `${index * 150}ms` }}
                  >
                    <div className="absolute left-5 md:left-6 top-1 w-3 h-3 rounded-full border-4 border-bg z-10" style={{ borderColor: colorClass.split(" ")[1].replace("border-", "") }} aria-hidden="true" />
                    <div className="absolute left-5 md:left-6 top-1 w-3 h-3 rounded-full animate-pulse-slow" style={{ backgroundColor: colorClass.split(" ")[0].replace("text-", "").replace("-400", "") }} aria-hidden="true" />

                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                        <CategoryIcon size={20} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-sm font-medium ${colorClass.split(" ")[0]}`}>{entry.category}</span>
                          {entry.date && (
                            <time className="text-xs text-text-subtle">{entry.date}</time>
                          )}
                        </div>
                        <h3 className="text-lg font-medium text-text">{entry.title}</h3>
                      </div>
                    </div>

                    <p className="text-text-muted leading-relaxed pl-1 md:pl-0">{entry.description}</p>

                    {entry.story && (
                      <details className="mt-3 pl-1 md:pl-0 group">
                        <summary className="text-sm text-accent hover:underline cursor-pointer flex items-center gap-1">
                          Read more
                          <Zap size={12} className="group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="mt-2 text-text/80 leading-relaxed border-l-2 border-accent/30 pl-4">
                          {entry.story}
                        </div>
                      </details>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        ) : (
          // Empty state with category preview
          <div
            className={`max-w-2xl mx-auto ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <div className="p-12 rounded-2xl border border-border bg-bg-elevated/30 text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-bg border border-accent-border flex items-center justify-center">
                <Layers size={32} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-text mb-3">The timeline is still being written.</h3>
              <p className="text-text-muted leading-relaxed mb-6">
                Milestones will appear here as they happen — first engineering steps, project
                completions, learning breakthroughs, university moments, leadership roles, and
                personal growth.
              </p>
            </div>

            {/* Preview of category structure */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {timelineCategories.map((cat) => {
                const CategoryIcon = categoryIcons[cat];
                const colorClass = categoryColors[cat];
                return (
                  <div
                    key={cat}
                    className="p-5 rounded-xl border border-border bg-bg-elevated/50 text-center group hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 mx-auto mb-3 rounded-xl border-2 flex items-center justify-center ${colorClass}`}>
                      <CategoryIcon size={24} aria-hidden="true" />
                    </div>
                    <h4 className="font-medium text-text mb-1">{cat}</h4>
                    <p className="text-sm text-text-muted">Future milestones</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Note about the timeline philosophy */}
        <div
          className={`mt-16 p-6 rounded-xl border border-border bg-bg-elevated/30 text-center ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: reducedMotion ? "0ms" : "600ms" }}
        >
          <p className="text-text-muted mb-3">
            Not every date matters. This timeline captures the moments that shaped how I think,
            build, and grow — the first time code compiled on hardware, the project that didn't
            work but taught me everything, the event that brought people together.
          </p>
          <p className="text-sm text-text-subtle">
            Add entries in portfolio.js → timeline array. Categories: Engineering, Projects,
            Learning, University, Leadership, Personal.
          </p>
        </div>
      </div>
    </section>
  );
}