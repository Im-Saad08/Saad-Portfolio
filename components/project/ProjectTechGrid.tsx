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
    <div className="my-10 p-6 rounded-xl bg-[#ffffff] border border-[#e6e4dc] shadow-[0_1px_2px_rgba(21,25,39,0.02)]">
      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#767d8f] mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded text-xs font-mono bg-[#f4f3ef] text-[#151927] border border-[#e6e4dc]/70 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
