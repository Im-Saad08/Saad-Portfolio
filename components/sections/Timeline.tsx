import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <div id="timeline" aria-labelledby="timeline-heading">
      <div className="mb-8">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
          Chronological Track Record
        </p>
        <h2 id="timeline-heading" className="text-2xl font-bold tracking-tight text-[#151927]">
          Milestones &amp; Experience
          <span className="text-[#c94a2f]">.</span>
        </h2>
        <p className="text-sm text-[#535a6c] mt-1">
          Academic progression, NESCOM placement defense, and student humanitarian leadership.
        </p>
      </div>

      <div className="relative border-l border-[#e6e4dc] ml-3 pl-6 sm:pl-8 space-y-8">
        {timeline.map((entry) => (
          <article key={entry.id} className="relative group">
            {/* Timeline Node Anchor */}
            <span
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#fbfbf9] border-2 border-[#151927] group-hover:border-[#c94a2f] group-hover:bg-[#c94a2f] transition-colors"
              aria-hidden="true"
            />

            <div className="p-5 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#767d8f] mb-2">
                <span className="font-semibold text-[#151927]">{entry.date}</span>
                <span>·</span>
                <span className="px-1.5 py-0.5 rounded bg-[#f4f3ef] text-[#535a6c]">
                  {entry.category}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#151927] mb-2">
                {entry.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#535a6c] leading-relaxed mb-3">
                {entry.description}
              </p>

              {entry.story && (
                <div className="p-3 rounded-lg bg-[#f4f3ef] border-l-2 border-[#c94a2f] text-xs text-[#535a6c] italic leading-relaxed">
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
