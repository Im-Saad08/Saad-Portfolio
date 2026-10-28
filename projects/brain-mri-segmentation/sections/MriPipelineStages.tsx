import { mriDetails } from "../content";

export function MriPipelineStages() {
  return (
    <section className="space-y-6 pt-4">
      <div className="p-4 rounded-lg bg-[#f4f3ef] border border-[#e6e4dc] text-xs font-mono text-[#151927]">
        <span className="text-[#767d8f]">Academic Coursework: </span>
        <span className="font-semibold">{mriDetails.course}</span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#151927] tracking-tight pt-2">
        Algorithmic Pipeline Stages
      </h2>

      <p className="text-sm sm:text-base text-[#535a6c] leading-relaxed">
        {mriDetails.summary}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {mriDetails.stages.map((stage, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]"
          >
            <div className="font-mono text-xs font-bold text-[#c94a2f] mb-1">
              Stage 0{idx + 1}
            </div>
            <h3 className="text-base font-bold text-[#151927] mb-2">
              {stage.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#535a6c] leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
