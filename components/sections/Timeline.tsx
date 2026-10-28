import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <div id="timeline" aria-labelledby="timeline-heading">
      <div className="mb-8">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-1">
          Chronological Track Record
        </p>
        <h2 id="timeline-heading" className="text-2xl font-bold tracking-tight text-[#11161b]">
          Milestones &amp; Experience
          <span className="text-[#185a37]">.</span>
        </h2>
        <p className="text-sm text-[#4c5562] mt-1">
          Academic progression, NESCOM placement defense, and student humanitarian leadership.
        </p>
      </div>

      <div className="relative border-l border-[#e5e2d9] ml-3 pl-6 sm:pl-8 space-y-8">
        {timeline.map((entry) => (
          <article key={entry.id} className="relative group">
            {/* Timeline Node Anchor */}
            <span
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#faf9f5] border-2 border-[#11161b] group-hover:border-[#185a37] group-hover:bg-[#185a37] transition-colors"
              aria-hidden="true"
            />

            <div className="p-5 rounded-xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_2px_rgba(17,22,27,0.02)]">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6e7787] mb-2">
                <span className="font-semibold text-[#11161b]">{entry.date}</span>
                <span>·</span>
                <span className="px-1.5 py-0.5 rounded bg-[#f2f0e8] text-[#4c5562]">
                  {entry.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#11161b] mb-2">
                {entry.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed mb-3">
                {entry.description}
              </p>

              {entry.story && (
                <div className="p-3 rounded-lg bg-[#f2f0e8] border-l-2 border-[#185a37] text-xs text-[#4c5562] italic leading-relaxed">
                  &ldquo;{entry.story}&rdquo;
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
