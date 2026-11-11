import { useCallback, useState } from 'react';
import type { SolutionScreenshot } from '../../data/energyacsGallery';
import SolutionGallery from './SolutionGallery';

export default function SolutionGalleryPreview({ images }: { images: SolutionScreenshot[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const closeGallery = useCallback(() => setIsOpen(false), []);
  const available = images.filter((image) => !failedImages.has(image.src));
  const preview = available[0];
  if (!preview) return null;

  return (
    <div role="group" aria-label="Galería de soluciones EnergyACS / IMPOFUSION" className="m-4">
      <button type="button" aria-label="Ampliar soluciones de EnergyACS / IMPOFUSION" onClick={() => setIsOpen(true)} className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
        <img src={preview.src} alt={`${preview.category}: ${preview.title}`} width={1600} height={900} loading="lazy" decoding="async" className="h-full w-full object-contain p-2" onError={() => setFailedImages((current) => new Set([...current, preview.src]))} />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Ver soluciones</span>
      </button>
      <div className="mt-3 flex min-h-11 flex-wrap items-center justify-between gap-2">
        <span className="text-sm text-slate-300">{available.length} capturas</span>
        <button type="button" onClick={() => setIsOpen(true)} className="min-h-11 rounded-lg border border-cyan-200/25 bg-cyan-200/10 px-3 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-200/20" aria-label="Explorar soluciones de EnergyACS / IMPOFUSION">Explorar soluciones</button>
      </div>
      {isOpen ? <SolutionGallery images={available} onClose={closeGallery} /> : null}
    </div>
  );
}
