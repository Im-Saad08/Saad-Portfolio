import { FileText, GitBranch, ExternalLink } from "lucide-react";
import { theme } from "@/lib/theme";

interface ProjectActionBarProps {
  reportUrl?: string | null;
  reportLabel?: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export function ProjectActionBar({
  reportUrl,
  reportLabel = "Download IEEE Report (PDF)",
  githubUrl,
  liveUrl,
}: ProjectActionBarProps) {
  if (!reportUrl && !githubUrl && !liveUrl) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 my-8 pb-6 border-b border-border">
      {reportUrl && (
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={theme.styles.buttonPrimarySm}
        >
          <FileText size={14} />
          <span>{reportLabel}</span>
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={theme.styles.buttonSecondarySm}
        >
          <GitBranch size={14} className="text-ink-subtle" />
          <span>Source Code</span>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={theme.styles.buttonTertiary}
        >
          <ExternalLink size={14} />
          <span>Live Deployment</span>
        </a>
      )}
    </div>
  );
}
