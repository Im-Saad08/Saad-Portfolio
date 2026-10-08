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
        Technical Competencies
      </h2>
      <p className="text-base text-gray-600 mb-8">
        Engineering capabilities grounded in hardware description, embedded firmware, relational data, and edge computer vision.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map(([categoryKey, skillList]) => (
          <div key={categoryKey} className="space-y-2">
            <h3 className="text-base font-bold text-gray-900">
              {skillCategoryLabels[categoryKey]}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {skillCategoryDescriptions[categoryKey]}
            </p>
            <p className="text-sm text-gray-800 leading-relaxed pt-1">
              {skillList.map((skill: SkillItem) => skill.name).join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
