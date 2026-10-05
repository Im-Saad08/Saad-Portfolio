import type { Project, AdditionalProject } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    slug: "sentryx-ai-alpr",
    title: "SENTRYX — AI-Based Vehicle Authorization System",
    description: `Production-grade, CPU-optimized Automatic License Plate Recognition (ALPR) system engineered for the NESCOM Capstone at NUTECH under Dr. Inayat Ullah Khan. Achieved ~98.5% live verification accuracy at 18–24 FPS on commodity 6-core CPUs without requiring GPUs.`,
    longDescription: `SENTRYX is an edge-optimized vehicle authorization platform architected for CPU-only deployment. The vision pipeline integrates fine-tuned YOLOv8n (0.991 mAP50, 1.9 ms detection latency) with ByteTrack multi-object tracking and a PaddleOCR PP-OCRv6 dual-candidate recognition engine (whole-crop and split-candidate).

Key Engineering Solutions:
• 15% Bounding Box Padding: Reduced from 40% to eliminate car grille distortion and background artifacts that corrupted character segmentation.
• Dual-Candidate OCR Engine: Concurrent full-crop and split evaluation, replacing brittle aspect-ratio heuristics for single-line vs. two-line Pakistani plates.
• Decoupled Threaded Processing: Background worker thread for OCR inference, eliminating OpenCV UI freezing during live 1080p webcam feeds.
• Backend & DB: Asynchronous FastAPI REST API with Neon Cloud PostgreSQL for authorized whitelist verification and real-time audit logging (with local CSV fallback).
• Empirical Validation: Rigorously benchmarked on 1,765 validation images and continuous 20+ minute hardware tests. Documented in a 22-page IEEE-standard technical manuscript.`,
    technologies: ["Python 3.12", "YOLOv8n", "PaddleOCR", "ByteTrack", "FastAPI", "PostgreSQL", "OpenCV"],
    category: "AI / Computer Vision",
    featured: true,
    githubUrl: "https://github.com/Im-Saad08",
    reportUrl: "/docs/SENTRYX-IEEE-Final-Report.pdf",
    liveUrl: null,
    heroImage: "/projects/alpr-hero.svg",
    images: [
      "/projects/alpr-1.svg",
      "/projects/alpr-2.svg",
      "/projects/alpr-3.svg",
    ],
    videoUrl: null,
  },
  {
    id: 2,
    slug: "industrial-vision-fyp",
    title: "Industrial Vision & Conveyor Quality Control (FYP)",
    description: `High-speed conveyor quality control system integrating hardware-level camera triggers, YOLOv8 edge classification, and UART signaling for pneumatic rejection.`,
    longDescription: `Engineering Final Year Project focused on high-throughput industrial automated inspection (75% mechanical/hardware conveyor infrastructure, 25% edge software).

Target Industrial Applications:
• Khewra Rock Salt grading: Color grade classification and mineral purity assessment.
• Continuous textile weaving: Real-time defect detection across moving fabric webs.
The system pairs edge inference on constrained hardware with deterministic microcontroller signaling to actuate pneumatic reject valves without line delays.`,
    technologies: ["Python", "YOLOv8", "OpenCV", "Edge AI", "UART", "Microcontrollers", "Industrial Automation"],
    category: "AI / Computer Vision",
    featured: false,
    githubUrl: null,
    liveUrl: null,
    heroImage: "/projects/rpi-hero.jpg",
    images: [
      "/projects/rpi-1.svg",
      "/projects/rpi-2.svg",
    ],
    videoUrl: null,
  },
  {
    id: 3,
    slug: "brain-mri-segmentation",
    title: "Brain MRI Automated Segmentation & Image Analysis",
    description: `Medical image processing pipeline applying spatial filtering, contrast enhancement, power-law transformations, and Otsu thresholding for Brain MRI scans.`,
    longDescription: `Developed for Digital Image Processing & Analysis (CEN 4114). The pipeline implements spatial sampling, quantization analysis, median smoothing, Sobel/Prewitt gradient edge detection, and histogram equalization to segment anatomical regions in brain MRI scans. Automated report generation pipeline authored to verify pixel-level intensity histograms and mathematical distributions.`,
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing", "Matplotlib", "Medical Imaging"],
    category: "Signal Processing",
    featured: false,
    githubUrl: null,
    liveUrl: null,
    heroImage: "/projects/ecg-hero.svg",
    images: [
      "/projects/ecg-1.svg",
      "/projects/ecg-2.svg",
    ],
    videoUrl: null,
  },
  {
    id: 4,
    slug: "posix-pthreads-scheduler",
    title: "POSIX Multi-Threaded Concurrency & CPU Scheduler",
    description: `Low-level systems software in C under Linux GCC demonstrating POSIX Pthreads synchronization, mutex locks, and CPU scheduling simulators with Gantt charting.`,
    longDescription: `Developed for Operating Systems (OS CEP). Implements process lifecycle modeling, context switching logic, and concurrency controls using POSIX Pthreads and mutexes. Features algorithmic simulators for FCFS, Shortest Job First (SJF), Priority, and Round Robin scheduling algorithms with automated Gantt chart visualization and turnaround/wait-time evaluation.`,
    technologies: ["C", "POSIX Pthreads", "GCC", "Linux", "Concurrency", "Operating Systems"],
    category: "Operating Systems",
    featured: false,
    githubUrl: null,
    liveUrl: null,
    heroImage: "/projects/traffic-hero.svg",
    images: [
      "/projects/traffic-1.svg",
      "/projects/traffic-2.svg",
    ],
    videoUrl: null,
  },
];

export const additionalProjects: AdditionalProject[] = [
  {
    title: "Dynamic Modeling & Control Systems Synthesis (CE CEP)",
    description: "Mass-spring-damper and RLC transfer function modeling, root locus synthesis, and lead/lag controller design evaluated in MATLAB & SISOTOOL.",
    technologies: ["MATLAB", "SISOTOOL", "Control Systems", "Dynamic Modeling"],
  },
  {
    title: "Microcontroller Firmware & UART Interfacing (MPI CEP)",
    description: "Embedded firmware authored in C and Assembly for PIC16F877A and Intel 8051 within MPLAB X, interfacing UART serial communication, LCDs, and timer interrupts.",
    technologies: ["Embedded C", "PIC16F877A", "Intel 8051", "MPLAB X", "UART", "Proteus"],
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    description: "Computer vision pipeline utilizing OpenCV and MediaPipe for spatial hand landmark detection and gesture classification (~94% accuracy).",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
  },
  {
    title: "Embedded Linux Rootfs for Raspberry Pi",
    description: "Kernel configuration, cross-compilation, BusyBox initialization, and minimal root filesystem generation using Buildroot.",
    technologies: ["Linux Kernel", "Buildroot", "BusyBox", "Raspberry Pi", "Cross-Compilation"],
  },
];
