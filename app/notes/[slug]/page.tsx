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
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to all notes
          </Link>
        </div>

        {/* Note Article Header */}
        <header className="mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
            <span>{note.category}</span>
            <span>•</span>
            <time>{note.date}</time>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            {note.title}
          </h1>

          {note.excerpt && (
            <p className="text-base text-gray-600 leading-relaxed italic border-l-2 border-gray-300 pl-4 py-1">
              {note.excerpt}
            </p>
          )}

          {note.link && (
            <div className="mt-6">
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-medium text-sm rounded hover:bg-gray-800 transition-colors"
              >
                Download IEEE Manuscript (PDF)
              </a>
            </div>
          )}
        </header>

        {/* Note Body Content */}
        <article className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-6">
          {note.content || note.excerpt}
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between text-sm">
          <Link href="/notes" className="font-medium text-blue-600 hover:underline">
            ← Return to notes archive
          </Link>
          <span className="text-xs text-gray-500">
            Muhammad Saad • NUTECH
          </span>
        </footer>
      </div>
    </div>
  );
}
