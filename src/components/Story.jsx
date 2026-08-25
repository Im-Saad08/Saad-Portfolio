import { useState } from "react";
import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import {
  Code,
  Brain,
  Database,
  Cpu,
  Server,
  Microscope,
  Layers,
  HardDrive,
  PenLine,
  Eye,
  Terminal,
} from "lucide-react";
import { story, learningJourney, storyJourneyCards } from "../data/portfolio";
import { JourneyCard } from "./JourneyCard";

const journeyLayerMeta = {
  Hardware: { icon: Cpu, description: "Foundation in digital circuits and microcontroller architecture" },
  "Embedded Systems": { icon: Layers, description: "Bare-metal programming, RTOS concepts, and hardware interfaces" },
  "Linux & Systems": { icon: HardDrive, description: "OS internals, kernel, filesystems, and cross-compilation" },
  Software: { icon: Server, description: "Application development, version control, and backend systems" },
  "Data & Scientific": { icon: Microscope, description: "Numerical computing, statistics, and data visualization" },
  "AI & Computer Vision": { icon: Brain, description: "Deep learning, computer vision, and intelligent systems" },
};


export function Story() {
  const reducedMotion = useReducedMotion();
  const [storyRef, isVisible] = useIntersectionObserver({ triggerOnce: true });
  const [journeyRef, journeyVisible] = useIntersectionObserver({ triggerOnce: true });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardSelect = (index, action) => {
    // If only index is passed (from arrow buttons / pagination dots), treat as click selection
    if (action === true) {
      // Hover/focus enter
      setHoveredIndex(index);
    } else if (action === false) {
      // Hover/focus leave
      setHoveredIndex(null);
    } else if (action === 'click' || action === undefined) {
      // Click - toggle selection (or direct selection from nav controls)
      setSelectedIndex(prev => prev === index ? null : index);
    }
  };

  return (
    <>
      <section
        id="story"
        ref={storyRef}
        className="py-20 md:py-28"
        aria-labelledby="story-heading"
      >
        <div className="container">
          <header className="mb-12">
            <h2
              id="story-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-6 ${
                isVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Story
            </h2>
          </header>

          {/* 2-column layout: text left, journey cards right */}
          <div className="grid md:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            {/* Left Column — Story Text */}
            <div className="prose prose-invert max-w-none space-y-8">
              <p
                className={`text-lg md:text-xl text-text/80 leading-relaxed ${
                  isVisible ? "animate-text-reveal-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: reducedMotion ? "0ms" : "100ms" }}
              >
                {story.opening}
              </p>

              {story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-text-muted leading-relaxed ${
                    isVisible ? "animate-text-reveal-stagger" : "opacity-0"
                  }`}
                  style={{ animationDelay: reducedMotion ? "0ms" : `${200 + index * 150}ms` }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Future chapters — rendered when real content exists */}
              {story.chapters.length > 0 && (
                <div
                  className={`space-y-6 mt-12 ${
                    isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: reducedMotion ? "0ms" : "600ms" }}
                >
                  <h3 className="text-xl font-medium text-text">Chapters</h3>
                  {story.chapters.map((chapter, idx) => (
                    <article
                      key={chapter.slug || idx}
                      className="p-6 rounded-xl border border-border bg-bg-elevated/50"
                    >
                      <time className="text-sm text-text-subtle mb-2 block">{chapter.date}</time>
                      <h4 className="text-lg font-medium text-text mb-2">{chapter.title}</h4>
                      <p className="text-text-muted leading-relaxed">{chapter.content}</p>
                    </article>
                  ))}
                </div>
              )}

              {story.chapters.length === 0 && (
                <div
                  className={`mt-12 p-6 rounded-xl border border-border bg-bg-elevated/30 text-center ${
                    isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: reducedMotion ? "0ms" : "600ms" }}
                >
                  <PenLine size={32} className="mx-auto mb-3 text-text-subtle" aria-hidden="true" />
                  <p className="text-text-muted">
                    This story is still being written. Chapters will appear here as they happen —
                    no fabricated narratives, only real moments.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column — Fanning Card Deck */}
            <div className="hidden md:block">
              <div
                className={`relative h-[460px] w-full max-w-[380px] mx-auto ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: reducedMotion ? "0ms" : "200ms" }}
                role="list"
                aria-label="Journey cards"
              >
                {storyJourneyCards.map((card, index) => (
                  <JourneyCard
                    key={card.title}
                    card={card}
                    index={index}
                    totalCards={storyJourneyCards.length}
                    reducedMotion={reducedMotion}
                    baseDelay={250}
                    selectedIndex={selectedIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={handleCardSelect}
                  />
                ))}
              </div>

              {/* Navigation Controls */}
              <div
                className={`mt-3 flex flex-col items-center gap-2 ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: reducedMotion ? "0ms" : "400ms" }}
              >
                {/* Arrow Controls */}
                <div className="flex items-center gap-4" role="navigation" aria-label="Card navigation">
                  <button
                    onClick={() => handleCardSelect((selectedIndex !== null && selectedIndex > 0) ? selectedIndex - 1 : storyJourneyCards.length - 1)}
                    className="p-2 rounded-full bg-bg-elevated border border-border text-text-muted hover:text-accent hover:border-accent-border hover:bg-accent-bg transition-all duration-300 focus-visible outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    aria-label="Previous card"
                    aria-disabled={storyJourneyCards.length === 0}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button
                    onClick={() => handleCardSelect((selectedIndex !== null && selectedIndex < storyJourneyCards.length - 1) ? selectedIndex + 1 : 0)}
                    className="p-2 rounded-full bg-bg-elevated border border-border text-text-muted hover:text-accent hover:border-accent-border hover:bg-accent-bg transition-all duration-300 focus-visible outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    aria-label="Next card"
                    aria-disabled={storyJourneyCards.length === 0}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2" role="tablist" aria-label="Card pagination">
                  {storyJourneyCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleCardSelect(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                        selectedIndex === index
                          ? "bg-accent w-6"
                          : "bg-text-subtle hover:bg-text-muted"
                      }`}
                      role="tab"
                      aria-selected={selectedIndex === index}
                      aria-label={`Go to ${storyJourneyCards[index]?.title || `card ${index + 1}`}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={journeyRef}
        className="py-20 md:py-28 border-t border-border"
        aria-labelledby="journey-heading"
      >
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="journey-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
                journeyVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Learning Journey
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                journeyVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              My engineering background spans hardware through AI — each layer builds on the previous
            </p>
          </header>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

            <div className="space-y-12">
              {learningJourney.map((layer, layerIndex) => {
                const meta = journeyLayerMeta[layer.layer] || { icon: Code, description: "" };
                const LayerIcon = meta.icon;
                return (
                  <div
                    key={layer.layer}
                    className={`relative pl-14 md:pl-16 ${
                      journeyVisible ? "animate-reveal-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: reducedMotion ? "0ms" : `${layerIndex * 200}ms` }}
                  >
                    <div className="absolute left-5 md:left-6 top-1 w-3 h-3 rounded-full bg-accent border-4 border-bg z-10" aria-hidden="true" />
                    <div className="absolute left-5 md:left-6 top-1 w-3 h-3 rounded-full bg-accent/30 animate-pulse-slow" aria-hidden="true" />

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0">
                        <LayerIcon size={20} className="text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-accent">{layer.layer}</h3>
                        <p className="text-sm text-text-muted mt-0.5">{meta.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 entrance-wrapper" role="list" aria-label={`${layer.layer} skills`}>
                      {layer.items.map((item, itemIndex) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-medium text-text-muted bg-bg-elevated border border-border rounded-full"
                          role="listitem"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}