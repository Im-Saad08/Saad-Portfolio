import Link from "next/link";
import { GitBranch, Mail, Heart, Code2 } from "lucide-react";
import { personalInfo, navItems } from "@/lib/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#1a2438] py-12 mt-20"
      role="contentinfo"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[#8b95a8] text-sm">
            <Code2 size={16} className="text-[#00d4aa]" aria-hidden="true" />
            <span className="font-medium text-[#e8eaf0]">MOHTARM SAAD</span>
            <span className="hidden sm:inline">— {personalInfo.domain}</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm text-[#8b95a8] hover:text-[#e8eaf0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa] rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-[#8b95a8] hover:text-[#e8eaf0] hover:bg-[#1a2438] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
              aria-label="Email Muhammad Saad"
            >
              <Mail size={18} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#8b95a8] hover:text-[#e8eaf0] hover:bg-[#1a2438] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
              aria-label="GitHub Profile"
            >
              <GitBranch size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1a2438] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5a6578] text-center md:text-left">
            © {currentYear} MOHTARM SAAD. Built with Next.js, React & Tailwind CSS.
          </p>
          <p className="text-sm text-[#5a6578] text-center md:text-right flex items-center justify-center md:justify-end gap-1.5">
            Crafted with
            <Heart size={14} className="text-red-500 fill-red-500" aria-hidden="true" />
            &nbsp;for engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
