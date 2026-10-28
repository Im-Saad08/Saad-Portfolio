import { Cpu, Eye, GitBranch } from "lucide-react";
import { theme } from "@/lib/theme";

export function EngineeringPillars() {
  const pillars = [
    {
      icon: Eye,
      tag: "01 · EDGE VISION",
      title: "Edge Computer Vision",
      domain: "Lightweight Deep Learning & Inference",
      summary:
        "Architecting compute-efficient inference pipelines for commodity x86 CPUs without enterprise GPUs. Fine-tuning YOLOv8n, PaddleOCR dual-candidate recognition, and ByteTrack.",
      metric: "~98.5% live accuracy @ 18–24 FPS on 6-core CPUs",
      takeaway: "Why it matters: Real-world deployments shouldn't require enterprise cloud GPU budgets.",
    },
    {
      icon: GitBranch,
      tag: "02 · CONCURRENCY",
      title: "Systems Software & Concurrency",
      domain: "Low-Level C, POSIX & Linux",
      summary:
        "Developing thread-synchronized architectures in C/C++ using POSIX pthreads, mutex locks, and custom scheduling algorithms. Building minimal Embedded Linux root filesystems with Buildroot.",
      metric: "Race-condition-free multi-algorithm CPU scheduler",
      takeaway: "Why it matters: Predictable thread synchronization and deterministic resource control.",
    },
    {
      icon: Cpu,
      tag: "03 · HARDWARE",
      title: "Hardware Primitives & RTL",
      domain: "Digital Design, Verilog & Microcontrollers",
      summary:
        "Synthesizing combinational and sequential logic in Verilog RTL for FPGAs. Writing bare-metal firmware in C and Assembly for PIC16F877A and 8051 with UART serial protocols.",
      metric: "Deterministic millisecond hardware-timed actuation",
      takeaway: "Why it matters: Understanding registers and timing constraints down to clock cycles.",
    },
  ];

  return (
    <section className="py-16 md:py-20 border-y border-border bg-surface-subtle/40" aria-labelledby="pillars-heading">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono font-medium text-ink-subtle uppercase tracking-wider mb-1.5">
            Engineering Craft
          </div>
          <h2 id="pillars-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
            What I Love Building
            <span className={theme.styles.headingDot}>.</span>
          </h2>
          <p className="text-sm sm:text-base text-ink-muted mt-2">
            Three interconnected disciplines where hardware constraints meet practical software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`${theme.styles.cardCozy} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border flex items-center justify-center text-primary shadow-2xs">
                      <Icon size={19} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-ink-subtle">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-ink mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-primary font-medium mb-3">
                    {pillar.domain}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle/80 space-y-2">
                  <div className="text-xs font-mono text-ink">
                    <span className="text-ink-subtle">Benchmark: </span>
                    <span className="font-semibold text-primary">{pillar.metric}</span>
                  </div>
                  <p className="text-[11px] text-ink-subtle leading-relaxed italic">
                    {pillar.takeaway}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
