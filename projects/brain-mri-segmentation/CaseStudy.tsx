import {
  ProjectHeader,
  ProjectActionBar,
  ProjectHeroMedia,
  ProjectTechGrid,
  ProjectDiagramGallery,
  ProjectFooterNav,
} from "@/components/project";
import { mriMetadata } from "./content";
import { MriPipelineStages } from "./sections/MriPipelineStages";

export function MriCaseStudy() {
  return (
    <article className="pt-24 pb-20">
      <div className="container max-w-3xl">
        <ProjectHeader
          category={mriMetadata.category}
          title={mriMetadata.title}
          description={mriMetadata.description}
          metric={mriMetadata.metric}
        />

        <ProjectHeroMedia
          src={mriMetadata.heroImage}
          alt={mriMetadata.title}
        />

        <ProjectActionBar
          githubUrl={mriMetadata.githubUrl}
          liveUrl={mriMetadata.liveUrl}
        />

        <div className="space-y-8">
          <MriPipelineStages />

          <ProjectTechGrid technologies={mriMetadata.technologies} />

          <ProjectDiagramGallery
            images={mriMetadata.images}
            projectTitle={mriMetadata.title}
            title="Segmentation Histograms & Gradient Visualizations"
          />
        </div>

        <ProjectFooterNav />
      </div>
    </article>
  );
}
