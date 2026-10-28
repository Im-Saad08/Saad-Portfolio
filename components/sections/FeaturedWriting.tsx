import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";
import { theme } from "@/lib/theme";
import { ArrowRight, BookOpen } from "lucide-react";

export function FeaturedWriting() {
  const published = getPublishedNotes();
  const featured = published.slice(0, 2);

  return (
    <section className="py-20 md:py-24 border-t border-border bg-canvas" aria-labelledby="writing-heading">
      <div className="container">
        {/* Section Header */}
        <div className={theme.styles.sectionHeader}>
          <div>
            <p className={theme.styles.kicker}>
              Manuscripts &amp; Heuristics
            </p>
            <h2 id="writing-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mt-1">
              Selected Writing
              <span className={theme.styles.headingDot}>.</span>
            </h2>
          </div>
          <Link
            href="/notes"
            className={theme.styles.linkMono}
          >
            <span>View all writing archive →</span>
          </Link>
        </div>

        {/* Writing Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((note) => (
            <article
              key={note.slug}
              className={`${theme.styles.card} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle mb-3">
                  <span className="px-2 py-0.5 rounded bg-surface-subtle text-ink font-medium">
                    {note.category}
                  </span>
                  <span>·</span>
                  <time>{note.date}</time>
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

              <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs mt-4">
                <Link
                  href={`/notes/${note.slug}`}
                  className={theme.styles.linkText}
                >
                  <BookOpen size={13} className="text-primary" />
                  <span>Read essay</span>
                  <ArrowRight size={13} />
                </Link>

                <span className="font-mono text-ink-subtle">
                  Operational Heuristic
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
