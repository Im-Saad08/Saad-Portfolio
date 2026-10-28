import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";
import { ArrowRight, BookOpen } from "lucide-react";

export function FeaturedWriting() {
  const published = getPublishedNotes();
  const featured = published.slice(0, 2);

  return (
    <section className="py-20 md:py-24 border-t border-[#e5e2d9] bg-[#faf9f5]" aria-labelledby="writing-heading">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-3 pb-4 border-b border-[#e5e2d9]">
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-1">
              Manuscripts &amp; Heuristics
            </p>
            <h2 id="writing-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#11161b]">
              Selected Writing
              <span className="text-[#185a37]">.</span>
            </h2>
          </div>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#11161b] hover:text-[#185a37] transition-colors"
          >
            <span>View all writing archive →</span>
          </Link>
        </div>

        {/* Writing Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((note) => (
            <article
              key={note.slug}
              className="p-6 sm:p-7 rounded-xl bg-[#ffffff] border border-[#e5e2d9] hover:border-[#cfccc2] transition-all shadow-[0_1px_3px_rgba(17,22,27,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#6e7787] mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#f2f0e8] text-[#11161b] font-medium">
                    {note.category}
                  </span>
                  <span>·</span>
                  <time>{note.date}</time>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#11161b] mb-3 leading-snug hover:text-[#185a37] transition-colors">
                  <Link href={`/notes/${note.slug}`}>
                    {note.title}
                  </Link>
                </h3>

                {note.excerpt && (
                  <p className="text-sm sm:text-base text-[#4c5562] leading-relaxed mb-6">
                    {note.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#efece5] flex items-center justify-between text-xs">
                <Link
                  href={`/notes/${note.slug}`}
                  className="font-semibold text-[#11161b] hover:text-[#185a37] inline-flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen size={13} className="text-[#185a37]" />
                  <span>Read essay</span>
                  <ArrowRight size={13} />
                </Link>

                <span className="font-mono text-[#6e7787]">
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
