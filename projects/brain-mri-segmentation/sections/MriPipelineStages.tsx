import { mriDetails } from "../content";

export function MriPipelineStages() {
  return (
    <section className="space-y-6 pt-4">
      <div className="p-4 rounded-lg bg-[#f2f0e8] border border-[#e5e2d9] text-xs font-mono text-[#11161b]">
        <span className="text-[#6e7787]">Academic Coursework: </span>
        <span className="font-semibold">{mriDetails.course}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#11161b] tracking-tight pt-2">
        Algorithmic Pipeline Stages
      </h2>

      <p className="text-sm sm:text-base text-[#4c5562] leading-relaxed">
        {mriDetails.summary}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {mriDetails.stages.map((stage, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]"
          >
            <div className="font-mono text-xs font-bold text-[#185a37] mb-1">
              Stage 0{idx + 1}
            </div>
            <h3 className="text-base font-bold text-[#11161b] mb-2">
              {stage.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
