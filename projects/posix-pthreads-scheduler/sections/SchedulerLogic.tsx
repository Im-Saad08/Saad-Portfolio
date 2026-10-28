import { schedulerDetails } from "../content";
import { theme } from "@/lib/theme";

export function SchedulerLogic() {
  return (
    <section className="space-y-6 pt-4">
      <div className="p-4 rounded-lg bg-surface-subtle border border-border text-xs font-mono text-ink">
        <span className="text-ink-subtle">Academic Coursework: </span>
        <span className="font-semibold">{schedulerDetails.course}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight pt-2">
        Concurrency Architecture &amp; Scheduling Algorithms
      </h2>

      <p className={theme.styles.body}>
        {schedulerDetails.summary}
      </p>

      {/* POSIX Primitives */}
      <div className="my-6 p-5 rounded-xl bg-surface border border-border shadow-xs">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-subtle mb-3">
          Low-Level POSIX C Primitives Implemented
        </h3>
        <div className="flex flex-wrap gap-2">
          {schedulerDetails.primitives.map((prim) => (
            <span
              key={prim}
              className={theme.styles.chipLg}
            >
              {prim}
            </span>
          ))}
        </div>
      </div>

      {/* Algorithms */}
      <div className="my-8">
        <h3 className="text-lg font-bold text-ink mb-4">
          Simulated CPU Scheduling Policies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {schedulerDetails.algorithms.map((alg, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-surface border border-border shadow-xs"
            >
              <div className="font-mono text-xs font-bold text-primary mb-1">
                Policy 0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-ink mb-2">
                {alg.name}
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {alg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
