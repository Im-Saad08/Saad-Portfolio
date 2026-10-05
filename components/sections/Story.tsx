"use client";

import { useState } from "react";
import {
  Code,
  Brain,
  Database,
  Cpu,
  Server,
  Layers,
  HardDrive,
  PenLine,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { story, learningJourney, storyJourneyCards } from "@/lib/content";
import { JourneyCard } from "@/components/ui/JourneyCard";

const journeyLayerMeta: Record<string, { icon: typeof Cpu; description: string }> = {
  "Hardware Primitives": {
    icon: Cpu,
    description: "Digital logic gates, Verilog RTL, FPGA synthesis, and transistor boundaries",
  },
  "Embedded & Microcontrollers": {
    icon: Layers,
    description: "Bare-metal firmware, PIC16F877A, 8051, UART serial communication, and Proteus simulation",
  },
  "Linux & Operating Systems": {
    icon: HardDrive,
    description: "POSIX Pthreads concurrency, mutexes, CPU schedulers, Embedded Linux & Buildroot",
  },
  "Software & APIs": {
    icon: Server,
    description: "Python 3.12, C/C++, FastAPI REST layers, POSIX threads, Git version control",
  },
  "Data Infrastructure": {
    icon: Database,
    description: "Relational normalization (3NF/BCNF), Neon Cloud PostgreSQL, NumPy, and Power BI",
  },
  "Applied Computer Vision": {
    icon: Brain,
    description: "YOLOv8 edge detection, PaddleOCR PP-OCRv6, ByteTrack, OpenCV, and DIP",
  },
};

export function Story() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardSelect = (index: number | null, action?: boolean | "click") => {
    if (action === true) {
      setHoveredIndex(index);
    } else if (action === false) {
      setHoveredIndex(null);
    } else if (action === "click" || action === undefined) {
      setSelectedIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <>
      <section id="story" className="py-20 md:py-28" aria-labelledby="story-heading">
        <div className="container">
          <header className="mb-12">
            <h2
              id="story-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4"
            >
              Story
            </h2>
            <div className="w-12 h-1 bg-[#00d4aa] rounded-full" />
          </header>

          {/* 2-column layout: Story text on left, card deck on right */}
          <div className="grid md:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative Copy */}
            <div className="space-y-6 text-[#8b95a8] text-base sm:text-lg leading-relaxed">
              <p className="text-[#e8eaf0] text-lg sm:text-xl font-light leading-relaxed">
                {story.opening}
              </p>

              {story.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}

              {story.chapters.length === 0 && (
                <div className="mt-8 p-6 rounded-xl border border-[#1a2438] bg-[#0e162a]/40 text-center">
                  <PenLine size={28} className="mx-auto mb-2 text-[#5a6578]" aria-hidden="true" />
                  <p className="text-sm text-[#8b95a8]">
                    This narrative grows over time — no fabricated anecdotes, only verified engineering milestones.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: 3D Fanning Card Deck */}
            <div className="hidden md:flex flex-col items-center">
              <div
                className="relative h-[430px] w-full max-w-[360px] mx-auto"
                role="list"
                aria-label="Story Journey Cards"
              >
                {storyJourneyCards.map((card, index) => (
                  <JourneyCard
                    key={card.title}
                    card={card}
                    index={index}
                    totalCards={storyJourneyCards.length}
                    selectedIndex={selectedIndex}
                    hoveredIndex={hoveredIndex}
                    onSelect={handleCardSelect}
                  />
                ))}
              </div>

              {/* Navigation Arrows & Dots */}
              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleCardSelect(
                        selectedIndex !== null && selectedIndex > 0
                          ? selectedIndex - 1
                          : storyJourneyCards.length - 1,
                        "click"
                      )
                    }
                    className="p-2 rounded-full bg-[#0e162a] border border-[#1a2438] text-[#8b95a8] hover:text-[#00d4aa] hover:border-[#00d4aa]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
                    aria-label="Previous card"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() =>
                      handleCardSelect(
                        selectedIndex !== null && selectedIndex < storyJourneyCards.length - 1
                          ? selectedIndex + 1
                          : 0,
                        "click"
                      )
                    }
                    className="p-2 rounded-full bg-[#0e162a] border border-[#1a2438] text-[#8b95a8] hover:text-[#00d4aa] hover:border-[#00d4aa]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
                    aria-label="Next card"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-1.5" role="tablist">
                  {storyJourneyCards.map((c, i) => (
                    <button
                      key={c.title}
                      onClick={() => handleCardSelect(i, "click")}
                      className={`h-1.5 rounded-full transition-all ${
                        selectedIndex === i
                          ? "w-6 bg-[#00d4aa]"
                          : "w-2 bg-[#5a6578] hover:bg-[#8b95a8]"
                      }`}
                      aria-label={`Go to ${c.title}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layered Engineering Architecture Breakdown */}
      <section className="py-20 border-t border-[#1a2438]" aria-labelledby="learning-heading">
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="learning-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4"
            >
              Learning Journey & Stack Layers
            </h2>
            <p className="text-base sm:text-lg text-[#8b95a8] max-w-2xl mx-auto">
              My engineering stack spans hardware primitives up through edge AI — each layer builds on the previous.
            </p>
          </header>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#1a2438]" aria-hidden="true" />

            <div className="space-y-10">
              {learningJourney.map((layer) => {
                const meta = journeyLayerMeta[layer.layer] || { icon: Code, description: "" };
                const LayerIcon = meta.icon;

                return (
                  <div key={layer.layer} className="relative pl-14 md:pl-16">
                    <div
                      className="absolute left-5 md:left-6 top-1.5 w-3 h-3 rounded-full bg-[#00d4aa] border-4 border-[#0a0f1d] z-10"
                      aria-hidden="true"
                    />

                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center flex-shrink-0">
                        <LayerIcon size={20} className="text-[#00d4aa]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-[#00d4aa]">{layer.layer}</h3>
                        <p className="text-sm text-[#8b95a8] mt-0.5">{meta.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1" role="list">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-medium text-[#8b95a8] bg-[#0e162a] border border-[#1a2438] rounded-full"
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
