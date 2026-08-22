import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, GitBranch, ExternalLink, Download, Monitor } from "lucide-react";

export function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Early return guard - must be before any project property access
  if (!isOpen || !project) return null;

  const images = project.images || [];
  const hasImages = images.length > 0;

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg/90 backdrop-blur-sm animate-fade-in"
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-border bg-bg-elevated animate-card-entrance flex flex-col"
      >
        {/* Header */}
        <header className="flex items-start justify-between gap-4 p-6 border-b border-border">
          <div>
            <h2 id="modal-title" className="text-2xl font-semibold text-text">
              {project.title}
            </h2>
            <p className="text-sm text-accent mt-1">{project.category}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-muted hover:text-text hover:bg-border transition-colors focus-visible flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </header>

        {/* Image Gallery */}
        {hasImages && (
          <div className="relative flex-1 overflow-hidden bg-bg">
            <div className="relative h-full w-full">
              <img
                src={images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1} of ${images.length}`}
                className="w-full h-[60vh] max-h-[60vh] object-cover"
                loading="lazy"
              />
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/80 backdrop-blur-sm border border-border text-text hover:bg-accent-bg hover:text-accent hover:border-accent-border transition-all duration-300 focus-visible"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bg/80 backdrop-blur-sm border border-border text-text hover:bg-accent-bg hover:text-accent hover:border-accent-border transition-all duration-300 focus-visible"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentImageIndex
                        ? "bg-accent w-6"
                        : "bg-text-muted/50 hover:bg-text-muted"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="grid gap-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-medium text-text mb-2">Overview</h3>
              <p className="text-text-muted leading-relaxed whitespace-pre-line">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-medium text-text mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium text-text-muted bg-bg border border-border rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent-bg border border-accent-border text-accent font-medium rounded-lg hover:bg-accent/20 hover:border-accent transition-colors focus-visible"
                >
                  <GitBranch size={16} />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-bg font-medium rounded-lg hover:bg-accent-dim transition-colors focus-visible"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              <a
                href={project.heroImage}
                download
                className="inline-flex items-center gap-2 px-4 py-2 border border-border text-text font-medium rounded-lg hover:bg-border transition-colors focus-visible"
              >
                <Download size={16} />
                Download Hero Image
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}