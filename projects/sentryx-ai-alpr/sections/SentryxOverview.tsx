import { sentryxDetails } from "../content";

export function SentryxOverview() {
  return (
    <section className="space-y-4 pt-4">
      <div className="p-4 rounded-lg bg-[#f2f0e8] border border-[#e5e2d9] text-xs font-mono text-[#11161b]">
        <span className="text-[#6e7787]">Supervision &amp; Placement: </span>
        <span className="font-semibold">{sentryxDetails.supervision}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#11161b] tracking-tight pt-2">
        Architecture &amp; Operational Overview
      </h2>

      <p className="text-base sm:text-lg text-[#11161b] font-medium leading-relaxed">
        {sentryxDetails.summary}
      </p>

      <p className="text-sm sm:text-base text-[#4c5562] leading-relaxed">
        Engineered during a competitive 6-week engineering placement at NESCOM under Dr. Inayat Ullah Khan, SENTRYX solved the challenge of deploying deep learning edge inference on standard commodity x86 CPUs without enterprise GPUs. The entire pipeline balances precision, frame ingestion stability, and database audit trail guarantees under live streaming conditions.
      </p>
    </section>
  );
}
