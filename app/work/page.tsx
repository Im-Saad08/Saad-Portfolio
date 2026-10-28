import type { Metadata } from "next";
import { getAllProjects, additionalProjects } from "@/projects";
import { ProjectCard } from "@/components/sections/FeaturedWork";
import { constructMetadata } from "@/lib/metadata";
import { theme } from "@/lib/theme";
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
          <p className={theme.styles.kicker}>
            Engineering Archive · NUTECH Islamabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-3 leading-tight mt-1">
            Engineering Projects
            <span className={theme.styles.headingDot}>.</span>
          </h1>
          <p className={theme.styles.bodyLg}>
            Case studies across compute-efficient edge computer vision, embedded systems firmware, operating systems concurrency, and digital signal processing. Every build highlights real hardware bottlenecks and empirical benchmarks.
          </p>
        </header>

        {/* Major Systems & Deployments */}
        <section className="mb-20" aria-labelledby="major-systems-heading">
          <div className="mb-8 pb-3 border-b border-border">
            <p className={theme.styles.kicker}>
              Field Deployments &amp; Applied Edge Pipelines
            </p>
            <h2 id="major-systems-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-ink mt-1">
              Major Systems &amp; Field Deployments
            </h2>
            <p className="text-sm text-ink-muted mt-1 max-w-2xl">
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
          <div className="mb-8 pb-3 border-b border-border">
            <p className={theme.styles.kicker}>
              Operating Systems &amp; Algorithmic Pipelines
            </p>
            <h2 id="core-systems-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-ink mt-1">
              Systems Software &amp; Digital Signal Processing
            </h2>
            <p className="text-sm text-ink-muted mt-1 max-w-2xl">
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
        <section className="mt-20 pt-10 border-t border-border" aria-labelledby="ceps-heading">
          <div className="mb-8 max-w-2xl">
            <p className={theme.styles.kicker}>
              NUTECH Curriculum Engineering
            </p>
            <h2 id="ceps-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-ink mt-1">
              Applied Coursework &amp; Complex Engineering Projects (CEPs)
            </h2>
            <p className="text-sm text-ink-muted mt-1">
              Applied laboratory implementations, microcontroller firmware, control systems synthesis, and kernel cross-compilations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {additionalProjects.map((item) => (
              <article
                key={item.title}
                className={`${theme.styles.card} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle mb-2.5">
                    <Wrench size={13} className="text-primary" />
                    <span className="uppercase tracking-wider">Coursework CEP</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-ink mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className={theme.styles.body}>
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={theme.styles.chip}
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
