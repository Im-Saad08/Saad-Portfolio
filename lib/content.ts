// ============================================================
// MOHTARM SAAD — Content Query & Data Access Layer
// ============================================================

import { projects } from "@/content/projects";
import type { Project } from "@/types";

export * from "@/types";
export * from "@/content";

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
