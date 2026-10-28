import Link from "next/link";
import Image from "next/image";
import { getAllProjects, type Project } from "@/lib/content";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export function FeaturedWork() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="work" className="py-20 md:py-24" aria-labelledby="work-heading">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-3 pb-4 border-b border-[#e6e4dc]">
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
              Field Deployments &amp; Applied Systems
            </p>
            <h2 id="work-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#151927]">
              Featured Projects
              <span className="text-[#c94a2f]">.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#151927] hover:text-[#c94a2f] transition-colors"
          >
            <span>View all engineering builds →</span>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} isFeatured />
          ))}

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
  return (
    <article
      className={`group rounded-xl overflow-hidden bg-[#ffffff] border border-[#e6e4dc] hover:border-[#d2cfbe] transition-all shadow-[0_1px_3px_rgba(21,25,39,0.02)] flex flex-col justify-between ${
        isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-12 lg:items-stretch" : "md:col-span-1"
      }`}
    >
      {/* Project Hero Media */}
      {project.heroImage && (
        <div
          className={`relative overflow-hidden bg-[#f4f3ef] border-b md:border-b-0 border-[#e6e4dc] ${
            isFeatured
              ? "lg:col-span-6 h-64 sm:h-80 lg:h-full lg:border-r"
              : "h-56 sm:h-64 border-b"
          }`}
        >
          <Link
            href={`/work/${project.slug}`}
            className="relative block w-full h-full"
            aria-label={`View case study: ${project.title}`}
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes={
                isFeatured
                  ? "(max-width: 1024px) 100vw, 540px"
                  : "(max-width: 768px) 100vw, 540px"
              }
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          </Link>
        </div>
      )}

      {/* Project Content */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between ${
          isFeatured ? "lg:col-span-6" : ""
        }`}
      >
        <div>
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#767d8f] mb-2.5">
            <span className="uppercase tracking-wider">{project.category}</span>
            {isFeatured && (
              <span className="px-2 py-0.5 rounded bg-[#c94a2f]/10 text-[#c94a2f] font-semibold text-[11px]">
                Flagship Capstone
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#151927] mb-2.5 group-hover:text-[#c94a2f] transition-colors leading-snug">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm sm:text-base text-[#535a6c] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Benchmark Callout */}
          {project.metric && (
            <div className="mb-5 p-2.5 rounded bg-[#f4f3ef] border border-[#e6e4dc] flex items-center gap-2 text-xs font-mono">
              <CheckCircle2 size={14} className="text-[#c94a2f] flex-shrink-0" />
              <div className="truncate">
                <span className="text-[#767d8f]">Benchmark: </span>
                <span className="font-semibold text-[#151927]">{project.metric}</span>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f4f3ef] text-[#535a6c] border border-[#e6e4dc]/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between text-xs pt-4 border-t border-[#f0eee7]">
          <Link
            href={`/work/${project.slug}`}
            className="font-semibold text-[#151927] hover:text-[#c94a2f] inline-flex items-center gap-1.5 transition-colors group-hover:underline"
          >
            <span>Read case study</span>
            <ArrowRight size={13} />
          </Link>

          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#767d8f] hover:text-[#151927] transition-colors font-mono"
            >
              <FileText size={13} />
              <span>IEEE Report (PDF)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
