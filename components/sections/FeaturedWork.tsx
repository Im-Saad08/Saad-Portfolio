import Link from "next/link";
import Image from "next/image";
import { getAllProjects, type Project } from "@/lib/content";

export function FeaturedWork() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="work" className="py-16 border-t border-gray-200" aria-labelledby="work-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-2">
          <div>
            <h2 id="work-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-1">
              Featured Projects
            </h2>
            <p className="text-sm text-gray-600">
              Selected engineering builds across edge computer vision and systems software.
            </p>
          </div>
          <Link href="/work" className="text-sm font-medium text-blue-600 hover:underline">
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      className={`rounded-lg border border-gray-200 bg-white hover:border-gray-300 transition-colors flex flex-col overflow-hidden ${
        isFeatured ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {project.heroImage && (
        <Link
          href={`/work/${project.slug}`}
          className="relative block h-52 sm:h-64 w-full bg-gray-50 border-b border-gray-100"
          aria-label={`View case study: ${project.title}`}
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes={isFeatured ? "(max-width: 1024px) 100vw, 1080px" : "(max-width: 768px) 100vw, 540px"}
            className="object-cover"
          />
        </Link>
      )}

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 font-medium">
            <span>{project.category}</span>
            {project.featured && (
              <>
                <span>•</span>
                <span className="text-blue-700 font-semibold">Featured Capstone</span>
              </>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            <Link href={`/work/${project.slug}`} className="hover:text-blue-600 transition-colors">
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6" role="list">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-gray-600 bg-gray-100 rounded"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
          <Link
            href={`/work/${project.slug}`}
            className="font-medium text-blue-600 hover:underline"
          >
            Read case study →
          </Link>

          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
            >
              IEEE Report (PDF)
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
