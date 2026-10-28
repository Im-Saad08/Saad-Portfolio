import { sentryxDetails } from "../content";

export function SentryxSolutions() {
  return (
    <section className="my-10">
      <h3 className="text-lg sm:text-xl font-bold text-ink mb-6">
        Key Architectural Breakthroughs
      </h3>

      <div className="space-y-4">
        {sentryxDetails.solutions.map((item, index) => (
          <div
            key={index}
            className="p-5 rounded-xl bg-surface border border-border shadow-xs"
          >
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-primary">
                0{index + 1}.
              </span>
              <h4 className="text-base font-bold text-ink">
                {item.title}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
