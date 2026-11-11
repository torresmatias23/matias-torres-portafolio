import { useEffect, useRef, useState } from 'react';
import type { SolutionScreenshot } from '../../data/energyacsGallery';

type SolutionGalleryProps = {
  images: SolutionScreenshot[];
  onClose: () => void;
};

export default function SolutionGallery({ images, onClose }: SolutionGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedSrc, setSelectedSrc] = useState(images[0]?.src);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const available = images.filter((image) => !failedImages.has(image.src));
  const selected = available.find((image) => image.src === selectedSrc) ?? available[0];
  const categories = [...new Set(available.map((image) => image.category))];
  const categoryImages = available.filter((image) => image.category === selected?.category);
  const categoryIndex = categoryImages.findIndex((image) => image.src === selected?.src);

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = originalOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    if (!available.length) onClose();
  }, [available.length, onClose]);

  const navigate = (step: number) => {
    if (categoryImages.length > 1) {
      setSelectedSrc(categoryImages[(categoryIndex + step + categoryImages.length) % categoryImages.length].src);
    }
  };

  const markFailed = (src: string) => setFailedImages((current) => new Set([...current, src]));

  if (!selected) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="solutions-title"
      aria-describedby="solutions-description"
      className="solution-gallery"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          const controls = event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          navigate(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}
    >
      <div className="flex h-full min-h-0 flex-col gap-4 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 id="solutions-title" className="text-lg font-semibold text-white sm:text-xl">Soluciones EnergyACS / IMPOFUSION</h2>
            <p id="solutions-description" className="mt-1 text-sm text-slate-300">Desarrollos realizados durante mi práctica profesional.</p>
          </div>
          <button type="button" autoFocus className="shrink-0 rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10" aria-label="Cerrar galería de soluciones" onClick={onClose}>Cerrar</button>
        </div>

        <div role="group" aria-label="Categorías de soluciones" className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category} type="button" aria-pressed={selected.category === category} onClick={() => setSelectedSrc(available.find((image) => image.category === category)!.src)} className={`min-h-10 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${selected.category === category ? 'border-cyan-200/40 bg-cyan-200/15 text-cyan-100' : 'border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'}`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_88px] gap-4 md:grid-cols-[minmax(0,1fr)_176px] md:grid-rows-1">
          <figure className="flex min-h-0 min-w-0 flex-col">
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-black/25">
              <img key={selected.src} src={selected.src} alt={`${selected.category}: ${selected.title}`} width={1600} height={900} decoding="async" className="h-full w-full object-contain" onError={() => markFailed(selected.src)} />
              <button type="button" aria-label="Captura anterior de la solución" disabled={categoryImages.length < 2} onClick={() => navigate(-1)} className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white backdrop-blur-md transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-30">&lt;</button>
              <button type="button" aria-label="Captura siguiente de la solución" disabled={categoryImages.length < 2} onClick={() => navigate(1)} className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white backdrop-blur-md transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-30">&gt;</button>
            </div>
            <figcaption className="pt-3" aria-live="polite" aria-atomic="true">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-white">{selected.title}</h3>
                <span className="text-sm tabular-nums text-cyan-100">{categoryIndex + 1} / {categoryImages.length}</span>
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-300">{selected.description}</p>
            </figcaption>
          </figure>

          <div role="group" aria-label={`Capturas de ${selected.category}`} className="flex min-h-0 gap-2 overflow-x-auto p-1 md:flex-col md:overflow-x-hidden md:overflow-y-auto">
            {categoryImages.map((image) => (
              <button type="button" key={image.src} aria-label={`Ver ${image.category}: ${image.title}`} aria-current={image.src === selected.src ? 'true' : undefined} onClick={() => setSelectedSrc(image.src)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition-colors md:h-auto md:w-full md:aspect-video ${image.src === selected.src ? 'border-cyan-200 bg-cyan-200/10' : 'border-white/10 bg-black/20 hover:border-white/40'}`}>
                <img src={image.src} alt="" loading="lazy" decoding="async" width={160} height={90} className="h-full w-full object-contain p-1" onError={() => markFailed(image.src)} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
}
