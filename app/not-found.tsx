import Link from "next/link";
import { Home, BookOpen, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#185a37] mb-2">
          Null Pointer · Error 404
        </p>
        <h1 className="text-5xl font-bold text-[#11161b] mb-3 font-mono">
          404
        </h1>
        <h2 className="text-xl font-bold text-[#11161b] mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-[#4c5562] mb-8 leading-relaxed">
          The requested route does not exist or has been relocated within the engineering archive.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#185a37] text-white rounded font-medium hover:bg-[#103f27] transition-colors shadow-sm"
          >
            <Home size={13} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] rounded font-medium hover:bg-[#f2f0e8] hover:border-[#cfccc2] transition-colors"
          >
            <Layers size={13} className="text-[#6e7787]" />
            <span>Engineering Work</span>
          </Link>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] rounded font-medium hover:bg-[#f2f0e8] hover:border-[#cfccc2] transition-colors"
          >
            <BookOpen size={13} className="text-[#6e7787]" />
            <span>Writing Archive</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
