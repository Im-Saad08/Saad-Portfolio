import { mriDetails } from "../content";

export function MriPipelineStages() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        Algorithmic Pipeline Stages
      </h2>

      <p className="text-sm font-medium text-gray-500">
        {mriDetails.course}
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        {mriDetails.summary}
      </p>

      <div className="space-y-6 my-6">
        {mriDetails.stages.map((stage, idx) => (
          <div key={idx}>
            <h3 className="text-base font-bold text-gray-900 mb-1">
              {idx + 1}. {stage.name}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
