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
            <p className="text-sm font-medium text-gray-500 mb-1">
              Senior Computer Engineering Undergraduate • NUTECH Islamabad
            </p>
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-3"
            >
              Muhammad Saad
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {homeIntro.tagline}
            </p>
          </div>
        </div>

        <p className="text-base text-gray-600 leading-relaxed mb-8">
          {homeIntro.intro}
        </p>

        {/* Current focus note */}
        <div className="p-5 rounded-lg border border-gray-200 bg-gray-50 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Current Focus
            </span>
            <Link href="/now" className="text-xs font-medium text-blue-600 hover:underline">
              Read /now page →
            </Link>
          </div>
          <ul className="space-y-1.5 text-sm text-gray-700">
            {homeIntro.currently.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
          >
            About Me
          </Link>
          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
          >
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
