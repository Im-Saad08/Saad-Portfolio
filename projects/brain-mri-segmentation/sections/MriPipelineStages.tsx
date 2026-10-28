import { theme } from "@/lib/theme";
import { mriDetails } from "../content";

export function MriPipelineStages() {
  return (
    <section className="space-y-6 pt-4">
      <div className="p-4 rounded-lg bg-surface-subtle border border-border text-xs font-mono text-ink">
        <span className="text-ink-subtle">Academic Coursework: </span>
        <span className="font-semibold">{mriDetails.course}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight pt-2">
        Algorithmic Pipeline Stages
      </h2>

      <p className={theme.styles.body}>
        {mriDetails.summary}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {mriDetails.stages.map((stage, idx) => (
          <div
            key={idx}
            className={theme.styles.cardCompact}
          >
            <div className="font-mono text-xs font-bold text-primary mb-1">
              Stage 0{idx + 1}
            </div>
            <h3 className="text-base font-bold text-ink mb-2">
              {stage.name}
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
