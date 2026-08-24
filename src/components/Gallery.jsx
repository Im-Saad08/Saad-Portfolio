import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export function Gallery({ images = [], title, className = "" }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const scrollRef = useRef(null);

  const openLightbox = (index) => {
    console.log('Image clicked', index);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  if (!images.length) return null;

  return (
    <>
      <div className={className}>
        {title && (
          <h4 className="text-lg font-medium text-text mb-4 flex items-center gap-2">
            <Expand size={18} className="text-accent" aria-hidden="true" />
            {title}
          </h4>
        )}
        {/* Compact thumbnail carousel — single horizontal scrollable row */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-3 py-2 scrollbar-thin snap-x"
            role="list"
            aria-label={`${title || "Image"} gallery`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0, 212, 170, 0.3) transparent",
              scrollSnapType: "x proximity",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {images.map((item, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative h-44 max-h-52 aspect-video min-w-[220px] max-w-[260px] flex-shrink-0 snap-start cursor-pointer rounded-lg overflow-hidden bg-bg-elevated border border-border group hover:border-accent-border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                role="listitem"
                aria-label={`View ${item.caption || `image ${index + 1}`}`}
              >
                <img
                  src={item.image}
                  alt={item.caption || `Gallery image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-300 pointer-events-none"
                  loading="lazy"
                />
                {/* Gradient overlay with caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true" />
                {item.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none line-clamp-2">
                    {item.caption}
                  </div>
                )}
                {/* Expand icon hint */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true">
                  <Expand size={12} className="text-white" />
                </div>
              </button>
            ))}
          </div>

          {/* Compact overlay navigation arrows — 36px circular buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={scrollLeft}
                className="w-9 h-9 absolute left-1 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white/80 hover:text-white hover:bg-slate-900 hover:border-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-lg shadow-black/30"
                aria-label="Scroll gallery left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={scrollRight}
                className="w-9 h-9 absolute right-1 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white/80 hover:text-white hover:bg-slate-900 hover:border-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-lg shadow-black/30"
                aria-label="Scroll gallery right"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && images.length > 0 && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0" aria-hidden="true" />
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation arrows — compact 36px circular buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white/80 hover:text-white hover:bg-slate-900 hover:border-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-lg shadow-black/30 hidden md:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white/80 hover:text-white hover:bg-slate-900 hover:border-accent/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-lg shadow-black/30 hidden md:block"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Main image */}
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex].image}
              alt={images[lightboxIndex].caption || `Image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {images[lightboxIndex].caption && (
              <div className="absolute -bottom-10 left-0 right-0 text-center text-white/90 text-sm md:text-base px-4">
                {images[lightboxIndex].caption}
              </div>
            )}
          </div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      , document.body)}
    </>
  );
}