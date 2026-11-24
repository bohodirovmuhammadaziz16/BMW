import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { HERITAGE_MODELS, type HeritageBmwModel } from '../data/bmwModels';
import { SafeImage } from './SafeImage';

type EraFilter = 'Barchasi' | '1930–1960' | '1970–1990' | '2000–2026';

const ERA_FILTERS: EraFilter[] = ['Barchasi', '1930–1960', '1970–1990', '2000–2026'];

interface HeritageCarouselSectionProps {
  onSelectModelForContact: (modelName: string) => void;
}

export function HeritageCarouselSection({
  onSelectModelForContact,
}: HeritageCarouselSectionProps) {
  const [selectedEra, setSelectedEra] = useState<EraFilter>('Barchasi');
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const models: HeritageBmwModel[] =
    selectedEra === 'Barchasi'
      ? HERITAGE_MODELS
      : HERITAGE_MODELS.filter((m) => m.era === selectedEra);

  const handleEraChange = (era: EraFilter) => {
    setSelectedEra(era);
    setActiveIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  };

  const scrollByCard = (direction: -1 | 1) => {
    const nextIndex = Math.max(0, Math.min(models.length - 1, activeIndex + direction));
    setActiveIndex(nextIndex);
    if (trackRef.current) {
      const cardWidth = trackRef.current.firstElementChild?.clientWidth ?? 360;
      trackRef.current.scrollBy({
        left: direction * (cardWidth + 24),
        behavior: prefersReduced ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <section
      id="barcha-modellar"
      className="bg-[#F6F7F9] text-[#07080A] py-20 lg:py-28 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Era Filter & Carousel Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-neutral-500 tracking-wide mb-3">
              1936 — 2026 · Tarixdan bugungacha
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#07080A] mb-4"
              style={{ textWrap: 'balance' }}
            >
              Barcha modellar evolyutsiyasi
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              BMW tomonidan ishlab chiqarilgan eng ilk klassik roadsterlardan tortib, poyga
              chempionlari va bugungi gibrid-elektr avlodigacha bo‘lgan xronologik galereya.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-4">
            {/* Era Filter Tabs */}
            <div
              role="tablist"
              aria-label="Davrlar bo‘yicha saralash"
              className="flex flex-wrap items-center gap-1 p-1 bg-white border border-neutral-200 rounded-lg"
            >
              {ERA_FILTERS.map((era) => {
                const active = selectedEra === era;
                return (
                  <button
                    key={era}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleEraChange(era)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#07080A] text-white'
                        : 'text-neutral-600 hover:text-[#07080A]'
                    }`}
                  >
                    {era}
                  </button>
                );
              })}
            </div>

            {/* Carousel Arrow Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={activeIndex === 0}
                aria-label="Oldingi model"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-300 bg-white text-[#07080A] hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={activeIndex >= models.length - 1}
                aria-label="Keyingi model"
                className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-300 bg-white text-[#07080A] hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* AOS-style Scroll Animated Horizontal Carousel */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}
        >
          {models.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={prefersReduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="snap-start shrink-0 w-[85vw] sm:w-[390px] lg:w-[410px] bg-white border border-neutral-200 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] bg-[#0B0C0F] overflow-hidden relative">
                <SafeImage
                  src={item.image}
                  alt={`${item.year} ${item.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                    <span className="font-semibold text-[#07080A] tabular-nums">{item.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.chassis}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.category}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#07080A] tracking-tight mb-3">
                    {item.name}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {item.legacyNote}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-3 py-3 border-t border-neutral-200 text-xs mb-4">
                    <div>
                      <span className="block text-neutral-500">Tezlik</span>
                      <span className="font-semibold text-[#07080A] tabular-nums">
                        {item.topSpeed}
                      </span>
                    </div>
                    <div>
                      <span className="block text-neutral-500">Dvigatel</span>
                      <span className="font-semibold text-[#07080A]">{item.engine}</span>
                    </div>
                    <div>
                      <span className="block text-neutral-500">Quvvat</span>
                      <span className="font-semibold text-[#07080A] tabular-nums">
                        {item.power}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#aloqa"
                    onClick={() => onSelectModelForContact(`${item.year} ${item.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07080A] hover:text-neutral-600 transition-colors"
                  >
                    <span>Ushbu model bo&apos;yicha so&apos;rov qoldirish</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Slide Progress Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
          <span>
            Jami {models.length} ta tarixiy va zamonaviy bosqich
          </span>
          <span className="tabular-nums">
            {String(activeIndex + 1).padStart(2, '0')} / {String(models.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}
