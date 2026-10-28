import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { theme } from "@/lib/theme";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Writing & Engineering Notes",
  description:
    "A documented technical repository: edge computer vision benchmarks, systems failure modes, pedagogical frameworks, and Pakistani capital market observations.",
  canonicalUrl: "https://mohtarmsaad.com/notes",
});

export default function NotesPage() {
  const publishedNotes = getPublishedNotes();

  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-3xl">
        {/* Header */}
        <header className="mb-14">
          <p className={`${theme.styles.kicker} mb-2`}>
            Technical Archive · Heuristics &amp; Analysis
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-3 leading-tight">
            Writing &amp; Insights
            <span className={theme.styles.headingDot}>.</span>
          </h1>
          <p className={`max-w-2xl ${theme.styles.bodyLg}`}>
            Documented operational engineering heuristics, systems failure mode diagnostics, and macroeconomic observations written after live empirical verification.
          </p>
        </header>

        {/* Published Manuscripts */}
        <section className="space-y-8" aria-label="Published manuscripts and essays">
          {publishedNotes.map((note) => (
            <article
              key={note.slug}
              className={`${theme.styles.cardLg} flex flex-col justify-between`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-subtle mb-3">
                  <span className="px-2 py-0.5 rounded bg-surface-subtle text-ink font-medium">
                    {note.category}
                  </span>
                  <span>·</span>
                  <time>{note.date}</time>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mb-3 leading-snug hover:text-primary transition-colors">
                  <Link href={`/notes/${note.slug}`}>
                    {note.title}
                  </Link>
                </h2>

                {note.excerpt && (
                  <p className={`${theme.styles.body} mb-6`}>
                    {note.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <Link
                  href={`/notes/${note.slug}`}
                  className={theme.styles.linkText}
                >
                  <BookOpen size={13} className="text-primary" />
                  <span>Read full essay</span>
                  <ArrowRight size={13} />
                </Link>

                {note.link && (
                  <a
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-ink-subtle hover:text-ink transition-colors"
                  >
                    <FileText size={13} />
                    <span>IEEE Manuscript (PDF)</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
