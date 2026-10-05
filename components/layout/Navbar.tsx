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
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-base tracking-tight text-gray-900"
            onClick={closeMenu}
            aria-label="MOHTARM SAAD Homepage"
          >
            Muhammad Saad
          </Link>

          <div className="hidden md:flex items-center gap-6">
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
                  className={`text-sm transition-colors ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 pt-2 border-t border-gray-100">
            <div className="flex flex-col gap-1">
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
                    className={`px-3 py-2 rounded text-sm transition-colors ${
                      isActive
                        ? "bg-gray-100 font-semibold text-gray-900"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
