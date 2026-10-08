import { fypDetails } from "../content";

export function FypApplications() {
  return (
    <section className="my-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Target Industrial Applications
      </h3>

      <div className="space-y-6">
        {fypDetails.applications.map((app, idx) => (
          <div key={idx}>
            <h4 className="text-base font-bold text-gray-900 mb-1">
              {app.title}
            </h4>
            <p className="text-base text-gray-600 leading-relaxed">
              {app.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
