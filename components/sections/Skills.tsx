import {
  skills,
  skillCategoryLabels,
  skillCategoryDescriptions,
  type SkillItem,
} from "@/lib/content";

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
        Technical Skills
      </h2>
      <p className="text-sm text-gray-600 mb-8">
        Competencies grounded in hardware description, embedded firmware, relational data, and edge vision.
      </p>

      <div className="space-y-6">
        {categories.map(([categoryKey, skillList]) => (
          <div key={categoryKey} className="p-5 rounded-lg border border-gray-200 bg-gray-50/50">
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {skillCategoryLabels[categoryKey]}
            </h3>
            <p className="text-xs text-gray-500 mb-3">
              {skillCategoryDescriptions[categoryKey]}
            </p>

            <div className="flex flex-wrap gap-2" role="list">
              {skillList.map((skill: SkillItem) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded text-xs font-medium text-gray-700 bg-white border border-gray-200"
                  role="listitem"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
