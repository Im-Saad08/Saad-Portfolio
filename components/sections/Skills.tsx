import { theme } from "@/lib/theme";
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
        <p className={`${theme.styles.kicker} mb-1`}>
          Technical Competencies Matrix
        </p>
        <h2 id="skills-heading" className="text-2xl font-bold tracking-tight text-ink">
          Core Engineering Competencies
          <span className={theme.styles.headingDot}>.</span>
        </h2>
        <p className="text-sm text-ink-muted mt-1">
          Applied capabilities grounded across hardware description, low-level concurrency, relational database modeling, and edge computer vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map(([categoryKey, skillList]) => (
          <div
            key={categoryKey}
            className={`${theme.styles.cardStatic} flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-base font-bold text-ink mb-1">
                {skillCategoryLabels[categoryKey]}
              </h3>
              <p className="text-xs text-ink-subtle leading-relaxed mb-4">
                {skillCategoryDescriptions[categoryKey]}
              </p>
            </div>

            <div className="pt-3 border-t border-border-subtle flex flex-wrap gap-1.5">
              {skillList.map((skill: SkillItem) => (
                <span
                  key={skill.name}
                  className={theme.styles.chip}
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
