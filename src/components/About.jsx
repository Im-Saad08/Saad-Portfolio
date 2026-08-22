import { useIntersectionObserver, useReducedMotion } from "../hooks/useIntersectionObserver";
import { Cpu, Code, Database, Brain, Microscope, Layers, HardDrive, Server, Cpu as CpuIcon } from "lucide-react";
import { aboutText, learningJourney } from "../data/portfolio";

const focusAreas = [
  {
    title: "Artificial Intelligence",
    description: "Computer Vision, OCR, object detection, image processing, machine learning",
    icon: Brain,
  },
  {
    title: "Software Development",
    description: "Python, C++, C, Git, Linux, backend development",
    icon: Code,
  },
  {
    title: "Data & Scientific Computing",
    description: "NumPy, SciPy, MATLAB, SQL, Power BI, data analysis",
    icon: Database,
  },
  {
    title: "Embedded & Systems",
    description: "Arduino, microcontrollers, Raspberry Pi, Embedded Linux, Buildroot, BusyBox",
    icon: Cpu,
  },
];

const journeyLayerMeta = {
  Hardware: { icon: CpuIcon, description: "Foundation in digital circuits and microcontroller architecture" },
  "Embedded Systems": { icon: Layers, description: "Bare-metal programming, RTOS concepts, and hardware interfaces" },
  "Linux & Systems": { icon: HardDrive, description: "OS internals, kernel, filesystems, and cross-compilation" },
  Software: { icon: Server, description: "Application development, version control, and backend systems" },
  "Data & Scientific": { icon: Microscope, description: "Numerical computing, statistics, and data visualization" },
  "AI & Computer Vision": { icon: Brain, description: "Deep learning, computer vision, and intelligent systems" },
};

export function About() {
  const reducedMotion = useReducedMotion();
  const [aboutRef, isVisible] = useIntersectionObserver({ triggerOnce: true });
  const [focusRef, focusVisible] = useIntersectionObserver({ triggerOnce: true });
  const [journeyRef, journeyVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <>
      <section
        id="about"
        ref={aboutRef}
        className="py-20 md:py-28"
        aria-labelledby="about-heading"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <h2
                id="about-heading"
                className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-6 ${
                  isVisible ? "animate-text-reveal" : "opacity-0"
                }`}
              >
                About Me
              </h2>
              <p
                className={`text-lg text-text-muted leading-relaxed ${
                  isVisible ? "animate-text-reveal-stagger" : "opacity-0"
                }`}
                style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
              >
                {aboutText}
              </p>
            </header>

            <div
              ref={focusRef}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
              role="list"
              aria-label="Technical focus areas"
            >
              {focusAreas.map((area, index) => (
                <article
                  key={area.title}
                  className={`group p-5 rounded-xl border border-border bg-bg-elevated/50 hover:border-accent-border hover:bg-accent-bg/30 transition-all duration-300 ${
                    focusVisible ? "animate-card-entrance" : "opacity-0"
                  }`}
                  style={{ animationDelay: reducedMotion ? "0ms" : `${index * 120}ms` }}
                  role="listitem"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-105 transition-all duration-300">
                    <area.icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium text-text mb-2">{area.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={journeyRef}
        className="py-20 md:py-28 border-t border-border"
        aria-labelledby="journey-heading"
      >
        <div className="container">
          <header className="text-center mb-16">
            <h2
              id="journey-heading"
              className={`text-3xl md:text-4xl font-semibold tracking-tight text-text mb-4 ${
                journeyVisible ? "animate-text-reveal" : "opacity-0"
              }`}
            >
              Learning Journey
            </h2>
            <p
              className={`text-lg text-text-muted max-w-2xl mx-auto ${
                journeyVisible ? "animate-text-reveal-stagger" : "opacity-0"
              }`}
              style={{ animationDelay: reducedMotion ? "0ms" : "150ms" }}
            >
              My engineering background spans hardware through AI — each layer builds on the previous
            </p>
          </header>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

            <div className="space-y-12">
              {learningJourney.map((layer, layerIndex) => {
                const meta = journeyLayerMeta[layer.layer] || { icon: Code, description: "" };
                const LayerIcon = meta.icon;
                return (
                  <div
                    key={layer.layer}
                    className={`relative pl-14 md:pl-16 ${
                      journeyVisible ? "animate-reveal-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: reducedMotion ? "0ms" : `${layerIndex * 200}ms` }}
                  >
                    <div className="absolute left-5 md:left-6 top-1 w-3 h-3 rounded-full bg-accent border-4 border-bg z-10" aria-hidden="true" />
                    <div className="absolute left-5 md:left-6 top-1 w-3 h-3 rounded-full bg-accent/30 animate-pulse-slow" aria-hidden="true" />

                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-bg border border-accent-border flex items-center justify-center flex-shrink-0">
                        <LayerIcon size={20} className="text-accent" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-accent">{layer.layer}</h3>
                        <p className="text-sm text-text-muted mt-0.5">{meta.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 entrance-wrapper" role="list" aria-label={`${layer.layer} skills`}>
                      {layer.items.map((item, itemIndex) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-medium text-text-muted bg-bg-elevated border border-border rounded-full"
                          role="listitem"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}