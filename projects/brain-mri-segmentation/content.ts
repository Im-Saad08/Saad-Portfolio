import type { Project } from "@/types";

export const mriMetadata: Project = {
  id: 3,
  slug: "brain-mri-segmentation",
  title: "Brain MRI Automated Segmentation & Image Analysis",
  description:
    "Medical image processing pipeline applying spatial filtering, contrast enhancement, power-law transformations, and Otsu thresholding for Brain MRI scans.",
  longDescription: `Developed for Digital Image Processing & Analysis (CEN 4114). The pipeline implements spatial sampling, quantization analysis, median smoothing, Sobel/Prewitt gradient edge detection, and histogram equalization to segment anatomical regions in brain MRI scans. Automated report generation pipeline authored to verify pixel-level intensity histograms and mathematical distributions.`,
  technologies: [
    "Python",
    "OpenCV",
    "NumPy",
    "Image Processing",
    "Matplotlib",
    "Medical Imaging",
  ],
  category: "Signal Processing",
  featured: false,
  metric: "Spatial Filtering, Gradient Edges & Otsu Segmentation",
  githubUrl: null,
  liveUrl: null,
  heroImage: "/projects/ecg-hero.svg",
  images: [
    "/projects/ecg-1.svg",
    "/projects/ecg-2.svg",
  ],
  videoUrl: null,
};

export const mriDetails = {
  course: "Digital Image Processing & Analysis (CEN 4114)",
  summary:
    "An algorithmic image processing pipeline developed to perform automated morphological segmentation and contrast normalization on medical MRI DICOM and raster datasets.",
  stages: [
    {
      name: "Spatial Quantization & Normalization",
      description:
        "Analyzes pixel bit-depth distributions and applies power-law (gamma) transformations to expand dynamic range across low-contrast cerebral gray and white matter.",
    },
    {
      name: "Non-Linear Median Noise Rejection",
      description:
        "Applies 3x3 and 5x5 median spatial filters to eliminate high-frequency Rician sensor noise without blurring critical anatomical tissue boundaries.",
    },
    {
      name: "First-Order Gradient Edge Extraction",
      description:
        "Computes horizontal and vertical directional derivatives using Sobel and Prewitt convolution operators to localize skull boundaries and ventricular cavities.",
    },
    {
      name: "Automated Otsu Thresholding",
      description:
        "Calculates intra-class variance minimization across bimodal intensity histograms, establishing automated separation thresholds between background fluid and brain tissue.",
    },
  ],
};
