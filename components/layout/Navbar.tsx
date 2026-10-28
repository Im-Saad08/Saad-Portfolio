"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { theme } from "@/lib/theme";
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
          ? "bg-canvas/95 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-canvas border-b border-border-subtle"
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
            className="group flex items-center gap-2.5 text-ink transition-opacity hover:opacity-90"
            onClick={closeMenu}
            aria-label="Muhammad Saad — Portfolio Homepage"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded border border-ink/20 bg-ink text-white font-mono text-xs font-semibold tracking-wider">
              S
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold text-base tracking-tight text-ink">
                Muhammad Saad
              </span>
              <span className={theme.styles.headingDot}>
                .
              </span>
              <span className="hidden lg:inline text-xs font-mono text-ink-subtle tracking-wide ml-1.5">
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
                      ? "font-semibold text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
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
              className={theme.styles.buttonSecondarySm}
              title="Download Muhammad Saad's Curriculum Vitae (PDF)"
            >
              <FileText size={13} className="text-ink-muted" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded text-ink-muted hover:text-ink hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
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
            className="md:hidden py-4 border-t border-border bg-canvas"
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
                        ? "bg-surface-subtle font-semibold text-ink"
                        : "text-ink-muted hover:text-ink hover:bg-surface-subtle/60"
                    }`}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-border-subtle flex items-center gap-3 px-3.5">
              <a
                href="/Saad_CV.pdf"
                download="Muhammad_Saad_CV.pdf"
                className={`flex-1 justify-center ${theme.styles.buttonSecondarySm}`}
                onClick={closeMenu}
              >
                <FileText size={13} />
                <span>Download CV</span>
              </a>
              <a
                href="mailto:imsaad.work@gmail.com"
                className="inline-flex items-center justify-center p-2 text-ink-muted bg-surface-subtle border border-border rounded hover:text-ink"
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
