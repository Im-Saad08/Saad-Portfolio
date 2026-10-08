import {
  ProjectHeader,
  ProjectActionBar,
  ProjectHeroMedia,
  ProjectTechGrid,
  ProjectDiagramGallery,
  ProjectFooterNav,
} from "@/components/project";
import { sentryxMetadata } from "./content";
import { SentryxOverview } from "./sections/SentryxOverview";
import { SentryxSolutions } from "./sections/SentryxSolutions";
import { SentryxMetrics } from "./sections/SentryxMetrics";

export function SentryxCaseStudy() {
  return (
    <article className="pt-24 pb-20">
      <div className="container max-w-3xl">
        <ProjectHeader
          category={sentryxMetadata.category}
          title={sentryxMetadata.title}
          description={sentryxMetadata.description}
          metric={sentryxMetadata.metric}
        />

        <ProjectHeroMedia
          src={sentryxMetadata.heroImage}
          alt={sentryxMetadata.title}
        />

        <ProjectActionBar
          reportUrl={sentryxMetadata.reportUrl}
          reportLabel="Download IEEE Report (PDF 22pp)"
          githubUrl={sentryxMetadata.githubUrl}
        />

        <div className="space-y-8">
          <SentryxOverview />
          <SentryxSolutions />
          <SentryxMetrics />

          <ProjectTechGrid technologies={sentryxMetadata.technologies} />

          <ProjectDiagramGallery
            images={sentryxMetadata.images}
            projectTitle={sentryxMetadata.title}
            title="System Architecture & Verification Artifacts"
          />
        </div>

        <ProjectFooterNav />
      </div>
    </article>
  );
}
