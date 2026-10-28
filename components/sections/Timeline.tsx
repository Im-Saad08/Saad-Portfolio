import { theme } from "@/lib/theme";
import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <div id="timeline" aria-labelledby="timeline-heading">
      <div className="mb-8">
        <p className={`${theme.styles.kicker} mb-1`}>
          Chronological Track Record
        </p>
        <h2 id="timeline-heading" className="text-2xl font-bold tracking-tight text-ink">
          Milestones &amp; Experience
          <span className={theme.styles.headingDot}>.</span>
        </h2>
        <p className="text-sm text-ink-muted mt-1">
          Academic progression, NESCOM placement defense, and student humanitarian leadership.
        </p>
      </div>

      <div className="relative border-l border-border ml-3 pl-6 sm:pl-8 space-y-8">
        {timeline.map((entry) => (
          <article key={entry.id} className="relative group">
            {/* Timeline Node Anchor */}
            <span
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-canvas border-2 border-ink group-hover:border-primary group-hover:bg-primary transition-colors"
              aria-hidden="true"
            />

            <div className={theme.styles.cardCompact}>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-ink-subtle mb-2">
                <span className="font-semibold text-ink">{entry.date}</span>
                <span>·</span>
                <span className="px-1.5 py-0.5 rounded bg-surface-subtle text-ink-muted">
                  {entry.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-ink mb-2">
                {entry.title}
              </h3>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-3">
                {entry.description}
              </p>

              {entry.story && (
                <div className="p-3 rounded-lg bg-surface-subtle border-l-2 border-primary text-xs text-ink-muted italic leading-relaxed">
                  &ldquo;{entry.story}&rdquo;
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
