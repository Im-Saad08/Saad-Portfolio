import { theme } from "@/lib/theme";

interface ProjectTechGridProps {
  technologies: string[];
  title?: string;
}

export function ProjectTechGrid({
  technologies,
  title = "Technologies & Environment",
}: ProjectTechGridProps) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="my-10 p-6 rounded-xl bg-surface border border-border shadow-xs">
      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-subtle mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={theme.styles.chipLg}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
