import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { story, education, leadership } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { Gallery } from "@/components/ui/Gallery";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";

export const metadata: Metadata = constructMetadata({
  title: "About — Engineering, Background & Leadership",
  description:
    "Personal narrative, academic background at NUTECH, student volunteer leadership with JZT and GYFHA, technical competencies, and engineering journey of Muhammad Saad.",
  canonicalUrl: "https://mohtarmsaad.com/about",
});

export default function AboutPage() {
  const jztOrg = leadership.organizations.find((o) => o.key === "jzt-nutech");
  const gyfhaOrg = leadership.organizations.find((o) => o.key === "gyfha-nutech");
  const taxilaOrg = leadership.organizations.find((o) => o.key === "jzt-taxila");

  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-3xl">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0">
              <Image
                src="/profile.jpg"
                alt="Muhammad Saad"
                fill
                priority
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
                Muhammad Saad
              </h1>
              <p className="text-base font-medium text-gray-700 mb-2">
                Senior Computer Engineering Undergraduate • NUTECH Islamabad
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Specializing in compute-efficient edge computer vision, systems software, and embedded hardware interfaces. Focused on making machine learning perform reliably on resource-constrained commodity hardware.
              </p>
            </div>
          </div>
        </header>

        {/* Narrative */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">
            Background &amp; Engineering Focus
          </h2>
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p className="font-medium text-gray-900">
              {story.opening}
            </p>
            {story.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        </section>

        {/* Education & Curriculum */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
            Academic Foundation
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Undergraduate curriculum paired with applied complex engineering projects at NUTECH Islamabad.
          </p>

          <div className="mb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">
                {education.degree}
              </h3>
              <span className="text-xs text-gray-500 font-medium">
                CEN Batch 22 (Senior)
              </span>
            </div>
            <p className="text-base text-gray-700">
              {education.university} — {education.location}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Prior: {education.college.degree}, {education.college.institution}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Core Curriculum Focus Areas
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {education.focusAreas.join(" · ")}
            </p>
          </div>

          {/* Department Faculty Photo */}
          <div>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/story/nutech-cen-faculty.jpg"
                alt="Muhammad Saad with Computer Engineering faculty and CEN Batch 22 at NUTECH Islamabad"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2.5">
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
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
            Civic Leadership &amp; Community
          </h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">
            {leadership.intro}
          </p>

          <div className="space-y-10">
            {jztOrg && (
              <article>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-3">
                  {jztOrg.logo && (
                    <div className="relative w-10 h-10 rounded overflow-hidden bg-gray-50 flex-shrink-0">
                      <Image
                        src={jztOrg.logo}
                        alt={`${jztOrg.organization} logo`}
                        fill
                        sizes="40px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {jztOrg.role} — {jztOrg.organization}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{jztOrg.fullName}</p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {jztOrg.description}
                    </p>
                  </div>
                </div>

                {jztOrg.gallery && jztOrg.gallery.length > 0 && (
                  <div className="mt-4">
                    <Gallery images={jztOrg.gallery} title="Initiative Photos" />
                  </div>
                )}
              </article>
            )}

            {gyfhaOrg && (
              <article>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {gyfhaOrg.role} — {gyfhaOrg.organization}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{gyfhaOrg.fullName}</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {gyfhaOrg.description}
                </p>
              </article>
            )}

            {taxilaOrg && (
              <article>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {taxilaOrg.role} — {taxilaOrg.organization}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{taxilaOrg.fullName}</p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {taxilaOrg.description}
                </p>
              </article>
            )}
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="pt-6 mt-16 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-5">
            <Link href="/work" className="font-medium text-blue-600 hover:underline">
              Explore engineering builds →
            </Link>
            <Link href="/notes" className="text-gray-600 hover:text-gray-900">
              Read writing &amp; heuristics →
            </Link>
          </div>
          <a
            href="/Saad_CV.pdf"
            download="Muhammad_Saad_CV.pdf"
            className="px-4 py-2 bg-gray-900 text-white rounded text-xs font-medium hover:bg-gray-800 transition-colors"
          >
            Download Official CV
          </a>
        </div>
      </div>
    </div>
  );
}
