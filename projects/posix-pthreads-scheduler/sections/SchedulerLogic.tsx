import { schedulerDetails } from "../content";

export function SchedulerLogic() {
  return (
    <section className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
        Concurrency Architecture &amp; Scheduling Algorithms
      </h2>

      <p className="text-sm font-medium text-gray-500">
        {schedulerDetails.course}
      </p>

      <p className="text-base text-gray-700 leading-relaxed">
        {schedulerDetails.summary}
      </p>

      {/* POSIX Primitives */}
      <div className="my-6">
        <h3 className="text-base font-bold text-gray-900 mb-3">
          Low-Level POSIX C Primitives Implemented
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed font-mono">
          {schedulerDetails.primitives.join(" · ")}
        </p>
      </div>

      {/* Algorithms */}
      <div className="space-y-6 my-6">
        <h3 className="text-base font-bold text-gray-900">
          Simulated CPU Scheduling Policies
        </h3>
        {schedulerDetails.algorithms.map((alg, idx) => (
          <div key={idx}>
            <h4 className="text-base font-bold text-gray-900 mb-1">
              {alg.name}
            </h4>
            <p className="text-base text-gray-600 leading-relaxed">
              {alg.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
