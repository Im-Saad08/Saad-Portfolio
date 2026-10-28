import { fypDetails } from "../content";

export function FypScope() {
  return (
    <section className="space-y-4 pt-4">
      <div className="p-4 rounded-lg bg-[#f4f3ef] border border-[#e6e4dc] text-xs font-mono text-[#151927]">
        <span className="text-[#767d8f]">Project Status: </span>
        <span className="font-semibold">{fypDetails.status}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#151927] tracking-tight pt-2">
        System Overview &amp; Dual Engineering Scope
      </h2>

      <p className="text-sm sm:text-base text-[#535a6c] leading-relaxed">
        The Industrial Vision Final Year Project addresses automated visual quality control on high-speed industrial conveyor systems. Unlike purely software vision benchmarks, industrial automation requires tightly bound timing: optical frames must be captured, processed, and translated into physical solenoid pneumatic rejection before the moving object clears the reject chute.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#c94a2f] mb-1.5">
            Mechanical &amp; Hardware (75%)
          </div>
          <h3 className="text-base font-bold text-[#151927] mb-2">
            Physical Conveyor Platform
          </h3>
          <p className="text-xs sm:text-sm text-[#535a6c] leading-relaxed">
            Conveyor chassis, variable-speed motor drive, optical tunnel lighting, through-beam photo-sensors, and pneumatic reject solenoids.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4e6538] mb-1.5">
            Edge AI &amp; Firmware (25%)
          </div>
          <h3 className="text-base font-bold text-[#151927] mb-2">
            Inference &amp; Actuation Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-[#535a6c] leading-relaxed">
            Camera driver integration, lightweight YOLOv8 classification checkpoints, and deterministic UART packet protocols with hardware interrupts.
          </p>
        </div>
      </div>
    </section>
  );
}
