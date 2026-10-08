import Link from "next/link";

interface ProjectFooterNavProps {
  backLabel?: string;
  backHref?: string;
  nextLabel?: string;
  nextHref?: string;
}

export function ProjectFooterNav({
  backLabel = "← Return to engineering builds",
  backHref = "/work",
  nextLabel = "Read writing & insights →",
  nextHref = "/notes",
}: ProjectFooterNavProps) {
  return (
    <div className="mt-16 pt-4 flex flex-wrap items-center justify-between gap-4 text-sm">
      <Link href={backHref} className="font-medium text-blue-600 hover:underline">
        {backLabel}
      </Link>
      <Link href={nextHref} className="text-gray-600 hover:text-gray-900 transition-colors">
        {nextLabel}
      </Link>
    </div>
  );
}
