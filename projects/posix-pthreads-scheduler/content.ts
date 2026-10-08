import type { Project } from "@/types";

export const schedulerMetadata: Project = {
  id: 4,
  slug: "posix-pthreads-scheduler",
  title: "POSIX Multi-Threaded Concurrency & CPU Scheduler",
  description:
    "Low-level systems software in C under Linux GCC demonstrating POSIX Pthreads synchronization, mutex locks, and CPU scheduling simulators with Gantt charting.",
  longDescription: `Developed for Operating Systems (OS CEP). Implements process lifecycle modeling, context switching logic, and concurrency controls using POSIX Pthreads and mutexes. Features algorithmic simulators for FCFS, Shortest Job First (SJF), Priority, and Round Robin scheduling algorithms with automated Gantt chart visualization and turnaround/wait-time evaluation.`,
  technologies: [
    "C",
    "POSIX Pthreads",
    "GCC",
    "Linux",
    "Concurrency",
    "Operating Systems",
  ],
  category: "Operating Systems",
  featured: false,
  metric: "POSIX Pthreads, Mutex Locks & CPU Gantt Simulators",
  githubUrl: null,
  liveUrl: null,
  heroImage: "/projects/traffic-hero.svg",
  images: [
    "/projects/traffic-1.svg",
    "/projects/traffic-2.svg",
  ],
  videoUrl: null,
};

export const schedulerDetails = {
  course: "Operating Systems Complex Engineering Project (OS CEP)",
  summary:
    "Low-level systems software authored in pure C compiled with Linux GCC. Models the process control block (PCB) lifecycle, atomic context switching, and thread synchronization under POSIX primitives.",
  algorithms: [
    {
      name: "First-Come First-Served (FCFS)",
      description:
        "Deterministic non-preemptive queue scheduling with turnaround and waiting time benchmarking against pathological convoy effect test suites.",
    },
    {
      name: "Shortest Job First (SJF)",
      description:
        "Simulates optimal average waiting times under non-preemptive burst estimations, computing process queue reordering dynamically.",
    },
    {
      name: "Priority Scheduling with Aging",
      description:
        "Priority-ranked execution queues incorporating aging heuristics to dynamically increment waiting process priority and prevent starvation.",
    },
    {
      name: "Round Robin (RR) with Time Quanta",
      description:
        "Preemptive time-sliced execution modeling context-switch overhead penalties and queue rotations across configurable time slice quanta.",
    },
  ],
  primitives: [
    "pthread_create & pthread_join lifecycle management",
    "pthread_mutex_t mutual exclusion lock guards",
    "pthread_cond_t conditional signal synchronization",
    "Simulated CPU Process Control Block (PCB) state transitions",
    "Automated ASCII & graphical Gantt chart visualization",
  ],
};
