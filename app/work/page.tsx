import type { Metadata } from "next";
import { getAllProjects, additionalProjects } from "@/lib/content";
import { ProjectCard } from "@/components/sections/FeaturedWork";
import { constructMetadata } from "@/lib/metadata";
import { Layers } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Projects & Systems Portfolio",
  description:
    "Selected engineering projects: SENTRYX ALPR edge vision, Industrial automated conveyor inspection FYP, Brain MRI DIP segmentation, and POSIX multithreading scheduler.",
  canonicalUrl: "https://mohtarmsaad.com/work",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="pt-28 pb-20">
      <div className="container">
        {/* Page Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-xs font-mono mb-4">
            <Layers size={13} />
            <span>PORTFOLIO // SELECTED_BUILDS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-4">
            Engineering Projects
          </h1>
          <p className="text-lg text-[#8b95a8] max-w-3xl leading-relaxed">
            Detailed case studies across edge computer vision, embedded systems, OS concurrency, and signal processing. Each project highlights real runtime bottlenecks, architectural solutions, and empirical verification.
          </p>
        </header>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} isFeatured={index === 0} />
          ))}
        </div>

        {/* Additional Projects Section */}
        <section className="pt-16 border-t border-[#1a2438]">
          <header className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#e8eaf0] mb-3">
              Additional Coursework & Lab Projects
            </h2>
            <p className="text-sm md:text-base text-[#8b95a8] max-w-2xl">
              Complex Engineering Projects (CEPs) demonstrating breadth across microcontrollers, control engineering, and embedded Linux.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {additionalProjects.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-xl border border-[#1a2438] bg-[#0e162a]/50 hover:border-[#00d4aa]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-[#e8eaf0] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#8b95a8] leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1a2438]/50" role="list">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-mono text-[#8b95a8] bg-[#0a0f1d] border border-[#1a2438] rounded"
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
