import { schedulerDetails } from "../content";

export function SchedulerLogic() {
  return (
    <section className="space-y-6 pt-4">
      <div className="p-4 rounded-lg bg-[#f2f0e8] border border-[#e5e2d9] text-xs font-mono text-[#11161b]">
        <span className="text-[#6e7787]">Academic Coursework: </span>
        <span className="font-semibold">{schedulerDetails.course}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#11161b] tracking-tight pt-2">
        Concurrency Architecture &amp; Scheduling Algorithms
      </h2>

      <p className="text-sm sm:text-base text-[#4c5562] leading-relaxed">
        {schedulerDetails.summary}
      </p>

      {/* POSIX Primitives */}
      <div className="my-6 p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6e7787] mb-3">
          Low-Level POSIX C Primitives Implemented
        </h3>
        <div className="flex flex-wrap gap-2">
          {schedulerDetails.primitives.map((prim) => (
            <span
              key={prim}
              className="px-2.5 py-1 rounded text-xs font-mono bg-[#f2f0e8] text-[#11161b] border border-[#e5e2d9]/70"
            >
              {prim}
            </span>
          ))}
        </div>
      </div>

      {/* Algorithms */}
      <div className="my-8">
        <h3 className="text-lg font-bold text-[#11161b] mb-4">
          Simulated CPU Scheduling Policies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {schedulerDetails.algorithms.map((alg, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]"
            >
              <div className="font-mono text-xs font-bold text-[#185a37] mb-1">
                Policy 0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-[#11161b] mb-2">
                {alg.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
                {alg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
