import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-xs font-mono mb-6">
          <Terminal size={14} />
          <span>ERROR 404 // NULL_POINTER</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-4">
          Page Not Found
        </h1>

        <p className="text-[#8b95a8] leading-relaxed mb-8">
          The requested engineering module, project case-study, or note does not exist or has been relocated in the architecture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00d4aa] text-[#0a0f1d] font-medium rounded-lg hover:bg-[#00b894] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
          >
            <Home size={18} />
            Return Home
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1a2438] text-[#e8eaf0] font-medium rounded-lg hover:bg-[#1a2438] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
          >
            <ArrowLeft size={18} />
            View Work
          </Link>
          <Link
            href="/notes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#1a2438] text-[#e8eaf0] font-medium rounded-lg hover:bg-[#1a2438] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
          >
            <BookOpen size={18} />
            Read Notes
          </Link>
        </div>
      </div>
    </div>
  );
}
