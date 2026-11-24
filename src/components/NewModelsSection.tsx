import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Box, Armchair, Check } from 'lucide-react';
import { NEW_BMW_MODELS, type ModelCategory, type NewBmwModel } from '../data/bmwModels';
import { SafeImage } from './SafeImage';
import { SketchfabModal, type ViewerMode } from './SketchfabModal';

const CATEGORIES: ModelCategory[] = [
  'Barchasi',
  'Sport Kupe',
  'Sedan',
  'SUV / Krossover',
  'Elektr',
];

export function NewModelsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ModelCategory>('Barchasi');
  const [modalModel, setModalModel] = useState<NewBmwModel | null>(null);
  const [modalMode, setModalMode] = useState<ViewerMode>('exterior');
  const prefersReduced = useReducedMotion();

  const filteredModels =
    selectedCategory === 'Barchasi'
      ? NEW_BMW_MODELS
      : NEW_BMW_MODELS.filter((m) => m.direction === selectedCategory);

  const openViewer = (model: NewBmwModel, mode: ViewerMode) => {
    setModalModel(model);
    setModalMode(mode);
  };

  return (
    <section
      id="yangi-modellar"
      className="bg-[#07080A] text-white py-20 lg:py-28 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading + Category Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#8A919E] tracking-wide mb-3">
              2020 — 2026 Avlod
            </p>
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4"
              style={{ textWrap: 'balance' }}
            >
              Yangi Modellar
            </h2>
            <p className="text-base text-[#C4C9D2] leading-relaxed">
              2020–2026 yillar oralig‘ida ishlab chiqarilgan eng mashhur BMW modellari. Har bir
              avtomobilning texnik ustunliklari bilan tanishing hamda uni 3D formatda tashqaridan va
              salon ichidan tomosha qiling.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Model yo‘nalishi bo‘yicha saralash"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#101216] border border-white/10 rounded-lg self-start lg:self-end"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white text-[#07080A]'
                      : 'text-[#C4C9D2] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredModels.map((model, idx) => (
            <motion.article
              key={model.id}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#101216] border border-white/10 hover:border-white/25 rounded-xl overflow-hidden flex flex-col transition-colors duration-200"
            >
              {/* 4:3 Studio Photo */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#07080A]">
                <SafeImage
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101216] to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div>
                  {/* Quiet Unboxed Metadata (Zero-Pill Rule) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#8A919E] mb-2">
                    <span className="tabular-nums">{model.years}</span>
                    <span aria-hidden="true">·</span>
                    <span>{model.directionLabel}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white tracking-tight mb-4">
                    {model.name}
                  </h3>

                  {/* Key Speed & Power Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 py-3.5 border-y border-white/10 mb-5">
                    <div>
                      <div className="text-[11px] text-[#8A919E]">Maks. tezlik</div>
                      <div className="text-sm font-semibold text-white tabular-nums mt-0.5">
                        {model.topSpeed}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#8A919E]">Tezlanish</div>
                      <div className="text-sm font-semibold text-white tabular-nums mt-0.5">
                        {model.acceleration.split(' ')[0]} s
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#8A919E]">Quvvati</div>
                      <div className="text-sm font-semibold text-white tabular-nums mt-0.5">
                        {model.power}
                      </div>
                    </div>
                  </div>

                  {/* Technical Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-[#C4C9D2] mb-2">
                      Texnik xususiyatlari · {model.drivetrain}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#8A919E] leading-relaxed">
                      {model.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <span className="text-[#C4C9D2] select-none">—</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages */}
                  <div>
                    <h4 className="text-xs font-medium text-[#C4C9D2] mb-2">Asosiy ustunliklari</h4>
                    <ul className="space-y-1.5 text-xs text-[#C4C9D2] leading-relaxed">
                      {model.advantages.map((adv) => (
                        <li key={adv} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2 Interactive 3D Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => openViewer(model, 'exterior')}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs sm:text-sm font-semibold bg-white text-[#07080A] hover:bg-[#E2E5EB] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Box className="w-4 h-4 shrink-0" />
                    <span>Avtomobilni tashqaridan ko&apos;rish</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openViewer(model, 'interior')}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs sm:text-sm font-medium text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <Armchair className="w-4 h-4 shrink-0" />
                    <span>Salon ichini tomosha qilish</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Sketchfab 3D Viewer Modal */}
      <SketchfabModal
        model={modalModel}
        initialMode={modalMode}
        onClose={() => setModalModel(null)}
      />
    </section>
  );
}
