import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
            Writing &amp; Insights
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Documented engineering heuristics, failure mode diagnostics, and macroeconomic observations written after live verification.
          </p>
        </header>

        {/* Published Manuscripts */}
        <section className="space-y-14 md:space-y-16">
          {publishedNotes.map((note) => (
            <article
              key={note.slug}
              className="flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span>{note.category}</span>
                <span>·</span>
                <time>{note.date}</time>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
                <Link href={`/notes/${note.slug}`} className="hover:text-blue-600 transition-colors">
                  {note.title}
                </Link>
              </h2>

              {note.excerpt && (
                <p className="text-base text-gray-600 leading-relaxed mb-4 max-w-2xl">
                  {note.excerpt}
                </p>
              )}

              <div className="flex items-center gap-5 text-sm font-medium pt-1">
                <Link
                  href={`/notes/${note.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  Read essay →
                </Link>
                {note.link && (
                  <a
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    IEEE Manuscript (PDF)
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
