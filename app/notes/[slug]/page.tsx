import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

function renderNoteContent(content: string) {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    const headingMatch = trimmed.match(/^(\d+\.\s+[^:\n]+):([\s\S]*)$/);
    if (headingMatch) {
      const title = headingMatch[1];
      const rest = headingMatch[2].trim();
      return (
        <section key={i} className="mt-10 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
            {rest.split("\n").map((line, li) => {
              const lTrim = line.trim();
              if (lTrim.startsWith("•")) {
                return (
                  <div key={li} className="flex items-start gap-2.5 pl-2 text-sm sm:text-base text-gray-700">
                    <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
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
      <p key={i} className="text-gray-700 leading-relaxed text-base sm:text-lg">
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
        <div className="mb-10">
          <Link
            href="/notes"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to all writing
          </Link>
        </div>

        {/* Note Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
            <span>{note.category}</span>
            <span>·</span>
            <time>{note.date}</time>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            {note.title}
          </h1>

          {note.excerpt && (
            <p className="text-lg text-gray-600 leading-relaxed italic mb-6">
              {note.excerpt}
            </p>
          )}

          {note.link && (
            <div className="mt-4">
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-medium text-sm rounded hover:bg-gray-800 transition-colors"
              >
                Download Technical Manuscript (PDF)
              </a>
            </div>
          )}
        </header>

        {/* Note Body Content */}
        <article className="space-y-6">
          {renderNoteContent(note.content || note.excerpt || "")}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-4 flex items-center justify-between text-sm">
          <Link href="/notes" className="font-medium text-blue-600 hover:underline">
            ← Return to writing archive
          </Link>
          <span className="text-xs text-gray-400">
            Muhammad Saad · NUTECH
          </span>
        </footer>
      </div>
    </div>
  );
}
