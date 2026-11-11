import { useCallback, useEffect, useMemo, useState } from 'react';
import ImageLightbox from './ImageLightbox';

type ScreenshotCarouselProps = {
  images: string[];
  labels?: string[];
  projectName: string;
  intervalMs?: number;
  previewFit?: 'cover' | 'contain';
  previewFrame?: 'phone';
};

function Placeholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
      <div className="rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
          Captura próximamente
        </span>
      </div>
    </div>
  );
}

function ScreenshotCarousel({
  images,
  labels,
  projectName,
  intervalMs = 4000,
  previewFit = 'cover',
  previewFrame,
}: ScreenshotCarouselProps) {
  const slides = useMemo(() => (images.length > 0 ? images : ['']), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const closeLightbox = useCallback(() => setIsLightboxOpen(false), []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, slides.length]);

  useEffect(() => {
    if (isPaused || isStopped || isFocused || reducedMotion || isLightboxOpen || slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, isLightboxOpen, isPaused, isStopped, isFocused, reducedMotion, slides.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const markAsFailed = (image: string) => {
    if (!image) {
      return;
    }

    setFailedImages((current) => {
      const next = new Set(current);
      next.add(image);
      return next;
    });
  };

  const markAsLoaded = (image: string) => {
    if (!image) {
      return;
    }

    setLoadedImages((current) => {
      const next = new Set(current);
      next.add(image);
      return next;
    });
  };

  const openLightbox = (index: number, image: string) => {
    if (!image || failedImages.has(image) || !loadedImages.has(image)) {
      return;
    }

    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const previewImageClass =
    previewFit === 'contain'
      ? 'object-contain p-2 sm:p-3'
      : 'object-cover group-hover:scale-[1.02]';

  const renderPreviewImage = (image: string, index: number) => {
    const fileName = image.split('/').pop()?.toLowerCase() ?? '';
    const usePhoneFrame = previewFrame === 'phone' || fileName === 'mobile.png';
    const sharedImageProps = {
      src: image,
      alt: `${projectName}: ${labels?.[index] ?? `captura ${index + 1}`}`,
      loading: 'lazy' as const,
      decoding: 'async' as const,
      width: 1600,
      height: 900,
      onLoad: () => markAsLoaded(image),
      onError: () => markAsFailed(image),
    };

    if (usePhoneFrame) {
      return (
        <span className="flex h-full w-full items-center justify-center p-3 sm:p-4">
          <span className="relative block h-[92%] aspect-[9/16] rounded-[2rem] border border-white/15 bg-slate-950/70 p-1.5 shadow-[0_20px_70px_rgba(0,0,0,0.38),0_0_34px_rgba(34,211,238,0.14)] backdrop-blur-xl">
            <span className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/45" />
            <img
              {...sharedImageProps}
              className="h-full w-full rounded-[1.55rem] bg-slate-950 object-contain"
            />
          </span>
        </span>
      );
    }

    return (
      <img
        {...sharedImageProps}
        className={`h-full w-full transition duration-700 ${previewImageClass}`}
      />
    );
  };

  return (
    <>
      <div
        className="relative m-4 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(30,41,59,0.5))]"
        aria-label={`Carrusel de capturas de ${projectName}`}
        aria-roledescription="carousel"
        role="region"
        onFocus={() => setIsFocused(true)}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false); }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />

        {slides.map((image, index) => {
          const imageFailed = !image || failedImages.has(image);
          const isActive = index === activeIndex;

          return (
            <div
              key={`${projectName}-${image || 'placeholder'}-${index}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={!isActive}
            >
              {imageFailed ? <Placeholder /> : null}
              {image ? (
                <button
                  type="button"
                  tabIndex={isActive && !imageFailed ? 0 : -1}
                  className={`group h-full w-full cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300/70 ${
                    imageFailed ? 'hidden' : 'block'
                  }`}
                  aria-label={`Ampliar captura ${index + 1} de ${projectName}`}
                  onClick={() => openLightbox(index, image)}
                >
                  {renderPreviewImage(image, index)}
                  <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200 opacity-90 backdrop-blur-xl">
                    Haz clic para ampliar
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 text-sm font-semibold text-white opacity-0 backdrop-blur-0 transition duration-300 group-hover:bg-slate-950/38 group-hover:opacity-100 group-hover:backdrop-blur-[2px]">
                    Ver captura
                  </span>
                </button>
              ) : null}
            </div>
          );
        })}

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 text-sm font-bold text-white shadow-lg backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
              aria-label={`Ver captura anterior de ${projectName}`}
              onClick={goToPrevious}
            >
              &lt;
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/45 text-sm font-bold text-white shadow-lg backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
              aria-label={`Ver captura siguiente de ${projectName}`}
              onClick={goToNext}
            >
              &gt;
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[calc(100%-1rem)] -translate-x-1/2 overflow-x-auto rounded-full border border-white/10 bg-slate-950/75 px-2 backdrop-blur-xl">
              {slides.map((image, index) => (
                <button
                  key={`${projectName}-dot-${image || index}`}
                  type="button"
                  className="flex h-8 w-6 shrink-0 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-300/60"
                  aria-label={`Ver captura ${index + 1} de ${projectName}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => setActiveIndex(index)}
                ><span className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? 'bg-cyan-200' : 'bg-white/45 hover:bg-white/70'}`} /></button>
              ))}
            </div>
          </>
        ) : null}
      </div>

      <div className="mx-4 mb-4 flex min-h-11 items-center justify-between gap-3 text-sm text-slate-300">
        <p className="min-w-0" aria-live={isPaused || isStopped || isFocused ? 'polite' : 'off'}>{labels?.[activeIndex] ?? `Captura ${activeIndex + 1}`} <span className="text-slate-400">/ {slides.length}</span></p>
        {slides.length > 1 && !reducedMotion ? <button type="button" className="shrink-0 rounded-lg border border-white/15 px-3 py-2 hover:bg-white/10" aria-label={`${isStopped ? 'Reanudar' : 'Pausar'} carrusel de ${projectName}`} aria-pressed={isStopped} onClick={() => setIsStopped((current) => !current)}>{isStopped ? 'Reanudar' : 'Pausar'}</button> : null}
      </div>

      <ImageLightbox
        screenshots={slides}
        labels={labels}
        initialIndex={lightboxIndex}
        projectName={projectName}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
}

export default ScreenshotCarousel;
