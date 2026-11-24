import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HERO_IMAGE } from '../data/bmwModels';

const HERO_METRICS = [
  { value: '1916', label: 'Myunxen muhandislik maktabi' },
  { value: '748 o.k.', label: 'Maksimal gibrid quvvat' },
  { value: '3.0 s', label: '0–100 km/soat tezlanish' },
  { value: '305 km/s', label: 'M Competition cho‘qqisi' },
];

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="bosh-sahifa"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-[#07080A] text-white overflow-hidden pt-20"
    >
      {/* Full-bleed background flagship BMW photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="BMW M8 Competition zamonaviy kumush va qora me'moriy pavilyonda"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Measured scrim for crisp WCAG AA contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#07080A]/92 via-[#07080A]/65 to-[#07080A]/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#07080A]/65"
          aria-hidden="true"
        />
      </div>

      {/* Main Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex items-center py-16 lg:py-24">
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-[#C4C9D2] tracking-wide mb-5">
            Bayerische Motoren Werke · 1916 — 2026
          </p>

          <h1
            className="text-white font-semibold tracking-tight leading-[1.08] mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 4.15rem)',
              textWrap: 'balance',
            }}
          >
            Tezlik va Qulaylik zavqini BMW bilan qayta kashf eting
          </h1>

          <p className="text-base sm:text-lg text-[#C4C9D2] leading-relaxed max-w-2xl mb-9 font-normal">
            Bir asrdan ortiq nemis muhandislik mahorati, dinamik aerodinamika va raqamli hashamat.
            2020–2026 yillardagi eng ilg‘or modellarni 3D ko‘rinishda tashqaridan va salon ichidan
            kashf eting.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#yangi-modellar"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold bg-white text-[#07080A] hover:bg-[#E2E5EB] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Yangi modellarni ko&apos;rish</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#tarix"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>BMW tarixi</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full-width 4-Column Spec Strip */}
      <div className="relative z-10 border-t border-white/15 bg-[#07080A]/75 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="text-xl sm:text-2xl font-semibold text-white tabular-nums tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-[#8A919E]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
