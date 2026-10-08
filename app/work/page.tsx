import type { Metadata } from "next";
import { getAllProjects, additionalProjects } from "@/projects";
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

        {/* Major Systems & Deployments */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Major Systems & Field Deployments
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              High-throughput computer vision pipelines and automation platforms engineered under real hardware constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
            {projects
              .filter((p) => p.featured || p.slug === "industrial-vision-fyp")
              .map((project, index) => (
                <ProjectCard key={project.slug} project={project} isFeatured={index === 0} />
              ))}
          </div>
        </section>

        {/* Systems Software, Signal Processing & Embedded Primitives */}
        <section className="mt-20 md:mt-24">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
              Systems Software, Signal Processing & Embedded Primitives
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Low-level C concurrency, digital image processing, microcontroller firmware, and kernel configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14">
            {projects
              .filter((p) => !p.featured && p.slug !== "industrial-vision-fyp")
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}

            {additionalProjects.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-1">
                  <p className="text-xs text-gray-500">
                    {item.technologies.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
