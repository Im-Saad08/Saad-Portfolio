import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, GitBranch, ExternalLink, Brain, Layers } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({
      title: "Project Not Found",
    });
  }

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: project.description,
    image: project.heroImage,
    canonicalUrl: `https://mohtarmsaad.com/work/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b95a8] hover:text-[#00d4aa] transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Header Metadata */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/30 uppercase tracking-wider">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-medium text-[#e8eaf0] bg-[#1a2438] border border-[#23314a]">
                Flagship Defense Capstone
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#8b95a8] leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Hero Visual Container */}
        {project.heroImage && (
          <div className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden border border-[#1a2438] bg-[#0a0f1d] mb-12 shadow-2xl">
            <Image
              src={project.heroImage}
              alt={`${project.title} Architecture Preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0e162a]/80 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pb-10 mb-10 border-b border-[#1a2438]">
          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#00d4aa] text-[#0a0f1d] font-semibold rounded-lg hover:bg-[#00b894] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              <Download size={18} />
              <span>Download IEEE Defense Manuscript (PDF)</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#1a2438] text-[#e8eaf0] font-medium rounded-lg hover:bg-[#1a2438] hover:border-[#23314a] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              <GitBranch size={18} />
              <span>View Repository on GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#1a2438] text-[#e8eaf0] font-medium rounded-lg hover:bg-[#1a2438] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              <ExternalLink size={18} />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

        {/* Technical Architecture & Deep Dive */}
        <section className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#e8eaf0] mb-4 flex items-center gap-2">
              <Brain size={22} className="text-[#00d4aa]" />
              Engineering Overview & Runtime Heuristics
            </h2>
            <div className="prose prose-invert max-w-none text-[#8b95a8] text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4">
              {project.longDescription || project.description}
            </div>
          </div>

          {/* Technology Matrix */}
          <div className="p-6 md:p-8 rounded-2xl border border-[#1a2438] bg-[#0e162a]/50">
            <h3 className="text-lg font-semibold text-[#e8eaf0] mb-4">
              Technologies & Hardware Environment
            </h3>
            <div className="flex flex-wrap gap-2.5" role="list">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-[#e8eaf0] bg-[#0a0f1d] border border-[#1a2438]"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Diagram Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-[#e8eaf0] mb-6 flex items-center gap-2">
                <Layers size={22} className="text-[#00d4aa]" />
                System Diagrams & Validation Artifacts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-60 sm:h-72 rounded-xl overflow-hidden border border-[#1a2438] bg-[#0a0f1d]"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} diagram ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#1a2438] flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-[#00d4aa] hover:underline"
          >
            ← Return to Projects Index
          </Link>
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-sm text-[#8b95a8] hover:text-[#e8eaf0]"
          >
            Read Engineering Notes →
          </Link>
        </div>
      </div>
    </div>
  );
}
