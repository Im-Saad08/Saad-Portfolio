import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
    <div className="pt-24 pb-20">
      <div className="container max-w-3xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/work"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {project.category}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Hero Visual */}
        {project.heroImage && (
          <div className="relative w-full h-60 sm:h-80 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 mb-8">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-gray-200">
          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
            >
              Download IEEE Report (PDF)
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
            >
              GitHub Repository
            </a>
          )}
        </div>

        {/* Technical Architecture */}
        <section className="space-y-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Overview & Implementation Details
            </h2>
            <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {project.longDescription || project.description}
            </div>
          </div>

          {/* Technology Matrix */}
          <div className="p-5 rounded-lg border border-gray-200 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Technologies & Environment
            </h3>
            <div className="flex flex-wrap gap-1.5" role="list">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-medium text-gray-700 bg-white border border-gray-200"
                  role="listitem"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Diagrams / Images */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                System Diagrams & Verification Artifacts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-48 sm:h-56 rounded-lg overflow-hidden border border-gray-200 bg-gray-50"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} diagram ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between text-sm">
          <Link href="/work" className="font-medium text-blue-600 hover:underline">
            ← Return to projects
          </Link>
          <Link href="/notes" className="text-gray-600 hover:text-gray-900">
            Read technical notes →
          </Link>
        </div>
      </div>
    </div>
  );
}
