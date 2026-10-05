import Link from "next/link";
import Image from "next/image";
import { GitBranch, ArrowRight, Brain, Zap, Terminal, Layers, Download, Maximize2 } from "lucide-react";
import { getAllProjects, type Project } from "@/lib/content";

const categoryIcons: Record<string, typeof Brain> = {
  "AI / Computer Vision": Brain,
  "Signal Processing": Zap,
  "Embedded Linux": Layers,
  "Digital Electronics": Layers,
  "Operating Systems": Terminal,
};

export function FeaturedWork() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="work" className="py-20 md:py-28" aria-labelledby="work-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <h2
              id="work-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-[#e8eaf0] mb-3"
            >
              Selected Engineering Projects
            </h2>
            <p className="text-base sm:text-lg text-[#8b95a8] max-w-2xl">
              Systems engineered with operational benchmarks: detection latencies, concurrency, and real hardware constraints.
            </p>
          </div>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#00d4aa] hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Hero Card (spans 2 or 3 columns on large screens) */}
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} isFeatured />
          ))}

          {/* Regular Project Cards */}
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({
  project,
  isFeatured = false,
}: {
  project: Project;
  isFeatured?: boolean;
}) {
  const CategoryIcon = categoryIcons[project.category] || Brain;

  return (
    <article
      className={`group relative rounded-2xl border border-[#1a2438] bg-[#0e162a]/60 hover:border-[#00d4aa]/40 transition-all duration-300 flex flex-col overflow-hidden ${
        isFeatured ? "md:col-span-2 lg:col-span-3" : "md:col-span-1"
      }`}
    >
      {/* Hero Media Preview */}
      {project.heroImage && (
        <Link
          href={`/work/${project.slug}`}
          className="relative block h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-[#0a0f1d]"
          aria-label={`View case study: ${project.title}`}
        >
          <Image
            src={project.heroImage}
            alt={`${project.title} Preview`}
            fill
            sizes={isFeatured ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 768px) 100vw, 400px"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0e162a] via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0a0f1d]/90 backdrop-blur-sm border border-[#1a2438] text-xs font-medium text-[#e8eaf0] rounded-lg">
              <Maximize2 size={13} />
              Read Full Case Study
            </span>
          </div>
        </Link>
      )}

      {/* Card Body */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                <CategoryIcon size={16} className="text-[#00d4aa]" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium text-[#00d4aa] uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            {project.featured && (
              <span className="px-2.5 py-0.5 text-xs font-medium text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/30 rounded-full">
                Featured Defense Project
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-[#e8eaf0] mb-3 group-hover:text-[#00d4aa] transition-colors">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-sm md:text-base text-[#8b95a8] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6" role="list">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-[#8b95a8] bg-[#0a0f1d] border border-[#1a2438] rounded-md"
                role="listitem"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2.5 py-1 text-xs font-medium text-[#5a6578] bg-[#0a0f1d] border border-[#1a2438] rounded-md">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#1a2438] flex flex-wrap items-center justify-between gap-3 text-sm">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-medium text-[#00d4aa] hover:underline"
          >
            <span>View Architecture & Case Study</span>
            <ArrowRight size={15} />
          </Link>

          <div className="flex items-center gap-3">
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#8b95a8] hover:text-[#00d4aa] transition-colors"
              >
                <Download size={13} />
                <span>IEEE PDF</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#8b95a8] hover:text-[#00d4aa] transition-colors"
              >
                <GitBranch size={13} />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
