import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Code, Eye, Brain, Database, BarChart, PieChart, Table, BookOpen, Terminal, GitBranch, Box, Settings, Cpu, Hand, ScanText, Image, Cable, Wrench } from "lucide-react";
import { skills, skillCategoryLabels, skillCategoryDescriptions } from "../data/portfolio";

const categoryIcons = {
  programming: Code,
  aiComputerVision: Brain,
  dataScientific: Database,
  devTools: Terminal,
  embeddedSystems: Cpu,
};

const skillIcons = {
  code: Code,
  cpu: Cpu,
  eye: Eye,
  scanText: ScanText,
  image: Image,
  brain: Brain,
  hand: Hand,
  database: Database,
  barChart: BarChart,
  bookOpen: BookOpen,
  table: Table,
  pieChart: PieChart,
  gitBranch: GitBranch,
  terminal: Terminal,
  box: Box,
  settings: Settings,
  cable: Cable,
  wrench: Wrench,
};

export function Skills() {
  const reducedMotion = useReducedMotion();
  const [skillsRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="skills-heading"
            className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            Organized by domain — spanning software, AI, data, and embedded engineering
          </p>
        </header>

        <div className="space-y-12">
          {categories.map(([categoryKey, skillList], catIndex) => (
            <div
              key={categoryKey}
              className={`${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : `${catIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {(() => {
                    const Icon = categoryIcons[categoryKey];
                    return <Icon size={20} className="text-accent" aria-hidden="true" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-text">{skillCategoryLabels[categoryKey]}</h3>
                  <p className="text-sm text-text-muted">{skillCategoryDescriptions[categoryKey]}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 entrance-wrapper" role="list" aria-label={`${skillCategoryLabels[categoryKey]} skills`}>
                {skillList.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill.icon] || Code;
                  const linkUrl = skill.link;

                  const tagClasses = `group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg hover:scale-105 transition-all duration-300 ${
                    isVisible ? "animate-card-entrance" : "opacity-0"
                  }`;

                  const linkClasses = linkUrl
                    ? "cursor-pointer hover:shadow-lg hover:shadow-accent/10 focus-visible outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    : "";

                  if (linkUrl) {
                    return (
                      <a
                        key={skill.name}
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${tagClasses} ${linkClasses}`}
                        style={{ animationDelay: reducedMotion ? "0ms" : `${catIndex * 150 + skillIndex * 40}ms` }}
                        role="listitem"
                        aria-label={`View ${skill.name} documentation`}
                      >
                        <Icon size={14} className="text-accent/80 group-hover:text-accent transition-colors" aria-hidden="true" />
                        <span className="text-sm font-medium text-text">{skill.name}</span>
                      </a>
                    );
                  }

                  return (
                    <span
                      key={skill.name}
                      className={tagClasses}
                      style={{ animationDelay: reducedMotion ? "0ms" : `${catIndex * 150 + skillIndex * 40}ms` }}
                      role="listitem"
                    >
                      <Icon size={14} className="text-accent/80 group-hover:text-accent transition-colors" aria-hidden="true" />
                      <span className="text-sm font-medium text-text">{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}