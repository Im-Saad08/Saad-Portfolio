import { Cpu, Eye, GitBranch } from "lucide-react";
import { theme } from "@/lib/theme";

export function EngineeringPillars() {
  const pillars = [
    {
      icon: Eye,
      title: "Edge Computer Vision",
      domain: "Lightweight Deep Learning & Inference",
      summary:
        "Architecting compute-efficient inference pipelines for commodity x86 CPUs without enterprise GPUs. Fine-tuning YOLOv8n, PaddleOCR dual-candidate recognition, and ByteTrack.",
      metric: "~98.5% live accuracy @ 18–24 FPS on 6-core CPUs",
    },
    {
      icon: GitBranch,
      title: "Systems Software & Concurrency",
      domain: "Low-Level C, POSIX & Linux",
      summary:
        "Developing thread-synchronized architectures in C/C++ using POSIX pthreads, mutex locks, and custom scheduling algorithms. Building minimal Embedded Linux root filesystems with Buildroot.",
      metric: "Race-condition-free multi-algorithm CPU scheduler",
    },
    {
      icon: Cpu,
      title: "Hardware Primitives & RTL",
      domain: "Digital Design, Verilog & Microcontrollers",
      summary:
        "Synthesizing combinational and sequential logic in Verilog RTL for FPGAs. Writing bare-metal firmware in C and Assembly for PIC16F877A and 8051 with UART serial protocols.",
      metric: "Deterministic millisecond hardware-timed actuation",
    },
  ];

  return (
    <section className="py-14 border-y border-border bg-surface-subtle/50" aria-labelledby="pillars-heading">
      <div className="container">
        <div className="max-w-2xl mb-8">
          <p className={theme.styles.kicker}>
            Engineering Foundation
          </p>
          <h2 id="pillars-heading" className="text-xl sm:text-2xl font-bold tracking-tight text-ink mt-1">
            Core Technical Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`${theme.styles.cardStatic} flex flex-col justify-between`}
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-surface-subtle border border-border flex items-center justify-center text-ink mb-4">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-ink-subtle mb-3">
                    {pillar.domain}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle text-xs font-mono text-ink">
                  <span className="text-ink-subtle">Proof: </span>
                  <span className="font-medium">{pillar.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
