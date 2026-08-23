import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export function Gallery({ images = [], title, className = "" }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
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
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          role="list"
          aria-label={`${title || "Image"} gallery`}
        >
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-bg-elevated border border-border group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              role="listitem"
              aria-label={`View ${item.caption || `image ${index + 1}`}`}
            >
              <img
                src={item.image}
                alt={item.caption || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Gradient overlay with caption on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-full group-hover:translate-y-0">
                  {item.caption}
                </div>
              )}
              {/* Expand icon hint */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                <Expand size={14} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hidden md:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent hidden md:block"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Main image */}
          <div className="relative max-w-[90vw] max-h-[85vh]">
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
      )}
    </>
  );
}