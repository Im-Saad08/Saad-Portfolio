import type { PersonalInfo, HomeIntro, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Saad",
  fullName: "Muhammad Saad",
  brand: "MOHTARM SAAD",
  domain: "mohtarmsaad.com",
  title: "Computer Engineering Student (Senior)",
  tagline: "Applied Computer Vision, Edge AI, and Systems Engineering. Senior at NUTECH Islamabad.",
  email: "imsaad.work@gmail.com",
  github: "https://github.com/Im-Saad08",
  location: "Islamabad, Pakistan",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Islamabad,Pakistan",
  university: "National University of Technology (NUTECH)",
  degree: "BS Computer Engineering (Senior, CEN Batch 22)",
};

export const navItems: NavItem[] = [
  { id: "work", label: "Work", href: "/work" },
  { id: "writing", label: "Writing", href: "/notes" },
  { id: "about", label: "About", href: "/about" },
  { id: "now", label: "Now", href: "/now" },
];

export const homeIntro: HomeIntro = {
  greeting: "Hi, I'm Saad.",
  tagline: "Senior Computer Engineering undergraduate at NUTECH specializing in compute-efficient edge computer vision and practical systems software.",
  intro:
    "I engineer systems for resource-constrained hardware — optimizing deep learning pipelines to run in real time on commodity CPUs, writing low-level concurrency in C, and bridging bare-metal circuits with software.",
  currently: {
    heading: "Current Focus",
    items: [
      { text: "Senior Computer Engineering at NUTECH (7th Semester, CEN Batch 22)" },
      { text: "Architecting Industrial Vision FYP: High-speed conveyor quality inspection with YOLOv8" },
      { text: "Edge AI optimization: Real-time CPU inference with YOLOv8n, PaddleOCR, and ByteTrack" },
    ],
  },
};
