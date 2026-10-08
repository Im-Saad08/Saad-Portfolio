import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="py-20 md:py-24" aria-labelledby="about-teaser-heading">
      <div className="container max-w-3xl">
        <h2 id="about-teaser-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-3">
          About Saad
        </h2>

        <p className="text-base text-gray-600 leading-relaxed mb-4">
          I am a senior Computer Engineering student at NUTECH (CEN Batch 22). My engineering foundation spans bare-metal microcontrollers (PIC16F877A, 8051) and digital logic (Verilog RTL) through operating systems concurrency and practical edge computer vision.
        </p>

        <p className="text-base text-gray-600 leading-relaxed mb-6">
          Outside technical work, I have served as President of the JZT NUTECH Chapter and President of the GYFHA Local Council, directing 39 student volunteers in public health and Thalassemia awareness campaigns in collaboration with the Higher Education Commission (HEC) and the Ministry of Health.
        </p>

        <Link
          href="/about"
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Read full background, coursework & leadership record →
        </Link>
      </div>
    </section>
  );
}
