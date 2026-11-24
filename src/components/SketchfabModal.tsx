import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, Box, Armchair, Image as ImageIcon, ExternalLink, RotateCw } from 'lucide-react';
import type { NewBmwModel } from '../data/bmwModels';
import { SafeImage } from './SafeImage';

export type ViewerMode = 'exterior' | 'interior';
type InteriorSubView = '3d' | 'photo';

interface SketchfabModalProps {
  model: NewBmwModel | null;
  initialMode: ViewerMode;
  onClose: () => void;
}

export function SketchfabModal({ model, initialMode, onClose }: SketchfabModalProps) {
  const [mode, setMode] = useState<ViewerMode>(initialMode);
  const [interiorSubView, setInteriorSubView] = useState<InteriorSubView>('3d');
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMode(initialMode);
    setInteriorSubView('3d');
    setIframeLoaded(false);
  }, [model, initialMode]);

  useEffect(() => {
    setIframeLoaded(false);
  }, [mode]);

  useEffect(() => {
    if (!model) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [model, onClose]);

  if (!model) return null;

  const activeUid = mode === 'exterior' ? model.exterior3dUid : model.interior3dUid;
  const activeTitle = mode === 'exterior' ? model.exterior3dTitle : model.interior3dTitle;
  const embedSrc = `https://sketchfab.com/models/${activeUid}/embed?autostart=1&ui_theme=dark&ui_hint=2&preload=1&dnt=1`;
  const sketchfabDirectUrl = `https://sketchfab.com/3d-models/${activeUid}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={prefersReduced ? undefined : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sketchfab-modal-title"
      >
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-5xl bg-[#0B0C0F] border border-white/15 rounded-xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Modal Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
            <div>
              <p className="text-xs text-[#8A919E] tracking-wide">
                {model.years} · {model.directionLabel}
              </p>
              <h3 id="sketchfab-modal-title" className="text-lg sm:text-xl font-semibold text-white">
                {model.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Segmented View Switcher: Exterior vs Interior */}
              <div className="flex items-center p-1 bg-[#14171D] border border-white/10 rounded-lg">
                <button
                  type="button"
                  onClick={() => setMode('exterior')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    mode === 'exterior'
                      ? 'bg-white text-[#07080A]'
                      : 'text-[#C4C9D2] hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>Tashqi 3D</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('interior')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                    mode === 'interior'
                      ? 'bg-white text-[#07080A]'
                      : 'text-[#C4C9D2] hover:text-white'
                  }`}
                >
                  <Armchair className="w-3.5 h-3.5" />
                  <span>Salon 3D</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="3D oynani yopish"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-[#C4C9D2] hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3D Viewport Area */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#07080A]">
            {mode === 'interior' && interiorSubView === 'photo' ? (
              <div className="relative w-full h-full">
                <SafeImage
                  src={model.interiorPhoto}
                  alt={`${model.name} salon ichki ko‘rinishi`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/45 to-transparent">
                  <p className="text-xs text-[#C4C9D2] mb-1">
                    Salon materiallari va texnologiyalari
                  </p>
                  <p className="text-sm text-white font-medium">
                    {model.cabinHighlights.join(' · ')}
                  </p>
                </div>
              </div>
            ) : (
              <>
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#07080A] text-[#C4C9D2] z-10 pointer-events-none">
                    <RotateCw className="w-7 h-7 animate-spin mb-3 text-white" />
                    <p className="text-sm font-medium">Sketchfab 3D modeli yuklanmoqda...</p>
                    <p className="text-xs text-[#8A919E] mt-1">
                      Aylantirish uchun sichqoncha bilan ushlab torting
                    </p>
                  </div>
                )}
                <iframe
                  key={`${activeUid}-${mode}`}
                  title={activeTitle}
                  src={embedSrc}
                  onLoad={() => setIframeLoaded(true)}
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </>
            )}
          </div>

          {/* Modal Footer Controls & Highlights */}
          <div className="px-5 py-4 border-t border-white/10 bg-[#0D0F14] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-medium text-white">
                {mode === 'exterior'
                  ? `Tashqi kuzov ko‘rinishi · ${model.topSpeed} · ${model.power}`
                  : `Salon ko‘rinishi · ${model.cabinHighlights[0]}`}
              </p>
              <p className="text-xs text-[#8A919E]">
                {mode === 'exterior'
                  ? '360° aylantirish, yaqinlashtirish va yorug‘lik burchaklarini Sketchfab 3D orqali boshqaring.'
                  : 'Salon qismlarini 3D formatda ko‘ring yoki studiya panoramasiga o‘ting.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              {mode === 'interior' && (
                <button
                  type="button"
                  onClick={() =>
                    setInteriorSubView((prev) => (prev === '3d' ? 'photo' : '3d'))
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors whitespace-nowrap shrink-0"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>
                    {interiorSubView === '3d' ? 'Salon panoramasi (HD)' : '3D salon modeliga qaytish'}
                  </span>
                </button>
              )}

              <a
                href={sketchfabDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#C4C9D2] hover:text-white border border-white/10 hover:border-white/30 rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Sketchfab&apos;da ochish</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
