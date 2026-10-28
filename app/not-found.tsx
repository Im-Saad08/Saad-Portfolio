import Link from "next/link";
import { theme } from "@/lib/theme";
import { Home, Users, Layers } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="max-w-md mx-auto text-center">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-primary mb-2">
          Null Pointer · Error 404
        </p>
        <h1 className="text-5xl font-bold text-ink mb-3 font-mono">
          404
        </h1>
        <h2 className="text-xl font-bold text-ink mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-ink-muted mb-8 leading-relaxed">
          The requested route does not exist or has been relocated within the engineering archive.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          <Link
            href="/"
            className={theme.styles.buttonPrimarySm}
          >
            <Home size={13} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/work"
            className={theme.styles.buttonSecondarySm}
          >
            <Layers size={13} className="text-ink-subtle" />
            <span>Engineering Work</span>
          </Link>
          <Link
            href="/about"
            className={theme.styles.buttonSecondarySm}
          >
            <Users size={13} className="text-ink-subtle" />
            <span>About Saad</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
