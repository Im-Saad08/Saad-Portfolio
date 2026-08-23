import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Code, Eye, Brain, Database, BarChart, PieChart, Table, BookOpen, Terminal, GitBranch, Box, Settings, Cpu, Hand, ScanText, Image, Cable, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";

const categoryIcons = {
  programming: Code,
  aiComputerVision: Brain,
  dataScientific: Database,
  devTools: Terminal,
  embeddedSystems: Cpu,
};

const skillIcons = {
  code: Code,
  cpu: Cpu,
  eye: Eye,
  scanText: ScanText,
  image: Image,
  brain: Brain,
  hand: Hand,
  database: Database,
  barChart: BarChart,
  bookOpen: BookOpen,
  table: Table,
  pieChart: PieChart,
  gitBranch: GitBranch,
  terminal: Terminal,
  box: Box,
  settings: Settings,
  cable: Cable,
  wrench: Wrench,
};

const categoryLabels = {
  programming: "Programming",
  aiComputerVision: "AI & Computer Vision",
  dataScientific: "Data & Scientific Computing",
  devTools: "Development & Tools",
  embeddedSystems: "Embedded & Systems",
};

const categoryDescriptions = {
  programming: "Core programming languages and hardware description",
  aiComputerVision: "Computer vision, deep learning, and image analysis",
  dataScientific: "Data analysis, scientific computing, and visualization",
  devTools: "Development workflow, version control, and infrastructure",
  embeddedSystems: "Microcontrollers, embedded Linux, and hardware interfaces",
};

const programmingLinks = {
  Python: "https://www.python.org",
  "C++": "https://isocpp.org",
  C: "https://en.cppreference.com/w/c",
  MATLAB: "https://www.mathworks.com/products/matlab.html",
  Verilog: "https://www.chipverify.com/verilog/verilog-tutorial",
};

const aiComputerVisionLinks = {
  OpenCV: "https://opencv.org",
  "YOLOv8 / YOLO11n": "https://docs.ultralytics.com",
  OCR: "https://tesseract-ocr.github.io",
  "Image Processing": "https://scikit-image.org",
  "Computer Vision": "https://paperswithcode.com/area/computer-vision",
  TensorFlow: "https://www.tensorflow.org",
  MediaPipe: "https://developers.google.com/mediapipe",
};

const dataScientificLinks = {
  NumPy: "https://numpy.org",
  SciPy: "https://scipy.org",
  Matplotlib: "https://matplotlib.org",
  "Jupyter Notebook": "https://jupyter.org",
  Statistics: "https://scikit-learn.org/stable/",
  "Data Analysis": "https://pandas.pydata.org",
  "Power BI": "https://www.microsoft.com/en-us/power-platform/products/power-bi",
  "Microsoft Excel": "https://www.microsoft.com/en-us/microsoft-365/excel",
  SQL: "https://www.w3schools.com/sql/",
  "MySQL / MySQL Workbench": "https://www.mysql.com/products/workbench/",
  PostgreSQL: "https://www.postgresql.org",
};

const devToolsLinks = {
  Git: "https://git-scm.com",
  GitHub: "https://github.com",
  "VS Code": "https://code.visualstudio.com",
  Linux: "https://www.kernel.org",
  Ubuntu: "https://ubuntu.com",
  Docker: "https://www.docker.com",
};

export function Skills() {
  const reducedMotion = useReducedMotion();
  const [skillsRef, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <header className="text-center mb-16">
          <h2
            id="skills-heading"
            className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
              isVisible ? "animate-text-reveal" : "opacity-0"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-lg text-text-muted max-w-2xl mx-auto ${
              isVisible ? "animate-text-reveal-stagger" : "opacity-0"
            }`}
            style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
          >
            Organized by domain — spanning software, AI, data, and embedded engineering
          </p>
        </header>

        <div className="space-y-12">
          {categories.map(([categoryKey, skillList], catIndex) => (
            <div
              key={categoryKey}
              className={`${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : `${catIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {(() => {
                    const Icon = categoryIcons[categoryKey];
                    return <Icon size={20} className="text-accent" aria-hidden="true" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-text">{categoryLabels[categoryKey]}</h3>
                  <p className="text-sm text-text-muted">{categoryDescriptions[categoryKey]}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 entrance-wrapper" role="list" aria-label={`${categoryLabels[categoryKey]} skills`}>
                {skillList.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill.icon] || Code;
                  const isProgramming = categoryKey === "programming";
                  const isAIComputerVision = categoryKey === "aiComputerVision";
                  const isDataScientific = categoryKey === "dataScientific";
                  const isDevTools = categoryKey === "devTools";
                  const linkUrl = isProgramming
                    ? programmingLinks[skill.name]
                    : isAIComputerVision
                      ? aiComputerVisionLinks[skill.name]
                      : isDataScientific
                        ? dataScientificLinks[skill.name]
                        : isDevTools
                          ? devToolsLinks[skill.name]
                          : null;

                  const tagClasses = `group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg hover:scale-105 transition-all duration-300 ${
                    isVisible ? "animate-card-entrance" : "opacity-0"
                  }`;

                  const linkClasses = linkUrl
                    ? "cursor-pointer hover:shadow-lg hover:shadow-accent/10 focus-visible outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                    : "";

                  if (linkUrl) {
                    return (
                      <a
                        key={skill.name}
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${tagClasses} ${linkClasses}`}
                        style={{ animationDelay: reducedMotion ? "0ms" : `${catIndex * 150 + skillIndex * 40}ms` }}
                        role="listitem"
                        aria-label={`View ${skill.name} documentation`}
                      >
                        <Icon size={14} className="text-accent/80 group-hover:text-accent transition-colors" aria-hidden="true" />
                        <span className="text-sm font-medium text-text">{skill.name}</span>
                      </a>
                    );
                  }

                  return (
                    <span
                      key={skill.name}
                      className={tagClasses}
                      style={{ animationDelay: reducedMotion ? "0ms" : `${catIndex * 150 + skillIndex * 40}ms` }}
                      role="listitem"
                    >
                      <Icon size={14} className="text-accent/80 group-hover:text-accent transition-colors" aria-hidden="true" />
                      <span className="text-sm font-medium text-text">{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}