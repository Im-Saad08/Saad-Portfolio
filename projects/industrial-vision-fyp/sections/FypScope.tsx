import { fypDetails } from "../content";

export function FypScope() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        System Overview &amp; Dual Engineering Scope
      </h2>

      <p className="text-sm font-medium text-gray-500">
        {fypDetails.status}
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        The Industrial Vision Final Year Project addresses automated visual quality control on high-speed industrial conveyor systems. Unlike purely software vision benchmarks, industrial automation requires tightly bound timing: optical frames must be captured, processed, and translated into physical solenoid pneumatic rejection before the moving object clears the reject chute.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-1">
            Mechanical &amp; Hardware (75%)
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Conveyor chassis, variable-speed motor drive, optical tunnel lighting, through-beam photo-sensors, and pneumatic reject solenoids.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-1">
            Edge AI &amp; Firmware (25%)
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Camera driver integration, lightweight YOLOv8 classification checkpoints, and deterministic UART packet protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
