import type { Metadata } from "next";
import { getAllProjects, additionalProjects } from "@/projects";
import { ProjectCard } from "@/components/sections/FeaturedWork";
import { constructMetadata } from "@/lib/metadata";
import { Wrench } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Projects & Case Studies",
  description:
    "Comprehensive engineering portfolio: SENTRYX edge ALPR, Industrial conveyor vision FYP, POSIX multithreading scheduler, Brain MRI DIP segmentation, and university CEPs.",
  canonicalUrl: "https://mohtarmsaad.com/work",
});

export default function WorkPage() {
  const projects = getAllProjects();
  const majorSystems = projects.filter(
    (p) => p.featured || p.slug === "industrial-vision-fyp"
  );
  const coreSystems = projects.filter(
    (p) => !p.featured && p.slug !== "industrial-vision-fyp"
  );

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Page Header */}
        <header className="mb-14 max-w-3xl">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-2">
            Engineering Archive · NUTECH Islamabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151927] mb-3 leading-tight">
            Engineering Projects
            <span className="text-[#c94a2f]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#535a6c] leading-relaxed">
            Case studies across compute-efficient edge computer vision, embedded systems firmware, operating systems concurrency, and digital signal processing. Every build highlights real hardware bottlenecks and empirical benchmarks.
          </p>
        </header>

        {/* Major Systems & Deployments */}
        <section className="mb-20" aria-labelledby="major-systems-heading">
          <div className="mb-8 pb-3 border-b border-[#e6e4dc]">
            <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
              Field Deployments &amp; Applied Edge Pipelines
            </p>
            <h2 id="major-systems-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-[#151927]">
              Major Systems &amp; Field Deployments
            </h2>
            <p className="text-sm text-[#535a6c] mt-1 max-w-2xl">
              High-throughput computer vision platforms engineered for real-time inference on commodity CPUs under physical constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {majorSystems.map((project, index) => (
              <ProjectCard key={project.slug} project={project} isFeatured={index === 0} />
            ))}
          </div>
        </section>

        {/* Systems Software & Signal Processing */}
        <section className="mb-20" aria-labelledby="core-systems-heading">
          <div className="mb-8 pb-3 border-b border-[#e6e4dc]">
            <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
              Operating Systems &amp; Algorithmic Pipelines
            </p>
            <h2 id="core-systems-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-[#151927]">
              Systems Software &amp; Digital Signal Processing
            </h2>
            <p className="text-sm text-[#535a6c] mt-1 max-w-2xl">
              Low-level C thread synchronization, custom scheduling algorithms, and medical image segmentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {coreSystems.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Applied Coursework Complex Engineering Projects (CEPs) */}
        <section className="mt-20 pt-10 border-t border-[#e6e4dc]" aria-labelledby="ceps-heading">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#767d8f] mb-1">
              NUTECH Curriculum Engineering
            </p>
            <h2 id="ceps-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-[#151927]">
              Applied Coursework &amp; Complex Engineering Projects (CEPs)
            </h2>
            <p className="text-sm text-[#535a6c] mt-1">
              Applied laboratory implementations, microcontroller firmware, control systems synthesis, and kernel cross-compilations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {additionalProjects.map((item) => (
              <article
                key={item.title}
                className="p-6 rounded-xl bg-[#ffffff] border border-[#e6e4dc] hover:border-[#d2cfbe] transition-all shadow-[0_1px_3px_rgba(21,25,39,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#767d8f] mb-2.5">
                    <Wrench size={13} className="text-[#c94a2f]" />
                    <span className="uppercase tracking-wider">Coursework CEP</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#151927] mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#535a6c] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0eee7]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f4f3ef] text-[#535a6c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
