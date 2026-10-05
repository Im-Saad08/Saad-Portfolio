import type { Metadata } from "next";
import Link from "next/link";
import { FolderOpen, PenLine, Clock, Tag, ExternalLink, ArrowRight, BookOpen } from "lucide-react";
import { getAllNotes, getPublishedNotes } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Notes & Engineering Heuristics",
  description:
    "A documented technical knowledge repository: edge computer vision benchmarks, systems failure modes, pedagogical frameworks, and Pakistani capital market observations.",
  canonicalUrl: "https://mohtarmsaad.com/notes",
});

export default function NotesPage() {
  const publishedNotes = getPublishedNotes();
  const allNotes = getAllNotes();
  const plannedNotes = allNotes.filter((n) => !n.published);

  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-5xl">
        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-xs font-mono mb-4">
            <BookOpen size={13} />
            <span>KNOWLEDGE_BASE // NOTES & MANUSCRIPTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-4">
            Notes & Writing
          </h1>
          <p className="text-lg text-[#8b95a8] max-w-3xl leading-relaxed">
            A documented technical archive — engineering heuristics, defense research papers, systems diagnostics, and macroeconomic observations. Published when principles are tested and verified.
          </p>
        </header>

        {/* Published Manuscripts */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold text-[#e8eaf0] mb-8 flex items-center gap-2.5">
            <FolderOpen size={20} className="text-[#00d4aa]" aria-hidden="true" />
            <span>Published Technical Manuscripts & Essays</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {publishedNotes.map((note) => (
              <article
                key={note.slug}
                className="group p-6 md:p-8 rounded-2xl border border-[#1a2438] bg-[#0e162a]/60 hover:border-[#00d4aa]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00d4aa] mb-3">
                    <Tag size={13} />
                    <span>{note.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#e8eaf0] mb-3 group-hover:text-[#00d4aa] transition-colors leading-snug">
                    <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                  </h3>

                  {note.excerpt && (
                    <p className="text-sm text-[#8b95a8] leading-relaxed mb-6">
                      {note.excerpt}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-[#1a2438] flex items-center justify-between text-xs text-[#8b95a8]">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Clock size={13} className="text-[#00d4aa]/70" />
                    <time>{note.date}</time>
                  </div>

                  <div className="flex items-center gap-3">
                    {note.link && (
                      <a
                        href={note.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#8b95a8] hover:text-[#00d4aa] transition-colors"
                      >
                        <span>PDF</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <Link
                      href={`/notes/${note.slug}`}
                      className="inline-flex items-center gap-1.5 font-medium text-[#00d4aa] hover:underline"
                    >
                      <span>Read Essay</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* In the Queue / Planned */}
        <section className="pt-12 border-t border-[#1a2438]">
          <h2 className="text-lg font-semibold text-[#e8eaf0] mb-6 flex items-center gap-2.5">
            <PenLine size={18} className="text-[#00d4aa]" aria-hidden="true" />
            <span>In the Queue & Forthcoming Observations</span>
          </h2>

          <div className="space-y-3">
            {plannedNotes.map((note) => (
              <div
                key={note.slug}
                className="flex items-center justify-between p-4 rounded-xl border border-[#1a2438]/60 bg-[#0e162a]/30"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 border border-[#00d4aa]/20 flex items-center justify-center flex-shrink-0">
                    <PenLine size={15} className="text-[#00d4aa]" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[#e8eaf0]">{note.title}</h3>
                    <p className="text-xs text-[#8b95a8] mt-0.5">{note.category}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#5a6578] px-2.5 py-1 bg-[#0a0f1d] border border-[#1a2438] rounded-full">
                  Planned
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
