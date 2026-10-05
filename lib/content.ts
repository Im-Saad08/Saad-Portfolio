// ============================================================
// MOHTARM SAAD — Content Query & Data Access Layer
// ============================================================

import { projects } from "@/content/projects";
import { notes } from "@/content/notes";
import type { Project, Note } from "@/types";

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

export function getAllNotes(): Note[] {
  return notes;
}

export function getPublishedNotes(): Note[] {
  return notes.filter((n) => n.published);
}

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
