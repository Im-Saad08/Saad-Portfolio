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
    <div className="my-8">
      <h3 className="text-base font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        {technologies.join(" · ")}
      </p>
    </div>
  );
}
