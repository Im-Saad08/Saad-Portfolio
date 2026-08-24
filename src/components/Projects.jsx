import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { GitBranch, ExternalLink, Eye, Code2, Layers, Cpu, Database, Brain, Zap, Terminal, Maximize2 } from "lucide-react";
import { projects, additionalProjects } from "../data/portfolio";
import { ProjectModal } from "./ProjectModal";
import { useState } from "react";

const categoryIcons = {
  "AI / Computer Vision": Brain,
  "Signal Processing": Zap,
  "Embedded Linux": Cpu,
  "Digital Electronics": Layers,
};

const techIcons = {
  Python: Code2,
  OpenCV: Eye,
  YOLO: Eye,
  OCR: Eye,
  "Computer Vision": Eye,
  Docker: Layers,
  PostgreSQL: Database,
  MATLAB: Code2,
  "Signal Processing": Zap,
  "ECG Analysis": Zap,
  "Digital Signal Processing": Zap,
  "Mathematical Analysis": Code2,
  Linux: Terminal,
  RaspberryPi: Cpu,
  Buildroot: Terminal,
  BusyBox: Terminal,
  "Linux Kernel": Cpu,
  "Root Filesystem": Database,
  "Embedded Linux": Cpu,
  "C/C++": Code2,
  "Digital Logic": Layers,
  Microcontrollers: Cpu,
  Electronics: Zap,
  Proteus: Layers,
  "Embedded Systems": Cpu,
};

function TechIcon({ name }) {
  const Icon = techIcons[name] || Code2;
  return <Icon size={12} className="text-accent/70" aria-hidden="true" />;
}

function ProjectCard({ project, index, isFeatured = false, onOpenModal }) {
  const reducedMotion = useReducedMotion();
  const [cardRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const CategoryIcon = categoryIcons[project.category] || Code2;
  const hasHeroImage = project.heroImage;

  return (
    <article
      ref={cardRef}
      onClick={() => onOpenModal(project)}
      className={`group relative rounded-2xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300 cursor-pointer ${
        isFeatured
          ? "md:col-span-2 lg:col-span-3"
          : "md:col-span-1"
      } ${isVisible ? "animate-card-entrance" : "opacity-0"}`}
      style={{
        animationDelay: reducedMotion ? "0ms" : `${index * 120}ms`,
        minHeight: 0,
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenModal(project)}
      aria-label={`View details for ${project.title}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

      {/* Hero Image */}
      {hasHeroImage && (
        <div className="relative min-h-[192px] md:min-h-[224px] overflow-hidden">
          <img
            src={project.heroImage}
            alt={`${project.title} - Project preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" aria-hidden="true" />
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bg/90 backdrop-blur-sm border border-border text-text font-medium rounded-lg">
              <Maximize2 size={14} />
              View Details
            </span>
          </div>
        </div>
      )}

      <div className="relative p-6 md:p-8 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4 flex-shrink-0">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0">
              <CategoryIcon size={20} className="text-accent" aria-hidden="true" />
            </div>
            <span className="text-xs font-medium text-accent uppercase tracking-wider hidden sm:block">
              {project.category}
            </span>
          </div>
          {project.featured && (
            <span className="px-2.5 py-1 text-xs font-medium text-accent bg-accent-bg border border-accent-border rounded-full whitespace-nowrap flex-shrink-0">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-text mb-3 group-hover:text-accent transition-colors flex-shrink-0">
          {project.title}
        </h3>

        <p className="text-text-muted leading-relaxed mb-6 flex-shrink-0">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0" role="list" aria-label="Technologies">
          {project.technologies.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-muted bg-bg border border-border rounded-lg"
              role="listitem"
            >
              <TechIcon name={tech} />
              {tech}
            </span>
          ))}
          {project.technologies.length > 8 && (
            <span className="px-3 py-1.5 text-xs font-medium text-text-muted bg-bg border border-border rounded-lg">
              +{project.technologies.length - 8} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border flex-shrink-0">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors focus-visible"
              aria-label={`View ${project.title} on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <GitBranch size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent transition-colors focus-visible"
              aria-label={`View ${project.title} live`}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl === "#" && (
            <button
              className="inline-flex items-center gap-2 text-sm font-medium text-text-subtle cursor-not-allowed"
              disabled
              aria-label="Repository URL not available"
              onClick={(e) => e.stopPropagation()}
            >
              <GitBranch size={16} />
              Code
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function AdditionalProjectCard({ project, index }) {
  const reducedMotion = useReducedMotion();
  const [cardRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <article
      ref={cardRef}
      className={`group flex flex-col h-full overflow-hidden rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/50 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? "animate-card-entrance" : "opacity-0"
      }`}
      style={{ animationDelay: reducedMotion ? "0ms" : `${index * 100}ms` }}
    >
      {/* Image preview */}
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={`${project.title} - Project preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h4 className="text-base font-semibold text-text mb-1.5 group-hover:text-accent transition-colors leading-snug">
          {project.title}
        </h4>
        <p className="text-sm text-text-muted mb-3 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto" role="list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium text-text-muted bg-bg border border-border rounded-md whitespace-nowrap"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const reducedMotion = useReducedMotion();
  const [projectsRef, isVisible] = useIntersectionObserver({ triggerOnce: true });
  const [additionalRef, additionalVisible] = useIntersectionObserver({ triggerOnce: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 md:py-28"
        aria-labelledby="projects-heading"
      >
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="projects-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
                isVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Projects
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                isVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              Selected engineering projects spanning AI, computer vision, signal processing, and embedded systems
            </p>
          </header>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 entrance-wrapper items-start"
            role="list"
            aria-label="Main projects"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isFeatured onOpenModal={openModal} />
            ))}
            {regularProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + featuredProjects.length}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        ref={additionalRef}
        className="py-20 md:py-28 border-t border-border"
        aria-labelledby="additional-heading"
      >
        <div className="container">
          <header className="text-center mb-12">
            <h2
              id="additional-heading"
              className={`text-2xl md:text-3xl font-semibold tracking-tight text-text mb-4 ${
                additionalVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Additional Engineering Projects
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                additionalVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              Smaller projects and coursework demonstrating breadth across computer engineering domains
            </p>
          </header>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 entrance-wrapper items-stretch"
            role="list"
            aria-label="Additional projects"
          >
            {additionalProjects.map((project, index) => (
              <AdditionalProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={closeModal} />
    </>
  );
}