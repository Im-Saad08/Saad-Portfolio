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
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            Writing & Notes
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Technical manuscripts, operational heuristics, and empirical observations written after verification on real systems.
          </p>
        </header>

        {/* Published Manuscripts */}
        <section className="space-y-6">
          {publishedNotes.map((note) => (
            <article
              key={note.slug}
              className="p-6 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors"
            >
              <div className="flex items-baseline justify-between text-xs text-gray-500 mb-2 font-medium">
                <span>{note.category}</span>
                <time>{note.date}</time>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link href={`/notes/${note.slug}`} className="hover:text-blue-600 transition-colors">
                  {note.title}
                </Link>
              </h2>

              {note.excerpt && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {note.excerpt}
                </p>
              )}

              <div className="flex items-center gap-4 text-xs font-medium">
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
