import { fypDetails } from "../content";

export function FypScope() {
  return (
    <section className="space-y-4 pt-4">
      <div className="p-4 rounded-lg bg-[#f2f0e8] border border-[#e5e2d9] text-xs font-mono text-[#11161b]">
        <span className="text-[#6e7787]">Project Status: </span>
        <span className="font-semibold">{fypDetails.status}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#11161b] tracking-tight pt-2">
        System Overview &amp; Dual Engineering Scope
      </h2>

      <p className="text-sm sm:text-base text-[#4c5562] leading-relaxed">
        The Industrial Vision Final Year Project addresses automated visual quality control on high-speed industrial conveyor systems. Unlike purely software vision benchmarks, industrial automation requires tightly bound timing: optical frames must be captured, processed, and translated into physical solenoid pneumatic rejection before the moving object clears the reject chute.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#185a37] mb-1.5">
            Mechanical &amp; Hardware (75%)
          </div>
          <h3 className="text-base font-bold text-[#11161b] mb-2">
            Physical Conveyor Platform
          </h3>
          <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
            Conveyor chassis, variable-speed motor drive, optical tunnel lighting, through-beam photo-sensors, and pneumatic reject solenoids.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#185a37] mb-1.5">
            Edge AI &amp; Firmware (25%)
          </div>
          <h3 className="text-base font-bold text-[#11161b] mb-2">
            Inference &amp; Actuation Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
            Camera driver integration, lightweight YOLOv8 classification checkpoints, and deterministic UART packet protocols with hardware interrupts.
          </p>
        </div>
      </div>
    </section>
  );
}
