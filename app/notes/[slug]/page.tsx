import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Download } from "lucide-react";
import { getAllNotes, getNoteBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes
    .filter((n) => n.published)
    .map((n) => ({
      slug: n.slug,
    }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note || !note.published) {
    return constructMetadata({
      title: "Note Not Found",
    });
  }

  return constructMetadata({
    title: `${note.title} — Technical Note`,
    description: note.excerpt || note.title,
    canonicalUrl: `https://mohtarmsaad.com/notes/${note.slug}`,
    type: "article",
  });
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note || !note.published) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-3xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b95a8] hover:text-[#00d4aa] transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Notes & Writing</span>
          </Link>
        </div>

        {/* Note Article Header */}
        <header className="mb-10 pb-8 border-b border-[#1a2438]">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/30 uppercase tracking-wider">
              <Tag size={12} />
              {note.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#8b95a8] font-mono">
              <Clock size={12} className="text-[#00d4aa]/80" />
              <time>{note.date}</time>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-6 leading-tight">
            {note.title}
          </h1>

          {note.excerpt && (
            <p className="text-lg text-[#8b95a8] leading-relaxed italic border-l-2 border-[#00d4aa]/40 pl-4 py-1">
              {note.excerpt}
            </p>
          )}

          {note.link && (
            <div className="mt-6 pt-4">
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00d4aa] text-[#0a0f1d] font-semibold text-sm rounded-lg hover:bg-[#00b894] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
              >
                <Download size={16} />
                <span>Download Complete 22-Page IEEE Manuscript (PDF)</span>
              </a>
            </div>
          )}
        </header>

        {/* Note Body Content */}
        <article className="prose prose-invert max-w-none text-[#e8eaf0]/90 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-6">
          {note.content || note.excerpt}
        </article>

        {/* Footer Meta */}
        <footer className="mt-16 pt-8 border-t border-[#1a2438] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/notes"
            className="text-sm font-medium text-[#00d4aa] hover:underline"
          >
            ← Return to Notes Archive
          </Link>
          <div className="text-xs text-[#5a6578] font-mono text-center sm:text-right">
            Author: Muhammad Saad • CEN Batch 22, NUTECH
          </div>
        </footer>
      </div>
    </div>
  );
}
