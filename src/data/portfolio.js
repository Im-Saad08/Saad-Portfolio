export const personalInfo = {
  name: "Saad",
  title: "Computer Engineering Student | AI & Computer Vision Enthusiast",
  tagline: "I build practical software and engineering systems at the intersection of programming, artificial intelligence, computer vision, data, and embedded technology.",
  email: "imsaad.work@gmail.com",
  github: "https://github.com/Im-Saad08",
  linkedin: "YOUR_LINKEDIN_URL",
  location: "Islamabad, Pakistan",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Islamabad,Pakistan",
  university: "National University of Technology (NUTECH)",
  degree: "Computer Engineering Undergraduate",
};

export const aboutText = `
I'm a Computer Engineering undergraduate at NUTECH (National University of Technology), Islamabad, developing practical experience across the full engineering stack — from hardware and embedded systems up through software, data, and artificial intelligence.

My technical interests span computer vision, machine learning, image processing, signal processing, embedded Linux, and systems engineering. I enjoy working on projects that bridge the gap between low-level hardware understanding and high-level AI applications.

Through university coursework and independent projects, I've built systems involving automatic license plate recognition (ALPR), ECG signal processing, embedded Linux on Raspberry Pi, digital logic design, and various computer vision applications using OpenCV, YOLO, and MediaPipe.

I'm continuously expanding my skills in AI/ML, computer vision, software development, and embedded systems — with a focus on building practical, well-engineered solutions.
`.trim();

export const skills = {
  programming: [
    { name: "Python", icon: "code" },
    { name: "C++", icon: "code" },
    { name: "C", icon: "code" },
    { name: "MATLAB", icon: "cpu" },
    { name: "Verilog", icon: "cpu" },
  ],
  aiComputerVision: [
    { name: "OpenCV", icon: "eye" },
    { name: "YOLO / YOLOv8", icon: "eye" },
    { name: "OCR", icon: "scan-text" },
    { name: "Image Processing", icon: "image" },
    { name: "Computer Vision", icon: "eye" },
    { name: "TensorFlow", icon: "brain" },
    { name: "MediaPipe", icon: "hand" },
  ],
  dataScientific: [
    { name: "NumPy", icon: "database" },
    { name: "SciPy", icon: "database" },
    { name: "Matplotlib", icon: "bar-chart" },
    { name: "Jupyter Notebook", icon: "book-open" },
    { name: "Statistics", icon: "bar-chart" },
    { name: "Data Analysis", icon: "bar-chart" },
    { name: "Power BI", icon: "pie-chart" },
    { name: "Microsoft Excel", icon: "table" },
    { name: "SQL", icon: "database" },
    { name: "MySQL / MySQL Workbench", icon: "database" },
    { name: "PostgreSQL", icon: "database" },
  ],
  devTools: [
    { name: "Git", icon: "git-branch" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "code" },
    { name: "Linux", icon: "terminal" },
    { name: "Ubuntu", icon: "terminal" },
    { name: "Docker", icon: "box" },
    { name: "CMake", icon: "settings" },
  ],
  embeddedSystems: [
    { name: "Arduino", icon: "cpu" },
    { name: "Raspberry Pi", icon: "cpu" },
    { name: "Buildroot", icon: "terminal" },
    { name: "BusyBox", icon: "terminal" },
    { name: "PIC16F877A", icon: "cpu" },
    { name: "Intel 8051", icon: "cpu" },
    { name: "UART", icon: "cable" },
    { name: "Keil", icon: "wrench" },
    { name: "Proteus", icon: "wrench" },
    { name: "MPLAB X IDE", icon: "wrench" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI-Based Vehicle Authorization System using ALPR",
    description: `An AI-based Automatic License Plate Recognition system designed for vehicle identification and authorization. The pipeline processes images/video, detects vehicles and license plates, recognizes plate characters using OCR, and uses authorization logic/database records to determine whether a vehicle is authorized.`,
    longDescription: `This project implements a complete ALPR pipeline: vehicle detection → license plate detection → character segmentation → OCR recognition → authorization logic. Key technical aspects include handling OCR confidence thresholds, consensus from repeated observations, and backend/database integration for authorization records and logging.`,
    technologies: ["Python", "OpenCV", "YOLO", "OCR", "Computer Vision", "Docker", "PostgreSQL"],
    category: "AI / Computer Vision",
    featured: true,
    githubUrl: "#",
    liveUrl: null,
    image: null,
  },
  {
    id: 2,
    title: "Pacemaker ECG Signal Processing",
    description: `A university project involving ECG signal processing, analysis, and pacemaker-related logic using digital signal processing concepts and MATLAB.`,
    longDescription: `Academic signal-processing project focused on ECG signal acquisition, filtering, feature extraction, and pacemaker logic implementation. Applied digital signal processing concepts including filtering, FFT analysis, peak detection, and signal classification using MATLAB.`,
    technologies: ["MATLAB", "Signal Processing", "ECG Analysis", "Digital Signal Processing", "Mathematical Analysis"],
    category: "Signal Processing",
    featured: false,
    githubUrl: "#",
    liveUrl: null,
    image: null,
  },
  {
    id: 3,
    title: "Linux for Raspberry Pi",
    description: `A systems project focused on understanding Linux internals and building/customizing a Linux environment for Raspberry Pi.`,
    longDescription: `Deep dive into Linux systems engineering: kernel configuration, root filesystem creation, cross-compilation, and embedded Linux customization using Buildroot and BusyBox. This project reflects my interest in understanding the systems layer beneath application development.`,
    technologies: ["Linux", "Raspberry Pi", "Buildroot", "BusyBox", "Linux Kernel", "Root Filesystem", "Embedded Linux", "C/C++"],
    category: "Embedded Linux",
    featured: false,
    githubUrl: "#",
    liveUrl: null,
    image: null,
  },
  {
    id: 4,
    title: "4-Way Traffic Light Controller",
    description: `A digital electronics project implementing a four-way traffic light control system using digital logic and embedded/hardware concepts.`,
    longDescription: `Designed and simulated a four-way traffic light controller using digital logic design principles. Implemented state machine logic for traffic flow control, timing sequences, and pedestrian crossing integration. Developed and tested in Proteus simulation environment.`,
    technologies: ["Digital Logic", "Microcontrollers", "Electronics", "Proteus", "Embedded Systems"],
    category: "Digital Electronics",
    featured: false,
    githubUrl: "#",
    liveUrl: null,
    image: null,
  },
];

export const additionalProjects = [
  {
    title: "Hand Gesture Recognition System",
    description: "Computer-vision project for hand gesture recognition using OpenCV, MediaPipe, and TensorFlow.",
    technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
  },
  {
    title: "Smart Solar Powered Bicycle",
    description: "Engineering project involving a solar-powered bicycle concept and embedded/electrical engineering work.",
    technologies: ["Embedded Systems", "Electrical Engineering", "Solar Power"],
  },
  {
    title: "Laser-Based Bidirectional Data Transmission",
    description: "Arduino-based project exploring bidirectional data transmission using laser communication concepts.",
    technologies: ["Arduino", "Laser Communication", "Optical Data Transmission"],
  },
  {
    title: "Digital Thermometer & Humidity Monitor",
    description: "Microcontroller-based project with PIC16F877A and DHT22 sensor for environmental monitoring.",
    technologies: ["PIC16F877A", "DHT22", "Embedded C", "Microcontroller Programming"],
  },
  {
    title: "QR Generator",
    description: "Python-based QR code generation utility.",
    technologies: ["Python", "QR Code Generation"],
  },
];

export const education = {
  degree: "Computer Engineering (Undergraduate)",
  university: "National University of Technology (NUTECH)",
  location: "Islamabad, Pakistan",
  focusAreas: [
    "Computer Engineering Fundamentals",
    "Programming & Software Development",
    "Digital Systems Design",
    "Signal Processing",
    "Computer Networks",
    "Data Warehousing & Mining",
    "Probability & Statistics",
    "Embedded Systems",
    "Artificial Intelligence & Computer Vision",
  ],
};

export const learningJourney = [
  { layer: "Hardware", items: ["Digital Logic", "Microcontrollers", "Electronics", "Circuit Design"] },
  { layer: "Embedded Systems", items: ["Arduino", "PIC16F877A", "8051", "UART", "Proteus", "Keil", "MPLAB"] },
  { layer: "Linux & Systems", items: ["Embedded Linux", "Raspberry Pi", "Buildroot", "BusyBox", "Kernel", "Rootfs"] },
  { layer: "Software", items: ["Python", "C++", "C", "Git", "Docker", "Linux", "Backend Development"] },
  { layer: "Data & Scientific", items: ["NumPy", "SciPy", "MATLAB", "SQL", "Power BI", "Statistics", "Data Analysis"] },
  { layer: "AI & Computer Vision", items: ["OpenCV", "YOLO", "TensorFlow", "MediaPipe", "OCR", "Image Processing"] },
];

export const leadership = [
  {
    role: "Student Organization Leadership",
    organization: "NUTECH Student Initiatives",
    description: "Served in leadership roles including Chapter Coordinator/President-level responsibilities. Organized university awareness events and coordinated volunteer teams. Notable initiative: organized a health-awareness event at NUTECH.",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];