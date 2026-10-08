import Link from "next/link";
import Image from "next/image";
import { getAllProjects, type Project } from "@/lib/content";

export function FeaturedWork() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 2);

  return (
    <section id="work" className="py-20 md:py-24" aria-labelledby="work-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 gap-2">
          <div>
            <h2 id="work-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Featured Projects
            </h2>
            <p className="text-base text-gray-600">
              Selected engineering builds across edge computer vision and systems software.
            </p>
          </div>
          <Link href="/work" className="text-sm font-medium text-blue-600 hover:underline">
            View all projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
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
      className={`flex flex-col justify-between ${
        isFeatured ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {project.heroImage && (
        <Link
          href={`/work/${project.slug}`}
          className="relative block h-56 sm:h-72 w-full rounded-lg overflow-hidden bg-gray-100 mb-5"
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

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            <Link href={`/work/${project.slug}`} className="hover:text-blue-600 transition-colors">
              {project.title}
            </Link>
          </h3>

          <p className="text-base text-gray-600 leading-relaxed mb-3">
            {project.description}
          </p>

          {project.metric && (
            <p className="text-xs text-gray-500 font-mono mb-3">
              Benchmark: <span className="text-gray-800 font-medium">{project.metric}</span>
            </p>
          )}

          <p className="text-xs text-gray-500 mb-4">
            {project.technologies.slice(0, 5).join(" · ")}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm pt-2">
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
