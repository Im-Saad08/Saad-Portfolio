import Link from "next/link";
import { theme } from "@/lib/theme";
import { ArrowRight } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-24 border-t border-border" aria-labelledby="about-teaser-heading">
      <div className="container max-w-3xl">
        <p className={`${theme.styles.kicker} mb-1`}>
          Engineering Track Record
        </p>
        <h2 id="about-teaser-heading" className="text-2xl font-bold tracking-tight text-ink mb-3">
          About Saad
          <span className={theme.styles.headingDot}>.</span>
        </h2>

        <p className={`${theme.styles.bodyLg} mb-4`}>
          Senior Computer Engineering undergraduate at NUTECH Islamabad (CEN Batch 22). Core engineering foundation spans bare-metal microcontrollers (PIC16F877A, 8051) and digital logic (Verilog RTL) through operating systems concurrency and practical edge computer vision.
        </p>

        <p className={`${theme.styles.bodyLg} mb-6`}>
          Outside technical work, served as President of the JZT NUTECH Chapter and President of the GYFHA Local Council, directing 39 student volunteers in public health and Thalassemia awareness campaigns in collaboration with the Higher Education Commission (HEC) and the Ministry of Health.
        </p>

        <Link
          href="/about"
          className={theme.styles.linkMono}
        >
          <span>Read full background, coursework &amp; leadership record</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
