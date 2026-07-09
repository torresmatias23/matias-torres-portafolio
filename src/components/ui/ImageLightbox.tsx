import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type ImageLightboxProps = {
  screenshots: string[];
  initialIndex: number;
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
};

function LightboxPlaceholder() {
  return (
    <div className="flex h-full min-h-[280px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-center backdrop-blur-xl">
      <span className="rounded-full border border-white/10 bg-slate-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
        Captura próximamente
      </span>
    </div>
  );
}

function ImageLightbox({
  screenshots,
  initialIndex,
  projectName,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const slides = useMemo(() => screenshots.filter(Boolean), [screenshots]);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const lastIndex = Math.max(slides.length - 1, 0);
    setCurrentIndex(Math.min(Math.max(initialIndex, 0), lastIndex));
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
  }, [initialIndex, isOpen, slides.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const goToPrevious = () => {
    if (slides.length <= 1) {
      return;
    }

    setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    if (slides.length <= 1) {
      return;
    }

    setCurrentIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        goToPrevious();
      }

      if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, slides.length]);

  if (!isOpen || typeof document === 'undefined') {
    return null;
  }

  const currentImage = slides[currentIndex] ?? '';
  const imageFailed = !currentImage || failedImages.has(currentImage);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada de ${projectName}`}
      onClick={onClose}
    >
      <div
        className="glass-border relative flex h-[80vh] w-[95vw] flex-col rounded-3xl bg-slate-950/72 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(34,211,238,0.16)] backdrop-blur-2xl sm:h-[85vh] sm:w-[90vw] sm:p-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/75">
              {projectName}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-300" aria-live="polite">
              {currentIndex + 1} / {Math.max(slides.length, 1)}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
            aria-label="Cerrar imagen ampliada"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/45">
          {imageFailed ? (
            <LightboxPlaceholder />
          ) : (
            <img
              src={currentImage}
              alt={`Captura ${currentIndex + 1} ampliada de ${projectName}`}
              className="h-full max-h-full w-full rounded-2xl object-contain shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              onError={() => {
                setFailedImages((current) => {
                  const next = new Set(current);
                  next.add(currentImage);
                  return next;
                });
              }}
            />
          )}

          {slides.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/55 text-lg font-bold text-white shadow-lg backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                aria-label={`Ver captura anterior de ${projectName}`}
                onClick={goToPrevious}
              >
                &lt;
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/55 text-lg font-bold text-white shadow-lg backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
                aria-label={`Ver captura siguiente de ${projectName}`}
                onClick={goToNext}
              >
                &gt;
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ImageLightbox;
