import { useState, useEffect } from "react";
import { navItems } from "../data/portfolio";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../hooks/useIntersectionObserver";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    setScrolled(scrollY > 20);
  }, [scrollY]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-14">
          <a
            href="#home"
            className="font-semibold text-lg text-text tracking-tight focus-visible"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            MOHTARM SAAD
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-text-muted hover:text-text transition-colors text-sm font-medium focus-visible"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-border transition-colors focus-visible"
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
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-3 text-text-muted hover:text-text hover:bg-border rounded-lg transition-all text-base font-medium focus-visible"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}