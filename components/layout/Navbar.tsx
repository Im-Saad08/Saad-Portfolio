"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1d]/90 backdrop-blur-md border-b border-[#1a2438]"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-14">
          <Link
            href="/"
            className="font-semibold text-lg text-[#e8eaf0] tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa] rounded"
            onClick={closeMenu}
            aria-label="MOHTARM SAAD Homepage"
          >
            MOHTARM SAAD
          </Link>

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
                  className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa] rounded px-1.5 py-0.5 ${
                    isActive
                      ? "text-[#00d4aa]"
                      : "text-[#8b95a8] hover:text-[#e8eaf0]"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-[#8b95a8] hover:text-[#e8eaf0] hover:bg-[#1a2438] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-[#1a2438]">
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
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#00d4aa]/10 text-[#00d4aa]"
                      : "text-[#8b95a8] hover:text-[#e8eaf0] hover:bg-[#1a2438]"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
