import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";

export function FeaturedWriting() {
  const published = getPublishedNotes();
  const featured = published.slice(0, 2);

  return (
    <section className="py-16 border-t border-gray-200" aria-labelledby="writing-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-2">
          <div>
            <h2 id="writing-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-1">
              Writing & Notes
            </h2>
            <p className="text-sm text-gray-600">
              Essays on systems heuristics, defense capstone benchmarks, and capital markets.
            </p>
          </div>
          <Link href="/notes" className="text-sm font-medium text-blue-600 hover:underline">
            View all writing →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((note) => (
            <article
              key={note.slug}
              className="p-6 rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2 font-medium">
                  <span>{note.category}</span>
                  <time>{note.date}</time>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <Link href={`/notes/${note.slug}`} className="hover:text-blue-600 transition-colors">
                    {note.title}
                  </Link>
                </h3>

                {note.excerpt && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {note.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href={`/notes/${note.slug}`}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Read essay →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
