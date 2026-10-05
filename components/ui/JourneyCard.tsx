"use client";

import { useState } from "react";
import Image from "next/image";
import type { StoryJourneyCard } from "@/lib/content";

interface JourneyCardProps {
  card: StoryJourneyCard;
  index: number;
  totalCards: number;
  selectedIndex: number | null;
  hoveredIndex: number | null;
  onSelect: (index: number | null, action?: boolean | "click") => void;
}

export function JourneyCard({
  card,
  index,
  totalCards,
  selectedIndex,
  hoveredIndex,
  onSelect,
}: JourneyCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isHovered || isFocused;
  const isSelected = selectedIndex === index;
  const isHoveredByOther = hoveredIndex !== null && hoveredIndex !== index;

  const rotations = [-12, -4, 4, 12];
  const baseRotation = rotations[index] || 0;
  const baseX = (index - 1.5) * 64; // Spacing across horizontal axis

  const isFront = isActive || isSelected;
  const isDimmed = isHoveredByOther && !isSelected;

  const cardStyle: React.CSSProperties = {
    zIndex: isFront ? 100 : isDimmed ? 1 : totalCards - index,
    transform: isFront
      ? "rotate(0deg) translateY(-28px) translateX(0) scale(1.03)"
      : isHoveredByOther && !isFront
      ? `rotate(${baseRotation}deg) translateX(${baseX}px) translateY(0px) scale(0.96)`
      : `rotate(${baseRotation}deg) translateX(${baseX}px) translateY(0px)`,
    opacity: isDimmed ? 0.6 : 1,
    filter: isHoveredByOther && !isFront ? "brightness(0.85) saturate(0.7)" : "none",
    boxShadow: isFront
      ? "0 32px 60px -12px rgba(0, 0, 0, 0.7), 0 0 0 2px rgba(0, 212, 170, 0.3)"
      : "0 12px 35px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
    transition:
      "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), z-index 0s, box-shadow 0.35s ease, opacity 0.35s ease, filter 0.35s ease",
  };

  return (
    <article
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[360px] rounded-2xl overflow-hidden bg-[#0e162a] cursor-pointer"
      style={cardStyle}
      onMouseEnter={() => {
        setIsHovered(true);
        onSelect(index, true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onSelect(null, false);
      }}
      onFocus={() => {
        setIsFocused(true);
        onSelect(index, true);
      }}
      onBlur={() => {
        setIsFocused(false);
        onSelect(null, false);
      }}
      onClick={() => onSelect(index, "click")}
      tabIndex={0}
      role="listitem"
      aria-label={card.title}
    >
      {/* Header Badge */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-[#8b95a8] bg-[#0e162a]/95 border border-[#1a2438] rounded-full backdrop-blur-sm whitespace-nowrap shadow-lg z-20"
        style={{
          transform: isFront ? "rotate(0deg)" : `rotate(${baseRotation}deg)`,
          transformOrigin: "center bottom",
        }}
        aria-hidden="true"
      >
        {card.title}
      </div>

      {/* Top Media Section (60%) */}
      <div className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden bg-[#0a0f1d]">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="260px"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0e162a] via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Border overlay */}
      <div className="absolute inset-0 border border-[#1a2438] pointer-events-none rounded-2xl" aria-hidden="true" />

      {/* Bottom Content Section (40%) */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] flex flex-col justify-end p-5 bg-gradient-to-t from-[#0e162a] via-[#0e162a]/90 to-transparent">
        <h3 className="text-base font-semibold text-[#e8eaf0] mb-1.5 leading-snug">
          {card.title}
        </h3>
        <p className="text-xs text-[#8b95a8] leading-relaxed line-clamp-3">
          {card.description}
        </p>
      </div>
    </article>
  );
}
