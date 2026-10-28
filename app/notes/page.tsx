import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedNotes } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
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
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-2">
            Technical Archive · Heuristics &amp; Analysis
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151927] mb-3 leading-tight">
            Writing &amp; Insights
            <span className="text-[#c94a2f]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#535a6c] leading-relaxed max-w-2xl">
            Documented operational engineering heuristics, systems failure mode diagnostics, and macroeconomic observations written after live empirical verification.
          </p>
        </header>

        {/* Published Manuscripts */}
        <section className="space-y-8" aria-label="Published manuscripts and essays">
          {publishedNotes.map((note) => (
            <article
              key={note.slug}
              className="p-7 sm:p-8 rounded-2xl bg-[#ffffff] border border-[#e6e4dc] hover:border-[#d2cfbe] transition-all shadow-[0_1px_3px_rgba(21,25,39,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#767d8f] mb-3">
                  <span className="px-2 py-0.5 rounded bg-[#f4f3ef] text-[#151927] font-medium">
                    {note.category}
                  </span>
                  <span>·</span>
                  <time>{note.date}</time>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#151927] mb-3 leading-snug hover:text-[#c94a2f] transition-colors">
                  <Link href={`/notes/${note.slug}`}>
                    {note.title}
                  </Link>
                </h2>

                {note.excerpt && (
                  <p className="text-sm sm:text-base text-[#535a6c] leading-relaxed mb-6">
                    {note.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#f0eee7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <Link
                  href={`/notes/${note.slug}`}
                  className="font-semibold text-[#151927] hover:text-[#c94a2f] inline-flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen size={13} className="text-[#c94a2f]" />
                  <span>Read full essay</span>
                  <ArrowRight size={13} />
                </Link>

                {note.link && (
                  <a
                    href={note.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#767d8f] hover:text-[#151927] transition-colors"
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
