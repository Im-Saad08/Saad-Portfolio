import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitBranch, Mail, Download, Calendar, CheckCircle } from "lucide-react";
import { HeroBackground } from "./BackgroundEffects";
import { personalInfo, homeIntro } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-[#00d4aa]/30 bg-gradient-to-br from-[#00d4aa]/20 to-[#00d4aa]/5 shadow-2xl group transition-transform duration-500 hover:scale-105">
              <Image
                src="/profile.jpg"
                alt="Muhammad Saad - Computer Engineering Student at NUTECH"
                fill
                priority
                sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 border-2 border-[#00d4aa]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Academic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a2438] bg-[#0e162a]/60 backdrop-blur-sm mb-6">
            <span className="text-xs font-medium text-[#00d4aa] uppercase tracking-wider">
              Computer Engineering Undergraduate
            </span>
            <span className="w-1 h-1 rounded-full bg-[#00d4aa]/50" />
            <span className="text-xs font-medium text-[#8b95a8] uppercase tracking-wider">
              NUTECH Islamabad
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#e8eaf0] mb-6 leading-tight"
          >
            Hi, I&apos;m <span className="font-semibold text-[#00d4aa]">Saad</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#8b95a8] font-light mb-6 max-w-3xl mx-auto leading-relaxed">
            {homeIntro.tagline}
          </p>

          <p className="text-base sm:text-lg text-[#e8eaf0]/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {homeIntro.intro}
          </p>

          {/* Currently Preview Box */}
          <div className="mt-4 mb-10 p-6 md:p-8 rounded-2xl border border-[#1a2438] bg-[#0e162a]/70 text-left max-w-2xl mx-auto shadow-xl">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center">
                  <Calendar size={18} className="text-[#00d4aa]" aria-hidden="true" />
                </div>
                <h2 className="text-base sm:text-lg font-medium text-[#e8eaf0]">
                  {homeIntro.currently.heading}
                </h2>
              </div>
              <Link
                href="/now"
                className="text-xs text-[#00d4aa] hover:underline flex items-center gap-1 font-mono"
              >
                View /now page →
              </Link>
            </div>
            <ul className="space-y-2.5 text-left" role="list">
              {homeIntro.currently.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#8b95a8] leading-relaxed">
                  <CheckCircle size={16} className="text-[#00d4aa]/80 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/work"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00d4aa] text-[#0a0f1d] font-semibold rounded-lg hover:bg-[#00b894] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              Explore Engineering Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/#story"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#1a2438] text-[#e8eaf0] font-medium rounded-lg hover:bg-[#1a2438] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              Read Story
            </Link>

            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] font-medium rounded-lg hover:bg-[#00d4aa]/20 hover:border-[#00d4aa] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center p-3.5 border border-[#1a2438] text-[#8b95a8] hover:text-[#e8eaf0] hover:border-[#23314a] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa]"
              aria-label="GitHub Profile"
            >
              <GitBranch size={20} />
            </a>
          </div>

          {/* Social Quick Links */}
          <div className="mt-12 flex items-center justify-center gap-8 text-[#8b95a8]">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-sm hover:text-[#e8eaf0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa] rounded"
            >
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[#e8eaf0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d4aa] rounded"
            >
              <GitBranch size={16} />
              <span>github.com/Im-Saad08</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
