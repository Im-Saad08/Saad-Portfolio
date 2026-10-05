import type { Story, StoryJourneyCard, LearningLayer } from "@/types";

export const story: Story = {
  opening: "I've always been driven by understanding what happens beneath the surface of compute systems.",
  paragraphs: [
    "As a Computer Engineering student at NUTECH, that curiosity began at the lowest levels — Boolean algebra, digital logic gates, PIC16F877A and 8051 microcontrollers, and embedded C. Mastering hardware primitives gave me an enduring respect for hardware boundaries and taught me never to treat the systems beneath my code as black boxes.",
    "From bare metal, I expanded into signal processing, operating system concurrency, and practical computer vision. When designing SENTRYX — an AI-based vehicle authorization system for the NESCOM Capstone under Dr. Inayat Ullah Khan — the challenge was proving that accurate edge AI doesn't require expensive enterprise GPUs. By fine-tuning YOLOv8n, optimizing PaddleOCR dual-candidate pipelines, and decoupling video ingestion threads, we achieved ~98.5% live accuracy on commodity 6-core CPUs.",
    "Beyond pure engineering, university has challenged me with leadership. Serving as President of the JZT NUTECH Chapter and President of the GYFHA Local Council, I led 39 student volunteers in executing university-wide community health and Thalassemia awareness campaigns alongside the Higher Education Commission (HEC) and the Ministry of Health.",
    "This corner of the internet is a transparent record of that ongoing journey: what I build, the engineering heuristics I test, the milestones I reach, and the lessons learned along the way.",
  ],
  chapters: [],
};

export const storyJourneyCards: StoryJourneyCard[] = [
  {
    title: "University & Systems",
    description: "Computer Engineering at NUTECH — Verilog RTL, operating systems, and late-night debugging.",
    image: "/story/journey-university.jpg",
  },
  {
    title: "SENTRYX & Vision",
    description: "NESCOM Capstone — compute-efficient ALPR pipeline achieving ~98.5% accuracy on commodity CPUs.",
    image: "/projects/alpr-hero.svg",
  },
  {
    title: "Leadership & Teams",
    description: "JZT Chapter Coordinator & GYFHA Council President — coordinating 39 volunteers and national health drives.",
    image: "/leadership/jzt-2.jpg",
  },
  {
    title: "Current Focus",
    description: "Industrial Vision FYP, edge inference, FPGA digital design, and systems documentation.",
    image: "/projects/rpi-hero.jpg",
  },
];

export const learningJourney: LearningLayer[] = [
  { layer: "Hardware Primitives", items: ["Digital Logic Design", "Verilog RTL", "FPGA Synthesis", "Circuit Analysis"] },
  { layer: "Embedded & Microcontrollers", items: ["PIC16F877A", "Intel 8051", "UART", "MPLAB X", "Proteus", "Keil"] },
  { layer: "Linux & Operating Systems", items: ["POSIX Pthreads", "Concurrency & Locks", "Embedded Linux", "Buildroot", "Kernel Drivers"] },
  { layer: "Software & APIs", items: ["Python 3.12", "C / C++", "FastAPI", "Git / GitHub", "Native venv", "GCC"] },
  { layer: "Data Infrastructure", items: ["Neon Cloud PostgreSQL", "MySQL Workbench", "Relational Normalization (3NF)", "NumPy", "Power BI"] },
  { layer: "Applied Computer Vision", items: ["YOLOv8n", "PaddleOCR (PP-OCRv6)", "ByteTrack", "OpenCV", "Medical DIP", "Edge Inference"] },
];
