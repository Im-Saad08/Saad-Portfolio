import Link from "next/link";
import { personalInfo, navItems } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-16 mt-20" role="contentinfo">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-semibold text-gray-900">Muhammad Saad</span>
            <span className="text-gray-500 text-sm ml-2">— {personalInfo.domain}</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-gray-900 transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className="hover:text-gray-900 transition-colors"
            >
              CV (PDF)
            </a>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {currentYear} Muhammad Saad. All rights reserved.</p>
          <p>National University of Technology (NUTECH), Islamabad</p>
        </div>
      </div>
    </footer>
  );
}
