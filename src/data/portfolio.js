// ============================================================
// Saad's corner of the internet — content data
// Personal Website + Engineering Portfolio + Learning Journal
// + Life Archive. Edit content here; components render it.
// ============================================================

export const personalInfo = {
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

export const navItems = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "work", label: "Work" },
  { id: "now", label: "Now" },
  { id: "notes", label: "Notes" },
  { id: "life", label: "Life" },
  { id: "contact", label: "Contact" },
];

// ------------------------------------------------------------
// HOME — the short, personal introduction + a live "currently"
// preview. Edit `currently` freely; it is meant to change often.
// ------------------------------------------------------------
export const homeIntro = {
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

// ------------------------------------------------------------
// STORY — not a résumé About Me. A narrative that grows over
// time. Add chapters to `chapters` as they happen; do NOT
// invent events.
// ------------------------------------------------------------
export const story = {
  opening:
    "I've always been driven by understanding what happens beneath the surface of compute systems.",
  paragraphs: [
    "As a Computer Engineering student at NUTECH, that curiosity began at the lowest levels — Boolean algebra, digital logic gates, PIC16F877A and 8051 microcontrollers, and embedded C. Mastering hardware primitives gave me an enduring respect for hardware boundaries and taught me never to treat the systems beneath my code as black boxes.",
    "From bare metal, I expanded into signal processing, operating system concurrency, and practical computer vision. When designing SENTRYX — an AI-based vehicle authorization system for the NESCOM Capstone under Dr. Inayat Ullah Khan — the challenge was proving that accurate edge AI doesn't require expensive enterprise GPUs. By fine-tuning YOLOv8n, optimizing PaddleOCR dual-candidate pipelines, and decoupling video ingestion threads, we achieved ~98.5% live accuracy on commodity 6-core CPUs.",
    "Beyond pure engineering, university has challenged me with leadership. Serving as President of the JZT NUTECH Chapter and President of the GYFHA Local Council, I led 39 student volunteers in executing university-wide community health and Thalassemia awareness campaigns alongside the Higher Education Commission (HEC) and the Ministry of Health.",
    "This corner of the internet is a transparent record of that ongoing journey: what I build, the engineering heuristics I test, the milestones I reach, and the lessons learned along the way."
  ],
  chapters: [],
};

// ------------------------------------------------------------
// STORY JOURNEY CARDS — visual cards for the right column of
// the Story section. Fanning card deck with 4 test cards.
// Each card: { title, description, image }
// ------------------------------------------------------------
export const storyJourneyCards = [
  {
    title: "University & Systems",
    description: "Computer Engineering at NUTECH — Verilog RTL, operating systems, and late-night debugging.",
    image: "/story/journey-university.jpg",
  },
  {
    title: "SENTRYX & Vision",
    description: "NESCOM Capstone — compute-efficient ALPR pipeline achieving ~98.5% accuracy on commodity CPUs.",
    image: "/story/journey-building.jpg",
  },
  {
    title: "Leadership & Teams",
    description: "JZT Chapter Coordinator & GYFHA Council President — coordinating 39 volunteers and national health drives.",
    image: "/story/journey-leadership.jpg",
  },
  {
    title: "Current Focus",
    description: "Industrial Vision FYP, edge inference, FPGA digital design, and systems documentation.",
    image: "/story/journey-focus.jpg",
  },
];

// ------------------------------------------------------------
// NOW — inspired by nownownow.com-style pages. A snapshot of
// what Saad is focused on right now. Update periodically.
// ------------------------------------------------------------
export const nowContent = {
  updatedLabel: "Last updated",
  lastUpdated: "October 2026",
  focus: [
    {
      icon: "book-open",
      title: "Senior Year Coursework",
      description: "7th Semester at NUTECH — Digital System Design (combinational/sequential logic, Verilog RTL, FPGA), Database Management Systems (relational algebra, BCNF/3NF, PostgreSQL), and AI/ML.",
    },
    {
      icon: "eye",
      title: "Industrial Vision FYP",
      description: "Engineering an edge automated conveyor quality control platform combining YOLOv8 classification, industrial camera setups, and UART pneumatic reject triggering.",
    },
    {
      icon: "wrench",
      title: "Edge AI & Vision Pipelines",
      description: "Refining compute-conscious, CPU-friendly inference workflows (YOLOv8n, PaddleOCR PP-OCRv6, ByteTrack) for low-latency edge deployment.",
    },
    {
      icon: "database",
      title: "Data & Systems Infrastructure",
      description: "Database normalization, transaction logging with Neon Cloud PostgreSQL, and local AI routing configurations.",
    },
    {
      icon: "pen-line",
      title: "Writing & Heuristics",
      description: "Documenting operational engineering mental models, systems failure modes, and macroeconomic observations on Pakistani equity markets.",
    },
    {
      icon: "users",
      title: "Community & Leadership",
      description: "Supporting JZT and student humanitarian networks in Islamabad and Taxila for Thalassemia screening and youth engagement.",
    },
  ],
};

// ------------------------------------------------------------
// NOTES — technical essays, mental models, and retrospectives.
// ------------------------------------------------------------
export const notes = [
  {
    slug: "sentryx-ieee-defense-manuscript",
    title: "SENTRYX: High-Throughput ALPR on Commodity CPUs (IEEE Report)",
    category: "Defense Research",
    published: true,
    date: "August 2026",
    excerpt:
      "A 22-page IEEE-standard technical manuscript detailing how custom YOLOv8n fine-tuning, PaddleOCR dual-candidate parsing, and decoupled threading achieved ~98.5% live verification accuracy at 18–24 FPS without dedicated GPUs.",
    link: `${import.meta.env.BASE_URL}docs/SENTRYX-IEEE-Final-Report.pdf`,
    content: `The SENTRYX technical manuscript was authored as the final deliverable for the NESCOM Capstone Internship under Dr. Inayat Ullah Khan. 

Key architectural highlights:
1. Low-Latency Detection: Fine-tuned YOLOv8n checkpoint achieving 0.991 mAP50, 0.979 Precision, and 1.9 ms detection latency across 1,765 validation images.
2. Dual-Candidate OCR Engine: Concurrent whole-crop and split-candidate character recognition using PaddleOCR PP-OCRv6, eliminating brittle aspect-ratio heuristics for Pakistani number plates.
3. Threaded Video Ingestion: Decoupled background worker thread for OCR inference, eliminating OpenCV UI freezing during continuous 1080p stream processing.
4. Database Integration: Asynchronous FastAPI verification layer connected to Neon Cloud PostgreSQL for authorized whitelist checks and audit logging.`,
  },
  {
    slug: "mental-models-engineering-heuristics",
    title: "Mental Models & Operational Engineering Heuristics",
    category: "Systems Thinking",
    published: true,
    date: "October 2026",
    excerpt:
      "Four core operational heuristics distilled from real engineering failures: The Concrete Bottleneck Principle, The Abstraction Inversion Hazard, The Dual-Hypothesis Evaluation Pattern, and The Avoidance-As-Research Trap.",
    content: `A collection of operational mental models and diagnostic frameworks distilled from real-world engineering projects:

1. The Concrete Bottleneck Principle:
In any multi-stage pipeline, optimizing a stage that is not the primary bottleneck is wasted engineering energy. In SENTRYX, debating whether YOLOv8n had a 0.991 vs 0.995 mAP was irrelevant compared to the actual operational bottleneck: the blocking OpenCV UI loop on single-threaded video playback. Decoupling frame capture from OCR through a threaded worker immediately eliminated the real bottleneck.

2. The Abstraction Inversion Hazard:
Adopting high-level abstractions (heavy containers, microservices, complex frameworks) before mastering low-level primitives introduces opaque failure modes that resist quick debugging. Always understand the native environment (.venv, direct CLI binaries, POSIX threads, raw SQL) before wrapping it in higher-order abstractions.

3. The Dual-Hypothesis Evaluation Pattern:
When deterministic rule-based gating (e.g., aspect-ratio checks to distinguish single-line from two-line plates) fails due to perspective noise, avoid fine-tuning the threshold. Instead, run both hypotheses simultaneously and let downstream confidence logits resolve the classification.

4. The Avoidance-As-Research Trap:
Endless literature reviews and UI tweaking are frequently disguised forms of execution avoidance. Force early live contact with the runtime environment: test real camera feeds, profile on actual target hardware, and confront data discrepancies immediately.`,
  },
  {
    slug: "macroeconomic-observations-psx-circular-debt",
    title: "Macroeconomic Realities: PSX Dividend Mechanics & Circular Debt",
    category: "Finance & Markets",
    published: true,
    date: "October 2026",
    excerpt:
      "Why upstream state E&P valuations on the Pakistan Stock Exchange are constrained by energy circular debt rather than international spot crude rallies, and the mechanical reality of dividend capture.",
    content: `Analytical observations on domestic Pakistani capital markets (PSX / KSE-100) and asset pricing frameworks:

1. The Circular Debt Trap in E&P Stocks:
Retail investors frequently treat upstream oil and gas exploration companies (e.g., OGDC, PPL) as direct proxies for international crude oil prices. This analysis is fundamentally flawed in Pakistan. The government-backed power circular debt forces upstream E&P companies to supply gas and oil without receiving cash payments on schedule. Their balance sheets carry massive illiquid receivables, requiring high borrowing costs and suppressing dividend payouts regardless of global crude rallies. Low-debt producers (such as MARI, backed by dedicated fertilizer contracts) offer significantly cleaner exposure.

2. The Mechanical Reality of Dividend Capture:
Inexperienced traders frequently buy shares immediately prior to the book-closure date to capture announced dividends. However, the stock price automatically adjusts downward by the exact dividend amount on the ex-dividend date. Without subsequent fundamental buying momentum, the capture is net-neutral or negative after transaction fees and withholding taxes. True dividend investing requires buying fundamentally underpriced cash-flow aristocrats well before the cycle peak.

3. Monetary Policy & Sector Spreads:
Tracking the turning point of State Bank of Pakistan (SBP) policy rates is the highest-leverage signal for equity reallocation: rate cuts compress commercial bank net interest margins (NIMs) while catalyzing high-yield REITs, industrial manufacturers, and dividend aristocrats.`,
  },
  {
    slug: "two-tier-learning-architecture",
    title: "Overcoming Blank-Sheet Exam Anxiety: A Two-Tier Learning Framework",
    category: "Pedagogy & Learning",
    published: true,
    date: "October 2026",
    excerpt:
      "A cognitive engineering framework that separates intuitive, line-by-line conceptual mastery from modular, bulleted response templates formatted for timed written reproduction.",
    content: `A pedagogical framework engineered to counter the cognitive phenomenon of exam anxiety (freezing or blanking during formal written engineering tests despite deep conceptual comprehension):

1. The Diagnostic:
Deep conceptual understanding acquired during lab sessions or code implementations does not automatically translate into rapid written reproduction under timed exam constraints. Under stress, unstructured knowledge scatters, causing cognitive paralysis. Attempting to memorize long-form paragraphs fails under pressure.

2. Tier 1: Intuitive Conceptual Mastery:
Focus on why an algorithm, transfer function, or circuit exists and what practical failure it was created to solve. Methods:
• Line-by-line code explanation (what, why, purpose).
• Geometric/visual representations (state transition diagrams, root locus poles/zeros).
• Hand-calculated numerical examples (histogram equalizations, page table translation, A* search expansions).

3. Tier 2: Exam-Ready Crystallization:
Focus on rapid, zero-hesitation physical reproduction on an exam sheet:
• Exact definition in 1–2 precise technical sentences.
• 3–4 bulleted operational steps or governing equations.
• A standard block diagram or state table.
• Time-boxed practice writing without looking at notes to build motor memory.`,
  },
  {
    slug: "linux-buildroot-lessons",
    title: "What Buildroot and BusyBox Taught Me About Linux Internals",
    category: "Systems",
    published: false,
    date: "Planned",
    excerpt: "Configuring custom kernels, writing minimal init scripts, and creating stripped-down embedded environments for Raspberry Pi.",
  },
];

// ------------------------------------------------------------
// WORK — the project showcase. Case-study style detail lives
// in longDescription.
// ------------------------------------------------------------
export const projects = [
  {
    id: 1,
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
    reportUrl: `${import.meta.env.BASE_URL}docs/SENTRYX-IEEE-Final-Report.pdf`,
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
    githubUrl: "#",
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
    title: "Brain MRI Automated Segmentation & Image Analysis",
    description: `Medical image processing pipeline applying spatial filtering, contrast enhancement, power-law transformations, and Otsu thresholding for Brain MRI scans.`,
    longDescription: `Developed for Digital Image Processing & Analysis (CEN 4114). The pipeline implements spatial sampling, quantization analysis, median smoothing, Sobel/Prewitt gradient edge detection, and histogram equalization to segment anatomical regions in brain MRI scans. Automated report generation pipeline authored to verify pixel-level intensity histograms and mathematical distributions.`,
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing", "Matplotlib", "Medical Imaging"],
    category: "Signal Processing",
    featured: false,
    githubUrl: "#",
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
    title: "POSIX Multi-Threaded Concurrency & CPU Scheduler",
    description: `Low-level systems software in C under Linux GCC demonstrating POSIX Pthreads synchronization, mutex locks, and CPU scheduling simulators with Gantt charting.`,
    longDescription: `Developed for Operating Systems (OS CEP). Implements process lifecycle modeling, context switching logic, and concurrency controls using POSIX Pthreads and mutexes. Features algorithmic simulators for FCFS, Shortest Job First (SJF), Priority, and Round Robin scheduling algorithms with automated Gantt chart visualization and turnaround/wait-time evaluation.`,
    technologies: ["C", "POSIX Pthreads", "GCC", "Linux", "Concurrency", "Operating Systems"],
    category: "Operating Systems",
    featured: false,
    githubUrl: "#",
    liveUrl: null,
    heroImage: "/projects/traffic-hero.svg",
    images: [
      "/projects/traffic-1.svg",
      "/projects/traffic-2.svg",
    ],
    videoUrl: null,
  },
];

// Additional projects catalog
export const additionalProjects = [
  {
    title: "Dynamic Modeling & Control Systems Synthesis (CE CEP)",
    description: "Mass-spring-damper and RLC transfer function modeling, root locus synthesis, and lead/lag controller design evaluated in MATLAB & SISOTOOL.",
    technologies: ["MATLAB", "SISOTOOL", "Control Systems", "Dynamic Modeling"],
    image: "/images/projects/solar-bicycle.jpg",
  },
  {
    title: "Microcontroller Firmware & UART Interfacing (MPI CEP)",
    description: "Embedded firmware authored in C and Assembly for PIC16F877A and Intel 8051 within MPLAB X, interfacing UART serial communication, LCDs, and timer interrupts.",
    technologies: ["Embedded C", "PIC16F877A", "Intel 8051", "MPLAB X", "UART", "Proteus"],
    image: "/images/projects/digital-thermometer.jpg",
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    description: "Computer vision pipeline utilizing OpenCV and MediaPipe for spatial hand landmark detection and gesture classification (~94% accuracy).",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    image: "/images/projects/gesture-recognition.jpg",
  },
  {
    title: "Embedded Linux Rootfs for Raspberry Pi",
    description: "Kernel configuration, cross-compilation, BusyBox initialization, and minimal root filesystem generation using Buildroot.",
    technologies: ["Linux Kernel", "Buildroot", "BusyBox", "Raspberry Pi", "Cross-Compilation"],
    image: "/images/projects/laser-data-transmission.jpg",
  },
];

// ------------------------------------------------------------
// SKILLS — grouped tags with real documentation links.
// ------------------------------------------------------------
export const skills = {
  programming: [
    { name: "Python", icon: "code", link: "https://www.python.org" },
    { name: "C++", icon: "code", link: "https://isocpp.org" },
    { name: "C", icon: "code", link: "https://en.cppreference.com/w/c" },
    { name: "MATLAB", icon: "cpu", link: "https://www.mathworks.com/products/matlab.html" },
    { name: "Verilog", icon: "cpu", link: "https://www.chipverify.com/verilog/verilog-tutorial" },
  ],
  aiComputerVision: [
    { name: "YOLOv8n / YOLO", icon: "eye", link: "https://docs.ultralytics.com" },
    { name: "PaddleOCR (PP-OCRv6)", icon: "scan-text", link: "https://github.com/PaddlePaddle/PaddleOCR" },
    { name: "ByteTrack", icon: "layers", link: "https://github.com/ifzhang/ByteTrack" },
    { name: "OpenCV", icon: "eye", link: "https://opencv.org" },
    { name: "Computer Vision", icon: "eye", link: "https://paperswithcode.com/area/computer-vision" },
    { name: "MediaPipe", icon: "hand", link: "https://developers.google.com/mediapipe" },
    { name: "Image Processing", icon: "image", link: "https://scikit-image.org" },
  ],
  dataScientific: [
    { name: "PostgreSQL", icon: "database", link: "https://www.postgresql.org" },
    { name: "Neon Cloud DB", icon: "database", link: "https://neon.tech" },
    { name: "MySQL / Workbench", icon: "database", link: "https://www.mysql.com/products/workbench/" },
    { name: "SQLite", icon: "database", link: "https://www.sqlite.org" },
    { name: "NumPy", icon: "database", link: "https://numpy.org" },
    { name: "SciPy", icon: "database", link: "https://scipy.org" },
    { name: "Matplotlib", icon: "bar-chart", link: "https://matplotlib.org" },
    { name: "Power BI", icon: "pie-chart", link: "https://www.microsoft.com/power-platform/products/power-bi" },
    { name: "Data Analysis", icon: "bar-chart", link: "https://pandas.pydata.org" },
  ],
  devTools: [
    { name: "FastAPI", icon: "terminal", link: "https://fastapi.tiangolo.com" },
    { name: "Git", icon: "git-branch", link: "https://git-scm.com" },
    { name: "GitHub", icon: "github", link: "https://github.com" },
    { name: "VS Code", icon: "code", link: "https://code.visualstudio.com" },
    { name: "Linux / Ubuntu", icon: "terminal", link: "https://www.kernel.org" },
    { name: "GCC / Dev-C++", icon: "code", link: "https://gcc.gnu.org" },
    { name: "Native venv", icon: "box", link: "https://docs.python.org/3/library/venv.html" },
  ],
  embeddedSystems: [
    { name: "PIC16F877A", icon: "cpu", link: "https://www.microchip.com/en-us/product/PIC16F877A" },
    { name: "Intel 8051", icon: "cpu", link: "https://www.keil.com/pack/doc/c51/index.html" },
    { name: "UART", icon: "cable", link: "https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter" },
    { name: "Raspberry Pi", icon: "cpu", link: "https://www.raspberrypi.com" },
    { name: "Arduino", icon: "cpu", link: "https://www.arduino.cc" },
    { name: "MPLAB X IDE", icon: "wrench", link: "https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide" },
    { name: "Proteus", icon: "wrench", link: "https://www.labcenter.com" },
    { name: "Keil µVision", icon: "wrench", link: "https://www.keil.com" },
  ],
};

export const skillCategoryLabels = {
  programming: "Programming & Hardware Description",
  aiComputerVision: "AI & Computer Vision",
  dataScientific: "Data & Relational Databases",
  devTools: "Development & Frameworks",
  embeddedSystems: "Embedded & Hardware Interfaces",
};

export const skillCategoryDescriptions = {
  programming: "Core programming languages and hardware description",
  aiComputerVision: "Edge computer vision, deep learning detection, and text recognition",
  dataScientific: "Relational schema design, database normalization, and analytics",
  devTools: "API development, version control, and development environments",
  embeddedSystems: "Microcontrollers, serial protocols, simulation, and embedded Linux",
};

// ------------------------------------------------------------
// EDUCATION — degree, focus areas, and institutional context.
// ------------------------------------------------------------
export const education = {
  degree: "Bachelor of Science in Computer Engineering (BS CEN)",
  university: "National University of Technology (NUTECH)",
  location: "Islamabad, Pakistan",
  college: {
    degree: "FSc Pre-Engineering",
    institution: "Iqbal Campus, Jinnah Education System",
  },
  focusAreas: [
    "Digital System Design (Verilog / FPGA)",
    "Database Management Systems (PostgreSQL / Relational Algebra)",
    "Artificial Intelligence & Machine Learning",
    "Digital Image Processing & Analysis (CEN 4114)",
    "Operating Systems & Concurrency (POSIX C)",
    "Control Engineering & Dynamic Modeling (MATLAB)",
    "Microprocessors & Interfacing (PIC16F877A / 8051)",
    "Digital Signal Processing (DSP / FFT)",
    "Computer Communication & Networks",
    "Data Warehousing & Mining (Star Schema / ETL)",
  ],
  gallery: {
    university: [],
    college: [],
  },
};

// ------------------------------------------------------------
// LEADERSHIP & COMMUNITY — real involvement and track record.
// ------------------------------------------------------------
export const leadership = {
  intro:
    "Alongside engineering, a large part of my university experience has been organizing people, coordinating volunteer teams, and leading public health advocacy initiatives that extend beyond campus walls.",
  organizations: [
    {
      key: "jzt-nutech",
      role: "President / Chapter Coordinator",
      organization: "JZT NUTECH",
      fullName: "Jehad for Zero Thalassemia — NUTECH Chapter",
      website: "https://jztpakistan.org/",
      logo: "/leadership/jzt-logo.jpeg",
      description:
        "Led the JZT chapter at NUTECH — organizing campus-wide blood screening drives, raising public awareness regarding genetic prevention of Thalassemia, and connecting student volunteers with healthcare professionals.",
      galleryTitle: "Moments from JZT NUTECH",
      gallery: [
        {
          image: "/leadership/jzt-1.jpeg",
          caption: "Thalassemia awareness session in lecture halls for students",
        },
        {
          image: "/leadership/jzt-2.jpg",
          caption: "Visiting and spending time with Thalassemia patients at Sundas Foundation, Islamabad",
        },
        {
          image: "/leadership/jzt-3.jpeg",
          caption: "Plantation drive and awareness campaign on university campus",
        },
      ],
    },
    {
      key: "gyfha-nutech",
      role: "President",
      organization: "GYFHA NUTECH Local Council",
      fullName: "Global Youth Forum for Health and Awareness — NUTECH Local Council",
      website: null,
      logo: "/leadership/gyfha-logo.png",
      description:
        "Presided over a 39-member student council across Event Management, Media, Drama, and Design departments. Executed major awareness seminars in formal collaboration with the Higher Education Commission (HEC) and the Ministry of Health, Pakistan.",
      galleryTitle: "Moments from GYFHA NUTECH",
      gallery: [
        {
          image: "/leadership/gyfha-1.jpg",
          caption: "Evaluation of Poster & Reel Competition Entries for GYFHA Awareness Event",
        },
        {
          image: "/leadership/gyfha-2.jpg",
          caption: "Thalassemia Awareness Session by Dr Sadia Atif at NUTECH",
        },
        {
          image: "/leadership/gyfha-3.jpg",
          caption: "Receiving Award In Recognition for Valuable Contribution to Thalassemia Awareness",
        },
      ],
    },
    {
      key: "jzt-taxila",
      role: "Taxila City Coordinator",
      organization: "JZT Pakistan",
      fullName: "Jehad for Zero Thalassemia — Taxila City Coordination",
      website: "https://jztpakistan.org/",
      logo: "/leadership/jzt-logo.jpeg",
      description:
        "Coordinating JZT Pakistan's regional activities in Taxila — connecting regional healthcare volunteers with screening campaigns and diagnostic centers.",
      galleryTitle: "Moments from JZT Taxila",
      gallery: [],
    },
  ],
};

// ------------------------------------------------------------
// LIFE — memories, events, milestones, experiences.
// ------------------------------------------------------------
export const lifeCategories = [
  "University Memories",
  "Events",
  "Trips",
  "Milestones",
  "Student Life",
  "Hobbies & Interests",
  "Community",
];

export const lifeEntries = [
  {
    id: "nescom-defense-2026",
    date: "August 2026",
    title: "Defending SENTRYX at NESCOM",
    description: "Delivering the live hardware demonstration and defending the 22-page IEEE technical report on CPU-friendly ALPR before the technical evaluation committee.",
    category: "Milestones",
    image: "/projects/alpr-hero.svg",
  },
  {
    id: "sundas-foundation-visit",
    date: "2024",
    title: "Sundas Foundation Patient Visit",
    description: "Spending time with children undergoing regular blood transfusions at Sundas Foundation, F-9 Islamabad, reinforcing the importance of preventative health screening.",
    category: "Community",
    image: "/leadership/jzt-2.jpg",
  },
  {
    id: "hec-health-seminar",
    date: "2024",
    title: "HEC & Ministry of Health Seminar",
    description: "Leading the GYFHA council to organize a national-level health awareness seminar at NUTECH with guest keynote speakers from the medical community.",
    category: "Events",
    image: "/leadership/gyfha-2.jpg",
  },
];

export const lifePlaceholder = {
  title: "This space is continuously updated.",
  description:
    "Life happens between the commits — events, engineering milestones, volunteer campaigns, and moments worth remembering.",
};

// ------------------------------------------------------------
// TIMELINE / JOURNEY — milestone system across categories.
// ------------------------------------------------------------
export const timelineCategories = ["Engineering", "Projects", "Learning", "University", "Leadership", "Personal"];

export const timeline = [
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

// ------------------------------------------------------------
// LEARNING JOURNEY — layered view of the engineering stack.
// ------------------------------------------------------------
export const learningJourney = [
  { layer: "Hardware Primitives", items: ["Digital Logic Design", "Verilog RTL", "FPGA Synthesis", "Circuit Analysis"] },
  { layer: "Embedded & Microcontrollers", items: ["PIC16F877A", "Intel 8051", "UART", "MPLAB X", "Proteus", "Keil"] },
  { layer: "Linux & Operating Systems", items: ["POSIX Pthreads", "Concurrency & Locks", "Embedded Linux", "Buildroot", "Kernel Drivers"] },
  { layer: "Software & APIs", items: ["Python 3.12", "C / C++", "FastAPI", "Git / GitHub", "Native venv", "GCC"] },
  { layer: "Data Infrastructure", items: ["Neon Cloud PostgreSQL", "MySQL Workbench", "Relational Normalization (3NF)", "NumPy", "Power BI"] },
  { layer: "Applied Computer Vision", items: ["YOLOv8n", "PaddleOCR (PP-OCRv6)", "ByteTrack", "OpenCV", "Medical DIP", "Edge Inference"] },
];
