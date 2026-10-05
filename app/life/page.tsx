import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Heart, ArrowLeft, Camera, ExternalLink } from "lucide-react";
import { leadership, lifeEntries, lifeCategories, lifePlaceholder } from "@/lib/content";
import { constructMetadata } from "@/lib/metadata";
import { Gallery } from "@/components/ui/Gallery";

export const metadata: Metadata = constructMetadata({
  title: "Life Archive & Community Leadership",
  description:
    "Student volunteer leadership, JZT Thalassemia awareness campaigns, Sundas Foundation visits, and personal engineering memories by Muhammad Saad.",
  canonicalUrl: "https://mohtarmsaad.com/life",
});

export default function LifePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#8b95a8] hover:text-[#00d4aa] transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 text-[#00d4aa] text-xs font-mono mb-4">
            <Heart size={13} />
            <span>COMMUNITY // LEADERSHIP & ARCHIVE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-4">
            Life & Leadership
          </h1>
          <p className="text-lg text-[#8b95a8] leading-relaxed">
            The things that happen between the commits — organizing student teams, leading public health advocacy initiatives with HEC and Ministry of Health, and moments worth remembering.
          </p>
        </header>

        {/* Leadership & Advocacy Track Record */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight text-[#e8eaf0] mb-3 flex items-center gap-2.5">
            <Users size={22} className="text-[#00d4aa]" />
            <span>Community Leadership & Governance</span>
          </h2>
          <p className="text-[#8b95a8] mb-8 leading-relaxed">
            {leadership.intro}
          </p>

          <div className="space-y-8">
            {leadership.organizations.map((org) => (
              <article
                key={org.key}
                className="p-6 md:p-8 rounded-2xl border border-[#1a2438] bg-[#0e162a]/60 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-4">
                  {org.logo && (
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[#1a2438] bg-white p-1 flex-shrink-0">
                      <Image
                        src={org.logo}
                        alt={`${org.organization} insignia`}
                        fill
                        sizes="56px"
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="text-xl font-bold text-[#e8eaf0]">{org.role}</h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/30">
                        {org.organization}
                      </span>
                    </div>

                    {org.fullName && (
                      <p className="text-xs text-[#8b95a8] font-mono mb-3">{org.fullName}</p>
                    )}

                    <p className="text-sm sm:text-base text-[#e8eaf0]/90 leading-relaxed mb-3">
                      {org.description}
                    </p>

                    {org.website && (
                      <a
                        href={org.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#00d4aa] hover:underline"
                      >
                        <span>Visit Organization Website</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Photo Gallery for JZT */}
                {org.gallery && org.gallery.length > 0 && (
                  <Gallery images={org.gallery} title={org.galleryTitle} />
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Life Archive Moments */}
        <section className="pt-16 border-t border-[#1a2438]">
          <h2 className="text-2xl font-bold tracking-tight text-[#e8eaf0] mb-3 flex items-center gap-2.5">
            <Camera size={22} className="text-[#00d4aa]" />
            <span>Memories & Milestones</span>
          </h2>
          <p className="text-[#8b95a8] mb-8 leading-relaxed">
            {lifePlaceholder.description}
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {lifeEntries.map((entry) => (
              <article
                key={entry.id}
                className="rounded-xl border border-[#1a2438] bg-[#0e162a]/50 overflow-hidden flex flex-col justify-between"
              >
                {entry.image && (
                  <div className="relative aspect-video w-full bg-[#0a0f1d]">
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#8b95a8] mb-2 font-mono">
                      <span>{entry.date}</span>
                      <span className="text-[#00d4aa]">{entry.category}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#e8eaf0] mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8b95a8] leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Categories Archive */}
          <div className="mt-12 p-6 rounded-xl border border-[#1a2438] bg-[#0e162a]/30">
            <h4 className="text-xs uppercase tracking-wider font-mono text-[#8b95a8] text-center mb-3">
              Archive Domains
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {lifeCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 text-xs text-[#8b95a8] bg-[#0a0f1d] border border-[#1a2438] rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
