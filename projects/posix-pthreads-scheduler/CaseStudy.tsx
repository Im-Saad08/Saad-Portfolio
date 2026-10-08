import {
  ProjectHeader,
  ProjectActionBar,
  ProjectHeroMedia,
  ProjectTechGrid,
  ProjectDiagramGallery,
  ProjectFooterNav,
} from "@/components/project";
import { schedulerMetadata } from "./content";
import { SchedulerLogic } from "./sections/SchedulerLogic";

export function SchedulerCaseStudy() {
  return (
    <article className="pt-24 pb-20">
      <div className="container max-w-3xl">
        <ProjectHeader
          category={schedulerMetadata.category}
          title={schedulerMetadata.title}
          description={schedulerMetadata.description}
          metric={schedulerMetadata.metric}
        />

        <ProjectHeroMedia
          src={schedulerMetadata.heroImage}
          alt={schedulerMetadata.title}
        />

        <ProjectActionBar
          githubUrl={schedulerMetadata.githubUrl}
          liveUrl={schedulerMetadata.liveUrl}
        />

        <div className="space-y-8">
          <SchedulerLogic />

          <ProjectTechGrid technologies={schedulerMetadata.technologies} />

          <ProjectDiagramGallery
            images={schedulerMetadata.images}
            projectTitle={schedulerMetadata.title}
            title="CPU Scheduling Gantt Visualizations & State Transitions"
          />
        </div>

        <ProjectFooterNav />
      </div>
    </article>
  );
}
