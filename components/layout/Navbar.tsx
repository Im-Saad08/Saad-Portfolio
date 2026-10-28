"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { Menu, X, FileText, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[#faf9f5]/95 backdrop-blur-md border-b border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.03)]"
          : "bg-[#faf9f5] border-b border-[#efece5]"
      }`}
    >
      <nav
        className="container"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#11161b] transition-opacity hover:opacity-90"
            onClick={closeMenu}
            aria-label="Muhammad Saad — Portfolio Homepage"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded border border-[#11161b]/20 bg-[#11161b] text-white font-mono text-xs font-semibold tracking-wider">
              S
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold text-base tracking-tight text-[#11161b]">
                Muhammad Saad
              </span>
              <span className="text-[#185a37] font-bold text-base leading-none select-none">
                .
              </span>
              <span className="hidden lg:inline text-xs font-mono text-[#6e7787] tracking-wide ml-1.5">
                CEN · NUTECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative text-sm transition-colors py-1 ${
                    isActive
                      ? "font-semibold text-[#11161b]"
                      : "text-[#4c5562] hover:text-[#11161b]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#185a37] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#11161b] bg-[#f2f0e8] hover:bg-[#eae6dd] border border-[#e5e2d9] rounded transition-colors"
              title="Download Muhammad Saad's Curriculum Vitae (PDF)"
            >
              <FileText size={13} className="text-[#4c5562]" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded text-[#4c5562] hover:text-[#11161b] hover:bg-[#f2f0e8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#185a37]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-[#e5e2d9] bg-[#faf9f5]"
          >
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : item.href.startsWith("/#")
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded text-sm transition-colors ${
                      isActive
                        ? "bg-[#f2f0e8] font-semibold text-[#11161b]"
                        : "text-[#4c5562] hover:text-[#11161b] hover:bg-[#f2f0e8]/60"
                    }`}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185a37]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#efece5] flex items-center gap-3 px-3.5">
              <a
                href="/Saad_CV.pdf"
                download="Muhammad_Saad_CV.pdf"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-mono font-medium text-[#11161b] bg-[#f2f0e8] border border-[#e5e2d9] rounded"
                onClick={closeMenu}
              >
                <FileText size={13} />
                <span>Download CV</span>
              </a>
              <a
                href="mailto:imsaad.work@gmail.com"
                className="inline-flex items-center justify-center p-2 text-[#4c5562] bg-[#f2f0e8] border border-[#e5e2d9] rounded hover:text-[#11161b]"
                aria-label="Send email"
                onClick={closeMenu}
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
