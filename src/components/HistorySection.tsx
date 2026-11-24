import { motion, useReducedMotion } from 'motion/react';
import { HISTORY_IMAGE, HISTORY_MILESTONES } from '../data/bmwModels';
import { SafeImage } from './SafeImage';

const COMPANY_FACTS = [
  { metric: '1916', caption: 'Myunxen shahrida tashkil topgan yil' },
  { metric: '1972', caption: 'BMW Motorsport (M) bo‘limi ochilishi' },
  { metric: '30+', caption: 'Dunyodagi ishlab chiqarish zavodlari' },
  { metric: '110 yil', caption: 'Muhandislik va haydash zavqi tarixi' },
];

export function HistorySection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="tarix"
      className="bg-white text-[#07080A] py-20 lg:py-28 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16">
          {/* Left Column: Munich BMW Welt & Four-Cylinder Tower */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative flex-1 min-h-[300px] lg:min-h-[460px] rounded-xl overflow-hidden border border-neutral-200 bg-[#0B0C0F]">
              <SafeImage
                src={HISTORY_IMAGE}
                alt="Myunxendagi BMW Four-Cylinder Tower bosh qarorgohi va BMW Welt muzeyi"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Myunxen, Germaniya — BMW Vierzylinder bosh qarorgohi va BMW Welt me’moriy majmuasi
            </p>
          </motion.div>

          {/* Right Column: Company History & Website Purpose */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between gap-8"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium text-neutral-500 tracking-wide mb-3">
                Kompaniya va Platforma Haqida
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#07080A] mb-5"
                style={{ textWrap: 'balance' }}
              >
                BMW tarixi: Samoviy dvigatellardan elektr kelajakkacha
              </h2>

              <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
                <p>
                  <strong className="font-semibold text-[#07080A]">
                    Bayerische Motoren Werke (BMW AG)
                  </strong>{' '}
                  1916-yilda Germaniyaning Myunxen shahrida aviatsiya dvigatellari ishlab
                  chiqaruvchi korxona sifatida tashkil topgan. Oq va moviy Bavaria rangi hamda
                  aylanuvchi parrak timsolidan ilhomlangan emblema bugun dunyodagi eng nufuzli
                  avtomobil ramzlaridan biridir.
                </p>
                <p>
                  1923-yilda R32 mototsikli, 1928-yilda ilk avtomobil va 1936-yilda afsonaviy BMW
                  328 roadsteri bilan kompaniya yengil konstruksiya va yuqori dinamika standartini
                  o‘rnatdi. 1972-yilda tashkil etilgan{' '}
                  <strong className="font-semibold text-[#07080A]">BMW M</strong> bo‘limi esa
                  poyga trassasi texnologiyalarini kundalik yo‘llarga olib kirdi.
                </p>
              </div>
            </div>

            {/* Website Purpose Block (Clean Hairline Container, Zero Left Accent Bars) */}
            <div className="p-6 bg-[#F6F7F9] border border-neutral-200 rounded-xl">
              <h3 className="text-base font-semibold text-[#07080A] mb-2">
                Saytning asosiy maqsadi
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Ushbu raqamli ko‘rgazma o‘zbekistonlik va xalqaro avtomobil ixlosmandlariga BMW
                brendining boy tarixini bir joyda taqdim etish, 2020–2026 yillardagi eng zamonaviy
                modellarni Sketchfab 3D texnologiyasi yordamida tashqi kuzovdan tortib salon
                ichigacha batafsil o‘rganish hamda test-drayv yoki maslahat uchun tezkor aloqa
                o‘rnatish imkonini yaratish maqsadida ishlab chiqilgan.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Quantified Company Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-neutral-200 mb-14">
          {COMPANY_FACTS.map((fact) => (
            <div key={fact.caption}>
              <div className="text-2xl sm:text-3xl font-semibold text-[#07080A] tabular-nums tracking-tight">
                {fact.metric}
              </div>
              <div className="text-xs sm:text-sm text-neutral-500 mt-1">{fact.caption}</div>
            </div>
          ))}
        </div>

        {/* Chronological Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HISTORY_MILESTONES.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 bg-[#F6F7F9] border border-neutral-200 rounded-xl"
            >
              <div className="text-sm font-semibold text-[#07080A] tabular-nums mb-2">
                {milestone.year}
              </div>
              <h3 className="text-base font-semibold text-[#07080A] mb-2">
                {milestone.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
