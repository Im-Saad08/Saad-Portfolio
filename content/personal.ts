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
  { id: "home", label: "Home", href: "/" },
  { id: "story", label: "Story", href: "/#story" },
  { id: "work", label: "Work", href: "/work" },
  { id: "now", label: "Now", href: "/now" },
  { id: "notes", label: "Notes", href: "/notes" },
  { id: "life", label: "Life", href: "/life" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export const homeIntro: HomeIntro = {
  greeting: "Hi, I'm Saad.",
  tagline: "Senior Computer Engineering undergraduate at NUTECH specializing in compute-efficient edge computer vision and practical software systems.",
  intro:
    "I engineer systems from hardware primitives up through high-level vision pipelines, data architectures, and edge deployments. I value live runtime verification over theoretical assumptions and build for real-world constraints.",
  currently: {
    heading: "Currently",
    items: [
      { text: "Senior Computer Engineering undergraduate at NUTECH (7th Semester, CEN Batch 22)" },
      { text: "Architecting Industrial Vision FYP: High-speed conveyor quality inspection with YOLOv8" },
      { text: "Engineering compute-efficient CPU pipelines: YOLOv8n, PaddleOCR, and ByteTrack" },
      { text: "Coursework in Digital System Design (Verilog RTL / FPGA), DBMS, and AI/ML" },
      { text: "Active retail investor on the Pakistan Stock Exchange (PSX) focusing on macro risk and dividend mechanics" },
    ],
  },
};
