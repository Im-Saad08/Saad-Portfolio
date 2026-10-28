import Link from "next/link";
import Image from "next/image";
import { getAllProjects, type Project } from "@/lib/content";
import { theme } from "@/lib/theme";
import { ArrowRight, FileText, CheckCircle2, Sparkles } from "lucide-react";

export function FeaturedWork() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="work" className="py-20 md:py-24" aria-labelledby="work-heading">
      <div className="container">
        {/* Section Header */}
        <div className={theme.styles.sectionHeader}>
          <div>
            <div className="text-xs font-mono font-medium text-ink-subtle uppercase tracking-wider mb-1">
              Field Deployments &amp; Applied Systems
            </div>
            <h2 id="work-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mt-1">
              Featured Engineering Work
              <span className={theme.styles.headingDot}>.</span>
            </h2>
            <p className="text-sm text-ink-muted mt-1 max-w-xl">
              Real hardware builds and edge inference pipelines — optimized for commodity CPUs and benchmarked at NUTECH.
            </p>
          </div>
          <Link
            href="/work"
            className={theme.styles.linkMono}
          >
            <span>View all engineering builds →</span>
          </Link>
        </div>

        {/* Dynamic Project Grid */}
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
      className={`group rounded-2xl overflow-hidden bg-surface border border-border/80 shadow-[0_2px_12px_rgba(17,22,27,0.03)] hover:shadow-[0_6px_24px_rgba(24,90,55,0.07)] hover:border-border-strong transition-all duration-300 flex flex-col justify-between ${
        isFeatured ? "md:col-span-2 lg:grid lg:grid-cols-12 lg:items-stretch" : "md:col-span-1"
      }`}
    >
      {/* Project Hero Media */}
      {project.heroImage && (
        <div
          className={`relative overflow-hidden bg-surface-subtle border-b md:border-b-0 border-border/70 ${
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

          {isFeatured && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-ink/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 shadow-sm">
              <Sparkles size={11} className="text-emerald-400" />
              <span>Flagship Capstone</span>
            </div>
          )}
        </div>
      )}

      {/* Project Content */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-between ${
          isFeatured ? "lg:col-span-6" : ""
        }`}
      >
        <div>
          {/* Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-subtle mb-3">
            <span className="uppercase tracking-wider font-medium">{project.category}</span>
            <span className={theme.styles.badgeWarm}>
              {isFeatured ? "NESCOM Capstone" : "NUTECH Engineering"}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink mb-2.5 group-hover:text-primary transition-colors leading-snug">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className={theme.styles.body}>
            {project.description}
          </p>

          {/* Benchmark Callout */}
          {project.metric && (
            <div className={`my-4 ${theme.styles.benchmarkCallout}`}>
              <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
              <div className="truncate">
                <span className="text-ink-subtle">Benchmark: </span>
                <span className="font-semibold text-ink">{project.metric}</span>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className={theme.styles.chip}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between text-xs pt-4 border-t border-border-subtle">
          <Link
            href={`/work/${project.slug}`}
            className={theme.styles.linkText}
          >
            <span>Read technical case study</span>
            <ArrowRight size={13} />
          </Link>

          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-subtle hover:text-ink transition-colors font-mono"
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
