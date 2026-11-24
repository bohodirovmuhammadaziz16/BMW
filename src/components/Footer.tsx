export function Footer() {
  return (
    <footer className="bg-[#050608] text-[#8A919E] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="text-white font-semibold text-base tracking-tight">
            BMW · Bayerische Motoren Werke
          </div>
          <p className="text-xs text-[#8A919E]">
            Tezlik, muhandislik aniqligi va zamonaviy qulaylik ko‘rgazmasi. 3D modellar{' '}
            <a
              href="https://sketchfab.com/categories/cars-vehicles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C4C9D2] hover:text-white underline underline-offset-4 transition-colors"
            >
              Sketchfab
            </a>{' '}
            orqali taqdim etilgan.
          </p>
        </div>

        <nav aria-label="Quyi sahifa havolalari" className="flex flex-wrap items-center gap-6 text-xs">
          <a href="#bosh-sahifa" className="hover:text-white transition-colors whitespace-nowrap">
            Bosh sahifa
          </a>
          <a href="#yangi-modellar" className="hover:text-white transition-colors whitespace-nowrap">
            Yangi modellar
          </a>
          <a href="#barcha-modellar" className="hover:text-white transition-colors whitespace-nowrap">
            Barcha modellar
          </a>
          <a href="#tarix" className="hover:text-white transition-colors whitespace-nowrap">
            BMW tarixi
          </a>
          <a href="#aloqa" className="hover:text-white transition-colors whitespace-nowrap">
            Aloqa
          </a>
        </nav>

        <div className="text-xs text-[#6B7280] tabular-nums">
          © 2026 BMW Showcase
        </div>
      </div>
    </footer>
  );
}
