import Link from "next/link";
import { Home, BookOpen, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#c94a2f] mb-2">
          Null Pointer · Error 404
        </p>
        <h1 className="text-5xl font-bold text-[#151927] mb-3 font-mono">
          404
        </h1>
        <h2 className="text-xl font-bold text-[#151927] mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-[#535a6c] mb-8 leading-relaxed">
          The requested route does not exist or has been relocated within the engineering archive.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#151927] text-white rounded font-medium hover:bg-[#252c44] transition-colors shadow-sm"
          >
            <Home size={13} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#e6e4dc] bg-[#ffffff] text-[#151927] rounded font-medium hover:bg-[#f4f3ef] transition-colors"
          >
            <Layers size={13} className="text-[#767d8f]" />
            <span>Engineering Work</span>
          </Link>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-[#e6e4dc] bg-[#ffffff] text-[#151927] rounded font-medium hover:bg-[#f4f3ef] transition-colors"
          >
            <BookOpen size={13} className="text-[#767d8f]" />
            <span>Writing Archive</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
