import { fypDetails } from "../content";

export function FypPipeline() {
  return (
    <section className="my-8">
      <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
        Hardware Trigger &amp; Pneumatic Rejection Pipeline
      </h3>
      <p className="text-base text-gray-600 mb-6 leading-relaxed">
        The hardware integration eliminates latency spikes from network polling by operating on direct microcontroller hardware interrupts.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {fypDetails.pipelineSteps.map((step, idx) => (
          <div key={idx}>
            <span className="text-xs font-semibold text-gray-900 block mb-1">
              {step.step}
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
