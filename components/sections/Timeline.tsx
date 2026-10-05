import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
        Milestones & Experience
      </h2>
      <p className="text-sm text-gray-600 mb-8">
        Academic progression, capstone defense, and leadership roles.
      </p>

      <div className="relative pl-6 border-l-2 border-gray-200 space-y-8">
        {timeline.map((entry) => (
          <article key={entry.id} className="relative">
            <div
              className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-400"
              aria-hidden="true"
            />

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {entry.date}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-500">{entry.category}</span>
            </div>

            <h3 className="text-base font-bold text-gray-900 mb-1">
              {entry.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {entry.description}
            </p>

            {entry.story && (
              <p className="text-xs text-gray-500 italic bg-gray-50 p-2.5 rounded border border-gray-100">
                {entry.story}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
