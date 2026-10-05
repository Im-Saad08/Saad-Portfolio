"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
    <div className="mt-6 pt-6 border-t border-gray-100">
      {title && (
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          {title}
        </h4>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="list">
        {images.map((photo, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentIndex(i);
              setSelectedPhoto(photo);
            }}
            className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-200 bg-gray-50 cursor-pointer"
            role="listitem"
            aria-label={photo.caption}
          >
            <Image
              src={photo.image}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 100vw, 300px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex items-end"
              aria-hidden="true"
            >
              <p className="text-xs text-white leading-tight">
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white transition-colors"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white transition-colors"
                aria-label="Previous Photo"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const next = (currentIndex + 1) % images.length;
                  setCurrentIndex(next);
                  setSelectedPhoto(images[next]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white transition-colors"
                aria-label="Next Photo"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          <div
            className="relative max-w-3xl max-h-[75vh] w-full h-[60vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.image}
              alt={selectedPhoto.caption}
              fill
              sizes="(max-width: 1024px) 90vw, 800px"
              className="object-contain"
            />
          </div>

          {selectedPhoto.caption && (
            <p className="mt-3 text-center text-sm text-white/90 max-w-xl px-4">
              {selectedPhoto.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
