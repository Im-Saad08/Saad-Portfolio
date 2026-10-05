// ============================================================
// MOHTARM SAAD — Domain Type Definitions
// ============================================================

export interface PersonalInfo {
  name: string;
  fullName: string;
  brand: string;
  domain: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  location: string;
  mapsUrl: string;
  university: string;
  degree: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface CurrentlyItem {
  text: string;
}

export interface HomeIntro {
  greeting: string;
  tagline: string;
  intro: string;
  currently: {
    heading: string;
    items: CurrentlyItem[];
  };
}

export interface StoryChapter {
  slug?: string;
  date: string;
  title: string;
  content: string;
}

export interface Story {
  opening: string;
  paragraphs: string[];
  chapters: StoryChapter[];
}

export interface NowFocusItem {
  icon?: string;
  title: string;
  description: string;
}

export interface NowContent {
  updatedLabel: string;
  lastUpdated: string;
  focus: NowFocusItem[];
}

export interface Note {
  slug: string;
  title: string;
  category: string;
  published: boolean;
  date: string;
  excerpt?: string;
  link?: string;
  content?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl: string | null;
  reportUrl?: string | null;
  liveUrl?: string | null;
  heroImage: string;
  images: string[];
  videoUrl?: string | null;
}

export interface AdditionalProject {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  link?: string;
}

export interface EducationData {
  degree: string;
  university: string;
  location: string;
  college: {
    degree: string;
    institution: string;
  };
  focusAreas: string[];
  gallery?: {
    university: string[];
    college: string[];
  };
}

export interface LeadershipGalleryItem {
  image: string;
  caption: string;
}

export interface LeadershipOrg {
  key: string;
  role: string;
  organization: string;
  fullName?: string;
  website: string | null;
  logo: string;
  description: string;
  galleryTitle?: string;
  gallery: LeadershipGalleryItem[];
}

export type TimelineCategory = "Engineering" | "Projects" | "Learning" | "University" | "Leadership" | "Personal";

export interface TimelineEntry {
  id: number;
  category: TimelineCategory;
  date: string;
  title: string;
  description: string;
  story?: string;
}
