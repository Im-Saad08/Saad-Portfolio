import {
  Code,
  Eye,
  Brain,
  Database,
  BarChart,
  PieChart,
  Terminal,
  GitBranch,
  Box,
  Settings,
  Cpu,
  Hand,
  ScanText,
  Image as ImageIcon,
  Cable,
  Wrench,
  ExternalLink,
} from "lucide-react";
import {
  skills,
  skillCategoryLabels,
  skillCategoryDescriptions,
  type SkillItem,
} from "@/lib/content";

const categoryIcons: Record<string, typeof Code> = {
  programming: Code,
  aiComputerVision: Brain,
  dataScientific: Database,
  devTools: Terminal,
  embeddedSystems: Cpu,
};

const skillIcons: Record<string, typeof Code> = {
  code: Code,
  cpu: Cpu,
  eye: Eye,
  "scan-text": ScanText,
  image: ImageIcon,
  brain: Brain,
  hand: Hand,
  database: Database,
  "bar-chart": BarChart,
  "pie-chart": PieChart,
  "git-branch": GitBranch,
  terminal: Terminal,
  box: Box,
  settings: Settings,
  cable: Cable,
  wrench: Wrench,
};

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 md:py-28" aria-labelledby="skills-heading">
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-4"
          >
            Technical Competencies
          </h2>
          <p className="text-base sm:text-lg text-[#8b95a8] max-w-2xl mx-auto">
            Grounded across hardware description, embedded systems, relational data, and edge vision.
          </p>
        </header>

        <div className="space-y-12">
          {categories.map(([categoryKey, skillList]) => {
            const CategoryIcon = categoryIcons[categoryKey] || Code;

            return (
              <div key={categoryKey} className="p-6 md:p-8 rounded-2xl border border-[#1a2438] bg-[#0e162a]/50">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center flex-shrink-0">
                    <CategoryIcon size={20} className="text-[#00d4aa]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#e8eaf0]">
                      {skillCategoryLabels[categoryKey]}
                    </h3>
                    <p className="text-sm text-[#8b95a8]">
                      {skillCategoryDescriptions[categoryKey]}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5" role="list">
                  {skillList.map((skill: SkillItem) => {
                    const Icon = skillIcons[skill.icon] || Code;

                    if (skill.link) {
                      return (
                        <a
                          key={skill.name}
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#1a2438] bg-[#0a0f1d] hover:border-[#00d4aa]/40 hover:bg-[#00d4aa]/5 transition-all text-sm font-medium text-[#e8eaf0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
                          role="listitem"
                          aria-label={`${skill.name} documentation`}
                        >
                          <Icon size={14} className="text-[#00d4aa]/80 group-hover:text-[#00d4aa]" aria-hidden="true" />
                          <span>{skill.name}</span>
                          <ExternalLink size={12} className="text-[#5a6578] group-hover:text-[#00d4aa] transition-colors" />
                        </a>
                      );
                    }

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#1a2438] bg-[#0a0f1d] text-sm font-medium text-[#e8eaf0]"
                        role="listitem"
                      >
                        <Icon size={14} className="text-[#00d4aa]/80" aria-hidden="true" />
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
