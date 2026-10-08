import {
  ProjectHeader,
  ProjectActionBar,
  ProjectHeroMedia,
  ProjectTechGrid,
  ProjectDiagramGallery,
  ProjectFooterNav,
} from "@/components/project";
import { fypMetadata } from "./content";
import { FypScope } from "./sections/FypScope";
import { FypApplications } from "./sections/FypApplications";
import { FypPipeline } from "./sections/FypPipeline";

export function FypCaseStudy() {
  return (
    <article className="pt-24 pb-20">
      <div className="container max-w-3xl">
        <ProjectHeader
          category={fypMetadata.category}
          title={fypMetadata.title}
          description={fypMetadata.description}
          metric={fypMetadata.metric}
        />

        <ProjectHeroMedia
          src={fypMetadata.heroImage}
          alt={fypMetadata.title}
        />

        <ProjectActionBar
          githubUrl={fypMetadata.githubUrl}
          liveUrl={fypMetadata.liveUrl}
        />

        <div className="space-y-8">
          <FypScope />
          <FypApplications />
          <FypPipeline />

          <ProjectTechGrid technologies={fypMetadata.technologies} />

          <ProjectDiagramGallery
            images={fypMetadata.images}
            projectTitle={fypMetadata.title}
            title="Conveyor Hardware Schematics & Optical Tunnel Setup"
          />
        </div>

        <ProjectFooterNav />
      </div>
    </article>
  );
}
