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
    <div className="flex flex-wrap items-center gap-3 my-8 pb-6 border-b border-[#e6e4dc]">
      {reportUrl && (
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#151927] text-white text-xs font-mono font-medium rounded hover:bg-[#252c44] transition-colors shadow-sm"
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
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#e6e4dc] bg-[#ffffff] text-[#151927] text-xs font-mono font-medium rounded hover:bg-[#f4f3ef] transition-colors"
        >
          <GitBranch size={14} className="text-[#767d8f]" />
          <span>Source Code</span>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#c94a2f]/40 bg-[#c94a2f]/5 text-[#c94a2f] text-xs font-mono font-medium rounded hover:bg-[#c94a2f]/10 transition-colors"
        >
          <ExternalLink size={14} />
          <span>Live Deployment</span>
        </a>
      )}
    </div>
  );
}
