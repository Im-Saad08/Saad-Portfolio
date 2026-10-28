import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { story, education, leadership } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { Gallery } from "@/components/ui/Gallery";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { ArrowRight, FileText, GraduationCap, Users } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About — Engineering, Background & Leadership",
  description:
    "Personal narrative, academic foundation at NUTECH, student volunteer leadership with JZT and GYFHA, technical competencies, and engineering journey of Muhammad Saad.",
  canonicalUrl: "https://mohtarmsaad.com/about",
});

export default function AboutPage() {
  const jztOrg = leadership.organizations.find((o) => o.key === "jzt-nutech");
  const gyfhaOrg = leadership.organizations.find((o) => o.key === "gyfha-nutech");
  const taxilaOrg = leadership.organizations.find((o) => o.key === "jzt-taxila");

  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-3xl">
        {/* Header Profile Section */}
        <header className="mb-14 pb-10 border-b border-[#e5e2d9]">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 mb-6">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-[#e5e2d9] bg-[#f2f0e8] ring-4 ring-[#f2f0e8] flex-shrink-0 shadow-sm">
              <Image
                src="/profile.jpg"
                alt="Muhammad Saad"
                fill
                priority
                sizes="(max-width: 640px) 112px, 144px"
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#6e7787] uppercase tracking-wider">
                <span>Undergraduate Engineer</span>
                <span>·</span>
                <span>CEN Batch 22</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#11161b]">
                Muhammad Saad
                <span className="text-[#185a37]">.</span>
              </h1>

              <p className="text-sm sm:text-base font-medium text-[#4c5562]">
                Senior Computer Engineering Undergraduate · NUTECH Islamabad
              </p>

              <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed pt-1">
                Specializing in compute-efficient edge computer vision, low-level systems software, and embedded hardware interfaces. Focused on making deep learning perform reliably on resource-constrained commodity hardware without requiring expensive enterprise GPUs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/Saad_CV.pdf"
              download="Muhammad_Saad_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#185a37] text-white text-xs font-mono font-medium rounded hover:bg-[#103f27] transition-colors shadow-sm"
            >
              <FileText size={13} />
              <span>Download Official CV (PDF)</span>
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] text-xs font-mono font-medium rounded hover:bg-[#f2f0e8] transition-colors"
            >
              <span>Explore builds →</span>
            </Link>
          </div>
        </header>

        {/* Narrative / Engineering Philosophy */}
        <section className="mb-20" aria-labelledby="narrative-heading">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-1">
            Origins &amp; Philosophy
          </p>
          <h2 id="narrative-heading" className="text-2xl font-bold tracking-tight text-[#11161b] mb-4">
            Background &amp; Engineering Focus
            <span className="text-[#185a37]">.</span>
          </h2>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.02)] space-y-4 text-sm sm:text-base text-[#4c5562] leading-relaxed">
            <p className="font-semibold text-[#11161b] text-base sm:text-lg">
              {story.opening}
            </p>
            {story.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </section>

        {/* Academic Foundation & Faculty */}
        <section className="mb-20" aria-labelledby="academics-heading">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-1">
            University Education
          </p>
          <h2 id="academics-heading" className="text-2xl font-bold tracking-tight text-[#11161b] mb-2">
            Academic Foundation
            <span className="text-[#185a37]">.</span>
          </h2>
          <p className="text-sm text-[#4c5562] mb-6">
            Undergraduate curriculum paired with applied complex engineering projects at NUTECH Islamabad.
          </p>

          <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.02)] mb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#185a37]" />
                <h3 className="text-base sm:text-lg font-bold text-[#11161b]">
                  {education.degree}
                </h3>
              </div>
              <span className="text-xs font-mono font-semibold text-[#6e7787] px-2 py-0.5 rounded bg-[#f2f0e8]">
                CEN Batch 22 (Senior)
              </span>
            </div>
            <p className="text-sm text-[#4c5562] mb-2 pl-6">
              {education.university} — {education.location}
            </p>
            <p className="text-xs text-[#6e7787] pl-6 font-mono">
              Prior: {education.college.degree}, {education.college.institution}
            </p>

            <div className="mt-6 pt-5 border-t border-[#efece5]">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6e7787] mb-3">
                Core Coursework Focus Areas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {education.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#f2f0e8] text-[#11161b] border border-[#e5e2d9]/70"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Department Faculty Photo */}
          <div className="rounded-2xl overflow-hidden border border-[#e5e2d9] bg-[#ffffff] p-2 shadow-sm">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-[#f2f0e8]">
              <Image
                src="/story/nutech-cen-faculty.jpg"
                alt="Muhammad Saad with Computer Engineering faculty and CEN Batch 22 at NUTECH Islamabad"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <p className="text-xs font-mono text-[#6e7787] p-3 text-center">
              Department of Computer Engineering (CEN Batch 22) alongside faculty at NUTECH, Islamabad.
            </p>
          </div>
        </section>

        {/* Technical Competencies Matrix */}
        <section className="mb-20">
          <Skills />
        </section>

        {/* Chronological Milestones */}
        <section className="mb-20">
          <Timeline />
        </section>

        {/* Civic Leadership & Governance */}
        <section className="mb-20" aria-labelledby="leadership-heading">
          <p className="text-xs font-mono font-medium uppercase tracking-wider text-[#6e7787] mb-1">
            Community &amp; Civic Governance
          </p>
          <h2 id="leadership-heading" className="text-2xl font-bold tracking-tight text-[#11161b] mb-2">
            Civic Leadership &amp; Advocacy
            <span className="text-[#185a37]">.</span>
          </h2>
          <p className="text-sm text-[#4c5562] mb-8 leading-relaxed">
            {leadership.intro}
          </p>

          <div className="space-y-6">
            {jztOrg && (
              <article className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.02)]">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  {jztOrg.logo && (
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#e5e2d9] bg-[#f2f0e8] flex-shrink-0">
                      <Image
                        src={jztOrg.logo}
                        alt={`${jztOrg.organization} logo`}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#185a37] font-semibold mb-0.5">
                      <Users size={13} />
                      <span>{jztOrg.role}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#11161b]">
                      {jztOrg.organization}
                    </h3>
                    <p className="text-xs font-mono text-[#6e7787] mb-2">{jztOrg.fullName}</p>
                    <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
                      {jztOrg.description}
                    </p>
                  </div>
                </div>

                {jztOrg.gallery && jztOrg.gallery.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#efece5]">
                    <Gallery images={jztOrg.gallery} title="Initiative Photography" />
                  </div>
                )}
              </article>
            )}

            {gyfhaOrg && (
              <article className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.02)]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#185a37] font-semibold mb-1">
                  <Users size={13} />
                  <span>{gyfhaOrg.role}</span>
                </div>
                <h3 className="text-lg font-bold text-[#11161b] mb-1">
                  {gyfhaOrg.organization}
                </h3>
                <p className="text-xs font-mono text-[#6e7787] mb-2">{gyfhaOrg.fullName}</p>
                <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
                  {gyfhaOrg.description}
                </p>
              </article>
            )}

            {taxilaOrg && (
              <article className="p-6 sm:p-7 rounded-2xl bg-[#ffffff] border border-[#e5e2d9] shadow-[0_1px_3px_rgba(17,22,27,0.02)]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#6e7787] font-semibold mb-1">
                  <Users size={13} />
                  <span>{taxilaOrg.role}</span>
                </div>
                <h3 className="text-lg font-bold text-[#11161b] mb-1">
                  {taxilaOrg.organization}
                </h3>
                <p className="text-xs font-mono text-[#6e7787] mb-2">{taxilaOrg.fullName}</p>
                <p className="text-xs sm:text-sm text-[#4c5562] leading-relaxed">
                  {taxilaOrg.description}
                </p>
              </article>
            )}
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="pt-8 border-t border-[#e5e2d9] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-5">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-medium text-[#11161b] hover:text-[#185a37] transition-colors"
            >
              <span>Explore engineering builds</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 text-[#4c5562] hover:text-[#11161b] transition-colors"
            >
              <span>Read writing archive</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="px-4 py-2 bg-[#185a37] text-white rounded font-medium hover:bg-[#103f27] transition-colors"
          >
            Download Official CV (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
