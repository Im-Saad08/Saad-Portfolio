import { useState } from "react";
import { useReducedMotion } from "../hooks/useIntersectionObserver";

export function JourneyCard({ card, index, totalCards, reducedMotion, baseDelay, selectedIndex, onSelect, hoveredIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isHovered || isFocused;
  const isSelected = selectedIndex === index;
  const isHoveredByOther = hoveredIndex !== null && hoveredIndex !== index;

  // Fixed rotation angles for 4 cards: -12, -4, 4, 12
  const rotations = [-12, -4, 4, 12];
  const baseRotation = rotations[index] || 0;

  // Increased horizontal spread so each card's edge/tab is distinctly exposed
  const baseX = (index - 1.5) * 72; // -108, -36, 36, 108
  const baseY = 0;

  // Hover: bring to front (z-index: 100), lift up, un-rotate
  // Selected: stay at front, lifted, un-rotated
  const isFront = isActive || isSelected;

  const transform = isFront
    ? "rotate(0deg) translateY(-30px) translateX(0) scale(1.03)"
    : `rotate(${baseRotation}deg) translateX(${baseX}px) translateY(${baseY}px)`;

  // Non-hovered cards get dimmed/pushed back when another card is hovered
  const isDimmed = isHoveredByOther && !isSelected;

  const cardStyle = {
    transform,
    zIndex: isFront ? 100 : (isDimmed ? 1 : totalCards - index),
    transition: reducedMotion
      ? "none"
      : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), z-index 0s, box-shadow 0.35s ease, opacity 0.35s ease, filter 0.35s ease",
    opacity: isDimmed ? 0.6 : (isSelected ? 1 : (isActive ? 1 : 0.95)),
    filter: isDimmed ? "brightness(0.85) saturate(0.7)" : (isSelected || isActive ? "none" : "brightness(0.95)"),
    transform: isDimmed && !isFront
      ? `rotate(${baseRotation}deg) translateX(${baseX}px) translateY(${baseY}px) scale(0.96)`
      : transform,
    boxShadow: isFront
      ? "0 32px 60px -12px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(0, 212, 170, 0.2)"
      : isDimmed
        ? "0 4px 15px -5px rgba(0, 0, 0, 0.3)"
        : "0 12px 35px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.04)",
    animationDelay: reducedMotion ? "0ms" : `${baseDelay + index * 80}ms`,
  };

  return (
    <article
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[360px] rounded-2xl overflow-hidden bg-bg-elevated cursor-pointer"
      style={cardStyle}
      onMouseEnter={() => { setIsHovered(true); onSelect(index, true); }}
      onMouseLeave={() => { setIsHovered(false); onSelect(null, false); }}
      onFocus={() => { setIsFocused(true); onSelect(index, true); }}
      onBlur={() => { setIsFocused(false); onSelect(null, false); }}
      onClick={() => onSelect(index, 'click')}
      tabIndex={0}
      role="listitem"
      aria-label={card.title}
      aria-selected={isSelected}
      aria-pressed={isSelected}
    >
      {/* Top header tag - visible on fanned edge */}
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium text-text-muted bg-bg-elevated/95 border border-border rounded-full backdrop-blur-sm whitespace-nowrap shadow-lg"
        style={{
          transform: isFront ? "rotate(0deg)" : `rotate(${baseRotation}deg)`,
          transformOrigin: "center bottom",
          opacity: isDimmed ? 0.5 : 1,
          transition: reducedMotion ? "none" : "opacity 0.35s ease, transform 0.35s ease",
        }}
        aria-hidden="true"
      >
        {card.title}
      </div>

      {/* ===== TOP SECTION (60%) - IMAGE ONLY ===== */}
      <div className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden">
        {/* Image background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url(${card.image})`,
            transform: isFront ? "scale(1.05)" : "scale(1)",
          }}
          aria-hidden="true"
        />
        {/* Fallback for missing images */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-bg-elevated/50 to-accent-bg/20" aria-hidden="true" />
        {/* Subtle vignette at bottom of image section */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-bg/40 to-transparent" aria-hidden="true" />
      </div>

      {/* Subtle border overlay */}
      <div className="absolute inset-0 border border-border/50 pointer-events-none" aria-hidden="true" />

      {/* ===== BOTTOM SECTION (40%) - TITLE + DESCRIPTION ===== */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] flex flex-col justify-start p-5">
        {/* Gradient backdrop for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/98 via-bg/60 to-transparent" aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col justify-end">
          <h3 className="text-base font-medium text-text mb-1.5 leading-snug">{card.title}</h3>
          <p className="text-xs text-text-muted leading-relaxed">{card.description}</p>
        </div>
      </div>
    </article>
  );
}