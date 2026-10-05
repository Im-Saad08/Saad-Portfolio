import { useState, useEffect } from "react";
import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { PenLine, FolderOpen, Clock, Tag, ExternalLink, X, BookOpen } from "lucide-react";
import { notes } from "../data/portfolio";

export function Notes() {
  const reducedMotion = useReducedMotion();
  const [notesRef, isVisible] = useIntersectionObserver({ triggerOnce: true });
  const [selectedNote, setSelectedNote] = useState(null);

  const publishedNotes = notes.filter((n) => n.published);
  const upcomingNotes = notes.filter((n) => !n.published);

  useEffect(() => {
    if (selectedNote) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedNote]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedNote(null);
    };
    if (selectedNote) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNote]);

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
            Notes & Writing
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            A documented knowledge repository — engineering mental models, defense research,
            systems diagnostics, and market observations.
          </p>
        </header>

        {/* Published notes */}
        {publishedNotes.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl font-medium text-text mb-8 flex items-center gap-2">
              <FolderOpen size={22} className="text-accent" aria-hidden="true" />
              Published Technical Writings
            </h3>
            <div
              className={`grid md:grid-cols-2 lg:grid-cols-2 gap-6 entrance-wrapper ${
                isVisible ? "animate-in" : "opacity-0"
              }`}
            >
              {publishedNotes.map((note, index) => (
                <article
                  key={note.slug}
                  className="group p-6 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300 flex flex-col justify-between"
                  style={{ animationDelay: reducedMotion ? "0ms" : `${index * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-text-subtle mb-3">
                      <Tag size={14} className="text-accent/70" aria-hidden="true" />
                      <span>{note.category}</span>
                    </div>
                    <h4 className="text-xl font-medium text-text mb-3 group-hover:text-accent transition-colors">
                      {note.title}
                    </h4>
                    {note.excerpt && (
                      <p className="text-sm text-text-muted leading-relaxed mb-6">
                        {note.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm text-text-subtle">
                    <div className="flex items-center gap-2">
                      {note.date && (
                        <>
                          <Clock size={14} className="text-accent/70" aria-hidden="true" />
                          <time>{note.date}</time>
                        </>
                      )}
                    </div>
                    {note.link ? (
                      <a
                        href={note.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-bg border border-accent-border text-accent font-medium hover:bg-accent/20 transition-colors"
                      >
                        Read Paper
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedNote(note)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-bg border border-accent-border text-accent font-medium hover:bg-accent/20 transition-colors cursor-pointer"
                      >
                        Read Note
                        <BookOpen size={13} />
                      </button>
                    )}
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
            Notes are published when principles are verified — technical deep-dives, systems heuristics,
            and research observations.
          </p>
          <p className="text-sm text-text-subtle">
            Not a blog. Grounded engineering notes from live runtime experience.
          </p>
        </div>
      </div>

      {/* Note Reader Modal */}
      {selectedNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/90 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setSelectedNote(null)}
        >
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl border border-border bg-bg-elevated animate-card-entrance flex flex-col shadow-2xl">
            {/* Modal Header */}
            <header className="flex items-start justify-between gap-4 p-6 border-b border-border">
              <div>
                <div className="flex items-center gap-2 text-xs text-accent uppercase tracking-wider mb-1">
                  <Tag size={12} />
                  <span>{selectedNote.category}</span>
                  {selectedNote.date && (
                    <>
                      <span className="text-border">•</span>
                      <span className="text-text-subtle normal-case">{selectedNote.date}</span>
                    </>
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-text">{selectedNote.title}</h3>
              </div>
              <button
                onClick={() => setSelectedNote(null)}
                className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-border transition-colors flex-shrink-0"
                aria-label="Close note"
              >
                <X size={20} />
              </button>
            </header>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-4">
              <div className="prose prose-invert max-w-none text-text-muted text-base leading-relaxed whitespace-pre-line">
                {selectedNote.content || selectedNote.excerpt}
              </div>
            </div>

            {/* Modal Footer */}
            <footer className="p-4 px-6 border-t border-border flex justify-end">
              <button
                onClick={() => setSelectedNote(null)}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-bg border border-border text-text hover:bg-border transition-colors"
              >
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}