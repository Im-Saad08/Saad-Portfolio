import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
        Milestones &amp; Experience
      </h2>
      <p className="text-base text-gray-600 mb-8">
        Academic progression, capstone defense, and leadership roles.
      </p>

      <div className="space-y-10 md:space-y-12">
        {timeline.map((entry) => (
          <article key={entry.id}>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <span className="font-medium text-gray-700">{entry.date}</span>
              <span>·</span>
              <span>{entry.category}</span>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-1.5">
              {entry.title}
            </h3>

            <p className="text-base text-gray-600 leading-relaxed mb-2">
              {entry.description}
            </p>

            {entry.story && (
              <p className="text-sm text-gray-500 italic mt-2">
                &ldquo;{entry.story}&rdquo;
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
