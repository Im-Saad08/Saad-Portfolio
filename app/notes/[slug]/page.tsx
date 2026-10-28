import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllNotes, getNoteBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { ArrowLeft, FileText } from "lucide-react";

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

function renderNoteContent(content: string) {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    const headingMatch = trimmed.match(/^(\d+\.\s+[^:\n]+):([\s\S]*)$/);
    if (headingMatch) {
      const title = headingMatch[1];
      const rest = headingMatch[2].trim();
      return (
        <section key={i} className="mt-10 mb-6 pt-6 border-t border-[#f0eee7]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#151927] mb-4 tracking-tight">
            {title}
          </h2>
          <div className="space-y-4 text-[#535a6c] leading-relaxed text-base sm:text-lg">
            {rest.split("\n").map((line, li) => {
              const lTrim = line.trim();
              if (lTrim.startsWith("•")) {
                return (
                  <div key={li} className="flex items-start gap-3 pl-2 text-sm sm:text-base text-[#535a6c]">
                    <span className="text-[#c94a2f] font-bold mt-1.5 flex-shrink-0 text-xs">■</span>
                    <span>{lTrim.slice(1).trim()}</span>
                  </div>
                );
              }
              return lTrim ? <p key={li}>{lTrim}</p> : null;
            })}
          </div>
        </section>
      );
    }
    return (
      <p key={i} className="text-[#535a6c] leading-relaxed text-base sm:text-lg">
        {trimmed}
      </p>
    );
  });
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note || !note.published) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-2xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#767d8f] hover:text-[#151927] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Back to all writing</span>
          </Link>
        </div>

        {/* Note Article Header */}
        <header className="mb-12 pb-8 border-b border-[#e6e4dc]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#767d8f] mb-3">
            <span className="px-2 py-0.5 rounded bg-[#f4f3ef] text-[#151927] font-medium">
              {note.category}
            </span>
            <span>·</span>
            <time>{note.date}</time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#151927] mb-6 leading-tight">
            {note.title}
            <span className="text-[#c94a2f]">.</span>
          </h1>

          {note.excerpt && (
            <div className="p-4 rounded-xl bg-[#ffffff] border-l-2 border-[#c94a2f] border-t border-r border-b border-[#e6e4dc] mb-6">
              <p className="text-base text-[#535a6c] leading-relaxed italic">
                {note.excerpt}
              </p>
            </div>
          )}

          {note.link && (
            <div className="mt-4">
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#151927] text-white font-mono font-medium text-xs rounded hover:bg-[#252c44] transition-colors shadow-sm"
              >
                <FileText size={14} />
                <span>Download IEEE Technical Manuscript (PDF)</span>
              </a>
            </div>
          )}
        </header>

        {/* Note Body Content */}
        <article className="space-y-6">
          {renderNoteContent(note.content || note.excerpt || "")}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#e6e4dc] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 font-medium text-[#151927] hover:text-[#c94a2f] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Return to writing archive</span>
          </Link>
          <span className="text-[#767d8f]">
            Muhammad Saad · NUTECH Islamabad
          </span>
        </footer>
      </div>
    </div>
  );
}
