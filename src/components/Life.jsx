import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Camera, Image as ImageIcon, Calendar, Heart, Users, Music, Coffee, Plane, ChevronLeft, ChevronRight, X } from "lucide-react";
import { lifeEntries, lifeCategories, lifePlaceholder, leadership } from "../data/portfolio";

const categoryIcons = {
  "University Memories": Users,
  Events: Calendar,
  Trips: Plane,
  Milestones: Heart,
  "Student Life": Coffee,
  "Hobbies & Interests": Music,
  Community: Heart,
};

export function Life() {
  const reducedMotion = useReducedMotion();
  const [lifeRef, isVisible] = useIntersectionObserver({ triggerOnce: true });
  const [leadershipRef, leadershipVisible] = useIntersectionObserver({ triggerOnce: true });
  const [selectedImg, setSelectedImg] = useState(null);
  const galleryRefs = useRef({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg]);

  return (
    <>
      <section
        id="life"
        ref={lifeRef}
        className="py-20 md:py-28"
        aria-labelledby="life-heading"
      >
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="life-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
                isVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Life
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                isVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              The things that happen between the commits — moments, people, places, and
              memories worth keeping.
            </p>
          </header>

          {/* Life entries grid — architecture ready for photos + stories */}
          {lifeEntries.length > 0 ? (
            <div className="space-y-12">
              {lifeCategories.map((category) => {
                const categoryEntries = lifeEntries.filter((e) => e.category === category);
                if (categoryEntries.length === 0) return null;
                const CategoryIcon = categoryIcons[category] || ImageIcon;
                return (
                  <div
                    key={category}
                    className={`${
                      isVisible ? "animate-reveal-up" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-xl font-medium text-text mb-6 flex items-center gap-2">
                      <CategoryIcon size={22} className="text-accent" aria-hidden="true" />
                      {category}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryEntries.map((entry, index) => (
                        <article
                          key={entry.id || index}
                          className="group relative rounded-xl border border-border bg-bg-elevated/50 overflow-hidden hover:border-accent-border transition-all duration-300"
                        >
                          {entry.image && (
                            <div className="relative aspect-video overflow-hidden">
                              <img
                                src={entry.image}
                                alt={entry.caption || entry.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          )}
                          <div className="p-5">
                            <div className="flex items-center gap-2 text-xs text-text-subtle mb-2">
                              {entry.date && (
                                <>
                                  <Calendar size={12} className="text-accent/70" aria-hidden="true" />
                                  <time>{entry.date}</time>
                                </>
                              )}
                              <span className="px-2 py-0.5 text-xs bg-accent-bg text-accent border border-accent-border rounded-full">
                                {entry.category}
                              </span>
                            </div>
                            <h4 className="text-lg font-medium text-text mb-2">{entry.title}</h4>
                            <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                              {entry.description}
                            </p>
                            {entry.story && (
                              <button
                                className="mt-3 text-sm text-accent hover:underline flex items-center gap-1"
                                aria-label={`Read full story about ${entry.title}`}
                              >
                                Read more
                                <ImageIcon size={12} />
                              </button>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Placeholder while Life is empty
            <div
              className={`max-w-2xl mx-auto p-12 rounded-2xl border border-border bg-bg-elevated/30 text-center ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-bg border border-accent-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Camera size={32} className="text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-medium text-text mb-3">{lifePlaceholder.title}</h3>
              <p className="text-text-muted leading-relaxed">{lifePlaceholder.description}</p>
            </div>
          )}

          {/* Categories legend — shows what this section will eventually hold */}
          <div
            className={`mt-16 p-6 rounded-xl border border-border bg-bg-elevated/30 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "400ms" }}
          >
            <h4 className="text-lg font-medium text-text mb-4 text-center">
              Categories this archive will grow into
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {lifeCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1.5 text-sm text-text-muted bg-bg border border-border rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Community — integrated into Life as part of the story */}
      <section
        ref={leadershipRef}
        className="py-20 md:py-28 border-t border-border"
        aria-labelledby="leadership-life-heading"
      >
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="leadership-life-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
                leadershipVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Community & Leadership
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                leadershipVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              {leadership.intro}
            </p>
          </header>

          <div className="space-y-8">
            {leadership.organizations.map((org, orgIndex) => (
              <article
                key={org.key}
                className={`relative p-6 md:p-8 rounded-2xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300 ${
                  leadershipVisible ? "animate-card-entrance" : "opacity-0"
                }`}
                style={{ animationDelay: reducedMotion ? "0ms" : `${orgIndex * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Logo */}
                  {org.logo && (
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white p-2 border border-slate-700/50 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={org.logo}
                        alt={`${org.organization} logo`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-full h-full items-center justify-center hidden"
                        style={{ display: "none" }}
                      >
                        <Users size={24} className="text-accent/50" aria-hidden="true" />
                      </div>
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-text">{org.role}</h3>
                      <span className="px-3 py-1 text-sm font-medium text-accent bg-accent-bg border border-accent-border rounded-full">
                        {org.organization}
                      </span>
                    </div>
                    {org.fullName && (
                      <p className="text-text-muted mb-3">{org.fullName}</p>
                    )}
                    <p className="text-text/80 leading-relaxed mb-4">{org.description}</p>

                    {org.website && (
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dim hover:underline transition-colors focus-visible"
                      >
                        Visit website
                        <ImageIcon size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Photo gallery for this organization — responsive grid 3 columns with lightbox & scroll arrows */}
                {org.galleryTitle && org.gallery.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-lg font-medium text-text mb-4">{org.galleryTitle}</h4>
                    <div className="relative">
                      {/* Scroll navigation arrows */}
                      <div className="absolute inset-0 pointer-events-none -ml-2 mr-2">
                        <button
                          onClick={() => galleryRefs.current[org.key]?.scrollBy({ left: -300, behavior: "smooth" })}
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition pointer-events-auto hidden sm:block shadow-lg shadow-black/30"
                          aria-label="Scroll gallery left"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          onClick={() => galleryRefs.current[org.key]?.scrollBy({ left: 300, behavior: "smooth" })}
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 text-white flex items-center justify-center hover:bg-slate-800 transition pointer-events-auto hidden sm:block shadow-lg shadow-black/30"
                          aria-label="Scroll gallery right"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                      <div
                        ref={(el) => { galleryRefs.current[org.key] = el; }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full overflow-x-auto scrollbar-hide snap-x p-1 -ml-1 mr-1"
                        style={{ scrollSnapType: "x proximity" }}
                        role="list"
                        aria-label={`${org.galleryTitle} gallery`}
                      >
                        {org.gallery.map((photo, photoIndex) => (
                          <button
                            key={photoIndex}
                            onClick={() => setSelectedImg(photo)}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-bg group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg snap-start min-w-0"
                            aria-label={`View ${photo.caption || `image ${photoIndex + 1}`}`}
                          >
                            <img
                              src={photo.image}
                              alt={photo.caption}
                              className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {photo.caption && (
                              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-2 pt-4 pb-2.5 z-10 pointer-events-none">
                                <p className="text-[10px] sm:text-[11px] leading-tight text-white font-normal">{photo.caption}</p>
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Placeholder for empty gallery */}
                {org.galleryTitle && org.gallery.length === 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-text-subtle text-center py-8">
                      Photo gallery coming soon — add images to <code className="px-1.5 py-0.5 bg-bg rounded text-text-muted">{org.key}.gallery</code> in portfolio.js
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={() => setSelectedImg(null)}
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-[90vw] max-h-[85vh] flex-shrink-0" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImg.image}
              alt={selectedImg.caption || "Gallery image"}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            {selectedImg.caption && (
              <div className="mt-4 text-center text-white/90 text-sm md:text-base px-4 max-w-[90vw]">
                {selectedImg.caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}