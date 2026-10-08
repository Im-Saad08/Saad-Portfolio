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
    <div className="flex flex-wrap items-center gap-4 my-8">
      {reportUrl && (
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors"
        >
          {reportLabel}
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
        >
          GitHub Repository
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-blue-300 text-blue-700 text-sm font-medium rounded hover:bg-blue-50 transition-colors"
        >
          Live Demo ↗
        </a>
      )}
    </div>
  );
}
