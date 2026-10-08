import type { Project } from "@/types";

export const fypMetadata: Project = {
  id: 2,
  slug: "industrial-vision-fyp",
  title: "Industrial Vision & Conveyor Quality Control (FYP)",
  description:
    "High-speed conveyor quality control system integrating hardware-level camera triggers, YOLOv8 edge classification, and UART signaling for pneumatic rejection.",
  longDescription: `Engineering Final Year Project focused on high-throughput industrial automated inspection (75% mechanical/hardware conveyor infrastructure, 25% edge software).

Target Industrial Applications:
• Khewra Rock Salt grading: Color grade classification and mineral purity assessment.
• Continuous textile weaving: Real-time defect detection across moving fabric webs.
The system pairs edge inference on constrained hardware with deterministic microcontroller signaling to actuate pneumatic reject valves without line delays.`,
  technologies: [
    "Python",
    "YOLOv8",
    "OpenCV",
    "Edge AI",
    "UART",
    "Microcontrollers",
    "Industrial Automation",
  ],
  category: "AI / Computer Vision",
  featured: false,
  metric: "YOLOv8 Edge Inference + UART Hardware Actuation",
  githubUrl: null,
  liveUrl: null,
  heroImage: "/projects/rpi-hero.jpg",
  images: [
    "/projects/rpi-1.svg",
    "/projects/rpi-2.svg",
  ],
  videoUrl: null,
};

export const fypDetails = {
  status: "Senior Capstone (Under Active Development)",
  scope: {
    mechanical: "75% Mechanical, Camera & Conveyor Infrastructure",
    software: "25% Edge AI Pipeline & Deterministic UART Actuation",
  },
  applications: [
    {
      title: "Khewra Rock Salt Grading",
      description:
        "Automated optical grading of pink salt lumps: color intensity classification, mineral purity evaluation, and crystal transparency indexing on moving conveyor lines.",
    },
    {
      title: "Continuous Textile Weaving Inspection",
      description:
        "High-speed spatial scanning of fabric webs during continuous loom feeding to flag thread breaks, tension defects, and weave irregularities in real time.",
    },
  ],
  pipelineSteps: [
    {
      step: "01 // Hardware Trigger",
      description:
        "Optical through-beam sensor triggers the industrial camera module precisely as materials enter the optical inspection tunnel.",
    },
    {
      step: "02 // Edge Inference",
      description:
        "Lightweight YOLOv8 model classifies defects or grade within an ~18 ms latency budget on edge compute hardware.",
    },
    {
      step: "03 // Deterministic Actuation",
      description:
        "UART interrupt signals the downstream microcontroller, calculating belt velocity to fire high-pressure pneumatic reject solenoids accurately.",
    },
  ],
};
