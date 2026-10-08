import { sentryxDetails } from "../content";

export function SentryxSolutions() {
  return (
    <section className="my-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Key Architectural Breakthroughs
      </h3>

      <div className="space-y-4">
        {sentryxDetails.solutions.map((item, index) => (
          <div key={index} className="flex items-start gap-3 text-base text-gray-700">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <div>
              <strong className="text-gray-900 font-semibold block mb-0.5">
                {item.title}
              </strong>
              <p className="text-gray-600 leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
