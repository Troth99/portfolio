"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: GalleryImage[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isViewerOpen = activeIndex !== null;

  useEffect(() => {
    if (!isViewerOpen) return;

    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
    };

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyStyles.overflow;
      document.body.style.paddingRight = previousBodyStyles.paddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isViewerOpen, images.length]);

  const showPrevious = () => setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((current) => current === null ? null : (current + 1) % images.length);

  return (
    <>
      <div className="grid gap-2.5 p-2.5">
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="group/image relative aspect-[16/8.5] cursor-zoom-in overflow-hidden rounded-lg border border-white/10 bg-white text-left"
          aria-label={`Open ${images[0].alt}`}
        >
          <Image src={images[0].src} alt={images[0].alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover object-top transition duration-500 group-hover/image:scale-[1.015]" />
          <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 text-[10px] font-medium text-white opacity-0 backdrop-blur transition group-hover/image:opacity-100">View full size</span>
        </button>

        <div className="grid grid-cols-4 gap-2">
          {images.slice(1).map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index + 1)}
              className="group/image relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-md border border-white/10 bg-white"
              aria-label={`Open ${image.alt}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 10vw, 22vw" className="object-cover object-top transition duration-300 group-hover/image:scale-105" />
              <span className="absolute inset-0 bg-cyan-300/0 transition group-hover/image:bg-cyan-300/10" />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-10"
          onClick={() => setActiveIndex(null)}
        >
          <div className="absolute left-5 top-5 font-mono text-xs text-zinc-400 sm:left-10 sm:top-8">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
          <button type="button" onClick={() => setActiveIndex(null)} className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-xl text-white transition hover:bg-white/15 sm:right-10 sm:top-8" aria-label="Close image viewer">×</button>
          <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} className="absolute left-3 z-10 flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-2xl text-white transition hover:bg-white/15 sm:left-8" aria-label="Previous screenshot">‹</button>

          <div className="relative h-[78vh] w-[88vw] max-w-7xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="90vw"
              className="select-none object-contain"
              draggable={false}
              preload
            />
          </div>

          <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} className="absolute right-3 z-10 flex size-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-2xl text-white transition hover:bg-white/15 sm:right-8" aria-label="Next screenshot">›</button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xs text-zinc-400 sm:bottom-8">{images[activeIndex].alt}</p>
        </div>
      )}
    </>
  );
}
