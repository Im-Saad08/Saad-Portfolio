// ============================================================
// MOHTARM SAAD — Single Source of Truth for Theme & Design System
// Centralizes all color tokens, semantic roles, and UI component presets.
// Modifying this single file updates the entire application styling.
// ============================================================

export const theme = {
  /**
   * Raw & semantic color definitions.
   * Mirrors Tailwind CSS variables in app/globals.css.
   */
  colors: {
    // 1. Canvas & Surface (Warm Off-White)
    canvas: "#faf9f5",
    surface: "#ffffff",
    surfaceSubtle: "#f2f0e8",
    surfaceRecessed: "#eae6dd",

    // 2. Text & Structural Neutral Elements (Near-Black & Slate)
    ink: "#11161b",
    inkMuted: "#4c5562",
    inkSubtle: "#6e7787",
    border: "#e5e2d9",
    borderSubtle: "#efece5",
    borderStrong: "#cfccc2",

    // 3. Secondary Brand Colour (Brand Green Accent)
    primary: "#185a37",
    primaryHover: "#103f27",
    primarySubtle: "#eaf2ec",
    focus: "#185a37",
  },

  /**
   * Reusable CSS class presets for consistent, scalable UI patterns.
   * Keeps JSX concise, readable, and free of duplicated styling strings.
   */
  styles: {
    // Action CTAs
    buttonPrimary:
      "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonPrimarySm:
      "inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-mono font-medium rounded-md hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonSecondary:
      "inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-surface text-ink text-sm font-medium rounded-lg hover:bg-surface-subtle hover:border-border-strong hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonSecondarySm:
      "inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-surface-subtle text-ink text-xs font-mono font-medium rounded-md hover:bg-surface-recessed hover:border-border-strong transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonTertiary:
      "inline-flex items-center gap-2 px-4 py-2.5 border border-primary/30 bg-primary/5 text-primary text-xs font-mono font-medium rounded-lg hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonGhost:
      "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink hover:bg-surface-subtle/70 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    linkText:
      "font-semibold text-ink hover:text-primary inline-flex items-center gap-1.5 transition-colors",
    linkMono:
      "inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink hover:text-primary transition-colors",

    // Cards & Content Wells
    card:
      "p-6 sm:p-7 rounded-2xl bg-surface border border-border/80 shadow-[0_2px_12px_rgba(17,22,27,0.03)] hover:shadow-[0_4px_20px_rgba(24,90,55,0.06)] hover:border-border-strong transition-all duration-300",
    cardLg:
      "p-7 sm:p-8 rounded-2xl bg-surface border border-border/80 shadow-[0_2px_12px_rgba(17,22,27,0.03)] hover:shadow-[0_4px_20px_rgba(24,90,55,0.06)] hover:border-border-strong transition-all duration-300",
    cardCozy:
      "p-6 sm:p-8 rounded-2xl bg-surface border border-border/80 shadow-[0_2px_12px_rgba(17,22,27,0.03)] hover:shadow-[0_4px_20px_rgba(24,90,55,0.06)] hover:border-border-strong transition-all duration-300",
    cardElevated:
      "p-7 sm:p-9 rounded-3xl bg-surface border border-border shadow-[0_4px_24px_rgba(17,22,27,0.04)] hover:shadow-[0_8px_32px_rgba(24,90,55,0.08)] hover:border-primary/40 transition-all duration-300",
    cardCompact:
      "p-5 rounded-xl bg-surface border border-border shadow-xs",
    cardStatic:
      "p-6 rounded-2xl bg-surface border border-border/80 shadow-[0_2px_10px_rgba(17,22,27,0.02)]",
    quoteCozy:
      "p-5 sm:p-6 rounded-2xl bg-surface-subtle/80 border border-border/70 text-sm text-ink-muted leading-relaxed italic",

    // Typography
    kicker:
      "text-xs font-mono font-medium uppercase tracking-wider text-ink-subtle",
    headingDot:
      "text-primary font-bold select-none",
    body:
      "text-sm sm:text-base text-ink-muted leading-relaxed",
    bodyLg:
      "text-base sm:text-lg text-ink-muted leading-relaxed",

    // Chips, Badges & Indicators
    chip:
      "px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-subtle text-ink-muted border border-border/60",
    chipLg:
      "px-3 py-1.5 rounded-lg text-xs font-mono bg-surface-subtle text-ink border border-border/70 font-medium",
    badgeFlagship:
      "px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold text-[11px] font-mono",
    badgePrimary:
      "px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold text-[11px] font-mono",
    badgeWarm:
      "px-2.5 py-1 rounded-full bg-surface-subtle border border-border text-ink-muted font-medium text-xs font-mono",
    statusPill:
      "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono shadow-2xs",
    benchmarkCallout:
      "p-3 rounded-xl bg-surface-subtle border border-border/70 flex items-center gap-2.5 text-xs font-mono",

    // Structural Dividers
    sectionDivider:
      "border-b border-border",
    sectionHeader:
      "flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-3 pb-4 border-b border-border",
    hairlineDivider:
      "border-t border-border-subtle",
    topDivider:
      "border-t border-border",
  },
} as const;

export type Theme = typeof theme;
