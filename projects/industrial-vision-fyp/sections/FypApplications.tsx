import { fypDetails } from "../content";

export function FypApplications() {
  return (
    <section className="my-10">
      <h3 className="text-lg sm:text-xl font-bold text-[#11161b] mb-6">
        Target Industrial Applications
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fypDetails.applications.map((app, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]"
          >
            <div className="font-mono text-xs font-bold text-[#185a37] mb-1">
              Phase 0{idx + 1}
            </div>
            <h4 className="text-base font-bold text-[#11161b] mb-2">
              {app.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
