import React from "react";
import type { Project, AdditionalProject } from "@/types";
import { sentryxMetadata, SentryxCaseStudy } from "./sentryx-ai-alpr";
import { fypMetadata, FypCaseStudy } from "./industrial-vision-fyp";
import { mriMetadata, MriCaseStudy } from "./brain-mri-segmentation";
import { schedulerMetadata, SchedulerCaseStudy } from "./posix-pthreads-scheduler";
import { courseworkProjects } from "./coursework";

export interface ProjectModule {
  metadata: Project;
  CaseStudy: React.ComponentType;
}

export const projectModules: Record<string, ProjectModule> = {
  [sentryxMetadata.slug]: {
    metadata: sentryxMetadata,
    CaseStudy: SentryxCaseStudy,
  },
  [fypMetadata.slug]: {
    metadata: fypMetadata,
    CaseStudy: FypCaseStudy,
  },
  [mriMetadata.slug]: {
    metadata: mriMetadata,
    CaseStudy: MriCaseStudy,
  },
  [schedulerMetadata.slug]: {
    metadata: schedulerMetadata,
    CaseStudy: SchedulerCaseStudy,
  },
};

export const projects: Project[] = [
  sentryxMetadata,
  fypMetadata,
  mriMetadata,
  schedulerMetadata,
];

export const additionalProjects: AdditionalProject[] = courseworkProjects;

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectModule(slug: string): ProjectModule | undefined {
  return projectModules[slug];
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAdditionalProjects(): AdditionalProject[] {
  return additionalProjects;
}
