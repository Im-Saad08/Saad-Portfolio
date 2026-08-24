import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { PenLine, FolderOpen, Clock, Tag, ExternalLink } from "lucide-react";
import { notes } from "../data/portfolio";

export function Notes() {
  const reducedMotion = useReducedMotion();
  const [notesRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const publishedNotes = notes.filter((n) => n.published);
  const upcomingNotes = notes.filter((n) => !n.published);

  return (
    <section
      id="notes"
      ref={notesRef}
      className="py-20 md:py-28"
      aria-labelledby="notes-heading"
    >
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="notes-heading"
            className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Notes
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            A future-ready writing system — things I'm learning, problems I've solved, and
            reflections worth keeping. Published notes appear first; planned topics follow.
          </p>
        </header>

        {/* Published notes */}
        {publishedNotes.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-medium text-text mb-8 flex items-center gap-2">
              <FolderOpen size={22} className="text-accent" aria-hidden="true" />
              Published
            </h3>
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 entrance-wrapper ${
                isVisible ? "animate-in" : "opacity-0"
              }`}
            >
              {publishedNotes.map((note, index) => (
                <article
                  key={note.slug}
                  className="group p-6 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300"
                  style={{ animationDelay: reducedMotion ? "0ms" : `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 text-xs text-text-subtle mb-3">
                    <Tag size={14} className="text-accent/70" aria-hidden="true" />
                    <span>{note.category}</span>
                  </div>
                  <h4 className="text-lg font-medium text-text mb-2 group-hover:text-accent transition-colors">
                    {note.title}
                  </h4>
                  {note.excerpt && (
                    <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                      {note.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-text-subtle">
                    {note.date && (
                      <>
                        <Clock size={14} className="text-accent/70" aria-hidden="true" />
                        <time>{note.date}</time>
                      </>
                    )}
                    <a
                      href={`/notes/${note.slug}`}
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      Read
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming / planned notes */}
        <div>
          <h3 className="text-xl font-medium text-text mb-8 flex items-center gap-2">
            <PenLine size={22} className="text-accent" aria-hidden="true" />
            In the Queue
          </h3>
          <div
            className={`space-y-3 entrance-wrapper ${isVisible ? "animate-in" : "opacity-0"}`}
            style={{ animationDelay: reducedMotion ? "0ms" : "200ms" }}
          >
            {upcomingNotes.map((note, index) => (
              <article
                key={note.slug}
                className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-bg-elevated/30 hover:border-accent-border/50 hover:bg-bg-elevated/50 transition-all duration-300"
                style={{ animationDelay: reducedMotion ? "0ms" : `${index * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent-bg/50 border border-accent-border/50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <PenLine size={18} className="text-accent/70" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-medium text-text group-hover:text-accent transition-colors truncate">
                    {note.title}
                  </h4>
                  <p className="text-xs text-text-subtle flex items-center gap-1">
                    <Tag size={10} className="text-text-subtle" aria-hidden="true" />
                    <span>{note.category}</span>
                  </p>
                </div>
                <span className="text-xs text-text-subtle px-2 py-1 bg-bg border border-border/50 rounded-full flex-shrink-0">
                  Planned
                </span>
              </article>
            ))}
          </div>

          {upcomingNotes.length === 0 && (
            <div
              className={`p-8 rounded-xl border border-border bg-bg-elevated/30 text-center ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "400ms" }}
            >
              <PenLine size={48} className="mx-auto mb-4 text-text-subtle" aria-hidden="true" />
              <p className="text-text-muted">
                No planned notes yet — this space grows as I learn and build.
              </p>
            </div>
          )}
        </div>

        {/* Footer note about the system */}
        <div
          className={`mt-16 p-6 rounded-xl border border-border bg-bg-elevated/30 text-center ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: reducedMotion ? "0ms" : "800ms" }}
        >
          <p className="text-text-muted mb-3">
            Notes are written when something is worth keeping — technical deep-dives, project
            retrospectives, learning reflections, and the occasional personal thought.
          </p>
          <p className="text-sm text-text-subtle">
            Not a blog. No schedule. Just a place for things that stick.
          </p>
        </div>
      </div>
    </section>
  );
}