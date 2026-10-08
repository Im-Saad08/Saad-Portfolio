import type { SkillItem } from "@/types";

export const skills: Record<string, SkillItem[]> = {
  hardwareEmbedded: [
    { name: "Verilog RTL", icon: "cpu" },
    { name: "FPGA Synthesis", icon: "cpu" },
    { name: "PIC16F877A", icon: "cpu" },
    { name: "Intel 8051", icon: "cpu" },
    { name: "UART Serial", icon: "cable" },
    { name: "Raspberry Pi", icon: "cpu" },
    { name: "Embedded Linux", icon: "cpu" },
    { name: "MPLAB X IDE", icon: "wrench" },
    { name: "Proteus Simulation", icon: "wrench" },
    { name: "Keil µVision", icon: "wrench" },
  ],
  systemsConcurrency: [
    { name: "C", icon: "code" },
    { name: "C++", icon: "code" },
    { name: "POSIX Pthreads", icon: "terminal" },
    { name: "Linux / Ubuntu", icon: "terminal" },
    { name: "GCC / Make", icon: "code" },
    { name: "Git & GitHub", icon: "git-branch" },
  ],
  aiComputerVision: [
    { name: "YOLOv8n / YOLO", icon: "eye" },
    { name: "PaddleOCR (PP-OCRv6)", icon: "scan-text" },
    { name: "ByteTrack", icon: "layers" },
    { name: "OpenCV", icon: "eye" },
    { name: "Medical DIP", icon: "image" },
    { name: "MediaPipe", icon: "hand" },
    { name: "Edge Inference", icon: "cpu" },
  ],
  dataScientific: [
    { name: "Python 3.12", icon: "code" },
    { name: "PostgreSQL", icon: "database" },
    { name: "Neon Cloud DB", icon: "database" },
    { name: "Relational 3NF", icon: "database" },
    { name: "FastAPI", icon: "terminal" },
    { name: "NumPy", icon: "database" },
    { name: "SciPy", icon: "database" },
    { name: "MATLAB", icon: "cpu" },
    { name: "Power BI", icon: "pie-chart" },
  ],
};

export const skillCategoryLabels: Record<string, string> = {
  hardwareEmbedded: "Hardware Primitives & Microcontrollers",
  systemsConcurrency: "Systems Software & Concurrency",
  aiComputerVision: "Edge AI & Computer Vision",
  dataScientific: "Data Infrastructure & Scientific Computing",
};

export const skillCategoryDescriptions: Record<string, string> = {
  hardwareEmbedded: "Digital logic, HDL synthesis, bare-metal microcontrollers, and embedded Linux",
  systemsConcurrency: "Low-level systems programming in C/C++, thread synchronization, and Linux environments",
  aiComputerVision: "Compute-efficient deep learning detection, OCR pipelines, and real-time tracking",
  dataScientific: "Relational schema design, asynchronous REST APIs, and mathematical computing",
};
