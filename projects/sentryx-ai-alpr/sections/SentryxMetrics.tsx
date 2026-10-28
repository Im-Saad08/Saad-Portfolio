import { sentryxDetails } from "../content";

export function SentryxMetrics() {
  return (
    <section className="my-10">
      <h3 className="text-lg sm:text-xl font-bold text-ink mb-2 tracking-tight">
        Empirical Verification &amp; Hardware Benchmarks
      </h3>
      <p className="text-sm text-ink-muted mb-6 leading-relaxed">
        Rigorously benchmarked across 20+ minute continuous hardware stress runs and 1,765 validation images. Documented in a 22-page IEEE-standard technical manuscript defended before the NESCOM evaluation committee.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
        {sentryxDetails.benchmarks.map((b, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-surface border border-border shadow-xs"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-ink-subtle mb-1">
              {b.label}
            </div>
            <div className="font-mono font-bold text-base sm:text-lg text-ink">
              {b.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
