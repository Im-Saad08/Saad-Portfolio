import { fypDetails } from "../content";

export function FypPipeline() {
  return (
    <section className="my-10">
      <h3 className="text-lg sm:text-xl font-bold text-[#151927] mb-2 tracking-tight">
        Hardware Trigger &amp; Pneumatic Rejection Pipeline
      </h3>
      <p className="text-sm text-[#535a6c] mb-6 leading-relaxed">
        The hardware integration eliminates latency spikes from network polling by operating on direct microcontroller hardware interrupts and UART byte commands.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {fypDetails.pipelineSteps.map((step, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]"
          >
            <div className="font-mono text-xs font-bold text-[#c94a2f] mb-1">
              Step 0{idx + 1}
            </div>
            <span className="text-sm font-bold text-[#151927] block mb-2">
              {step.step}
            </span>
            <p className="text-xs sm:text-sm text-[#535a6c] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
