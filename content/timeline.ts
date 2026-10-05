import type { TimelineEntry, TimelineCategory } from "@/types";

export const timelineCategories: readonly TimelineCategory[] = [
  "Engineering",
  "Projects",
  "Learning",
  "University",
  "Leadership",
  "Personal",
] as const;

export const timeline: TimelineEntry[] = [
  {
    id: 1,
    category: "University",
    date: "Fall 2022",
    title: "Commenced BS Computer Engineering at NUTECH",
    description: "Enrolled in Computer Engineering (CEN Batch 22) at the National University of Technology, Islamabad, building fundamentals in circuit theory, linear algebra, and discrete mathematics.",
    story: "Committed to mastering computer engineering from the physical transistor and logic gate level up to high-level distributed systems.",
  },
  {
    id: 2,
    category: "Engineering",
    date: "Spring 2024",
    title: "Embedded Microcontrollers & Low-Level C Firmware",
    description: "Designed embedded firmware for PIC16F877A and Intel 8051 architectures in MPLAB X; implemented UART communications, interrupt service routines, and ADC drivers.",
    story: "Hands-on experience with hardware timing constraints, Proteus circuit simulation, and datasheet register mappings, establishing the habit of verifying hardware limits directly.",
  },
  {
    id: 3,
    category: "Leadership",
    date: "2024 – 2025",
    title: "Elected President of JZT NUTECH & GYFHA Council",
    description: "Directed a 39-member student volunteer council; executed university-wide blood screening drives and coordinated national health seminars with HEC and the Ministry of Health.",
    story: "Managed multi-department teams across event management, media production, and logistics, learning to communicate and organize people with the same clarity required in systems engineering.",
  },
  {
    id: 4,
    category: "Engineering",
    date: "Spring 2026",
    title: "6th Semester CEPs: Image Processing, Operating Systems & Controls",
    description: "Completed three rigorous Complex Engineering Projects: automated Brain MRI segmentation, POSIX Pthreads CPU scheduling simulator in C, and MATLAB SISOTOOL root-locus controller synthesis.",
    story: "Built intuition for multi-threaded concurrency, memory virtualization, and frequency-domain compensator design, solidifying the bridge between math and running code.",
  },
  {
    id: 5,
    category: "Projects",
    date: "Summer 2026",
    title: "NESCOM Technical Placement & SENTRYX Defense",
    description: "Selected for the competitive 6-week engineering placement at NESCOM. Architected, benchmarked, and defended SENTRYX ALPR (~98.5% live accuracy on commodity 6-core CPUs) and authored a 22-page IEEE manuscript.",
    story: "Supervised by Dr. Inayat Ullah Khan. Addressed real edge cases: solved grille distortion by reducing padding to 15%, eliminated aspect-ratio gating failures with concurrent dual-candidate OCR, and decoupled video capture from inference threads.",
  },
  {
    id: 6,
    category: "Learning",
    date: "Fall 2026 (Current)",
    title: "Senior Year: Industrial Vision FYP & Verilog RTL",
    description: "Commenced 7th Semester pursuing Digital System Design (Verilog / FPGA), Relational DBMS (PostgreSQL), and launching the Industrial Vision conveyor inspection FYP for mineral and textile defect classification.",
    story: "Integrating deep learning edge inference with industrial mechanical conveyor setups, industrial cameras, and UART hardware actuation.",
  },
];
