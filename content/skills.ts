import type { SkillItem } from "@/types";

export const skills: Record<string, SkillItem[]> = {
  programming: [
    { name: "Python", icon: "code" },
    { name: "C++", icon: "code" },
    { name: "C", icon: "code" },
    { name: "MATLAB", icon: "cpu" },
    { name: "Verilog RTL", icon: "cpu" },
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
    { name: "PostgreSQL", icon: "database" },
    { name: "Neon Cloud DB", icon: "database" },
    { name: "MySQL / Workbench", icon: "database" },
    { name: "Relational 3NF", icon: "database" },
    { name: "NumPy", icon: "database" },
    { name: "SciPy", icon: "database" },
    { name: "Matplotlib", icon: "bar-chart" },
    { name: "Power BI", icon: "pie-chart" },
  ],
  devTools: [
    { name: "FastAPI", icon: "terminal" },
    { name: "Git & GitHub", icon: "git-branch" },
    { name: "Linux / Ubuntu", icon: "terminal" },
    { name: "POSIX Pthreads", icon: "terminal" },
    { name: "GCC / Make", icon: "code" },
    { name: "VS Code", icon: "code" },
    { name: "Native venv", icon: "box" },
  ],
  embeddedSystems: [
    { name: "PIC16F877A", icon: "cpu" },
    { name: "Intel 8051", icon: "cpu" },
    { name: "UART Serial", icon: "cable" },
    { name: "Raspberry Pi", icon: "cpu" },
    { name: "Embedded Linux", icon: "cpu" },
    { name: "MPLAB X IDE", icon: "wrench" },
    { name: "Proteus Simulation", icon: "wrench" },
    { name: "Keil µVision", icon: "wrench" },
  ],
};

export const skillCategoryLabels: Record<string, string> = {
  programming: "Programming & Hardware Description",
  aiComputerVision: "AI & Computer Vision",
  dataScientific: "Data & Relational Databases",
  devTools: "Development & Frameworks",
  embeddedSystems: "Embedded & Hardware Interfaces",
};

export const skillCategoryDescriptions: Record<string, string> = {
  programming: "Core programming languages and hardware description",
  aiComputerVision: "Edge computer vision, deep learning detection, and text recognition",
  dataScientific: "Relational schema design, database normalization, and analytics",
  devTools: "API development, concurrency, version control, and development environments",
  embeddedSystems: "Microcontrollers, serial protocols, simulation, and embedded Linux",
};
