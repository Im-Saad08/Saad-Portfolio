"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import type { LeadershipGalleryItem } from "@/lib/content";

export function Gallery({
  images = [],
  title,
}: {
  images: LeadershipGalleryItem[];
  title?: string;
}) {
  const [selectedPhoto, setSelectedPhoto] = useState<LeadershipGalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") {
        const next = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(next);
        setSelectedPhoto(images[next]);
      }
      if (e.key === "ArrowRight") {
        const next = (currentIndex + 1) % images.length;
        setCurrentIndex(next);
        setSelectedPhoto(images[next]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentIndex, images]);

  if (images.length === 0) return null;

  return (
    <div className="mt-6 pt-6 border-t border-[#1a2438]">
      {title && (
        <h4 className="text-base font-medium text-[#e8eaf0] mb-4 flex items-center gap-2">
          <Expand size={16} className="text-[#00d4aa]" aria-hidden="true" />
          <span>{title}</span>
        </h4>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list">
        {images.map((photo, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setSelectedPhoto(photo);
            }}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-[#1a2438] bg-[#0a0f1d] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            role="listitem"
            aria-label={photo.caption}
          >
            <Image
              src={photo.image}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex items-end"
              aria-hidden="true"
            >
              <p className="text-xs text-white leading-tight line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prev = (currentIndex - 1 + images.length) % images.length;
                  setCurrentIndex(prev);
                  setSelectedPhoto(images[prev]);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
                aria-label="Previous Photo"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const next = (currentIndex + 1) % images.length;
                  setCurrentIndex(next);
                  setSelectedPhoto(images[next]);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
                aria-label="Next Photo"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-[65vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.caption}
              fill
              sizes="(max-width: 1200px) 90vw, 1000px"
              className="object-contain rounded-lg"
            />
          </div>

          {selectedPhoto.caption && (
            <p className="mt-4 text-center text-sm md:text-base text-white/90 max-w-2xl px-4">
              {selectedPhoto.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
