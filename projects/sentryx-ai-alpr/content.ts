import type { Project } from "@/types";

export const sentryxMetadata: Project = {
  id: 1,
  slug: "sentryx-ai-alpr",
  title: "SENTRYX — AI-Based Vehicle Authorization System",
  description:
    "Production-grade, CPU-optimized Automatic License Plate Recognition (ALPR) system engineered for the NESCOM Capstone at NUTECH under Dr. Inayat Ullah Khan. Achieved ~98.5% live verification accuracy at 18–24 FPS on commodity 6-core CPUs without requiring GPUs.",
  longDescription: `SENTRYX is an edge-optimized vehicle authorization platform architected for CPU-only deployment. The vision pipeline integrates fine-tuned YOLOv8n (0.991 mAP50, 1.9 ms detection latency) with ByteTrack multi-object tracking and a PaddleOCR PP-OCRv6 dual-candidate recognition engine (whole-crop and split-candidate).

Key Engineering Solutions:
• 15% Bounding Box Padding: Reduced from 40% to eliminate car grille distortion and background artifacts that corrupted character segmentation.
• Dual-Candidate OCR Engine: Concurrent full-crop and split evaluation, replacing brittle aspect-ratio heuristics for single-line vs. two-line Pakistani plates.
• Decoupled Threaded Processing: Background worker thread for OCR inference, eliminating OpenCV UI freezing during live 1080p webcam feeds.
• Backend & DB: Asynchronous FastAPI REST API with Neon Cloud PostgreSQL for authorized whitelist verification and real-time audit logging (with local CSV fallback).
• Empirical Validation: Rigorously benchmarked on 1,765 validation images and continuous 20+ minute hardware tests. Documented in a 22-page IEEE-standard technical manuscript.`,
  technologies: [
    "Python 3.12",
    "YOLOv8n",
    "PaddleOCR",
    "ByteTrack",
    "FastAPI",
    "PostgreSQL",
    "OpenCV",
  ],
  category: "AI / Computer Vision",
  featured: true,
  metric: "~98.5% Accuracy @ 18–24 FPS on 6-Core CPUs",
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
};

export const sentryxDetails = {
  supervision: "Supervised by Dr. Inayat Ullah Khan (NUTECH / NESCOM Placement)",
  summary:
    "SENTRYX is an edge-optimized vehicle authorization platform architected for CPU-only deployment. The vision pipeline integrates fine-tuned YOLOv8n with ByteTrack multi-object tracking and a PaddleOCR PP-OCRv6 dual-candidate recognition engine.",
  solutions: [
    {
      title: "15% Bounding Box Padding",
      description:
        "Reduced crop padding from an initial 40% heuristic down to 15%. This eliminates car grille textures, bumper shadows, and radiator patterns that previously corrupted character segmentation.",
    },
    {
      title: "Dual-Candidate OCR Engine",
      description:
        "Concurrent full-crop and split-candidate evaluation. Completely replaces brittle aspect-ratio checks that fail under varying camera angles on single-line vs. two-line Pakistani license plates.",
    },
    {
      title: "Decoupled Threaded Processing",
      description:
        "Dedicated background worker thread for OCR inference, completely eliminating OpenCV GUI thread freezing during continuous 1080p stream ingestion.",
    },
    {
      title: "Backend & Audit Persistence",
      description:
        "Asynchronous FastAPI REST layer backed by Neon Cloud PostgreSQL for authorized whitelist matching, real-time audit logging, and fallback local CSV persistence during network drops.",
    },
  ],
  benchmarks: [
    { label: "Live Verification Accuracy", value: "~98.5%" },
    { label: "Inference Throughput", value: "18–24 FPS (Commodity CPU)" },
    { label: "Validation mAP50", value: "0.991" },
    { label: "Detection Latency", value: "1.9 ms (YOLOv8n)" },
    { label: "OCR Latency", value: "~42 ms per crop" },
    { label: "Validation Dataset", value: "1,765 images" },
  ],
};
