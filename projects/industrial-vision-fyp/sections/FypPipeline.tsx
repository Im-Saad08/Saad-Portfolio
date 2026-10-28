import { fypDetails } from "../content";

export function FypPipeline() {
  return (
    <section className="my-10">
      <h3 className="text-lg sm:text-xl font-bold text-[#11161b] mb-2 tracking-tight">
        Hardware Trigger &amp; Pneumatic Rejection Pipeline
      </h3>
      <p className="text-sm text-[#4c5562] mb-6 leading-relaxed">
        The hardware integration eliminates latency spikes from network polling by operating on direct microcontroller hardware interrupts and UART byte commands.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {fypDetails.pipelineSteps.map((step, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]"
          >
            <div className="font-mono text-xs font-bold text-[#185a37] mb-1">
              Step 0{idx + 1}
            </div>
            <span className="text-sm font-bold text-[#11161b] block mb-2">
              {step.step}
            </span>
            <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
