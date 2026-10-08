import { sentryxDetails } from "../content";

export function SentryxOverview() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        Architecture &amp; Operational Overview
      </h2>

      <p className="text-sm font-medium text-gray-500">
        {sentryxDetails.supervision}
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        {sentryxDetails.summary}
      </p>

      <p className="text-base text-gray-600 leading-relaxed">
        Engineered during a competitive 6-week engineering placement at NESCOM under Dr. Inayat Ullah Khan, SENTRYX solved the challenge of deploying deep learning edge inference on standard commodity x86 CPUs without enterprise GPUs. The entire pipeline balances precision, frame ingestion stability, and database audit trail guarantees under live streaming conditions.
      </p>
    </section>
  );
}
