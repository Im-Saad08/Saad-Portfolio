import { fypDetails } from "../content";
import { theme } from "@/lib/theme";

export function FypScope() {
  return (
    <section className="space-y-4 pt-4">
      <div className="p-4 rounded-lg bg-surface-subtle border border-border text-xs font-mono text-ink">
        <span className="text-ink-subtle">Project Status: </span>
        <span className="font-semibold">{fypDetails.status}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight pt-2">
        System Overview &amp; Dual Engineering Scope
      </h2>

      <p className={theme.styles.body}>
        The Industrial Vision Final Year Project addresses automated visual quality control on high-speed industrial conveyor systems. Unlike purely software vision benchmarks, industrial automation requires tightly bound timing: optical frames must be captured, processed, and translated into physical solenoid pneumatic rejection before the moving object clears the reject chute.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="p-5 rounded-xl bg-surface border border-border shadow-xs">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-1.5">
            Mechanical &amp; Hardware (75%)
          </div>
          <h3 className="text-base font-bold text-ink mb-2">
            Physical Conveyor Platform
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Conveyor chassis, variable-speed motor drive, optical tunnel lighting, through-beam photo-sensors, and pneumatic reject solenoids.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-surface border border-border shadow-xs">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-primary mb-1.5">
            Edge AI &amp; Firmware (25%)
          </div>
          <h3 className="text-base font-bold text-ink mb-2">
            Inference &amp; Actuation Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Camera driver integration, lightweight YOLOv8 classification checkpoints, and deterministic UART packet protocols with hardware interrupts.
          </p>
        </div>
      </div>
    </section>
  );
}
