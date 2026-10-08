import { sentryxDetails } from "../content";

export function SentryxMetrics() {
  return (
    <section className="my-8">
      <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
        Empirical Verification &amp; Hardware Benchmarks
      </h3>
      <p className="text-base text-gray-600 mb-6 leading-relaxed">
        Rigorously benchmarked across 20+ minute hardware stress runs and 1,765 validation images. Documented in a 22-page IEEE-standard technical manuscript defended before the NESCOM evaluation committee.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {sentryxDetails.benchmarks.map((b, i) => (
          <div key={i}>
            <div className="text-xs text-gray-500 mb-1">
              {b.label}
            </div>
            <div className="font-mono font-bold text-base text-gray-900">
              {b.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
