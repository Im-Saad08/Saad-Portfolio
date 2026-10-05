import type { Note } from "@/types";

export const notes: Note[] = [
  {
    slug: "sentryx-ieee-defense-manuscript",
    title: "SENTRYX: High-Throughput ALPR on Commodity CPUs (IEEE Report)",
    category: "Defense Research",
    published: true,
    date: "August 2026",
    excerpt:
      "A 22-page IEEE-standard technical manuscript detailing how custom YOLOv8n fine-tuning, PaddleOCR dual-candidate parsing, and decoupled threading achieved ~98.5% live verification accuracy at 18–24 FPS without dedicated GPUs.",
    link: "/docs/SENTRYX-IEEE-Final-Report.pdf",
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
];
