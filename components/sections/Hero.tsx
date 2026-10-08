import Image from "next/image";
import Link from "next/link";
import { homeIntro } from "@/lib/content";

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-20" aria-labelledby="hero-heading">
      <div className="container max-w-3xl">
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-8">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Muhammad Saad"
              fill
              priority
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover"
            />
          </div>

          <div>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-2"
            >
              Muhammad Saad
            </h1>
            <p className="text-base sm:text-lg font-medium text-gray-600 mb-4">
              Computer Engineering Undergraduate · NUTECH Islamabad
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {homeIntro.tagline}
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
          {homeIntro.intro}
        </p>

        {/* Living Status */}
        <div className="mb-8 text-sm text-gray-600">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2.5 align-middle" />
          <span>Currently: Senior FYP &amp; Verilog RTL at NUTECH. </span>
          <Link
            href="/now"
            className="text-gray-900 font-medium underline underline-offset-4 hover:text-blue-600 transition-colors ml-1"
          >
            Read current focus (/now) →
          </Link>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href="/work"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Explore Engineering Work →
          </Link>
          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
          >
            Download CV (PDF)
          </a>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            About &amp; Background →
          </Link>
        </div>
      </div>
    </section>
  );
}
