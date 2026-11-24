import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#bosh-sahifa', label: 'Bosh sahifa' },
  { href: '#yangi-modellar', label: 'Yangi modellar' },
  { href: '#barcha-modellar', label: 'Barcha modellar' },
  { href: '#tarix', label: 'BMW tarixi' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#07080A]/92 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-[#07080A]/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#bosh-sahifa"
          className="inline-flex items-center gap-3 text-white font-semibold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="18" cy="18" r="16.5" stroke="#C4C9D2" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="11" stroke="#C4C9D2" strokeWidth="1.2" />
            <path d="M18 7V18H7A11 11 0 0 1 18 7Z" fill="#FFFFFF" />
            <path d="M18 29V18H29A11 11 0 0 1 18 29Z" fill="#FFFFFF" />
            <path d="M18 7V18H29A11 11 0 0 0 18 7Z" fill="#1F242D" />
            <path d="M18 29V18H7A11 11 0 0 0 18 29Z" fill="#1F242D" />
          </svg>
          <span>BMW</span>
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav aria-label="Asosiy navigatsiya" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-normal text-[#C4C9D2] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#aloqa"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-white text-[#07080A] hover:bg-[#E2E5EB] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Aloqa
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-white border border-white/15 rounded-md hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0C0F] border-b border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-3 text-base font-medium text-[#E2E5EB] hover:text-white hover:bg-white/5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#aloqa"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block w-full text-center py-3 px-4 text-sm font-semibold bg-white text-[#07080A] rounded-md"
          >
            Aloqa va Ro&apos;yxatdan o&apos;tish
          </a>
        </div>
      )}
    </header>
  );
}
