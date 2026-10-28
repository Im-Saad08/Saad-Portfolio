import {
  skills,
  skillCategoryLabels,
  skillCategoryDescriptions,
  type SkillItem,
} from "@/lib/content";

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <div id="skills" aria-labelledby="skills-heading">
      <div className="mb-8">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
          Technical Competencies Matrix
        </p>
        <h2 id="skills-heading" className="text-2xl font-bold tracking-tight text-[#151927]">
          Core Engineering Competencies
          <span className="text-[#c94a2f]">.</span>
        </h2>
        <p className="text-sm text-[#535a6c] mt-1">
          Applied capabilities grounded across hardware description, low-level concurrency, relational database modeling, and edge computer vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map(([categoryKey, skillList]) => (
          <div
            key={categoryKey}
            className="p-6 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-bold text-[#151927] mb-1">
                {skillCategoryLabels[categoryKey]}
              </h3>
              <p className="text-xs text-[#767d8f] leading-relaxed mb-4">
                {skillCategoryDescriptions[categoryKey]}
              </p>
            </div>

            <div className="pt-3 border-t border-[#f0eee7] flex flex-wrap gap-1.5">
              {skillList.map((skill: SkillItem) => (
                <span
                  key={skill.name}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f4f3ef] text-[#151927] border border-[#e6e4dc]/60"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
