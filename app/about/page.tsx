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
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Background & Engineering Focus
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

        {/* Education */}
        <section className="mb-14 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Academic Background
          </h2>

          <div className="p-6 rounded-lg border border-gray-200 bg-gray-50/50 mb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-gray-900">
                {education.degree}
              </h3>
              <span className="text-xs text-gray-500">
                CEN Batch 22 (Senior)
              </span>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              {education.university} — {education.location}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Prior: {education.college.degree}, {education.college.institution}
            </p>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Core Coursework Focus
              </h4>
              <div className="flex flex-wrap gap-1.5" role="list">
                {education.focusAreas.slice(0, 6).map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 text-xs text-gray-700 bg-white border border-gray-200 rounded"
                    role="listitem"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-14 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Leadership & Community
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            {leadership.intro}
          </p>

          <div className="space-y-6">
            {jztOrg && (
              <article className="p-6 rounded-lg border border-gray-200 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-3">
                  {jztOrg.logo && (
                    <div className="relative w-10 h-10 rounded overflow-hidden border border-gray-200 bg-white flex-shrink-0">
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
                    <h3 className="text-base font-bold text-gray-900">
                      {jztOrg.role} — {jztOrg.organization}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{jztOrg.fullName}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {jztOrg.description}
                    </p>
                  </div>
                </div>

                {jztOrg.gallery && jztOrg.gallery.length > 0 && (
                  <Gallery images={jztOrg.gallery} title="Initiative Photos" />
                )}
              </article>
            )}

            {gyfhaOrg && (
              <article className="p-6 rounded-lg border border-gray-200 bg-white">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {gyfhaOrg.role} — {gyfhaOrg.organization}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{gyfhaOrg.fullName}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {gyfhaOrg.description}
                </p>
              </article>
            )}

            {taxilaOrg && (
              <article className="p-6 rounded-lg border border-gray-200 bg-white">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {taxilaOrg.role} — {taxilaOrg.organization}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{taxilaOrg.fullName}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {taxilaOrg.description}
                </p>
              </article>
            )}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-14 pt-10 border-t border-gray-200">
          <Skills />
        </section>

        {/* Milestones */}
        <section className="mb-14 pt-10 border-t border-gray-200">
          <Timeline />
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-gray-200 flex items-center justify-between text-sm">
          <Link href="/work" className="font-medium text-blue-600 hover:underline">
            View engineering projects →
          </Link>
          <Link href="/notes" className="text-gray-600 hover:text-gray-900">
            Read technical notes →
          </Link>
        </div>
      </div>
    </div>
  );
}
