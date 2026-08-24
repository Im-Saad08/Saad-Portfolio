// ============================================================
// Saad's corner of the internet — content data
// Personal Website + Engineering Portfolio + Learning Journal
// + Life Archive. Edit content here; components render it.
// ============================================================

export const personalInfo = {
  name: "Saad",
  fullName: "Mohtarm Saad",
  brand: "MOHTARM SAAD",
  domain: "mohtarmsaad.com",
  title: "Computer Engineering Student",
  tagline: "Builder. Learner. Curious about AI, computer vision, software and systems.",
  email: "imsaad.work@gmail.com",
  github: "https://github.com/Im-Saad08",
  location: "Islamabad, Pakistan",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Islamabad,Pakistan",
  university: "National University of Technology (NUTECH)",
  degree: "Computer Engineering Undergraduate",
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
  intro:
    "I enjoy understanding how things work and turning ideas into working systems, from embedded hardware up through software, data, and AI.",
  currently: {
    heading: "Currently",
    items: [
      { text: "Studying Computer Engineering at NUTECH" },
      { text: "Done with 6th semester" },
      { text: "Exploring AI and Computer Vision" },
      { text: "Building software and engineering projects" },
      { text: "Working with data" },
    ],
  },
};

// ------------------------------------------------------------
// STORY — not a résumé About Me. A narrative that grows over
// time. Add chapters to `chapters` as they happen; do NOT
// invent events. Placeholders are intentional.
// ------------------------------------------------------------
export const story = {
  opening:
    "I've always been curious about what happens beneath the surface.",
  paragraphs: [
    "As an Engineering student, that curiosity has taken me from digital logic and microcontrollers to software, data, and computer vision. I love understanding how a system works at its foundations, then exploring what can be built on top of them.",
    "Most of what I learn comes through building. Some projects become working systems, others become lessons in what not to do. Both are part of the journey.",
    "Beyond technology, university has taken me into student organizations and leadership experiences that taught me as much about people and responsibility as engineering has taught me about systems.",
    "This digital home of mine is a record of that journey: what I build, what I learn, and the life happening along the way."
  ],
  // Future chapters of the story. Leave empty entries ready
  // for real events only — never fabricate.
  chapters: [],
};

// ------------------------------------------------------------
// STORY JOURNEY CARDS — visual cards for the right column of
// the Story section. Fanning card deck with 4 test cards.
// Each card: { title, description, image }
// ------------------------------------------------------------
export const storyJourneyCards = [
  {
    title: "University Diary",
    description: "Computer Engineering at NUTECH — coursework, labs, and late-night debugging sessions.",
    image: "/story/journey-university.jpg",
  },
  {
    title: "Building Systems",
    description: "From embedded Linux to ALPR pipelines — turning ideas into working systems.",
    image: "/story/journey-building.jpg",
  },
  {
    title: "Leadership & Teams",
    description: "JZT NUTECH chapter coordinator & GYFHA president — organizing people and campaigns.",
    image: "/story/journey-leadership.jpg",
  },
  {
    title: "Current Focus",
    description: "AI/Computer Vision, signal processing, and documenting the journey here.",
    image: "/story/journey-focus.jpg",
  },
];

// ------------------------------------------------------------
// NOW — inspired by nownownow.com-style pages. A snapshot of
// what Saad is focused on right now. Update periodically.
// ------------------------------------------------------------
export const nowContent = {
  updatedLabel: "Last updated",
  // Keep this a plain string so there is no fabricated date —
  // update it manually when you edit the list below.
  lastUpdated: "August 2026",
  focus: [
    {
      icon: "book-open",
      title: "Studying",
      description: "Computer Engineering at NUTECH — done with 6th semester, moving into the later years of the degree.",
    },
    {
      icon: "eye",
      title: "Exploring",
      description: "AI and computer vision — object detection, OCR pipelines, image processing with OpenCV.",
    },
    {
      icon: "wrench",
      title: "Building",
      description: "Software and engineering projects — ALPR systems, embedded Linux setups, signal processing experiments.",
    },
    {
      icon: "database",
      title: "Working with",
      description: "Data — analysis, scientific computing, and turning raw signals into something meaningful.",
    },
    {
      icon: "pen-line",
      title: "Documenting",
      description: "Writing notes about what I learn and keeping this site alive as my corner of the internet.",
    },
    {
      icon: "users",
      title: "Involved in",
      description: "JZT NUTECH and GYFHA NUTECH Local Council — community health awareness and volunteer coordination.",
    },
  ],
};

// ------------------------------------------------------------
// NOTES — a future-ready writing system. These are *planned*
// topics, not finished articles. Flip `published` to true and
// add `date`/`excerpt`/`body` when a real note exists.
// ------------------------------------------------------------
export const notes = [
  {
    slug: "alpr-pipeline-lessons",
    title: "What I learned building an ALPR pipeline",
    category: "Projects",
    published: false,
    excerpt: null,
  },
  {
    slug: "first-experience-with-docker",
    title: "My first experience with Docker",
    category: "Learning",
    published: false,
    excerpt: null,
  },
  {
    slug: "buildroot-taught-me-linux",
    title: "What Buildroot taught me about Linux",
    category: "Systems",
    published: false,
    excerpt: null,
  },
  {
    slug: "misunderstanding-computer-vision",
    title: "Things I misunderstood about Computer Vision",
    category: "Learning",
    published: false,
    excerpt: null,
  },
  {
    slug: "building-instead-of-watching",
    title: "Learning by building instead of only watching tutorials",
    category: "Reflections",
    published: false,
    excerpt: null,
  },
];

// ------------------------------------------------------------
// WORK — the project showcase. Same data the Work section
// renders; case-study style detail lives in longDescription.
// ------------------------------------------------------------
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
    title: "Pacemaker ECG Signal Processing",
    description: `A university project involving ECG signal processing, analysis, and pacemaker-related logic using digital signal processing concepts and MATLAB.`,
    longDescription: `Academic signal-processing project focused on ECG signal acquisition, filtering, feature extraction, and pacemaker logic implementation. Applied digital signal processing concepts including filtering, FFT analysis, peak detection, and signal classification using MATLAB.`,
    technologies: ["MATLAB", "Signal Processing", "ECG Analysis", "Digital Signal Processing", "Mathematical Analysis"],
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
    id: 3,
    title: "Linux for Raspberry Pi",
    description: `A systems project focused on understanding Linux internals and building/customizing a Linux environment for Raspberry Pi.`,
    longDescription: `Deep dive into Linux systems engineering: kernel configuration, root filesystem creation, cross-compilation, and embedded Linux customization using Buildroot and BusyBox. This project reflects my interest in understanding the systems layer beneath application development.`,
    technologies: ["Linux", "Raspberry Pi", "Buildroot", "BusyBox", "Linux Kernel", "Root Filesystem", "Embedded Linux", "C/C++"],
    category: "Embedded Linux",
    featured: false,
    githubUrl: "#",
    liveUrl: null,
    heroImage: "/projects/rpi-hero.jpg",
    images: [
      "/projects/rpi-1.svg",
      "/projects/rpi-2.svg",
      "/projects/rpi-3.svg",
    ],
    videoUrl: null,
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
    heroImage: "/projects/traffic-hero.svg",
    images: [
      "/projects/traffic-1.svg",
      "/projects/traffic-2.svg",
    ],
    videoUrl: null,
  },
];

// Image fields point to placeholders — swap in real photos when ready.
export const additionalProjects = [
  {
    title: "Hand Gesture Recognition System",
    description: "Computer-vision project for hand gesture recognition using OpenCV, MediaPipe, and TensorFlow.",
    technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    image: "/images/projects/gesture-recognition.jpg",
  },
  {
    title: "Smart Solar Powered Bicycle",
    description: "Engineering project involving a solar-powered bicycle concept and embedded/electrical engineering work.",
    technologies: ["Embedded Systems", "Electrical Engineering", "Solar Power"],
    image: "/images/projects/solar-bicycle.jpg",
  },
  {
    title: "Laser-Based Bidirectional Data Transmission",
    description: "Arduino-based project exploring bidirectional data transmission using laser communication concepts.",
    technologies: ["Arduino", "Laser Communication", "Optical Data Transmission"],
    image: "/images/projects/laser-data-transmission.jpg",
  },
  {
    title: "Digital Thermometer & Humidity Monitor",
    description: "Microcontroller-based project with PIC16F877A and DHT22 sensor for environmental monitoring.",
    technologies: ["PIC16F877A", "DHT22", "Embedded C", "Microcontroller Programming"],
    image: "/images/projects/digital-thermometer.jpg",
  },
];

// ------------------------------------------------------------
// SKILLS — grouped tags, no fake progress bars. Every entry
// gets a real link rendered by Skills.jsx.
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
    { name: "OpenCV", icon: "eye", link: "https://opencv.org" },
    { name: "YOLOv8 / YOLO11n", icon: "eye", link: "https://docs.ultralytics.com" },
    { name: "OCR", icon: "scan-text", link: "https://tesseract-ocr.github.io" },
    { name: "Image Processing", icon: "image", link: "https://scikit-image.org" },
    { name: "Computer Vision", icon: "eye", link: "https://paperswithcode.com/area/computer-vision" },
    { name: "TensorFlow", icon: "brain", link: "https://www.tensorflow.org" },
    { name: "MediaPipe", icon: "hand", link: "https://developers.google.com/mediapipe" },
  ],
  dataScientific: [
    { name: "NumPy", icon: "database", link: "https://numpy.org" },
    { name: "SciPy", icon: "database", link: "https://scipy.org" },
    { name: "Matplotlib", icon: "bar-chart", link: "https://matplotlib.org" },
    { name: "Jupyter Notebook", icon: "book-open", link: "https://jupyter.org" },
    { name: "Statistics", icon: "bar-chart", link: "https://scikit-learn.org/stable/" },
    { name: "Data Analysis", icon: "bar-chart", link: "https://pandas.pydata.org" },
    { name: "Power BI", icon: "pie-chart", link: "https://www.microsoft.com/en-us/power-platform/products/power-bi" },
    { name: "Microsoft Excel", icon: "table", link: "https://www.microsoft.com/en-us/microsoft-365/excel" },
    { name: "SQL", icon: "database", link: "https://www.w3schools.com/sql/" },
    { name: "MySQL / MySQL Workbench", icon: "database", link: "https://www.mysql.com/products/workbench/" },
    { name: "PostgreSQL", icon: "database", link: "https://www.postgresql.org" },
  ],
  devTools: [
    { name: "Git", icon: "git-branch", link: "https://git-scm.com" },
    { name: "GitHub", icon: "github", link: "https://github.com" },
    { name: "VS Code", icon: "code", link: "https://code.visualstudio.com" },
    { name: "Linux", icon: "terminal", link: "https://www.kernel.org" },
    { name: "Ubuntu", icon: "terminal", link: "https://ubuntu.com" },
    { name: "Docker", icon: "box", link: "https://www.docker.com" },
  ],
  embeddedSystems: [
    { name: "Arduino", icon: "cpu", link: "https://www.arduino.cc" },
    { name: "Raspberry Pi", icon: "cpu", link: "https://www.raspberrypi.com" },
    { name: "PIC16F877A", icon: "cpu", link: "https://www.microchip.com/en-us/product/PIC16F877A" },
    { name: "Intel 8051", icon: "cpu", link: "https://www.keil.com/pack/doc/c51/index.html" },
    { name: "UART", icon: "cable", link: "https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter" },
    { name: "Keil", icon: "wrench", link: "https://www.keil.com" },
    { name: "Proteus", icon: "wrench", link: "https://www.labcenter.com" },
    { name: "MPLAB X IDE", icon: "wrench", link: "https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide" },
  ],
};

export const skillCategoryLabels = {
  programming: "Programming",
  aiComputerVision: "AI & Computer Vision",
  dataScientific: "Data & Scientific Computing",
  devTools: "Development & Tools",
  embeddedSystems: "Embedded & Systems",
};

export const skillCategoryDescriptions = {
  programming: "Core programming languages and hardware description",
  aiComputerVision: "Computer vision, deep learning, and image analysis",
  dataScientific: "Data analysis, scientific computing, and visualization",
  devTools: "Development workflow, version control, and infrastructure",
  embeddedSystems: "Microcontrollers, embedded Linux, and hardware interfaces",
};

// ------------------------------------------------------------
// EDUCATION — modest, accurate. No GPA, no dates, no awards.
// Gallery entries are placeholders ready for real photos.
// ------------------------------------------------------------
export const education = {
  degree: "Computer Engineering Undergraduate",
  university: "National University of Technology (NUTECH)",
  location: "Islamabad, Pakistan",
  college: {
    degree: "FSc Pre-Engineering Graduate",
    institution: "Iqbal Campus, Jinnah Education System",
  },
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
  // Photo gallery architecture — add real photos + captions.
  // Each entry: { image: "/path.jpg", caption: "..." }
  gallery: {
    university: [],
    college: [],
  },
};

// ------------------------------------------------------------
// LEADERSHIP & COMMUNITY — real involvement, presented as part
// of life rather than corporate experience. Photo galleries
// are architecture-ready placeholders.
// ------------------------------------------------------------
export const leadership = {
  intro:
    "Alongside engineering, a large part of my university life has been organizing people, running awareness campaigns, coordinating volunteers, and helping student communities do work that reaches past campus.",
  organizations: [
    {
      key: "jzt-nutech",
      role: "Chapter Coordinator",
      organization: "JZT NUTECH",
      fullName: "Jehad for Zero Thalassemia — NUTECH Chapter",
      website: "https://jztpakistan.org/",
      logo: "/leadership/jzt-logo.jpeg",
      description:
        "Leading the JZT chapter at NUTECH — organizing awareness events about Thalassemia, coordinating volunteer teams, and connecting the university community with JZT Pakistan's mission.",
      galleryTitle: "Moments from JZT NUTECH",
      // Each entry: { image: "/path.jpg", caption: "..." }
      gallery: [
        {
          image: "/leadership/jzt-1.jpeg",
          caption: "Thalassemia awareness session in lecture halls for students",
        },
        {
          image: "/leadership/jzt-2.jpg",
          caption: "A humbling experience visiting and spending time with Thalassemia patients at Sundas Foundation, F9, Islamabad",
        },
        {
          image: "/leadership/jzt-3.jpeg",
          caption: "Celebrating Pakistan's Independence Day with a JZT NUTECH Plantation Drive on campus",
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
        "President of the GYFHA local council at NUTECH — leading youth-led health and awareness initiatives, event organization, and volunteer coordination.",
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
        "Coordinating JZT Pakistan's activities in Taxila — working between the national organization and local volunteers to support awareness and screening efforts.",
      galleryTitle: "Moments from JZT Taxila",
      gallery: [],
    },
  ],
};

// ------------------------------------------------------------
// LIFE — memories, events, milestones, experiences. Entries are
// added over time. Content model per entry:
//   date, title, description, category, image, story (optional)
// Do not invent entries — start empty until real ones exist.
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

export const lifeEntries = [];

// Placeholder card shown while the Life archive is empty.
export const lifePlaceholder = {
  title: "This space is still growing.",
  description:
    "Life happens between the commits — events, trips, late-night builds, people, and moments worth remembering. This section will slowly fill with photographs and stories from my journey.",
};

// ------------------------------------------------------------
// TIMELINE / JOURNEY — milestone system across categories.
// Designed to grow over years. Categories: Engineering,
// Projects, Learning, University, Leadership, Personal.
// Only add entries backed by reality; leave the rest open.
// ------------------------------------------------------------
export const timelineCategories = ["Engineering", "Projects", "Learning", "University", "Leadership", "Personal"];

export const timeline = [];

// ------------------------------------------------------------
// LEARNING JOURNEY — layered view of the engineering stack
// (kept from the earlier design; rendered within Story).
// ------------------------------------------------------------
export const learningJourney = [
  { layer: "Hardware", items: ["Digital Logic", "Microcontrollers", "Electronics", "Circuit Design"] },
  { layer: "Embedded Systems", items: ["Arduino", "PIC16F877A", "8051", "UART", "Proteus", "Keil", "MPLAB"] },
  { layer: "Linux & Systems", items: ["Embedded Linux", "Raspberry Pi", "Buildroot", "BusyBox", "Kernel", "Rootfs"] },
  { layer: "Software", items: ["Python", "C++", "C", "Git", "Docker", "Linux", "Backend Development"] },
  { layer: "Data & Scientific", items: ["NumPy", "SciPy", "MATLAB", "SQL", "Power BI", "Statistics", "Data Analysis"] },
  { layer: "AI & Computer Vision", items: ["OpenCV", "YOLO", "TensorFlow", "MediaPipe", "OCR", "Image Processing"] },
];
