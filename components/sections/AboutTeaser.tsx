import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-24 border-t border-[#e5e2d9]" aria-labelledby="about-teaser-heading">
      <div className="container max-w-3xl">
        <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-1">
          Engineering Track Record
        </p>
        <h2 id="about-teaser-heading" className="text-2xl font-bold tracking-tight text-[#11161b] mb-3">
          About Saad
          <span className="text-[#185a37]">.</span>
        </h2>

        <p className="text-base text-[#4c5562] leading-relaxed mb-4">
          Senior Computer Engineering undergraduate at NUTECH Islamabad (CEN Batch 22). Core engineering foundation spans bare-metal microcontrollers (PIC16F877A, 8051) and digital logic (Verilog RTL) through operating systems concurrency and practical edge computer vision.
        </p>

        <p className="text-base text-[#4c5562] leading-relaxed mb-6">
          Outside technical work, served as President of the JZT NUTECH Chapter and President of the GYFHA Local Council, directing 39 student volunteers in public health and Thalassemia awareness campaigns in collaboration with the Higher Education Commission (HEC) and the Ministry of Health.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#11161b] hover:text-[#185a37] transition-colors"
        >
          <span>Read full background, coursework &amp; leadership record</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
