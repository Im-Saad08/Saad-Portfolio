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
      "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded hover:bg-primary-hover transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonPrimarySm:
      "inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-mono font-medium rounded hover:bg-primary-hover transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonSecondary:
      "inline-flex items-center gap-2 px-4 py-2.5 border border-border bg-surface text-ink text-sm font-medium rounded hover:bg-surface-subtle hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonSecondarySm:
      "inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-surface-subtle text-ink text-xs font-mono font-medium rounded hover:bg-surface-recessed hover:border-border-strong transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonTertiary:
      "inline-flex items-center gap-2 px-4 py-2.5 border border-primary/30 bg-primary/5 text-primary text-xs font-mono font-medium rounded hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    buttonGhost:
      "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus",
    linkText:
      "font-semibold text-ink hover:text-primary inline-flex items-center gap-1.5 transition-colors",
    linkMono:
      "inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink hover:text-primary transition-colors",

    // Cards & Content Wells
    card:
      "p-6 sm:p-7 rounded-xl bg-surface border border-border shadow-xs hover:border-border-strong transition-all",
    cardLg:
      "p-7 sm:p-8 rounded-2xl bg-surface border border-border shadow-xs hover:border-border-strong transition-all",
    cardCompact:
      "p-5 rounded-xl bg-surface border border-border shadow-xs",
    cardStatic:
      "p-6 rounded-xl bg-surface border border-border shadow-xs",

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
      "px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle text-ink-muted border border-border/60",
    chipLg:
      "px-2.5 py-1 rounded text-xs font-mono bg-surface-subtle text-ink border border-border/70 font-medium",
    badgeFlagship:
      "px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold text-[11px] font-mono",
    badgePrimary:
      "px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold text-[11px] font-mono",
    benchmarkCallout:
      "p-2.5 rounded bg-surface-subtle border border-border flex items-center gap-2 text-xs font-mono",

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
