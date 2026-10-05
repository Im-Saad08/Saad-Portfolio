import type { Metadata } from "next";
import Link from "next/link";
import { nowContent } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "What I'm Doing Now",
  description:
    "A public snapshot of what Muhammad Saad is focused on right now — senior year engineering coursework, Industrial Vision FYP, edge AI pipelines, and PSX macro observations.",
  canonicalUrl: "https://mohtarmsaad.com/now",
});

export default function NowPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container max-w-2xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Return to Home
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            Now
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-3">
            A public snapshot of what I&apos;m focused on right now — inspired by Derek Sivers&apos;{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              nownownow.com
            </a>{" "}
            movement.
          </p>

          <p className="text-xs text-gray-500 font-medium">
            {nowContent.updatedLabel}: {nowContent.lastUpdated}
          </p>
        </header>

        {/* Focus Item List */}
        <div className="space-y-6">
          {nowContent.focus.map((item) => (
            <article key={item.title} className="pb-5 border-b border-gray-100 last:border-b-0">
              <h2 className="text-base font-bold text-gray-900 mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500">
          <p>This page is updated periodically as priorities shift across semesters and milestones.</p>
        </div>
      </div>
    </div>
  );
}
