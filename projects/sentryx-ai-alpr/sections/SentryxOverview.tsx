import { sentryxDetails } from "../content";
import { theme } from "@/lib/theme";

export function SentryxOverview() {
  return (
    <section className="space-y-4 pt-4">
      <div className="p-4 rounded-lg bg-surface-subtle border border-border text-xs font-mono text-ink">
        <span className="text-ink-subtle">Supervision &amp; Placement: </span>
        <span className="font-semibold">{sentryxDetails.supervision}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight pt-2">
        Architecture &amp; Operational Overview
      </h2>

      <p className="text-base sm:text-lg text-ink font-medium leading-relaxed">
        {sentryxDetails.summary}
      </p>

      <p className={theme.styles.body}>
        Engineered during a competitive 6-week engineering placement at NESCOM under Dr. Inayat Ullah Khan, SENTRYX solved the challenge of deploying deep learning edge inference on standard commodity x86 CPUs without enterprise GPUs. The entire pipeline balances precision, frame ingestion stability, and database audit trail guarantees under live streaming conditions.
      </p>
    </section>
  );
}
