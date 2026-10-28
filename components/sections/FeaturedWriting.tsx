import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";
import { theme } from "@/lib/theme";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export function FeaturedWriting() {
  const published = getPublishedNotes();
  const featured = published.slice(0, 2);

  return (
    <section className="py-20 md:py-24 border-t border-border bg-canvas" aria-labelledby="writing-heading">
      <div className="container">
        {/* Section Header */}
        <div className={theme.styles.sectionHeader}>
          <div>
            <div className="text-xs font-mono font-medium text-ink-subtle uppercase tracking-wider mb-1">
              Field Notes &amp; Heuristics
            </div>
            <h2 id="writing-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mt-1">
              Selected Writing
              <span className={theme.styles.headingDot}>.</span>
            </h2>
            <p className="text-sm text-ink-muted mt-1 max-w-xl">
              Real engineering post-mortems, edge vision diagnostics, and systems observations written after live verification.
            </p>
          </div>
          <Link
            href="/notes"
            className={theme.styles.linkMono}
          >
            <span>View all writing archive →</span>
          </Link>
        </div>

        {/* Writing Articles Grid */}
        <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
          {featured.map((note) => (
            <article
              key={note.slug}
              className={`${theme.styles.cardCozy} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-subtle text-ink font-medium border border-border/60">
                    {note.category}
                  </span>
                  <span>·</span>
                  <time>{note.date}</time>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1 text-ink-subtle">
                    <Clock size={11} />
                    <span>4 min read</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-ink mb-3 leading-snug hover:text-primary transition-colors">
                  <Link href={`/notes/${note.slug}`}>
                    {note.title}
                  </Link>
                </h3>

                {note.excerpt && (
                  <p className={theme.styles.body}>
                    {note.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs mt-5">
                <Link
                  href={`/notes/${note.slug}`}
                  className={theme.styles.linkText}
                >
                  <BookOpen size={13} className="text-primary" />
                  <span>Read full essay</span>
                  <ArrowRight size={13} />
                </Link>

                <span className="font-mono text-ink-subtle text-[11px]">
                  Verified Heuristic
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
