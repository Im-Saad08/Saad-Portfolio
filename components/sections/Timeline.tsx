"use client";

import { useState } from "react";
import {
  Code,
  BookOpen,
  GraduationCap,
  Users,
  Heart,
  Layers,
  Cpu,
  Zap,
} from "lucide-react";
import {
  timeline,
  timelineCategories,
} from "@/lib/content";

const categoryIcons: Record<string, typeof Code> = {
  Engineering: Cpu,
  Projects: Layers,
  Learning: BookOpen,
  University: GraduationCap,
  Leadership: Users,
  Personal: Heart,
};

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  Engineering: { text: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
  Projects: { text: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
  Learning: { text: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30" },
  University: { text: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30" },
  Leadership: { text: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/30" },
  Personal: { text: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/30" },
};

export function Timeline() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTimeline = activeCategory
    ? timeline.filter((t) => t.category === activeCategory)
    : timeline;

  return (
    <section id="timeline" className="py-20 md:py-28" aria-labelledby="timeline-heading">
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="timeline-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4"
          >
            Chronological Journey
          </h2>
          <p className="text-base sm:text-lg text-[#8b95a8] max-w-2xl mx-auto">
            Milestones across hardware, systems software, capstones, and university leadership.
          </p>
        </header>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all ${
              activeCategory === null
                ? "bg-[#00d4aa] text-[#0a0f1d] border-[#00d4aa]"
                : "border-[#1a2438] text-[#8b95a8] hover:text-[#e8eaf0] bg-[#0e162a]"
            }`}
          >
            All Milestones
          </button>
          {timelineCategories.map((cat) => {
            const styles = categoryColors[cat] || categoryColors.Engineering;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(isSelected ? null : cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full border transition-all ${
                  isSelected
                    ? `${styles.bg} ${styles.text} ${styles.border}`
                    : "border-[#1a2438] text-[#8b95a8] hover:text-[#e8eaf0] bg-[#0e162a]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#1a2438]" aria-hidden="true" />

          <div className="space-y-10">
            {filteredTimeline.map((entry) => {
              const CategoryIcon = categoryIcons[entry.category] || Code;
              const styles = categoryColors[entry.category] || categoryColors.Engineering;

              return (
                <article key={entry.id} className="relative pl-14 md:pl-16">
                  <div
                    className={`absolute left-5 md:left-6 top-1.5 w-3 h-3 rounded-full border-4 border-[#0a0f1d] z-10 ${styles.text.replace("text-", "bg-")}`}
                    aria-hidden="true"
                  />

                  <div className="flex items-start gap-3.5 mb-2.5">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${styles.bg} ${styles.border} ${styles.text}`}
                    >
                      <CategoryIcon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${styles.text}`}>
                          {entry.category}
                        </span>
                        <span className="text-[#5a6578]">•</span>
                        <time className="text-xs text-[#8b95a8] font-mono">{entry.date}</time>
                      </div>
                      <h3 className="text-base sm:text-lg font-medium text-[#e8eaf0]">
                        {entry.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#8b95a8] leading-relaxed">
                    {entry.description}
                  </p>

                  {entry.story && (
                    <details className="mt-3 group">
                      <summary className="text-xs sm:text-sm text-[#00d4aa] hover:underline cursor-pointer flex items-center gap-1 font-mono">
                        Technical context
                        <Zap size={12} className="group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="mt-2 text-sm text-[#e8eaf0]/80 leading-relaxed border-l-2 border-[#00d4aa]/30 pl-4 py-1">
                        {entry.story}
                      </div>
                    </details>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
