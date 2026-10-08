import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug, getProjectModule } from "@/projects";
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
  const projectModule = getProjectModule(slug);

  if (!projectModule) {
    notFound();
  }

  const { CaseStudy } = projectModule;

  return <CaseStudy />;
}
