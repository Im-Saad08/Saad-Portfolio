import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";

export function FeaturedWriting() {
  const published = getPublishedNotes();
  const featured = published.slice(0, 2);

  return (
    <section className="py-20 md:py-24" aria-labelledby="writing-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-2">
          <div>
            <h2 id="writing-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Selected Writing
            </h2>
            <p className="text-base text-gray-600">
              Essays on operational engineering heuristics, systems failure modes, and capital markets.
            </p>
          </div>
          <Link href="/notes" className="text-sm font-medium text-blue-600 hover:underline">
            View all writing →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-14">
          {featured.map((note) => (
            <article
              key={note.slug}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>{note.category}</span>
                  <span>·</span>
                  <time>{note.date}</time>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  <Link href={`/notes/${note.slug}`} className="hover:text-blue-600 transition-colors">
                    {note.title}
                  </Link>
                </h3>

                {note.excerpt && (
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    {note.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-1">
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
