import type { Metadata } from "next";
import { getAllProjects, additionalProjects } from "@/lib/content";
import { ProjectCard } from "@/components/sections/FeaturedWork";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Projects & Case Studies",
  description:
    "Selected engineering projects: SENTRYX ALPR edge vision, Industrial automated conveyor inspection FYP, Brain MRI DIP segmentation, and POSIX multithreading scheduler.",
  canonicalUrl: "https://mohtarmsaad.com/work",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            Engineering Projects
          </h1>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
            Case studies across edge computer vision, embedded systems, OS concurrency, and signal processing. Each project highlights real bottlenecks and empirical benchmarks.
          </p>
        </header>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} isFeatured={index === 0} />
          ))}
        </div>

        {/* Additional Projects Section */}
        <section className="pt-12 border-t border-gray-200">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
            Coursework & Lab Projects
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mb-6">
            Complex Engineering Projects (CEPs) across microcontrollers, control engineering, and embedded Linux.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalProjects.map((item) => (
              <article
                key={item.title}
                className="p-5 rounded-lg border border-gray-200 bg-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100" role="list">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs text-gray-600 bg-gray-100 rounded"
                      role="listitem"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
