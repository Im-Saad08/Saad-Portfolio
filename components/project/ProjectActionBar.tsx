import { FileText, GitBranch, ExternalLink } from "lucide-react";

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
    <div className="flex flex-wrap items-center gap-3 my-8 pb-6 border-b border-[#e5e2d9]">
      {reportUrl && (
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#185a37] text-white text-xs font-mono font-medium rounded hover:bg-[#103f27] transition-colors shadow-sm"
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
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e5e2d9] bg-[#ffffff] text-[#11161b] text-xs font-mono font-medium rounded hover:bg-[#f2f0e8] hover:border-[#cfccc2] transition-colors"
        >
          <GitBranch size={14} className="text-[#6e7787]" />
          <span>Source Code</span>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#185a37]/30 bg-[#185a37]/5 text-[#185a37] text-xs font-mono font-medium rounded hover:bg-[#185a37]/10 transition-colors"
        >
          <ExternalLink size={14} />
          <span>Live Deployment</span>
        </a>
      )}
    </div>
  );
}
