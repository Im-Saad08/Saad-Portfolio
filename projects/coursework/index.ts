import type { AdditionalProject } from "@/types";

export const courseworkProjects: AdditionalProject[] = [
  {
    title: "Dynamic Modeling & Control Systems Synthesis (CE CEP)",
    description:
      "Mass-spring-damper and RLC transfer function modeling, root locus synthesis, and lead/lag controller design evaluated in MATLAB & SISOTOOL.",
    technologies: ["MATLAB", "SISOTOOL", "Control Systems", "Dynamic Modeling"],
  },
  {
    title: "Microcontroller Firmware & UART Interfacing (MPI CEP)",
    description:
      "Embedded firmware authored in C and Assembly for PIC16F877A and Intel 8051 within MPLAB X, interfacing UART serial communication, LCDs, and timer interrupts.",
    technologies: [
      "Embedded C",
      "PIC16F877A",
      "Intel 8051",
      "MPLAB X",
      "UART",
      "Proteus",
    ],
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    description:
      "Computer vision pipeline utilizing OpenCV and MediaPipe for spatial hand landmark detection and gesture classification (~94% accuracy).",
    technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
  },
  {
    title: "Embedded Linux Rootfs for Raspberry Pi",
    description:
      "Kernel configuration, cross-compilation, BusyBox initialization, and minimal root filesystem generation using Buildroot.",
    technologies: [
      "Linux Kernel",
      "Buildroot",
      "BusyBox",
      "Raspberry Pi",
      "Cross-Compilation",
    ],
  },
];
